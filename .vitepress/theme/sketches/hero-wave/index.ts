// @ts-nocheck - Using bundled textmode.js for docs site
import { textmode } from 'https://cdn.jsdelivr.net/npm/textmode.js@0.6.1/+esm'

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

  const tm = textmode.create({
    canvas,
    width,
    height,
    fontSize: 16,
    frameRate: 60,
    fontSource: HERO_FONT_SOURCE
  })

  let time = 0
  let subheaderLines: string[] = []

  const calculateSubheaderLines = () => {
    const maxChars = Math.floor(tm.grid.cols * 0.85)
    const effectiveMaxChars = Math.max(15, Math.min(maxChars, 50))
    return wrapText(SUBHEADER_TEXT, effectiveMaxChars)
  }

  tm.setup(() => {
    tm.background(0, 0, 0, 0)
    if (showBranding) {
      subheaderLines = calculateSubheaderLines()
    }
  })

  tm.draw(() => {
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

  const resizeSketch = (newWidth: number, newHeight: number) => {
    canvas.width = newWidth
    canvas.height = newHeight
    tm.resizeCanvas(newWidth, newHeight)
    if (showBranding) {
      subheaderLines = calculateSubheaderLines()
    }
  }

  tm.windowResized(() => {
    if (canvas && canvas.parentElement) {
      const newWidth = canvas.parentElement.clientWidth
      const newHeight = canvas.parentElement.clientHeight
      resizeSketch(newWidth, newHeight)
    }
  })

  return {
    tm,
    resize: resizeSketch
  }
}
