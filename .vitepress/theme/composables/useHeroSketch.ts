/**
 * Initialize the interactive hero sketch on the home page.
 */
export async function initHeroSketch(): Promise<void> {
  if (typeof window === 'undefined') return

  const canvas = document.querySelector('.textmode-hero-canvas') as HTMLCanvasElement
  const container = document.querySelector('.textmode-hero-container') as HTMLElement

  if (!canvas || !container) {
    console.warn('TextmodeHero: Canvas or container not found')
    return
  }

  try {
    const width = container.clientWidth || 800
    const height = container.clientHeight || 400

    const { createHeroWaveSketch } = await import('../sketches/hero-wave/')

    if (!createHeroWaveSketch) {
      console.error('TextmodeHero: createHeroWaveSketch function not found in module')
      return
    }

    canvas.width = width
    canvas.height = height

    createHeroWaveSketch(canvas, width, height)
  } catch (error) {
    console.error('TextmodeHero: Failed to initialize sketch', error)
  }
}

/**
 * Set up hero sketch initialization on route changes.
 */
export function setupHeroSketchRouter(router: { onAfterRouteChanged?: (to: string) => void }) {
  if (typeof window === 'undefined') return

  router.onAfterRouteChanged = (to: string) => {
    if (to === '/' || to === '/index.html') {
      setTimeout(() => initHeroSketch(), 100)
    }
  }
}
