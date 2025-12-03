export interface CardProps {
  /** Enable hover effects */
  hoverable?: boolean
  /** Add padding to card content */
  padded?: boolean
  /** Custom padding size */
  padding?: 'sm' | 'md' | 'lg'
  /** Border radius size */
  rounded?: 'sm' | 'md' | 'lg'
  /** Remove border */
  borderless?: boolean
  /** Make card clickable (renders as link wrapper) */
  href?: string
  /** Open link in new tab */
  external?: boolean
}
