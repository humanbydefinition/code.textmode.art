<template>
  <div class="donation-grid">
    <div v-for="(option, index) in options" :key="index" class="grid-item">
      <DonationCard v-bind="option" />
    </div>
  </div>
</template>

<script setup lang="ts">
import DonationCard, { type DonationCardProps } from './DonationCard.vue'

const options: DonationCardProps[] = [
  {
    iconType: 'kofi',
    title: 'Ko-fi',
    description: 'Buy me a coffee to fuel more creative coding projects',
    link: 'https://ko-fi.com/humanbydefinition',
    color: '#ff5e5b'
  },
  {
    iconType: 'github',
    title: 'GitHub Sponsors',
    description: 'Support ongoing development directly through GitHub',
    link: 'https://github.com/sponsors/humanbydefinition',
    color: '#24292e'
  },
  {
    iconType: 'ethereum',
    title: 'Ethereum',
    description: 'Donate cryptocurrency via Ethereum',
    link: 'https://etherscan.io/address/0xAA14d79ccF069d3E57eeCb6822c1F241e0d46C42',
    color: '#627eea'
  },
  {
    iconType: 'tezos',
    title: 'Tezos',
    description: 'Donate cryptocurrency via Tezos',
    link: 'https://tzkt.io/humanbydefinition.tez',
    color: '#2c7df7'
  }
]
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

/* Ensure the inner card stretches to the full grid track height */
:deep(.donation-card) {
  height: 100%;
}

/* Mobile responsiveness */
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
