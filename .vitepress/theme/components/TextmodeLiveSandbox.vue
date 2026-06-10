<template>
  <ClientOnly>
    <section
      class="textmode-live-sandbox"
      :class="sandboxClasses"
      :style="sandboxStyle"
      :aria-label="ariaLabel"
    >
      <div v-if="showHeader" class="textmode-live-sandbox__header">
        <div class="textmode-live-sandbox__title">
          <span class="textmode-live-sandbox__eyebrow">Live example</span>
          <span class="textmode-live-sandbox__hint">{{ headerHint }}</span>
        </div>
        <button
          v-if="canToggleCode"
          class="textmode-live-sandbox__toggle"
          type="button"
          :aria-expanded="isCodeVisible"
          @click="toggleCode"
        >
          {{ isCodeVisible ? 'Hide code' : 'Show code' }}
        </button>
      </div>

      <Sandpack
        v-if="hasRenderableFiles"
        :template="sandpackTemplate"
        :custom-setup="sandpackSetup"
        :files="sandpackFileMap"
        :options="sandpackOptions"
        :theme="theme"
      />
      <div v-else class="textmode-live-sandbox__placeholder" role="status">
        {{ placeholderMessage }}
      </div>
    </section>
  </ClientOnly>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance, onBeforeMount, onBeforeUnmount, onMounted, ref, useSlots, watch } from 'vue'
import { useData } from 'vitepress'
import { githubLight, sandpackDark } from '@codesandbox/sandpack-themes'
import { Sandpack, type SandpackFiles } from 'sandpack-vue3'
import {
  getFileAttributes,
  getSandpackFiles,
  parsedBoolean,
  parsedDeps,
  sandboxProps,
} from 'vitepress-plugin-sandpack'

defineOptions({ name: 'TextmodeLiveSandbox' })

type InitialView = 'preview' | 'split' | 'code'
type EncodedFileEntry = {
  active?: boolean
  code?: string
  hidden?: boolean
  info?: string
  path?: string
  readOnly?: boolean
}
type ProfileConfig = {
  scripts: string[]
}

const TEXTMODE_SANDPACK_CLASSES: Record<string, string> = {
  'sp-wrapper': 'textmode-live-sandpack-wrapper',
  'sp-layout': 'textmode-live-sandpack-layout',
  'sp-stack': 'textmode-live-sandpack-stack',
  'sp-editor': 'textmode-live-sandpack-editor',
  'sp-code-editor': 'textmode-live-sandpack-code-editor',
  'sp-preview': 'textmode-live-sandpack-preview',
  'sp-preview-actions': 'textmode-live-sandpack-preview-actions',
  'sp-preview-container': 'textmode-live-sandpack-preview-container',
  'sp-preview-iframe': 'textmode-live-sandpack-preview-iframe',
  'sp-resize-handler': 'textmode-live-sandpack-resize-handler',
}

let sandboxAttributePatchInstalled = false
let liveSandboxPageRefs = 0

const props = defineProps({
  ...sandboxProps,
  template: {
    type: String,
    default: 'static'
  },
  encodedCode: {
    type: String,
    default: ''
  },
  encodedFiles: {
    type: String,
    default: ''
  },
  previewHeight: {
    type: [Number, String],
    default: undefined
  },
  editorHeight: {
    type: [Number, String],
    default: undefined
  },
  coderHeight: {
    type: [Number, String],
    default: undefined
  },
  initialView: {
    type: String,
    default: 'preview'
  },
  language: {
    type: String,
    default: 'javascript'
  },
  profile: {
    type: String,
    default: 'textmode.js'
  },
  showHeader: {
    type: [Boolean, String],
    default: true
  },
  title: {
    type: String,
    default: ''
  }
})

installSandpackSandboxAttributePatch()

