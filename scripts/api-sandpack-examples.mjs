#!/usr/bin/env node
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const API_SANDBOX_PROFILES = {
  'api/textmode.js': {
    id: 'textmode.js',
    apiRoot: 'api/textmode.js',
    defaultTitle: 'textmode.js API example',
  },
  'api/textmode.synth.js': {
    id: 'textmode.synth.js',
    apiRoot: 'api/textmode.synth.js',
    defaultTitle: 'textmode.synth.js API example',
  },
  'api/textmode.filters.js': {
    id: 'textmode.filters.js',
    apiRoot: 'api/textmode.filters.js',
    defaultTitle: 'textmode.filters.js API example',
  },
  'api/textmode.figlet.js': {
    id: 'textmode.figlet.js',
    apiRoot: 'api/textmode.figlet.js',
    defaultTitle: 'textmode.figlet.js API example',
  },
  'api/textmode.export.js': {
    id: 'textmode.export.js',
    apiRoot: 'api/textmode.export.js',
    defaultTitle: 'textmode.export.js API example',
  },
}

const KNOWN_ECOSYSTEM_IMPORTS = new Set([
  'textmode.js',
  'textmode.js/plugins',
  'textmode.synth.js',
  'textmode.filters.js',
  'textmode.figlet.js',
  'textmode.export.js',
])

