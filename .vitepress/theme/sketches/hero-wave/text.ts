export function wrapText(text: string, maxChars: number): string[] {
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