const TEXTMODE_SANDBOX_PROFILES: Record<string, ProfileConfig> = {
  'textmode.js': {
    scripts: [
      'https://unpkg.com/textmode.js@latest/dist/textmode.umd.js',
    ],
  },
  'textmode.synth.js': {
    scripts: [
      'https://unpkg.com/textmode.js@latest/dist/textmode.umd.js',
      'https://unpkg.com/textmode.synth.js@latest/dist/textmode.synth.umd.js',
    ],
  },
  'textmode.filters.js': {
    scripts: [
      'https://unpkg.com/textmode.js@latest/dist/textmode.umd.js',
      'https://unpkg.com/textmode.filters.js@latest/dist/textmode.filters.umd.js',
    ],
  },
  'textmode.figlet.js': {
    scripts: [
      'https://unpkg.com/textmode.js@latest/dist/textmode.umd.js',
      'https://unpkg.com/textmode.figlet.js@latest/dist/textmode.figlet.umd.js',
    ],
  },
  'textmode.export.js': {
    scripts: [
      'https://unpkg.com/textmode.js@latest/dist/textmode.umd.js',
      'https://unpkg.com/textmode.export.js@latest/dist/textmode.export.umd.js',
    ],
  },
  custom: {
    scripts: [],
  },
}

const slots = useSlots()
const instance = getCurrentInstance()
const { isDark } = useData()
const slotFiles = ref<SandpackFiles>({})
const slotFilesLoaded = ref(false)
const filesLoadError = ref('')
const isCodeVisible = ref(initialCodeVisible())

const showHeader = computed(() => parsedBoolean(props.showHeader))
const isEditorHidden = computed(() => parsedBoolean(props.hideEditor))
const canToggleCode = computed(() => !isEditorHidden.value)
const profileConfig = computed(() => (
  TEXTMODE_SANDBOX_PROFILES[props.profile] || TEXTMODE_SANDBOX_PROFILES['textmode.js']
))
const normalizedLanguage = computed(() => (
  props.language === 'typescript' || props.language === 'ts' ? 'typescript' : 'javascript'
))
const generatedSketchPath = computed(() => (
  normalizedLanguage.value === 'typescript' ? '/sketch.ts' : '/sketch.js'
))
const decodedSketchCode = computed(() => decodeBase64Url(props.encodedCode))
const encodedFileMap = computed(() => decodeEncodedFiles(props.encodedFiles))
const sourceFileMap = computed<SandpackFiles>(() => {
  if (Object.keys(encodedFileMap.value).length > 0) {
    return encodedFileMap.value
  }

  if (decodedSketchCode.value) {
    return {
      [generatedSketchPath.value]: {
        active: true,
        code: decodedSketchCode.value,
      },
    }
  }

  return slotFiles.value
})
const activeFile = computed(() => findActiveFile(sourceFileMap.value) || generatedSketchPath.value)
const sandpackFileMap = computed<SandpackFiles>(() => {
  const files = cloneFiles(sourceFileMap.value)
  const fileNames = Object.keys(files)

  if (fileNames.length === 0) {
    return files
  }

  if (!hasIndexHtml(files)) {
    files['/index.html'] = {
      hidden: true,
      code: createSandboxHtml(profileConfig.value.scripts, activeFile.value),
    }
  }

  if (files[activeFile.value]) {
    files[activeFile.value] = {
      ...files[activeFile.value],
      active: true,
    }
  }

  return files
})
const visibleFiles = computed(() => getVisibleFiles(sandpackFileMap.value, activeFile.value))
const hasCustomPreviewHeight = computed(() => hasDimensionSetting('previewHeight'))
const previewHeightValue = computed(() => dimensionProp('previewHeight', 440))
const editorHeightValue = computed(() => dimensionProp('editorHeight', dimensionProp('coderHeight', 420)))
const previewHeightPx = computed(() => `${previewHeightValue.value}px`)
const editorHeightPx = computed(() => `${editorHeightValue.value}px`)
const panelHeightPx = computed(() => `${Math.max(previewHeightValue.value, editorHeightValue.value)}px`)
const sandpackClasses = computed(() => mergeSandpackClassNames(props.options))
const theme = computed(() => isDark.value ? sandpackDark : githubLight)
const sandpackTemplate = computed(() => props.template || 'static')
const headerHint = computed(() => props.title ? `${props.title} - editable preview` : 'Editable Sandpack preview')
const ariaLabel = computed(() => props.title ? `${props.title} live code example` : 'Live code example')
const hasRenderableFiles = computed(() => Object.keys(sandpackFileMap.value).length > 0)
const placeholderMessage = computed(() => (
  filesLoadError.value || (slotFilesLoaded.value ? 'No live editor source files were found.' : 'Loading live editor...')
))
const sandboxClasses = computed(() => ({
  'has-custom-preview-height': hasCustomPreviewHeight.value,
  'is-code-visible': isCodeVisible.value && !isEditorHidden.value,
  'is-code-focused': normalizeInitialView(props.initialView) === 'code',
  'is-editor-hidden': isEditorHidden.value,
}))
const sandboxStyle = computed(() => ({
  '--textmode-live-preview-height': previewHeightPx.value,
  '--textmode-live-editor-height': editorHeightPx.value,
  '--textmode-live-panel-height': panelHeightPx.value,
}))
const sandpackSetup = computed(() => {
  const customSetup = props.customSetup && typeof props.customSetup === 'object'
    ? props.customSetup as Record<string, unknown>
    : {}

  return {
    ...customSetup,
    dependencies: normalizeDependencies(customSetup.dependencies ?? customSetup.deps ?? props.deps),
    devDependencies: normalizeDependencies(customSetup.devDependencies ?? customSetup.devDeps ?? props.devDeps),
    entry: props.entry || String(customSetup.entry || '/index.html'),
    environment: String(customSetup.environment || 'static'),
  }
})
const sandpackOptions = computed(() => {
  const codeFocused = normalizeInitialView(props.initialView) === 'code'

  return {
    activeFile: activeFile.value,
    autoReload: true,
    autorun: optionBool('autorun', true),
    closableTabs: optionBool('closableTabs', false),
    classes: sandpackClasses.value,
    // sandpack-vue3 uses editorHeight as the preset preview/layout height.
    // The editor stack is corrected separately with our own editor-height CSS.
    editorHeight: previewHeightValue.value,
    editorWidthPercentage: optionNumber('editorWidthPercentage', codeFocused ? 58 : 42),
    initMode: 'lazy',
    initModeObserverOptions: {
      rootMargin: '240px',
    },
    layout: 'preview',
    readOnly: optionBool('readOnly', false),
    recompileDelay: 250,
    recompileMode: 'delayed',
    resizablePanels: optionBool('resizablePanels', true),
    showConsoleButton: optionBool('showConsoleButton', true),
    showLineNumbers: optionBool('showLineNumbers', true),
    showNavigator: optionBool('showNavigator', false),
    showReadOnly: optionBool('showReadOnly', true),
    showRefreshButton: optionBool('showRefreshButton', true),
    showTabs: optionBool('showTabs', visibleFiles.value.length > 1),
    visibleFiles: visibleFiles.value,
    wrapContent: optionBool('wrapContent', false),
  }
})

