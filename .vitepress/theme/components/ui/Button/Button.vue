<template>
  <component
    :is="componentTag"
    :class="buttonClasses"
    :style="customStyle"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :disabled="disabled"
    :aria-label="ariaLabel"
    :aria-disabled="disabled"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonProps } from './types'

defineOptions({ name: 'UiButton' })

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  external: false,
  block: false,
  disabled: false
})

const componentTag = computed(() => (props.href ? 'a' : 'button'))

const buttonClasses = computed(() => [
  'ui-button',
  `ui-button--${props.variant}`,
  `ui-button--${props.size}`,
  {
    'ui-button--block': props.block,
    'ui-button--disabled': props.disabled
  }
])

const customStyle = computed(() => {
  if (props.variant === 'custom' && props.color) {
    return { '--ui-button-custom-bg': props.color }
  }
  return undefined
})
</script>

<style scoped>
.ui-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  box-sizing: border-box;
}

/* Sizes */
.ui-button--sm {
  padding: 0.5rem 0.875rem;
  font-size: 0.8125rem;
}

.ui-button--md {
  padding: 0.75rem 1.25rem;
  font-size: 0.9375rem;
}

.ui-button--lg {
  padding: 0.875rem 1.5rem;
  font-size: 1rem;
}

/* Variants */
.ui-button--primary {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-white);
}

.ui-button--primary:hover:not(.ui-button--disabled) {
  background: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
  transform: translateY(-1px);
}

.ui-button--secondary {
  background: var(--vp-c-bg);
  border-color: var(--vp-c-divider);
  color: var(--vp-c-text-1);
}

.ui-button--secondary:hover:not(.ui-button--disabled) {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.ui-button--ghost {
  background: transparent;
  border-color: transparent;
  color: var(--vp-c-text-1);
}

.ui-button--ghost:hover:not(.ui-button--disabled) {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-brand-1);
}

.ui-button--custom {
  background: var(--ui-button-custom-bg, var(--vp-c-brand-1));
  border-color: var(--ui-button-custom-bg, var(--vp-c-brand-1));
  color: #fff;
}

.ui-button--custom:hover:not(.ui-button--disabled) {
  filter: brightness(1.1);
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* Ensure white text on hover for custom/primary */
.ui-button--primary:link,
.ui-button--primary:visited,
.ui-button--primary:hover,
.ui-button--primary:active,
.ui-button--custom:link,
.ui-button--custom:visited,
.ui-button--custom:hover,
.ui-button--custom:active {
  color: #fff !important;
}

/* Block */
.ui-button--block {
  width: 100%;
}

/* Disabled */
.ui-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Focus */
.ui-button:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}
</style>
