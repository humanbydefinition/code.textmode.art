<template>
  <footer class="site-footer">
    <div class="site-footer__top">
      <div class="site-footer__brand">
        <div class="site-footer__brand-head">
          <a class="site-footer__brand-link" href="/" aria-label="textmode.js home">
            <img
              class="site-footer__brand-mark"
              src="/svg/doc_logo.svg"
              alt=""
              width="24"
              height="24"
              loading="lazy"
              decoding="async"
            />
            <span class="site-footer__wordmark">textmode.js</span>
          </a>
          <p class="site-footer__tagline">Real-time ASCII art for the web.</p>
        </div>
        <a
          class="site-footer__social"
          :href="GITHUB_URL"
          target="_blank"
          rel="noreferrer noopener"
          :aria-label="`textmode.js on GitHub (opens in a new tab)`"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            />
          </svg>
        </a>
      </div>

      <nav class="site-footer__nav" aria-label="Footer">
        <div v-for="column in columns" :key="column.title" class="site-footer__column">
          <h2 class="site-footer__heading">{{ column.title }}</h2>
          <ul class="site-footer__list">
            <li v-for="link in column.links" :key="link.label">
              <a
                class="site-footer__link"
                :href="link.href"
                :target="link.external ? '_blank' : undefined"
                :rel="link.external ? 'noreferrer noopener' : undefined"
              >
                <span>{{ link.label }}</span>
                <svg
                  v-if="link.external"
                  class="site-footer__external"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 5h5v5M11 5l-5 5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span v-if="link.external" class="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div v-if="footer?.copyright || footer?.message" class="site-footer__bottom">
      <p v-if="footer?.copyright" class="site-footer__copyright" v-html="footer.copyright"></p>
      <p v-if="footer?.message" class="site-footer__legal" v-html="footer.message"></p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

defineOptions({ name: 'SiteFooter' })

const { theme } = useData()
const footer = computed(() => theme.value.footer)

const GITHUB_URL = 'https://github.com/humanbydefinition/textmode.js'
const DISCORD_URL = 'https://discord.gg/sjrw8QXNks'

interface FooterLink {
  label: string
  href: string
  external?: boolean
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

const columns: FooterColumn[] = [
  {
    title: 'Library',
    links: [
      { label: 'Documentation', href: '/docs/' },
      { label: 'Examples', href: '/docs/examples' },
      { label: 'API Reference', href: '/api/' },
      { label: 'Gallery', href: '/gallery' }
    ]
  },
  {
    title: 'Tools',
    links: [
      { label: 'Web Editor', href: 'https://editor.textmode.art', external: true },
      { label: 'Textmode Painter', href: 'https://create.textmode.art', external: true },
      { label: 'Media Converter', href: 'https://export.textmode.art', external: true },
      { label: 'Automata Playground', href: 'https://automata.textmode.art', external: true },
      { label: 'Browser Extension', href: 'https://extension.textmode.art', external: true }
    ]
  },
  {
    title: 'Community',
    links: [
      { label: 'GitHub', href: GITHUB_URL, external: true },
      { label: 'Discord', href: DISCORD_URL, external: true },
      { label: 'Discussions', href: `${GITHUB_URL}/discussions`, external: true },
      { label: 'Issues', href: `${GITHUB_URL}/issues`, external: true },
      { label: 'Contributors', href: '/docs/contributors' }
    ]
  }
]
</script>

<style scoped>
.site-footer {
  container-type: inline-size;
  padding-top: 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
}

.site-footer__top {
  display: grid;
  gap: 2rem;
}

.site-footer__brand {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
}

.site-footer__brand-head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}

.site-footer__brand-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.site-footer__brand-mark {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.site-footer__wordmark {
  font-family: var(--textmode-font);
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.site-footer__tagline {
  margin: 0;
  font-family: var(--textmode-font);
  font-size: 0.75rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.site-footer__social {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.site-footer__social:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.site-footer__social svg {
  width: 16px;
  height: 16px;
}

.site-footer__nav {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem 2rem;
}

.site-footer__column {
  min-width: 0;
}

.site-footer__heading {
  margin: 0 0 0.75rem;
  padding: 0;
  border: none;
  font-family: var(--textmode-font);
  font-size: 0.6875rem;
  font-weight: 600;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--vp-c-text-2);
}

.site-footer__list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.site-footer__link {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  border-radius: 4px;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s ease;
}

.site-footer__link:hover {
  color: var(--vp-c-brand-1);
}

.site-footer__external {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  color: var(--vp-c-text-2);
  opacity: 0.6;
  transition: color 0.2s ease, opacity 0.2s ease;
}

.site-footer__link:hover .site-footer__external {
  color: var(--vp-c-brand-1);
  opacity: 1;
}

.site-footer__bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem 1.5rem;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}

.site-footer__copyright,
.site-footer__legal {
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.site-footer__copyright :deep(a),
.site-footer__legal :deep(a) {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: color 0.2s ease;
}

.site-footer__copyright :deep(a:hover),
.site-footer__legal :deep(a:hover) {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.site-footer__legal :deep(.textmode-privacy-settings-trigger) {
  padding: 0;
  border: none;
  background: none;
  font: inherit;
  color: var(--vp-c-brand-1);
  cursor: pointer;
  transition: color 0.2s ease;
}

.site-footer__legal :deep(.textmode-privacy-settings-trigger:hover) {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.site-footer__link:focus-visible,
.site-footer__brand-link:focus-visible,
.site-footer__social:focus-visible,
.site-footer__legal :deep(.textmode-privacy-settings-trigger:focus-visible) {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

@container (min-width: 640px) {
  .site-footer__nav {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .site-footer__brand {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  }
}

@container (min-width: 900px) {
  .site-footer__top {
    grid-template-columns: minmax(200px, 300px) minmax(0, 1fr);
    gap: 2.5rem 3.5rem;
  }

  .site-footer__brand {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
}
</style>