watch(() => props.initialView, () => {
  isCodeVisible.value = initialCodeVisible()
})

watch(() => [props.codeOptions, props.template], () => {
  if (props.encodedCode || props.encodedFiles || import.meta.env.SSR) {
    return
  }

  slotFilesLoaded.value = false
  void loadSlotFiles()
})

onBeforeMount(() => {
  void loadSlotFiles()
})

onMounted(() => {
  liveSandboxPageRefs += 1
  document.documentElement.classList.add('has-textmode-live-sandbox')
  document.documentElement.classList.add('has-textmode-api-sandbox')
})

onBeforeUnmount(() => {
  liveSandboxPageRefs = Math.max(0, liveSandboxPageRefs - 1)
  if (liveSandboxPageRefs === 0) {
    document.documentElement.classList.remove('has-textmode-live-sandbox')
    document.documentElement.classList.remove('has-textmode-api-sandbox')
  }
})

async function loadSlotFiles() {
  if (props.encodedCode || props.encodedFiles || import.meta.env.SSR) {
    slotFilesLoaded.value = true
    return
  }

  filesLoadError.value = ''

  try {
    const files = await getSandpackFiles(props, slots)
    slotFiles.value = files

    if (Object.keys(files).length === 0) {
      filesLoadError.value = 'No live editor source files were found.'
    }
  } catch (error) {
    filesLoadError.value = 'Unable to load this live editor.'
    console.warn('[TextmodeLiveSandbox] Failed to load Sandpack files.', error)
  } finally {
    slotFilesLoaded.value = true
  }
}

