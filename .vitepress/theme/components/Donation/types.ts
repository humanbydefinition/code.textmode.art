export type DonationIconType = 'kofi' | 'github' | 'ethereum' | 'tezos'

export interface DonationCardProps {
  iconType: DonationIconType
  title: string
  description: string
  link: string
  color: string
}
