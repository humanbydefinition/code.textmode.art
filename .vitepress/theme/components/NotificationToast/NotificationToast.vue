<template>
  <Transition name="toast-fade">
    <div v-if="visible" class="opensource-toast" role="alert" aria-live="polite">
      <div class="opensource-toast__content">
        <div class="opensource-toast__header">
          <span class="opensource-toast__icon">📖</span>
          <h3 class="opensource-toast__title">Docs now open-source</h3>
        </div>
        <p class="opensource-toast__body">
          These docs just went public. We'd love your contributions and feedback.
        </p>
        <div class="opensource-toast__actions">
          <a
            class="opensource-toast__button opensource-toast__button--primary"
            href="https://github.com/humanbydefinition/code.textmode.art"
            target="_blank"
            rel="noopener noreferrer"
            @click="handlePrimaryAction"
          >
            Contribute on GitHub
          </a>
          <button
            class="opensource-toast__button opensource-toast__button--secondary"
            type="button"
            @click="dismiss"
          >
            Not now
          </button>
        </div>
      </div>
      <button
        class="opensource-toast__close"
        type="button"
        aria-label="Dismiss notification"
        @click="dismiss"
      >
        ×
      </button>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const DISMISS_KEY = 'textmodejs_docs_toast_dismissed_at'
const DISMISS_DAYS = 30
const DISMISS_MS = DISMISS_DAYS * 24 * 60 * 60 * 1000
const SHOW_DELAY = 1500 // 1.5 seconds delay before showing

const visible = ref(false)

onMounted(() => {
  // Small delay before checking to avoid collision with page load
  setTimeout(() => {
    try {
      const raw = localStorage.getItem(DISMISS_KEY)
      
      if (!raw) {
        visible.value = true
        return
      }
      
      const dismissedAt = Number(raw)
      
      if (!Number.isFinite(dismissedAt)) {
        // Invalid data, show toast
        visible.value = true
        return
      }
      
      const age = Date.now() - dismissedAt
      
      // Show again if dismiss period has expired
      if (age >= DISMISS_MS) {
        visible.value = true
      }
    } catch {
      // localStorage not available or other error
      // Default to showing the toast
      visible.value = true
    }
  }, SHOW_DELAY)
})

function dismiss() {
  visible.value = false
  
  try {
    localStorage.setItem(DISMISS_KEY, String(Date.now()))
  } catch {
    // Silently fail if localStorage is unavailable
  }
}

function handlePrimaryAction() {
  // Also dismiss when user clicks the GitHub link
  dismiss()
}
</script>

<style scoped>
.opensource-toast {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  max-width: 380px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  z-index: 1200;
  font-family: var(--textmode-font, 'JetBrains Mono', 'Courier New', monospace);
}

.dark .opensource-toast {
  background: var(--vp-c-bg-alt);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
}

.opensource-toast__content {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.opensource-toast__header {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}

.opensource-toast__icon {
  font-size: 1.25rem;
  line-height: 1;
  flex-shrink: 0;
}

.opensource-toast__title {
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  line-height: 1.4;
}

.opensource-toast__body {
  margin: 0;
  font-size: 0.8125rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.opensource-toast__actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.25rem;
}

.opensource-toast__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  font-family: var(--textmode-font, 'JetBrains Mono', 'Courier New', monospace);
  letter-spacing: 0.03em;
  border-radius: 0.375rem;
  border: 1px solid transparent;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.opensource-toast__button--primary {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-white);
}

.opensource-toast__button--primary:hover {
  background: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
}

.opensource-toast__button--secondary {
  background: var(--vp-c-bg);
  border-color: var(--vp-c-divider);
  color: var(--vp-c-text-2);
}

.opensource-toast__button--secondary:hover {
  border-color: var(--vp-c-text-3);
  color: var(--vp-c-text-1);
}

.opensource-toast__close {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 0.25rem;
  font-size: 1.5rem;
  line-height: 1;
  color: var(--vp-c-text-3);
  cursor: pointer;
  transition: all 0.15s ease;
}

.opensource-toast__close:hover {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.opensource-toast__close:active {
  transform: scale(0.95);
}

/* Transitions */
.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.toast-fade-enter-from {
  opacity: 0;
  transform: translateY(1rem);
}

.toast-fade-leave-to {
  opacity: 0;
  transform: translateY(0.5rem);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .opensource-toast {
    bottom: 1rem;
    right: 1rem;
    left: 1rem;
    max-width: none;
    padding: 1rem;
  }

  .opensource-toast__actions {
    flex-direction: column;
  }

  .opensource-toast__button {
    width: 100%;
  }
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .toast-fade-enter-active,
  .toast-fade-leave-active {
    transition: opacity 0.2s ease;
  }

  .toast-fade-enter-from,
  .toast-fade-leave-to {
    transform: none;
  }

  .opensource-toast__button:hover,
  .opensource-toast__button--primary:hover {
    transform: none;
  }
}
</style>