function toggleCode() {
  isCodeVisible.value = !isCodeVisible.value
}

function initialCodeVisible() {
  if (parsedBoolean(props.hideEditor)) {
    return false
  }

  return normalizeInitialView(props.initialView) !== 'preview'
}

function normalizeInitialView(value: string): InitialView {
  return value === 'split' || value === 'code' ? value : 'preview'
}

function optionBool(name: string, fallback: boolean) {
  const options = props.options as Record<string, unknown> | undefined
  if (options && name in options) {
    return parsedBoolean(options[name] as boolean | string)
  }

  if (hasExplicitProp(name)) {
    return parsedBoolean((props as Record<string, unknown>)[name] as boolean | string)
  }

  return fallback
}

function optionNumber(name: string, fallback: number) {
  const options = props.options as Record<string, unknown> | undefined
  const optionValue = options?.[name]
  const parsedOptionValue = toFiniteNumber(optionValue)
  if (parsedOptionValue !== undefined) {
    return parsedOptionValue
  }

  return numberProp(name, fallback)
}

function dimensionProp(name: string, fallback: number) {
  const options = props.options as Record<string, unknown> | undefined
  const optionValue = options?.[name]
  const parsedOptionValue = toPositiveNumber(optionValue)
  if (parsedOptionValue !== undefined) {
    return parsedOptionValue
  }

  return numberProp(name, fallback)
}

function numberProp(name: string, fallback: number) {
  const value = (props as Record<string, unknown>)[name]
  const parsedValue = toPositiveNumber(value)
  if (parsedValue !== undefined) {
    return parsedValue
  }

  return fallback
}

function hasDimensionSetting(name: string) {
  const options = props.options as Record<string, unknown> | undefined
  const optionValue = options?.[name]
  const propValue = (props as Record<string, unknown>)[name]

  return (hasExplicitProp(name) && toPositiveNumber(propValue) !== undefined)
    || toPositiveNumber(optionValue) !== undefined
}

function hasExplicitProp(name: string) {
  const rawProps = instance?.vnode.props as Record<string, unknown> | null | undefined
  if (!rawProps) return false

  return name in rawProps || toKebabCase(name) in rawProps || name.toLowerCase() in rawProps
}

function normalizeDependencies(value: unknown) {
  if (!value) return {}
  if (typeof value === 'string') return parsedDeps(value) || {}
  if (typeof value === 'object') return value as Record<string, string>
  return {}
}

function mergeSandpackClassNames(options: unknown) {
  const optionClasses = options && typeof options === 'object'
    ? (options as Record<string, unknown>).classes
    : undefined
  const classes = optionClasses && typeof optionClasses === 'object'
    ? { ...(optionClasses as Record<string, string>) }
    : {}

  for (const [key, className] of Object.entries(TEXTMODE_SANDPACK_CLASSES)) {
    classes[key] = [classes[key], className].filter(Boolean).join(' ')
  }

  return classes
}

function toFiniteNumber(value: unknown) {
  if (value === undefined || value === null || value === '') {
    return undefined
  }

  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : undefined
}

function toPositiveNumber(value: unknown) {
  const parsed = toFiniteNumber(value)
  return parsed !== undefined && parsed > 0 ? parsed : undefined
}

function cloneFiles(files: SandpackFiles): SandpackFiles {
  const output: SandpackFiles = {}

  for (const [path, file] of Object.entries(files)) {
    output[path] = typeof file === 'string' ? file : { ...file }
  }

  return output
}

function hasIndexHtml(files: SandpackFiles) {
  return Object.keys(files).some((file) => file === '/index.html' || file === 'index.html')
}

function findActiveFile(files: SandpackFiles) {
  for (const [path, file] of Object.entries(files)) {
    if (typeof file !== 'string' && file.active) {
      return path
    }
  }

  return Object.keys(files).find((file) => /\.(?:[cm]?[jt]sx?|vue|html)$/.test(file))
}

