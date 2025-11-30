/// <reference path="./shims.d.ts" />
import { defineConfig } from 'vitepress'
import container from 'markdown-it-container'
import { renderSandbox } from 'vitepress-plugin-sandpack'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { head, nav, sidebar } from './configs/index.mts'

const themeConfig = {
  logo: '/svg/doc_logo.svg',

  lastUpdated: {
    text: 'Last updated'
  },

  nav,

  search: {
    provider: 'local' as const,
  },

  outline: {
    level: [2, 3] as [number, number],
  },

  sidebar,

  footer: {
    copyright: 'Copyright © 2025 <a href="https://textmode.art" target="_blank">textmode.art</a>. Built with <a href="https://vitepress.dev" target="_blank">VitePress</a>. Created by <a href="https://github.com/humanbydefinition" target="_blank">humanbydefinition</a>.',
    message: '<a href="/docs/legal/imprint">Imprint</a> | <a href="/docs/legal/data-protection-policy">Data Protection Policy</a>'
  },

  socialLinks: [
    { icon: 'github', link: 'https://github.com/humanbydefinition/textmode.js' },
    { icon: 'discord', link: 'https://discord.gg/sjrw8QXNks' },
  ],
}

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  title: "textmode.js",
  description: "textmode.js is a lightweight creative coding library for creating real-time ASCII art on the web.",
  head,

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
        });
    },
  },

  themeConfig,
}))