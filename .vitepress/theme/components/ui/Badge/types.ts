export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'subtle'
export type BadgeSize = 'sm' | 'md'

export interface BadgeProps {
  /** Visual variant */
  variant?: BadgeVariant
  /** Badge size */
  size?: BadgeSize
  /** Show as pill (fully rounded) */
  pill?: boolean
  /** Prefix character (e.g., '#' for tags) */
  prefix?: string
}
