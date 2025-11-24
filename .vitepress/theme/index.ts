/// <reference path="../shims.d.ts" />
import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext, Theme } from 'vitepress'
import { useData, useRoute } from 'vitepress'
import './custom.css'
import { defineComponent, h, nextTick, onMounted, watch, render } from 'vue'
import type { App } from 'vue'
import 'vitepress-plugin-sandpack/dist/style.css'
import { Sandbox } from 'vitepress-plugin-sandpack'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import TextmodeSandbox from './components/TextmodeSandbox.vue'
import FontShowcase from './components/FontShowcase/index.vue'
import DonationGrid from './components/Donation/index.vue'
import TextmodeWhatIs from './components/TextmodeWhatIs.vue'
import CommentSectionLead from './components/CommentSectionLead.vue'
import { withBlogTheme } from '../blog/src'
import codeblocksFold from 'vitepress-plugin-codeblocks-fold'; // import method
import 'vitepress-plugin-codeblocks-fold/style/index.css'; // import style
import { compressToBase64 } from 'lz-string'

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

    codeblocksFold({route, frontmatter});
    useCodeSandboxLauncher(route, page)

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
    const { createHeroWaveSketch } = await import('./sketches/hero-wave/')
    
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
const COMMENT_LEAD_ROOT_ATTRIBUTE = 'data-comment-lead-root'

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
  cleanupCommentLead(existingSection)
  existingSection?.remove()
  const existingThread = docContent.querySelector<HTMLElement>('.comment-section__thread')
  existingThread?.remove()

  giscus.removeAttribute('style')
  giscus.classList.add('comment-section__embed')

  const section = document.createElement('section')
  section.className = 'comment-section'
  section.setAttribute('aria-label', 'Community comments powered by giscus')
  mountCommentLead(section)

  const thread = document.createElement('div')
  thread.className = 'comment-section__thread'
  thread.appendChild(giscus)

  docContent.append(section, thread)
}

function teardownCommentSection() {
  if (typeof window === 'undefined') return

  const docContent = document.querySelector<HTMLElement>('.content-container')
  if (!docContent) return

  const existingSection = docContent.querySelector<HTMLElement>('.comment-section')
  cleanupCommentLead(existingSection)
  existingSection?.remove()

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

function mountCommentLead(section: HTMLElement) {
  const leadRoot = document.createElement('div')
  leadRoot.setAttribute(COMMENT_LEAD_ROOT_ATTRIBUTE, 'true')
  section.appendChild(leadRoot)
  render(h(CommentSectionLead), leadRoot)
}

function cleanupCommentLead(container?: HTMLElement | null) {
  if (!container) return
  const leadRoot = container.querySelector<HTMLElement>(`[${COMMENT_LEAD_ROOT_ATTRIBUTE}]`)
  if (!leadRoot) return
  render(null, leadRoot)
  leadRoot.remove()
}

const CODE_SANDBOX_ENDPOINT = 'https://codesandbox.io/api/v1/sandboxes/define'
const CODE_SANDBOX_LANGUAGES = new Set(['javascript', 'typescript'])
const CODE_BLOCK_MAX_ENHANCE_ATTEMPTS = 4
const SANDBOX_INDEX_HTML = `<!DOCTYPE html>
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
    <script src="https://unpkg.com/textmode.js@latest/dist/textmode.umd.js"></script>
    <script src="./sketch.js"></script>
  </body>
</html>
`

function useCodeSandboxLauncher(
  route: ReturnType<typeof useRoute>,
  page: ReturnType<typeof useData>['page']
) {
  if (typeof window === 'undefined') return

  const queueEnhancement = () => {
    nextTick(() => enhanceCodeBlocksWithRetry())
  }

  onMounted(queueEnhancement)
  watch(() => route.path, () => queueEnhancement())
  watch(() => page.value.relativePath, () => queueEnhancement())
}

function enhanceCodeBlocksWithRetry(attempt = 0) {
  if (typeof window === 'undefined') return
  requestAnimationFrame(() => {
    const processed = enhanceCodeBlocks()
    if (!processed && attempt + 1 < CODE_BLOCK_MAX_ENHANCE_ATTEMPTS) {
      enhanceCodeBlocksWithRetry(attempt + 1)
    }
  })
}

function enhanceCodeBlocks() {
  if (typeof window === 'undefined') return false

  const doc = document.querySelector<HTMLElement>('.vp-doc')
  if (!doc) return false

  const codeBlocks = Array.from(doc.querySelectorAll<HTMLElement>('div[class*="language-"]'))
  let added = 0

  for (const block of codeBlocks) {
    if (block.dataset.codesandboxReady === 'true') continue

    const language = getCodeBlockLanguage(block)
    if (!language || !CODE_SANDBOX_LANGUAGES.has(language)) continue

    const copyButton = block.querySelector<HTMLButtonElement>('button.copy')
    const codeElement = block.querySelector<HTMLElement>('code')
    if (!copyButton || !codeElement) continue

    const codeText = codeElement.textContent ?? ''
    if (!codeText.trim()) continue

    const openButton = createCodeSandboxButton(codeText)
    if (!openButton) continue
    const parent = copyButton.parentElement ?? block
    parent.insertBefore(openButton, copyButton)

    block.dataset.codesandboxReady = 'true'
    added += 1
  }

  return added > 0
}

function getCodeBlockLanguage(block: HTMLElement) {
  const dataLang = (block.getAttribute('data-ext') || block.getAttribute('data-lang'))?.toLowerCase()
  if (dataLang) return dataLang

  const className = Array.from(block.classList).find(cls => cls.startsWith('language-'))
  if (!className) return null
  return className.replace('language-', '').toLowerCase()
}

function createCodeSandboxButton(rawCode: string) {
  const sketchCode = sanitizeSketchCode(rawCode)
  if (!sketchCode) return null

  const sandboxUrl = buildCodeSandboxUrl(sketchCode)
  const button = document.createElement('a')
  button.className = 'code-open-btn'
  button.title = 'Open in CodeSandbox'
  button.setAttribute('aria-label', 'Open in CodeSandbox')
  button.textContent = 'Open in CodeSandbox'
  button.href = sandboxUrl
  button.target = '_blank'
  button.rel = 'noopener noreferrer'
  button.addEventListener('click', (event) => {
    event.stopPropagation()
  })

  return button
}

function sanitizeSketchCode(raw: string) {
  if (!raw) return ''
  return raw.replace(/^\s*\n/, '').replace(/\s+$/, '\n')
}

function buildCodeSandboxUrl(sketchCode: string) {
  const parameters = buildCodeSandboxParameters(sketchCode)
  const query = 'file=sketch.js'
  return `${CODE_SANDBOX_ENDPOINT}?parameters=${parameters}&query=${encodeURIComponent(query)}`
}

function buildCodeSandboxParameters(sketchCode: string) {
  const payload = {
    template: 'static',
    files: {
      'index.html': {
        content: SANDBOX_INDEX_HTML
      },
      'sketch.js': {
        content: sketchCode
      }
    }
  }

  return encodeSandboxPayload(payload)
}

function encodeSandboxPayload(payload: Record<string, unknown>) {
  const json = JSON.stringify(payload)
  return compressToBase64(json)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}