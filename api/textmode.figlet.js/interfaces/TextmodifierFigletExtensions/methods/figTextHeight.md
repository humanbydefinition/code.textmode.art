---
layout: doc
editLink: true
title: figTextHeight
description: Measure the rendered height of a FIGlet string in grid cells.
category: Methods
api: true
owner: TextmodifierFigletExtensions
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.figlet.js](../../../index.md) / [TextmodifierFigletExtensions](../../TextmodifierFigletExtensions.md) / figTextHeight

# Method: figTextHeight()

```ts
figTextHeight(text, options?): number;
```

Measure the rendered height of a FIGlet string in grid cells.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | The text to measure. |
| `options?` | [`FigTextOptions`](../../FigTextOptions.md) | Optional layout overrides. |

## Returns

`number`

Height in grid cells.

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
let textHeight = 0;

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

	drawText('TEXTMODIFIER.FIGTEXTHEIGHT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: MEASURING RENDER HEIGHT', x, y++, 100, 220, 255);
	drawText('Gets the exact grid height of text.', x, y++, 140, 160, 190);
	drawText('Useful for vertical layouts.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (font) {
		drawText(`Measured height: ${textHeight} cells`, x, y++, 140, 255, 180);
	} else {
		drawText('Loading font...', x, y++, 255, 180, 100);
	}
});

t.draw(() => {
	t.background(10, 10, 14);

	if (!font) return;

	textHeight = t.figTextHeight('HEIGHT');

	const time = t.secs * 2.0;

	// Draw the FIGlet text
	t.figText('HEIGHT', 0, 0);

	// Draw vertical rulers on the sides
	const halfH = Math.floor(textHeight / 2);
	t.push();
	t.charColor(180, 100, 255);
	for (let i = 0; i < textHeight; i++) {
		// Left ruler at x = -20, right ruler at x = 20
		const yPos = -halfH + i;
		const wave = Math.sin(time + i * 0.4);
		const charToUse = wave > 0 ? '█' : '▒';

		t.push();
		t.translate(-22, yPos);
		t.char(charToUse);
		t.point();
		t.pop();

		t.push();
		t.translate(22, yPos);
		t.char(charToUse);
		t.point();
		t.pop();
	}
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

