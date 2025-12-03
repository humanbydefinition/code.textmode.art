<template>
  <div class="home-cta">
    <UiButton
      v-for="(action, index) in actions"
      :key="action.link"
      :href="action.link"
      :variant="'secondary'"
      :external="action.external"
      class="home-cta__button"
    >
      {{ action.text }}
    </UiButton>
  </div>
</template>

<script setup lang="ts">
import { UiButton } from '../ui'

interface CtaAction {
  text: string
  link: string
  external?: boolean
}

withDefaults(defineProps<{
  actions?: CtaAction[]
}>(), {
  actions: () => [
    { text: 'Get started', link: '/docs/introduction' },
    { text: 'Installation', link: '/docs/installation' },
    { text: 'View examples', link: '/docs/examples' },
    { text: 'API reference', link: '/api/' }
  ]
})
</script>

<style scoped>
.home-cta {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 1.5rem 0 0 0;
}

.home-cta__button {
  font-family: var(--textmode-font, 'JetBrains Mono', 'Courier New', monospace);
  letter-spacing: 0.1em;
  min-width: 9rem;
}

.home-cta__button::before {
  content: '[ ';
  font-weight: 600;
  letter-spacing: 0;
}

.home-cta__button::after {
  content: ' ]';
  font-weight: 600;
  letter-spacing: 0;
}

@media (max-width: 768px) {
  .home-cta {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
    margin-top: 1.5rem;
  }
}
</style>
