---
layout: doc
editLink: true
title: header
description: The parsed FIGfont header metadata.
category: Accessors
api: true
owner: TextmodeFigFont
kind: Accessor
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.figlet.js](../../../index.md) / [TextmodeFigFont](../../TextmodeFigFont.md) / header

# Accessor: header

## Get Signature

```ts
get header(): FigFontHeader;
```

The parsed FIGfont header metadata.

### Returns

[`FigFontHeader`](../../../interfaces/FigFontHeader.md)

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

	drawText('TEXTMODEFIGFONT.HEADER', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: FIGFONT HEADER ACCESS', x, y++, 100, 220, 255);
	drawText('Accesses parsed font header metadata.', x, y++, 140, 160, 190);
	drawText('Inspects font specs and layout options.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (font) {
		drawText('Header properties printed below', x, y++, 140, 255, 180);
	} else {
		drawText('Loading header...', x, y++, 255, 180, 100);
	}
});

t.draw(() => {
	t.background(10, 12, 14);

	if (!font) return;

	// Render "HEADER" at the top center
	t.figText('HEADER', 0, -5);

	// Render the parsed header properties in a table
	t.push();
	const time = t.secs * 1.5;
	const c = 0.5 + 0.5 * Math.sin(time);
	t.charColor(Math.round(100 + 155 * c), Math.round(200 + 55 * (1.0 - c)), 255);

	const h = font.header;
	t.printAlign('center', 'center');
	t.print(`signature : ${h.signature}`, 0, 2);
	t.print(`hardblank : ${h.hardblank}`, 0, 4);
	t.print(`height    : ${h.height}`, 0, 6);
	t.print(`baseline  : ${h.baseline}`, 0, 8);
	t.print(`commentLines : ${h.commentLines}`, 0, 10);
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

