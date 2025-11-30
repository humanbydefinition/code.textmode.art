<template>
  <span :class="badgeClasses">
    <span v-if="prefix" class="ui-badge__prefix">{{ prefix }}</span>
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { BadgeProps } from './types'

defineOptions({ name: 'UiBadge' })

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: 'default',
  size: 'sm',
  pill: false
})

const badgeClasses = computed(() => [
  'ui-badge',
  `ui-badge--${props.variant}`,
  `ui-badge--${props.size}`,
  {
    'ui-badge--pill': props.pill
  }
])
</script>

<style scoped>
.ui-badge {
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  white-space: nowrap;
  border: 1px solid var(--vp-c-divider);
  line-height: 1;
}

/* Sizes */
.ui-badge--sm {
  padding: 0.25rem 0.625rem;
  font-size: 0.75rem;
  border-radius: 0.25rem;
}

.ui-badge--md {
  padding: 0.375rem 0.75rem;
  font-size: 0.8125rem;
  border-radius: 0.375rem;
}

/* Pill */
.ui-badge--pill {
  border-radius: 9999px;
}

/* Variants */
.ui-badge--default {
  background: rgba(255, 255, 255, 0.05);
  color: var(--vp-c-text-3);
}

.ui-badge--primary {
  background: var(--vp-c-brand-soft, rgba(0, 170, 255, 0.12));
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.ui-badge--success {
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.4);
  color: rgb(16, 185, 129);
}

.ui-badge--warning {
  background: rgba(245, 158, 11, 0.1);
  border-color: rgba(245, 158, 11, 0.4);
  color: rgb(245, 158, 11);
}

.ui-badge--danger {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.4);
  color: rgb(239, 68, 68);
}

.ui-badge--subtle {
  background: transparent;
  border-color: transparent;
  color: var(--vp-c-text-3);
}

.ui-badge__prefix {
  margin-right: 0.125rem;
}

/* Hover states for interactive badges */
.ui-badge[role="button"],
button.ui-badge {
  cursor: pointer;
  transition: all 0.2s ease;
}

.ui-badge[role="button"]:hover,
button.ui-badge:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: rgba(0, 170, 255, 0.05);
}

.ui-badge[role="button"]:focus-visible,
button.ui-badge:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 1px;
}
</style>
