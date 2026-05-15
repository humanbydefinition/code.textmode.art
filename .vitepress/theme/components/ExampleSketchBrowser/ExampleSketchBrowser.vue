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
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, nextTick, onBeforeUnmount, ref, type Component } from 'vue'
import sketchMetadata from '../../../data/sketches.json'
import { UiIcon } from '../ui'

defineOptions({ name: 'ExampleSketchBrowser' })

interface SketchMeta {
  title: string
  author: string
  authorUrl?: string
  featured?: boolean
}

type SketchMetadataMap = Record<string, SketchMeta>
type SwitchDirection = 'next' | 'previous' | 'random'

const showcaseModules = import.meta.glob<Component>(
  '../../../../docs/examples/showcase/*.md'
)

function getSketchLoader(sketchId: string): (() => Promise<Component>) | undefined {
  const path = `../../../../docs/examples/showcase/${sketchId}.md`
  return showcaseModules[path] as (() => Promise<Component>) | undefined
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
const switchDirection = ref<SwitchDirection>('next')
let switchFallbackTimer: ReturnType<typeof setTimeout> | null = null

const hasSketches = computed(() => sketchIds.length > 0)
const canRandomize = computed(() => sketchIds.length > 1)
const currentSketchId = computed(() => sketchIds[currentIndex.value] ?? null)
const currentSketchComponent = computed(() => {
  if (!currentSketchId.value) {
    return null
  }
  return sketchComponents[currentSketchId.value] ?? null
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

onBeforeUnmount(() => {
  clearSwitchFallbackTimer()
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
  justify-content: start;
  gap: 0.5rem;
  margin-bottom: 0.875rem;
}

.example-sketch-browser__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
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

@keyframes example-sketch-browser-progress {
  from {
    transform: translate3d(-110%, 0, 0);
  }

  to {
    transform: translate3d(320%, 0, 0);
  }
}

.example-sketch-browser :deep(.textmode-sandbox-wrapper) {
  min-height: var(--example-sketch-browser-height);
}

.example-sketch-browser :deep(.sp-layout) {
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: #000;
}

.example-sketch-browser :deep(.sp-layout > .sp-stack.sp-preset-column) {
  height: var(--example-sketch-browser-height) !important;
  min-height: var(--example-sketch-browser-height);
}

.example-sketch-browser :deep(.sp-preview-container),
.example-sketch-browser :deep(.sp-preview),
.example-sketch-browser :deep(.sp-preview-iframe),
.example-sketch-browser :deep(iframe) {
  height: 100% !important;
  min-height: 100%;
}

.example-sketch-browser :deep(.sp-preview-container) {
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
}

@media (max-width: 480px) {
  .example-sketch-browser {
    --example-sketch-browser-height: clamp(400px, 66vh, 560px);
  }

  .example-sketch-browser__button {
    width: 2.375rem;
    height: 2.375rem;
  }

  .example-sketch-browser__counter {
    height: 2.375rem;
    padding: 0 0.625rem;
    font-size: 0.75rem;
  }
}
</style>
