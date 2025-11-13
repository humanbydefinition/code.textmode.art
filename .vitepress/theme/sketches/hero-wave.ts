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

export function createHeroWaveSketch(canvas: HTMLCanvasElement, width: number, height: number): SketchInstance {
  if (!textmode) {
    throw new Error('textmode.js library not loaded')
  }
  
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
  
  let subheaderLines: string[]
  
  tm.setup(() => {
    tm.background(0, 0, 0, 0)

    subheaderLines = calculateSubheaderLines()
  })

  tm.draw(() => {
    tm.background(0, 0, 0, 0)
    time += 0.02

    // Create animated wave pattern
    for (let y = 0; y < tm.grid.rows; y++) {
      for (let x = 0; x < tm.grid.cols; x++) {
        const dx = x - tm.grid.cols / 2
        const dy = y - tm.grid.rows / 2
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        const wave = Math.sin(dist * 0.3 - time * 2) * 0.5 + 0.5
        const wave2 = Math.sin(x * 0.2 + time) * 0.5 + 0.5
        const wave3 = Math.sin(y * 0.2 - time * 0.7) * 0.5 + 0.5
        
        const combined = (wave + wave2 + wave3) / 3
        
        // Balanced gradient that works on dark and light backdrops
        const r = Math.floor(WAVE_COLOR_LOW[0] + (WAVE_COLOR_HIGH[0] - WAVE_COLOR_LOW[0]) * combined)
        const g = Math.floor(WAVE_COLOR_LOW[1] + (WAVE_COLOR_HIGH[1] - WAVE_COLOR_LOW[1]) * combined)
        const b = Math.floor(WAVE_COLOR_LOW[2] + (WAVE_COLOR_HIGH[2] - WAVE_COLOR_LOW[2]) * combined)
        
        const charIndex = Math.floor(combined * (chars.length - 1))
        const char = chars[charIndex]
        
        tm.char(char)
        tm.charColor(r, g, b, 255)
        tm.cellColor(0, 0, 0, 0)
        tm.rect(x, y, 1, 1)
      }
    }

    // Animated logo aligned near the top-left
    const marginCols = Math.max(2, Math.floor(tm.grid.cols * 0.05))
    const marginRows = 0;
    const logoBaseX = Math.min(2, tm.grid.cols - LOGO_TEXT.length - 2)
    const logoBaseY = Math.min(marginRows, tm.grid.rows - subheaderLines.length - 6)

    // Calculate dimensions
    const subheaderStartY = logoBaseY + 4
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
    for (let x = 0; x < logoTextWidth; x++) {
      let char = borderChars.horizontal
      if (x === 0) char = borderChars.topLeft
      if (x === logoTextWidth - 1) char = borderChars.topRight
      
      tm.char(char)
      tm.charColor(borderR, borderG, borderB, borderAlpha)
      tm.cellColor(0, 0, 0, 0)
      tm.rect(logoBaseX - 1 + x, logoBaseY + 1, 1, 1)
    }

    // Left border of logo
    tm.char(borderChars.vertical)
    tm.charColor(borderR, borderG, borderB, borderAlpha)
    tm.cellColor(0, 0, 0, 0)
    tm.rect(logoBaseX - 1, logoBaseY + 2, 1, 1)
    
    // Right border of logo (only for the logo text width)
    tm.char(borderChars.vertical)
    tm.charColor(borderR, borderG, borderB, borderAlpha)
    tm.cellColor(0, 0, 0, 0)
    tm.rect(logoBaseX + logoTextWidth - 2, logoBaseY + 2, 1, 1)

    // Draw logo text
    for (let i = 0; i < LOGO_TEXT.length; i++) {
      const char = LOGO_TEXT[i]
      const phase = time * 2.2 + i * 0.35
      const pulse = Math.sin(phase) * 0.5 + 0.5
      const r = Math.floor(LOGO_COLOR_BASE[0] + (LOGO_COLOR_HIGHLIGHT[0] - LOGO_COLOR_BASE[0]) * pulse)
      const g = Math.floor(LOGO_COLOR_BASE[1] + (LOGO_COLOR_HIGHLIGHT[1] - LOGO_COLOR_BASE[1]) * pulse)
      const b = Math.floor(LOGO_COLOR_BASE[2] + (LOGO_COLOR_HIGHLIGHT[2] - LOGO_COLOR_BASE[2]) * pulse)

      tm.char(char)
      tm.charColor(r, g, b, 255)
      tm.cellColor(0, 0, 0, 0)
      tm.rect(logoBaseX + i, logoBaseY + 2, 1, 1)
    }

    // Middle separator line (connects logo to subheader, expands to full width)
    for (let x = 0; x < totalWidth; x++) {
      let char = borderChars.horizontal
      if (x === 0) char = borderChars.middleLeft
      else if (x === logoTextWidth - 1) char = borderChars.bottomJoin  // Junction where logo border meets
      else if (x === totalWidth - 1) char = borderChars.topRight
      
      tm.char(char)
      tm.charColor(borderR, borderG, borderB, borderAlpha)
      tm.cellColor(0, 0, 0, 0)
      tm.rect(logoBaseX - 1 + x, logoBaseY + 3, 1, 1)
    }

    // Calculate subheader rectangle dimensions
    const subheaderWidth = totalWidth  // Match total width
    const subheaderHeight = subheaderLines.length + 1  // +1 for bottom border


    // Bottom border of subheader
    for (let x = 0; x < subheaderWidth; x++) {
      let char = borderChars.horizontal
      if (x === 0) char = borderChars.bottomLeft
      if (x === subheaderWidth - 1) char = borderChars.bottomRight
      
      tm.char(char)
      tm.charColor(borderR, borderG, borderB, borderAlpha)
      tm.cellColor(0, 0, 0, 0)
      tm.rect(logoBaseX - 1 + x, subheaderStartY + subheaderLines.length, 1, 1)
    }

    // Left and right borders
    for (let y = 0; y < subheaderLines.length; y++) {
      // Left border
      tm.char(borderChars.vertical)
      tm.charColor(borderR, borderG, borderB, borderAlpha)
      tm.cellColor(0, 0, 0, 0)
      tm.rect(logoBaseX - 1, subheaderStartY + y, 1, 1)
      
      // Right border
      tm.char(borderChars.vertical)
      tm.charColor(borderR, borderG, borderB, borderAlpha)
      tm.cellColor(0, 0, 0, 0)
      tm.rect(logoBaseX + maxLineLength, subheaderStartY + y, 1, 1)
    }

    // Fill empty spaces in each line with space characters
    subheaderLines.forEach((line, lineIndex) => {
      for (let i = 0; i < maxLineLength; i++) {
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
          tm.rect(logoBaseX + i, subheaderStartY + lineIndex, 1, 1)
        } else {
          // Fill with space character
          tm.char(' ')
          tm.charColor(0, 0, 0, 0)
          tm.cellColor(0, 0, 0, 0)
          tm.rect(logoBaseX + i, subheaderStartY + lineIndex, 1, 1)
        }
      }
    })
  })

  // windowResized callback will be triggered by the actual window resize event
  tm.windowResized(() => {
    // Get the canvas dimensions from the actual canvas element
    if (canvas && canvas.parentElement) {
      const newWidth = canvas.parentElement.clientWidth
      const newHeight = canvas.parentElement.clientHeight
      canvas.width = newWidth
      canvas.height = newHeight
      tm.resizeCanvas(newWidth, newHeight)
      // Recalculate text wrapping for new grid dimensions
      subheaderLines = calculateSubheaderLines()
    }
  })  // Return instance with textmode object
  return {
    tm: tm
  }
}
