import { textmode, Textmodifier } from './textmode.esm.js'

export interface SketchInstance {
  tm: Textmodifier
  resize: (width: number, height: number) => void
}

interface Cell {
  value: number
  target: number
  hue: number
  targetHue: number
}

// Character sets for different intensities - more variation
const CHAR_SETS = [' ', '·', '∙', '⋅', '•', '○', '◉', '●', '◆', '◈', '▪', '■']

export function createFlowingParticlesSketch(canvas: HTMLCanvasElement, width: number, height: number): SketchInstance {
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

  let grid: Cell[][] = []
  let frame = 0
  
  // Store reference to canvas parent for resize calculations
  const container = canvas.parentElement
  
  // Simple hash function for pseudo-random values
  const hash = (x: number, y: number, seed: number): number => {
    let n = (x * 374761393 + y * 668265263 + seed * 1911520717) & 0x7fffffff
    n = ((n >> 13) ^ n) * 1274126177
    return ((n ^ (n >> 16)) & 0x7fffffff) / 0x7fffffff
  }
  
  // Convert hue (0-360) to RGB - optimized for both light and dark modes
  const hueToRGB = (hue: number, saturation: number, lightness: number): [number, number, number] => {
    const c = (1 - Math.abs(2 * lightness - 1)) * saturation
    const x = c * (1 - Math.abs(((hue / 60) % 2) - 1))
    const m = lightness - c / 2
    
    let r = 0, g = 0, b = 0
    
    if (hue < 60) { r = c; g = x; b = 0 }
    else if (hue < 120) { r = x; g = c; b = 0 }
    else if (hue < 180) { r = 0; g = c; b = x }
    else if (hue < 240) { r = 0; g = x; b = c }
    else if (hue < 300) { r = x; g = 0; b = c }
    else { r = c; g = 0; b = x }
    
    return [
      Math.floor((r + m) * 255),
      Math.floor((g + m) * 255),
      Math.floor((b + m) * 255)
    ]
  }
  
  // Initialize grid
  const initGrid = () => {
    const rows = tm.grid!.rows!
    const cols = tm.grid!.cols!
    
    grid = []
    
    for (let y = 0; y < rows; y++) {
      grid[y] = []
      for (let x = 0; x < cols; x++) {
        const initialHue = hash(x, y, 789) * 360
        grid[y][x] = { 
          value: 0, 
          target: 0,
          hue: initialHue,
          targetHue: initialHue
        }
      }
    }
  }
  
  // Calculate target value and hue based on position and time
  const calculateTargets = (x: number, y: number, t: number): { value: number, hue: number } => {
    const rows = tm.grid!.rows!
    const cols = tm.grid!.cols!
    
    // Normalize coordinates
    const nx = x / cols
    const ny = y / rows
    
    // Create flowing waves with hash-based patterns
    const wave1 = hash(Math.floor(nx * 8 + t * 0.08), Math.floor(ny * 8 + t * 0.05), 111)
    const wave2 = hash(Math.floor(nx * 12 + t * 0.06), Math.floor(ny * 12 + t * 0.09), 222)
    const wave3 = hash(Math.floor(nx * 16 + t * 0.04), Math.floor(ny * 16 + t * 0.07), 333)
    
    // Combine waves for intensity
    const value = wave1 * 0.4 + wave2 * 0.35 + wave3 * 0.25
    
    // Create flowing hue based on position and time
    const hueWave1 = hash(Math.floor(nx * 6 + t * 0.03), Math.floor(ny * 6 + t * 0.04), 444)
    const hueWave2 = hash(Math.floor(nx * 4 + t * 0.05), Math.floor(ny * 4 + t * 0.02), 555)
    
    // Map to colorful hue range (cyan to magenta, avoiding muddy colors)
    // This range works well in both light and dark modes
    const hueBase = (hueWave1 * 0.6 + hueWave2 * 0.4) * 180 + 160
    const hue = hueBase % 360
    
    return { value, hue }
  }

  tm.setup(() => {
    tm.background(0, 0, 0, 0)
    initGrid()
  })

  tm.draw(() => {
    tm.background(0, 0, 0, 0)
    frame++
    
    const rows = tm.grid!.rows!
    const cols = tm.grid!.cols!
    
    // Safety check: ensure grid is initialized and has correct dimensions
    if (!grid || grid.length !== rows || (grid[0] && grid[0].length !== cols)) {
      return
    }
    
    // Update values and hues smoothly toward targets
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const cell = grid[y][x]
        
        // Calculate new targets every 8 frames for smooth motion
        if (frame % 4 === 0) {
          const targets = calculateTargets(x, y, frame)
          cell.target = targets.value
          cell.targetHue = targets.hue
        }
        
        // Smoothly interpolate values
        const lerpSpeed = 0.08
        cell.value += (cell.target - cell.value) * lerpSpeed
        
        // Smoothly interpolate hue (handle wrap-around)
        let hueDiff = cell.targetHue - cell.hue
        if (hueDiff > 180) hueDiff -= 360
        if (hueDiff < -180) hueDiff += 360
        cell.hue = (cell.hue + hueDiff * lerpSpeed + 360) % 360
      }
    }
    
    // Draw the pattern
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const cell = grid[y][x]
        const value = cell.value
        
        // Map to character with more granularity
        const charIndex = Math.floor(value * (CHAR_SETS.length - 0.01))
        const char = CHAR_SETS[Math.max(0, Math.min(CHAR_SETS.length - 1, charIndex))]
        
        if (char === ' ') continue
        
        // Use HSL for vibrant colors that work in both modes
        // Medium-high saturation (0.7) and medium lightness (0.55) work well universally
        const [r, g, b] = hueToRGB(cell.hue, 0.7, 0.55)
        
        // Alpha varies with intensity for depth
        const alpha = Math.floor(150 + value * 105)
        
        // Draw the character
        tm.char(char)
        tm.charColor(r, g, b, alpha)
        tm.cellColor(0, 0, 0, 0)
        tm.rect(x, y, 1, 1)
      }
    }
  })

  // Remove the built-in windowResized handler - resize will be managed externally
  // tm.windowResized(() => { ... })

  // Public resize method to be called from Vue component
  const resize = (newWidth: number, newHeight: number) => {
    
    // Temporarily resize to get new grid dimensions
    canvas.width = newWidth
    canvas.height = newHeight
    tm.resizeCanvas(newWidth, newHeight)
    
    // Now reinitialize grid with new dimensions
    initGrid()
  }

  return {
    tm: tm,
    resize: resize
  }
}
