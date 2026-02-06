<template>
  <div class="star-cta" :aria-label="ariaLabel">
    <a
      class="github-button"
      :href="repoUrl"
      data-icon="octicon-star"
      data-show-count="true"
      data-color-scheme="dark"
      :aria-label="buttonLabel"
    >
      Star
    </a>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

defineOptions({ name: 'StarCta' })

const props = withDefaults(defineProps<{
  user?: string
  repo?: string
}>(), {
  user: 'humanbydefinition',
  repo: 'textmode.js'
})

const repoUrl = `https://github.com/${props.user}/${props.repo}`
const buttonLabel = `Star ${props.user}/${props.repo} on GitHub`
const ariaLabel = `GitHub stars for ${props.user}/${props.repo}`

declare global {
  interface Window {
    githubbuttons?: {
      render: () => void
    }
    GitHubButtons?: {
      render: () => void
    }
    GitHubButton?: {
      render: () => void
    }
  }
}

const SCRIPT_SRC = 'https://buttons.github.io/buttons.js'
const SCRIPT_SELECTOR = 'script[data-github-buttons]'
let scriptLoadingPromise: Promise<void> | null = null

const ensureScriptLoaded = () => {
  if (typeof window === 'undefined') {
    return Promise.resolve()
  }

  const existing = document.querySelector<HTMLScriptElement>(SCRIPT_SELECTOR)
  if (existing?.dataset.loaded === 'true') {
    return Promise.resolve()
  }

  if (scriptLoadingPromise) {
    return scriptLoadingPromise
  }

  scriptLoadingPromise = new Promise<void>((resolve) => {
    if (existing) {
      existing.addEventListener('load', () => {
        existing.dataset.loaded = 'true'
        scriptLoadingPromise = null
        resolve()
      }, { once: true })
      existing.addEventListener('error', () => {
        scriptLoadingPromise = null
        resolve()
      }, { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.async = true
    script.defer = true
    script.dataset.githubButtons = 'true'
    script.addEventListener('load', () => {
      script.dataset.loaded = 'true'
      scriptLoadingPromise = null
      resolve()
    }, { once: true })
    script.addEventListener('error', () => {
      scriptLoadingPromise = null
      resolve()
    }, { once: true })
    document.head.appendChild(script)
  })

  return scriptLoadingPromise
}

const refreshByReinjection = () => new Promise<void>((resolve) => {
  const script = document.createElement('script')
  script.src = SCRIPT_SRC
  script.async = true
  script.defer = true
  script.addEventListener('load', () => {
    script.remove()
    resolve()
  }, { once: true })
  script.addEventListener('error', () => {
    script.remove()
    resolve()
  }, { once: true })
  document.head.appendChild(script)
})

const renderButtons = async () => {
  await ensureScriptLoaded()

  const renderer =
    window.githubbuttons?.render ??
    window.GitHubButtons?.render ??
    window.GitHubButton?.render

  if (renderer) {
    try {
      renderer()
      return
    } catch {
      // Fallback for mismatched global API signatures.
    }
  }

  await refreshByReinjection()
}

const route = useRoute()

onMounted(async () => {
  await renderButtons()
})

watch(() => route.path, async () => {
  await nextTick()
  await renderButtons()
})
</script>

<style scoped>
.star-cta {
  display: inline-flex;
  align-items: center;
  margin-left: 0.6rem;
  transform: translateY(1px);
}

.star-cta :deep(.github-button) {
  display: inline-flex;
}

@media (max-width: 768px) {
  .star-cta {
    display: none;
  }
}
</style>
