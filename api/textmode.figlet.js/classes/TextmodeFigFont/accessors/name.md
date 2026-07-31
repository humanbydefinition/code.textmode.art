---
layout: doc
editLink: true
title: name
description: The display name associated with this FIGfont.
category: Accessors
api: true
owner: TextmodeFigFont
kind: Accessor
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.figlet.js](../../../index.md) / [TextmodeFigFont](../../TextmodeFigFont.md) / name

# Accessor: name

## Get Signature

```ts
get name(): string;
```

The display name associated with this FIGfont.

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
	t.figTextAlign('center');
	t.figTextBaseline('center');
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEFIGFONT.NAME', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: FONT NAME ACCESS', x, y++, 100, 220, 255);
	drawText('Accesses metadata name of FIGfont.', x, y++, 140, 160, 190);
	drawText('Dynamically queries loaded file.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (font) {
		drawText(`Font name: "${font.name}"`, x, y++, 140, 255, 180);
	} else {
		drawText('Loading font...', x, y++, 255, 180, 100);
	}
});

t.draw(() => {
	t.background(10, 10, 16);

	if (!font) return;

	const time = t.secs * 1.5;

	// Render the font name itself using the active font
	t.figText(font.name.toUpperCase(), 0, 0, {
		charColor: (cell) => {
			const wave = 0.5 + 0.5 * Math.sin(time + cell.col * 0.15);
			return [Math.round(100 + 155 * wave), Math.round(200 + 55 * (1.0 - wave)), 255];
		},
	});
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

