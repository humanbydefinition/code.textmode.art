---
layout: doc
editLink: true
title: figTextWidth
description: Measure the rendered width of a FIGlet string in grid cells.
category: Methods
api: true
owner: TextmodifierFigletExtensions
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.figlet.js](../../../index.md) / [TextmodifierFigletExtensions](../../TextmodifierFigletExtensions.md) / figTextWidth

# Method: figTextWidth()

```ts
figTextWidth(text, options?): number;
```

Measure the rendered width of a FIGlet string in grid cells.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | The text to measure. |
| `options?` | [`FigTextOptions`](../../FigTextOptions.md) | Optional layout overrides. |

## Returns

`number`

Width in grid cells.

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
let textWidth = 0;

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

	drawText('TEXTMODIFIER.FIGTEXTWIDTH', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: MEASURING RENDER WIDTH', x, y++, 100, 220, 255);
	drawText('Gets the exact grid width of text.', x, y++, 140, 160, 190);
	drawText('Accounts for horizontal layout modes.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (font) {
		drawText(`Measured width: ${textWidth} cells`, x, y++, 140, 255, 180);
	} else {
		drawText('Loading font...', x, y++, 255, 180, 100);
	}
});

t.draw(() => {
	t.background(10, 12, 16);

	if (!font) return;

	const layout = { horizontalLayout: 'fitted' };
	textWidth = t.figTextWidth('WIDTH', layout);

	const time = t.secs * 2.0;

	// Draw the FIGlet text
	t.figText('WIDTH', 0, -2, layout);

	// Draw a dynamic horizontal ruler matching the measured width
	const startX = -Math.floor(textWidth / 2);
	t.push();
	t.charColor(100, 255, 180);
	for (let i = 0; i < textWidth; i++) {
		t.push();
		t.translate(startX + i, 3);
		// Animate ruler characters
		const wave = Math.sin(time + i * 0.4);
		t.char(wave > 0 ? '█' : '▓');
		t.point();
		t.pop();
	}
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

