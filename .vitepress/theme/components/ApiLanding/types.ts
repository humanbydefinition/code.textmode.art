export interface ApiHeroAction {
  label: string
  href: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'custom'
}

export interface ApiLibrary {
  name: string
  kicker: string
  badge: string
  description: string
  highlights: string[]
  cta: string
  secondary: string
  githubUser: string
  githubRepo: string
}

export interface ApiQuickLink {
  title: string
  description: string
  metaLabel: string
  metaSource: string
  href: string
}
