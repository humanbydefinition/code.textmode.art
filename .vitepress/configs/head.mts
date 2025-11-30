import type { HeadConfig } from 'vitepress'

const baseHeaders: HeadConfig[] = [
  ['link', { rel: 'icon', href: '/svg/doc_logo.svg', type: 'image/svg+xml' }],
  ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
  ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
  ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', rel: 'stylesheet' }],
]

const umamiScript: HeadConfig = ['script', {
  defer: 'true',
  src: 'https://analytics.textmode.art/script.js',
  'data-website-id': 'f5bf4e2e-1d33-4785-b51c-9c55da523767'
}]

export const head: HeadConfig[] = [...baseHeaders, umamiScript]
