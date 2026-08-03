import { existsSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

const GITHUB_REPO_OWNER = 'humanbydefinition'
const GITHUB_REPO_NAME = 'editor.textmode.art'
const GITHUB_BRANCH = 'main'

/**
 * Refactors sketch code from editor.textmode.art for code.textmode.art Sandpack:
 * 1. Ensures textmode.create is initialized with responsive dimensions:
 *    textmode.create({ width: window.innerWidth, height: window.innerHeight })
 * 2. Ensures a t.windowResized callback exists and invokes:
 *    t.resizeCanvas(window.innerWidth, window.innerHeight)
 */
export function refactorSketchCode(code) {
  let refactored = code.trim()

  // 1. Ensure textmode.create is initialized with responsive sizing
  if (
    refactored.includes('const t = textmode.create') ||
    refactored.includes('let t = textmode.create') ||
    refactored.includes('var t = textmode.create')
  ) {
    refactored = refactored.replace(
      /(?:const|let|var)\s+t\s*=\s*textmode\.create\s*\(\s*(?:\{\s*\})?\s*\)/g,
      'const t = textmode.create({ width: window.innerWidth, height: window.innerHeight })'
    )
  } else {
    refactored = `const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });\n\n${refactored}`
  }

  // 2. Ensure t.windowResized callback is present and calls t.resizeCanvas(window.innerWidth, window.innerHeight)
  const hasWindowResized = refactored.includes('windowResized')
  const hasResizeCanvas = refactored.includes('resizeCanvas')

  if (!hasWindowResized) {
    refactored += `\n\nt.windowResized(() => {\n  t.resizeCanvas(window.innerWidth, window.innerHeight);\n});\n`
  } else if (!hasResizeCanvas) {
    refactored = refactored.replace(
      /(t\.windowResized\s*\(\s*(?:async\s*)?(?:function\s*\w*\s*\([^)]*\)|\([^)]*\)|[a-zA-Z0-9_$]+)?\s*(?:=>)?\s*\{)/g,
      '$1\n  t.resizeCanvas(window.innerWidth, window.innerHeight);'
    )
  }

  return refactored
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
