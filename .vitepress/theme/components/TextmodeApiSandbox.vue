<template>
  <ClientOnly>
    <section
      class="textmode-api-sandbox"
      :class="{ 'is-code-visible': isCodeVisible }"
      :style="sandboxStyle"
      aria-label="Live API example"
    >
      <div class="textmode-api-sandbox__header">
        <div class="textmode-api-sandbox__title">
          <span class="textmode-api-sandbox__eyebrow">Live example</span>
          <span class="textmode-api-sandbox__hint">Editable Sandpack preview</span>
        </div>
        <button
          class="textmode-api-sandbox__toggle"
          type="button"
          :aria-expanded="isCodeVisible"
          @click="toggleCode"
        >
          {{ isCodeVisible ? 'Hide code' : 'Show code' }}
        </button>
      </div>

      <Sandpack
        :custom-setup="sandpackSetup"
        :files="sandpackFileMap"
        :options="sandpackOptions"
        :theme="theme"
      />
    </section>
  </ClientOnly>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import { githubLight, sandpackDark } from '@codesandbox/sandpack-themes'
import { Sandpack, type SandpackFiles } from 'sandpack-vue3'
import { sandboxProps } from 'vitepress-plugin-sandpack'

defineOptions({ name: 'TextmodeApiSandbox' })

let sandboxAttributePatchInstalled = false
let liveApiSandboxPageRefs = 0

const props = defineProps({
  ...sandboxProps,
  encodedCode: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: 'javascript'
  },
  profile: {
    type: String,
    default: 'textmode.js'
  },
  title: {
    type: String,
    default: ''
  }
})

installSandpackSandboxAttributePatch()

const API_SANDBOX_PROFILES: Record<string, { scripts: string[] }> = {
  'textmode.js': {
    scripts: [
      'https://unpkg.com/textmode.js@0.16.0-beta.1/dist/textmode.umd.js',
    ],
  },
  'textmode.synth.js': {
    scripts: [
      'https://unpkg.com/textmode.js@0.16.0-beta.1/dist/textmode.umd.js',
      'https://unpkg.com/textmode.synth.js@1.6.0/dist/textmode.synth.umd.js',
    ],
  },
  'textmode.filters.js': {
    scripts: [
      'https://unpkg.com/textmode.js@0.16.0-beta.1/dist/textmode.umd.js',
      'https://unpkg.com/textmode.filters.js@1.1.1/dist/textmode.filters.umd.js',
    ],
  },
  'textmode.figlet.js': {
    scripts: [
      'https://unpkg.com/textmode.js@0.16.0-beta.1/dist/textmode.umd.js',
      'https://unpkg.com/textmode.figlet.js@1.0.0/dist/textmode.figlet.umd.js',
    ],
  },
  'textmode.export.js': {
    scripts: [
      'https://unpkg.com/textmode.js@0.16.0-beta.1/dist/textmode.umd.js',
      'https://unpkg.com/textmode.export.js@1.2.1/dist/textmode.export.umd.js',
    ],
  },
}

const { isDark } = useData()
const isCodeVisible = ref(false)
const profileConfig = computed(() => API_SANDBOX_PROFILES[props.profile] || API_SANDBOX_PROFILES['textmode.js'])
const sketchCode = computed(() => decodeCode(props.encodedCode))
const sandpackFileMap = computed<SandpackFiles>(() => {
  return {
    '/index.html': {
      hidden: true,
      code: createSandboxHtml(profileConfig.value.scripts),
    },
    '/sketch.js': {
      active: true,
      code: sketchCode.value,
    },
  }
})
const sandpackSetup = computed(() => ({
  dependencies: {},
  entry: '/index.html',
  environment: 'static',
}))
const sandpackOptions = computed(() => ({
  activeFile: '/sketch.js',
  autoReload: true,
  autorun: true,
  closableTabs: false,
  editorHeight: Number(props.coderHeight) || 420,
  editorWidthPercentage: 42,
  initMode: 'lazy',
  layout: 'preview',
  readOnly: false,
  recompileDelay: 250,
  recompileMode: 'delayed',
  resizablePanels: true,
  showConsoleButton: true,
  showLineNumbers: true,
  showNavigator: false,
  showReadOnly: true,
  showRefreshButton: true,
  showTabs: false,
  visibleFiles: ['/sketch.js'],
  wrapContent: false,
}))
const theme = computed(() => isDark.value ? sandpackDark : githubLight)

const layoutHeight = computed(() => `${Number(props.previewHeight) || 440}px`)
const editorHeight = computed(() => `${Number(props.coderHeight) || 420}px`)
const sandboxStyle = computed(() => ({
  '--sp-layout-height': layoutHeight.value,
  '--textmode-api-sandbox-editor-height': editorHeight.value,
}))

