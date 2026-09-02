import type { HeadConfig, TransformContext } from 'vitepress'

const baseHeaders: HeadConfig[] = [
  ['link', { rel: 'icon', href: '/svg/doc_logo.svg', type: 'image/svg+xml' }],
  ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
  ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
  ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', rel: 'stylesheet' }]
]

export const head: HeadConfig[] = [...baseHeaders]

export const transformHead = ({ pageData }: TransformContext): HeadConfig[] => {
  const relative = pageData.relativePath

  // Normalize canonical URL
  let canonicalUrl: string
  if (relative === 'index.md') {
    canonicalUrl = 'https://code.textmode.art/'
  } else if (relative.endsWith('/index.md')) {
    canonicalUrl = `https://code.textmode.art/${relative.replace(/\/index\.md$/, '')}/`
  } else {
    canonicalUrl = `https://code.textmode.art/${relative.replace(/\.md$/, '')}`
  }

  // Detect page categories
  const isHomePage = relative === 'index.md'
  const isDocsIndex = relative === 'docs/index.md'
  const isDocsPage = relative.startsWith('docs/') && !isDocsIndex
  const isApiIndex = relative === 'api/index.md'
  const isApiPage = relative.startsWith('api/') && !isApiIndex

  // Construct valid BreadcrumbList (ensuring every item has a resolvable 200 OK URL)
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://code.textmode.art/"
    }
  ]

  if (isDocsIndex) {
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": "Documentation",
      "item": "https://code.textmode.art/docs/"
    })
  } else if (isDocsPage) {
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": "Documentation",
      "item": "https://code.textmode.art/docs/"
    })

    if (relative.startsWith('docs/contributing/')) {
      if (relative === 'docs/contributing/index.md') {
        breadcrumbItems.push({
          "@type": "ListItem",
          "position": 3,
          "name": "Contributing",
          "item": "https://code.textmode.art/docs/contributing/"
        })
      } else {
        breadcrumbItems.push({
          "@type": "ListItem",
          "position": 3,
          "name": "Contributing",
          "item": "https://code.textmode.art/docs/contributing/"
        })
        breadcrumbItems.push({
          "@type": "ListItem",
          "position": 4,
          "name": pageData.title || "Guide",
          "item": canonicalUrl
        })
      }
    } else {
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": 3,
        "name": pageData.title || "Guide",
        "item": canonicalUrl
      })
    }
  } else if (isApiIndex) {
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": "API",
      "item": "https://code.textmode.art/api/"
    })
  } else if (isApiPage) {
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": "API",
      "item": "https://code.textmode.art/api/"
    })

    // Check if under an API sub-package e.g. api/textmode.export.js/...
    const apiMatch = relative.match(/^api\/(textmode(?:\.[a-z]+)?\.js)\//)
    if (apiMatch) {
      const pkgName = apiMatch[1]
      const isPkgIndex = relative === `api/${pkgName}/index.md`
      
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": 3,
        "name": pkgName,
        "item": `https://code.textmode.art/api/${pkgName}/`
      })

      if (!isPkgIndex) {
        breadcrumbItems.push({
          "@type": "ListItem",
          "position": 4,
          "name": pageData.title || "Reference",
          "item": canonicalUrl
        })
      }
    } else {
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": 3,
        "name": pageData.title || "Reference",
        "item": canonicalUrl
      })
    }
  } else if (!isHomePage) {
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": pageData.title || "Page",
      "item": canonicalUrl
    })
  }

  const defaultDescription = 'textmode.js is a lightweight creative coding library for creating real-time ASCII art on the web.'
  const ogTitle = pageData.title ? `${pageData.title} | textmode.js` : 'textmode.js'
  const ogDescription = pageData.description || defaultDescription
  const ogImage = 'https://code.textmode.art/png/readme-og.png'

  const head: HeadConfig[] = [
    ['link', { rel: 'canonical', href: canonicalUrl }],
    // Meta
    ['meta', { name: 'description', content: ogDescription }],
    ['meta', { name: 'robots', content: 'index, follow' }],
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
  ]

  // Add Keywords (from frontmatter or default)
  const defaultKeywords = 'textmode, ascii art, creative coding, webgl, javascript library, generative art, real-time, canvas, visualization, retro, 8-bit, terminal, petscii, live coding'
  const keywords = pageData.frontmatter.keywords || defaultKeywords

  if (keywords) {
    head.push(['meta', { name: 'keywords', content: keywords }])
  }

  // Schema: Home page
  if (isHomePage) {
    head.push(['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "name": "textmode.js",
          "url": "https://code.textmode.art/",
          "logo": "https://code.textmode.art/svg/doc_logo.svg",
          "sameAs": [
            "https://github.com/humanbydefinition/textmode.js"
          ]
        },
        {
          "@type": "WebSite",
          "name": "textmode.js",
          "url": "https://code.textmode.art/",
          "description": defaultDescription
        },
        {
          "@type": "SoftwareApplication",
          "name": "textmode.js",
          "operatingSystem": "Any",
          "applicationCategory": "DeveloperApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "description": defaultDescription,
          "url": "https://code.textmode.art/"
        }
      ]
    })])
  }
  // Schema: Documentation & API Reference Pages (TechArticle)
  else if (isDocsPage || isDocsIndex || isApiPage || isApiIndex) {
    head.push(['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    })])

    const techArticle: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": pageData.title || "textmode.js Documentation",
      "description": ogDescription,
      "author": {
        "@type": "Organization",
        "name": "textmode.js",
        "url": "https://code.textmode.art/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "textmode.js",
        "url": "https://code.textmode.art/"
      },
      "url": canonicalUrl
    }

    if (pageData.lastUpdated) {
      techArticle.dateModified = new Date(pageData.lastUpdated).toISOString()
    }
    head.push(['script', { type: 'application/ld+json' }, JSON.stringify(techArticle)])
  }
  // Schema: All other pages
  else {
    head.push(['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    })])
  }

  return head
}
