<template>
  <article class="font-card">
    <div class="font-preview">
      <img :src="font.image" :alt="`${font.name} preview`" class="font-image" />
    </div>
    <div class="font-info">
      <h3 class="font-name">{{ font.name }}</h3>
      <p class="font-description">{{ font.description }}</p>
      <div class="font-details">
        <div class="font-detail">
          <span class="detail-label">Glyph Count:</span>
          <span class="detail-value">{{ font.glyphCount }}</span>
        </div>
        <div class="font-detail">
          <span class="detail-label">License:</span>
          <span class="detail-value">{{ font.license }}</span>
        </div>
      </div>
      <a :href="font.downloadUrl" target="_blank" rel="noopener noreferrer" class="download-link">
        Go to download page
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Font } from './types'

defineProps<{ font: Font }>()
</script>

<style scoped src="./FontCard.css"></style>