function getVisibleFiles(files: SandpackFiles, fallbackActiveFile: string) {
  const visible = Object.entries(files)
    .filter(([, file]) => typeof file === 'string' || !file.hidden)
    .map(([path]) => path)

  if (!visible.includes(fallbackActiveFile) && files[fallbackActiveFile]) {
    visible.push(fallbackActiveFile)
  }

  return visible
}

function decodeEncodedFiles(encodedFiles: string): SandpackFiles {
  const decoded = decodeBase64Url(encodedFiles)
  if (!decoded) return {}

  try {
    const parsed = JSON.parse(decoded)

    if (Array.isArray(parsed)) {
      return parsed.reduce<SandpackFiles>((files, file) => {
        const entry = normalizeEncodedFileEntry(file)
        if (!entry?.path || entry.code === undefined) return files

        files[entry.path] = {
          active: entry.active,
          code: entry.code,
          hidden: entry.hidden,
          readOnly: entry.readOnly,
        }

        return files
      }, {})
    }

    if (parsed && typeof parsed === 'object') {
      return Object.entries(parsed as Record<string, unknown>).reduce<SandpackFiles>((files, [path, value]) => {
        if (typeof value === 'string') {
          files[normalizePath(path)] = value
        } else {
          const entry = normalizeEncodedFileEntry({ ...(value as EncodedFileEntry), path })
          if (entry?.code === undefined) return files

          files[entry.path] = {
            active: entry.active,
            code: entry.code,
            hidden: entry.hidden,
            readOnly: entry.readOnly,
          }
        }

        return files
      }, {})
    }
  } catch {
    return {}
  }

  return {}
}

function normalizeEncodedFileEntry(value: unknown): EncodedFileEntry | undefined {
  if (!value || typeof value !== 'object') return undefined

  const file = value as EncodedFileEntry
  const attributes = getFileAttributes(file.info || file.path || '', props.template)
  const path = normalizePath(file.path || attributes.path || '')
  if (!path) return undefined

  return {
    active: file.active ?? attributes.active,
    code: file.code,
    hidden: file.hidden ?? attributes.hidden,
    path,
    readOnly: file.readOnly ?? attributes.readOnly,
  }
}

function normalizePath(path: string) {
  if (!path) return ''
  return path.startsWith('/') ? path : `/${path}`
}

function createSandboxHtml(scripts: string[], activeScript: string) {
  return [
    '<!DOCTYPE html>',
    '<html lang="en">',
    '  <head>',
    '    <title>Textmode Live Sandbox</title>',
    '    <meta charset="UTF-8" />',
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
    '    <style>',
    '      html,',
    '      body {',
    '        width: 100%;',
    '        height: 100%;',
    '        margin: 0;',
    '        padding: 0;',
    '        overflow: hidden;',
    '        background: #000;',
    '      }',
    '',
    '      * {',
    '        box-sizing: border-box;',
    '      }',
    '',
    '      body {',
    '        position: fixed;',
    '        inset: 0;',
    '      }',
    '',
    '      canvas {',
    '        display: block;',
    '      }',
    '    </style>',
    ...scripts.map((script) => `    <script src="${escapeHtmlAttribute(script)}"></` + 'script>'),
    `    <script type="module" src="${escapeHtmlAttribute(activeScript)}"></` + 'script>',
    '  </head>',
    '  <body></body>',
    '</html>',
  ].join('\n')
}

function escapeHtmlAttribute(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function decodeBase64Url(value: string) {
  if (!value || import.meta.env.SSR) return ''

  try {
    const base64 = value
      .replace(/-/g, '+')
      .replace(/_/g, '/')
      .padEnd(Math.ceil(value.length / 4) * 4, '=')
    const binary = window.atob(base64)
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0))
    return new TextDecoder().decode(bytes)
  } catch {
    return ''
  }
}

function installSandpackSandboxAttributePatch() {
  if (import.meta.env.SSR || sandboxAttributePatchInstalled) {
    return
  }

  sandboxAttributePatchInstalled = true

  const originalSetAttribute = HTMLIFrameElement.prototype.setAttribute
  HTMLIFrameElement.prototype.setAttribute = function patchedSetAttribute(name: string, value: string) {
    if (name === 'sandbox' && typeof value === 'string') {
      return originalSetAttribute.call(this, name, stripUnsupportedSandboxFlags(value))
    }

    return originalSetAttribute.call(this, name, value)
  }
}

