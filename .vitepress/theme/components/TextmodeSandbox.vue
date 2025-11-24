<template>
  <div class="textmode-sandbox-wrapper">
    <Sandbox v-bind="sandboxPropsPlain">
      <slot />
    </Sandbox>

    <div v-if="metadata" class="textmode-sketch-overlay">
      <div class="textmode-sketch-title">{{ metadata.title }}</div>
      <div class="textmode-sketch-author">
        <template v-if="metadata.authorUrl">
          by
          <a
            class="textmode-sketch-author-link"
            :href="metadata.authorUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ metadata.author }}
          </a>
        </template>
        <template v-else>
          by {{ metadata.author }}
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Sandbox, sandboxProps } from 'vitepress-plugin-sandpack'
import sketchMetadata from '../data/sketches.json'

type SketchMetadataMap = typeof sketchMetadata

defineOptions({ name: 'TextmodeSandbox' })

const props = defineProps({
  ...sandboxProps,
  sketchId: {
    type: String,
    default: ''
  }
})

const metadata = computed(() => {
  if (!props.sketchId) {
    return null
  }
  const key = props.sketchId as keyof SketchMetadataMap
  return sketchMetadata[key] ?? null
})

const sandboxPropsPlain = computed(() => {
  const { sketchId, ...rest } = props as Record<string, unknown> & { sketchId?: string }
  return rest
})
</script>
