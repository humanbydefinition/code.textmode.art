<template>
  <div class="featured-sketches">
    <!-- Header Section -->
    <div class="featured-sketches__header">
      <h2 class="featured-sketches__title">Built with <code>#textmodejs</code></h2>
      <p class="featured-sketches__description">
        Every pattern, every animation, every experiment adds to the growing tapestry of textmode art. 
        These sketches are randomly selected from our featured collection.
      </p>
      <p class="featured-sketches__hint">
        <svg class="featured-sketches__hint-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
          <path d="M12 16v-4M12 8h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span>Hover over sketches to view source, tweak parameters, and break things <em>- it's encouraged!</em></span>
      </p>
      <div class="featured-sketches__actions">
        <div class="featured-sketches__cta">
          <span class="featured-sketches__cta-text">Want your sketch featured?</span>
          <a 
            href="https://github.com/humanbydefinition/code.textmode.art?tab=contributing-ov-file#contributing" 
            target="_blank" 
            rel="noopener noreferrer"
            class="featured-sketches__cta-link"
          >
            Share it with us
            <svg class="featured-sketches__cta-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 5h5v5M11 5l-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>
        <button 
          class="featured-sketches__refresh-btn"
          :class="{ 'featured-sketches__refresh-btn--loading': isRefreshing }"
          @click="refreshSketches"
          :disabled="isRefreshing"
          title="Shuffle sketches"
          aria-label="Shuffle sketches"
        >
          <svg 
            class="featured-sketches__refresh-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M21 12a9 9 0 1 1-2.636-6.364M21 3v6h-6" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
            />
          </svg>
          <span class="featured-sketches__refresh-text">Shuffle</span>
        </button>
      </div>
    </div>

    <!-- Sketches Gallery with Loading State -->
    <div class="featured-sketches__gallery-wrapper" ref="galleryWrapperRef">
      <!-- Loading Overlay -->
      <Transition name="fade">
        <div v-if="isRefreshing" class="featured-sketches__loading">
          <div class="featured-sketches__loading-spinner">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M21 12a9 9 0 1 1-2.636-6.364" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
              />
            </svg>
          </div>
          <span class="featured-sketches__loading-text">Shuffling sketches...</span>
        </div>
      </Transition>

      <!-- Sketches -->
      <div 
        class="featured-sketches__gallery" 
        :class="{ 'featured-sketches__gallery--loading': isRefreshing }"
        :key="galleryKey"
      >
        <template v-for="(sketchId, index) in selectedSketches" :key="`${galleryKey}-${sketchId}`">
          <component :is="sketchComponents[sketchId]" v-if="sketchComponents[sketchId]" />
          <hr v-if="index < selectedSketches.length - 1" class="featured-sketches__divider" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, defineAsyncComponent, shallowRef, nextTick, type Component } from 'vue'
import sketchMetadata from '../../../data/sketches.json'

defineOptions({ name: 'FeaturedSketches' })

const props = defineProps<{
  count?: number
}>()

// Type definitions for sketch metadata
interface SketchMeta {
  title: string
  author: string
  authorUrl?: string
  featured?: boolean
}

type SketchMetadataMap = Record<string, SketchMeta>
type SketchId = keyof typeof sketchMetadata

// Use Vite's glob import to dynamically load all showcase markdown files
// This automatically handles all featured sketches without manual imports
const showcaseModules = import.meta.glob<Component>(
  '../../../../docs/examples/showcase/*.md'
)

// Create a mapping from sketch ID to its module loader
function getSketchLoader(sketchId: string): (() => Promise<Component>) | undefined {
  const path = `../../../../docs/examples/showcase/${sketchId}.md`
  return showcaseModules[path] as (() => Promise<Component>) | undefined
}

// Get all featured sketch IDs from metadata
const featuredSketchIds = Object.entries(sketchMetadata as SketchMetadataMap)
  .filter(([_, data]) => data.featured === true)
  .map(([id]) => id as SketchId)

