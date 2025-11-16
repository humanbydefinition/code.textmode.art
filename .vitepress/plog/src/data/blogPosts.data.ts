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

const BLOG_POSTS_GLOB = 'blog/posts/**/*.md'
type LoaderModule = Awaited<ReturnType<typeof importLoader>>

function normalizeWatchPattern(pattern: string): string {
  return pattern.replace(/\\+/g, '/')
}

const config = (globalThis as any).VITEPRESS_CONFIG
const resolvedWatch = config?.srcDir
  ? [normalizeWatchPattern(`${config.srcDir}/${BLOG_POSTS_GLOB}`)]
  : [BLOG_POSTS_GLOB]

let loaderPromise: Promise<LoaderModule> | null = null

async function importLoader() {
  const { createContentLoader } = await import('vitepress')
  return createContentLoader(BLOG_POSTS_GLOB, {
    excerpt: true,
    includeSrc: true,
    transform(posts): BlogPostEntry[] {
      return posts
        .map((post) => {
          const frontmatter = post.frontmatter as Record<string, any>

          const sourcePath = (post as any).src ?? ''
          const date = frontmatter?.date ?? ''
          const tags = Array.isArray(frontmatter?.tags) ? frontmatter.tags : []
          const author = frontmatter?.author ?? 'textmode.js Team'
          const permalink = post.url

          const sourceContent = (post as any).src ?? ''
          const words = typeof sourceContent === 'string' && sourceContent
            ? sourceContent.trim().split(/\s+/).filter(Boolean).length
            : 0
          const readingTime = Math.max(1, Math.round(words / 220))

          const rawDescription = frontmatter?.description ?? post.excerpt ?? ''
          const description = typeof rawDescription === 'string'
            ? rawDescription.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
            : ''

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
        .sort((a, b) => {
          const aTime = a.date ? Date.parse(a.date) : 0
          const bTime = b.date ? Date.parse(b.date) : 0
          return bTime - aTime
        })
    },
  })
}

async function getLoader() {
  if (!loaderPromise) {
    loaderPromise = importLoader()
  }
  return loaderPromise
}

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
  watch: resolvedWatch,
  async load(files?: string[]): Promise<BlogPostEntry[]> {
    const loader = await getLoader()
    return await loader.load()
  },
}
