export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'custom'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  /** Visual style variant */
  variant?: ButtonVariant
  /** Button size */
  size?: ButtonSize
  /** Custom background color (used with variant="custom") */
  color?: string
  /** Render as a link */
  href?: string
  /** Open link in new tab */
  external?: boolean
  /** Full width button */
  block?: boolean
  /** Disabled state */
  disabled?: boolean
  /** Accessible label */
  ariaLabel?: string
}
