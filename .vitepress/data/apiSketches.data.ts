import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { resolve, join, relative } from 'node:path'

export interface ApiSketch {
  title: string
  author: string
}

export type ApiSketchMap = Record<string, ApiSketch>

declare const data: ApiSketchMap
export { data }

function collectMarkdownFiles(dir: string): string[] {
  const files: string[] = []
  if (!existsSync(dir)) return files

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) files.push(...collectMarkdownFiles(full))
    else if (entry.name.endsWith('.md')) files.push(full)
  }

  return files
}

export default {
  watch: ['api/**/*.md'],
  load(): ApiSketchMap {
    const root = process.cwd()
    const apiDir = resolve(root, 'api')
    const files = collectMarkdownFiles(apiDir)
    const sketches: ApiSketchMap = {}

    for (const file of files) {
      const content = readFileSync(file, 'utf-8')
      const lines = content.split('\n')

      const frontmatterMatch = content.match(/^---\s*\n[\s\S]*?title:\s*(.+)\n[\s\S]*?---/m)
      const pageTitle = frontmatterMatch?.[1]?.trim() ?? ''

      let currentHeading = ''
      let blockIndex = 0

      for (let i = 0; i < lines.length; i++) {
        const headingMatch = lines[i].match(/^###\s+(.+)/)
        if (headingMatch) {
          currentHeading = headingMatch[1].trim()
        }

        if (!lines[i].includes('github.com/') || !lines[i].includes('.png')) continue

        const block = lines.slice(i, Math.min(i + 12, lines.length)).join('\n')

        if (block.includes('{ai-generated}')) continue

        const authorMatch = block.match(/<strong><a[^>]*>@([^<]+)<\/a><\/strong>/)
        if (!authorMatch) continue

        const author = authorMatch[1]
        const title = currentHeading
          ? `${pageTitle} – ${currentHeading}`
          : pageTitle

        const relPath = relative(root, file).replace(/[\\/]/g, '-').replace(/\.md$/, '')
        const key = `api:${relPath}:${blockIndex++}`

        sketches[key] = { title, author }
      }
    }

    return sketches
  },
}
