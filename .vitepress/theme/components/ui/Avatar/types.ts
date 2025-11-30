export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface AvatarProps {
  /** Image source URL */
  src?: string
  /** Alt text for image */
  alt?: string
  /** Fallback text (initials) when no image */
  fallback?: string
  /** Avatar size */
  size?: AvatarSize
  /** Make avatar circular */
  rounded?: boolean
}
