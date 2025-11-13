/// <reference path="../shims.d.ts" />
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { useData } from 'vitepress'
import './custom.css'
import { defineComponent, h } from 'vue'
import type { App } from 'vue'
import 'vitepress-plugin-sandpack/dist/style.css'
import { Sandbox } from 'vitepress-plugin-sandpack'
import { TextmodeSandbox } from './components/TextmodeSandbox'
import FontShowcase from './components/FontShowcase.vue'
import DonationGrid from './components/DonationGrid.vue'
import TextmodeWhatIs from './components/TextmodeWhatIs.vue'
import BlogPostList from './components/BlogPostList.vue'
import BlogHome from './components/BlogHome.vue'
import BlogPostLayout from './layouts/BlogPostLayout.vue'

const BlogAwareLayout = defineComponent({
  name: 'BlogAwareLayout',
  setup() {
    const { frontmatter } = useData()

    return () => {
      if (frontmatter.value?.blogPost === true) {
        return h(BlogPostLayout)
      }

      return h(DefaultTheme.Layout, null, {
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
  }
})

const theme: Theme = {
  extends: DefaultTheme,
  Layout: BlogAwareLayout,
  enhanceApp({ app, router }: { app: App, router: any }) {
    // Register components
    app.component('Sandbox', Sandbox)
    app.component('TextmodeSandbox', TextmodeSandbox)
    app.component('FontShowcase', FontShowcase)
    app.component('DonationGrid', DonationGrid)
    app.component('TextmodeWhatIs', TextmodeWhatIs)
    app.component('BlogPostList', BlogPostList)
  app.component('BlogHome', BlogHome)

    if (typeof window !== 'undefined') {
      // Initialize hero sketch when the app loads on the home page
      router.onAfterRouteChanged = (to: string) => {
        if (to === '/' || to === '/index.html') {
          setTimeout(() => {
            initTextmodeHero()
          }, 100)
        }
      }
    }
  }
}

async function initTextmodeHero() {
  if (typeof window === 'undefined') return
  
  const canvas = document.querySelector('.textmode-hero-canvas') as HTMLCanvasElement
  const container = document.querySelector('.textmode-hero-container') as HTMLElement
  
  if (!canvas || !container) {
    console.warn('TextmodeHero: Canvas or container not found')
    return
  }

  try {
    // Get dimensions with fallback values
    const width = container.clientWidth || 800
    const height = container.clientHeight || 400

    // Dynamically import the sketch module (only runs on client)
    const { createHeroWaveSketch } = await import('./sketches/hero-wave')
    
    if (!createHeroWaveSketch) {
      console.error('TextmodeHero: createHeroWaveSketch function not found in module')
      return
    }
    
    canvas.width = width
    canvas.height = height
    
    createHeroWaveSketch(canvas, width, height)
  } catch (error) {
    console.error('TextmodeHero: Failed to initialize sketch', error)
  }
}

export default theme