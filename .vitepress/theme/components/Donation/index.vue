<template>
  <section class="donation-grid">
    <div v-for="option in donationOptions" :key="option.title" class="grid-item">
      <DonationCard v-bind="option" />
    </div>
  </section>
</template>

<script setup lang="ts">
import DonationCard from './DonationCard.vue'
import donationOptions from './options'
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

@media (max-width: 768px) {
  .donation-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 1.5rem 0;
  }
}

@media (max-width: 480px) {
  .donation-grid {
    margin: 1rem 0;
  }
}
</style>
