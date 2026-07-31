---
layout: doc
editLink: true
title: getCharacter
description: Look up a FIGcharacter by Unicode code point or by the first character in a string.
category: Methods
api: true
owner: TextmodeFigFont
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.figlet.js](../../../index.md) / [TextmodeFigFont](../../TextmodeFigFont.md) / getCharacter

# Method: getCharacter()

```ts
getCharacter(value): FigCharacter | undefined;
```

Look up a FIGcharacter by Unicode code point or by the first character in a string.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` | Unicode code point or string to resolve. |

## Returns

[`FigCharacter`](../../../interfaces/FigCharacter.md) \| `undefined`

The matching FIGcharacter, if present.

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
	plugins: [FigletPlugin],
});

const labelLayer = t.layers.add();

let font;
const chars = ['A', '5', '&', '?', '@', '#'];
let currentChar = 'A';
let charCode = 65;
let charWidth = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.setup(async () => {
	font = await t.loadFigFont('https://cdn.jsdelivr.net/gh/xero/figlet-fonts@master/Bulbhead.flf');
	t.figFont(font);
	t.figTextAlign('center');
	t.figTextBaseline('center');
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEFIGFONT.GETCHARACTER', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: INDIVIDUAL GLYPH INSPECT', x, y++, 100, 220, 255);
	drawText('Gets metadata for a single character.', x, y++, 140, 160, 190);
	drawText('Accesses glyph vector dimensions.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (font) {
		drawText(`Char: '${currentChar}' Code: ${charCode}`, x, y++, 140, 255, 180);
		drawText(`Glyph width: ${charWidth} cells`, x, y++, 140, 255, 180);
	} else {
		drawText('Loading font...', x, y++, 255, 180, 100);
	}
});

t.draw(() => {
	t.background(10, 12, 14);

	if (!font) return;

	const index = Math.floor(t.secs / 2.0) % chars.length;
	currentChar = chars[index];
	charCode = currentChar.charCodeAt(0);

	const charInfo = font.getCharacter(currentChar);
	if (charInfo) {
		charWidth = charInfo.width;

		const linesCount = charInfo.lines.length;
		const startY = -Math.floor(linesCount / 2);
		const startX = -Math.floor(charWidth / 2);

		t.push();
		const time = t.secs * 2.0;
		// Wave color
		t.charColor(Math.round(150 + 105 * Math.sin(time)), 255, Math.round(180 + 75 * Math.cos(time)));

		for (let r = 0; r < linesCount; r++) {
			t.print(charInfo.lines[r], startX, startY + r);
		}
		t.pop();
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

