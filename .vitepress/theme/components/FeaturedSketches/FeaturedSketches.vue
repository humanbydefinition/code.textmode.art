<template>
  <div class="featured-sketches">
    <!-- Header Section -->
    <div class="featured-sketches__header">
      <h2 class="featured-sketches__title">Built with <code>#textmodejs</code></h2>
      <p class="featured-sketches__description">
        Every pattern, every animation, every experiment adds to the growing tapestry of textmode art. 
        These sketches are randomly selected from our featured community collection on editor.textmode.art.
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
            href="https://github.com/humanbydefinition/editor.textmode.art/tree/main/sketches" 
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
          :disabled="isRefreshing || allSketches.length <= 1"
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
        <template v-for="(sketch, index) in selectedSketches" :key="`${galleryKey}-${sketch.slug}`">
          <div class="textmode-sandbox-wrapper">
            <TextmodeLiveSandbox
              :title="sketch.title"
              :encoded-code="encodeBase64Url(sketch.textmodeCode)"
              profile="textmode.js"
              initial-view="preview"
              :show-header="false"
            />
            <!-- Overlay with title, description, author, and social links -->
            <div v-if="sketch.title || sketch.authorName" class="textmode-sketch-overlay">
              <div class="overlay-content">
                <div class="sketch-info">
                  <div v-if="sketch.title" class="textmode-sketch-title">{{ sketch.title }}</div>
                  <div v-if="sketch.description" class="textmode-sketch-description">{{ sketch.description }}</div>
                  <div v-if="sketch.authorName" class="textmode-sketch-author">
                    <span class="author-label">by</span>
                    <a
                      v-if="authorUrl(sketch)"
                      :href="authorUrl(sketch)"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="textmode-sketch-author-link"
                    >
                      {{ sketch.authorName }}
                    </a>
                    <span v-else>{{ sketch.authorName }}</span>
                  </div>
                </div>

                <div v-if="socialLinks(sketch).length" class="social-links">
                  <a
                    v-for="link in socialLinks(sketch)"
                    :key="link.url"
                    :href="link.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-link"
                    :aria-label="link.icon"
                  >
                    <svg v-if="link.icon === 'website'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="social-icon">
                      <path d="M12 2C6.477 2 2 6.478 2 12s4.477 10 10 10 10-4.478 10-10S17.523 2 12 2zm6.93 9h-3.06a15.93 15.93 0 00-1.38-5.01A8.025 8.025 0 0118.93 11zM12 4.07c.78 0 2.39 2.07 2.93 6.93H9.07C9.61 6.14 11.22 4.07 12 4.07zM4.07 13h3.06c.12 1.81.6 3.54 1.38 5.01A8.025 8.025 0 014.07 13zm3.06-2H4.07a8.025 8.025 0 014.44-5.01A15.93 15.93 0 007.13 11zm4.87 8.93c-.78 0-2.39-2.07-2.93-6.93h5.86c-.54 4.86-2.15 6.93-2.93 6.93zM15.31 18.01c.78-1.47 1.26-3.2 1.38-5.01h3.24a8.025 8.025 0 01-4.62 5.01z" fill="currentColor" />
                    </svg>
                    <svg v-else-if="link.icon === 'github'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="social-icon">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor" />
                    </svg>
                    <svg v-else-if="link.icon === 'instagram'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="social-icon">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="currentColor" />
                    </svg>
                    <svg v-else-if="link.icon === 'twitter'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="social-icon">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" />
                    </svg>
                    <svg v-else-if="link.icon === 'mastodon'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="social-icon">
                      <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 00.023-.043v-1.809a.052.052 0 00-.02-.041.053.053 0 00-.046-.01 20.282 20.282 0 01-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 01-.319-1.433.053.053 0 01.066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.668 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z" fill="currentColor" />
                    </svg>
                    <svg v-else-if="link.icon === 'bluesky'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="social-icon">
                      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 01-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z" fill="currentColor" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="social-icon">
                      <path d="M3.9 12c0 1.71 1.39 3.1 3.1 3.1h4V13H7c-.55 0-1-.45-1-1s.45-1 1-1h4V8.9H7C5.29 8.9 3.9 10.29 3.9 12zM21 10h-5v2h4v2h-4v3h-2V8h7v2zm-9 7H7c-2.76 0-5-2.24-5-5s2.24-5 5-5h5v10z" fill="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr v-if="index < selectedSketches.length - 1" class="featured-sketches__divider" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { data as editorSketches, type EditorGallerySketch } from '../../../data/editorSketches.data.ts'
