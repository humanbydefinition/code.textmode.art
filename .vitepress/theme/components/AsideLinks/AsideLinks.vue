<template>
  <div class="aside-links">
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
            viewBox="0 0 2406 2406"
            xmlns="http://www.w3.org/2000/svg"
            role="presentation"
          >
            <g fill="currentColor">
              <path d="M1107.3 299.1c-198 0-373.9 127.3-435.2 315.3L650 743.5v427.9c0 21.4 11 40.4 29.4 51.4l344.5 198.515V833.3h.1v-27.9L1372.7 604c33.715-19.52 70.44-32.857 108.47-39.828L1447.6 450.3C1361 353.5 1237.1 298.5 1107.3 299.1zm0 117.5-.6.6c79.699 0 156.3 27.5 217.6 78.4-2.5 1.2-7.4 4.3-11 6.1L952.8 709.3c-18.4 10.4-29.4 30-29.4 51.4V1248l-155.1-89.4V755.8c-.1-187.099 151.601-338.9 339-339.2z" />
              <path d="M1107.3 299.1c-198 0-373.9 127.3-435.2 315.3L650 743.5v427.9c0 21.4 11 40.4 29.4 51.4l344.5 198.515V833.3h.1v-27.9L1372.7 604c33.715-19.52 70.44-32.857 108.47-39.828L1447.6 450.3C1361 353.5 1237.1 298.5 1107.3 299.1zm0 117.5-.6.6c79.699 0 156.3 27.5 217.6 78.4-2.5 1.2-7.4 4.3-11 6.1L952.8 709.3c-18.4 10.4-29.4 30-29.4 51.4V1248l-155.1-89.4V755.8c-.1-187.099 151.601-338.9 339-339.2z" transform="rotate(60 1203 1203)" />
              <path d="M1107.3 299.1c-198 0-373.9 127.3-435.2 315.3L650 743.5v427.9c0 21.4 11 40.4 29.4 51.4l344.5 198.515V833.3h.1v-27.9L1372.7 604c33.715-19.52 70.44-32.857 108.47-39.828L1447.6 450.3C1361 353.5 1237.1 298.5 1107.3 299.1zm0 117.5-.6.6c79.699 0 156.3 27.5 217.6 78.4-2.5 1.2-7.4 4.3-11 6.1L952.8 709.3c-18.4 10.4-29.4 30-29.4 51.4V1248l-155.1-89.4V755.8c-.1-187.099 151.601-338.9 339-339.2z" transform="rotate(120 1203 1203)" />
              <path d="M1107.3 299.1c-198 0-373.9 127.3-435.2 315.3L650 743.5v427.9c0 21.4 11 40.4 29.4 51.4l344.5 198.515V833.3h.1v-27.9L1372.7 604c33.715-19.52 70.44-32.857 108.47-39.828L1447.6 450.3C1361 353.5 1237.1 298.5 1107.3 299.1zm0 117.5-.6.6c79.699 0 156.3 27.5 217.6 78.4-2.5 1.2-7.4 4.3-11 6.1L952.8 709.3c-18.4 10.4-29.4 30-29.4 51.4V1248l-155.1-89.4V755.8c-.1-187.099 151.601-338.9 339-339.2z" transform="rotate(180 1203 1203)" />
              <path d="M1107.3 299.1c-198 0-373.9 127.3-435.2 315.3L650 743.5v427.9c0 21.4 11 40.4 29.4 51.4l344.5 198.515V833.3h.1v-27.9L1372.7 604c33.715-19.52 70.44-32.857 108.47-39.828L1447.6 450.3C1361 353.5 1237.1 298.5 1107.3 299.1zm0 117.5-.6.6c79.699 0 156.3 27.5 217.6 78.4-2.5 1.2-7.4 4.3-11 6.1L952.8 709.3c-18.4 10.4-29.4 30-29.4 51.4V1248l-155.1-89.4V755.8c-.1-187.099 151.601-338.9 339-339.2z" transform="rotate(240 1203 1203)" />
              <path d="M1107.3 299.1c-198 0-373.9 127.3-435.2 315.3L650 743.5v427.9c0 21.4 11 40.4 29.4 51.4l344.5 198.515V833.3h.1v-27.9L1372.7 604c33.715-19.52 70.44-32.857 108.47-39.828L1447.6 450.3C1361 353.5 1237.1 298.5 1107.3 299.1zm0 117.5-.6.6c79.699 0 156.3 27.5 217.6 78.4-2.5 1.2-7.4 4.3-11 6.1L952.8 709.3c-18.4 10.4-29.4 30-29.4 51.4V1248l-155.1-89.4V755.8c-.1-187.099 151.601-338.9 339-339.2z" transform="rotate(300 1203 1203)" />
            </g>
          </svg>
        </span>
        <span class="aside-links__text">
          <span class="aside-links__label">Open in ChatGPT</span>
          <span class="aside-links__helper">Instant AI summary of this page</span>
        </span>
        <span class="aside-links__external-icon" aria-hidden="true">↗</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'

