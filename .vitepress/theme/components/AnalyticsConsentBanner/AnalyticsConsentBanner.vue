<template>
  <Transition name="analytics-consent">
    <section
      v-if="visible"
      class="analytics-consent"
      role="region"
      aria-live="polite"
      aria-labelledby="analytics-consent-title"
      aria-describedby="analytics-consent-description"
    >
      <div class="analytics-consent__content">
        <h2 id="analytics-consent-title" class="analytics-consent__title">
          Analytics preferences
        </h2>
        <p id="analytics-consent-description" class="analytics-consent__body">
          We use Google Analytics to improve code.textmode.art. Analytics only run if you allow it.
        </p>
        <a
          class="analytics-consent__link"
          href="https://legal.textmode.art/projects/code.textmode.art/en/privacy"
          target="_blank"
          rel="noreferrer noopener"
        >
          Data protection policy
        </a>
      </div>
      <div class="analytics-consent__actions" aria-label="Analytics consent choices">
        <button
          class="analytics-consent__button analytics-consent__button--secondary"
          type="button"
          @click="rejectAnalytics"
        >
          Reject analytics
        </button>
        <button
          class="analytics-consent__button analytics-consent__button--primary"
          type="button"
          @click="allowAnalytics"
        >
          Allow analytics
        </button>
      </div>
    </section>
  </Transition>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

defineOptions({ name: 'AnalyticsConsentBanner' })

type ConsentDecision = 'accepted' | 'rejected'

const CONSENT_STORAGE_KEY = 'code.textmode.art:analytics-consent:v2'
const LEGACY_CONSENT_STORAGE_KEY = 'textmodejs_analytics_consent_v1'
const GA_MEASUREMENT_ID = 'G-FYNSMPCNJ3'

const visible = ref(false)
const fallbackDecision = ref<ConsentDecision | null>(null)

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)

  const decision = readConsentDecision()

  if (decision === 'accepted') {
    loadGoogleAnalyticsAfterConsent()
    return
  }

  if (decision === 'rejected') {
    revokeGoogleAnalytics()
    return
  }

  visible.value = true
})

onUnmounted(() => {
  document.removeEventListener('click', handleDocumentClick)
})

function handleDocumentClick(event: MouseEvent) {
  const target = event.target

  if (!(target instanceof Element)) {
    return
  }

  if (target.closest('[data-analytics-consent-open]')) {
    visible.value = true
  }
}

function allowAnalytics() {
  writeConsentDecision('accepted')
  loadGoogleAnalyticsAfterConsent()
  visible.value = false
}

function rejectAnalytics() {
  writeConsentDecision('rejected')
  revokeGoogleAnalytics()
  visible.value = false
}

function readConsentDecision(): ConsentDecision | null {
  removeLegacyConsent()
  const stored = readLocalStorage(CONSENT_STORAGE_KEY)

  if (!stored) {
    return fallbackDecision.value
  }

  try {
    const record = JSON.parse(stored) as {
      decision?: ConsentDecision
      version?: number
      decidedAt?: string
    }
    return record.version === 2 &&
      (record.decision === 'accepted' || record.decision === 'rejected') &&
      typeof record.decidedAt === 'string'
      ? record.decision
      : null
  } catch {
    return null
  }
}

function writeConsentDecision(decision: ConsentDecision) {
  fallbackDecision.value = decision
  writeLocalStorage(CONSENT_STORAGE_KEY, JSON.stringify({
    decision,
    version: 2,
    decidedAt: new Date().toISOString()
  }))
}

