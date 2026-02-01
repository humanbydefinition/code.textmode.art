import type { DefaultTheme } from 'vitepress'
import typedocSidebar from '../../api/typedoc-sidebar.json'
import { defineBlogConfig } from 'vitepress-plugin-blog/config'

export const blog = defineBlogConfig({
  sidebar: {
    recentPostsCount: 5,
  }
})

const docsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Docs',
    items: [
      { text: 'Introduction', link: '/docs/introduction' },
      { text: 'Installation', link: '/docs/installation' },
      { text: 'Fundamentals', link: '/docs/fundamentals' },
      { text: 'Event handling', link: '/docs/events' },
      { text: 'Fonts', link: '/docs/fonts' },
      { text: 'Images and videos', link: '/docs/loadables' },
      { text: 'Advanced features', link: '/docs/advanced' },
      { text: 'Framework integration', link: '/docs/framework-integration' },
      { text: 'Exporting', link: '/docs/exporting' },
      { text: 'Live coding', link: '/docs/live-coding' },
      { text: 'Examples', link: '/docs/examples' },
      {
        text: 'Contributing',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/docs/contributing' },
          { text: 'Getting started', link: '/docs/contributing/getting-started' },
          { text: 'Suggest a font', link: '/docs/contributing/suggest-a-font' },
          { text: 'Submit a sketch', link: '/docs/contributing/submit-a-sketch' },
          { text: 'Improve docs', link: '/docs/contributing/improve-docs' },
        ]
      },
      { text: 'Contributors', link: '/docs/contributors' },
    ]
  },
  {
    text: 'API',
    items: [
      { text: 'Index', link: '/api/' },
      ...typedocSidebar
    ],
  },
]

export const sidebar: DefaultTheme.Sidebar = {
  '/docs/': docsSidebar,
  '/api/': docsSidebar,
  '/blog/': blog.sidebar,
}