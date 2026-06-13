// @ts-nocheck - textmode.js is loaded from the published browser ESM build.
import { textmode } from 'https://cdn.jsdelivr.net/npm/textmode.js@0.6.1/dist/textmode.esm.js'

import { HERO_FONT_SOURCE, SUBHEADER_TEXT } from './constants'
import { renderBrandingOverlay } from './brandingRenderer'
import { renderWaveField } from './waveRenderer'
import { wrapText } from './text'
import type { HeroWaveOptions, SketchInstance } from './types'

export type { HeroWaveOptions, SketchInstance }

export function createHeroWaveSketch(
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
  options: HeroWaveOptions = {}
): SketchInstance {
  if (!textmode) {
    throw new Error('textmode.js library not loaded')
  }

  const displayMode = options.mode ?? 'hero'
  const showBranding = displayMode === 'hero'

  const initialWidth = normalizeCanvasSize(width)
  const initialHeight = normalizeCanvasSize(height)

  const tm = textmode.create({
    canvas,
    width: initialWidth,
    height: initialHeight,
    fontSize: 16,
    frameRate: 60,
    loadingScreen: {
      transition: 'none',
      transitionDuration: 0
    }
  })

  let time = 0
  let isReady = false
  let subheaderLines: string[] = []
  let hasRenderedFrame = false
  let isDestroyed = false
  let pendingResize: { width: number; height: number } | null = null
  let pendingResizeFrame = 0

  const calculateSubheaderLines = () => {
    const maxChars = Math.floor(tm.grid.cols * 0.85)
    const effectiveMaxChars = Math.max(15, Math.min(maxChars, 50))
    return wrapText(SUBHEADER_TEXT, effectiveMaxChars)
  }

  tm.setup(async () => {
    await tm.loadFont(HERO_FONT_SOURCE)
    if (isDestroyed) return

    tm.background(0, 0, 0, 0)
    if (showBranding) {
      subheaderLines = calculateSubheaderLines()
    }
    isReady = true
  })

  tm.draw(() => {
    if (!isReady || isDestroyed) return

    if (!hasRenderedFrame) {
      hasRenderedFrame = true
      schedulePendingResize()
    }

    tm.background(0, 0, 0, 0)
    time += 0.03

    renderWaveField(tm, time)

    if (showBranding) {
      if (subheaderLines.length === 0) {
        subheaderLines = calculateSubheaderLines()
      }
      renderBrandingOverlay(tm, time, subheaderLines)
    }
  })

  const applyResize = (width: number, height: number) => {
    if (isDestroyed || !isReady) {
      pendingResize = { width, height }
      return
    }
    tm.resizeCanvas(width, height)
    if (showBranding) {
      subheaderLines = calculateSubheaderLines()
    }
  }

  const schedulePendingResize = () => {
    if (!pendingResize || pendingResizeFrame || isDestroyed || typeof window === 'undefined') return

    pendingResizeFrame = window.requestAnimationFrame(() => {
      pendingResizeFrame = 0
      if (!pendingResize || isDestroyed) return

      const { width, height } = pendingResize
      pendingResize = null
      applyResize(width, height)
    })
  }

  const resizeSketch = (newWidth: number, newHeight: number) => {
    const width = normalizeCanvasSize(newWidth)
    const height = normalizeCanvasSize(newHeight)

    if (!isReady || !hasRenderedFrame) {
      pendingResize = { width, height }
      return
    }

    applyResize(width, height)
  }

  return {
    tm,
    resize: resizeSketch,
    destroy: () => {
      isDestroyed = true
      if (pendingResizeFrame && typeof window !== 'undefined') {
        window.cancelAnimationFrame(pendingResizeFrame)
      }
      pendingResizeFrame = 0
      pendingResize = null
      if (typeof tm.destroy === 'function') {
        tm.destroy()
      }
    }
  }
}

function normalizeCanvasSize(size: number): number {
  return Math.max(1, Math.floor(size))
}
