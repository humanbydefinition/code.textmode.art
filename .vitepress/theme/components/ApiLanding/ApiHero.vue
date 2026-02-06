<template>
  <div class="api-hero">
    <div class="api-hero__intro">
      <p class="api-eyebrow">{{ eyebrow }}</p>
      <h1 class="api-title">{{ title }}</h1>
      <p class="api-lede">{{ lede }}</p>
      <div class="api-hero__actions">
        <UiButton
          v-for="action in actions"
          :key="action.href"
          :href="action.href"
          :variant="action.variant ?? 'secondary'"
        >
          {{ action.label }}
        </UiButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UiButton } from '../ui'
import type { ApiHeroAction } from './types'

defineOptions({ name: 'ApiHero' })

defineProps<{
  eyebrow: string
  title: string
  lede: string
  actions: ApiHeroAction[]
}>()
</script>

<style scoped>
.api-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.1fr);
  gap: 2rem;
  align-items: start;
}

.api-eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--vp-c-text-3);
  margin: 0 0 0.6rem 0;
}

.api-title {
  font-size: clamp(2rem, 3vw, 2.6rem);
  margin: 0 0 0.75rem 0;
  line-height: 1.2;
  color: var(--vp-c-text-1);
}

.api-lede {
  color: var(--vp-c-text-2);
  font-size: 0.98rem;
  line-height: 1.6;
  max-width: 32rem;
}

.api-hero__actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1.4rem;
}

@media (max-width: 960px) {
  .api-hero {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .api-hero__actions {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
