<template>
  <div class="example-sketch-browser">
    <div class="example-sketch-browser__toolbar" aria-label="Example sketch navigation">
      <button
        class="example-sketch-browser__button"
        type="button"
        title="Previous sketch"
        aria-label="Previous sketch"
        :disabled="!hasSketches || isSwitching"
        @click="showPreviousSketch"
      >
        <UiIcon name="lucide:chevron-left" size="sm" />
      </button>

      <div class="example-sketch-browser__counter" aria-live="polite">
        {{ currentPosition }} / {{ sketchIds.length }}
      </div>

      <button
        class="example-sketch-browser__button"
        type="button"
        title="Random sketch"
        aria-label="Random sketch"
        :disabled="!canRandomize || isSwitching"
        @click="showRandomSketch"
      >
        <UiIcon name="lucide:shuffle" size="sm" />
      </button>

      <button
        class="example-sketch-browser__button"
        type="button"
        title="Next sketch"
        aria-label="Next sketch"
        :disabled="!hasSketches || isSwitching"
        @click="showNextSketch"
      >
        <UiIcon name="lucide:chevron-right" size="sm" />
      </button>

      <button
        class="example-sketch-browser__button example-sketch-browser__button--wide"
        type="button"
        :title="isSourceOpen ? 'Hide source code' : 'Show source code'"
        :aria-label="isSourceOpen ? 'Hide source code' : 'Show source code'"
        :aria-expanded="isSourceOpen"
        :disabled="!hasSourceFiles || isSwitching"
        @click="toggleSource"
      >
        <UiIcon name="lucide:code-2" size="sm" />
        <span>{{ isSourceOpen ? 'Hide code' : 'Show code' }}</span>
      </button>
    </div>

    <div
      ref="browserWrapperRef"
      class="example-sketch-browser__stage"
      :class="{ 'example-sketch-browser__stage--switching': isSwitching }"
      :aria-busy="isSwitching"
    >
      <Transition
        :name="transitionName"
        mode="out-in"
        @after-enter="finishSwitch"
        @after-leave="cleanupRetiredSandpackElements"
      >
        <div
          v-if="currentSketchComponent"
          :key="`${renderKey}-${currentSketchId}`"
          class="example-sketch-browser__sketch"
        >
          <component :is="currentSketchComponent" />
        </div>
      </Transition>

      <Transition name="example-sketch-browser__veil">
        <div
          v-if="isSwitching"
          class="example-sketch-browser__loading"
          aria-hidden="true"
        >
          <div class="example-sketch-browser__loading-bar" />
        </div>
      </Transition>
    </div>

    <Transition name="example-sketch-browser__source">
      <section
        v-if="isSourceOpen && hasSourceFiles"
        class="example-sketch-browser__source"
        aria-label="Current sketch source"
      >
        <div class="example-sketch-browser__source-header">
          <div
            class="example-sketch-browser__source-tabs"
            role="tablist"
            aria-label="Sketch source files"
          >
            <button
              v-for="file in currentSourceFiles"
              :key="file.path"
              class="example-sketch-browser__source-tab"
              :class="{ 'example-sketch-browser__source-tab--active': file.path === selectedSourcePath }"
              type="button"
              role="tab"
              :aria-selected="file.path === selectedSourcePath"
              @click="selectSourceFile(file.path)"
            >
              {{ file.label }}
            </button>
          </div>

          <button
            class="example-sketch-browser__source-copy"
            type="button"
            :disabled="!selectedSourceFile"
            @click="copySelectedSource"
          >
            <UiIcon name="lucide:copy" size="sm" />
            <span>{{ copyStatus }}</span>
          </button>
        </div>

        <pre class="example-sketch-browser__source-code" tabindex="0"><code>{{ selectedSourceFile?.code }}</code></pre>
      </section>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, nextTick, onBeforeUnmount, ref, watch, type Component } from 'vue'
import sketchMetadata from '../../../data/sketches.json'
import { UiIcon } from '../ui'

defineOptions({ name: 'ExampleSketchBrowser' })

interface SketchMeta {
  title: string
  author: string
  authorUrl?: string
  featured?: boolean
}

interface SourceFile {
  active: boolean
  code: string
  label: string
  language: string
  path: string
  readOnly: boolean
}

