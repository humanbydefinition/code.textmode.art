<template>
  <div v-if="title || description || authorName || cta" class="textmode-sketch-overlay">
    <div class="overlay-content">
      <div class="sketch-info">
        <div v-if="title" class="textmode-sketch-title">{{ title }}</div>
        <div v-if="description" class="textmode-sketch-description">{{ description }}</div>
        <div v-if="authorName" class="textmode-sketch-author">
          <span class="author-label">by</span>
          <a
            v-if="effectiveAuthorUrl"
            :href="effectiveAuthorUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="textmode-sketch-author-link"
          >
            {{ authorName }}
          </a>
          <span v-else>{{ authorName }}</span>
        </div>
        <a
          v-if="cta"
          :href="cta.href"
          target="_blank"
          rel="noopener noreferrer"
          class="textmode-sketch-cta"
        >
          {{ cta.label }}
          <svg class="textmode-sketch-cta-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 5h5v5M11 5l-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </div>

      <div v-if="resolvedSocialLinks.length" class="social-links">
        <a
          v-for="link in resolvedSocialLinks"
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
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface SketchMetaOverlayLink {
  icon: string
  url: string
}

export interface SketchMetaOverlaySocialEntry {
  url: string
  label?: string
}

export interface SketchMetaOverlayCta {
  label: string
  href: string
}

const props = withDefaults(defineProps<{
  title?: string
  description?: string
  authorName?: string
  authorUrl?: string | null
  socialLinks?: SketchMetaOverlaySocialEntry[]
  cta?: SketchMetaOverlayCta
}>(), {
  title: '',
  description: '',
  authorName: '',
  authorUrl: null,
  socialLinks: () => [],
  cta: null,
})

defineOptions({ name: 'SketchMetaOverlay' })

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

const resolvedSocialLinks = computed<SketchMetaOverlayLink[]>(() => {
  const seen = new Set<string>()
  const result: SketchMetaOverlayLink[] = []
  for (const entry of props.socialLinks ?? []) {
    if (!entry?.url || seen.has(entry.url)) continue
    seen.add(entry.url)
    result.push({ icon: socialIconForUrl(entry.url), url: entry.url })
  }
  return result
})

const effectiveAuthorUrl = computed(() => {
  if (props.authorUrl) return props.authorUrl
  return resolvedSocialLinks.value.find((l) => l.icon === 'github')?.url ?? null
})
</script>

<style scoped>
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

.textmode-sketch-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-family: var(--textmode-font);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--vp-c-brand-1) !important;
  letter-spacing: 0.01em;
  text-decoration: none;
  pointer-events: auto;
  transition: color 0.2s ease;
  cursor: pointer;
}

.textmode-sketch-cta:hover,
.textmode-sketch-cta:focus {
  color: var(--vp-c-brand-2) !important;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.textmode-sketch-cta-icon {
  width: 12px;
  height: 12px;
}
</style>
