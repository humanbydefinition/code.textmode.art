import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { resolve, join, relative } from 'node:path'
import { extractApiSandboxComponents } from './api-sandbox-attributes.mjs'

export const API_PROFILE_IDS = [
  'textmode.js',
  'textmode.synth.js',
  'textmode.filters.js',
  'textmode.figlet.js',
  'textmode.export.js',
  'textmode.overlay.js',
]

const VALID_LANGUAGES = new Set(['javascript', 'typescript'])

const HEADING_PATTERN = /^(#{1,6})\s+(.+)$/gm

const FRONTMATTER_KEYS = [
  'title',
  'description',
  'category',
  'kind',
  'owner',
  'ecosystem',
  'lastModified',
]

export function collectMarkdownFiles(dir) {
  const files = []
  if (!existsSync(dir)) return files

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) files.push(...collectMarkdownFiles(full))
    else if (entry.name.endsWith('.md')) files.push(full)
  }

  return files
}

function parseFrontmatter(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/)
  if (!match) return {}

  const meta = {}
  for (const line of match[1].split('\n')) {
    const kv = line.match(/^([A-Za-z][\w]*):\s*(.+)$/)
    if (!kv) continue
    const key = kv[1].trim()
    if (!FRONTMATTER_KEYS.includes(key)) continue
    meta[key] = kv[2].trim().replace(/^["']|["']$/g, '')
  }
  return meta
}

function findNearestHeading(content, fromIndex) {
  HEADING_PATTERN.lastIndex = 0
  let match
  let nearest

  while ((match = HEADING_PATTERN.exec(content))) {
    if (match.index >= fromIndex) break
    const text = match[2].trim()
    if (isGenericExampleHeading(text)) continue
    nearest = text
  }

  return nearest
}

function isGenericExampleHeading(heading) {
  return !heading || /^examples?$/i.test(heading)
}

function toSlug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function unescapeMarkdown(value) {
  return value.replace(/\\([\\`*_{}\[\]()#+\-.!|<>])/g, '$1')
}

/**
 * Scans the generated API markdown tree and returns one catalog entry per
 * live sandbox instance. Only instances that carry a known profile, a valid
 * language, and a non-empty `encoded-code` are included; everything else is
 * skipped so a malformed upstream doc can never break the Examples page.
 *
 * @param {string} [root] Project root that contains the `api/` directory.
 * @returns {Array<object>} Catalog entries (see ApiExampleSketch in apiExamples.data.ts).
 */
export function scanApiExamples(root = process.cwd()) {
  const apiDir = resolve(root, 'api')
  const files = collectMarkdownFiles(apiDir)
  const entries = []
  const seen = new Set()

  for (const file of files) {
    const apiPath = relative(root, file).replace(/\\/g, '/')
    const profile = apiPath.split('/')[1]
    if (!API_PROFILE_IDS.includes(profile)) continue

    const content = readFileSync(file, 'utf-8')
    const frontmatter = parseFrontmatter(content)
    const components = extractApiSandboxComponents(content)
    const runnableInstances = components.filter(
      (instance) => instance.encodedCode
        && API_PROFILE_IDS.includes(instance.profile)
        && VALID_LANGUAGES.has(instance.language),
    )
    const needsDisambiguation = runnableInstances.length > 1

    for (const instance of runnableInstances) {
      const ordinal = instance.index
      const id = `${instance.profile}:${apiPath}:${ordinal}`
      if (seen.has(id)) continue
      seen.add(id)

      const heading = findNearestHeading(content, instance.start)
      const baseTitle = frontmatter.title || instance.title || 'textmode.js example'
      const displayHeading = needsDisambiguation && !isGenericExampleHeading(heading)
        ? unescapeMarkdown(heading)
        : undefined
      const title = displayHeading
        ? `${baseTitle} — ${displayHeading}`
        : baseTitle

      const pageUrl = `/${apiPath.replace(/\.md$/, '')}`
      const slug = toSlug(`${instance.profile}-${apiPath}-${ordinal}`)

      const tags = [
        instance.profile,
        frontmatter.kind,
        frontmatter.owner,
        displayHeading,
      ].filter(Boolean)

      entries.push({
        id,
        slug,
        profile: instance.profile,
        language: instance.language === 'typescript' ? 'typescript' : 'javascript',
        encodedCode: instance.encodedCode,
        apiPath,
        pageUrl,
        heading: displayHeading,
        ordinal,
        title,
        description: frontmatter.description || undefined,
        kind: frontmatter.kind || undefined,
        owner: frontmatter.owner || undefined,
        ecosystem: frontmatter.ecosystem || undefined,
        category: frontmatter.category || undefined,
        lastModified: frontmatter.lastModified || undefined,
        tags,
      })
    }
  }

  return entries.sort((a, b) => {
    const profileOrder = API_PROFILE_IDS.indexOf(a.profile) - API_PROFILE_IDS.indexOf(b.profile)
    if (profileOrder !== 0) return profileOrder
    const pathOrder = a.apiPath.localeCompare(b.apiPath)
    if (pathOrder !== 0) return pathOrder
    return a.ordinal - b.ordinal
  })
}
