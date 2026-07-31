---
layout: doc
editLink: true
title: figText
description: Render a FIGlet string onto the current textmode grid using the active FIGlet font.
category: Methods
api: true
owner: TextmodifierFigletExtensions
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.figlet.js](../../../index.md) / [TextmodifierFigletExtensions](../../TextmodifierFigletExtensions.md) / figText

# Method: figText()

```ts
figText(
   text, 
   col, 
   row, 
   options?): void;
```

Render a FIGlet string onto the current textmode grid using the active FIGlet font.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | The text to render. |
| `col` | `number` | Target column in grid space. |
| `row` | `number` | Target row in grid space. |
| `options?` | [`FigTextOptions`](../../FigTextOptions.md) | Optional layout overrides. |

## Returns

`void`

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

	drawText('TEXTMODIFIER.FIGTEXT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: RENDERING FIGLET TEXT', x, y++, 100, 220, 255);
	drawText('Draws stylized text using active font.', x, y++, 140, 160, 190);
	drawText('Supports dynamic colors per cell.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (font) {
		drawText('Orbiting "TEXT" layout animation', x, y++, 140, 255, 180);
	} else {
		drawText('Loading font...', x, y++, 255, 180, 100);
	}
});

t.draw(() => {
	t.background(14, 10, 16);

	if (!font) return;

	const time = t.secs * 1.5;
	const ox = Math.floor(Math.cos(time) * 6);
	const oy = Math.floor(Math.sin(time) * 3);

	t.figText('TEXT', ox, oy, {
		horizontalLayout: 'fitted',
		charColor: (cell) => {
			const wave = 0.5 + 0.5 * Math.sin(time * 2.0 + cell.col * 0.1);
			return [Math.round(255 * wave), Math.round(180 * (1.0 - wave)), 255];
		},
	});
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

