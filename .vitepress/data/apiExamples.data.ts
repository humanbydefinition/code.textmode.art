import { scanApiExamples } from '../../scripts/lib/api-examples-scan.mjs'

// Keep this public TypeScript union aligned with scripts/lib/api-sandbox-profiles.mjs.
export type ApiProfile =
  | 'textmode.js'
  | 'textmode.synth.js'
  | 'textmode.filters.js'
  | 'textmode.figlet.js'
  | 'textmode.export.js'
  | 'textmode.overlay.js'

export interface ApiExampleSketch {
  id: string
  slug: string
  profile: ApiProfile
  language: 'javascript' | 'typescript'
  encodedCode: string
  apiPath: string
  pageUrl: string
  heading?: string
  ordinal: number
  title: string
  description?: string
  kind?: string
  owner?: string
  ecosystem?: string
  category?: string
  lastModified?: string
  tags: string[]
}

declare const data: ApiExampleSketch[]
export { data }

/**
 * Build-time catalog of every runnable API example sketch embedded across the
 * generated API reference (the api directory). Each entry is one live sandbox
 * instance, ready to be passed straight to <TextmodeLiveSandbox />.
 *
 * The API markdown is the single source of truth; this loader only *reads* it,
 * so regenerating API docs automatically updates the Examples page catalog.
 */
export default {
  watch: ['api/**/*.md'],
  load(): ApiExampleSketch[] {
    try {
      return scanApiExamples() as ApiExampleSketch[]
    } catch (error) {
      console.warn('[apiExamples] Failed to build the API example catalog:', error)
      return []
    }
  },
}
