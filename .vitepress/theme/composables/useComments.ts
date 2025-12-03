import { nextTick, onMounted, watch, h, render } from 'vue'
import type { Ref } from 'vue'
import { useData, useRoute } from 'vitepress'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import CommentSectionLead from '../components/CommentSection/CommentSectionLead.vue'


export interface GiscusConfig {
    repo: string
    repoId: string
    category: string
    categoryId: string
    mapping: 'URL' | 'title' | 'og:title' | 'specific' | 'number' | 'pathname'
    inputPosition: 'top' | 'bottom'
    lang: string
    lightTheme: string
    darkTheme: string
}

const MAX_DECORATION_ATTEMPTS = 8
const COMMENT_LEAD_ROOT_ATTRIBUTE = 'data-comment-lead-root'

/**
 * Initialize and manage the comment section with Giscus integration.
 */
export function useComments(config: GiscusConfig) {
    const { frontmatter, page } = useData()
    const route = useRoute()

    const isConfigured = config.repo && config.repoId && config.category && config.categoryId

    if (isConfigured) {
        giscusTalk(config, { frontmatter, route }, true)
        useCommentSectionDecorator(route, page, frontmatter)
    }
}

function useCommentSectionDecorator(
    route: ReturnType<typeof useRoute>,
    page: ReturnType<typeof useData>['page'],
    frontmatter: Ref<Record<string, unknown>>
) {
    if (typeof window === 'undefined') return

    const queueDecoration = () => {
        nextTick(() => decorateCommentSection(frontmatter.value))
    }

    onMounted(queueDecoration)
    watch(() => route.path, queueDecoration)
    watch(() => page.value.relativePath, queueDecoration)
    watch(() => frontmatter.value?.comment, queueDecoration)
}

function decorateCommentSection(frontmatter?: Record<string, unknown>) {
    if (typeof window === 'undefined') return

    if (frontmatter?.comment === false) {
        teardownCommentSection()
        return
    }

    const docContent = document.querySelector<HTMLElement>('.content-container')
    const giscus = document.getElementById('giscus')

    if (!docContent || !giscus) return false

    // Clean up existing elements
    const existingSection = docContent.querySelector<HTMLElement>('.comment-section')
    cleanupCommentLead(existingSection)
    existingSection?.remove()

    const existingThread = docContent.querySelector<HTMLElement>('.comment-section__thread')
    existingThread?.remove()

    // Set up giscus element
    giscus.removeAttribute('style')
    giscus.classList.add('comment-section__embed')

    // Create section with lead component
    const section = document.createElement('section')
    section.className = 'comment-section'
    section.setAttribute('aria-label', 'Community comments powered by giscus')
    mountCommentLead(section)

    // Create thread container
    const thread = document.createElement('div')
    thread.className = 'comment-section__thread'
    thread.appendChild(giscus)

    docContent.append(section, thread)
    return true
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