type SketchMetadataMap = Record<string, SketchMeta>
type SwitchDirection = 'next' | 'previous' | 'random'

const showcaseModules = import.meta.glob<Component>(
  '../../../../docs/examples/showcase/*.md'
)
const showcaseSourceModules = import.meta.glob<string>(
  '../../../../docs/examples/showcase/*.md',
  {
    eager: true,
    import: 'default',
    query: '?raw',
  }
)

const CODE_SANDBOX_ENDPOINT = 'https://codesandbox.io/api/v1/sandboxes/define'

function getSketchLoader(sketchId: string): (() => Promise<Component>) | undefined {
  const path = `../../../../docs/examples/showcase/${sketchId}.md`
  return showcaseModules[path] as (() => Promise<Component>) | undefined
}

function getSketchSource(sketchId: string): string {
  const path = `../../../../docs/examples/showcase/${sketchId}.md`
  return showcaseSourceModules[path] ?? ''
}

const sketchIds = Object.entries(sketchMetadata as SketchMetadataMap)
  .filter(([id, data]) => data.featured === true && Boolean(getSketchLoader(id)))
  .map(([id]) => id)

const sketchComponents = sketchIds.reduce<Record<string, ReturnType<typeof defineAsyncComponent>>>(
  (components, sketchId) => {
    const loader = getSketchLoader(sketchId)
    if (loader) {
      components[sketchId] = defineAsyncComponent(loader)
    }
    return components
  },
  {}
)

const browserWrapperRef = ref<HTMLElement | null>(null)
const currentIndex = ref(0)
const renderKey = ref(0)
const isSwitching = ref(false)
const isOpeningSandbox = ref(false)
const isSourceOpen = ref(false)
const selectedSourcePath = ref('')
const copyStatus = ref('Copy')
const switchDirection = ref<SwitchDirection>('next')
let switchFallbackTimer: ReturnType<typeof setTimeout> | null = null
let copyStatusTimer: ReturnType<typeof setTimeout> | null = null

const hasSketches = computed(() => sketchIds.length > 0)
const canRandomize = computed(() => sketchIds.length > 1)
const currentSketchId = computed(() => sketchIds[currentIndex.value] ?? null)
const currentSketchComponent = computed(() => {
  if (!currentSketchId.value) {
    return null
  }
  return sketchComponents[currentSketchId.value] ?? null
})
const currentSourceFiles = computed(() => {
  if (!currentSketchId.value) {
    return []
  }

  return extractSourceFiles(getSketchSource(currentSketchId.value))
})
const hasSourceFiles = computed(() => currentSourceFiles.value.length > 0)
const selectedSourceFile = computed(() => {
  return currentSourceFiles.value.find((file) => file.path === selectedSourcePath.value)
    ?? currentSourceFiles.value.find((file) => file.active)
    ?? currentSourceFiles.value[0]
    ?? null
})
const currentPosition = computed(() => {
  return hasSketches.value ? currentIndex.value + 1 : 0
})
const transitionName = computed(() => {
  if (switchDirection.value === 'previous') {
    return 'example-sketch-browser__slide-previous'
  }

  if (switchDirection.value === 'random') {
    return 'example-sketch-browser__switch-random'
  }

  return 'example-sketch-browser__slide-next'
})

function clearSwitchFallbackTimer() {
  if (switchFallbackTimer) {
    clearTimeout(switchFallbackTimer)
    switchFallbackTimer = null
  }
}

function clearCopyStatusTimer() {
  if (copyStatusTimer) {
    clearTimeout(copyStatusTimer)
    copyStatusTimer = null
  }
}

function finishSwitch() {
  if (!isSwitching.value) {
    return
  }

  clearSwitchFallbackTimer()
  isSwitching.value = false
}

function cleanupRetiredSandpackElements() {
  cleanupSandpackElements({ includeHiddenBodyIframes: true })
}

