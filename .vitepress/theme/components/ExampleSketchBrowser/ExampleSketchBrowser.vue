<template>
  <div class="example-sketch-browser">
    <!-- Toolbar: library picker + navigation -->
    <div class="example-sketch-browser__toolbar" aria-label="Example sketch navigation">
      <div class="example-sketch-browser__pills" role="group" aria-label="Filter by library">
        <button
          v-for="profile in profiles"
          :key="profile.id"
          class="example-sketch-browser__pill"
          :class="{ 'is-active': activeProfiles.has(profile.id) }"
          type="button"
          :aria-pressed="activeProfiles.has(profile.id)"
          :disabled="isSoleActive(profile.id)"
          :title="`Show ${profile.label} examples`"
          @click="toggleProfile(profile.id)"
        >
          {{ profile.label }}
        </button>
      </div>

      <div class="example-sketch-browser__nav">
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
          {{ currentPosition }} / {{ filteredSketches.length }}
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
      </div>
    </div>

    <div
      ref="browserWrapperRef"
      class="example-sketch-browser__stage"
      role="region"
      aria-roledescription="carousel"
      :aria-label="`Example sketches, ${filteredSketches.length} total`"
      :aria-busy="isSwitching"
    >
      <Transition
        name="example-sketch-browser__fade"
        mode="out-in"
        @after-enter="finishSwitch"
        @after-leave="cleanupRetiredSandpackElements"
      >
        <div
          v-if="currentSketch"
          :key="`${renderKey}-${currentSketch.id}`"
          class="example-sketch-browser__sketch"
          :aria-label="`${currentSketch.title}, ${currentPosition} of ${filteredSketches.length}`"
        >
          <TextmodeLiveSandbox
            :title="currentSketch.title"
            :encoded-code="currentSketch.encodedCode"
            :profile="currentSketch.profile"
            :language="currentSketch.language"
            :hint-href="currentSketch.pageUrl"
            :preview-height="previewHeight"
            initial-view="preview"
          />
        </div>
      </Transition>

      <p v-if="!hasSketches" class="example-sketch-browser__empty" role="status">
        No API examples available. Add a live sketch to an API page and rebuild the docs to see it here.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { data as apiExamples, type ApiExampleSketch, type ApiProfile } from '../../../data/apiExamples.data.ts'
import { UiIcon } from '../ui'
import TextmodeLiveSandbox from '../TextmodeLiveSandbox.vue'

defineOptions({ name: 'ExampleSketchBrowser' })

const props = withDefaults(defineProps<{
  source?: ApiExampleSketch[]
}>(), {
  source: () => apiExamples,
})

const profiles = [
  { id: 'textmode.js', label: 'textmode.js' },
  { id: 'textmode.synth.js', label: 'tm.synth.js' },
  { id: 'textmode.filters.js', label: 'tm.filters.js' },
  { id: 'textmode.figlet.js', label: 'tm.figlet.js' },
  { id: 'textmode.export.js', label: 'tm.export.js' },
] as const

const activeProfiles = ref<Set<ApiProfile>>(new Set(profiles.map((profile) => profile.id)))
const currentIndex = ref(0)
const renderKey = ref(0)
const isSwitching = ref(false)
const previewHeight = ref(440)
const browserWrapperRef = ref<HTMLElement | null>(null)
let switchFallbackTimer: ReturnType<typeof setTimeout> | null = null
let resizeObserver: ResizeObserver | null = null

const filteredSketches = computed(() => {
  return props.source.filter((sketch) => activeProfiles.value.has(sketch.profile))
})

const hasSketches = computed(() => filteredSketches.value.length > 0)
const canRandomize = computed(() => filteredSketches.value.length > 1)
const currentSketch = computed(() => filteredSketches.value[currentIndex.value] ?? null)
const currentPosition = computed(() => {
  return hasSketches.value ? currentIndex.value + 1 : 0
})

