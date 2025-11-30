<template>
  <section class="donation-grid">
    <template v-if="hasOptions">
      <div
        v-for="(option, index) in gridOptions"
        :key="option.title ?? option.link ?? index"
        class="grid-item"
      >
        <DonationCard v-bind="option" />
      </div>
    </template>
    <p v-else class="donation-grid__empty">
      No donation options are available at the moment.
    </p>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import DonationCard from './DonationCard.vue'
import donationOptions from './options'
import type { DonationCardProps } from './types'

defineOptions({ name: 'DonationGrid' })

const props = defineProps<{ options?: DonationCardProps[] }>()

const gridOptions = computed(() => props.options ?? donationOptions)
const hasOptions = computed(() => gridOptions.value.length > 0)
</script>

<style scoped src="./DonationGrid.css"></style>
