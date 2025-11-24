/// <reference path="./shims.d.ts" />
import { defineConfig } from 'vitepress'
import type { HeadConfig } from 'vitepress'
import container from 'markdown-it-container'
import { renderSandbox } from 'vitepress-plugin-sandpack'
import { withMermaid } from 'vitepress-plugin-mermaid'
import typedocSidebar from "../api/typedoc-sidebar.json";

const umamiScript: HeadConfig = ["script", {
  defer: "true",
  src: "https://analytics.textmode.art/script.js",
  "data-website-id": "f5bf4e2e-1d33-4785-b51c-9c55da523767"
}]

const baseHeaders: HeadConfig[] = [
  ['link', { rel: 'icon', href: '/svg/doc_logo.svg', type: 'image/svg+xml' }],
  ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
  ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
  ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', rel: 'stylesheet' }],
]

const headers = [...baseHeaders, umamiScript];

const themeConfig = {
  logo: '/svg/doc_logo.svg',

  lastUpdated: {
    text: 'Last updated'
  },

  nav: [
    { text: 'Home', link: '/' },
    { text: 'Documentation', link: '/docs/introduction' },
    { text: 'API', link: '/api/' },
    { text: 'Blog', link: '/blog/' },
    { text: 'Web Editor', link: 'https://editor.textmode.art' },
    { text: 'Support ♥', link: '/support' },
  ],

  search: {
    provider: 'local' as const,
  },

  outline: {
    level: [2, 3] as [number, number],
  },

  sidebar: [
    {
      text: "Docs",
      items: [
        { text: "Introduction", link: "/docs/introduction" },
        { text: "Installation", link: "/docs/installation" },
        { text: "Fundamentals", link: "/docs/fundamentals" },
        { text: "Event handling", link: "/docs/events" },
        { text: "Fonts", link: "/docs/fonts" },
        { text: "Images and videos", link: "/docs/loadables" },
        { text: "Advanced features", link: "/docs/advanced" },
        { text: "Framework integration", link: "/docs/framework-integration" },
        { text: "Exporting", link: "/docs/exporting" },
        { text: "Examples", link: "/docs/examples" },
        { text: "Contributing", link: "/docs/contributing" },
      ]
    },
    {
      text: "API",
      items: [
        { text: "Index", link: "/api/" },
        ...typedocSidebar
      ],
    },
  ],

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
  head: headers,

  markdown: {
    config(md) {
      md
        .use(container, 'sandbox', { // Sandbox container without 'made by' label
          render(tokens: any[], idx: number) {
            const sandboxHtml = renderSandbox(tokens, idx, 'sandbox');
            if (tokens[idx].nesting === 1) {
              return `<ClientOnly>${sandboxHtml}`;
            }

            return `${sandboxHtml}</ClientOnly>`;
          },
        })
        .use(container, 'textmode-sandbox', { // Sandbox container with 'by {author}' label
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