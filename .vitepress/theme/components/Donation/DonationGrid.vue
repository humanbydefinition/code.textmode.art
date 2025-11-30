<template>
  <section class="donation-grid">
    <template v-if="hasOptions">
      <div v-for="(option, index) in gridOptions" :key="option.title ?? option.link ?? index" class="grid-item">
        <DonationCard v-bind="option" />
      </div>
    </template>
    <p v-else class="donation-grid__empty">
      No donation options are available at the moment.
    </p>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import DonationCard from './DonationCard.vue'
import donationOptions from '../../../data/support.json'
import type { DonationCardProps } from './types'

defineOptions({ name: 'DonationGrid' })

const gridOptions = computed(() => donationOptions as DonationCardProps[])
const hasOptions = computed(() => gridOptions.value.length > 0)
</script>

<style scoped>
.donation-grid {
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

:deep(.donation-card) {
  height: 100%;
}

.donation-grid__empty {
  text-align: center;
  padding: 1.5rem;
  color: var(--vp-c-text-2);
  font-style: italic;
  margin: 0;
}

@media (max-width: 768px) {
  .donation-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 1.5rem 0;
  }
}
</style>