function loadGoogleAnalyticsAfterConsent() {
  if (typeof window === 'undefined' || readConsentDecision() !== 'accepted') {
    return
  }

  const analyticsWindow = window as Window & Record<string, any>
  if (analyticsWindow.__codeTextmodeGoogleAnalyticsInitialized) return

  analyticsWindow.__codeTextmodeGoogleAnalyticsInitialized = true
  delete analyticsWindow[`ga-disable-${GA_MEASUREMENT_ID}`]
  analyticsWindow.dataLayer = analyticsWindow.dataLayer || []
  analyticsWindow.gtag = analyticsWindow.gtag || function (...args: unknown[]) {
    analyticsWindow.dataLayer.push(args)
  }
  analyticsWindow.gtag('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  })
  analyticsWindow.gtag('js', new Date())
  analyticsWindow.gtag('config', GA_MEASUREMENT_ID)

  if (document.querySelector(`script[data-google-analytics-id="${GA_MEASUREMENT_ID}"]`)) return

  const tag = document.createElement('script')
  tag.async = true
  tag.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  tag.dataset.googleAnalyticsId = GA_MEASUREMENT_ID
  document.head.append(tag)
}

function revokeGoogleAnalytics() {
  if (typeof window === 'undefined') return

  ;(window as any)[`ga-disable-${GA_MEASUREMENT_ID}`] = true
  for (const name of ['_ga', `_ga_${GA_MEASUREMENT_ID.replace(/^G-/, '')}`]) {
    document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`
  }
}

function readLocalStorage(key: string): string | null {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

function writeLocalStorage(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    // The in-memory fallback still preserves the current session choice.
  }
}

function removeLegacyConsent() {
  try {
    window.localStorage.removeItem(LEGACY_CONSENT_STORAGE_KEY)
  } catch {
    // Storage may be unavailable; ignoring v1 data remains safe.
  }
}
</script>

<style scoped>
.analytics-consent {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 1200;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  width: min(392px, calc(100vw - 2rem));
  padding: 1rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.18);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.dark .analytics-consent {
  background: #09090b;
  border-color: #27272a;
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.45);
}

.analytics-consent__content {
  min-width: 0;
}

.analytics-consent__title,
.analytics-consent__body {
  margin: 0;
}

.analytics-consent__title {
  color: var(--vp-c-text-1);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.45;
}

.analytics-consent__body {
  margin-top: 0.25rem;
  color: var(--vp-c-text-2);
  font-size: 0.8125rem;
  line-height: 1.5;
}

.analytics-consent__link {
  display: inline-flex;
  margin-top: 0.5rem;
  color: var(--vp-c-text-2);
  font-size: 0.8125rem;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.analytics-consent__link:hover,
.analytics-consent__link:focus {
  color: var(--vp-c-text-1);
}

.analytics-consent__actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
}

.analytics-consent__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.25rem;
  padding: 0 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;
}

.analytics-consent__button--primary {
  color: var(--vp-c-bg);
  background: var(--vp-c-text-1);
  border-color: var(--vp-c-text-1);
}

.analytics-consent__button--secondary {
  color: var(--vp-c-text-1);
  background: transparent;
}

.analytics-consent__button--primary:hover,
.analytics-consent__button--primary:focus-visible {
  background: var(--vp-c-text-2);
  border-color: var(--vp-c-text-2);
}

.analytics-consent__button--secondary:hover,
.analytics-consent__button--secondary:focus-visible {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider);
  color: var(--vp-c-text-1);
}

.analytics-consent__button:focus-visible,
.analytics-consent__link:focus-visible,
:global(.textmode-privacy-settings-trigger:focus-visible) {
  outline: 2px solid var(--vp-c-text-1);
  outline-offset: 2px;
}

.analytics-consent-enter-active,
.analytics-consent-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.analytics-consent-enter-from,
.analytics-consent-leave-to {
  opacity: 0;
  transform: translateY(0.75rem);
}

:global(.textmode-privacy-settings-trigger) {
  display: inline;
  padding: 0;
  color: var(--vp-c-text-2);
  background: transparent;
  border: 0;
  font: inherit;
  line-height: inherit;
  cursor: pointer;
}

:global(.textmode-privacy-settings-trigger:hover) {
  color: var(--vp-c-text-1);
  text-decoration: underline;
  text-underline-offset: 2px;
}

@media (max-width: 768px) {
  .analytics-consent {
    right: 0.75rem;
    bottom: 0.75rem;
    left: 0.75rem;
    width: auto;
  }

  .analytics-consent__actions {
    display: grid;
    grid-template-columns: 1fr;
  }

  .analytics-consent__button {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .analytics-consent-enter-active,
  .analytics-consent-leave-active,
  .analytics-consent__button {
    transition: none;
  }

  .analytics-consent-enter-from,
  .analytics-consent-leave-to {
    transform: none;
  }
}
</style>
