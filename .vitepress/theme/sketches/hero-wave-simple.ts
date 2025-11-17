/**
 * Hero Wave Sketch (Simple Version)
 * 
 * Animated wave background without text or borders.
 * Used as background animation in the "What is textmode.js?" section.
 */

// @ts-nocheck - Using bundled textmode.js for docs site
import { textmode, Textmodifier } from './textmode.esm.js'

export interface SketchInstance {
  tm: Textmodifier
  resize: (width: number, height: number) => void
}

// Color palette optimized for both light (#ffffff) and dark (#1b1b1f) backgrounds
// Uses medium luminance values (30-70% brightness) for universal readability
const WAVE_COLOR_LOW = [60, 90, 120]      // Mid-blue (works on both)
const WAVE_COLOR_HIGH = [0, 180, 180]     // Vibrant cyan (readable on both)

export function createHeroWaveSimpleSketch(canvas: HTMLCanvasElement, width: number, height: number): SketchInstance {
  
  const tm = textmode.create({
    canvas: canvas,
    width: width,
    height: height,
    fontSize: 16,
    frameRate: 60,
    fontSource: '/Bescii-Mono.woff'
  })

  let time = 0
  const chars = '░▒▓█▀▄'
  
  tm.setup(() => {
    tm.background(0, 0, 0, 0)
  })

  tm.draw(() => {
    tm.background(0, 0, 0, 0)
    time += 0.02

    // Create animated wave pattern
    // With center origin, convert from top-left grid coordinates
    for (let gridY = 0; gridY < tm.grid.rows; gridY++) {
      for (let gridX = 0; gridX < tm.grid.cols; gridX++) {
        // Calculate position relative to center for wave calculations
        const dx = gridX - tm.grid.cols / 2
        const dy = gridY - tm.grid.rows / 2
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        const wave = Math.sin(dist * 0.3 - time * 2) * 0.5 + 0.5
        const wave2 = Math.sin(gridX * 0.2 + time) * 0.5 + 0.5
        const wave3 = Math.sin(gridY * 0.2 - time * 0.7) * 0.5 + 0.5
        
        const combined = (wave + wave2 + wave3) / 3
        
        // Balanced gradient that works on dark and light backdrops
        const r = Math.floor(WAVE_COLOR_LOW[0] + (WAVE_COLOR_HIGH[0] - WAVE_COLOR_LOW[0]) * combined)
        const g = Math.floor(WAVE_COLOR_LOW[1] + (WAVE_COLOR_HIGH[1] - WAVE_COLOR_LOW[1]) * combined)
        const b = Math.floor(WAVE_COLOR_LOW[2] + (WAVE_COLOR_HIGH[2] - WAVE_COLOR_LOW[2]) * combined)
        
        const charIndex = Math.floor(combined * (chars.length - 1))
        const char = chars[charIndex]
        
        // Convert grid coordinates to center-based coordinates
        const x = gridX - tm.grid.cols / 2
        const y = gridY - tm.grid.rows / 2
        
        tm.push()
        tm.translate(x + 1, y, 0)
        tm.char(char)
        tm.charColor(r, g, b, 255)
        tm.cellColor(0, 0, 0, 0)
        tm.rect(1, 1)
        tm.pop()
      }
    }
  })

  // Public resize method to be called from Vue component
  const resize = (newWidth: number, newHeight: number) => {
    canvas.width = newWidth
    canvas.height = newHeight
    tm.resizeCanvas(newWidth, newHeight)
  }

  return {
    tm: tm,
    resize: resize
  }
}
