import assert from 'node:assert/strict'
import { after, before, test } from 'node:test'
import { createServer } from 'vite'

let contributors
let findContributorByName
let viteServer

before(async () => {
  viteServer = await createServer({
    appType: 'custom',
    logLevel: 'error',
    root: process.cwd(),
    server: { middlewareMode: true, watch: null, ws: false },
  })

  const contributorsModule = await viteServer.ssrLoadModule(
    '/.vitepress/theme/composables/contributors.ts',
  )

  contributors = contributorsModule.contributors
  findContributorByName = contributorsModule.findContributorByName
})

after(async () => {
  await viteServer?.close()
})

test('finds a contributor by login', () => {
  const contributor = contributors[0]

  assert.ok(contributor)
  assert.strictEqual(findContributorByName(contributor.login), contributor)
})

test('finds a contributor by display name', () => {
  const contributor = contributors[0]

  assert.ok(contributor)
  assert.strictEqual(findContributorByName(contributor.name), contributor)
})

test('returns null when no contributor matches', () => {
  assert.strictEqual(findContributorByName('missing-contributor'), null)
})
