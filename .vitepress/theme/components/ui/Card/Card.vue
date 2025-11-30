<template>
  <component
    :is="componentTag"
    :class="cardClasses"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <div v-if="$slots.media" class="ui-card__media">
      <slot name="media" />
    </div>
    <div v-if="$slots.default" :class="bodyClasses">
      <slot />
    </div>
    <div v-if="$slots.footer" class="ui-card__footer">
      <slot name="footer" />
    </div>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CardProps } from './types'

defineOptions({ name: 'UiCard' })

defineSlots<{
  default?: () => any
  media?: () => any
  footer?: () => any
}>()

const props = withDefaults(defineProps<CardProps>(), {
  hoverable: false,
  padded: true,
  padding: 'md',
  rounded: 'md',
  borderless: false,
  external: false
})

const componentTag = computed(() => (props.href ? 'a' : 'article'))

const cardClasses = computed(() => [
  'ui-card',
  `ui-card--rounded-${props.rounded}`,
  {
    'ui-card--hoverable': props.hoverable,
    'ui-card--borderless': props.borderless,
    'ui-card--link': !!props.href
  }
])

const bodyClasses = computed(() => [
  'ui-card__body',
  {
    [`ui-card__body--padded-${props.padding}`]: props.padded
  }
])
</script>

<style scoped>
.ui-card {
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  overflow: hidden;
  height: 100%;
  transition: all 0.2s ease;
}

/* Rounded variants */
.ui-card--rounded-sm {
  border-radius: 0.375rem;
}

.ui-card--rounded-md {
  border-radius: 0.5rem;
}

.ui-card--rounded-lg {
  border-radius: 0.75rem;
}

/* Hoverable */
.ui-card--hoverable:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 8px 24px -8px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

/* Borderless */
.ui-card--borderless {
  border-color: transparent;
}

/* Link variant */
.ui-card--link {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.ui-card--link:hover,
.ui-card--link:focus,
.ui-card--link:active {
  text-decoration: none;
}

/* Media slot */
.ui-card__media {
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.ui-card__media :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.ui-card--hoverable:hover .ui-card__media :deep(img) {
  transform: scale(1.05);
}

/* Body with padding variants */
.ui-card__body {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.ui-card__body--padded-sm {
  padding: 1rem;
}

.ui-card__body--padded-md {
  padding: 1.5rem;
}

.ui-card__body--padded-lg {
  padding: 2rem;
}

/* Footer */
.ui-card__footer {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}

/* When footer is inside body, inherit body padding */
.ui-card__body .ui-card__footer {
  margin-left: -1.5rem;
  margin-right: -1.5rem;
  margin-bottom: -1.5rem;
  padding: 1rem 1.5rem;
}

/* Dark mode */
.dark .ui-card {
  background: var(--vp-c-bg-alt);
}

.dark .ui-card--hoverable:hover {
  box-shadow: 0 8px 24px -8px rgba(0, 0, 0, 0.4);
}
</style>
