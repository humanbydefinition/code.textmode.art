<template>
  <Teleport v-if="showFooter && isMounted" to=".content-container">
    <div class="doc-footer">
      <SiteFooter />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch, nextTick } from 'vue'
import { useData, useRoute } from 'vitepress'
import SiteFooter from '../SiteFooter/SiteFooter.vue'

defineOptions({ name: 'DocFooter' })

const { theme, frontmatter } = useData()
const route = useRoute()

const footer = computed(() => theme.value.footer)
const isMounted = ref(false)

const showFooter = computed(() => {
  // Show footer if theme has footer config and frontmatter doesn't disable it
  return footer.value && frontmatter.value.footer !== false
})

// Ensure the footer is always at the very end of .content-container
const ensureFooterAtEnd = () => {
  nextTick(() => {
    // Small delay to ensure comments section has been appended first
    setTimeout(() => {
      const container = document.querySelector('.content-container')
      const footer = container?.querySelector('.doc-footer')
      if (container && footer && footer !== container.lastElementChild) {
        container.appendChild(footer)
      }
    }, 100)
  })
}

onMounted(() => {
  // Wait for content-container to be available
  nextTick(() => {
    isMounted.value = true
    ensureFooterAtEnd()
  })
})

// Re-position footer when route changes (SPA navigation)
watch(() => route.path, () => {
  nextTick(() => {
    isMounted.value = false
    nextTick(() => {
      isMounted.value = true
      ensureFooterAtEnd()
    })
  })
})
</script>

<style scoped>
.doc-footer {
  margin-top: 2.5rem;
}
</style>
