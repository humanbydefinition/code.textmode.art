/**
 * Hero Wave Sketch
 * 
 * Animated wave background with a glowing textmode.js logo and tagline.
 * Used as the hero animation on the landing page.
 */

// @ts-nocheck - Using bundled textmode.js for docs site
import { textmode } from './textmode.esm.js'

export interface SketchInstance {
  tm: any
  resize?: (width: number, height: number) => void
}

export interface HeroWaveOptions {
  /**
   * "hero" mode renders the branded textmode.js label and subtitle frame.
   * "background" mode renders only the animated waves (used in secondary sections).
   */
  mode?: 'hero' | 'background'
}

const wrapText = (text: string, maxChars: number): string[] => {
  const words = text.split(' ')
  const lines: string[] = []
  let currentLine = ''

  words.forEach(word => {
    const candidate = currentLine.length > 0 ? `${currentLine} ${word}` : word
    if (candidate.length > maxChars) {
      if (currentLine.length > 0) {
        lines.push(currentLine)
        currentLine = word
      } else {
        // Word is longer than maxChars, split it
        lines.push(word)
      }
    } else {
      currentLine = candidate
    }
  })

  if (currentLine.length > 0) {
    lines.push(currentLine)
  }

  return lines
}

const LOGO_TEXT = 'textmode.js'
const SUBHEADER_TEXT = 'A creative coding library for building dynamic ASCII art and textmode graphics with real-time* rendering'

