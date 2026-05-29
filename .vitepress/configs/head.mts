import type { HeadConfig, TransformContext } from 'vitepress'

const baseHeaders: HeadConfig[] = [
  ['link', { rel: 'icon', href: '/svg/doc_logo.svg', type: 'image/svg+xml' }],
  ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
  ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
  ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', rel: 'stylesheet' }],
]

export const head: HeadConfig[] = [...baseHeaders]

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

  // Detect page types
  const isBlogPost = pageData.relativePath.startsWith('blog/') && pageData.relativePath !== 'blog/index.md';
  const isHomePage = pageData.relativePath === 'index.md';
  const isDocsPage = pageData.relativePath.startsWith('docs/') && !pageData.relativePath.endsWith('/index.md');

  const ogType = isBlogPost ? 'article' : 'website';

  const head: HeadConfig[] = [
    ['link', { rel: 'canonical', href: canonicalUrl }],
    // Meta
    ['meta', { name: 'description', content: ogDescription }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    // Open Graph
    ['meta', { property: 'og:type', content: ogType }],
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
  const defaultKeywords = 'textmode, ascii art, creative coding, webgl, javascript library, generative art, real-time, canvas, visualization, retro, 8-bit, terminal, petscii, live coding';
  const keywords = pageData.frontmatter.keywords || defaultKeywords;

  if (keywords) {
    head.push(['meta', { name: 'keywords', content: keywords }]);
  }

  // Schema: Home page with consolidated @graph
  if (isHomePage) {
    head.push(['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "name": "textmode.js",
          "url": "https://code.textmode.art",
          "logo": "https://code.textmode.art/svg/doc_logo.svg",
          "sameAs": [
            "https://github.com/humanbydefinition/textmode.js",
            "https://discord.gg/sjrw8QXNks"
          ]
        },
        {
          "@type": "WebSite",
          "name": "textmode.js",
          "url": "https://code.textmode.art",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://code.textmode.art/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
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
          "description": "textmode.js is a lightweight creative coding library for creating real-time ASCII art on the web.",
          "url": "https://code.textmode.art"
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbItems
        }
      ]
    })]);
  }
  // Schema: Blog posts
  else if (isBlogPost) {
    head.push(['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    })]);
    head.push(['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": pageData.title,
      "image": [ogImage],
      "datePublished": pageData.frontmatter.date ? new Date(pageData.frontmatter.date).toISOString() : undefined,
      "dateModified": pageData.lastUpdated ? new Date(pageData.lastUpdated).toISOString() : undefined,
      "author": [{
        "@type": "Person",
        "name": pageData.frontmatter.author || "textmode.js team",
        "url": "https://code.textmode.art"
      }]
    })]);
  }
  // Schema: Documentation pages (TechArticle)
  else if (isDocsPage) {
    head.push(['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    })]);
    const techArticle: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": pageData.title,
      "description": ogDescription,
      "author": {
        "@type": "Organization",
        "name": "textmode.js",
        "url": "https://code.textmode.art"
      },
      "publisher": {
        "@type": "Organization",
        "name": "textmode.js",
        "url": "https://code.textmode.art"
      },
      "url": canonicalUrl
    };
    if (pageData.lastUpdated) {
      techArticle.dateModified = new Date(pageData.lastUpdated).toISOString();
    }
    head.push(['script', { type: 'application/ld+json' }, JSON.stringify(techArticle)]);
  }
  // Schema: All other pages
  else {
    head.push(['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    })]);
  }

  return head;
}
