---
layout: doc
editLink: true
title: loadFigFont
description: Load a FIGlet font from a .flf file URL or path.
category: Methods
api: true
owner: TextmodifierFigletExtensions
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.figlet.js](../../../index.md) / [TextmodifierFigletExtensions](../../TextmodifierFigletExtensions.md) / loadFigFont

# Method: loadFigFont()

```ts
loadFigFont(source): Promise<TextmodeFigFont>;
```

Load a FIGlet font from a `.flf` file URL or path.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | `string` \| `URL` | The `.flf` file source. |

## Returns

`Promise`\<[`TextmodeFigFont`](../../../classes/TextmodeFigFont.md)\>

A parsed FIGlet font instance.

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
let bounds;

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
	bounds = t.figTextBounds('LOAD', { horizontalLayout: 'fitted' });
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODIFIER.LOADFIGFONT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: DYNAMIC FONT LOADING', x, y++, 100, 220, 255);
	drawText('Loads any standard FIGlet font file.', x, y++, 140, 160, 190);
	drawText('Parses the font headers and layouts.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (font) {
		drawText(`Active: ${font.name}`, x, y++, 140, 255, 180);
	} else {
		drawText('Downloading .flf font...', x, y++, 255, 180, 100);
	}
});

t.draw(() => {
	t.background(10, 10, 16);

	if (!font || !bounds) return;

	const time = t.secs * 1.5;
	const scale = 0.5 + 0.5 * Math.sin(time);

	t.figText('LOAD', 0, 0, {
		horizontalLayout: 'fitted',
		charColor: (cell) => {
			const colorScale = (cell.col + bounds.cols / 2) / bounds.cols;
			return [Math.round(255 * colorScale), Math.round(100 + 155 * scale), Math.round(255 * (1.0 - colorScale))];
		},
	});
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