function cleanupSandpackElements(options: { includeHiddenBodyIframes?: boolean } = {}) {
  if (typeof document === 'undefined') {
    return
  }

  const orphanedIframes = document.querySelectorAll(
    'iframe[src*="sandpack"], iframe[src*="codesandbox"], iframe[data-sandpack]'
  )

  orphanedIframes.forEach((iframe) => {
    if (browserWrapperRef.value && !browserWrapperRef.value.contains(iframe)) {
      try {
        (iframe as HTMLIFrameElement).src = 'about:blank'
      } catch (error) {
        // Cross-origin iframes may reject src mutation during teardown.
      }
      iframe.remove()
    }
  })

  if (!options.includeHiddenBodyIframes) {
    return
  }

  const hiddenIframes = document.querySelectorAll('body > iframe[style*="display: none"]')
  hiddenIframes.forEach((iframe) => {
    const src = (iframe as HTMLIFrameElement).src || ''
    if (src.includes('sandpack') || src.includes('codesandbox')) {
      try {
        (iframe as HTMLIFrameElement).src = 'about:blank'
      } catch (error) {
        // Cross-origin iframes may reject src mutation during teardown.
      }
      iframe.remove()
    }
  })
}

async function showSketch(nextIndex: number, direction: SwitchDirection) {
  if (!hasSketches.value || isSwitching.value) {
    return
  }

  const normalizedIndex = (nextIndex + sketchIds.length) % sketchIds.length
  if (normalizedIndex === currentIndex.value) {
    return
  }

  const nextSketchId = sketchIds[normalizedIndex]
  const loader = getSketchLoader(nextSketchId)

  clearSwitchFallbackTimer()
  switchDirection.value = direction
  isSwitching.value = true

  try {
    if (loader) {
      await loader()
    }
  } catch (error) {
    console.error(`Failed to load example sketch "${nextSketchId}".`, error)
    finishSwitch()
    return
  }

  currentIndex.value = normalizedIndex
  renderKey.value += 1

  await nextTick()
  switchFallbackTimer = setTimeout(finishSwitch, 1500)
}

function toggleSource() {
  isSourceOpen.value = !isSourceOpen.value
}

function selectSourceFile(path: string) {
  selectedSourcePath.value = path
}

async function copySelectedSource() {
  if (!selectedSourceFile.value || typeof navigator === 'undefined' || !navigator.clipboard) {
    return
  }

  try {
    await navigator.clipboard.writeText(selectedSourceFile.value.code)
    copyStatus.value = 'Copied'
  } catch (error) {
    copyStatus.value = 'Copy failed'
  } finally {
    clearCopyStatusTimer()
    copyStatusTimer = setTimeout(() => {
      copyStatus.value = 'Copy'
    }, 1600)
  }
}

