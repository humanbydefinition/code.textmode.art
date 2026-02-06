<template>
  <div class="star-cta" aria-label="GitHub stars">
    <a
      class="github-button"
      href="https://github.com/humanbydefinition/textmode.js"
      data-icon="octicon-star"
      data-show-count="true"
      data-color-scheme="dark"
      aria-label="Star humanbydefinition/textmode.js on GitHub"
    >
      Star
    </a>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

defineOptions({ name: 'StarCta' })

declare global {
  interface Window {
    GitHubButton?: {
      render: () => void
    }
  }
}

const SCRIPT_SRC = 'https://buttons.github.io/buttons.js'

const loadGitHubButtons = () => new Promise<void>((resolve) => {
  if (typeof window === 'undefined') {
    resolve()
    return
  }

  if (window.GitHubButton) {
    resolve()
    return
  }

  const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`)
  if (existing) {
    existing.addEventListener('load', () => resolve(), { once: true })
    existing.addEventListener('error', () => resolve(), { once: true })
    return
  }

  const script = document.createElement('script')
  script.src = SCRIPT_SRC
  script.async = true
  script.defer = true
  script.addEventListener('load', () => resolve(), { once: true })
  script.addEventListener('error', () => resolve(), { once: true })
  document.head.appendChild(script)
})

onMounted(async () => {
  await loadGitHubButtons()
  window.GitHubButton?.render()
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
