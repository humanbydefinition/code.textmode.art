---
layout: doc
editLink: true
title: loadFont
description: Load a font into this layer from a URL/path or existing TextmodeFont.
category: Methods
api: true
owner: TextmodeLayer
namespace: layering
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../../../index.md) / [layering](../../../index.md) / [TextmodeLayer](../../TextmodeLayer.md) / loadFont

# Method: loadFont()

```ts
loadFont(fontSource): Promise<TextmodeFont>;
```

Load a font into this layer from a URL/path or existing [TextmodeFont](../../../../fonts/classes/TextmodeFont.md).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fontSource` | `string` \| [`TextmodeFont`](../../../../fonts/classes/TextmodeFont.md) | Font URL/path or TextmodeFont to fork from. |

## Returns

`Promise`\<[`TextmodeFont`](../../../../fonts/classes/TextmodeFont.md)\>

The loaded TextmodeFont.

## Example

```javascript
const t = textmode.create({
	pixelDensity: 1,
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const detailedLayer = t.layers.add({ blendMode: 'screen' });
const labelLayer = t.layers.add();

function drawText(text, x, y, rgb = [255, 255, 255]) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(rgb[0], rgb[1], rgb[2]);
	t.print(text, x, y);
	t.pop();
}

t.setup(async () => {
	await detailedLayer.loadFont('../../primitives/FROGBLOCK-V2.1.ttf');
});

t.draw(() => {
	t.background(6, 10, 22);

	t.push();
	t.translate(0, 0);
	t.charColor(40, 50, 80);
	t.char('#');
	t.rect(14, 8);
	t.pop();
});

detailedLayer.draw(() => {
	t.clear();

	t.push();
	t.translate(0, 0);
	t.charColor(255, 225, 140, 180);
	t.char('0'); // A distinctive glyph in Frogblock
	t.rect(8, 4);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODELAYER.LOADFONT', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: LOAD FONT PER LAYER', x, y++, [100, 220, 255]);
	drawText('Base keeps the default font.', x, y++, [140, 160, 190]);
	drawText('Overlay loads Frogblock.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('BASE: URSA DEFAULT', x, y++, [140, 180, 255]);
	drawText('LAYER: FROGBLOCK', x, y++, [255, 225, 140]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