import TextmodeLiveSandbox from '../TextmodeLiveSandbox.vue'

defineOptions({ name: 'FeaturedSketches' })

const props = defineProps<{
  count?: number
}>()

const allSketches = (editorSketches || []) as EditorGallerySketch[]

// Derive a recognizable icon key from a social link URL
function socialIconForUrl(url: string): string {
  try {
    const host = new URL(url).hostname.toLowerCase()
    if (host.includes('github.com')) return 'github'
    if (host.includes('instagram.com')) return 'instagram'
    if (host.includes('x.com') || host.includes('twitter.com')) return 'twitter'
    if (host.includes('bsky.app') || host.includes('bluesky')) return 'bluesky'
    if (host.includes('mastodon') || host.includes('fosstodon') || host.includes('mastodon.social')) return 'mastodon'
  } catch {
    // ignore malformed URLs
  }
  return 'website'
}

// Resolve a sketch's socialLinks into icon-keyed links for the overlay card
function socialLinks(sketch: EditorGallerySketch): Array<{ icon: string; url: string }> {
  const raw = sketch.socialLinks ?? []
  const seen = new Set<string>()
  const result: Array<{ icon: string; url: string }> = []
  for (const entry of raw) {
    if (!entry?.url || seen.has(entry.url)) continue
    seen.add(entry.url)
    result.push({ icon: socialIconForUrl(entry.url), url: entry.url })
  }
  return result
}

// Author link: prefer a GitHub social link, fall back to nothing (author is plain text)
function authorUrl(sketch: EditorGallerySketch): string | null {
  return socialLinks(sketch).find((l) => l.icon === 'github')?.url ?? null
}

// Encode code to base64url format for TextmodeLiveSandbox
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
const selectedSketches = ref<EditorGallerySketch[]>([])
const isRefreshing = ref(false)
const galleryKey = ref(0) // Key to force re-render and cleanup

// Reference to the gallery wrapper for manual cleanup
const galleryWrapperRef = ref<HTMLElement | null>(null)

// Cleanup function to remove any lingering iframes and canvases
function cleanupSandpackElements() {
  if (typeof document === 'undefined') return

  const orphanedIframes = document.querySelectorAll(
    'iframe[src*="sandpack"], iframe[src*="codesandbox"], iframe[data-sandpack]'
  )
  
  orphanedIframes.forEach((iframe) => {
    if (galleryWrapperRef.value && !galleryWrapperRef.value.contains(iframe)) {
      try {
        (iframe as HTMLIFrameElement).src = 'about:blank'
      } catch (e) {
        // Ignore cross-origin errors
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
      } catch (e) {
        // Ignore cross-origin errors
      }
      iframe.remove()
    }
  })
}

// Load sketches helper function
function loadSketches() {
  const shuffled = shuffle(allSketches)
  selectedSketches.value = shuffled.slice(0, Math.min(count, shuffled.length))
}

// Refresh sketches with animation - uses key to force full cleanup
async function refreshSketches() {
  if (isRefreshing.value) return
  
  isRefreshing.value = true
  
  // Clear current state first to trigger unmounting
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

.featured-sketches__gallery :deep(.textmode-sandbox-wrapper),
.featured-sketches__gallery :deep(.textmode-live-sandbox) {
  margin: 0;
}

.textmode-sketch-description {
  font-family: var(--textmode-font);
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--vp-c-text-2);
  letter-spacing: 0.01em;
  line-height: 1.45;
  margin: 0 0 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
