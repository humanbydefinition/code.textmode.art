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

    <div ref="browserWrapperRef" class="example-sketch-browser__stage">
      <Transition name="example-sketch-browser__fade" mode="out-in">
        <component
          :is="currentSketchComponent"
          v-if="currentSketchComponent"
          :key="`${renderKey}-${currentSketchId}`"
        />
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

function cleanupSandpackElements() {
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

async function showSketch(nextIndex: number) {
  if (!hasSketches.value || isSwitching.value) {
    return
  }

  const normalizedIndex = (nextIndex + sketchIds.length) % sketchIds.length
  if (normalizedIndex === currentIndex.value) {
    return
  }

  isSwitching.value = true
  currentIndex.value = normalizedIndex
  renderKey.value += 1

  await nextTick()
  cleanupSandpackElements()

  isSwitching.value = false
}

function showPreviousSketch() {
  void showSketch(currentIndex.value - 1)
}

function showNextSketch() {
  void showSketch(currentIndex.value + 1)
}

function showRandomSketch() {
  if (!canRandomize.value) {
    return
  }

  const offset = Math.floor(Math.random() * (sketchIds.length - 1)) + 1
  void showSketch(currentIndex.value + offset)
}

onBeforeUnmount(() => {
  cleanupSandpackElements()
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
  position: relative;
  min-height: var(--example-sketch-browser-height);
}

.example-sketch-browser__fade-enter-active,
.example-sketch-browser__fade-leave-active {
  transition: opacity 0.18s ease;
}

.example-sketch-browser__fade-enter-from,
.example-sketch-browser__fade-leave-to {
  opacity: 0;
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
