export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number

export interface IconProps {
  /** Iconify icon name (e.g., 'tabler:heart', 'simple-icons:github') */
  name: string
  /** Icon size (preset or pixel value) */
  size?: IconSize
  /** Custom color */
  color?: string
  /** Accessible label */
  ariaLabel?: string
}
