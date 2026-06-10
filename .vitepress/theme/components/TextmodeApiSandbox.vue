<template>
  <TextmodeLiveSandbox v-bind="props" />
</template>

<script setup lang="ts">
import { sandboxProps } from 'vitepress-plugin-sandpack'
import TextmodeLiveSandbox from './TextmodeLiveSandbox.vue'

defineOptions({ name: 'TextmodeApiSandbox' })

const props = defineProps({
  ...sandboxProps,
  template: {
    type: String,
    default: 'static'
  },
  encodedCode: {
    type: String,
    default: ''
  },
  encodedFiles: {
    type: String,
    default: ''
  },
  editorHeight: {
    type: [Number, String],
    default: undefined
  },
  initialView: {
    type: String,
    default: 'preview'
  },
  language: {
    type: String,
    default: 'javascript'
  },
  profile: {
    type: String,
    default: 'textmode.js'
  },
  showHeader: {
    type: [Boolean, String],
    default: true
  },
  title: {
    type: String,
    default: ''
  }
})
</script>