const API_MARKDOWN_PATTERN = /^api\/[^/]+\/.+\.md$/
const EXAMPLE_HEADING_PATTERN = /^(#{2,6}) Examples?$/gm
const RUNNABLE_FENCE_PATTERN = /```(javascript|js|typescript|ts)([^\n]*)\n([\s\S]*?)\n```/g
const API_SANDBOX_COMPONENT_PATTERN = /<TextmodeApiSandbox\b[^>]*\/>/g
const SANDBOX_BLOCK_PATTERN = /:::\s*textmode-api-sandbox\b[^\n]*\n([\s\S]*?)\n:::/m
const MALFORMED_API_SANDBOX_TAIL_PATTERN = /\/>[A-Za-z0-9_-]{20,}"\s*\/>/
const LOCAL_ASSET_PATTERN = /\b(?:loadFont|loadImage|loadVideo|loadTileset)\(\s*['"](?:\.{1,2}\/|\/)|\bsource\s*:\s*['"](?:\.{1,2}\/|\/)/
const IMPORT_LINE_PATTERN = /^\s*import(?:\s+type)?\s+.+?\s+from\s+['"]([^'"]+)['"];?\s*$/gm
const SIDE_EFFECT_IMPORT_PATTERN = /^\s*import\s+['"]([^'"]+)['"];?\s*$/gm
const UNSAFE_EXPORT_SIDE_EFFECT_PATTERN = /\bt\.save(?:Canvas|Image|GIF|Video|SVG|JSON|TXT)\s*\(|\bt\.exportOverlay\.(?:show|hide|toggle)\s*\(/
const LIVE_SKETCH_PATTERN = /\bt\.(?:setup|draw|windowResized|layers|background|clear|image|rect|line|ellipse|arc|box|torus|char|print|point|filter|figText|figFont|figTextBounds|loadFigFont|bpm|seed)\b/
const LEGACY_SKETCH_WRAPPER_START = '/* textmode-api-sandbox:start */'
const LEGACY_SKETCH_WRAPPER_END = '/* textmode-api-sandbox:end */'

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const args = new Set(process.argv.slice(2))
  const mode = args.has('--check') ? 'check' : 'write'

  if (args.has('--help')) {
    console.log('Usage: node scripts/api-sandpack-examples.mjs [--check]')
    process.exit(0)
  }

  const result = await transformApiSandpackExamples({ mode })

  if (mode === 'check' && (result.changed.length > 0 || result.invalid.length > 0)) {
    if (result.invalid.length > 0) {
      console.error(`API Sandpack examples have invalid live sketch blocks (${result.invalid.length} files).`)
      result.invalid.slice(0, 20).forEach((file) => console.error(`- ${file}`))
      if (result.invalid.length > 20) {
        console.error(`...and ${result.invalid.length - 20} more.`)
      }
    }

    if (result.changed.length > 0) {
      console.error(`API Sandpack examples are not up to date (${result.changed.length} files need updates).`)
      result.changed.slice(0, 20).forEach((file) => console.error(`- ${file}`))
      if (result.changed.length > 20) {
        console.error(`...and ${result.changed.length - 20} more.`)
      }
      console.error('Run `npm run api:sandpack` after regenerating API docs.')
    }

    process.exit(1)
  }

  const skippedReasons = formatSkippedReasons(result.skippedReasons)
  console.log(`${mode === 'check' ? 'Checked' : 'Updated'} API Sandpack examples: ${result.transformed} transformed, ${result.skipped} skipped, ${result.liveExamples} live, ${result.total} scanned.${skippedReasons}`)
}

export async function transformApiSandpackExamples({ mode = 'write', root = ROOT } = {}) {
  const files = await collectApiMarkdownFiles(root)
  const changed = []
  const invalid = []
  const skippedReasons = new Map()
  let transformed = 0
  let skipped = 0
  let liveExamples = 0

  for (const file of files) {
    const relativePath = slash(path.relative(root, file))
    const profile = getApiSandboxProfile(relativePath)

    if (!profile || !isTargetApiPage(relativePath)) {
      continue
    }

    const source = await fs.readFile(file, 'utf8')
    const output = transformMarkdown(source, relativePath)
    const validation = validateLiveSandboxBlocks(output.markdown)

    mergeSkippedReasons(skippedReasons, output.skippedReasons)

    if (!validation.valid) {
      invalid.push(relativePath)
    } else {
      liveExamples += validation.liveCount
    }

    if (output.changed) {
      changed.push(relativePath)
      transformed += 1

      if (mode === 'write') {
        await fs.writeFile(file, output.markdown)
      }
    } else if (output.skipped) {
      skipped += 1
    }
  }

  return {
    changed,
    invalid,
    liveExamples,
    skipped,
    skippedReasons,
    total: files.length,
    transformed,
  }
}

export function transformMarkdown(source, relativePath) {
  const profile = getApiSandboxProfile(relativePath)

  if (!profile || !isTargetApiPage(relativePath)) {
    return createTransformResult(source, false, false)
  }

  const restored = restoreExistingSandboxes(source)
  const title = getPageTitle(restored) || profile.defaultTitle
  const output = replaceRunnableExamples(restored, profile, title)
  const markdown = normalizeApiSandboxSpacing(output.markdown)

  return {
    changed: markdown !== source,
    markdown,
    skipped: output.liveCount === 0,
    skippedReasons: output.skippedReasons,
  }
}

function replaceRunnableExamples(source, profile, title) {
  EXAMPLE_HEADING_PATTERN.lastIndex = 0

  const headings = [...source.matchAll(EXAMPLE_HEADING_PATTERN)]
  const skippedReasons = new Map()
  let liveCount = 0
  let markdown = ''
  let cursor = 0

  for (const heading of headings) {
    const headingLevel = heading[1].length
    const sectionStart = heading.index + heading[0].length
    const sectionEnd = findSectionEnd(source, sectionStart, headingLevel)
    const output = replaceRunnableFences(source.slice(sectionStart, sectionEnd), profile, title)

    liveCount += output.liveCount
    mergeSkippedReasons(skippedReasons, output.skippedReasons)
    markdown += source.slice(cursor, sectionStart)
    markdown += output.markdown
    cursor = sectionEnd
  }

  markdown += source.slice(cursor)

  return { liveCount, markdown, skippedReasons }
}

function replaceRunnableFences(section, profile, title) {
  RUNNABLE_FENCE_PATTERN.lastIndex = 0

  const skippedReasons = new Map()
  let converted = 0
  let liveCount = 0

  const markdown = section.replace(RUNNABLE_FENCE_PATTERN, (fence, language, _info, code) => {
    const prepared = prepareRunnableSketch(code, profile)

    if (!prepared.runnable) {
      incrementSkippedReason(skippedReasons, prepared.reason)
      return fence
    }

    converted += 1
    liveCount += 1

    return renderSandboxComponent(prepared.code, profile, title, normalizeFenceLanguage(language))
  })

  return { liveCount, markdown, skippedReasons }
}

function prepareRunnableSketch(code, profile) {
  if (!code.includes('textmode.create(')) {
    return { code, reason: 'no-textmode-create', runnable: false }
  }

  if (LOCAL_ASSET_PATTERN.test(code)) {
    return { code, reason: 'local-asset', runnable: false }
  }

  if (UNSAFE_EXPORT_SIDE_EFFECT_PATTERN.test(code)) {
    return { code, reason: 'unsafe-export-side-effect', runnable: false }
  }

  const importResult = stripKnownEcosystemImports(code)

  if (importResult.unknownImport) {
    return { code, reason: 'unknown-import', runnable: false }
  }

  const stripped = unwrapSketchCode(importResult.code).trim()

  if (!LIVE_SKETCH_PATTERN.test(stripped)) {
    return { code: stripped, reason: 'not-live-sketch', runnable: false }
  }

  if (!profile) {
    return { code: stripped, reason: 'unknown-api-profile', runnable: false }
  }

  return { code: stripped, reason: '', runnable: true }
}

function stripKnownEcosystemImports(code) {
  let unknownImport = false
  let stripped = code.replace(IMPORT_LINE_PATTERN, (line, source) => {
    if (KNOWN_ECOSYSTEM_IMPORTS.has(source)) {
      return ''
    }

    unknownImport = true
    return line
  })

  stripped = stripped.replace(SIDE_EFFECT_IMPORT_PATTERN, (line, source) => {
    if (KNOWN_ECOSYSTEM_IMPORTS.has(source)) {
      return ''
    }

    unknownImport = true
    return line
  })

  if (/^\s*import\b/m.test(stripped)) {
    unknownImport = true
  }

  return {
    code: stripped.replace(/^\n+/, ''),
    unknownImport,
  }
}

function restoreExistingSandboxes(source) {
  let markdown = source.replace(API_SANDBOX_COMPONENT_PATTERN, (component) => {
    const encodedCode = getAttribute(component, 'encoded-code')
    if (encodedCode) {
      const code = decodeBase64Url(encodedCode)
      if (!code) return component

      return renderCodeFence(code, getAttribute(component, 'language') || 'javascript')
    }

    const encodedFiles = getAttribute(component, 'encoded-files')
    if (!encodedFiles) return component

    const files = decodeFiles(encodedFiles)
    const sketch = files ? findActiveSketchFile(files) : undefined
    if (!sketch) return component

    return renderCodeFence(unwrapSketchCode(sketch.code), getSketchLanguage(sketch.info))
  })

  markdown = markdown.replace(SANDBOX_BLOCK_PATTERN, (block, content) => {
    const sketch = content.match(/```js\s+sketch\.js\s+\[active\]\n([\s\S]*?)\n```/)
    if (!sketch) return block

    return renderCodeFence(unwrapSketchCode(sketch[1]), 'javascript')
  })

  return markdown
}

function validateLiveSandboxBlocks(source) {
  const matches = [...source.matchAll(API_SANDBOX_COMPONENT_PATTERN)]
  if (matches.length === 0) {
    return { liveCount: 0, valid: true }
  }

  if (MALFORMED_API_SANDBOX_TAIL_PATTERN.test(source)) {
    return { liveCount: matches.length, valid: false }
  }

  const valid = matches.every((match) => {
    const component = match[0]
    const profile = getAttribute(component, 'profile')
    const language = getAttribute(component, 'language')
    const code = decodeBase64Url(getAttribute(component, 'encoded-code') || '')

    return Boolean(getProfileById(profile)) && (language === 'javascript' || language === 'typescript') && Boolean(code)
  })

  return { liveCount: matches.length, valid }
}

function renderSandboxComponent(code, profile, title, language = 'javascript') {
  return `<TextmodeApiSandbox profile="${escapeAttribute(profile.id)}" language="${escapeAttribute(language)}" title="${escapeAttribute(title || profile.defaultTitle)}" encoded-code="${encodeBase64Url(code)}" />`
}

function renderCodeFence(code, language = 'javascript') {
  return `\`\`\`${language}
${code.trimEnd()}
\`\`\``
}

function normalizeApiSandboxSpacing(source) {
  return source
    .replace(/\n{3,}(<TextmodeApiSandbox\b)/g, '\n\n$1')
    .replace(/(<TextmodeApiSandbox\b[^\n]*\/>)\n{3,}/g, '$1\n\n')
}

function findSectionEnd(source, start, headingLevel) {
  const headingPattern = /^(#{1,6})\s+/gm
  headingPattern.lastIndex = start

  let heading
  while ((heading = headingPattern.exec(source))) {
    if (heading[1].length <= headingLevel) {
      return heading.index
    }
  }

  return source.length
}

function findActiveSketchFile(files) {
  return files.find((file) => isActiveSketchInfo(file.info))
}

function isActiveSketchInfo(info) {
  return /\b(?:sketch\.js|src\/sketch\.ts|\/src\/sketch\.ts)\b/.test(info) && info.includes('[active]')
}

function getSketchLanguage(info) {
  return /\b(?:src\/sketch\.ts|\/src\/sketch\.ts)\b/.test(info) || /^ts\b/.test(info)
    ? 'typescript'
    : 'javascript'
}

function normalizeFenceLanguage(language) {
  return language === 'typescript' || language === 'ts' ? 'typescript' : 'javascript'
}

function getPageTitle(source) {
  const frontmatterTitle = source.match(/^title:\s*(.+)$/m)?.[1]
  if (frontmatterTitle) return frontmatterTitle.trim()

  return source.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? 'textmode.js API example'
}

function isTargetApiPage(relativePath) {
  return API_MARKDOWN_PATTERN.test(relativePath) && Boolean(getApiSandboxProfile(relativePath))
}

function getApiSandboxProfile(relativePath) {
  return Object.values(API_SANDBOX_PROFILES).find((profile) => (
    relativePath === profile.apiRoot || relativePath.startsWith(`${profile.apiRoot}/`)
  ))
}

function getProfileById(profileId) {
  return Object.values(API_SANDBOX_PROFILES).find((profile) => profile.id === profileId)
}

async function collectApiMarkdownFiles(root) {
  const files = []

  for (const profile of Object.values(API_SANDBOX_PROFILES)) {
    files.push(...await collectMarkdownFiles(path.join(root, profile.apiRoot)))
  }

  return files.sort((a, b) => slash(a).localeCompare(slash(b)))
}

async function collectMarkdownFiles(directory) {
  let entries
  try {
    entries = await fs.readdir(directory, { withFileTypes: true })
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
      return []
    }

    throw error
  }

  const files = []

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      files.push(...await collectMarkdownFiles(fullPath))
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath)
    }
  }

  return files
}

function unwrapSketchCode(code) {
  const trimmed = code.trim()
  if (!trimmed.startsWith(LEGACY_SKETCH_WRAPPER_START) || !trimmed.endsWith(LEGACY_SKETCH_WRAPPER_END)) {
    return code
  }

  return trimmed
    .slice(LEGACY_SKETCH_WRAPPER_START.length, -LEGACY_SKETCH_WRAPPER_END.length)
    .trim()
    .replace(/^void \(async \(\) => \{\n/, '')
    .replace(/\n\}\)\(\)\.catch\(\(error\) => \{\n  setTimeout\(\(\) => \{\n    throw error\n  \}\)\n\}\)$/, '')
}

function getAttribute(source, name) {
  const match = source.match(new RegExp(`\\b${name}="([^"]*)"`))
  return match ? unescapeAttribute(match[1]) : undefined
}

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function unescapeAttribute(value) {
  return String(value)
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&amp;/g, '&')
}

