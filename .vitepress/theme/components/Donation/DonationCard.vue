<template>
  <UiCard rounded="lg" padded padding="lg" hoverable class="donation-card">
    <div class="donation-card__icon" :style="{ backgroundColor: color }" aria-hidden="true">
      <UiIcon :name="iconName" :size="36" color="#fff" />
    </div>

    <div class="donation-card__content">
      <h3 class="donation-card__title">{{ title }}</h3>
      <p class="donation-card__description">{{ description }}</p>

      <UiButton
        variant="custom"
        :color="color"
        :href="link"
        external
        block
        :aria-label="ariaLabel"
        class="donation-card__cta"
      >
        Support
        <UiIcon name="tabler:external-link" size="sm" />
      </UiButton>
    </div>
  </UiCard>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { UiCard, UiButton, UiIcon } from '../ui'
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

<style scoped>
.donation-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.donation-card__content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.donation-card__title {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.donation-card__description {
  margin: 0 0 1.5rem 0;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  flex-grow: 1;
}

.donation-card__cta {
  margin-top: auto;
}

@media (max-width: 768px) {
  .donation-card__icon {
    width: 50px;
    height: 50px;
  }

  .donation-card__title {
    font-size: 1.1rem;
  }
}
</style>
