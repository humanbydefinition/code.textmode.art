<template>
  <section class="gallery-grid">
    <!-- Header -->
    <div class="gallery-grid__header">
      <h2 class="gallery-grid__title">Community showcase</h2>
      <p class="gallery-grid__subtitle">
        Discover amazing projects, installations, music videos, and experiments built with 
        <code>textmode.js</code>. From websites to live performances - textmode art is everywhere.
      </p>
    </div>

    <!-- Filters -->
    <div v-if="showFilters" class="gallery-grid__filters">
      <button
        v-for="filter in filters"
        :key="filter.value"
        class="gallery-grid__filter-btn"
        :class="{ 'gallery-grid__filter-btn--active': activeFilter === filter.value }"
        @click="activeFilter = filter.value"
      >
        <UiIcon :name="filter.icon" size="sm" />
        {{ filter.label }}
        <span class="gallery-grid__filter-count">({{ getFilterCount(filter.value) }})</span>
      </button>
    </div>

    <!-- Grid -->
    <TransitionGroup
      name="gallery-fade"
      tag="div"
      class="gallery-grid__grid"
    >
      <GalleryCard
        v-for="(item, index) in filteredItems"
        v-if="isReady"
        :key="item.id"
        :item="item"
        :style="{ '--delay': index * 50 + 'ms' }"
      />
      
      <!-- Custom CTA Card -->
      <div 
        v-if="isReady" 
        key="cta-card" 
        class="gallery-grid__cta-card"
        :style="{ '--delay': filteredItems.length * 50 + 'ms' }"
      >
        <div class="gallery-grid__cta-card-icon">
          <UiIcon name="ph:plus-circle-duotone" size="xl" />
        </div>
        <h3 class="gallery-grid__cta-card-title">Your project here!</h3>
        <p class="gallery-grid__cta-card-desc">
          Built something with <code>textmode.js</code>? Share it with the community!
        </p>
        <div class="gallery-grid__cta-card-actions">
          <a
            href="https://github.com/humanbydefinition/code.textmode.art/edit/main/.vitepress/data/gallery.json"
            target="_blank"
            rel="noopener noreferrer"
            class="gallery-grid__cta-card-btn"
          >
            <UiIcon name="ph:github-logo-duotone" size="sm" />
            Submit Project
          </a>
        </div>
      </div>
    </TransitionGroup>

    <!-- Empty State -->
    <div v-if="filteredItems.length === 0" class="gallery-grid__empty">
      <UiIcon name="ph:magnifying-glass-duotone" size="xl" />
      <p>No projects found in this category.</p>
    </div>

    <!-- CTA Banner -->
    <div class="gallery-grid__cta">
      <div class="gallery-grid__cta-content">
        <UiIcon name="ph:upload-duotone" size="xl" class="gallery-grid__cta-icon" />
        <div class="gallery-grid__cta-text">
          <h4 class="gallery-grid__cta-title">Submit your project</h4>
          <p class="gallery-grid__cta-desc">
            Built something awesome with <code>#textmodejs</code>? Add your project to the gallery by creating a pull request, 
            or share it on Discord and we'll help you get it featured!
          </p>
        </div>
      </div>
      <div class="gallery-grid__cta-actions">
        <a
          href="https://github.com/humanbydefinition/code.textmode.art/edit/main/.vitepress/data/gallery.json"
          target="_blank"
          rel="noopener noreferrer"
          class="gallery-grid__cta-btn gallery-grid__cta-btn--primary"
        >
          <UiIcon name="ph:github-logo-duotone" size="sm" />
          Create Pull Request
        </a>
        <a
          href="https://discord.gg/sjrw8QXNks"
          target="_blank"
          rel="noopener noreferrer"
          class="gallery-grid__cta-btn gallery-grid__cta-btn--secondary"
        >
          <UiIcon name="ic:baseline-discord" size="sm" />
          Share on Discord
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { UiIcon } from '../ui'
import GalleryCard from './GalleryCard.vue'
import galleryData from '../../../data/gallery.json'
import type { GalleryItem, GalleryItemType, GalleryGridProps } from './types'

defineOptions({ name: 'GalleryGrid' })

const props = withDefaults(defineProps<GalleryGridProps>(), {
  showFilters: true,
  initialFilter: 'all'
})

// Process gallery data
interface RawGalleryItem {
  title: string
  description: string
  type: GalleryItemType
  thumbnailUrl: string | null
  url: string
  author: string
  authorUrl?: string | null
  tags?: string[]
  featured?: boolean
  date?: string | null
}

// Initialize gallery items without randomization
const galleryItems = ref<GalleryItem[]>([])
const isReady = ref(false)

// Initialize items on mount to avoid SSR hydration mismatch
onMounted(() => {
  if (props.items) {
    galleryItems.value = props.items
    requestAnimationFrame(() => isReady.value = true)
    return
  }
  
  const items = Object.entries(galleryData as Record<string, RawGalleryItem>).map(([id, data]) => ({
    id,
    ...data
  }))
  
  // Randomize order using Fisher-Yates shuffle
  const shuffled = [...items]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  
  galleryItems.value = shuffled
  requestAnimationFrame(() => isReady.value = true)
})

// Filters
interface FilterOption {
  value: GalleryItemType | 'all'
  label: string
  icon: string
}

const filters: FilterOption[] = [
  { value: 'all', label: 'all', icon: 'ph:squares-four-duotone' },
  { value: 'website', label: 'websites', icon: 'ph:globe-duotone' },
  { value: 'integration', label: 'integrations', icon: 'ph:plugs-connected-duotone' },
  { value: 'music-video', label: 'music videos', icon: 'ph:music-notes-duotone' },
  { value: 'installation', label: 'installations', icon: 'ph:cube-duotone' },
  { value: 'game', label: 'games', icon: 'ph:game-controller-duotone' },
  { value: 'experiment', label: 'experiments', icon: 'ph:flask-duotone' }
]

