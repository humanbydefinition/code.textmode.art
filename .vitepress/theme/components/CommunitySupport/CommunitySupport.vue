<template>
  <section class="community-support">
    <!-- Section Header -->
    <div class="community-support__header">
      <h2 class="community-support__title">Community & Support</h2>
      <p class="community-support__subtitle">
        You're not coding alone. Join a vibrant community of creative developers 
        pushing the boundaries of textmode art.
      </p>
    </div>

    <!-- Main Grid -->
    <div class="community-support__grid">
      <!-- Resources Column -->
      <div class="community-support__column">
        <h3 class="community-support__column-title">
          <UiIcon name="ph:book-open-duotone" size="lg" class="community-support__column-icon" />
          Resources
        </h3>
        <ul class="community-support__list">
          <li 
            v-for="(item, index) in resources" 
            :key="item.title"
            class="community-support__item"
            :style="{ '--delay': `${index * 0.1}s` }"
          >
            <a 
              :href="item.link" 
              class="community-support__link"
              :target="item.external ? '_blank' : undefined"
              :rel="item.external ? 'noopener noreferrer' : undefined"
            >
              <span class="community-support__link-icon-wrapper">
                <UiIcon :name="item.icon" size="md" class="community-support__link-icon" />
              </span>
              <span class="community-support__link-content">
                <span class="community-support__link-title">{{ item.title }}</span>
                <span class="community-support__link-desc">{{ item.description }}</span>
              </span>
              <UiIcon 
                name="ph:arrow-right" 
                size="sm" 
                class="community-support__link-arrow" 
              />
            </a>
          </li>
        </ul>
      </div>

      <!-- Connect Column -->
      <div class="community-support__column">
        <h3 class="community-support__column-title">
          <UiIcon name="ph:chats-circle-duotone" size="lg" class="community-support__column-icon" />
          Connect
        </h3>
        <ul class="community-support__list">
          <li 
            v-for="(item, index) in connect" 
            :key="item.title"
            class="community-support__item"
            :style="{ '--delay': `${index * 0.1}s` }"
          >
            <a 
              :href="item.link" 
              class="community-support__link"
              :target="item.external ? '_blank' : undefined"
              :rel="item.external ? 'noopener noreferrer' : undefined"
            >
              <span class="community-support__link-icon-wrapper" :class="`community-support__link-icon-wrapper--${item.color}`">
                <UiIcon :name="item.icon" size="md" class="community-support__link-icon" />
              </span>
              <span class="community-support__link-content">
                <span class="community-support__link-title">{{ item.title }}</span>
                <span class="community-support__link-desc">{{ item.description }}</span>
              </span>
              <UiIcon 
                name="ph:arrow-up-right" 
                size="sm" 
                class="community-support__link-arrow" 
              />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Get Involved Banner -->
    <div class="community-support__banner">
      <div class="community-support__banner-content">
        <UiIcon name="ph:sparkle-duotone" size="xl" class="community-support__banner-icon" />
        <div class="community-support__banner-text">
          <h4 class="community-support__banner-title">Get involved</h4>
          <p class="community-support__banner-desc">
            Your work matters. Sketches shared with <code>#textmodejs</code> inspire the next wave of creators. 
            Bug reports strengthen the foundation. Jump in wherever your passion leads.
          </p>
        </div>
      </div>
      <div class="community-support__banner-actions">
        <a 
          href="https://github.com/humanbydefinition/textmode.js" 
          target="_blank" 
          rel="noopener noreferrer"
          class="community-support__banner-btn community-support__banner-btn--primary"
        >
          <UiIcon name="ph:star-duotone" size="sm" />
          Star on GitHub
        </a>
        <a 
          href="https://discord.gg/sjrw8QXNks" 
          target="_blank" 
          rel="noopener noreferrer"
          class="community-support__banner-btn community-support__banner-btn--secondary"
        >
          <UiIcon name="ic:baseline-discord" size="sm" />
          Join Discord
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { UiIcon } from '../ui'

defineOptions({ name: 'CommunitySupport' })

interface LinkItem {
  title: string
  description: string
  link: string
  icon: string
  external?: boolean
  color?: string
}

const resources: LinkItem[] = [
  {
    title: 'Documentation',
    description: 'Complete guides and tutorials',
    link: '/docs/introduction',
    icon: 'ph:file-text-duotone'
  },
  {
    title: 'API Reference',
    description: 'Full API with examples',
    link: '/api/',
    icon: 'ph:code-duotone'
  },
  {
    title: 'Examples',
    description: 'Interactive demos to remix',
    link: '/docs/examples',
    icon: 'ph:play-circle-duotone'
  }
]