// Color palette optimized for both light (#ffffff) and dark (#1b1b1f) backgrounds
// Uses medium luminance values (30-70% brightness) for universal readability
const WAVE_COLOR_LOW = [60, 90, 120]      // Mid-blue (works on both)
const WAVE_COLOR_HIGH = [0, 180, 180]     // Vibrant cyan (readable on both)
const LOGO_COLOR_BASE = [0, 140, 200]     // Deep cyan-blue
const LOGO_COLOR_HIGHLIGHT = [0, 200, 255] // Bright cyan
const BORDER_COLOR_BASE = [0, 100, 160]   // Deep blue (good on white)
const BORDER_COLOR_HIGHLIGHT = [0, 160, 220] // Brighter cyan-blue
const SUBHEAD_COLOR_BASE = [80, 100, 130] // Medium gray-blue
const SUBHEAD_COLOR_HIGHLIGHT = [0, 180, 200] // Teal highlight

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
    canvas: canvas,
    width: width,
    height: height,
    fontSize: 16,
    frameRate: 60,
    fontSource: '/Bescii-Mono.woff'
  })

  let time = 0
  const chars = '░▒▓█▀▄'
  
  // Calculate optimal text wrapping based on grid width
  const calculateSubheaderLines = () => {
    // Use 85% of grid width for better mobile support and word wrapping
    const maxChars = Math.floor(tm.grid.cols * 0.85)
    // Ensure minimum readable width, cap at 50 for better mobile wrapping
    const effectiveMaxChars = Math.max(15, Math.min(maxChars, 50))
    return wrapText(SUBHEADER_TEXT, effectiveMaxChars)
  }
  
  let subheaderLines: string[] = []
  
  tm.setup(() => {
    tm.background(0, 0, 0, 0)
    if (showBranding) {
      subheaderLines = calculateSubheaderLines()
    }
  })

  tm.draw(() => {
    tm.background(0, 0, 0, 0)
    time += 0.04;

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

    if (showBranding) {
      if (subheaderLines.length === 0) {
        subheaderLines = calculateSubheaderLines()
      }

      // Animated logo aligned near the top-left
    // Calculate position in grid space first, then convert to center-based
    const marginCols = Math.max(2, Math.floor(tm.grid.cols * 0.05))
    const marginRows = 0
    const logoGridX = Math.min(2, tm.grid.cols - LOGO_TEXT.length - 2) + 1
    const logoGridY = Math.min(marginRows, tm.grid.rows - subheaderLines.length - 6)

    // Calculate dimensions
    const subheaderStartGridY = logoGridY + 4
    const maxLineLength = Math.max(...subheaderLines.map(line => line.length))
    const logoTextWidth = LOGO_TEXT.length + 2  // Width of just the logo text area
    const totalWidth = Math.max(logoTextWidth, maxLineLength + 2) // Total width for subtitle area
    const logoHeight = 3 // Logo + top/bottom border

    // Border characters for both logo and subheader
      const borderChars = {
      topLeft: '┌',
      topRight: '┐',
      bottomLeft: '└',
      bottomRight: '┘',
      middleLeft: '├',
      middleRight: '┤',
      horizontal: '─',
      vertical: '│',
      topJoin: '┬',
      bottomJoin: '┴'
    }

    // Animated border colors
      const borderPhase = time * 1.5
      const borderPulse = Math.sin(borderPhase) * 0.5 + 0.5
      const borderR = Math.floor(BORDER_COLOR_BASE[0] + (BORDER_COLOR_HIGHLIGHT[0] - BORDER_COLOR_BASE[0]) * borderPulse)
      const borderG = Math.floor(BORDER_COLOR_BASE[1] + (BORDER_COLOR_HIGHLIGHT[1] - BORDER_COLOR_BASE[1]) * borderPulse)
      const borderB = Math.floor(BORDER_COLOR_BASE[2] + (BORDER_COLOR_HIGHLIGHT[2] - BORDER_COLOR_BASE[2]) * borderPulse)
      const borderAlpha = Math.floor(200 + borderPulse * 55)

    // Top border of logo (only spans the width of "textmode.js")
      for (let i = 0; i < logoTextWidth; i++) {
      let char = borderChars.horizontal
      if (i === 0) char = borderChars.topLeft
      if (i === logoTextWidth - 1) char = borderChars.topRight
      
      const x = (logoGridX - 1 + i) - tm.grid.cols / 2
      const y = (logoGridY + 1) - tm.grid.rows / 2
      
      tm.push()
      tm.translate(x, y, 0)
      tm.char(char)
      tm.charColor(borderR, borderG, borderB, borderAlpha)
      tm.cellColor(0, 0, 0, 0)
      tm.rect(1, 1)
      tm.pop()
    }

    // Left border of logo
      {
      const x = (logoGridX - 1) - tm.grid.cols / 2
      const y = (logoGridY + 2) - tm.grid.rows / 2
      
      tm.push()
      tm.translate(x, y, 0)
      tm.char(borderChars.vertical)
      tm.charColor(borderR, borderG, borderB, borderAlpha)
      tm.cellColor(0, 0, 0, 0)
      tm.rect(1, 1)
      tm.pop()
    }
    
    // Right border of logo (only for the logo text width)
      {
      const x = (logoGridX + logoTextWidth - 2) - tm.grid.cols / 2
      const y = (logoGridY + 2) - tm.grid.rows / 2
      
      tm.push()
      tm.translate(x, y, 0)
      tm.char(borderChars.vertical)
      tm.charColor(borderR, borderG, borderB, borderAlpha)
      tm.cellColor(0, 0, 0, 0)
      tm.rect(1, 1)
      tm.pop()
    }

    // Draw logo text
      for (let i = 0; i < LOGO_TEXT.length; i++) {
      const char = LOGO_TEXT[i]
      const phase = time * 2.2 + i * 0.35
      const pulse = Math.sin(phase) * 0.5 + 0.5
      const r = Math.floor(LOGO_COLOR_BASE[0] + (LOGO_COLOR_HIGHLIGHT[0] - LOGO_COLOR_BASE[0]) * pulse)
      const g = Math.floor(LOGO_COLOR_BASE[1] + (LOGO_COLOR_HIGHLIGHT[1] - LOGO_COLOR_BASE[1]) * pulse)
      const b = Math.floor(LOGO_COLOR_BASE[2] + (LOGO_COLOR_HIGHLIGHT[2] - LOGO_COLOR_BASE[2]) * pulse)

      const x = (logoGridX + i) - tm.grid.cols / 2
      const y = (logoGridY + 2) - tm.grid.rows / 2
      
      tm.push()
      tm.translate(x, y, 0)
      tm.char(char)
      tm.charColor(r, g, b, 255)
      tm.cellColor(0, 0, 0, 0)
      tm.rect(1, 1)
      tm.pop()
    }

    // Middle separator line (connects logo to subheader, expands to full width)
      for (let i = 0; i < totalWidth; i++) {
      let char = borderChars.horizontal
      if (i === 0) char = borderChars.middleLeft
      else if (i === logoTextWidth - 1) char = borderChars.bottomJoin  // Junction where logo border meets
      else if (i === totalWidth - 1) char = borderChars.topRight
      
      const x = (logoGridX - 1 + i) - tm.grid.cols / 2
      const y = (logoGridY + 3) - tm.grid.rows / 2
      
      tm.push()
      tm.translate(x, y, 0)
      tm.char(char)
      tm.charColor(borderR, borderG, borderB, borderAlpha)
      tm.cellColor(0, 0, 0, 0)
      tm.rect(1, 1)
      tm.pop()
    }

    // Calculate subheader rectangle dimensions
      const subheaderWidth = totalWidth  // Match total width
      const subheaderHeight = subheaderLines.length + 1  // +1 for bottom border


      // Bottom border of subheader
      for (let i = 0; i < subheaderWidth; i++) {
      let char = borderChars.horizontal
      if (i === 0) char = borderChars.bottomLeft
      if (i === subheaderWidth - 1) char = borderChars.bottomRight
      
      const x = (logoGridX - 1 + i) - tm.grid.cols / 2
      const y = (subheaderStartGridY + subheaderLines.length) - tm.grid.rows / 2
      
      tm.push()
      tm.translate(x, y, 0)
      tm.char(char)
      tm.charColor(borderR, borderG, borderB, borderAlpha)
      tm.cellColor(0, 0, 0, 0)
      tm.rect(1, 1)
      tm.pop()
    }

    // Left and right borders
      for (let j = 0; j < subheaderLines.length; j++) {
      // Left border
      {
        const x = (logoGridX - 1) - tm.grid.cols / 2
        const y = (subheaderStartGridY + j) - tm.grid.rows / 2
        
        tm.push()
        tm.translate(x, y, 0)
        tm.char(borderChars.vertical)
        tm.charColor(borderR, borderG, borderB, borderAlpha)
        tm.cellColor(0, 0, 0, 0)
        tm.rect(1, 1)
        tm.pop()
      }
      
      // Right border
      {
        const x = (logoGridX + maxLineLength) - tm.grid.cols / 2
        const y = (subheaderStartGridY + j) - tm.grid.rows / 2
        
        tm.push()
        tm.translate(x, y, 0)
        tm.char(borderChars.vertical)
        tm.charColor(borderR, borderG, borderB, borderAlpha)
        tm.cellColor(0, 0, 0, 0)
        tm.rect(1, 1)
        tm.pop()
      }
    }

    // Fill empty spaces in each line with space characters
      subheaderLines.forEach((line, lineIndex) => {
      for (let i = 0; i < maxLineLength; i++) {
        const x = (logoGridX + i) - tm.grid.cols / 2
        const y = (subheaderStartGridY + lineIndex) - tm.grid.rows / 2
        
        tm.push()
        tm.translate(x, y, 0)
        
        if (i < line.length) {
          // Draw text character
          const char = line[i]
          const phase = time * 1.8 + i * 0.25 + lineIndex * 0.8
          const shimmer = Math.sin(phase) * 0.5 + 0.5
          const r = Math.floor(SUBHEAD_COLOR_BASE[0] + (SUBHEAD_COLOR_HIGHLIGHT[0] - SUBHEAD_COLOR_BASE[0]) * shimmer)
          const g = Math.floor(SUBHEAD_COLOR_BASE[1] + (SUBHEAD_COLOR_HIGHLIGHT[1] - SUBHEAD_COLOR_BASE[1]) * shimmer)
          const b = Math.floor(SUBHEAD_COLOR_BASE[2] + (SUBHEAD_COLOR_HIGHLIGHT[2] - SUBHEAD_COLOR_BASE[2]) * shimmer)
          const alpha = Math.floor(200 + shimmer * 55)

          tm.char(char)
          tm.charColor(r, g, b, alpha)
          tm.cellColor(0, 0, 0, 0)
        } else {
          // Fill with space character
          tm.char(' ')
          tm.charColor(0, 0, 0, 0)
          tm.cellColor(0, 0, 0, 0)
        }
        
        tm.rect(1, 1)
        tm.pop()
      }
      })
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

  // windowResized callback will be triggered by the actual window resize event
  tm.windowResized(() => {
    // Get the canvas dimensions from the actual canvas element
    if (canvas && canvas.parentElement) {
      const newWidth = canvas.parentElement.clientWidth
      const newHeight = canvas.parentElement.clientHeight
      resizeSketch(newWidth, newHeight)
    }
  })

  return {
    tm: tm,
    resize: resizeSketch
  }
}
