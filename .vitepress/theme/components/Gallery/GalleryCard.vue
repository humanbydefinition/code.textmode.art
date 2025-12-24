<template>
  <article
    class="gallery-card"
    :class="{ 'gallery-card--featured': item.featured }"
  >
    <!-- Thumbnail - Clickable for Lightbox -->
    <div 
      class="gallery-card__thumbnail"
      @click="openLightbox"
      role="button"
      tabindex="0"
      @keydown.enter="openLightbox"
      @keydown.space.prevent="openLightbox"
      :aria-label="`View ${item.title} preview`"
    >
      <img
        v-if="item.thumbnailUrl"
        :src="item.thumbnailUrl"
        :alt="`${item.title} thumbnail`"
        class="gallery-card__image"
        loading="lazy"
      />
      <div v-else class="gallery-card__placeholder">
        <UiIcon name="ph:image-duotone" size="xl" />
      </div>
      
      <!-- Type Badge -->
      <UiBadge
        class="gallery-card__type-badge"
        :variant="typeVariant"
        size="sm"
        pill
      >
        <UiIcon :name="typeIcon" size="xs" />
        {{ typeLabel }}
      </UiBadge>

      <!-- Expand Indicator -->
      <div class="gallery-card__expand-indicator">
        <UiIcon name="ph:arrows-out" size="sm" />
      </div>
    </div>

    <!-- Content -->
    <div class="gallery-card__content">
      <h3 class="gallery-card__title">
        <a 
          :href="item.url" 
          target="_blank" 
          rel="noopener noreferrer"
          class="gallery-card__title-link"
        >
          {{ item.title }}
          <UiIcon name="ph:arrow-square-out" size="xs" class="gallery-card__title-icon" />
        </a>
      </h3>
      <p 
        class="gallery-card__description" 
        :title="item.description"
      >
        {{ item.description }}
      </p>
      
      <!-- Tags -->
      <div v-if="item.tags?.length" class="gallery-card__tags">
        <span
          v-for="tag in item.tags.slice(0, 3)"
          :key="tag"
          class="gallery-card__tag"
        >
          #{{ tag }}
        </span>
      </div>

      <!-- Author -->
      <div class="gallery-card__meta">
        <component
          :is="item.authorUrl ? 'a' : 'span'"
          :href="item.authorUrl || undefined"
          :target="item.authorUrl ? '_blank' : undefined"
          :rel="item.authorUrl ? 'noopener noreferrer' : undefined"
          class="gallery-card__author"
          :class="{ 'gallery-card__author--link': item.authorUrl }"
        >
          <img
            v-if="authorAvatarUrl"
            :src="authorAvatarUrl"
            :alt="`${item.author}'s avatar`"
            class="gallery-card__avatar"
            loading="lazy"
            @error="onAvatarError"
          />
          <UiIcon v-else name="ph:user-duotone" size="sm" class="gallery-card__avatar-icon" />
          <span class="gallery-card__author-name">{{ item.author }}</span>
        </component>
        <span v-if="item.date" class="gallery-card__date">
          {{ formatDate(item.date) }}
        </span>
      </div>
    </div>

    <!-- Lightbox -->
    <ImageLightbox
      :is-open="isLightboxOpen"
      :current-index="0"
      :images="lightboxImages"
      :font-name="item.title"
      @close="closeLightbox"
      @update-index="() => {}"
    />
  </article>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { UiIcon, UiBadge } from '../ui'
import ImageLightbox from '../FontShowcase/ImageLightbox.vue'
import type { GalleryItem, GalleryItemType } from './types'

defineOptions({ name: 'GalleryCard' })

const props = defineProps<{
  item: GalleryItem
}>()

// Lightbox state
const isLightboxOpen = ref(false)
const avatarLoadFailed = ref(false)

const lightboxImages = computed(() => {
  return props.item.thumbnailUrl ? [props.item.thumbnailUrl] : []
})

function openLightbox() {
  if (props.item.thumbnailUrl) {
    isLightboxOpen.value = true
  }
}

function closeLightbox() {
  isLightboxOpen.value = false
}

// GitHub avatar URL
const authorAvatarUrl = computed(() => {
  if (avatarLoadFailed.value) return null
  
  // Extract GitHub username from authorUrl if it's a GitHub profile
  if (props.item.authorUrl?.includes('github.com/')) {
    const match = props.item.authorUrl.match(/github\.com\/([^\/]+)/)
    if (match) {
      return `https://github.com/${match[1]}.png?size=64`
    }
  }
  
  // Fallback: try author name as GitHub username
  if (props.item.author && !props.item.author.includes(' ')) {
    return `https://github.com/${props.item.author}.png?size=64`
  }
  
  return null
})

