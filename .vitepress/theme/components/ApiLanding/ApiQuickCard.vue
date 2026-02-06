<template>
  <UiCard :href="link.href" :hoverable="true" :rounded="'sm'" :padded="true" class="api-quick-card">
    <div class="api-quick-card__title">{{ link.title }}</div>
    <p class="api-quick-card__description">{{ link.description }}</p>
    <span class="api-quick-card__meta">
      <span>{{ link.metaLabel }}</span>
      <span class="api-quick-card__meta-source">{{ link.metaSource }}</span>
    </span>
  </UiCard>
</template>

<script setup lang="ts">
import { UiCard } from '../ui'
import type { ApiQuickLink } from './types'

defineOptions({ name: 'ApiQuickCard' })

defineProps<{
  link: ApiQuickLink
}>()
</script>

<style scoped>
.api-quick-card {
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  display: flex;
  flex-direction: column;
  min-height: 170px;
}

.api-quick-card__title {
  font-size: 1rem;
  margin-bottom: 0.4rem;
  color: var(--vp-c-text-1);
}

.api-quick-card__description {
  color: var(--vp-c-text-2);
  font-size: 0.88rem;
  margin: 0 0 0.6rem 0;
}

.api-quick-card__meta {
  margin-top: auto;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--vp-c-text-3);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.7rem;
  font-weight: 600;
}

.api-quick-card__meta-source {
  font-weight: 500;
  letter-spacing: 0.18em;
}
</style>
