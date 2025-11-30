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