const activeFilter = ref<GalleryItemType | 'all'>(props.initialFilter)

const filteredItems = computed(() => {
  if (activeFilter.value === 'all') {
    return galleryItems.value
  }
  return galleryItems.value.filter(item => item.type === activeFilter.value)
})

function getFilterCount(filter: GalleryItemType | 'all'): number {
  if (filter === 'all') return galleryItems.value.length
  return galleryItems.value.filter(item => item.type === filter).length
}
</script>

<style scoped>
.gallery-grid {
  margin: 2rem 0;
}

/* Header */
.gallery-grid__header {
  margin-bottom: 2rem;
}

.gallery-grid__title {
  font-size: 1.65rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 0.75rem;
  line-height: 1.3;
  border-top: none;
  padding-top: 0;
}

.gallery-grid__subtitle {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  max-width: 720px;
  margin: 0;
}

.gallery-grid__subtitle code {
  font-family: var(--textmode-font);
  font-size: 0.9rem;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
}

/* Filters */
.gallery-grid__filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.gallery-grid__filter-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 0.875rem;
  font-family: var(--textmode-font);
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.gallery-grid__filter-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.gallery-grid__filter-btn--active {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.gallery-grid__filter-count {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  margin-left: 0.125rem;
}

.gallery-grid__filter-btn--active .gallery-grid__filter-count {
  color: var(--vp-c-brand-2);
}

/* Grid */
.gallery-grid__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

/* Animation */
.gallery-fade-enter-active,
.gallery-fade-leave-active {
  transition: all 0.3s ease;
  transition-delay: var(--delay, 0ms);
}

.gallery-fade-enter-from,
.gallery-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.gallery-fade-move {
  transition: transform 0.3s ease;
}

/* Empty State */
.gallery-grid__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 4rem 2rem;
  color: var(--vp-c-text-3);
  text-align: center;
}

.gallery-grid__empty p {
  margin: 0;
  font-size: 0.9375rem;
}

/* CTA Banner */
.gallery-grid__cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 3rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--vp-c-brand-soft) 0%, var(--vp-c-bg-soft) 100%);
  border: 1px solid var(--vp-c-brand-dimm);
  border-radius: 12px;
}

.gallery-grid__cta-content {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  flex: 1;
}

.gallery-grid__cta-icon {
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.gallery-grid__cta-text {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.gallery-grid__cta-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
}

.gallery-grid__cta-desc {
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin: 0;
}

.gallery-grid__cta-desc code {
  font-family: var(--textmode-font);
  font-size: 0.8125rem;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
}

/* CTA Actions */
.gallery-grid__cta-actions {
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;
}

.gallery-grid__cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-family: var(--textmode-font);
  font-size: 0.8125rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.gallery-grid__cta-btn--primary {
  background: var(--vp-c-brand-1);
  color: white;
  border: 1px solid var(--vp-c-brand-1);
}

.gallery-grid__cta-btn--primary:hover {
  background: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px -2px rgba(var(--vp-c-brand-1-rgb), 0.3);
}

.gallery-grid__cta-btn--secondary {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-border);
}

.gallery-grid__cta-btn--secondary:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  transform: translateY(-1px);
}

/* CTA Card */
.gallery-grid__cta-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, var(--vp-c-brand-soft) 0%, var(--vp-c-bg-soft) 100%);
  border: 2px dashed var(--vp-c-brand-1);
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  min-height: 320px;
}

.gallery-grid__cta-card:hover {
  border-color: var(--vp-c-brand-2);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px -4px rgba(var(--vp-c-brand-1-rgb), 0.2);
}

.gallery-grid__cta-card-icon {
  color: var(--vp-c-brand-1);
  opacity: 0.8;
}

.gallery-grid__cta-card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0;
}

.gallery-grid__cta-card-desc {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin: 0;
  max-width: 280px;
}

.gallery-grid__cta-card-desc code {
  font-family: var(--textmode-font);
  font-size: 0.875rem;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
}

.gallery-grid__cta-card-actions {
  margin-top: 0.5rem;
}

.gallery-grid__cta-card-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  font-family: var(--textmode-font);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  background: var(--vp-c-brand-1);
  color: white;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 8px;
  transition: all 0.2s ease;
}

.gallery-grid__cta-card-btn:hover {
  background: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px -2px rgba(var(--vp-c-brand-1-rgb), 0.4);
}

/* Responsive */
@media (max-width: 768px) {
  .gallery-grid__title {
    font-size: 1.5rem;
  }

  .gallery-grid__grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1rem;
  }

  .gallery-grid__filters {
    gap: 0.375rem;
  }

  .gallery-grid__filter-btn {
    padding: 0.375rem 0.625rem;
    font-size: 0.75rem;
  }

  .gallery-grid__cta {
    flex-direction: column;
    align-items: stretch;
    gap: 1.25rem;
    padding: 1.25rem;
  }

  .gallery-grid__cta-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .gallery-grid__cta-actions {
    flex-direction: column;
    width: 100%;
  }

  .gallery-grid__cta-btn {
    justify-content: center;
    padding: 0.75rem 1rem;
  }
}

@media (max-width: 480px) {
  .gallery-grid__grid {
    grid-template-columns: 1fr;
  }

  .gallery-grid__filter-btn {
    flex: 1 1 auto;
    justify-content: center;
  }
}
</style>
