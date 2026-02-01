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
  const canonicalUrl = `https://code.textmode.art/${pageData.relativePath.replace(/index\.md$/, '').replace(/\.md$/, '')}`
    .replace(/\/$/, ''); 

  // Breadcrumb Schema Generation
  const segments = pageData.relativePath.replace(/\.md$/, '').split('/').filter(s => s !== 'index')
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://code.textmode.art"
    }
  ]

  let currentPath = ''
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const isLast = index === segments.length - 1
    
    let name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
    let itemUrl = `https://code.textmode.art${currentPath}`
    
    // Manual override for 'docs' root to prevent 404s
    if (segment === 'docs' && !isLast) {
       itemUrl = 'https://code.textmode.art/docs/introduction'
    }

    if (isLast) {
      name = pageData.title || name
      // Use the canonical URL for the leaf node to ensure consistency (e.g. .html vs directory)
      itemUrl = canonicalUrl
    }

    breadcrumbItems.push({
      "@type": "ListItem",
      "position": breadcrumbItems.length + 1,
      "name": name,
      "item": itemUrl
    })
  })

  const defaultDescription = 'textmode.js is a lightweight creative coding library for creating real-time ASCII art on the web.'
  const ogTitle = pageData.title || 'textmode.js'
  const ogDescription = pageData.description || defaultDescription
  const ogImage = 'https://code.textmode.art/png/textmodejs_banner.png'

  return [
    ['link', { rel: 'canonical', href: canonicalUrl }],
    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'textmode.js' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { property: 'og:url', content: canonicalUrl }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:image:alt', content: 'textmode.js - Real-time ASCII art library' }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: ogTitle }],
    ['meta', { name: 'twitter:description', content: ogDescription }],
    ['meta', { name: 'twitter:image', content: ogImage }],
    ['meta', { name: 'twitter:image:alt', content: 'textmode.js - Real-time ASCII art library' }],
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
    })],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    })]
  ]
}
