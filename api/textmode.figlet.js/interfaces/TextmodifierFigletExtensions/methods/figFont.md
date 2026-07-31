---
layout: doc
editLink: true
title: figFont
description: Get the active FIGlet font used by figText().
category: Methods
api: true
owner: TextmodifierFigletExtensions
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.figlet.js](../../../index.md) / [TextmodifierFigletExtensions](../../TextmodifierFigletExtensions.md) / figFont

# Method: figFont()

## Call Signature

```ts
figFont(): TextmodeFigFont | undefined;
```

Get the active FIGlet font used by `figText()`.

### Returns

[`TextmodeFigFont`](../../../classes/TextmodeFigFont.md) \| `undefined`

The currently active FIGlet font, if any.

### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
	plugins: [FigletPlugin],
});

const labelLayer = t.layers.add();

let fontA;
let fontB;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.setup(async () => {
	fontA = await t.loadFigFont('https://cdn.jsdelivr.net/gh/xero/figlet-fonts@master/Bulbhead.flf');
	fontB = await t.loadFigFont('https://cdn.jsdelivr.net/gh/xero/figlet-fonts@master/Slant.flf');
	t.figTextAlign('center');
	t.figTextBaseline('center');
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODIFIER.FIGFONT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: GET/SET ACTIVE FIGFONT', x, y++, 100, 220, 255);
	drawText('Sets active font for figText calls.', x, y++, 140, 160, 190);
	drawText('Switching fonts updates render grid.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const active = t.figFont();
	if (active) {
		drawText(`Active font: ${active.name}`, x, y++, 140, 255, 180);
	} else {
		drawText('Loading fonts...', x, y++, 255, 180, 100);
	}
});

t.draw(() => {
	t.background(10, 15, 14);

	if (!fontA || !fontB) return;

	// Cycle font every 3 seconds
	const cycle = Math.floor(t.secs / 3.0) % 2;
	const currentFont = cycle === 0 ? fontA : fontB;
	t.figFont(currentFont);

	const time = t.secs * 1.5;

	t.figText('FONT', 0, 0, {
		horizontalLayout: 'fitted',
		charColor: (cell) => {
			const wave = 0.5 + 0.5 * Math.sin(time + cell.col * 0.1);
			return [Math.round(200 + 55 * wave), Math.round(150 + 105 * (1.0 - wave)), Math.round(100 + 155 * wave)];
		},
	});
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
figFont(font): void;
```

Set the active FIGlet font used by `figText()`.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `font` | [`TextmodeFigFont`](../../../classes/TextmodeFigFont.md) | The FIGlet font to use for subsequent text rendering. |

### Returns

`void`

