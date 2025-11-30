import type { DefaultTheme } from 'vitepress'
import typedocSidebar from '../../api/typedoc-sidebar.json'

export const sidebar: DefaultTheme.Sidebar = [
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
      { text: 'Examples', link: '/docs/examples' },
      { text: 'Contributing', link: '/docs/contributing' },
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
