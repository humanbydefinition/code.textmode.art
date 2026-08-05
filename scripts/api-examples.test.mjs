import assert from 'node:assert/strict'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

import {
  API_SANDBOX_COMPONENT_PATTERN,
  decodeBase64Url,
  encodeBase64Url,
  escapeAttribute,
  extractApiSandboxComponents,
  getAttribute,
  unescapeAttribute,
} from './lib/api-sandbox-attributes.mjs'
import { scanApiExamples } from './lib/api-examples-scan.mjs'

const FIXTURE_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'fixtures', 'api-sandpack')

test('encodeBase64Url / decodeBase64Url round-trip', () => {
  const code = 'const t = textmode.create({});\nt.draw(() => {});'
  const encoded = encodeBase64Url(code)
  assert.ok(!encoded.includes('+') && !encoded.includes('/') && !encoded.includes('='))
  assert.equal(decodeBase64Url(encoded), code)
})

test('decodeBase64Url tolerates malformed input', () => {
  assert.equal(decodeBase64Url('%%% not-base64 %%%'), '')
})

test('escapeAttribute / unescapeAttribute round-trip', () => {
  const raw = 'a "quote" & <tag> \'single\''
  assert.equal(unescapeAttribute(escapeAttribute(raw)), raw)
})

test('getAttribute reads component attributes', () => {
  const component = '<TextmodeApiSandbox profile="textmode.js" language="typescript" title="Foo" encoded-code="abc-123" />'
  assert.equal(getAttribute(component, 'profile'), 'textmode.js')
  assert.equal(getAttribute(component, 'language'), 'typescript')
  assert.equal(getAttribute(component, 'title'), 'Foo')
  assert.equal(getAttribute(component, 'encoded-code'), 'abc-123')
  assert.equal(getAttribute(component, 'missing'), undefined)
})

test('API_SANDBOX_COMPONENT_PATTERN matches both sandbox components', () => {
  const source = '<TextmodeApiSandbox a="1" /> <TextmodeLiveSandbox b="2" /> <OtherThing />'
  const matches = [...source.matchAll(API_SANDBOX_COMPONENT_PATTERN)]
  assert.equal(matches.length, 2)
})

test('extractApiSandboxComponents collects and indexes instances', () => {
  const source = [
    '<TextmodeApiSandbox profile="textmode.js" encoded-code="AAA" />',
    '***',
    '<TextmodeLiveSandbox profile="textmode.synth.js" encoded-code="BBB" />',
  ].join('\n')
  const components = extractApiSandboxComponents(source)
  assert.equal(components.length, 2)
  assert.equal(components[0].index, 0)
  assert.equal(components[1].index, 1)
  assert.equal(components[0].profile, 'textmode.js')
  assert.equal(components[1].profile, 'textmode.synth.js')
  assert.equal(components[0].start, source.indexOf('<TextmodeApiSandbox'))
})

test('scanApiExamples returns only runnable, valid instances', () => {
  const entries = scanApiExamples(FIXTURE_ROOT)
  assert.equal(entries.length, 3, 'expected 3 runnable instances across fixtures')
})

test('scanApiExamples produces stable ids and ordering', () => {
  const entries = scanApiExamples(FIXTURE_ROOT)
  const ids = entries.map((entry) => entry.id)
  assert.ok(new Set(ids).size === ids.length, 'ids must be unique')

  const first = entries[0]
  assert.equal(first.profile, 'textmode.js')
  assert.equal(first.language, 'javascript')
  assert.ok(first.encodedCode.length > 0)
  assert.ok(first.apiPath.startsWith('api/textmode.js/'))
  assert.equal(first.pageUrl, `/${first.apiPath.replace(/\.md$/, '')}`)
  assert.ok(first.slug.length > 0)

  const sorted = [...entries].sort((a, b) => a.apiPath.localeCompare(b.apiPath) || a.ordinal - b.ordinal)
  assert.deepEqual(entries, sorted, 'catalog must be deterministically sorted')
})

test('scanApiExamples disambiguates multi-sandbox pages with headings', () => {
  const entries = scanApiExamples(FIXTURE_ROOT)
  const shape = entries.filter((entry) => entry.apiPath.includes('ShapeAssemblyMode.md'))
  assert.equal(shape.length, 2)
  assert.deepEqual(
    shape.map((entry) => entry.title),
    ['ShapeAssemblyMode — LINE_LOOP', 'ShapeAssemblyMode — LINE_STRIP'],
  )
  assert.equal(shape[0].heading, 'LINE_LOOP')
  assert.deepEqual(shape[0].tags, ['textmode.js', 'Enum', 'Textmodifier', 'LINE_LOOP'])
})

test('scanApiExamples keeps single-sandbox titles without redundant headings', () => {
  const entries = scanApiExamples(FIXTURE_ROOT)
  const cls = entries.find((entry) => entry.apiPath === 'api/textmode.js/classes/textmode.md')
  assert.ok(cls, 'class page should have an entry')
  assert.equal(cls.title, 'textmode')
  assert.equal(cls.heading, undefined)
  assert.equal(cls.kind, 'Class')
  assert.equal(cls.owner, undefined)
})

test('scanApiExamples copies frontmatter metadata', () => {
  const entries = scanApiExamples(FIXTURE_ROOT)
  const cls = entries.find((entry) => entry.apiPath === 'api/textmode.js/classes/textmode.md')
  assert.equal(cls.description, 'The main textmode class.')
  assert.equal(cls.kind, 'Class')
  assert.equal(cls.ecosystem, 'textmode.js')
  assert.equal(cls.lastModified, '2026-08-01')
})

test('scanApiExamples skips pages without runnable sandboxes', () => {
  const entries = scanApiExamples(FIXTURE_ROOT)
  assert.ok(!entries.some((entry) => entry.apiPath.includes('SomeInterface.md')))
  assert.ok(!entries.some((entry) => entry.apiPath.includes('BadExample.md')))
  assert.ok(!entries.some((entry) => entry.apiPath.includes('textmode.export.js')))
})

test('scanApiExamples returns empty for a missing api directory', () => {
  assert.deepEqual(scanApiExamples(path.join(FIXTURE_ROOT, 'does-not-exist')), [])
})
