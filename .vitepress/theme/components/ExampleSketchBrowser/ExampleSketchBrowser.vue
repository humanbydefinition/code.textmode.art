<template>
  <div class="example-sketch-browser">
    <!-- Toolbar: library picker + navigation -->
    <div class="example-sketch-browser__toolbar" aria-label="Example sketch navigation">
      <label class="example-sketch-browser__picker">
        <span class="example-sketch-browser__picker-label">Library</span>
        <span class="example-sketch-browser__picker-control">
          <select
            class="example-sketch-browser__select"
            :value="activeProfile"
            :aria-label="`Filter by library: ${activeProfile}`"
            @change="onProfileChange"
          >
            <option v-for="option in profileOptions" :key="option.id" :value="option.id">
              {{ option.label }}
            </option>
          </select>
          <svg
            class="example-sketch-browser__picker-chevron"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </label>

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
  initialId?: string
}>(), {
  source: () => apiExamples,
  initialId: '',
})

const HASH_PREFIX = 'ex-'

const profiles = [
  { id: 'textmode.js', label: 'textmode.js' },
  { id: 'textmode.synth.js', label: 'synth' },
  { id: 'textmode.filters.js', label: 'filters' },
  { id: 'textmode.figlet.js', label: 'figlet' },
  { id: 'textmode.export.js', label: 'export' },
] as const

const profileOptions = computed(() => [
  { id: 'all', label: 'All libraries' },
  ...profiles.map((profile) => ({ id: profile.id, label: profile.label })),
])

const activeProfile = ref<ApiProfile | 'all'>('all')
const currentIndex = ref(0)
const renderKey = ref(0)
const isSwitching = ref(false)
let switchFallbackTimer: ReturnType<typeof setTimeout> | null = null

const filteredSketches = computed(() => {
  if (activeProfile.value === 'all') {
    return props.source
  }
  return props.source.filter((sketch) => sketch.profile === activeProfile.value)
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

function updateUrlHash(sketch: ApiExampleSketch) {
  if (typeof history === 'undefined' || typeof location === 'undefined') {
    return
  }
  const nextHash = `#${HASH_PREFIX}${sketch.slug}`
  if (location.hash !== nextHash) {
    history.replaceState(null, '', nextHash)
  }
}

function selectProfile(profile: ApiProfile | 'all') {
  if (activeProfile.value === profile) {
    return
  }
  const target = currentSketch.value
  activeProfile.value = profile
  const index = target ? filteredSketches.value.findIndex((s) => s.id === target.id) : -1
  currentIndex.value = index === -1 ? 0 : index
  renderKey.value += 1
}

function onProfileChange(event: Event) {
  const value = (event.target as HTMLSelectElement).value
  selectProfile(value as ApiProfile | 'all')
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

  if (currentSketch.value) {
    updateUrlHash(currentSketch.value)
  }

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

function resolveInitialIndex(): number {
  if (typeof location === 'undefined') {
    return 0
  }
  const hash = location.hash.replace(/^#/, '')
  if (hash.startsWith(HASH_PREFIX)) {
    const slug = hash.slice(HASH_PREFIX.length)
    const index = filteredSketches.value.findIndex((sketch) => sketch.slug === slug)
    if (index !== -1) {
      return index
    }
  }
  if (props.initialId) {
    const index = filteredSketches.value.findIndex(
      (sketch) => sketch.slug === props.initialId || sketch.id === props.initialId,
    )
    if (index !== -1) {
      return index
    }
  }
  return 0
}

onMounted(() => {
  currentIndex.value = resolveInitialIndex()
})

onBeforeUnmount(() => {
  clearSwitchFallbackTimer()
  cleanupSandpackElements({ includeHiddenBodyIframes: true })
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

/* Library picker (native select) */
.example-sketch-browser__picker {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.example-sketch-browser__picker-label {
  font-family: var(--textmode-font);
  font-size: 0.8125rem;
  color: var(--vp-c-text-2);
}

.example-sketch-browser__picker-control {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.example-sketch-browser__select {
  appearance: none;
  -webkit-appearance: none;
  padding: 0.375rem 1.875rem 0.375rem 0.625rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-family: var(--textmode-font);
  font-size: 0.8125rem;
  line-height: 1.4;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.example-sketch-browser__select:hover {
  border-color: var(--vp-c-brand-1);
}

.example-sketch-browser__select:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.example-sketch-browser__picker-chevron {
  position: absolute;
  right: 0.5rem;
  width: 14px;
  height: 14px;
  color: var(--vp-c-text-2);
  pointer-events: none;
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
  min-height: 480px;
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

  .example-sketch-browser__picker {
    width: 100%;
  }

  .example-sketch-browser__picker-control,
  .example-sketch-browser__select {
    width: 100%;
  }

  .example-sketch-browser__nav {
    margin-left: 0;
    flex: 1;
  }
}
</style>
