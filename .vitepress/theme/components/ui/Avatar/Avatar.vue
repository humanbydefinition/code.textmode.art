<template>
  <span :class="avatarClasses">
    <img
      v-if="src && !imageError"
      :src="src"
      :alt="alt"
      class="ui-avatar__image"
      loading="lazy"
      @error="handleImageError"
    />
    <span v-else class="ui-avatar__fallback">
      {{ fallbackText }}
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { AvatarProps } from './types'

defineOptions({ name: 'UiAvatar' })

const props = withDefaults(defineProps<AvatarProps>(), {
  alt: '',
  size: 'md',
  rounded: true
})

const imageError = ref(false)

const avatarClasses = computed(() => [
  'ui-avatar',
  `ui-avatar--${props.size}`,
  {
    'ui-avatar--rounded': props.rounded
  }
])

const fallbackText = computed(() => {
  if (props.fallback) return props.fallback.slice(0, 2).toUpperCase()
  if (props.alt) return props.alt.slice(0, 2).toUpperCase()
  return '?'
})

function handleImageError() {
  imageError.value = true
}
</script>

<style scoped>
.ui-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  flex-shrink: 0;
}

/* Sizes */
.ui-avatar--xs {
  width: 20px;
  height: 20px;
  font-size: 0.625rem;
}

.ui-avatar--sm {
  width: 24px;
  height: 24px;
  font-size: 0.6875rem;
}

.ui-avatar--md {
  width: 32px;
  height: 32px;
  font-size: 0.75rem;
}

.ui-avatar--lg {
  width: 40px;
  height: 40px;
  font-size: 0.875rem;
}

.ui-avatar--xl {
  width: 56px;
  height: 56px;
  font-size: 1rem;
}

/* Rounded */
.ui-avatar--rounded {
  border-radius: 50%;
}

.ui-avatar:not(.ui-avatar--rounded) {
  border-radius: 0.375rem;
}

.ui-avatar__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ui-avatar__fallback {
  font-weight: 600;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  user-select: none;
}
</style>