function stripUnsupportedSandboxFlags(value: string) {
  return value
    .split(/\s+/)
    .filter((flag) => flag && flag !== 'allow-presentation')
    .join(' ')
}

function toKebabCase(value: string) {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
}
</script>

<style scoped>
.textmode-live-sandbox {
  --textmode-live-preview-height: 440px;
  --textmode-live-editor-height: 420px;
  --textmode-live-panel-height: 440px;

  margin: 24px 0;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
}

.textmode-live-sandbox__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 40px;
  padding: 8px 12px;
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 12px;
  line-height: 1.4;
}

.textmode-live-sandbox__title {
  display: flex;
  align-items: baseline;
  min-width: 0;
  gap: 8px;
}

.textmode-live-sandbox__eyebrow {
  color: var(--vp-c-text-1);
  font-weight: 700;
  white-space: nowrap;
}

.textmode-live-sandbox__hint {
  overflow: hidden;
  color: var(--vp-c-text-2);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.textmode-live-sandbox__toggle {
  flex: 0 0 auto;
  min-width: 88px;
  min-height: 28px;
  padding: 4px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
  font-size: 12px;
  font-weight: 650;
  line-height: 1.2;
  transition:
    border-color 160ms ease,
    background-color 160ms ease,
    color 160ms ease;
}

.textmode-live-sandbox__toggle:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.textmode-live-sandbox__toggle:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.textmode-live-sandbox__placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: var(--textmode-live-preview-height);
  padding: 24px;
  background: #000;
  color: rgba(255, 255, 255, 0.72);
  font-size: 13px;
  line-height: 1.5;
  text-align: center;
}

.textmode-live-sandbox :deep(.textmode-live-sandpack-wrapper) {
  border: 0;
  border-radius: 0;
  height: var(--textmode-live-preview-height) !important;
  min-height: var(--textmode-live-preview-height);
}

.textmode-live-sandbox :deep(.textmode-live-sandpack-layout) {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  border-radius: 0;
  height: var(--textmode-live-preview-height) !important;
  min-height: var(--textmode-live-preview-height);
}

.textmode-live-sandbox.is-code-visible :deep(.textmode-live-sandpack-wrapper),
.textmode-live-sandbox.is-code-visible :deep(.textmode-live-sandpack-layout) {
  height: var(--textmode-live-panel-height) !important;
  min-height: var(--textmode-live-panel-height);
}

.textmode-live-sandbox :deep(.textmode-live-sandpack-stack) {
  min-height: 0;
  min-width: 0 !important;
}

.textmode-live-sandbox :deep(.textmode-live-sandpack-layout > .sp-preset-column),
.textmode-live-sandbox :deep(.textmode-live-sandpack-layout > .textmode-live-sandpack-preview) {
  height: var(--textmode-live-preview-height) !important;
  min-height: var(--textmode-live-preview-height);
}

.textmode-live-sandbox :deep(.textmode-live-sandpack-editor) {
  display: flex;
  flex-direction: column;
  height: var(--textmode-live-editor-height) !important;
  min-height: var(--textmode-live-editor-height);
  overflow: hidden;
}

.textmode-live-sandbox.is-code-visible :deep(.textmode-live-sandpack-layout > .sp-preset-column),
.textmode-live-sandbox.is-code-visible :deep(.textmode-live-sandpack-layout > .textmode-live-sandpack-preview),
.textmode-live-sandbox.is-code-visible :deep(.textmode-live-sandpack-editor) {
  height: var(--textmode-live-panel-height) !important;
  min-height: var(--textmode-live-panel-height);
}

.textmode-live-sandbox:not(.is-code-visible) :deep(.textmode-live-sandpack-editor),
.textmode-live-sandbox:not(.is-code-visible) :deep(.textmode-live-sandpack-resize-handler[data-direction="horizontal"]),
.textmode-live-sandbox.is-editor-hidden :deep(.textmode-live-sandpack-editor),
.textmode-live-sandbox.is-editor-hidden :deep(.textmode-live-sandpack-resize-handler[data-direction="horizontal"]) {
  display: none !important;
}