function clearSwitchFallbackTimer() {
  if (switchFallbackTimer) {
    clearTimeout(switchFallbackTimer)
    switchFallbackTimer = null
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

function measureStage() {
  const stage = browserWrapperRef.value
  if (!stage) {
    return
  }

  const header = stage.querySelector<HTMLElement>('.textmode-live-sandbox__header')
  const headerHeight = header?.getBoundingClientRect().height ?? 40
  const borderHeight = 2

  const width = stage.clientWidth
  if (width > 0) {
    previewHeight.value = Math.max(240, Math.round(width - headerHeight - borderHeight))
  }
}

function isSoleActive(profile: ApiProfile): boolean {
  return activeProfiles.value.size === 1 && activeProfiles.value.has(profile)
}

function toggleProfile(profile: ApiProfile) {
  if (isSoleActive(profile)) {
    return
  }

  const target = currentSketch.value
  const next = new Set(activeProfiles.value)
  if (next.has(profile)) {
    next.delete(profile)
  } else {
    next.add(profile)
  }
  activeProfiles.value = next

  const index = target ? filteredSketches.value.findIndex((s) => s.id === target.id) : -1
  const nextIndex = index === -1 ? 0 : index
  if (nextIndex !== currentIndex.value) {
    currentIndex.value = nextIndex
    renderKey.value += 1
  }
}

async function showSketch(nextIndex: number) {
  if (!hasSketches.value || isSwitching.value) {
    return
  }

  const length = filteredSketches.value.length
  const normalizedIndex = (nextIndex + length) % length
  if (normalizedIndex === currentIndex.value) {
    return
  }

  clearSwitchFallbackTimer()
  isSwitching.value = true

  currentIndex.value = normalizedIndex
  renderKey.value += 1

  await nextTick()
  switchFallbackTimer = setTimeout(finishSwitch, 1500)
}

function showNextSketch() {
  showSketch(currentIndex.value + 1)
}

function showPreviousSketch() {
  showSketch(currentIndex.value - 1)
}

function showRandomSketch() {
  if (!canRandomize.value) {
    return
  }

  const offset = Math.floor(Math.random() * (filteredSketches.value.length - 1)) + 1
  showSketch(currentIndex.value + offset)
}

onMounted(() => {
  currentIndex.value = 0
  measureStage()
  resizeObserver = new ResizeObserver(measureStage)
  if (browserWrapperRef.value) {
    resizeObserver.observe(browserWrapperRef.value)
  }
})

onBeforeUnmount(() => {
  clearSwitchFallbackTimer()
  cleanupSandpackElements({ includeHiddenBodyIframes: true })
  resizeObserver?.disconnect()
  resizeObserver = null
})
</script>

<style scoped>
.example-sketch-browser {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1.5rem 0 2rem;
}

/* Toolbar */
.example-sketch-browser__toolbar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

/* Library filter pills */
.example-sketch-browser__pills {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.example-sketch-browser__pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  padding: 0 0.75rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  color: var(--vp-c-text-2);
  font-family: var(--textmode-font);
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease;
}

.example-sketch-browser__pill:hover:not(:disabled) {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.example-sketch-browser__pill.is-active {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.example-sketch-browser__pill:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.example-sketch-browser__pill:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.example-sketch-browser__nav {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  margin-left: auto;
}

.example-sketch-browser__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  height: 32px;
  min-width: 32px;
  padding: 0 0.625rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  color: var(--vp-c-text-1);
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.example-sketch-browser__button:hover:not(:disabled) {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.example-sketch-browser__button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.example-sketch-browser__button:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.example-sketch-browser__counter {
  font-family: var(--textmode-font);
  font-size: 0.8125rem;
  color: var(--vp-c-text-2);
  padding: 0 0.25rem;
  white-space: nowrap;
}

/* Stage */
.example-sketch-browser__stage {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  min-height: 320px;
}

.example-sketch-browser__stage:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.example-sketch-browser__sketch {
  position: relative;
  width: 100%;
}

/* Align the info card to the sandbox card: zero the sandbox's outer margin */
.example-sketch-browser__sketch :deep(.textmode-live-sandbox) {
  margin: 0;
}

.example-sketch-browser__empty {
  margin: 2rem 1rem;
  text-align: center;
  color: var(--vp-c-text-2);
  font-size: 0.9375rem;
}

/* Transitions */
.example-sketch-browser__fade-enter-active,
.example-sketch-browser__fade-leave-active {
  transition: opacity 0.3s ease;
}

.example-sketch-browser__fade-enter-from,
.example-sketch-browser__fade-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .example-sketch-browser__toolbar {
    align-items: flex-start;
  }

  .example-sketch-browser__pills {
    width: 100%;
  }

  .example-sketch-browser__nav {
    margin-left: 0;
    flex: 1;
  }
}
</style>
