<script setup lang="ts">
import { UiButton } from '../ui'
import SplitFlap from '../SplitFlap/SplitFlap.vue'

interface CtaAction {
  text: string
  link: string
  external?: boolean
}

withDefaults(defineProps<{
  actions?: CtaAction[]
  phrases?: string[]
}>(), {
  actions: () => [
    { text: 'Begin your journey', link: '/docs/introduction' }
  ],
  phrases: () => [
    'A retro game revival',
    'A live performance',
    'A generative masterpiece',
    'An interactive installation',
    'A nostalgic demo scene',
    'A hypnotic animation',
    'An ASCII art generator',
    'A terminal adventure',
    'A digital artifact',
    'A creative experiment',
  ]
})
</script>

<template>
  <section class="what-will-you-create">
    <h2 class="title">What will <span class="highlight">you</span> create?</h2>
    
    <div class="terminal-box">
      <div class="terminal-line">
        <span class="terminal-prompt">&gt;_</span>
        <ClientOnly>
          <SplitFlap :phrases="phrases" :interval="3500" :charDelay="35" :showCursor="true" />
        </ClientOnly>
      </div>
    </div>
    
    <p class="tagline">
      Every sketch starts with an empty file.<br class="mobile-break" />
      Your next masterpiece starts the same way.
    </p>
    
    <div class="cta-wrapper">
      <UiButton
        v-for="action in actions"
        :key="action.link"
        :href="action.link"
        variant="secondary"
        :external="action.external"
        class="cta-button"
      >
        {{ action.text }}
      </UiButton>
    </div>
  </section>
</template>

<style scoped>
.what-will-you-create {
  padding: 2rem 0;
  margin: 2rem 0;
}

/* Title styling */
.title {
  font-family: var(--textmode-font, 'JetBrains Mono', 'Courier New', monospace);
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.02em;
}

.title .highlight {
  color: var(--vp-c-brand-1);
}

/* Terminal box */
.terminal-box {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 1.5rem 0;
  padding: 1rem 1.25rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  max-width: 600px;
}

.terminal-box:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 1px var(--vp-c-brand-1);
}

.terminal-line {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: var(--textmode-font, 'JetBrains Mono', 'Courier New', monospace);
}

.terminal-prompt {
  font-size: 1rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
  padding-right: 1rem;
  border-right: 2px solid var(--vp-c-divider);
  line-height: 1;
}

/* Tagline */
.tagline {
  font-family: var(--textmode-font, 'JetBrains Mono', 'Courier New', monospace);
  font-size: 0.9375rem;
  color: var(--vp-c-text-2);
  margin: 1.5rem 0;
  line-height: 1.7;
}

.mobile-break {
  display: none;
}

/* CTA buttons */
.cta-wrapper {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.cta-button {
  font-family: var(--textmode-font, 'JetBrains Mono', 'Courier New', monospace);
  letter-spacing: 0.05em;
}

.cta-button::before {
  content: '[ ';
  font-weight: 600;
}

.cta-button::after {
  content: ' ]';
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .what-will-you-create {
    padding: 1.5rem 0;
  }

  .title {
    font-size: 1.375rem;
  }

  .terminal-box {
    padding: 0.875rem 1rem;
    max-width: 100%;
  }

  .terminal-line {
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .terminal-prompt {
    font-size: 0.9375rem;
    padding-right: 0.75rem;
    border-right-width: 1px;
  }

  .tagline {
    font-size: 0.875rem;
  }

  .mobile-break {
    display: inline;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.125rem;
  }
}
</style>