function onAvatarError() {
  avatarLoadFailed.value = true
}

// Type-specific styling and icons
const typeConfig: Record<GalleryItemType, { icon: string; label: string; variant: 'primary' | 'success' | 'warning' | 'danger' | 'default' }> = {
  website: { icon: 'ph:globe-duotone', label: 'Website', variant: 'primary' },
  'music-video': { icon: 'ph:music-notes-duotone', label: 'Music Video', variant: 'success' },
  installation: { icon: 'ph:cube-duotone', label: 'Installation', variant: 'warning' },
  game: { icon: 'ph:game-controller-duotone', label: 'Game', variant: 'danger' },
  experiment: { icon: 'ph:flask-duotone', label: 'Experiment', variant: 'default' },
  integration: { icon: 'ph:plugs-connected-duotone', label: 'Integration', variant: 'primary' },
  other: { icon: 'ph:sparkle-duotone', label: 'Project', variant: 'default' }
}

const typeIcon = computed(() => typeConfig[props.item.type]?.icon ?? 'ph:sparkle-duotone')
const typeLabel = computed(() => typeConfig[props.item.type]?.label ?? 'Project')
const typeVariant = computed(() => typeConfig[props.item.type]?.variant ?? 'default')

function formatDate(dateString: string | null | undefined): string {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}
</script>

<style scoped>
.gallery-card {
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.25s ease;
  height: 100%;
}

.gallery-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 8px 24px -8px rgba(0, 0, 0, 0.2);
}

.gallery-card--featured {
  border-color: var(--vp-c-brand-dimm);
}

/* Thumbnail */
.gallery-card__thumbnail {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: var(--vp-c-bg);
  overflow: hidden;
  cursor: pointer;
}

.gallery-card__thumbnail:focus {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: -2px;
}

.gallery-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-card__thumbnail:hover .gallery-card__image {
  transform: scale(1.05);
}

.gallery-card__placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: var(--vp-c-text-3);
  background: linear-gradient(135deg, var(--vp-c-bg) 0%, var(--vp-c-bg-soft) 100%);
}

/* Type Badge */
.gallery-card__type-badge {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

/* Expand Indicator */
.gallery-card__expand-indicator {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: color-mix(in srgb, var(--vp-c-bg) 85%, transparent);
  backdrop-filter: blur(8px);
  border-radius: 6px;
  color: var(--vp-c-text-2);
  opacity: 0;
  transform: translateY(-4px);
  transition: all 0.2s ease;
}

.gallery-card__thumbnail:hover .gallery-card__expand-indicator {
  opacity: 1;
  transform: translateY(0);
}

/* Content */
.gallery-card__content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  flex: 1;
}

.gallery-card__title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
}

.gallery-card__title-link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.2s ease;
}

.gallery-card__title-link:hover {
  color: var(--vp-c-brand-1);
}

.gallery-card__title-icon {
  opacity: 0;
  transform: translateX(-4px);
  transition: all 0.2s ease;
}

.gallery-card__title-link:hover .gallery-card__title-icon {
  opacity: 1;
  transform: translateX(0);
}

.gallery-card__description {
  margin: 0;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Tags */
.gallery-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.gallery-card__tag {
  font-family: var(--textmode-font);
  font-size: 0.6875rem;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg);
  padding: 0.125rem 0.5rem;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.gallery-card:hover .gallery-card__tag {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

/* Meta */
.gallery-card__meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px solid var(--vp-c-divider);
}

.gallery-card__author {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.8125rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s ease;
}

.gallery-card__author--link:hover {
  color: var(--vp-c-brand-1);
}

.gallery-card__avatar {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--vp-c-divider);
}

.gallery-card__avatar-icon {
  color: var(--vp-c-text-3);
}

.gallery-card__author-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 120px;
}

.gallery-card__date {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}

/* Responsive */
@media (max-width: 640px) {
  .gallery-card__content {
    padding: 0.875rem;
  }

  .gallery-card__title {
    font-size: 0.9375rem;
  }

  .gallery-card__description {
    font-size: 0.8125rem;
  }

  .gallery-card__author-name {
    max-width: 100px;
  }
}
</style>
