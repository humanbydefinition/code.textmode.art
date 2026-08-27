/**
 * The canonical profile catalog for runnable API sandboxes.
 *
 * Keep every add-on's identifier, generated API root, and display default
 * together so the transformer and Examples catalog cannot drift apart.
 */
export const API_SANDBOX_PROFILES = Object.freeze([
  Object.freeze({
    id: 'textmode.js',
    apiRoot: 'api/textmode.js',
    defaultTitle: 'textmode.js API example',
  }),
  Object.freeze({
    id: 'textmode.synth.js',
    apiRoot: 'api/textmode.synth.js',
    defaultTitle: 'textmode.synth.js API example',
  }),
  Object.freeze({
    id: 'textmode.filters.js',
    apiRoot: 'api/textmode.filters.js',
    defaultTitle: 'textmode.filters.js API example',
  }),
  Object.freeze({
    id: 'textmode.figlet.js',
    apiRoot: 'api/textmode.figlet.js',
    defaultTitle: 'textmode.figlet.js API example',
  }),
  Object.freeze({
    id: 'textmode.export.js',
    apiRoot: 'api/textmode.export.js',
    defaultTitle: 'textmode.export.js API example',
  }),
  Object.freeze({
    id: 'textmode.overlay.js',
    apiRoot: 'api/textmode.overlay.js',
    defaultTitle: 'textmode.overlay.js API example',
  }),
])

export const API_SANDBOX_PROFILE_IDS = Object.freeze(API_SANDBOX_PROFILES.map(({ id }) => id))
export const API_SANDBOX_PROFILE_ID_SET = new Set(API_SANDBOX_PROFILE_IDS)

const API_SANDBOX_PROFILES_BY_ID = new Map(
  API_SANDBOX_PROFILES.map((profile, index) => [profile.id, { profile, index }]),
)

export function getApiSandboxProfileForPath(relativePath) {
  return API_SANDBOX_PROFILES.find((profile) => (
    relativePath === profile.apiRoot || relativePath.startsWith(`${profile.apiRoot}/`)
  ))
}

export function getApiSandboxProfileById(profileId) {
  return API_SANDBOX_PROFILES_BY_ID.get(profileId)?.profile
}

export function getApiSandboxProfileIndex(profileId) {
  return API_SANDBOX_PROFILES_BY_ID.get(profileId)?.index
}
