<script setup lang="ts">
import { computed } from 'vue'

interface ContributorLink {
  icon: string
  link: string
}

interface Contributor {
  avatar: string
  name: string
  desc: string
  links?: ContributorLink[]
}

const props = defineProps<{
  contributor: Contributor
}>()

// All Contributors emoji key mapping
const emojiMap: Record<string, { name: string; description: string }> = {
  '💻': { name: 'Code', description: 'Core library code, features, and bug fixes' },
  '📖': { name: 'Documentation', description: 'Documentation pages, API docs, and guides' },
  '🐛': { name: 'Bug Reports', description: 'Identifying and reporting bugs' },
  '💡': { name: 'Examples', description: 'Code examples and demos' },
  '🎨': { name: 'Design', description: 'Visual design, branding, and UI/UX' },
  '🤔': { name: 'Ideas & Planning', description: 'Feature ideas and project planning' },
  '👀': { name: 'Reviews', description: 'Reviewing pull requests and code' },
  '⚠️': { name: 'Tests', description: 'Writing and maintaining tests' },
  '🔧': { name: 'Tools', description: 'Development tools and utilities' },
  '🌍': { name: 'Translation', description: 'Translating documentation' },
  '📢': { name: 'Talks', description: 'Presentations and promoting the project' },
  '💬': { name: 'Answering Questions', description: 'Helping users in issues and discussions' },
  '🚇': { name: 'Infrastructure', description: 'Build tools, CI/CD, and hosting' },
  '🚧': { name: 'Maintenance', description: 'Project maintenance and organization' },
  '🎮': { name: 'Games & Interactive', description: 'Creating games or interactive experiences' },
  '🎞️': { name: 'Video Tutorials', description: 'Creating video content and tutorials' },
  '🖼️': { name: 'Artwork', description: 'ASCII art, textmode graphics, and creative work' },
  '🔤': { name: 'Fonts', description: 'Contributing or creating fonts for use with the library' },
  '🎛️': { name: 'Shaders', description: 'Writing custom GLSL shaders and filters' },
  '🔌': { name: 'Plugin/Utilities', description: 'Creating plugins or utility libraries' },
}

// Parse emojis from the description string
const contributions = computed(() => {
  const desc = props.contributor.desc || ''
  const emojis: { emoji: string; name: string; description: string }[] = []
  
  // Match emojis (including compound emojis with variation selectors)
  const emojiRegex = /(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)/gu
  const matches = desc.match(emojiRegex) || []
  
  for (const emoji of matches) {
    const info = emojiMap[emoji]
    if (info) {
      emojis.push({ emoji, ...info })
    } else {
      // Fallback for unmapped emojis
      emojis.push({ emoji, name: 'Contribution', description: 'Community contribution' })
    }
  }
  
  return emojis
})

// Social icon SVG paths
const iconPaths: Record<string, string> = {
  github: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  twitter: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  instagram: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  mastodon: 'M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 00.023-.043v-1.809a.052.052 0 00-.02-.041.053.053 0 00-.046-.01 20.282 20.282 0 01-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 01-.319-1.433.053.053 0 01.066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.668 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z',
  discord: 'M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z',
}

function getIconPath(icon: string): string {
  return iconPaths[icon] || ''
}
</script>

<template>
  <div class="contributor-card">
    <a 
      :href="contributor.links?.find(l => l.icon === 'github')?.link || '#'" 
      target="_blank" 
      rel="noopener noreferrer"
      class="avatar-link"
    >
      <img 
        :src="contributor.avatar" 
        :alt="`${contributor.name}'s avatar`"
        class="avatar"
        loading="lazy"
      />
    </a>
    
    <div class="info">
      <a 
        :href="contributor.links?.find(l => l.icon === 'github')?.link || '#'" 
        target="_blank" 
        rel="noopener noreferrer"
        class="name"
      >
        {{ contributor.name }}
      </a>
      
      <div class="contributions">
        <span 
          v-for="(contribution, index) in contributions" 
          :key="index"
          class="contribution-emoji"
          :title="`${contribution.name}: ${contribution.description}`"
        >
          <span class="emoji">{{ contribution.emoji }}</span>
          <span class="tooltip">
            <strong>{{ contribution.name }}</strong>
            <span class="tooltip-desc">{{ contribution.description }}</span>
          </span>
        </span>
      </div>
      
      <div v-if="contributor.links?.length" class="social-links">
        <a
          v-for="link in contributor.links"
          :key="link.link"
          :href="link.link"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          :aria-label="link.icon"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            class="social-icon"
          >
            <path :d="getIconPath(link.icon)" fill="currentColor" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contributor-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.contributor-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.avatar-link {
  display: block;
  border-radius: 50%;
  overflow: hidden;
  transition: transform 0.2s ease;
}

.avatar-link:hover {
  transform: scale(1.05);
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid var(--vp-c-divider);
  transition: border-color 0.2s ease;
}

.contributor-card:hover .avatar {
  border-color: var(--vp-c-brand-1);
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  text-align: center;
}

.name {
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.2s ease;
}

.name:hover {
  color: var(--vp-c-brand-1);
}

.contributions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.25rem;
  margin-top: 0.75rem;
  max-width: 200px;
}

.contribution-emoji {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
}

.emoji {
  font-size: 1.125rem;
  padding: 0.25rem;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.contribution-emoji:hover .emoji {
  background: var(--vp-c-brand-soft);
  transform: scale(1.2);
}

.tooltip {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  padding: 0.625rem 0.875rem;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  z-index: 100;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: var(--vp-c-bg-elv);
}

.tooltip::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 7px solid transparent;
  border-top-color: var(--vp-c-divider);
}

.contribution-emoji:hover .tooltip {
  opacity: 1;
  visibility: visible;
}

.tooltip strong {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.tooltip-desc {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
}

.social-links {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.875rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 50%;
  transition: all 0.2s ease;
}

.social-link:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}

.social-icon {
  width: 16px;
  height: 16px;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .contributor-card {
    padding: 1.25rem;
  }

  .avatar {
    width: 64px;
    height: 64px;
  }

  .name {
    font-size: 0.9375rem;
  }

  .emoji {
    font-size: 1rem;
  }

  .tooltip {
    font-size: 0.75rem;
  }
}
</style>
