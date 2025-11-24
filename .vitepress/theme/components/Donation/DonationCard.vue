<template>
  <article class="donation-card">
    <div class="icon-container" :style="{ backgroundColor: color }" aria-hidden="true">
      <Icon :icon="iconName" width="36" height="36" />
    </div>

    <div class="content">
      <h3 class="title">{{ title }}</h3>
      <p class="description">{{ description }}</p>

      <a
        class="link-button"
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
        :style="{ backgroundColor: color }"
        :aria-label="ariaLabel"
      >
        Support
        <Icon icon="tabler:external-link" width="16" height="16" class="external-icon" />
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { Icon } from '@iconify/vue'
import type { DonationCardProps, DonationIconType } from './types'

const ICON_MAP: Record<DonationIconType, string> = {
  kofi: 'simple-icons:kofi',
  github: 'tabler:brand-github',
  ethereum: 'cryptocurrency:eth',
  tezos: 'cryptocurrency:xtz'
}

defineOptions({ name: 'DonationCard' })

const props = defineProps<DonationCardProps>()
const { title, description, link, color } = toRefs(props)

const iconName = computed(() => ICON_MAP[props.iconType])
const ariaLabel = computed(() => `Support via ${title.value}`)
</script>

<style scoped src="./DonationCard.css"></style>
