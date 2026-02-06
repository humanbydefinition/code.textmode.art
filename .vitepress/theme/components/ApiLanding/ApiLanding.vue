<template>
  <section class="api-landing">
    <div class="api-hero">
      <div class="api-hero__intro">
        <p class="api-eyebrow">API Reference</p>
        <h1 class="api-title">textmode.js API ecosystem</h1>
        <p class="api-lede">
          A clean, typed surface for the core renderer and add-on modules. The ecosystem will grow,
          and this page will expand with it.
        </p>
        <div class="api-hero__actions">
          <UiButton href="/api/textmode.js/" variant="secondary">
            textmode.js API
          </UiButton>
          <UiButton href="/api/textmode.synth.js/" variant="secondary">
            textmode.synth.js API
          </UiButton>
        </div>
      </div>
      <div class="api-hero__panel">
        <pre class="api-diagram" aria-hidden="true">{{ diagram }}</pre>
      </div>
    </div>

    <div class="api-section">
      <div class="api-section__header">
        <h2>Current modules</h2>
        <p>More add-ons will appear here as they land.</p>
      </div>
      <div class="api-library-grid">
        <UiCard
          v-for="library in libraries"
          :key="library.name"
          :hoverable="true"
          :rounded="'md'"
          :padded="true"
          class="api-card"
        >
          <div class="api-card__header">
            <div>
              <p class="api-card__kicker">{{ library.kicker }}</p>
              <h3 class="api-card__title">{{ library.name }}</h3>
            </div>
            <UiBadge variant="subtle" pill>{{ library.badge }}</UiBadge>
          </div>
          <p class="api-card__description">{{ library.description }}</p>
          <ul class="api-card__list">
            <li v-for="item in library.highlights" :key="item">{{ item }}</li>
          </ul>
          <div class="api-card__actions">
            <UiButton :href="library.cta" variant="primary">
              Open API
            </UiButton>
            <UiButton :href="library.secondary" variant="ghost">
              Quick start
            </UiButton>
          </div>
        </UiCard>
      </div>
    </div>

    <div class="api-section">
      <div class="api-section__header">
        <h2>Quick jumps</h2>
        <p>Direct entry points to common surfaces.</p>
      </div>
      <div class="api-quick-grid">
        <UiCard
          v-for="link in quickLinks"
          :key="link.title"
          :href="link.href"
          :hoverable="true"
          :rounded="'sm'"
          :padded="true"
          class="api-quick-card"
        >
          <div class="api-quick-card__title">{{ link.title }}</div>
          <p class="api-quick-card__description">{{ link.description }}</p>
          <span class="api-quick-card__meta">
            <span>{{ link.metaLabel }}</span>
            <span class="api-quick-card__meta-source">{{ link.metaSource }}</span>
          </span>
        </UiCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { UiBadge, UiButton, UiCard } from '../ui'

const diagram = `+-----------------------------+
| textmode.js (core)          |
| grid · layers · shaders     |
| input · loadables           |
+-------------+---------------+
              |
              v
+-----------------------------+
| add-on modules              |
| textmode.synth.js           |
| more modules incoming       |
+-----------------------------+`

const libraries = [
  {
    name: 'textmode.js',
    kicker: 'Core renderer',
    badge: 'Core',
    description: 'Rendering primitives, layers, loadables, input handling, and shaders for ASCII canvases.',
    highlights: [
      'Grid-driven drawing API',
      'Fonts, images, and video loadables',
      'Plugin hooks + lifecycle events'
    ],
    cta: '/api/textmode.js/',
    secondary: '/docs/introduction'
  },
  {
    name: 'textmode.synth.js',
    kicker: 'Add-on module',
    badge: 'Synth',
    description: 'Hydra-inspired synthesis chains for procedural characters, colors, and modulation.',
    highlights: [
      'Chainable sources and modulators',
      'Pattern generators: noise, osc, voronoi',
      'Installs as a textmode.js plugin'
    ],
    cta: '/api/textmode.synth.js/',
    secondary: '/api/textmode.synth.js/#example'
  }
]

const quickLinks = [
  {
    title: 'Textmodifier',
    description: 'Main drawing and lifecycle interface for textmode.js.',
    metaLabel: 'CLASS',
    metaSource: 'TEXTMODE.JS',
    href: '/api/textmode.js/classes/Textmodifier.md'
  },
  {
    title: 'Input namespace',
    description: 'Keyboard, mouse, and touch event contracts.',
    metaLabel: 'NAMESPACE',
    metaSource: 'TEXTMODE.JS',
    href: '/api/textmode.js/namespaces/input/'
  },
  {
    title: 'SynthSource',
    description: 'Chainable synth source for building shader graphs.',
    metaLabel: 'CLASS',
    metaSource: 'TEXTMODE.SYNTH.JS',
    href: '/api/textmode.synth.js/classes/SynthSource.md'
  },
  {
    title: 'osc()',
    description: 'Oscillator pattern generator for synth chains.',
    metaLabel: 'FUNCTION',
    metaSource: 'TEXTMODE.SYNTH.JS',
    href: '/api/textmode.synth.js/functions/osc.md'
  }
]
</script>

<style scoped>
.api-landing {
  font-family: var(--textmode-font);
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0.5rem 0 2rem 0;
}

.api-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
  gap: 2rem;
  align-items: start;
}

.api-eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--vp-c-text-3);
  margin: 0 0 0.6rem 0;
}

.api-title {
  font-size: clamp(2rem, 3vw, 2.6rem);
  margin: 0 0 0.75rem 0;
  line-height: 1.2;
  color: var(--vp-c-text-1);
}

.api-lede {
  color: var(--vp-c-text-2);
  font-size: 0.98rem;
  line-height: 1.6;
  max-width: 32rem;
}

.api-hero__actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1.4rem;
}

.api-hero__panel {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  padding: 1rem 1.2rem;
}

.api-diagram {
  margin: 0;
  font-size: 0.78rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);
  white-space: pre;
  letter-spacing: 0;
  font-variant-ligatures: none;
}

.api-section__header h2 {
  margin: 0 0 0.4rem 0;
  font-size: 1.4rem;
}

.api-section__header p {
  margin: 0;
  color: var(--vp-c-text-2);
}

.api-library-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.api-card {
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.api-card__header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
}

.api-card__kicker {
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.65rem;
  color: var(--vp-c-text-3);
  margin: 0 0 0.2rem 0;
}

.api-card__title {
  margin: 0;
  font-size: 1.4rem;
  color: var(--vp-c-text-1);
}

.api-card__description {
  margin: 0.8rem 0 0.9rem 0;
  color: var(--vp-c-text-2);
}

.api-card__list {
  margin: 0 0 1rem 0;
  padding-left: 1.2rem;
  color: var(--vp-c-text-2);
  display: grid;
  gap: 0.35rem;
}

.api-card__actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.api-quick-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.api-quick-card {
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  display: flex;
  flex-direction: column;
  min-height: 170px;
}

.api-quick-card__title {
  font-size: 1rem;
  margin-bottom: 0.4rem;
  color: var(--vp-c-text-1);
}

.api-quick-card__description {
  color: var(--vp-c-text-2);
  font-size: 0.88rem;
  margin: 0 0 0.6rem 0;
}

.api-quick-card__meta {
  margin-top: auto;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--vp-c-text-3);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.7rem;
  font-weight: 600;
}

.api-quick-card__meta-source {
  font-weight: 500;
  letter-spacing: 0.18em;
}

@media (max-width: 960px) {
  .api-hero {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .api-hero__actions,
  .api-card__actions {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