onMounted(() => {
  liveApiSandboxPageRefs += 1
  document.documentElement.classList.add('has-textmode-api-sandbox')
})

onBeforeUnmount(() => {
  liveApiSandboxPageRefs = Math.max(0, liveApiSandboxPageRefs - 1)
  if (liveApiSandboxPageRefs === 0) {
    document.documentElement.classList.remove('has-textmode-api-sandbox')
  }
})

function toggleCode() {
  isCodeVisible.value = !isCodeVisible.value
}

function createSandboxHtml(scripts: string[]) {
  return [
    '<!DOCTYPE html>',
    '<html>',
    '  <head>',
    '    <title>Textmode API Sandbox</title>',
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
    '    <script type="module" src="/sketch.js"></' + 'script>',
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

function decodeCode(encodedCode: string) {
  if (!encodedCode || import.meta.env.SSR) return ''

  try {
    const base64 = encodedCode
      .replace(/-/g, '+')
      .replace(/_/g, '/')
      .padEnd(Math.ceil(encodedCode.length / 4) * 4, '=')
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
</script>

<style scoped>
.textmode-api-sandbox {
  margin: 24px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  overflow: hidden;
}

.textmode-api-sandbox__header {
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

.textmode-api-sandbox__title {
  display: flex;
  align-items: baseline;
  gap: 8px;
  min-width: 0;
}

.textmode-api-sandbox__eyebrow {
  color: var(--vp-c-text-1);
  font-weight: 700;
  white-space: nowrap;
}

.textmode-api-sandbox__hint {
  overflow: hidden;
  color: var(--vp-c-text-2);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.textmode-api-sandbox__toggle {
  flex: 0 0 auto;
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

.textmode-api-sandbox__toggle:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.textmode-api-sandbox :deep(.sp-wrapper) {
  border: 0;
  border-radius: 0;
}

.textmode-api-sandbox :deep(.sp-layout) {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  border-radius: 0;
}

.textmode-api-sandbox :deep(.sp-layout > .sp-stack) {
  min-width: 0 !important;
}

.textmode-api-sandbox:not(.is-code-visible) :deep(.sp-editor),
.textmode-api-sandbox:not(.is-code-visible) :deep(.sp-resize-handler[data-direction="horizontal"]) {
  display: none !important;
}

.textmode-api-sandbox:not(.is-code-visible) :deep(.sp-preview),
.textmode-api-sandbox:not(.is-code-visible) :deep(.sp-preset-column) {
  flex: 1 1 100% !important;
  width: 100% !important;
}

.textmode-api-sandbox :deep(.sp-editor),
.textmode-api-sandbox :deep(.sp-code-editor),
.textmode-api-sandbox :deep(.cm-editor) {
  height: var(--textmode-api-sandbox-editor-height);
}

.textmode-api-sandbox :deep(.cm-scroller) {
  overflow: auto;
}

.textmode-api-sandbox :deep(.sp-preview-container),
.textmode-api-sandbox :deep(.sp-preview),
.textmode-api-sandbox :deep(.sp-preview-iframe),
.textmode-api-sandbox :deep(iframe) {
  min-height: var(--sp-layout-height) !important;
}

.textmode-api-sandbox :deep(.sp-preview),
.textmode-api-sandbox :deep(.sp-preview-container) {
  margin: 0 !important;
  padding: 0 !important;
  background: #000 !important;
  overflow: hidden;
}

.textmode-api-sandbox :deep(.sp-preview-container) {
  display: block;
  width: 100% !important;
}

.textmode-api-sandbox :deep(.sp-preview-iframe),
.textmode-api-sandbox :deep(iframe) {
  display: block;
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  border: 0 !important;
  background: #000 !important;
  vertical-align: top;
}

@media (max-width: 768px) {
  .textmode-api-sandbox :deep(.sp-layout) {
    flex-direction: column;
  }

  .textmode-api-sandbox.is-code-visible :deep(.sp-layout > .sp-stack),
  .textmode-api-sandbox.is-code-visible :deep(.sp-preview) {
    flex: 0 0 auto !important;
    min-width: 100% !important;
    width: 100% !important;
  }

  .textmode-api-sandbox.is-code-visible :deep(.sp-resize-handler[data-direction="horizontal"]) {
    display: none !important;
  }
}

@media (max-width: 560px) {
  .textmode-api-sandbox__header {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }

  .textmode-api-sandbox__title {
    align-items: flex-start;
    flex-direction: column;
    gap: 2px;
  }

  .textmode-api-sandbox__hint {
    text-align: left;
    white-space: normal;
  }

  .textmode-api-sandbox__toggle {
    width: 100%;
  }
}
</style>
