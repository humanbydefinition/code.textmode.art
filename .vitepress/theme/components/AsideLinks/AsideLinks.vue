<template>
  <div v-if="showQuickActions" class="aside-links">
    <div class="aside-links__section">
      <h3 class="aside-links__title">Quick Actions</h3>
      <a
        :href="chatGptUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="aside-links__link"
        aria-label="Open this page in ChatGPT"
      >
        <span class="aside-links__logo" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            role="presentation"
            fill="currentColor"
          >
            <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
          </svg>
        </span>
        <span class="aside-links__text">Open in ChatGPT</span>
        <span class="aside-links__external-icon" aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="16" height="16" rx="3" fill="currentColor" opacity="0.1" />
            <path d="M6 5h5v5M11 5l-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'

defineOptions({ name: 'AsideLinks' })

const { page, site, frontmatter } = useData()
const route = useRoute()

const showQuickActions = computed(() => {
  // Hide Quick Actions if frontmatter explicitly sets quickActions to false
  return frontmatter.value.quickActions !== false
})

const currentUrl = computed(() => {
  if (typeof window !== 'undefined') {
    return window.location.href
  }
  // Fallback for SSR - construct URL from site data and page path
  const baseUrl = site.value.base || '/'
  const path = page.value.relativePath.replace(/\.md$/, '.html')
  return `https://code.textmode.art${baseUrl}${path}`.replace(/\/+/g, '/').replace(':/', '://')
})

const pageKind = computed<'guide' | 'api' | 'blog' | 'other'>(() => {
  const path = route.path
  if (path.startsWith('/api/')) return 'api'
  if (path.startsWith('/blog/')) return 'blog'
  if (path.startsWith('/docs/')) return 'guide'
  return 'other'
})

const basePrompt = computed(() => {
  const url = currentUrl.value
  const kind = pageKind.value

  const commonIntro = [
    'You are assisting a developer working with **textmode.js**.',
    '',
    'First, fetch and read this documentation page:',
    '```',
    url,
    '```',
    '',
    ''
  ].join('\n')

  const guidanceByKind: Record<typeof kind, string> = {
    guide:
      [
        'Treat it as a conceptual / guide page and respond in **three sections**:',
        '',
        '1. **Summary** - 3-5 sentences capturing the main ideas.',
        '2. **Key concepts & APIs** - bullet list, each item with a 1-2 sentence explanation.',
        '3. **Sketch ideas** - 3 concrete textmode.js sketch ideas or experiments based directly on this page.',
        ''
      ].join('\n'),
    api:
      [
        'Treat it as **API reference** and respond in **three sections**:',
        '',
        '1. **Purpose** - short paragraph on what this API surface is for.',
        '2. **Most important pieces** - group the key methods/options/types and explain when to use each.',
        '3. **Pitfalls & edge cases** - bullet list of common mistakes or gotchas.',
        ''
      ].join('\n'),
    blog:
      [
        'Treat it as a **blog / article** and respond in **three sections**:',
        '',
        '1. **Core ideas** - short summary.',
        '2. **Practical techniques** - textmode.js techniques, patterns, or recommendations mentioned in the article.',
        '3. **How to apply this** - suggestions for how a developer could use these ideas in their own sketches.',
        ''
      ].join('\n'),
    other:
      [
        'Summarize the page and highlight anything that helps a developer use textmode.js more effectively.',
        ''
      ].join('\n')
  }

  const finishingLine = [
    '',
    '---',
    '',
    'After you respond, stop and wait for my follow-up questions instead of generating additional code or content on your own.'
  ].join('\n')

  return commonIntro + guidanceByKind[kind] + finishingLine
})

const chatGptUrl = computed(() => {
  return `https://chatgpt.com/?q=${encodeURIComponent(basePrompt.value)}`
})
</script>

<style scoped>
.aside-links {
  padding: 0.75rem 0 0 0;
  margin-top: auto;
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  flex-shrink: 0;
}

.aside-links__section {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.aside-links__title {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--vp-c-text-2);
  margin: 0 0 0.25rem 0;
}

.aside-links__link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.125rem 0;
  padding-left: 0.75rem;
  padding-bottom: 0.75rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 0.875rem;
  line-height: 1.4;
  transition: color 0.2s ease;
}

.aside-links__link:hover {
  color: var(--vp-c-brand-1);
}

.aside-links__logo {
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text-2);
  flex-shrink: 0;
}

.aside-links__logo svg {
  width: 16px;
  height: 16px;
}

.aside-links__text {
  flex: 1;
  font-weight: 600;
}

.aside-links__external-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  color: currentColor;
  opacity: 0.75;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.aside-links__external-icon svg {
  width: 14px;
  height: 14px;
}

.aside-links__link:hover .aside-links__external-icon {
  opacity: 1;
}

.aside-links__link:hover .aside-links__logo {
  color: var(--vp-c-text-2);
}
</style>
