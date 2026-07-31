---
layout: doc
editLink: true
title: measureText
description: Measure rendered FIGlet text without drawing it.
category: Methods
api: true
owner: TextmodeFigFont
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.figlet.js](../../../index.md) / [TextmodeFigFont](../../TextmodeFigFont.md) / measureText

# Method: measureText()

```ts
measureText(text, options?): object;
```

Measure rendered FIGlet text without drawing it.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |
| `options` | [`FigTextOptions`](../../../interfaces/FigTextOptions.md) |

## Returns

`object`

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

let font;
let dimensions = { cols: 0, rows: 0 };

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

	drawText('TEXTMODEFIGFONT.MEASURETEXT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: OFFSCREEN TEXT MEASURE', x, y++, 100, 220, 255);
	drawText('Measures size without rendering cells.', x, y++, 140, 160, 190);
	drawText('Calculates columns and rows size.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (font) {
		const w = dimensions.cols;
		const h = dimensions.rows;
		drawText(`Size: ${w}x${h}`, x, y++, 140, 255, 180);
	} else {
		drawText('Measuring text...', x, y++, 255, 180, 100);
	}
});

t.draw(() => {
	t.background(10, 15, 12);

	if (!font) return;

	// Measure text size prior to drawing
	dimensions = font.measureText('MEASURE');

	const time = t.secs * 1.5;

	// Draw FIGlet text
	t.figText('MEASURE', 0, 0);

	// Draw measured frame
	const w = dimensions.cols;
	const h = dimensions.rows;
	const halfW = Math.floor(w / 2);
	const halfH = Math.floor(h / 2);

	t.push();
	t.charColor(255, 200, 100);
	for (let col = -halfW - 2; col <= -halfW + w + 1; col++) {
		const wave = Math.sin(time + col * 0.3);
		const borderChar = wave > 0 ? '=' : '-';
		t.print(borderChar, col, -halfH - 2);
		t.print(borderChar, col, -halfH + h + 1);
	}
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

