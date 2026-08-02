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
        {{ currentPosition }} / {{ sketches.length }}
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
          v-if="currentSketch"
          :key="`${renderKey}-${currentSketch.slug}`"
          class="example-sketch-browser__sketch"
        >
          <TextmodeLiveSandbox
            :title="currentSketch.title"
            :encoded-code="encodeBase64Url(currentSketch.textmodeCode)"
            profile="textmode.js"
            initial-view="preview"
            hide-editor
          />
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
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { data as editorSketches, type EditorGallerySketch } from '../../../data/editorSketches.data.ts'
import { UiIcon } from '../ui'
import TextmodeLiveSandbox from '../TextmodeLiveSandbox.vue'

defineOptions({ name: 'ExampleSketchBrowser' })

interface SourceFile {
  active: boolean
  code: string
  label: string
  language: string
  path: string
  readOnly: boolean
}

type SwitchDirection = 'next' | 'previous' | 'random'

const sketches = (editorSketches || []) as EditorGallerySketch[]

function encodeBase64Url(value: string): string {
  if (!value) return ''
  try {
    const bytes = new TextEncoder().encode(value)
    let binary = ''
    const len = bytes.byteLength
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    const base64 = typeof window !== 'undefined' ? window.btoa(binary) : Buffer.from(value).toString('base64')
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
  } catch {
    return ''
  }
}

const browserWrapperRef = ref<HTMLElement | null>(null)
const currentIndex = ref(0)
const renderKey = ref(0)
const isSwitching = ref(false)
const isSourceOpen = ref(false)
const selectedSourcePath = ref('/sketch.js')
const copyStatus = ref('Copy')
const switchDirection = ref<SwitchDirection>('next')
let switchFallbackTimer: ReturnType<typeof setTimeout> | null = null
let copyStatusTimer: ReturnType<typeof setTimeout> | null = null

const hasSketches = computed(() => sketches.length > 0)
const canRandomize = computed(() => sketches.length > 1)
const currentSketch = computed(() => sketches[currentIndex.value] ?? null)

const currentSourceFiles = computed<SourceFile[]>(() => {
  if (!currentSketch.value) {
    return []
  }
  return [
    {
      active: true,
      code: currentSketch.value.textmodeCode,
      label: 'sketch.js',
      language: 'javascript',
      path: '/sketch.js',
      readOnly: true,
    },
  ]
})
const hasSourceFiles = computed(() => currentSourceFiles.value.length > 0)
const selectedSourceFile = computed(() => {
  return currentSourceFiles.value.find((file) => file.path === selectedSourcePath.value)
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
        // Ignore cross-origin iframes.
      }
      iframe.remove()
    }
  })
}

async function showSketch(nextIndex: number, direction: SwitchDirection) {
  if (!hasSketches.value || isSwitching.value) {
    return
  }

  const normalizedIndex = (nextIndex + sketches.length) % sketches.length
  if (normalizedIndex === currentIndex.value) {
    return
  }

  clearSwitchFallbackTimer()
  switchDirection.value = direction
  isSwitching.value = true

  currentIndex.value = normalizedIndex
  renderKey.value += 1

  await nextTick()
  switchFallbackTimer = setTimeout(finishSwitch, 1500)
}

function showNextSketch() {
  showSketch(currentIndex.value + 1, 'next')
}

function showPreviousSketch() {
  showSketch(currentIndex.value - 1, 'previous')
}

function showRandomSketch() {
  if (!canRandomize.value) {
    return
  }

  const offset = Math.floor(Math.random() * (sketches.length - 1)) + 1
  showSketch(currentIndex.value + offset, 'random')
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

watch(currentSketch, () => {
  const defaultFile = currentSourceFiles.value.find((file) => file.active)
    ?? currentSourceFiles.value[0]
  selectedSourcePath.value = defaultFile?.path ?? '/sketch.js'
  copyStatus.value = 'Copy'
})

watch(currentSourceFiles, () => {
  if (selectedSourcePath.value && currentSourceFiles.value.some((file) => file.path === selectedSourcePath.value)) {
    return
  }

  const defaultFile = currentSourceFiles.value.find((file) => file.active)
    ?? currentSourceFiles.value[0]
  selectedSourcePath.value = defaultFile?.path ?? '/sketch.js'
}, { immediate: true })

onBeforeUnmount(() => {
  clearSwitchFallbackTimer()
  clearCopyStatusTimer()
  cleanupSandpackElements({ includeHiddenBodyIframes: true })
})
</script>

<style scoped>
.example-sketch-browser {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0 2rem;
}

.example-sketch-browser__toolbar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
}

.example-sketch-browser__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  height: 34px;
  min-width: 34px;
  padding: 0 0.625rem;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  color: var(--vp-c-text-1);
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.example-sketch-browser__button:hover:not(:disabled) {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.example-sketch-browser__button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.example-sketch-browser__button--wide {
  margin-left: auto;
}

.example-sketch-browser__counter {
  font-family: var(--textmode-font);
  font-size: 0.8125rem;
  color: var(--vp-c-text-2);
  padding: 0 0.5rem;
}

.example-sketch-browser__stage {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  min-height: 480px;
}

.example-sketch-browser__sketch {
  width: 100%;
}

.example-sketch-browser__loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--vp-c-bg-backdrop, rgba(0, 0, 0, 0.4));
  backdrop-filter: blur(4px);
  z-index: 20;
  display: flex;
  align-items: flex-start;
}

.example-sketch-browser__loading-bar {
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--vp-c-brand-1), transparent);
  animation: loading-bar-pulse 1.2s ease-in-out infinite;
}

@keyframes loading-bar-pulse {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.example-sketch-browser__source {
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-alt);
  overflow: hidden;
}

.example-sketch-browser__source-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.example-sketch-browser__source-tabs {
  display: flex;
  gap: 0.375rem;
}

.example-sketch-browser__source-tab {
  padding: 0.25rem 0.625rem;
  font-size: 0.8125rem;
  font-family: var(--textmode-font);
  color: var(--vp-c-text-2);
  background: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
}

.example-sketch-browser__source-tab--active {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
  border-color: var(--vp-c-divider);
}

.example-sketch-browser__source-copy {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  cursor: pointer;
}

.example-sketch-browser__source-copy:hover:not(:disabled) {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.example-sketch-browser__source-code {
  margin: 0;
  padding: 1rem;
  font-family: var(--textmode-font);
  font-size: 0.875rem;
  line-height: 1.5;
  overflow-x: auto;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-alt);
}

/* Transitions */
.example-sketch-browser__slide-next-enter-active,
.example-sketch-browser__slide-next-leave-active,
.example-sketch-browser__slide-previous-enter-active,
.example-sketch-browser__slide-previous-leave-active,
.example-sketch-browser__switch-random-enter-active,
.example-sketch-browser__switch-random-leave-active {
  transition: all 0.3s ease;
}

.example-sketch-browser__slide-next-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.example-sketch-browser__slide-next-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.example-sketch-browser__slide-previous-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}
.example-sketch-browser__slide-previous-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.example-sketch-browser__switch-random-enter-from,
.example-sketch-browser__switch-random-leave-to {
  opacity: 0;
  transform: scale(0.98);
}

.example-sketch-browser__veil-enter-active,
.example-sketch-browser__veil-leave-active {
  transition: opacity 0.2s ease;
}
.example-sketch-browser__veil-enter-from,
.example-sketch-browser__veil-leave-to {
  opacity: 0;
}
</style>
