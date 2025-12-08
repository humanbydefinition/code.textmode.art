<template>
  <UiCard hoverable rounded="md" :padded="false" class="font-card">
    <template #media>
      <div 
        class="font-card__preview" 
        @click="openGallery"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <img :src="coverImage" :alt="`${font.name} preview`" class="font-card__image" />
      </div>
    </template>

    <div class="font-card__body">
      <h3 class="font-card__name">{{ font.name }}</h3>
      <p class="font-card__description">{{ font.description }}</p>
      
      <dl class="font-card__details">
        <div class="font-card__detail">
          <dt>Glyph Count:</dt>
          <dd>{{ font.glyphCount }}</dd>
        </div>
        <div class="font-card__detail">
          <dt>License:</dt>
          <dd>
            <a 
              v-if="isUrl(font.license)" 
              :href="font.license" 
              target="_blank" 
              rel="noopener noreferrer"
              class="font-card__license-link"
            >
              {{ font.license }}
            </a>
            <span v-else>{{ font.license }}</span>
          </dd>
        </div>
      </dl>

      <UiButton
        :href="font.downloadUrl"
        external
        variant="primary"
        class="font-card__cta"
      >
        Go to download page
      </UiButton>
    </div>
  </UiCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { UiCard, UiButton } from '../ui'
import type { Font } from './types'

const props = defineProps<{ font: Font }>()
const emit = defineEmits<{
  openGallery: [images: string[], fontName: string]
}>()

const galleryImages = computed(() => props.font.images ?? [])
const coverImage = computed(() => galleryImages.value[0] || '')

// Touch handling to distinguish between tap and scroll
let touchStartX = 0
let touchStartY = 0
let touchStartTime = 0

const handleTouchStart = (event: TouchEvent) => {
  touchStartX = event.touches[0].clientX
  touchStartY = event.touches[0].clientY
  touchStartTime = Date.now()
}

const handleTouchEnd = (event: TouchEvent) => {
  const touchEndX = event.changedTouches[0].clientX
  const touchEndY = event.changedTouches[0].clientY
  const touchEndTime = Date.now()
  
  const deltaX = Math.abs(touchEndX - touchStartX)
  const deltaY = Math.abs(touchEndY - touchStartY)
  const deltaTime = touchEndTime - touchStartTime
  
  // Only open gallery if it's a tap (minimal movement, short duration)
  const isTap = deltaX < 10 && deltaY < 10 && deltaTime < 300
  
  if (isTap) {
    event.preventDefault()
    openGallery()
  }
}

const openGallery = () => {
  emit('openGallery', galleryImages.value, props.font.name)
}

const isUrl = (str: string): boolean => {
  return str.startsWith('http://') || str.startsWith('https://')
}
</script>

<style scoped>
.font-card__preview {
  background: #f8f9fa;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  border-bottom: 1px solid var(--vp-c-border);
  position: relative;
  transition: all 0.2s ease;
  cursor: zoom-in;
}

.font-card__preview:hover {
  background: #e9ecef;
}

.font-card__preview:hover .font-card__image {
  transform: scale(1.02);
}

.dark .font-card__preview {
  background: var(--vp-c-bg-alt);
}

.dark .font-card__preview:hover {
  background: var(--vp-c-bg-mute);
}

.font-card__image {
  max-width: 100%;
  max-height: 180px;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.dark .font-card__image {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.font-card__body {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.font-card__name {
  margin: 0 0 0.75rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.font-card__description {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  flex: 1;
}

.font-card__details {
  margin: 0 0 1.5rem 0;
}

.font-card__detail {
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  padding: 0.25rem 0;
  border-bottom: 1px solid var(--vp-c-divider-light);
}

.font-card__detail dt {
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.font-card__detail dd {
  margin: 0;
  color: var(--vp-c-text-1);
  text-align: right;
}

.font-card__license-link {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: color 0.2s;
}

.font-card__license-link:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}

.font-card__cta {
  margin-top: auto;
}

@media (max-width: 768px) {
  .font-card__preview {
    min-height: 150px;
    padding: 1rem;
  }

  .font-card__image {
    max-height: 130px;
  }
}
</style>
