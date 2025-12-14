<template>
  <div class="textmode-sandbox-wrapper">
    <Sandbox v-bind="sandboxPropsPlain">
      <slot />
    </Sandbox>

    <div v-if="metadata" class="textmode-sketch-overlay">
      <div class="overlay-content">
        <div class="sketch-info">
          <div class="textmode-sketch-title">{{ metadata.title }}</div>
          <div class="textmode-sketch-author">
            <span class="author-label">by</span>
            <a
              v-if="authorUrl"
              class="textmode-sketch-author-link"
              :href="authorUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ metadata.author }}
            </a>
            <span v-else>{{ metadata.author }}</span>
          </div>
        </div>
        <div v-if="socialLinks" class="social-links">
          <a
            v-if="socialLinks.instagram"
            :href="socialLinks.instagram"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="social-icon">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="currentColor" />
            </svg>
          </a>
          <a
            v-if="socialLinks.twitter"
            :href="socialLinks.twitter"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            aria-label="Twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="social-icon">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" />
            </svg>
          </a>
          <a
            v-if="socialLinks.mastodon"
            :href="socialLinks.mastodon"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            aria-label="Mastodon"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="social-icon">
              <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 00.023-.043v-1.809a.052.052 0 00-.02-.041.053.053 0 00-.046-.01 20.282 20.282 0 01-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 01-.319-1.433.053.053 0 01.066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.668 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z" fill="currentColor" />
            </svg>
          </a>
          <a
            v-if="socialLinks.bluesky"
            :href="socialLinks.bluesky"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            aria-label="Bluesky"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="social-icon">
              <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 01-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Sandbox, sandboxProps } from 'vitepress-plugin-sandpack'
import sketchMetadata from '../../data/sketches.json'
import contributors from '../../data/contributors.json'

type SketchMetadataMap = typeof sketchMetadata

interface ContributorLink {
  icon: string
  link: string
}

interface Contributor {
  name: string
  links?: ContributorLink[]
}

defineOptions({ name: 'TextmodeSandbox' })

const props = defineProps({
  ...sandboxProps,
  sketchId: {
    type: String,
    default: ''
  }
})

const metadata = computed(() => {
  if (!props.sketchId) {
    return null
  }
  const key = props.sketchId as keyof SketchMetadataMap
  return sketchMetadata[key] ?? null
})

// Find contributor by author name
const contributor = computed(() => {
  if (!metadata.value?.author) {
    return null
  }
  return (contributors as Contributor[]).find(
    (c) => c.name === metadata.value.author
  ) ?? null
})

// Extract GitHub URL from contributor links
const authorUrl = computed(() => {
  return contributor.value?.links?.find(l => l.icon === 'github')?.link ?? null
})

// Get social links from contributor data
const socialLinks = computed(() => {
  if (!contributor.value?.links) {
    return null
  }
  
  const links: Record<string, string> = {}
  contributor.value.links.forEach(link => {
    if (['instagram', 'twitter', 'mastodon', 'bluesky'].includes(link.icon)) {
      links[link.icon] = link.link
    }
  })
  
  return Object.keys(links).length > 0 ? links : null
})

const sandboxPropsPlain = computed(() => {
  const { sketchId, ...rest } = props as Record<string, unknown> & { sketchId?: string }
  return rest
})
</script>
