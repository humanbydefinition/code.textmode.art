declare module 'markdown-it-container' {
  const plugin: any
  export default plugin
}

declare module '*.data' {
  const data: any
  export { data }
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_GISCUS_REPO?: string
  readonly VITE_GISCUS_REPO_ID?: string
  readonly VITE_GISCUS_CATEGORY?: string
  readonly VITE_GISCUS_CATEGORY_ID?: string
  readonly DEV: boolean
  readonly PROD: boolean
  readonly SSR: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
