<template>
  <section class="api-section">
    <div class="api-section__header">
      <h2>{{ title }}</h2>
      <p>{{ subtitle }}</p>
    </div>
    <slot />
  </section>
</template>

<script setup lang="ts">
defineOptions({ name: 'ApiSection' })

defineProps<{
  title: string
  subtitle: string
}>()
</script>

<style scoped>
.api-section__header h2 {
  margin: 0 0 0.4rem 0;
  font-size: 1.4rem;
}

.api-section__header p {
  margin: 0;
  color: var(--vp-c-text-2);
}
</style>
