// Gallery types
export type GalleryItemType = 
  | 'website' 
  | 'music-video' 
  | 'installation' 
  | 'game' 
  | 'experiment' 
  | 'integration'
  | 'other'

export interface GalleryItem {
  id: string
  title: string
  description: string
  type: GalleryItemType
  thumbnailUrl: string | null
  url: string
  author: string
  authorUrl?: string | null
  tags?: string[]
  featured?: boolean
  date?: string | null
}

export interface GalleryGridProps {
  items?: GalleryItem[]
  showFilters?: boolean
  initialFilter?: GalleryItemType | 'all'
}
