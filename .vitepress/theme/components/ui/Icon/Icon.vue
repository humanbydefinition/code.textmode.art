<template>
  <Icon
    :icon="name"
    :width="iconSize"
    :height="iconSize"
    :style="iconStyle"
    :aria-label="ariaLabel"
    :aria-hidden="!ariaLabel"
    class="ui-icon"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { IconProps, IconSize } from './types'

defineOptions({ name: 'UiIcon' })

const props = withDefaults(defineProps<IconProps>(), {
  size: 'md'
})

const SIZE_MAP: Record<string, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32
}

const iconSize = computed(() => {
  if (typeof props.size === 'number') return props.size
  return SIZE_MAP[props.size] ?? SIZE_MAP.md
})

const iconStyle = computed(() => {
  if (props.color) {
    return { color: props.color }
  }
  return undefined
})
</script>

<style scoped>
.ui-icon {
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;
}
</style>
