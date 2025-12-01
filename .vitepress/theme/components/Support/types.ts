export type SupportIconType = 'kofi' | 'github' | 'ethereum' | 'tezos'

export interface SupportCardProps {
  iconType: SupportIconType
  title: string
  description: string
  link: string
  color: string
}
