/// <reference path="../shims.d.ts" />
import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext, Theme } from 'vitepress'
import { useData, useRoute } from 'vitepress'
import './custom.css'
import { defineComponent, h, nextTick, onMounted, watch } from 'vue'
import type { App } from 'vue'
import 'vitepress-plugin-sandpack/dist/style.css'
import { Sandbox } from 'vitepress-plugin-sandpack'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import { TextmodeSandbox } from './components/TextmodeSandbox'
import FontShowcase from './components/FontShowcase.vue'
import DonationGrid from './components/DonationGrid.vue'
import TextmodeWhatIs from './components/TextmodeWhatIs.vue'
import { withBlogTheme } from '../blog/src'

const giscusConfig = {
  repo: 'humanbydefinition/textmode.js-docs',
  repoId: 'R_kgDOQbiCUQ',
  category: 'Website comments',
  categoryId: 'DIC_kwDOQbiCUc4CyH1P',
  mapping: 'URL' as const,
  inputPosition: 'top' as const,
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
  },
  setup() {
    const { frontmatter, page } = useData()
    const route = useRoute()

    const isConfigured = giscusConfig.repo && giscusConfig.repoId && giscusConfig.category && giscusConfig.categoryId

    if (isConfigured) {
      giscusTalk(giscusConfig, { frontmatter, route }, true)
      useCommentSectionDecorator(route, page, frontmatter)
    } else if (import.meta.env?.DEV) {
      console.warn('[Giscus] Missing repo/category configuration; comments are disabled.')
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

const theme = withBlogTheme(baseTheme)

export default theme

function useCommentSectionDecorator(
  route: ReturnType<typeof useRoute>,
  page: ReturnType<typeof useData>['page'],
  frontmatter: ReturnType<typeof useData>['frontmatter']
) {
  if (typeof window === 'undefined') return

  const queueDecoration = () => {
    nextTick(() => decorateCommentSection(frontmatter.value))
  }

  onMounted(queueDecoration)
  watch(() => route.path, () => queueDecoration())
  watch(() => page.value.relativePath, () => queueDecoration())
  watch(() => frontmatter.value?.comment, () => queueDecoration())
}

const MAX_COMMENT_DECORATION_ATTEMPTS = 8

function decorateCommentSection(frontmatter?: Record<string, unknown>, attempt = 0) {
  if (typeof window === 'undefined') return

  if (frontmatter?.comment === false) {
    teardownCommentSection()
    return
  }

  const docContent = document.querySelector<HTMLElement>('.content-container')
  const giscus = document.getElementById('giscus')

  if (!docContent || !giscus) {
    if (attempt < MAX_COMMENT_DECORATION_ATTEMPTS) {
      window.setTimeout(() => decorateCommentSection(frontmatter, attempt + 1), 140)
    }
    return
  }

  const existingSection = docContent.querySelector<HTMLElement>('.comment-section')
  existingSection?.remove()
  const existingThread = docContent.querySelector<HTMLElement>('.comment-section__thread')
  existingThread?.remove()

  giscus.removeAttribute('style')
  giscus.classList.add('comment-section__embed')

  const section = document.createElement('section')
  section.className = 'comment-section'
  section.setAttribute('aria-label', 'Community comments powered by giscus')

  const lead = buildCommentLead()
  section.append(lead)

  const thread = document.createElement('div')
  thread.className = 'comment-section__thread'
  thread.appendChild(giscus)

  docContent.append(section, thread)
}

function teardownCommentSection() {
  if (typeof window === 'undefined') return

  const docContent = document.querySelector<HTMLElement>('.content-container')
  if (!docContent) return

  docContent.querySelector<HTMLElement>('.comment-section')?.remove()

  const existingThread = docContent.querySelector<HTMLElement>('.comment-section__thread')
  if (!existingThread) return

  const giscus = existingThread.querySelector<HTMLElement>('#giscus')
  if (giscus) {
    giscus.style.display = 'none'
    giscus.classList.remove('comment-section__embed')
    docContent.appendChild(giscus)
  }

  existingThread.remove()
}

function buildCommentLead(): HTMLDivElement {
  const lead = document.createElement('div')
  lead.className = 'comment-section__lead'

  const eyebrow = document.createElement('p')
  eyebrow.className = 'comment-section__eyebrow'
  eyebrow.textContent = 'Join the discussion ↓ '

  const title = document.createElement('h2')
  title.className = 'comment-section__title'
  title.textContent = 'Join the discussion ↓'

  const description = document.createElement('p')
  description.className = 'comment-section__description'
  description.textContent = 'Swap ideas, ask questions, and leave feedback for the textmode.js team and community.'

  const rulesList = document.createElement('ul')
  rulesList.className = 'comment-section__rules'
  const rules = [
    { text: 'Stay constructive and keep threads on-topic.', link: null },
    { text: 'Use code blocks for snippets or logs so others can help faster.', link: null },
    { text: 'Report urgent bugs on ', linkText: 'GitHub Issues', link: 'https://github.com/humanbydefinition/textmode.js/issues', suffix: ' so we can track progress.' },
  ]
  for (const rule of rules) {
    const li = document.createElement('li')
    if (rule.link) {
      const textBefore = document.createTextNode(rule.text)
      const link = document.createElement('a')
      link.href = rule.link
      link.textContent = rule.linkText || ''
      link.target = '_blank'
      link.rel = 'noopener noreferrer'
      link.className = 'comment-section__link'
      const textAfter = document.createTextNode(rule.suffix || '')
      li.append(textBefore, link, textAfter)
    } else {
      li.textContent = rule.text
    }
    rulesList.appendChild(li)
  }

  const note = document.createElement('p')
  note.className = 'comment-section__note'
  const noteText1 = document.createTextNode('Comments sync with ')
  const discussionsLink = document.createElement('a')
  discussionsLink.href = 'https://github.com/humanbydefinition/textmode.js/discussions'
  discussionsLink.textContent = 'GitHub Discussions'
  discussionsLink.target = '_blank'
  discussionsLink.rel = 'noopener noreferrer'
  discussionsLink.className = 'comment-section__link'
  const noteText2 = document.createTextNode(' via giscus. Sign in with GitHub to leave replies or reactions.')
  note.append(noteText1, discussionsLink, noteText2)

  lead.append(eyebrow, description, rulesList, note)
  return lead
}