defineOptions({ name: 'AsideLinks' })

const { page, site } = useData()
const route = useRoute()

const currentUrl = computed(() => {
  if (typeof window !== 'undefined') {
    return window.location.href
  }
  // Fallback for SSR - construct URL from site data and page path
  const baseUrl = site.value.base || '/'
  const path = page.value.relativePath.replace(/\.md$/, '.html')
  return `https://code.textmode.art${baseUrl}${path}`.replace(/\/+/g, '/').replace(':/', '://')
})

const pageKind = computed<'guide' | 'api' | 'example' | 'blog' | 'legal' | 'other'>(() => {
  const path = route.path
  if (path.startsWith('/api/')) return 'api'
  if (path.startsWith('/docs/examples')) return 'example'
  if (path.startsWith('/blog/')) return 'blog'
  if (path.startsWith('/docs/legal/')) return 'legal'
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
    '',
    '```',
    url,
    '```',
    ''
  ].join('\n')

  const guidanceByKind: Record<typeof kind, string> = {
    guide:
      [
        'Treat it as a conceptual / guide page and respond in **three sections**:',
        '',
        '1. **Summary** – 3–5 sentences capturing the main ideas.',
        '2. **Key concepts & APIs** – bullet list, each item with a 1–2 sentence explanation.',
        '3. **Sketch ideas** – 3 concrete textmode.js sketch ideas or experiments based directly on this page.',
        ''
      ].join('\n'),
    api:
      [
        'Treat it as **API reference** and respond in **three sections**:',
        '',
        '1. **Purpose** – short paragraph on what this API surface is for.',
        '2. **Most important pieces** – group the key methods/options/types and explain when to use each.',
        '3. **Pitfalls & edge cases** – bullet list of common mistakes or gotchas.',
        ''
      ].join('\n'),
    example:
      [
        'Treat it as an **example / tutorial** and respond in **three sections**:',
        '',
        '1. **What this example shows** – short summary.',
        '2. **How to adapt it** – explain how to change things like font, resolution, input source, or parameters.',
        '3. **Variations to try** – 2–3 specific variations a developer could build from this starting point.',
        ''
      ].join('\n'),
    blog:
      [
        'Treat it as a **blog / article** and respond in **three sections**:',
        '',
        '1. **Core ideas** – short summary.',
        '2. **Practical techniques** – textmode.js techniques, patterns, or recommendations mentioned in the article.',
        '3. **How to apply this** – suggestions for how a developer could use these ideas in their own sketches.',
        ''
      ].join('\n'),
    legal:
      [
        'Summarize the key **legal points and obligations** in clear, neutral language.',
        '',
        'Highlight anything that developers integrating textmode.js into their own projects should be aware of (especially around data, licensing, or attribution).',
        ''
      ].join('\n'),
    other:
      [
        'Summarize the page and highlight anything that helps a developer use textmode.js more effectively.',
        ''
      ].join('\n')
  }

  const finishingLine = [
    '---',
    '',
    'After you respond, stop and wait for my follow-up questions instead of generating additional code or content on your own.',
    ''
  ].join('\n')

  return commonIntro + guidanceByKind[kind] + finishingLine
})

const chatGptUrl = computed(() => {
  return `https://chatgpt.com/?q=${encodeURIComponent(basePrompt.value)}`
})
</script>

<style scoped>
.aside-links {
  padding: 1rem 0 0 0;
  margin-top: auto;
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  flex-shrink: 0;
}

.aside-links__section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.aside-links__title {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--vp-c-text-2);
  margin: 0 0 0.5rem 0;
}
.aside-links__link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0.875rem;
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider);
  background: transparent;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}

.aside-links__link:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.aside-links__logo {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  flex-shrink: 0;
}

.aside-links__logo svg {
  width: 20px;
  height: 20px;
}

.aside-links__text {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  line-height: 1.2;
  flex: 1;
}

.aside-links__label {
  font-size: 0.9rem;
  font-weight: 600;
}

.aside-links__helper {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
}

.aside-links__external-icon {
  font-size: 0.8rem;
  opacity: 0.6;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.aside-links__link:hover .aside-links__logo {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
}

.aside-links__link:hover .aside-links__helper {
  color: var(--vp-c-brand-1);
}

.aside-links__link:hover .aside-links__external-icon {
  opacity: 1;
  transform: translateX(2px);
}
</style>
