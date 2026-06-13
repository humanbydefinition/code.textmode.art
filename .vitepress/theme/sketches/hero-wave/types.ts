export interface SketchInstance {
  tm: any
  resize?: (width: number, height: number) => void
  destroy?: () => void
}

export interface HeroWaveOptions {
  /**
   * "hero" shows the logo + tagline overlay, "background" only renders the waves.
   */
  mode?: 'hero' | 'background'
}