function encodeBase64Url(value) {
  return Buffer.from(value, 'utf8')
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '')
}

function decodeBase64Url(value) {
  try {
    const base64 = value
      .replace(/-/g, '+')
      .replace(/_/g, '/')
      .padEnd(Math.ceil(value.length / 4) * 4, '=')

    return Buffer.from(base64, 'base64').toString('utf8')
  } catch {
    return ''
  }
}

function decodeFiles(encodedFiles) {
  try {
    const decoded = decodeBase64Url(encodedFiles)
    const files = JSON.parse(decoded)

    return Array.isArray(files)
      ? files.filter((file) => typeof file?.info === 'string' && typeof file?.code === 'string')
      : undefined
  } catch {
    return undefined
  }
}

function mergeSkippedReasons(target, source) {
  for (const [reason, count] of source) {
    target.set(reason, (target.get(reason) || 0) + count)
  }
}

function incrementSkippedReason(skippedReasons, reason) {
  if (!reason) return
  skippedReasons.set(reason, (skippedReasons.get(reason) || 0) + 1)
}

function formatSkippedReasons(skippedReasons) {
  const entries = [...skippedReasons.entries()].sort(([a], [b]) => a.localeCompare(b))
  if (entries.length === 0) return ''

  return ` Skipped reasons: ${entries.map(([reason, count]) => `${reason}=${count}`).join(', ')}.`
}

function createTransformResult(markdown, changed, skipped) {
  return {
    changed,
    markdown,
    skipped,
    skippedReasons: new Map(),
  }
}

function slash(value) {
  return value.split(path.sep).join('/')
}
