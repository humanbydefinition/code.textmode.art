<template>
  <UiCard :hoverable="true" :rounded="'md'" :padded="true" class="api-card">
    <div class="api-card__header">
      <div>
        <p class="api-card__kicker">{{ library.kicker }}</p>
        <div class="api-card__title-row">
          <h3 class="api-card__title">{{ library.name }}</h3>
          <StarCta :user="library.githubUser" :repo="library.githubRepo" />
        </div>
      </div>
      <UiBadge variant="subtle" pill>{{ library.badge }}</UiBadge>
    </div>
    <p class="api-card__description">{{ library.description }}</p>
    <ul class="api-card__list">
      <li v-for="item in library.highlights" :key="item">{{ item }}</li>
    </ul>
    <div class="api-card__actions">
      <UiButton :href="library.cta" variant="secondary">
        Open API
      </UiButton>
      <UiButton :href="library.secondary" variant="ghost">
        Quick start
      </UiButton>
    </div>
  </UiCard>
</template>

<script setup lang="ts">
import { UiBadge, UiButton, UiCard } from '../ui'
import StarCta from '../StarCta/StarCta.vue'
import type { ApiLibrary } from './types'

defineOptions({ name: 'ApiLibraryCard' })

defineProps<{
  library: ApiLibrary
}>()
</script>

<style scoped>
.api-card {
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.api-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.api-card__kicker {
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.65rem;
  color: var(--vp-c-text-3);
  margin: 0 0 0.2rem 0;
}

.api-card__title {
  margin: 0;
  font-size: 1.4rem;
  line-height: 1.05;
  color: var(--vp-c-text-1);
}

.api-card__title-row {
  display: flex;
  align-items: baseline;
  gap: 1rem;
}

.api-card__description {
  margin: 0.8rem 0 0.9rem 0;
  color: var(--vp-c-text-2);
}

.api-card__list {
  margin: 0 0 1rem 0;
  padding-left: 1.2rem;
  color: var(--vp-c-text-2);
  display: grid;
  gap: 0.35rem;
}

.api-card__title-row :deep(.star-cta) {
  margin-left: 0;
  padding-left: 0;
  transform: translateY(2px);
}

.api-card__actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: auto;
}

@media (max-width: 640px) {
  .api-card__actions {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
