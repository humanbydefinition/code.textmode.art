import DefaultTheme from 'vitepress/theme'
import type { Theme, EnhanceAppContext } from 'vitepress'
import { defineComponent, h } from 'vue'
import { useData } from 'vitepress'

import BlogPostLayout from './layouts/BlogPostLayout.vue'
import BlogPostList from './components/BlogPostList.vue'
import BlogHome from './components/BlogHome.vue'

import './styles/blog.css'

export interface PlogOptions {
  /**
   * Frontmatter flag that marks a page as a blog post.
   * @default 'blogPost'
   */
  blogFrontmatterKey?: string
}

export type { BlogPostEntry } from './data/blogPosts.data'
export { BlogPostList, BlogPostLayout, BlogHome }

export function withPlogTheme(baseTheme: Theme = DefaultTheme, options: PlogOptions = {}): Theme {
  const blogFlagKey = options.blogFrontmatterKey ?? 'blogPost'
  const BaseLayout = baseTheme.Layout ?? DefaultTheme.Layout

  const BlogAwareLayout = defineComponent({
    name: 'PlogBlogAwareLayout',
    setup(_, { slots }) {
      const { frontmatter } = useData()

      return () => {
        if (frontmatter.value?.[blogFlagKey] === true) {
          return h(BlogPostLayout)
        }

        return h(BaseLayout, null, slots)
      }
    },
  })

  return {
    extends: baseTheme,
    Layout: BlogAwareLayout,
    enhanceApp(ctx: EnhanceAppContext) {
      const { app } = ctx

      app.component('BlogPostList', BlogPostList)
      app.component('BlogHome', BlogHome)
    },
  }
}
