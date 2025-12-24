<template>
  <Teleport v-if="showFooter && isMounted" to=".content-container">
    <footer class="doc-footer">
      <div class="doc-footer__content">
        <p v-if="footer?.message" class="doc-footer__message" v-html="footer.message"></p>
        <p v-if="footer?.copyright" class="doc-footer__copyright" v-html="footer.copyright"></p>
      </div>
    </footer>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch, nextTick } from 'vue'
import { useData, useRoute } from 'vitepress'

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
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
}

.doc-footer__content {
  text-align: center;
}

.doc-footer__message,
.doc-footer__copyright {
  margin: 0;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.doc-footer__message {
  margin-bottom: 8px;
}

.doc-footer :deep(a) {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: color 0.25s;
}

.doc-footer :deep(a:hover) {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
  text-underline-offset: 2px;
}
</style>
