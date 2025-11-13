<template>
  <div class="font-showcase">
    <div v-if="loading" class="loading-state">
      Loading fonts...
    </div>
    <div v-else-if="error" class="error-state">
      Error loading fonts: {{ error }}
    </div>
    <div v-else v-for="font in fonts" :key="font.name" class="font-card">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Font {
  name: string;
  image: string;
  description: string;
  downloadUrl: string;
  glyphCount: string;
  license: string;
}

const fonts = ref<Font[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const response = await fetch('/fonts.json');
    if (!response.ok) {
      throw new Error(`Failed to load fonts: ${response.statusText}`);
    }
    const data = await response.json();
    fonts.value = data;
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error';
    console.error('Error loading fonts:', err);
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.font-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.font-card {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.font-card:hover {
  border-color: var(--vp-c-brand);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.font-preview {
  background: #f8f9fa;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  border-bottom: 1px solid var(--vp-c-border);
}

.font-image {
  max-width: 100%;
  max-height: 180px;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.font-info {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.font-name {
  margin: 0 0 0.75rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.font-description {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  flex: 1;
}

.font-details {
  margin: 0 0 1.5rem 0;
}

.font-detail {
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  padding: 0.25rem 0;
  border-bottom: 1px solid var(--vp-c-divider-light);
}

.detail-label {
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.detail-value {
  color: var(--vp-c-text-1);
  text-align: right;
}

.download-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white);
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: background-color 0.25s ease;
  margin-top: auto;
}

.download-link:hover {
  color: var(--vp-c-white);
  background: var(--vp-c-brand-2);
}

/* Dark mode adjustments */
.dark .font-preview {
  background: var(--vp-c-bg-alt);
}

.dark .font-image {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* Loading and error states */
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

/* Mobile responsiveness */
@media (max-width: 768px) {
  .font-showcase {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .font-card {
    margin: 0 -1rem;
  }

  .font-preview {
    min-height: 150px;
    padding: 1rem;
  }

  .font-image {
    max-height: 130px;
  }
}
</style>
