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
import fontsData from '../../data/fonts.json'

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

<style src="./FontShowcase.css"></style>