async function openCurrentSketchInCodeSandbox() {
  if (!selectedSourceFile.value || isOpeningSandbox.value) {
    return
  }

  isOpeningSandbox.value = true
  const sandboxWindow = window.open('about:blank', '_blank')
  if (sandboxWindow) {
    sandboxWindow.opener = null
  }

  try {
    const url = await buildCodeSandboxUrl(currentSourceFiles.value)
    if (sandboxWindow) {
      sandboxWindow.location.href = url
    } else {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  } catch (error) {
    sandboxWindow?.close()
    console.error('Failed to create CodeSandbox URL for example sketch.', error)
  } finally {
    isOpeningSandbox.value = false
  }
}

function extractSourceFiles(markdownSource: string): SourceFile[] {
  const files: SourceFile[] = []
  const fencePattern = /```([^\n]*)\n([\s\S]*?)```/g

  for (const match of markdownSource.matchAll(fencePattern)) {
    const info = match[1] ?? ''
    const code = match[2] ?? ''
    const file = parseSourceFence(info, code)

    if (file) {
      files.push(file)
    }
  }

  return files
}

function parseSourceFence(info: string, code: string): SourceFile | null {
  const tokens = info.trim().split(/\s+/).filter(Boolean)
  const language = normalizeLanguage(tokens[0] ?? 'text')
  const path = tokens.find((token) => token.includes('.') && !token.startsWith('['))

  if (!path) {
    return null
  }

  return {
    active: tokens.includes('[active]') || tokens.includes('#active'),
    code: trimFenceCode(code),
    label: path.replace(/^\//, ''),
    language,
    path: path.startsWith('/') ? path : `/${path}`,
    readOnly: tokens.includes('[readonly]') || tokens.includes('[readOnly]') || tokens.includes('#readOnly'),
  }
}

function normalizeLanguage(language: string) {
  if (language === 'js') return 'javascript'
  if (language === 'ts') return 'typescript'
  return language || 'text'
}

function trimFenceCode(code: string) {
  return code.replace(/^\n/, '').replace(/\s+$/, '\n')
}

async function buildCodeSandboxUrl(sourceFiles: SourceFile[]) {
  const lzStringModule = await import('lz-string')
  const compressToBase64 = lzStringModule.compressToBase64 ?? lzStringModule.default?.compressToBase64

  if (typeof compressToBase64 !== 'function') {
    throw new Error('Unable to load lz-string compressor.')
  }

  const files = buildCodeSandboxFiles(sourceFiles)
  const activeFile = sourceFiles.find((file) => file.active) ?? sourceFiles[0]
  const parameters = compressToBase64(JSON.stringify({ files }))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
  const query = activeFile ? `file=${activeFile.path}` : ''

  return `${CODE_SANDBOX_ENDPOINT}?parameters=${parameters}&query=${encodeURIComponent(query)}`
}

function buildCodeSandboxFiles(sourceFiles: SourceFile[]) {
  const files = sourceFiles.reduce<Record<string, { content: string, isBinary: boolean }>>((output, file) => {
    output[file.path.replace(/^\//, '')] = {
      content: file.code,
      isBinary: false,
    }

    return output
  }, {})

  files['package.json'] = {
    content: JSON.stringify({
      name: 'textmode-example',
      version: '1.0.0',
      private: true,
      scripts: {
        start: 'parcel index.html',
        build: 'parcel build index.html',
      },
      dependencies: {},
      devDependencies: {
        'parcel-bundler': '^1.12.5',
      },
    }, null, 2),
    isBinary: false,
  }

  return files
}

function showPreviousSketch() {
  void showSketch(currentIndex.value - 1, 'previous')
}

function showNextSketch() {
  void showSketch(currentIndex.value + 1, 'next')
}

function showRandomSketch() {
  if (!canRandomize.value) {
    return
  }

  const offset = Math.floor(Math.random() * (sketchIds.length - 1)) + 1
  void showSketch(currentIndex.value + offset, 'random')
}

watch(currentSketchId, () => {
  const activeFile = currentSourceFiles.value.find((file) => file.active)
    ?? currentSourceFiles.value.find((file) => file.language === 'javascript' || file.language === 'typescript')
    ?? currentSourceFiles.value[0]

  selectedSourcePath.value = activeFile?.path ?? ''
  copyStatus.value = 'Copy'
})

watch(currentSourceFiles, () => {
  if (selectedSourcePath.value && currentSourceFiles.value.some((file) => file.path === selectedSourcePath.value)) {
    return
  }

  const activeFile = currentSourceFiles.value.find((file) => file.active) ?? currentSourceFiles.value[0]
  selectedSourcePath.value = activeFile?.path ?? ''
}, { immediate: true })

onBeforeUnmount(() => {
  clearSwitchFallbackTimer()
  clearCopyStatusTimer()
  cleanupRetiredSandpackElements()
})
</script>

<style scoped>
.example-sketch-browser {
  --example-sketch-browser-height: clamp(520px, 72vh, 780px);

  margin: 1.5rem 0 3rem;
}

.example-sketch-browser__toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 0.5rem;
  margin-bottom: 0.875rem;
}

.example-sketch-browser__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.example-sketch-browser__button--wide {
  width: auto;
  min-width: 5.75rem;
  padding: 0 0.75rem;
  font-family: var(--textmode-font);
  font-size: 0.75rem;
  font-weight: 650;
}

.example-sketch-browser__button:hover:not(:disabled) {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-brand-1);
  transform: translateY(-1px);
}

.example-sketch-browser__button:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.example-sketch-browser__button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.example-sketch-browser__counter {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 4.5rem;
  height: 2.5rem;
  padding: 0 0.875rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-family: var(--textmode-font);
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1;
}

.example-sketch-browser__stage {
  overflow: hidden;
  position: relative;
  min-height: var(--example-sketch-browser-height);
  border-radius: 8px;
  background: #000;
  isolation: isolate;
}

.example-sketch-browser__sketch {
  position: relative;
  z-index: 1;
  min-height: var(--example-sketch-browser-height);
  will-change: opacity, transform;
}

.example-sketch-browser__stage--switching .example-sketch-browser__sketch {
  pointer-events: none;
}

.example-sketch-browser__slide-next-enter-active,
.example-sketch-browser__slide-next-leave-active,
.example-sketch-browser__slide-previous-enter-active,
.example-sketch-browser__slide-previous-leave-active,
.example-sketch-browser__switch-random-enter-active,
.example-sketch-browser__switch-random-leave-active {
  transition:
    opacity 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);
}

