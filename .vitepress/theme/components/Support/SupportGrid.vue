<template>
  <section class="support-grid">
    <template v-if="hasOptions">
      <div v-for="(option, index) in gridOptions" :key="option.title ?? option.link ?? index" class="grid-item">
        <SupportCard v-bind="option" />
      </div>
    </template>
    <p v-else class="support-grid__empty">
      No support options are available at the moment.
    </p>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SupportCard from './SupportCard.vue'
import supportOptions from '../../../data/support.json'
import type { SupportCardProps } from './types'

defineOptions({ name: 'SupportGrid' })

const gridOptions = computed(() => supportOptions as SupportCardProps[])
const hasOptions = computed(() => gridOptions.value.length > 0)
</script>

<style scoped>
.support-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  max-width: 100%;
  align-items: stretch;
}

.grid-item {
  width: 100%;
}

:deep(.support-card) {
  height: 100%;
}

.support-grid__empty {
  text-align: center;
  padding: 1.5rem;
  color: var(--vp-c-text-2);
  font-style: italic;
  margin: 0;
}

@media (max-width: 768px) {
  .support-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 1.5rem 0;
  }
}
</style>