.textmode-live-sandbox:not(.is-code-visible) :deep(.textmode-live-sandpack-preview),
.textmode-live-sandbox:not(.is-code-visible) :deep(.sp-preset-column),
.textmode-live-sandbox.is-editor-hidden :deep(.textmode-live-sandpack-preview),
.textmode-live-sandbox.is-editor-hidden :deep(.sp-preset-column) {
  flex: 1 1 100% !important;
  width: 100% !important;
}

.textmode-live-sandbox :deep(.textmode-live-sandpack-code-editor) {
  flex: 1 1 auto !important;
  height: auto !important;
  min-height: 0;
}

.textmode-live-sandbox :deep(.sp-cm),
.textmode-live-sandbox :deep(.cm-editor) {
  height: 100% !important;
  min-height: 0;
}

.textmode-live-sandbox :deep(.cm-scroller) {
  height: 100%;
  min-height: 0;
  overflow: auto;
}

.textmode-live-sandbox :deep(.textmode-live-sandpack-preview-container),
.textmode-live-sandbox :deep(.textmode-live-sandpack-preview-iframe) {
  height: 100% !important;
  min-height: 100% !important;
}

.textmode-live-sandbox :deep(.textmode-live-sandpack-preview),
.textmode-live-sandbox :deep(.textmode-live-sandpack-preview-container) {
  margin: 0 !important;
  padding: 0 !important;
  background: #000 !important;
  overflow: hidden;
}

.textmode-live-sandbox :deep(.textmode-live-sandpack-preview-container) {
  display: block;
  width: 100% !important;
}

.textmode-live-sandbox :deep(.textmode-live-sandpack-preview-iframe) {
  display: block;
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  border: 0 !important;
  background: #000 !important;
  vertical-align: top;
}

.textmode-live-sandbox :deep(.textmode-live-sandpack-preview-actions a),
.textmode-live-sandbox :deep(.textmode-live-sandpack-preview-actions button) {
  color: var(--sp-colors-clickable) !important;
  font-weight: inherit;
  text-decoration: none !important;
}

.textmode-live-sandbox :deep(.textmode-live-sandpack-preview-actions a:hover),
.textmode-live-sandbox :deep(.textmode-live-sandpack-preview-actions button:hover) {
  color: var(--sp-colors-hover) !important;
  text-decoration: none !important;
}

@media (max-width: 768px) {
  .textmode-live-sandbox :deep(.textmode-live-sandpack-layout) {
    flex-direction: column;
  }

  .textmode-live-sandbox.is-code-visible :deep(.textmode-live-sandpack-wrapper),
  .textmode-live-sandbox.is-code-visible :deep(.textmode-live-sandpack-layout) {
    height: auto !important;
  }

  .textmode-live-sandbox.is-code-visible :deep(.textmode-live-sandpack-layout > .textmode-live-sandpack-stack),
  .textmode-live-sandbox.is-code-visible :deep(.textmode-live-sandpack-preview) {
    flex: 0 0 auto !important;
    min-width: 100% !important;
    width: 100% !important;
  }

  .textmode-live-sandbox.is-code-visible :deep(.textmode-live-sandpack-editor) {
    height: var(--textmode-live-editor-height) !important;
    min-height: var(--textmode-live-editor-height);
  }

  .textmode-live-sandbox.is-code-visible :deep(.textmode-live-sandpack-layout > .sp-preset-column),
  .textmode-live-sandbox.is-code-visible :deep(.textmode-live-sandpack-layout > .textmode-live-sandpack-preview) {
    height: var(--textmode-live-preview-height) !important;
    min-height: var(--textmode-live-preview-height);
  }

  .textmode-live-sandbox.is-code-visible :deep(.textmode-live-sandpack-resize-handler[data-direction="horizontal"]) {
    display: none !important;
  }
}

@media (max-width: 560px) {
  .textmode-live-sandbox__header {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }

  .textmode-live-sandbox__title {
    align-items: flex-start;
    flex-direction: column;
    gap: 2px;
  }

  .textmode-live-sandbox__hint {
    text-align: left;
    white-space: normal;
  }

  .textmode-live-sandbox__toggle {
    width: 100%;
  }
}
</style>
