export interface BlogPostEntry {
  title: string
  description: string
  date: string
  tags: string[]
  author: string
  url: string
  slug: string
  readingTime: number
  cover: string | null
  source: string
}

declare const data: BlogPostEntry[]
export { data }

/**
 * VitePress Data Loader for blog posts
 * 
 * This loader watches all markdown files in blog/posts and transforms them into
 * BlogPostEntry objects with frontmatter metadata and computed fields.
 * 
 * HMR Support:
 * - The watch pattern ensures any changes to blog post files trigger a reload
 * - VitePress automatically handles HMR for data loaders when files in the watch pattern change
 * - Frontmatter changes, content updates, and file additions/deletions are all detected
 */
export default {
  // Watch pattern for all blog post markdown files
  // This enables HMR - any change to these files will trigger a reload
  // Path is relative to VitePress root (vitepress/ directory)
  watch: ['blog/posts/**/*.md'],
  
  async load(): Promise<BlogPostEntry[]> {
    // Dynamically import createContentLoader to avoid ESM/CommonJS issues
    const { createContentLoader } = await import('vitepress')
    
    // Create content loader with the same pattern
    // Path is relative to VitePress root (vitepress/ directory)
    const loader = createContentLoader('blog/posts/**/*.md', {
      excerpt: true,
      // Include raw content for reading time calculation
      includeSrc: true,
      transform(posts): BlogPostEntry[] {
        return posts
          .map((post) => {
            const frontmatter = post.frontmatter as Record<string, any>
            
            // Extract metadata with proper fallbacks
            const sourcePath = (post as any).src ?? ''
            const date = frontmatter?.date ?? ''
            const tags = Array.isArray(frontmatter?.tags) ? frontmatter.tags : []
            const author = frontmatter?.author ?? 'textmode.js Team'
            const permalink = post.url
            
            // Calculate reading time based on word count (average reading speed: 220 words/min)
            // With includeSrc: true, the raw markdown content is available in post.src
            const sourceContent = (post as any).src ?? ''
            const words = typeof sourceContent === 'string' && sourceContent
              ? sourceContent.trim().split(/\s+/).filter(Boolean).length
              : 0
            const readingTime = Math.max(1, Math.round(words / 220))
            
            // Clean description from HTML tags and normalize whitespace
            const rawDescription = frontmatter?.description ?? post.excerpt ?? ''
            const description = typeof rawDescription === 'string'
              ? rawDescription.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
              : ''

            // Generate slug from frontmatter or URL
            const slug = frontmatter?.slug ?? 
              permalink.replace(/\/$/, '').split('/').pop() ?? 
              ''

            return {
              title: frontmatter?.title ?? 'Untitled post',
              description,
              date,
              tags,
              author,
              url: permalink,
              slug,
              readingTime,
              cover: frontmatter?.cover ?? null,
              source: sourcePath,
            }
          })
          // Sort by date descending (newest first)
          .sort((a, b) => {
            const aTime = a.date ? Date.parse(a.date) : 0
            const bTime = b.date ? Date.parse(b.date) : 0
            return bTime - aTime
          })
      },
    })
    
    return await loader.load()
  }
}
