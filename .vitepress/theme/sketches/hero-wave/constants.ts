export const LOGO_TEXT = 'textmode.js'
export const SUBHEADER_TEXT = 'A creative coding library for building dynamic ASCII art and textmode graphics with real-time* rendering'

export const CHAR_SEQUENCE = '░▒▓█▀▄'

export const WAVE_COLOR_LOW: readonly [number, number, number] = [60, 90, 120]
export const WAVE_COLOR_HIGH: readonly [number, number, number] = [0, 180, 180]

export const LOGO_COLOR_BASE: readonly [number, number, number] = [0, 140, 200]
export const LOGO_COLOR_HIGHLIGHT: readonly [number, number, number] = [0, 200, 255]

export const BORDER_COLOR_BASE: readonly [number, number, number] = [0, 100, 160]
export const BORDER_COLOR_HIGHLIGHT: readonly [number, number, number] = [0, 160, 220]

export const SUBHEAD_COLOR_BASE: readonly [number, number, number] = [80, 100, 130]
export const SUBHEAD_COLOR_HIGHLIGHT: readonly [number, number, number] = [0, 180, 200]

export const HERO_FONT_SOURCE = '/fonts/Bescii-Mono.woff'

export const BORDER_CHARS = {
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
} as const
