<template>
  <section class="promo-callout" aria-label="Promoted resource">
    <UiIcon :name="icon" size="xl" class="promo-callout__icon" />
    <div class="promo-callout__body">
      <h3 class="promo-callout__title">{{ title }}</h3>
      <div class="promo-callout__desc"><slot /></div>
    </div>
    <a
      class="promo-callout__cta"
      :href="href"
      :target="ctaTarget"
      rel="noopener noreferrer"
    >
      {{ ctaLabel }}
      <UiIcon name="ph:arrow-up-right" size="sm" class="promo-callout__cta-icon" />
    </a>
  </section>
</template>

<script setup lang="ts">
import type { PromoCalloutProps } from './types'

withDefaults(defineProps<PromoCalloutProps>(), {
  icon: 'ph:play-circle',
  ctaTarget: '_blank',
})
</script>

<style scoped>
.promo-callout {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding: 1.25rem 1.5rem;
  background: linear-gradient(135deg, var(--vp-c-brand-soft) 0%, var(--vp-c-bg-soft) 100%);
  border: 1px solid var(--vp-c-brand-dimm);
  border-radius: 12px;
}

.promo-callout__icon {
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.promo-callout__body {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
  min-width: 0;
}

.promo-callout__title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
  line-height: 1.5;
}

.promo-callout__desc {
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin: 0;
}

.promo-callout__desc :deep(a) {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.promo-callout__desc :deep(a:hover) {
  color: var(--vp-c-brand-2);
}

.promo-callout__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-family: var(--textmode-font);
  font-size: 0.8125rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;
  background: var(--vp-c-brand-1);
  color: white;
  border: 1px solid var(--vp-c-brand-1);
}

.promo-callout__cta:hover {
  background: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px -2px rgba(var(--vp-c-brand-1-rgb), 0.3);
}

.promo-callout__cta-icon {
  transition: transform 0.2s ease;
}

.promo-callout__cta:hover .promo-callout__cta-icon {
  transform: translate(2px, -2px);
}

@media (max-width: 640px) {
  .promo-callout {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (prefers-reduced-motion: reduce) {
  .promo-callout__cta,
  .promo-callout__cta-icon {
    transition: none;
  }

  .promo-callout__cta:hover {
    transform: none;
  }

  .promo-callout__cta:hover .promo-callout__cta-icon {
    transform: none;
  }
}
</style>
