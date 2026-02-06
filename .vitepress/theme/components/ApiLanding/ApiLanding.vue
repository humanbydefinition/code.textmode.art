<template>
  <section class="api-landing">
    <ApiHero
      eyebrow="API Reference"
      title="textmode.js ecosystem"
      lede="A clean, typed surface for the core renderer and add-on modules. The ecosystem will grow, and this page will expand with it."
      :actions="heroActions"
    />

    <ApiSection
      title="Current modules"
      subtitle="More add-ons will appear here as they land."
    >
      <div class="api-library-grid">
        <ApiLibraryCard
          v-for="library in libraries"
          :key="library.name"
          :library="library"
        />
      </div>
    </ApiSection>

    <ApiSection
      title="Quick jumps"
      subtitle="Direct entry points to common surfaces."
    >
      <div class="api-quick-grid">
        <ApiQuickCard
          v-for="link in quickLinks"
          :key="link.title"
          :link="link"
        />
      </div>
    </ApiSection>
  </section>
</template>

<script setup lang="ts">
import ApiHero from './ApiHero.vue'
import ApiLibraryCard from './ApiLibraryCard.vue'
import ApiQuickCard from './ApiQuickCard.vue'
import ApiSection from './ApiSection.vue'
import type { ApiHeroAction, ApiLibrary, ApiQuickLink } from './types'

const heroActions: ApiHeroAction[] = [
  { label: 'textmode.js API', href: '/api/textmode.js/', variant: 'secondary' },
  { label: 'textmode.synth.js API', href: '/api/textmode.synth.js/', variant: 'secondary' },
  { label: 'textmode.filters.js API', href: '/api/textmode.filters.js/', variant: 'secondary' }
]

const libraries: ApiLibrary[] = [
  {
    name: 'textmode.js',
    kicker: 'das nest',
    badge: 'core',
    description: 'Rendering primitives, layers, loadables, input handling, shaders, and much more.',
    highlights: [],
    cta: '/api/textmode.js/',
    secondary: '/docs/introduction',
    githubUser: 'humanbydefinition',
    githubRepo: 'textmode.js'
  },
  {
    name: 'textmode.synth.js',
    kicker: 'visual synthesis',
    badge: 'synth',
    description: 'Hydra-inspired synthesis chains for procedural pattern generation and shader graph building.',
    highlights: [],
    cta: '/api/textmode.synth.js/',
    secondary: '/api/textmode.synth.js/#example',
    githubUser: 'humanbydefinition',
    githubRepo: 'textmode.synth.js'
  },
  {
    name: 'textmode.filters.js',
    kicker: 'post-processing',
    badge: 'filters',
    description: 'A collection of post-processing filters for textmode.js layers and canvases.',
    highlights: [],
    cta: '/api/textmode.filters.js/',
    secondary: '/api/textmode.filters.js/#example',
    githubUser: 'humanbydefinition',
    githubRepo: 'textmode.filters.js'
  }
]

const quickLinks: ApiQuickLink[] = [
  {
    title: 'Textmodifier',
    description: 'Main drawing and lifecycle interface for textmode.js.',
    metaLabel: 'CLASS',
    metaSource: 'TEXTMODE.JS',
    href: '/api/textmode.js/classes/Textmodifier'
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
    href: '/api/textmode.synth.js/classes/SynthSource'
  },
  {
    title: 'osc()',
    description: 'Oscillator pattern generator for synth chains.',
    metaLabel: 'FUNCTION',
    metaSource: 'TEXTMODE.SYNTH.JS',
    href: '/api/textmode.synth.js/functions/osc'
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

.api-library-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.api-quick-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}
</style>
