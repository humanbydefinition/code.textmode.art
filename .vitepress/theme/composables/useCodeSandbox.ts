import { nextTick, onMounted, watch } from 'vue'
import { useData, useRoute } from 'vitepress'
import { compressToBase64 } from 'lz-string'

const CODE_SANDBOX_ENDPOINT = 'https://codesandbox.io/api/v1/sandboxes/define'
const CODE_SANDBOX_LANGUAGES = new Set(['javascript', 'typescript'])

const SANDBOX_INDEX_HTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>textmode.js | sketch</title>
    <style>
      * { box-sizing: border-box; }
      body { margin: 0; background: #050608; color: #fff; font-family: 'JetBrains Mono', monospace; }
      canvas { display: block; }
    </style>
  </head>
  <body>
    <script src="https://unpkg.com/textmode.js@latest/dist/textmode.umd.js"></script>
    <script src="./sketch.js"></script>
  </body>
</html>
`

/**
 * Automatically adds "Open in CodeSandbox" buttons to JavaScript/TypeScript code blocks.
 */
export function useCodeSandbox() {
  const route = useRoute()
  const { page } = useData()

  if (typeof window === 'undefined') return

  const queueEnhancement = () => {
    nextTick(() => enhanceCodeBlocks())
  }

  onMounted(queueEnhancement)
  watch(() => route.path, queueEnhancement)
  watch(() => page.value.relativePath, queueEnhancement)
}

function enhanceCodeBlocks(): boolean {
  if (typeof window === 'undefined') return false

  const doc = document.querySelector<HTMLElement>('.vp-doc')
  if (!doc) return false

  const codeBlocks = Array.from(doc.querySelectorAll<HTMLElement>('div[class*="language-"]'))
  let added = 0

  for (const block of codeBlocks) {
    if (block.dataset.codesandboxReady === 'true') continue

    const language = getCodeBlockLanguage(block)
    if (!language || !CODE_SANDBOX_LANGUAGES.has(language)) continue

    const copyButton = block.querySelector<HTMLButtonElement>('button.copy')
    const codeElement = block.querySelector<HTMLElement>('code')
    if (!copyButton || !codeElement) continue

    const codeText = codeElement.textContent ?? ''
    if (!codeText.trim()) continue

    const openButton = createCodeSandboxButton(codeText)
    if (!openButton) continue

    const parent = copyButton.parentElement ?? block
    parent.insertBefore(openButton, copyButton)

    block.dataset.codesandboxReady = 'true'
    added += 1
  }

  return added > 0
}

function getCodeBlockLanguage(block: HTMLElement): string | null {
  const dataLang = (block.getAttribute('data-ext') || block.getAttribute('data-lang'))?.toLowerCase()
  if (dataLang) return dataLang

  const className = Array.from(block.classList).find(cls => cls.startsWith('language-'))
  if (!className) return null
  return className.replace('language-', '').toLowerCase()
}

function createCodeSandboxButton(rawCode: string): HTMLAnchorElement | null {
  const sketchCode = sanitizeSketchCode(rawCode)
  if (!sketchCode) return null

  const sandboxUrl = buildCodeSandboxUrl(sketchCode)
  const button = document.createElement('a')
  button.className = 'code-open-btn'
  button.title = 'Open in CodeSandbox'
  button.setAttribute('aria-label', 'Open in CodeSandbox')
  button.textContent = 'Open in CodeSandbox'
  button.href = sandboxUrl
  button.target = '_blank'
  button.rel = 'noopener noreferrer'
  button.addEventListener('click', (event) => {
    event.stopPropagation()
  })

  return button
}

function sanitizeSketchCode(raw: string): string {
  if (!raw) return ''
  return raw.replace(/^\s*\n/, '').replace(/\s+$/, '\n')
}

function buildCodeSandboxUrl(sketchCode: string): string {
  const parameters = buildCodeSandboxParameters(sketchCode)
  const query = 'file=sketch.js'
  return `${CODE_SANDBOX_ENDPOINT}?parameters=${parameters}&query=${encodeURIComponent(query)}`
}

function buildCodeSandboxParameters(sketchCode: string): string {
  const payload = {
    template: 'static',
    files: {
      'index.html': { content: SANDBOX_INDEX_HTML },
      'sketch.js': { content: sketchCode }
    }
  }

  return encodeSandboxPayload(payload)
}

function encodeSandboxPayload(payload: Record<string, unknown>): string {
  const json = JSON.stringify(payload)
  return compressToBase64(json)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}
