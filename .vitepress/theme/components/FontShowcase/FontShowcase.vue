<template>
  <section class="font-showcase">
    <div v-if="error" class="error-state">
      Error loading fonts: {{ error }}
    </div>
    <template v-else-if="hasFonts">
      <FontCard v-for="font in fonts" :key="font.name" :font="font" />
    </template>
    <div v-else class="loading-state">
      No fonts available right now.
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import FontCard from './FontCard.vue'
import type { Font } from './types'
import fontsData from '../../../data/fonts.json'

const fonts = ref<Font[]>([])
const error = ref<string | null>(null)

try {
  fonts.value = fontsData as Font[]
} catch (err) {
  error.value = err instanceof Error ? err.message : 'Unknown error'
  console.error('Error loading fonts:', err)
}

const hasFonts = computed(() => fonts.value.length > 0)
</script>

<style scoped>
.font-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.loading-state,
.error-state {
  text-align: center;
  padding: 2rem;
  color: var(--vp-c-text-2);
  font-style: italic;
}

.error-state {
  color: var(--vp-c-danger-1);
  background: var(--vp-c-danger-soft);
  border: 1px solid var(--vp-c-danger);
  border-radius: 8px;
  margin: 1rem 0;
}

@media (max-width: 768px) {
  .font-showcase {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
