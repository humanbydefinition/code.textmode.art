<template>
  <div class="star-cta">
    <UiButton
      :href="repoUrl"
      :external="true"
      variant="secondary"
      size="sm"
      class="star-button"
      aria-label="Star on GitHub"
    >
      <span class="star-icon">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
          <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
        </svg>
      </span>
      <span>star</span>
      <span v-if="stars" class="star-count">{{ formattedStars }}</span>
    </UiButton>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { UiButton } from '../ui'
import { useGitHubStars } from '../../composables'

defineOptions({ name: 'StarCta' })

const props = withDefaults(defineProps<{
  user?: string
  repo?: string
}>(), {
  user: 'humanbydefinition',
  repo: 'textmode.js'
})

const repoUrl = computed(() => `https://github.com/${props.user}/${props.repo}`)
const { stars, loading } = useGitHubStars(props.user, props.repo)

const formattedStars = computed(() => {
  if (!stars.value) return ''
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(stars.value)
})
</script>

<style scoped>
.star-cta {
  display: inline-flex;
  align-items: center;
  margin-left: 0.6rem;
  /* Adjust based on surrounding elements */
}

.star-button {
  font-weight: 600;
  gap: 0.5rem;
}

.star-icon {
  display: inline-flex;
  align-items: center;
  color: var(--vp-c-text-2);
}

.star-count {
  margin-left: 0.25rem;
  padding-left: 0.5rem;
  border-left: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
}

.octicon-star {
  fill: currentColor;
}

@media (max-width: 768px) {
  .star-cta {
    display: none;
  }
}

/* Custom compact style override */
.star-button {
  padding: 0 8px !important;
  font-size: 12px !important;
  line-height: 20px !important;
  height: 20px !important;
  gap: 4px !important;
  border-radius: 4px !important;
}
</style>
