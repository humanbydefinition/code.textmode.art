---
layout: doc
editLink: true
title: hardblank
description: Hardblank character declared by the font.
category: Accessors
api: true
owner: TextmodeFigFont
kind: Accessor
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.figlet.js](../../../index.md) / [TextmodeFigFont](../../TextmodeFigFont.md) / hardblank

# Accessor: hardblank

## Get Signature

```ts
get hardblank(): string;
```

Hardblank character declared by the font.

### Returns

`string`

### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
	plugins: [FigletPlugin],
});

const labelLayer = t.layers.add();
let font;

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
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEFIGFONT.HARDBLANK', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: HARDBLANK CHARACTER', x, y++, 100, 220, 255);
	drawText('A special glyph used for padding.', x, y++, 140, 160, 190);
	drawText('Replaced by space in final layout.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (font) {
		drawText(`Hardblank: '${font.hardblank}'`, x, y++, 140, 255, 180);
	} else {
		drawText('Loading...', x, y++, 255, 180, 100);
	}
});

t.draw(() => {
	t.background(10, 12, 18);

	if (!font) return;

	const charInfo = font.getCharacter('H');
	if (!charInfo) return;

	const time = t.secs * 2.0;
	const h = charInfo.lines.length;
	const w = charInfo.width;
	const startY = -Math.floor(h / 2);

	// Left: Raw glyph with visible hardblank in red
	t.push();
	t.translate(-Math.floor(w / 2) - 8, startY);
	for (let r = 0; r < h; r++) {
		const line = charInfo.lines[r];
		for (let c = 0; c < line.length; c++) {
			const char = line[c];
			if (char === font.hardblank) {
				const pulse = 0.5 + 0.5 * Math.sin(time + r * 0.5);
				t.charColor(Math.round(255 * pulse), 60, 60);
				t.print(font.hardblank, c, r);
			} else if (char !== ' ') {
				t.charColor(150, 200, 255);
				t.print(char, c, r);
			}
		}
	}
	t.pop();

	// Right: Processed glyph (hardblank converted to space)
	t.push();
	t.translate(-Math.floor(w / 2) + 8, startY);
	for (let r = 0; r < h; r++) {
		const line = charInfo.lines[r];
		for (let c = 0; c < line.length; c++) {
			const char = line[c];
			if (char !== font.hardblank && char !== ' ') {
				t.charColor(100, 255, 140);
				t.print(char, c, r);
			}
		}
	}
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

