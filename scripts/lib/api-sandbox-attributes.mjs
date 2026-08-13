/**
 * Shared helpers for reading `<TextmodeApiSandbox … />` / `<TextmodeLiveSandbox … />`
 * component attributes that are embedded inline in generated API markdown.
 *
 * Both the API sandpack transformation script (scripts/api-sandpack-examples.mjs)
 * and the build-time catalog loader (.vitepress/data/apiExamples.data.ts) must
 * parse these attributes identically. Keeping the logic here gives that pairing
 * a single home.
 */

/** Matches a self-closing Textmode live-sandbox component instance. */
export const API_SANDBOX_COMPONENT_PATTERN = /<Textmode(?:Api|Live)Sandbox\b[^>]*\/>/g

/** Sandbox profiles that carry an `encoded-code` payload in the API docs. */
export const API_SANDBOX_PROFILES = {
  'api/textmode.js': { id: 'textmode.js' },
  'api/textmode.synth.js': { id: 'textmode.synth.js' },
  'api/textmode.filters.js': { id: 'textmode.filters.js' },
  'api/textmode.figlet.js': { id: 'textmode.figlet.js' },
  'api/textmode.export.js': { id: 'textmode.export.js' },
  'api/textmode.overlay.js': { id: 'textmode.overlay.js' },
}

export function getAttribute(source, name) {
  const match = source.match(new RegExp(`\\b${name}="([^"]*)"`))
  return match ? unescapeAttribute(match[1]) : undefined
}

export function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function unescapeAttribute(value) {
  return String(value)
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&amp;/g, '&')
}

export function encodeBase64Url(value) {
  return Buffer.from(value, 'utf8')
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '')
}

const BASE64URL_PATTERN = /^[A-Za-z0-9_-]*$/

export function decodeBase64Url(value) {
  try {
    if (typeof value !== 'string' || value.length === 0 || !BASE64URL_PATTERN.test(value)) {
      return ''
    }

    const base64 = value
      .replace(/-/g, '+')
      .replace(/_/g, '/')
      .padEnd(Math.ceil(value.length / 4) * 4, '=')

    const decoded = Buffer.from(base64, 'base64')
    if (decoded.toString('base64').replace(/=+$/g, '') !== value.replace(/-/g, '+').replace(/_/g, '/')) {
      return ''
    }

    return decoded.toString('utf8')
  } catch {
    return ''
  }
}

/**
 * Extract every live-sandbox component instance from a markdown source and
 * parse it into a normalized `{ component, profile, language, title, encodedCode, index }`.
 * The `index` is the 0-based position among all sandboxes on the page.
 */
export function extractApiSandboxComponents(source) {
  const matches = [...source.matchAll(API_SANDBOX_COMPONENT_PATTERN)]
  const components = []

  for (const match of matches) {
    const component = match[0]
    const profile = getAttribute(component, 'profile')
    const language = getAttribute(component, 'language')
    const title = getAttribute(component, 'title')
    const encodedCode = getAttribute(component, 'encoded-code')

    components.push({
      component,
      profile,
      language,
      title,
      encodedCode,
      index: components.length,
      start: match.index ?? 0,
    })
  }

  return components
}
