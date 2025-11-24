import {
  BORDER_CHARS,
  BORDER_COLOR_BASE,
  BORDER_COLOR_HIGHLIGHT,
  LOGO_COLOR_BASE,
  LOGO_COLOR_HIGHLIGHT,
  LOGO_TEXT,
  SUBHEAD_COLOR_BASE,
  SUBHEAD_COLOR_HIGHLIGHT
} from './constants'

interface LayoutConfig {
  logoGridX: number
  logoGridY: number
  logoTextWidth: number
  subheaderStartGridY: number
  totalWidth: number
  maxLineLength: number
}

interface RgbaColor {
  r: number
  g: number
  b: number
  a: number
}

const TRANSPARENT: RgbaColor = { r: 0, g: 0, b: 0, a: 0 }

export function renderBrandingOverlay(tm: any, time: number, subheaderLines: string[]) {
  if (subheaderLines.length === 0) return

  const layout = computeLayout(tm, subheaderLines)
  const borderColor = animatedColor(time * 1.5, BORDER_COLOR_BASE, BORDER_COLOR_HIGHLIGHT, 200, 255)

  drawLogoFrame(tm, layout, borderColor)
  drawLogoText(tm, layout, time)
  drawMidSeparator(tm, layout, borderColor)
  drawSubheaderFrame(tm, layout, borderColor, subheaderLines.length)
  fillSubheaderLines(tm, layout, time, subheaderLines)
}

function computeLayout(tm: any, subheaderLines: string[]): LayoutConfig {
  const maxLineLength = Math.max(1, ...subheaderLines.map(line => line.length))
  const logoTextWidth = LOGO_TEXT.length + 2
  const totalWidth = Math.max(logoTextWidth, maxLineLength + 2)
  const logoGridX = Math.min(2, tm.grid.cols - LOGO_TEXT.length - 2) + 1
  const logoGridY = Math.min(0, tm.grid.rows - subheaderLines.length - 6)
  const subheaderStartGridY = logoGridY + 4

  return {
    logoGridX,
    logoGridY,
    logoTextWidth,
    subheaderStartGridY,
    totalWidth,
    maxLineLength
  }
}

function drawLogoFrame(tm: any, layout: LayoutConfig, color: RgbaColor) {
  const { logoGridX, logoGridY, logoTextWidth } = layout

  for (let i = 0; i < logoTextWidth; i++) {
    let char: string = BORDER_CHARS.horizontal
    if (i === 0) char = BORDER_CHARS.topLeft
    if (i === logoTextWidth - 1) char = BORDER_CHARS.topRight

    drawCell(tm, logoGridX - 1 + i, logoGridY + 1, char, color)
  }

  drawCell(tm, logoGridX - 1, logoGridY + 2, BORDER_CHARS.vertical, color)
  drawCell(tm, logoGridX + logoTextWidth - 2, logoGridY + 2, BORDER_CHARS.vertical, color)
}

function drawLogoText(tm: any, layout: LayoutConfig, time: number) {
  const { logoGridX, logoGridY } = layout

  for (let i = 0; i < LOGO_TEXT.length; i++) {
    const pulse = Math.sin(time * 2.2 + i * 0.35) * 0.5 + 0.5
    const color = animatedColorFromBase(pulse, LOGO_COLOR_BASE, LOGO_COLOR_HIGHLIGHT)

    drawCell(tm, logoGridX + i, logoGridY + 2, LOGO_TEXT[i], {
      ...color,
      a: 255
    })
  }
}

function drawMidSeparator(tm: any, layout: LayoutConfig, color: RgbaColor) {
  const { logoGridX, logoGridY, logoTextWidth, totalWidth } = layout

  for (let i = 0; i < totalWidth; i++) {
    let char: string = BORDER_CHARS.horizontal
    if (i === 0) char = BORDER_CHARS.middleLeft
    else if (i === logoTextWidth - 1) char = BORDER_CHARS.bottomJoin
    else if (i === totalWidth - 1) char = BORDER_CHARS.topRight

    drawCell(tm, logoGridX - 1 + i, logoGridY + 3, char, color)
  }
}

function drawSubheaderFrame(tm: any, layout: LayoutConfig, color: RgbaColor, lineCount: number) {
  const { logoGridX, subheaderStartGridY, totalWidth, maxLineLength } = layout
  const bottomY = subheaderStartGridY + lineCount

  for (let i = 0; i < totalWidth; i++) {
    let char: string = BORDER_CHARS.horizontal
    if (i === 0) char = BORDER_CHARS.bottomLeft
    if (i === totalWidth - 1) char = BORDER_CHARS.bottomRight

    drawCell(tm, logoGridX - 1 + i, bottomY, char, color)
  }

  for (let j = 0; j < lineCount; j++) {
    drawCell(tm, logoGridX - 1, subheaderStartGridY + j, BORDER_CHARS.vertical, color)
    drawCell(tm, logoGridX + maxLineLength, subheaderStartGridY + j, BORDER_CHARS.vertical, color)
  }
}

function fillSubheaderLines(tm: any, layout: LayoutConfig, time: number, lines: string[]) {
  const { logoGridX, subheaderStartGridY, maxLineLength } = layout

  lines.forEach((line, lineIndex) => {
    for (let i = 0; i < maxLineLength; i++) {
      const targetX = logoGridX + i
      const targetY = subheaderStartGridY + lineIndex

      if (i < line.length) {
        const shimmer = Math.sin(time * 1.8 + i * 0.25 + lineIndex * 0.8) * 0.5 + 0.5
        const color = animatedColorFromBase(shimmer, SUBHEAD_COLOR_BASE, SUBHEAD_COLOR_HIGHLIGHT, 200, 255)
        drawCell(tm, targetX, targetY, line[i], color)
      } else {
        drawCell(tm, targetX, targetY, ' ', TRANSPARENT)
      }
    }
  })
}

function drawCell(tm: any, gridX: number, gridY: number, char: string, color: RgbaColor) {
  tm.push()
  tm.translate(gridX - tm.grid.cols / 2, gridY - tm.grid.rows / 2, 0)
  tm.char(char)
  tm.charColor(color.r, color.g, color.b, color.a)
  tm.cellColor(0, 0, 0, 0)
  tm.rect(1, 1)
  tm.pop()
}

function animatedColorFromBase(
  t: number,
  base: readonly [number, number, number],
  highlight: readonly [number, number, number],
  alphaMin = 255,
  alphaMax = 255
): RgbaColor {
  return animatedColor(t, base, highlight, alphaMin, alphaMax)
}

function animatedColor(
  phase: number,
  base: readonly [number, number, number],
  highlight: readonly [number, number, number],
  alphaMin: number,
  alphaMax: number
): RgbaColor {
  const pulse = Math.sin(phase) * 0.5 + 0.5
  return {
    r: Math.floor(base[0] + (highlight[0] - base[0]) * pulse),
    g: Math.floor(base[1] + (highlight[1] - base[1]) * pulse),
    b: Math.floor(base[2] + (highlight[2] - base[2]) * pulse),
    a: Math.floor(alphaMin + (alphaMax - alphaMin) * pulse)
  }
}
