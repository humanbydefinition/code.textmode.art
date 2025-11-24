import { CHAR_SEQUENCE, WAVE_COLOR_HIGH, WAVE_COLOR_LOW } from './constants'

const TRANSPARENT = [0, 0, 0, 0] as const

export function renderWaveField(tm: any, time: number) {
  for (let gridY = 0; gridY < tm.grid.rows; gridY++) {
    for (let gridX = 0; gridX < tm.grid.cols; gridX++) {
      const dx = gridX - tm.grid.cols / 2
      const dy = gridY - tm.grid.rows / 2
      const dist = Math.sqrt(dx * dx + dy * dy)

      const wave = Math.sin(dist * 0.3 - time * 2) * 0.5 + 0.5
      const wave2 = Math.sin(gridX * 0.2 + time) * 0.5 + 0.5
      const wave3 = Math.sin(gridY * 0.2 - time * 0.7) * 0.5 + 0.5

      const combined = (wave + wave2 + wave3) / 3
      const r = Math.floor(WAVE_COLOR_LOW[0] + (WAVE_COLOR_HIGH[0] - WAVE_COLOR_LOW[0]) * combined)
      const g = Math.floor(WAVE_COLOR_LOW[1] + (WAVE_COLOR_HIGH[1] - WAVE_COLOR_LOW[1]) * combined)
      const b = Math.floor(WAVE_COLOR_LOW[2] + (WAVE_COLOR_HIGH[2] - WAVE_COLOR_LOW[2]) * combined)

      const charIndex = Math.floor(combined * (CHAR_SEQUENCE.length - 1))
      const char = CHAR_SEQUENCE[charIndex]

      const x = gridX - tm.grid.cols / 2
      const y = gridY - tm.grid.rows / 2

      tm.push()
      tm.translate(x + 1, y, 0)
      tm.char(char)
      tm.charColor(r, g, b, 255)
      tm.cellColor(...TRANSPARENT)
      tm.rect(1, 1)
      tm.pop()
    }
  }
}
