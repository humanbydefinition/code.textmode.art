<template>
  <div class="blog-index">
    <div class="blog-index__controls">
      <input
        v-model="searchQuery"
        type="search"
        class="blog-index__search"
        placeholder="Search posts by title or description"
        aria-label="Search blog posts"
      />

      <div v-if="availableTags.length" class="blog-index__filters">
        <button
          v-for="filterTag in ['all', ...availableTags]"
          :key="filterTag"
          type="button"
          class="blog-index__tag"
          :class="{ 'blog-index__tag--active': filterTag === activeTag }"
          @click="setActiveTag(filterTag)"
        >
          <span v-if="filterTag === 'all'">All posts</span>
          <span v-else>#{{ filterTag }}</span>
        </button>
      </div>
    </div>

    <div v-if="filteredPosts.length" class="blog-index__grid">
      <article v-for="post in filteredPosts" :key="post.url" class="blog-card">
        <a :href="post.url" class="blog-card__link">
          <div v-if="post.cover" class="blog-card__cover">
            <img :src="post.cover" :alt="post.title" loading="lazy" />
          </div>
          <div class="blog-card__content">
            <header class="blog-card__header">
              <time v-if="post.date" class="blog-card__meta" :datetime="post.date">
                {{ formatDate(post.date) }}
              </time>
              <span class="blog-card__meta" v-if="post.readingTime">
                · {{ post.readingTime }} min read
              </span>
            </header>
            <h2 class="blog-card__title">{{ post.title }}</h2>
            <p v-if="post.description" class="blog-card__excerpt">
              {{ post.description }}
            </p>
            <footer class="blog-card__footer">
              <div class="blog-card__author">
                <img 
                  v-if="isGitHubUsername(post.author)"
                  :src="`https://github.com/${post.author}.png`" 
                  :alt="`${post.author}'s avatar`"
                  class="blog-card__avatar"
                  loading="lazy"
                />
                <span>{{ post.author }}</span>
              </div>
              <ul v-if="post.tags?.length" class="blog-card__tags">
                <li v-for="tag in post.tags" :key="tag">#{{ tag }}</li>
              </ul>
            </footer>
          </div>
        </a>
      </article>
    </div>

    <p v-else class="blog-index__empty">
      No posts matched your filters. Try clearing the search or choosing a different tag.
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, shallowRef } from 'vue'
// @ts-ignore - VitePress data loader
import { data as initialData } from '../data/blogPosts.data.ts'
import type { BlogPostEntry } from '../data/blogPosts.data'

type BlogPost = BlogPostEntry

// Use shallowRef initialized with the static import for immediate availability
// This ensures SSR/SSG works correctly and data is available immediately
const postsData = shallowRef<BlogPost[]>((initialData || []) as BlogPost[])

// HMR support: reload data when the module updates
// @ts-ignore - Vite HMR API
if (import.meta.hot) {
  // @ts-ignore - Vite HMR API
  import.meta.hot.accept('../data/blogPosts.data.ts', (newModule: any) => {
    if (newModule?.data) {
      console.log('Blog posts data updated via HMR')
      postsData.value = newModule.data as BlogPost[]
    }
  })
}

const allPosts = computed<BlogPost[]>(() => postsData.value)
const searchQuery = ref('')
const activeTag = ref<'all' | string>('all')

const availableTags = computed(() => {
  const tagSet = new Set<string>()
  for (const post of allPosts.value) {
    for (const tag of post.tags ?? []) {
      if (tag.trim()) tagSet.add(tag.trim())
    }
  }
  return Array.from(tagSet.values()).sort((a, b) => a.localeCompare(b))
})

const normalizedPosts = computed(() => {
  if (!searchQuery.value && activeTag.value === 'all') return allPosts.value

  const query = searchQuery.value.trim().toLowerCase()
  return allPosts.value.filter((post) => {
    const matchesQuery = query
      ? [post.title, post.description].some((value) =>
          value.toLowerCase().includes(query)
        )
      : true

    const matchesTag = activeTag.value === 'all'
      ? true
      : post.tags?.some((tag) => tag.toLowerCase() === activeTag.value.toLowerCase())

    return matchesQuery && matchesTag
  })
})

const filteredPosts = computed(() => normalizedPosts.value)

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})

function setActiveTag(tag: string) {
  activeTag.value = tag as typeof activeTag.value
}

function formatDate(date: string) {
  const parsed = Date.parse(date)
  if (Number.isNaN(parsed)) return date
  return dateFormatter.format(new Date(parsed))
}

function isGitHubUsername(author: string): boolean {
  // Check if it's a valid GitHub username (alphanumeric, hyphens, no spaces)
  // and not team names like "textmode.js Team"
  return /^[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(author) && !author.includes(' ')
}
</script>
