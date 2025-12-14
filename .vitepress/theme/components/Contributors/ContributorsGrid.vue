<script setup lang="ts">
import ContributorCard from './ContributorCard.vue'

interface ContributorLink {
  icon: string
  link: string
}

interface Contributor {
  avatar: string
  name: string
  desc: string
  links?: ContributorLink[]
}

defineProps<{
  contributors: Contributor[]
}>()
</script>

<template>
  <div class="contributors-grid">
    <ContributorCard
      v-for="contributor in contributors"
      :key="contributor.name"
      :contributor="contributor"
    />
  </div>
</template>

<style scoped>
.contributors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

@media (max-width: 640px) {
  .contributors-grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1rem;
  }
}

@media (max-width: 400px) {
  .contributors-grid {
    grid-template-columns: 1fr;
  }
}
</style>