.example-sketch-browser__slide-next-leave-active,
.example-sketch-browser__slide-previous-leave-active,
.example-sketch-browser__switch-random-leave-active {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
}

.example-sketch-browser__slide-next-enter-active,
.example-sketch-browser__slide-previous-enter-active,
.example-sketch-browser__switch-random-enter-active {
  z-index: 2;
}

.example-sketch-browser__slide-next-enter-from {
  opacity: 0;
  transform: translate3d(24px, 0, 0) scale(0.992);
}

.example-sketch-browser__slide-next-leave-to {
  opacity: 0;
  transform: translate3d(-24px, 0, 0) scale(0.992);
}

.example-sketch-browser__slide-previous-enter-from {
  opacity: 0;
  transform: translate3d(-24px, 0, 0) scale(0.992);
}

.example-sketch-browser__slide-previous-leave-to {
  opacity: 0;
  transform: translate3d(24px, 0, 0) scale(0.992);
}

.example-sketch-browser__switch-random-enter-from {
  opacity: 0;
  transform: translate3d(0, 10px, 0) scale(0.985);
}

.example-sketch-browser__switch-random-leave-to {
  opacity: 0;
  transform: translate3d(0, -8px, 0) scale(1.01);
}

.example-sketch-browser__loading {
  position: absolute;
  inset: 0;
  z-index: 4;
  overflow: hidden;
  border-radius: 8px;
  pointer-events: none;
}

.example-sketch-browser__loading::before {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      90deg,
      transparent,
      color-mix(in srgb, var(--vp-c-bg) 16%, transparent),
      transparent
    );
  content: '';
}

.example-sketch-browser__loading-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 34%;
  height: 2px;
  border-radius: 999px;
  background: var(--vp-c-brand-1);
  box-shadow: var(--textmode-glow);
  animation: example-sketch-browser-progress 0.9s cubic-bezier(0.22, 1, 0.36, 1) infinite;
}

.example-sketch-browser__veil-enter-active,
.example-sketch-browser__veil-leave-active {
  transition: opacity 0.18s ease;
}

.example-sketch-browser__veil-enter-from,
.example-sketch-browser__veil-leave-to {
  opacity: 0;
}

.example-sketch-browser__source-enter-active,
.example-sketch-browser__source-leave-active {
  transition:
    opacity 0.18s ease,
    transform 0.2s ease;
}

.example-sketch-browser__source-enter-from,
.example-sketch-browser__source-leave-to {
  opacity: 0;
  transform: translate3d(0, -6px, 0);
}

.example-sketch-browser__source {
  margin-top: 0.875rem;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
}

.example-sketch-browser__source-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.625rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.example-sketch-browser__source-tabs {
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  min-width: 0;
  gap: 0.375rem;
}

.example-sketch-browser__source-tab,
.example-sketch-browser__source-copy {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-family: var(--textmode-font);
  font-size: 0.75rem;
  font-weight: 650;
  line-height: 1.1;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}

.example-sketch-browser__source-tab {
  padding: 0 0.625rem;
}

.example-sketch-browser__source-copy {
  flex: 0 0 auto;
  gap: 0.375rem;
  min-width: 5.25rem;
  padding: 0 0.625rem;
}

