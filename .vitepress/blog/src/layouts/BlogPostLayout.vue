<template>
  <Layout>
    <template #doc-before>
      <article class="blog-post">
        <header class="blog-post__meta">
          <p class="blog-post__breadcrumbs">
            <a href="/blog/">Blog</a>
            <span aria-hidden="true"> / </span>
            <span>{{ frontmatter.title }}</span>
          </p>

          <h1 class="blog-post__title">{{ frontmatter.title }}</h1>

          <p v-if="frontmatter.description" class="blog-post__description">
            {{ frontmatter.description }}
          </p>

          <div class="blog-post__details">
            <div v-if="frontmatter.author" class="blog-post__author">
              <img 
                v-if="isGitHubUsername(frontmatter.author as string)"
                :src="`https://github.com/${frontmatter.author}.png`" 
                :alt="`${frontmatter.author}'s avatar`"
                class="blog-post__avatar"
                loading="lazy"
              />
              <span>{{ frontmatter.author }}</span>
            </div>
            <span v-if="formattedDate" class="blog-post__detail" :datetime="frontmatter.date">
              {{ formattedDate }}
            </span>
            <span v-if="currentPost?.readingTime" class="blog-post__detail">
              · {{ currentPost.readingTime }} min read
            </span>
          </div>

          <ul v-if="frontmatter.tags?.length" class="blog-post__tags">
            <li v-for="tag in frontmatter.tags" :key="tag">#{{ tag }}</li>
          </ul>

          <figure v-if="frontmatter.cover" class="blog-post__cover">
            <img :src="frontmatter.cover" :alt="frontmatter.title" loading="lazy" />
          </figure>
        </header>
      </article>
    </template>

    <template #doc-after>
      <footer class="blog-post__footer">
        <div v-if="prevPost || nextPost" class="blog-post__pagination">
          <a v-if="prevPost" :href="prevPost.url" class="blog-post__pagination-link prev">
            <span class="pagination-label">← Newer</span>
            <span class="pagination-title">{{ prevPost.title }}</span>
          </a>
          <span class="blog-post__pagination-spacer" aria-hidden="true"></span>
          <a v-if="nextPost" :href="nextPost.url" class="blog-post__pagination-link next">
            <span class="pagination-label">Older →</span>
            <span class="pagination-title">{{ nextPost.title }}</span>
          </a>
        </div>
      </footer>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
// @ts-ignore - VitePress data loader
import { data as initialData } from '../data/blogPosts.data.ts'
import type { BlogPostEntry } from '../data/blogPosts.data.ts'

const Layout = DefaultTheme.Layout

type BlogPostMeta = BlogPostEntry

const { frontmatter, page } = useData()

// Use shallowRef initialized with the static import for immediate availability
// This ensures SSR/SSG works correctly and data is available immediately
const postsData = shallowRef<BlogPostMeta[]>((initialData || []) as BlogPostMeta[])

// HMR support: reload data when the module updates
// @ts-ignore - Vite HMR API
if (import.meta.hot) {
  // @ts-ignore - Vite HMR API
  import.meta.hot.accept('../data/blogPosts.data.ts', (newModule: any) => {
    if (newModule?.data) {
      console.log('Blog posts data updated via HMR in layout')
      postsData.value = newModule.data as BlogPostMeta[]
    }
  })
}

const posts = computed(() => postsData.value)

const currentSlug = computed(() => {
  const fm = frontmatter.value as Record<string, unknown>
  if (typeof fm.slug === 'string' && fm.slug.trim()) {
    return fm.slug.trim()
  }

  if (typeof fm.permalink === 'string' && fm.permalink.trim()) {
    return fm.permalink.replace(/\/$/, '').split('/').pop() ?? ''
  }

  const relativePath = page.value.relativePath ?? ''
  return relativePath.replace(/index\.md$/i, '').split('/').pop()?.replace(/\.md$/i, '') ?? ''
})

const currentIndex = computed(() => posts.value.findIndex((post) => post.slug === currentSlug.value))

const currentPost = computed(() => (currentIndex.value >= 0 ? posts.value[currentIndex.value] : null))

const prevPost = computed(() => (currentIndex.value > 0 ? posts.value[currentIndex.value - 1] : null))
const nextPost = computed(() => (currentIndex.value >= 0 && currentIndex.value < posts.value.length - 1 ? posts.value[currentIndex.value + 1] : null))

const formattedDate = computed(() => {
  const date = frontmatter.value.date
  if (!date) return ''
  const parsed = Date.parse(date as string)
  if (Number.isNaN(parsed)) return ''
  return new Intl.DateTimeFormat(undefined, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(parsed))
})

function isGitHubUsername(author: string): boolean {
  // Check if it's a valid GitHub username (alphanumeric, hyphens, no spaces)
  // and not team names like "textmode.js Team"
  return /^[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(author) && !author.includes(' ')
}
</script>
