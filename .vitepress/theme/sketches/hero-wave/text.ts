export function wrapText(text: string, maxChars: number): string[] {
  if (!text || text.trim().length === 0) {
    return []
  }

  const words = text.split(/\s+/).filter(word => word.length > 0)
  const lines: string[] = []
  let currentLine = ''

  for (const word of words) {
    const candidate = currentLine.length > 0 ? `${currentLine} ${word}` : word
    if (candidate.length > maxChars) {
      if (currentLine.length > 0) {
        lines.push(currentLine)
        currentLine = word
      } else {
        // Keep an overlong word intact rather than dropping it or merging it
        // into the next line.
        lines.push(word)
        currentLine = ''
      }
    } else {
      currentLine = candidate
    }
  }

  if (currentLine.length > 0) {
    lines.push(currentLine)
  }

  return lines
}
