/// <reference path="./shims.d.ts" />
import { defineConfig } from 'vitepress'
import container from 'markdown-it-container'
import { renderSandbox } from 'vitepress-plugin-sandpack'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { head, nav, sidebar, blog, transformHead } from './configs/index.mts'

const LIVE_SANDBOX_CONTAINER_PATTERN = /:{3,}\s*textmode-(?:api-)?sandbox\b[^\n]*\n[\s\S]*?\n:{3,}/g
const LIVE_SANDBOX_COMPONENT_PATTERN = /<Textmode(?:Api|Live)?Sandbox\b[^>]*\/>/g
const RUNNABLE_API_FENCE_PATTERN = /```(?:javascript|js|typescript|ts)[^\n]*\n[\s\S]*?\n```/g

function renderSearchContent(src: string, env: any, md: any) {
  const isApiPage = env.relativePath?.startsWith('api/')
  const sourceWithoutLiveSandboxes = src
    .replace(LIVE_SANDBOX_CONTAINER_PATTERN, '')
    .replace(LIVE_SANDBOX_COMPONENT_PATTERN, '')
  const searchableSource = isApiPage
    ? sourceWithoutLiveSandboxes.replace(RUNNABLE_API_FENCE_PATTERN, '')
    : sourceWithoutLiveSandboxes
  const html = md.render(searchableSource, env)

  return env.frontmatter?.search === false ? '' : html
}

const themeConfig = {
  logo: '/svg/doc_logo.svg',

  lastUpdated: {
    text: 'Last updated'
  },

  editLink: {
    pattern: 'https://github.com/humanbydefinition/code.textmode.art/edit/main/:path',
    text: 'Edit this page on GitHub'
  },

  nav,

  search: {
    provider: 'local' as const,
    options: {
      _render: renderSearchContent,
    },
  },

  outline: {
    level: [2, 3] as [number, number],
  },

  sidebar,

  footer: {
    copyright: 'Copyright © 2025-2026 <a href="https://textmode.art" target="_blank">textmode.art</a>. Built with <a href="https://vitepress.dev" target="_blank">VitePress</a>. Created by <a href="https://github.com/humanbydefinition" target="_blank">humanbydefinition</a>.',
    message: '<a href="https://legal.textmode.art/projects/code.textmode.art/en/imprint" target="_blank" rel="noreferrer noopener">Imprint</a> | <a href="https://legal.textmode.art/projects/code.textmode.art/en/privacy" target="_blank" rel="noreferrer noopener">Data Protection Policy</a> | <button type="button" class="textmode-privacy-settings-trigger" data-analytics-consent-open>Privacy Settings</button>'
  },

  socialLinks: [
    { icon: 'github', link: 'https://github.com/humanbydefinition/textmode.js' },
    { icon: 'discord', link: 'https://discord.gg/sjrw8QXNks' },
  ],
}

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  lang: 'en-US',
  appearance: 'dark',
  lastUpdated: true,
  srcExclude: ['docs/examples/**'],
  title: "textmode.js",
  description: "textmode.js is a lightweight creative coding library for creating real-time ASCII art on the web.",
  head,
  cleanUrls: true,
  sitemap: {
    hostname: 'https://code.textmode.art'
  },
  transformHead,

  vite: {
    plugins: [blog.plugin],
  },

  markdown: {
    config(md) {
      md
        .use(container, 'textmode-sandbox', {
          render(tokens: any[], idx: number) {
            const sandboxHtml = renderSandbox(tokens, idx, 'textmode-sandbox');
            if (tokens[idx].nesting === 1) {
              return `<ClientOnly>${sandboxHtml}`;
            }

            return `${sandboxHtml}</ClientOnly>`;
          },
        })
        .use(container, 'textmode-api-sandbox', {
          render(tokens: any[], idx: number) {
            const sandboxHtml = renderSandbox(tokens, idx, 'textmode-api-sandbox');
            if (tokens[idx].nesting === 1) {
              return `<ClientOnly>${sandboxHtml}`;
            }

            return `${sandboxHtml}</ClientOnly>`;
          },
        });
    },
  },

  themeConfig,
}))
