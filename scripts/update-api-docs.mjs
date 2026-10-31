#!/usr/bin/env node
import { execFileSync } from 'node:child_process'
import { promises as fs } from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseArgs } from 'node:util'
import { transformApiSandpackExamples } from './api-sandpack-examples.mjs'
import { API_SANDBOX_PROFILE_ID_SET } from './lib/api-sandbox-profiles.mjs'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const { values } = parseArgs({
  options: {
    source: { type: 'string', multiple: true },
    'baseline-ref': { type: 'string' },
    'docs-cli': { type: 'string' },
  },
})
if (!values.source?.length) throw new Error('Pass at least one --source <generated-api-directory>.')
const sources = values.source.map((source) => ({ source: path.resolve(source), name: path.basename(path.resolve(source)) }))
if (new Set(sources.map(({ name }) => name)).size !== sources.length || sources.some(({ name }) => !API_SANDBOX_PROFILE_ID_SET.has(name))) {
  throw new Error('Each source must have a unique, recognized API package directory name.')
}
const cli = path.resolve(values['docs-cli'] ?? path.join(root, 'node_modules/.bin/textmode-docs'))
const temp = await fs.mkdtemp(path.join(os.tmpdir(), 'textmode-site-api-'))
try {
  const staged = path.join(temp, 'staged')
  const baseline = path.join(temp, 'baseline')
  await fs.mkdir(path.join(staged, 'api'), { recursive: true })
  await fs.mkdir(path.join(baseline, 'api'), { recursive: true })
  for (const { source, name } of sources) {
    const previous = path.join(baseline, 'api', name)
    if (values['baseline-ref']) {
      const archive = execFileSync('git', ['archive', values['baseline-ref'], `api/${name}`], { cwd: root, maxBuffer: 100 * 1024 * 1024 })
      execFileSync('tar', ['-xf', '-', '-C', baseline], { input: archive })
    } else {
      await fs.cp(path.join(root, 'api', name), previous, { recursive: true })
    }
    await fs.cp(source, path.join(staged, 'api', name), { recursive: true })
  }
  const sandpack = await transformApiSandpackExamples({ root: staged })
  if (sandpack.invalid.length) throw new Error(`Invalid Sandpack examples: ${sandpack.invalid.join(', ')}`)
  for (const { name } of sources) {
    execFileSync(process.execPath, [cli, 'dates', 'reconcile', '--baseline', path.join(baseline, 'api', name), '--target', path.join(staged, 'api', name)], { stdio: 'inherit' })
  }
  for (const { name } of sources) {
    const destination = path.join(root, 'api', name)
    await fs.rm(destination, { recursive: true, force: true })
    await fs.cp(path.join(staged, 'api', name), destination, { recursive: true })
  }
  console.log(`Updated ${sources.map(({ name }) => name).join(', ')}; converted ${sandpack.transformed} pages.`)
} finally {
  await fs.rm(temp, { recursive: true, force: true })
}
