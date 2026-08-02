import { existsSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

const GITHUB_REPO_OWNER = 'humanbydefinition'
const GITHUB_REPO_NAME = 'editor.textmode.art'
const GITHUB_BRANCH = 'main'

export function refactorSketchCode(code) {
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

async function fetchFromGitHub() {
  try {
    const apiUrl = `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/contents/sketches`
    const headers = {
      'User-Agent': 'code.textmode.art-fetch-script',
      Accept: 'application/vnd.github.v3+json',
    }
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
    }

    const res = await fetch(apiUrl, { headers })
    if (!res.ok) {
      console.warn(`[fetch-editor-sketches] GitHub API request failed (${res.status} ${res.statusText})`)
      return []
    }

    const items = await res.json()
    const sketchFolders = items.filter((item) => item.type === 'dir').map((item) => item.name)

    const sketches = []

    for (const slug of sketchFolders) {
      const rawBase = `https://raw.githubusercontent.com/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/${GITHUB_BRANCH}/sketches/${slug}`
      const metaRes = await fetch(`${rawBase}/meta.json`, { headers })
      const codeRes = await fetch(`${rawBase}/sketch.js`, { headers })

      if (!metaRes.ok || !codeRes.ok) continue

      const meta = await metaRes.json()
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
    console.error('[fetch-editor-sketches] Error fetching sketches from GitHub:', error)
    return []
  }
}

async function main() {
  console.log('[fetch-editor-sketches] Fetching published sketches strictly from GitHub main branch...')
  const sketches = await fetchFromGitHub()

  console.log(`[fetch-editor-sketches] Successfully fetched ${sketches.length} published sketch(es):`)
  sketches.forEach((s) => console.log(` - ${s.slug} ("${s.title}") by ${s.authorName || 'unknown'}`))

  const root = process.cwd()
  const outputDir = resolve(root, '.vitepress/data')
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true })
  }
  const outputPath = resolve(outputDir, '.generated-editor-sketches.json')
  writeFileSync(outputPath, JSON.stringify(sketches, null, 2), 'utf-8')
  console.log(`[fetch-editor-sketches] Wrote generated sketches cache to ${outputPath}`)
}

if (process.argv[1] && process.argv[1].endsWith('fetch-editor-sketches.mjs')) {
  main()
}