// Fisher-Yates shuffle
function shuffle<T>(array: T[]): T[] {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

// Select random sketches (default 3)
const count = props.count ?? 3
const selectedSketches = ref<SketchId[]>([])
const isRefreshing = ref(false)
const galleryKey = ref(0) // Key to force re-render and cleanup

// Reference to the gallery wrapper for manual cleanup
const galleryWrapperRef = ref<HTMLElement | null>(null)

// Map of sketch IDs to their async components
const sketchComponents = shallowRef<Record<string, ReturnType<typeof defineAsyncComponent>>>({})

// Cleanup function to remove any lingering iframes and canvases
function cleanupSandpackElements() {
  // Find and remove any orphaned Sandpack iframes that may have leaked
  // These are typically in the document body with specific Sandpack/CodeSandbox attributes
  const orphanedIframes = document.querySelectorAll(
    'iframe[src*="sandpack"], iframe[src*="codesandbox"], iframe[data-sandpack]'
  )
  
  orphanedIframes.forEach((iframe) => {
    // Only remove if it's not within our gallery wrapper (i.e., it's orphaned)
    if (galleryWrapperRef.value && !galleryWrapperRef.value.contains(iframe)) {
      // Clear iframe src first to stop any running content
      try {
        (iframe as HTMLIFrameElement).src = 'about:blank'
      } catch (e) {
        // Ignore cross-origin errors
      }
      iframe.remove()
    }
  })

  // Also cleanup any hidden iframes that Sandpack might create at document level
  const hiddenIframes = document.querySelectorAll('body > iframe[style*="display: none"]')
  hiddenIframes.forEach((iframe) => {
    const src = (iframe as HTMLIFrameElement).src || ''
    if (src.includes('sandpack') || src.includes('codesandbox')) {
      try {
        (iframe as HTMLIFrameElement).src = 'about:blank'
      } catch (e) {
        // Ignore cross-origin errors
      }
      iframe.remove()
    }
  })
}

// Load sketches helper function
function loadSketches() {
  const shuffled = shuffle(featuredSketchIds)
  selectedSketches.value = shuffled.slice(0, Math.min(count, shuffled.length))
  
  const components: Record<string, ReturnType<typeof defineAsyncComponent>> = {}
  for (const id of selectedSketches.value) {
    const loader = getSketchLoader(id)
    if (loader) {
      components[id] = defineAsyncComponent(loader)
    }
  }
  sketchComponents.value = components
}

// Refresh sketches with animation - uses key to force full cleanup
async function refreshSketches() {
  if (isRefreshing.value) return
  
  isRefreshing.value = true
  
  // Clear current state first to trigger unmounting
  sketchComponents.value = {}
  selectedSketches.value = []
  
  // Wait for Vue to process the unmounting
  await nextTick()
  
  // Increment key to force Vue to destroy old components completely
  galleryKey.value++
  
  // Wait another tick for the key change to take effect
  await nextTick()
  
  // Perform manual cleanup of any orphaned iframes
  cleanupSandpackElements()
  
  // Wait for cleanup and show loading state
  await new Promise(resolve => setTimeout(resolve, 400))
  
  // Load new sketches
  loadSketches()
  
  // End refreshing state
  isRefreshing.value = false
}

// Cleanup on component unmount
onBeforeUnmount(() => {
  cleanupSandpackElements()
})

onMounted(() => {
  loadSketches()
})
</script>

<style scoped>
.featured-sketches {
  margin: 2rem 0 3.25rem;
}

/* Header Section */
.featured-sketches__header {
  margin-bottom: 1rem;
  padding: 0;

}

.featured-sketches__title {
  font-size: 1.65rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 0.75rem;
  line-height: 1.3;
  border-top: none;
  padding-top: 0;
}

.featured-sketches__title code {
  font-family: var(--textmode-font);
  font-size: 1.5rem;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  padding: 0.125rem 0.5rem;
  border-radius: 6px;
}

.featured-sketches__description {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  max-width: 720px;
  margin: 0 0 1.25rem;
}

/* Actions row - CTA and Shuffle button */
.featured-sketches__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.featured-sketches__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.featured-sketches__cta-text {
  font-size: 0.9375rem;
  color: var(--vp-c-text-2);
}

.featured-sketches__cta-link {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: color 0.2s ease;
}

.featured-sketches__cta-link:hover {
  color: var(--vp-c-brand-2);
}

.featured-sketches__cta-icon {
  width: 14px;
  height: 14px;
}

/* Refresh Button */
.featured-sketches__refresh-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  color: var(--vp-c-text-2);
  font-family: var(--textmode-font);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.featured-sketches__refresh-btn:hover:not(:disabled) {
  background: var(--vp-c-bg-elv);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.featured-sketches__refresh-btn:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.featured-sketches__refresh-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.featured-sketches__refresh-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.featured-sketches__refresh-btn--loading .featured-sketches__refresh-icon {
  animation: spin 1s linear infinite;
}

.featured-sketches__refresh-text {
  line-height: 1;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Gallery Wrapper with Loading State */
.featured-sketches__gallery-wrapper {
  position: relative;
  min-height: 200px;
}

/* Loading Overlay */
.featured-sketches__loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: var(--vp-c-bg);
  z-index: 10;
  border-radius: 8px;
  min-height: 200px;
}

.featured-sketches__loading-spinner {
  width: 48px;
  height: 48px;
  color: var(--vp-c-brand-1);
}

.featured-sketches__loading-spinner svg {
  width: 100%;
  height: 100%;
  animation: spin 1s linear infinite;
}

.featured-sketches__loading-text {
  font-family: var(--textmode-font);
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Gallery */
.featured-sketches__gallery {
  margin: 0;
  display: grid;
  gap: 1rem;
  transition: opacity 0.3s ease;
}

.featured-sketches__gallery--loading {
  opacity: 0;
  pointer-events: none;
}

.featured-sketches__divider {
  margin: 0;
  border: none;
  border-top: 1px solid var(--vp-c-divider);
}

/* Hint in header - matches VitePress tip container style */
.featured-sketches__hint {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin: 0 0 1.25rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background-color: var(--vp-custom-block-tip-bg);
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--vp-custom-block-tip-text);
}

.featured-sketches__hint-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: var(--vp-custom-block-tip-text);
  margin-top: 2px;
}

.featured-sketches__hint em {
  font-style: italic;
  opacity: 0.85;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .featured-sketches__header {
    padding: 0;
  }

  .featured-sketches__title {
    font-size: 1.5rem;
  }

  .featured-sketches__title code {
    font-size: 1.25rem;
  }

  .featured-sketches__description {
    font-size: 0.9375rem;
  }

  .featured-sketches__hint {
    font-size: 0.8125rem;
    padding: 0.625rem 0.875rem;
  }

  .featured-sketches__hint-icon {
    width: 16px;
    height: 16px;
  }

  .featured-sketches__actions {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .featured-sketches__cta {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.35rem;
  }

  .featured-sketches__refresh-btn {
    padding: 0.4375rem 0.875rem;
    font-size: 0.8125rem;
  }

  .featured-sketches__refresh-icon {
    width: 14px;
    height: 14px;
  }

  .featured-sketches__divider {
    margin: 0;
  }

  .featured-sketches__loading {
    min-height: 200px;
  }

  .featured-sketches__loading-spinner {
    width: 40px;
    height: 40px;
  }

  .featured-sketches__loading-text {
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .featured-sketches__refresh-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