const connect: LinkItem[] = [
  {
    title: 'Discord',
    description: 'Chat with the community',
    link: 'https://discord.gg/sjrw8QXNks',
    icon: 'ic:baseline-discord',
    external: true,
    color: 'discord'
  },
  {
    title: 'GitHub',
    description: 'Issues and feature requests',
    link: 'https://github.com/humanbydefinition/textmode.js/issues',
    icon: 'ph:github-logo-duotone',
    external: true,
    color: 'github'
  }
]
</script>

<style scoped>
.community-support {
  margin: 3rem 0 2rem;
  padding: 0;
}

/* Header */
.community-support__header {
  margin-bottom: 2rem;
}

.community-support__title {
  font-size: 1.65rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 0.75rem;
  line-height: 1.3;
  border-top: none;
  padding-top: 0;
}

.community-support__subtitle {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  max-width: 640px;
  margin: 0;
}

/* Grid Layout */
.community-support__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
}

/* Columns */
.community-support__column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.community-support__column-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 0.25rem;
  padding: 0;
  border: none;
}

.community-support__column-icon {
  color: var(--vp-c-brand-1);
}

/* List */
.community-support__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.community-support__item {
  animation: fadeInUp 0.4s ease-out forwards;
  animation-delay: var(--delay, 0s);
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Links */
.community-support__link {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.875rem 1rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.community-support__link:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateX(4px);
}

.community-support__link:hover .community-support__link-arrow {
  opacity: 1;
  transform: translateX(2px);
}

.community-support__link:hover .community-support__link-icon-wrapper {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-bg);
}

/* Icon Wrapper */
.community-support__link-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.community-support__link-icon-wrapper--discord {
  color: #5865F2;
}

.community-support__link:hover .community-support__link-icon-wrapper--discord {
  background: #5865F2;
  color: white;
}

.community-support__link-icon-wrapper--github {
  color: var(--vp-c-text-1);
}

.community-support__link:hover .community-support__link-icon-wrapper--github {
  background: var(--vp-c-text-1);
  color: var(--vp-c-bg);
}

/* Link Content */
.community-support__link-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  min-width: 0;
}

.community-support__link-title {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  line-height: 1.3;
}

.community-support__link-desc {
  font-size: 0.8125rem;
  color: var(--vp-c-text-2);
  line-height: 1.4;
}

/* Arrow */
.community-support__link-arrow {
  color: var(--vp-c-text-3);
  opacity: 0;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

/* Get Involved Banner */
.community-support__banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--vp-c-brand-soft) 0%, var(--vp-c-bg-soft) 100%);
  border: 1px solid var(--vp-c-brand-dimm);
  border-radius: 12px;
}

.community-support__banner-content {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  flex: 1;
}

.community-support__banner-icon {
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.community-support__banner-text {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.community-support__banner-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
}

.community-support__banner-desc {
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin: 0;
}

.community-support__banner-desc code {
  font-family: var(--textmode-font);
  font-size: 0.8125rem;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
}

/* Banner Actions */
.community-support__banner-actions {
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;
}

.community-support__banner-btn {
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
}

.community-support__banner-btn--primary {
  background: var(--vp-c-brand-1);
  color: white;
  border: 1px solid var(--vp-c-brand-1);
}

.community-support__banner-btn--primary:hover {
  background: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px -2px rgba(var(--vp-c-brand-1-rgb), 0.3);
}

.community-support__banner-btn--secondary {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-border);
}

.community-support__banner-btn--secondary:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  transform: translateY(-1px);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .community-support__grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .community-support__title {
    font-size: 1.5rem;
  }

  .community-support__banner {
    flex-direction: column;
    align-items: stretch;
    gap: 1.25rem;
    padding: 1.25rem;
  }

  .community-support__banner-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .community-support__banner-actions {
    flex-direction: column;
    width: 100%;
  }

  .community-support__banner-btn {
    justify-content: center;
    padding: 0.75rem 1rem;
  }
}

@media (max-width: 480px) {
  .community-support__link {
    padding: 0.75rem;
  }

  .community-support__link-icon-wrapper {
    width: 32px;
    height: 32px;
  }

  .community-support__link-title {
    font-size: 0.875rem;
  }

  .community-support__link-desc {
    font-size: 0.75rem;
  }
}
</style>
