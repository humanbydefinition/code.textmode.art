---
layout: doc
editLink: true
title: renderText
description: Render a string into a FIGlet sub-character grid.
category: Methods
api: true
owner: TextmodeFigFont
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.figlet.js](../../../index.md) / [TextmodeFigFont](../../TextmodeFigFont.md) / renderText

# Method: renderText()

```ts
renderText(text, options?): FigTextResult;
```

Render a string into a FIGlet sub-character grid.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |
| `options` | [`FigTextOptions`](../../../interfaces/FigTextOptions.md) |

## Returns

`FigTextResult`

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
let rendered;

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
	rendered = font.renderText('GRID');
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEFIGFONT.RENDERTEXT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: 2D GRID RENDERING', x, y++, 100, 220, 255);
	drawText('Renders font directly to a 2D grid.', x, y++, 140, 160, 190);
	drawText('Returns grid rows and cols size.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (font && rendered) {
		drawText(`Grid: ${rendered.cols}x${rendered.rows}`, x, y++, 140, 255, 180);
	} else {
		drawText('Rendering text grid...', x, y++, 255, 180, 100);
	}
});

t.draw(() => {
	t.background(15, 10, 12);

	if (!font || !rendered) return;

	const time = t.secs * 1.5;
	const startX = -Math.floor(rendered.cols / 2);
	const startY = -Math.floor(rendered.rows / 2);

	for (let row = 0; row < rendered.grid.length; row++) {
		for (let col = 0; col < rendered.grid[row].length; col++) {
			const char = rendered.grid[row][col];
			if (char === ' ') continue;

			t.push();
			t.translate(startX + col, startY + row);
			// Color waves on grid cells
			const wave = 0.5 + 0.5 * Math.sin(time + col * 0.15 + row * 0.3);
			t.charColor(Math.round(255 * wave), Math.round(120 + 135 * (1.0 - wave)), 200);
			t.char(char);
			t.point();
			t.pop();
		}
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

