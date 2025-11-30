/// <reference path="../shims.d.ts" />
import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext, Theme } from 'vitepress'
import { useData, useRoute } from 'vitepress'
import './custom.css'
import { defineComponent, h } from 'vue'
import 'vitepress-plugin-sandpack/dist/style.css'
import { Sandbox } from 'vitepress-plugin-sandpack'
import codeblocksFold from 'vitepress-plugin-codeblocks-fold'
import 'vitepress-plugin-codeblocks-fold/style/index.css'
import { useCodeSandbox } from 'vitepress-plugin-codesandbox'
import 'vitepress-plugin-codesandbox/style.css'

// Components
import TextmodeSandbox from './components/TextmodeSandbox.vue'
import FontShowcase from './components/FontShowcase/FontShowcase.vue'
import DonationGrid from './components/Donation/DonationGrid.vue'
import TextmodeWhatIs from './components/TextmodeWhatIs.vue'
import HomeCta from './components/HomeCta/HomeCta.vue'

// Blog
import { withBlogTheme } from '../blog/src'

// Composables
import { useComments, setupHeroSketchRouter } from './composables'
import type { GiscusConfig } from './composables'

const giscusConfig: GiscusConfig = {
  repo: 'humanbydefinition/textmode.js-docs',
  repoId: 'R_kgDOQbiCUQ',
  category: 'Website comments',
  categoryId: 'DIC_kwDOQbiCUc4CyH1P',
  mapping: 'URL',
  inputPosition: 'top',
  lang: 'en',
  lightTheme: 'light',
  darkTheme: 'transparent_dark'
}
const HeroLayout = defineComponent({
  name: 'TextmodeHeroLayout',
  setup(_, { slots }) {
    return () => h(DefaultTheme.Layout, null, {
      ...slots,
      'home-hero-info-after': () => h('div', {
        class: 'textmode-hero-wrapper',
        innerHTML: `
          <div class="textmode-hero-container">
            <canvas class="textmode-hero-canvas"></canvas>
          </div>
        `
      })
    })
  }
})

const baseTheme: Theme = {
  extends: DefaultTheme,
  Layout: HeroLayout,
  enhanceApp(ctx: EnhanceAppContext) {
    const { app, router } = ctx

    // Register components
    app.component('Sandbox', Sandbox)
    app.component('TextmodeSandbox', TextmodeSandbox)
    app.component('FontShowcase', FontShowcase)
    app.component('DonationGrid', DonationGrid)
    app.component('TextmodeWhatIs', TextmodeWhatIs)
    app.component('HomeCta', HomeCta)

    // Set up hero sketch router
    setupHeroSketchRouter(router)
  },
  setup() {
    const { frontmatter } = useData()
    const route = useRoute()

    // Initialize plugins
    codeblocksFold({ route, frontmatter })
    useCodeSandbox({
      languages: ['javascript', 'typescript'],
      scripts: ['https://unpkg.com/textmode.js@latest/dist/textmode.umd.js'],
      filename: 'sketch.js',
      buttonText: 'Open in CodeSandbox',
      indexHtml: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>textmode.js | sketch</title>
    <style>
      * { box-sizing: border-box; }
      body { margin: 0; background: #050608; color: #fff; font-family: 'JetBrains Mono', monospace; }
      canvas { display: block; }
    </style>
  </head>
  <body>
    {{SCRIPTS}}
  </body>
</html>`
    })
    useComments(giscusConfig)
  }
}

const theme = withBlogTheme(baseTheme)

export default theme