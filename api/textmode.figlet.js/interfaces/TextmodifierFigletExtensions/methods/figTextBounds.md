---
layout: doc
editLink: true
title: figTextBounds
description: Measure the rendered bounds of a FIGlet string in grid cells.
category: Methods
api: true
owner: TextmodifierFigletExtensions
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.figlet.js](../../../index.md) / [TextmodifierFigletExtensions](../../TextmodifierFigletExtensions.md) / figTextBounds

# Method: figTextBounds()

```ts
figTextBounds(text, options?): object;
```

Measure the rendered bounds of a FIGlet string in grid cells.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | The text to measure. |
| `options?` | [`FigTextOptions`](../../FigTextOptions.md) | Optional layout overrides. |

## Returns

`object`

Width and height in grid cells.

| Name | Type |
| ------ | ------ |
| `cols` | `number` |
| `rows` | `number` |

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
	plugins: [FigletPlugin],
});
const labelLayer = t.layers.add();

let font,
	bounds = { cols: 0, rows: 0 };

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
	const x = left + 3;
	let y = top + 3;

	drawText('TEXTMODIFIER.FIGTEXTBOUNDS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TEXT BOUNDING BOX', x, y++, 100, 220, 255);
	drawText('Obtains precise text dimensions.', x, y++, 140, 160, 190);
	drawText('Enables pixel-perfect alignments.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (font) drawText('Bounds: ' + bounds.cols + 'x' + bounds.rows + ' cells', x, y++, 140, 255, 180);
	else drawText('Loading...', x, y++, 255, 180, 100);
});

t.draw(() => {
	t.background(8, 10, 18);
	if (!font) return;

	bounds = t.figTextBounds('BOUNDS');
	const w = bounds.cols,
		h = bounds.rows;
	const halfW = w >> 1,
		halfH = h >> 1,
		time = t.secs * 2;

	t.push();
	t.translate((w - 1) / 2 - halfW, (h - 1) / 2 - halfH);
	(t.char(' '), t.cellColor(15, 20, 30), t.rect(w + 2, h + 2));
	t.pop();

	// Draw scanline
	t.push();
	t.charColor(255, 80, 80, 150);
	const scanY = -halfH + Math.floor((time * 4) % h);
	for (let col = -halfW; col < -halfW + w; col++) t.print('~', col, scanY);
	t.pop();

	// Draw simple border using only '-' and '|'
	t.push();
	t.charColor(100, Math.round(150 + 105 * Math.sin(time)), 255);
	const l = -halfW - 1,
		r = -halfW + w,
		tRow = -halfH - 1,
		bRow = -halfH + h;
	for (let c = l; c <= r; c++) (t.print('-', c, tRow), t.print('-', c, bRow));
	for (let y = tRow + 1; y < bRow; y++) (t.print('|', l, y), t.print('|', r, y));
	t.pop();

	t.push();
	t.charColor(255, 255, 255);
	t.figText('BOUNDS', 0, 0);
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

