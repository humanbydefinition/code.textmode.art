import type { HeadConfig, TransformContext } from 'vitepress'

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

export const transformHead = ({ pageData }: TransformContext): HeadConfig[] => {
  const canonicalUrl = `https://code.textmode.art/${pageData.relativePath.replace(/index\.md$/, '').replace(/\.md$/, '.html')}`
    .replace(/\/$/, ''); 

  return [
    ['link', { rel: 'canonical', href: canonicalUrl }],
    ['meta', { property: 'og:title', content: pageData.title || 'textmode.js' }],
    ['meta', { property: 'og:description', content: pageData.description || 'textmode.js is a lightweight creative coding library for creating real-time ASCII art on the web.' }],
    ['meta', { property: 'og:url', content: canonicalUrl }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "textmode.js",
      "operatingSystem": "Any",
      "applicationCategory": "DeveloperApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "A lightweight creative coding library for creating real-time ASCII art on the web.",
      "url": "https://code.textmode.art"
    })]
  ]
}