.example-sketch-browser__source-tab:hover,
.example-sketch-browser__source-copy:hover:not(:disabled) {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.example-sketch-browser__source-tab:focus-visible,
.example-sketch-browser__source-copy:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.example-sketch-browser__source-tab--active {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.example-sketch-browser__source-copy:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.example-sketch-browser__source-code {
  max-height: min(540px, 60vh);
  margin: 0;
  overflow: auto;
  padding: 1rem;
  background: var(--vp-code-block-bg);
  color: var(--vp-code-block-color);
  font-family: var(--vp-font-family-mono);
  font-size: 0.8125rem;
  line-height: 1.65;
  tab-size: 2;
  white-space: pre;
}

.example-sketch-browser__source-code:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: -2px;
}

@keyframes example-sketch-browser-progress {
  from {
    transform: translate3d(-110%, 0, 0);
  }

  to {
    transform: translate3d(320%, 0, 0);
  }
}

.example-sketch-browser :deep(.textmode-sandbox-wrapper) {
  overflow: hidden;
  border-radius: 8px;
  background: #000;
}

.example-sketch-browser :deep(.textmode-live-sandbox:not(.has-custom-preview-height)) {
  --textmode-live-preview-height: var(--example-sketch-browser-height) !important;

  min-height: var(--example-sketch-browser-height);
}

.example-sketch-browser :deep(.textmode-live-sandbox) {
  margin: 0;
  border: 0;
  border-radius: 8px;
  background: #000;
}

.example-sketch-browser :deep(.textmode-live-sandbox:not(.has-custom-preview-height) .textmode-live-sandbox__placeholder) {
  min-height: var(--example-sketch-browser-height);
}

.example-sketch-browser :deep(.textmode-live-sandbox:not(.has-custom-preview-height) .textmode-live-sandpack-wrapper),
.example-sketch-browser :deep(.textmode-live-sandbox:not(.has-custom-preview-height) .textmode-live-sandpack-layout) {
  min-height: var(--example-sketch-browser-height);
  overflow: hidden;
  border-radius: 8px;
  background: #000;
}

.example-sketch-browser :deep(.textmode-live-sandbox:not(.has-custom-preview-height) .textmode-live-sandpack-layout) {
  border: 1px solid var(--vp-c-divider);
}

.example-sketch-browser :deep(.textmode-live-sandbox:not(.has-custom-preview-height) .textmode-live-sandpack-layout > .sp-preset-column),
.example-sketch-browser :deep(.textmode-live-sandbox:not(.has-custom-preview-height) .textmode-live-sandpack-layout > .textmode-live-sandpack-preview) {
  height: var(--example-sketch-browser-height) !important;
  min-height: var(--example-sketch-browser-height);
}

.example-sketch-browser :deep(.textmode-live-sandpack-preview-container),
.example-sketch-browser :deep(.textmode-live-sandpack-preview-iframe) {
  height: 100% !important;
  min-height: 100%;
}

.example-sketch-browser :deep(.textmode-live-sandpack-preview-container) {
  background: #000;
}

@media (prefers-reduced-motion: reduce) {
  .example-sketch-browser__slide-next-enter-active,
  .example-sketch-browser__slide-next-leave-active,
  .example-sketch-browser__slide-previous-enter-active,
  .example-sketch-browser__slide-previous-leave-active,
  .example-sketch-browser__switch-random-enter-active,
  .example-sketch-browser__switch-random-leave-active,
  .example-sketch-browser__veil-enter-active,
  .example-sketch-browser__veil-leave-active {
    transition: opacity 0.12s ease;
  }

  .example-sketch-browser__slide-next-enter-from,
  .example-sketch-browser__slide-next-leave-to,
  .example-sketch-browser__slide-previous-enter-from,
  .example-sketch-browser__slide-previous-leave-to,
  .example-sketch-browser__switch-random-enter-from,
  .example-sketch-browser__switch-random-leave-to {
    transform: none;
  }

  .example-sketch-browser__loading-bar {
    animation: none;
  }
}

@media (max-width: 768px) {
  .example-sketch-browser {
    --example-sketch-browser-height: clamp(420px, 68vh, 620px);

    margin: 1.25rem 0 2.5rem;
  }

  .example-sketch-browser__toolbar {
    justify-content: stretch;
  }

  .example-sketch-browser__counter {
    flex: 1;
    min-width: 0;
  }

  .example-sketch-browser__button--wide {
    flex: 1 1 calc(50% - 0.5rem);
    min-width: 0;
  }

  .example-sketch-browser__source-header {
    align-items: stretch;
    flex-direction: column;
  }

  .example-sketch-browser__source-copy {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .example-sketch-browser {
    --example-sketch-browser-height: clamp(400px, 66vh, 560px);
  }

  .example-sketch-browser__button {
    width: 2.375rem;
    height: 2.375rem;
  }

  .example-sketch-browser__button--wide {
    width: auto;
    min-width: 0;
    padding: 0 0.5rem;
  }

  .example-sketch-browser__counter {
    height: 2.375rem;
    padding: 0 0.625rem;
    font-size: 0.75rem;
  }
}
</style>
