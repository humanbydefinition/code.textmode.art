export interface EditorSketchMeta {
  slug: string
  title: string
  description?: string
  authorName?: string
  license?: string
  socialLinks?: Array<{ label: string; url: string }>
  createdAt?: string
  ogFrame?: number
  ogDarken?: number
  featured?: boolean
}

export interface EditorGallerySketch extends EditorSketchMeta {
  textmodeCode: string
  ogImageUrl?: string
}

export type EditorSketchMap = Record<string, EditorGallerySketch>

declare const data: EditorGallerySketch[]
export { data }

/**
 * Ensures sketch code is standalone executable by prepending `const t = textmode.create();`
 * if `t` is not already initialized.
 */
export function refactorSketchCode(code: string): string {
  const trimmed = code.trim()
  if (
    trimmed.includes('const t = textmode.create') ||
    trimmed.includes('let t = textmode.create') ||
    trimmed.includes('var t = textmode.create')
  ) {
    return code
  }
  return `const t = textmode.create();\n\n${code}`
}

const GITHUB_REPO_OWNER = 'humanbydefinition'
const GITHUB_REPO_NAME = 'editor.textmode.art'
const GITHUB_BRANCH = 'main'

async function fetchFromGitHub(): Promise<EditorGallerySketch[]> {
  try {
    const apiUrl = `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/contents/sketches`
    const headers: Record<string, string> = {
      'User-Agent': 'code.textmode.art-build-loader',
      Accept: 'application/vnd.github.v3+json',
    }
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
    }

    const res = await fetch(apiUrl, { headers })
    if (!res.ok) {
      console.warn(`[editorSketches loader] GitHub API failed (${res.status} ${res.statusText}). Returning empty sketches.`)
      return []
    }

    const items = (await res.json()) as Array<{ name: string; type: string }>
    const sketchFolders = items.filter((item) => item.type === 'dir').map((item) => item.name)

    const sketches: EditorGallerySketch[] = []

    for (const slug of sketchFolders) {
      const rawBase = `https://raw.githubusercontent.com/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/${GITHUB_BRANCH}/sketches/${slug}`
      const metaRes = await fetch(`${rawBase}/meta.json`, { headers })
      const codeRes = await fetch(`${rawBase}/sketch.js`, { headers })

      if (!metaRes.ok || !codeRes.ok) continue

      const meta = (await metaRes.json()) as EditorSketchMeta
      const rawCode = await codeRes.text()
      const textmodeCode = refactorSketchCode(rawCode)
      const ogImageUrl = `${rawBase}/og.png`

      sketches.push({
        ...meta,
        slug: meta.slug || slug,
        featured: true,
        textmodeCode,
        ogImageUrl,
      })
    }

    return sketches.sort((a, b) => a.slug.localeCompare(b.slug))
  } catch (error) {
    console.warn('[editorSketches loader] Exception fetching from GitHub:', error)
    return []
  }
}

export default {
  async load(): Promise<EditorGallerySketch[]> {
    // Strictly fetch published sketches from the remote main branch on GitHub
    return await fetchFromGitHub()
  },
}
