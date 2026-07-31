---
layout: doc
editLink: true
title: useTileColors
description: Configure authored tileset color preservation on the base layer.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / useTileColors

# Method: useTileColors()

```ts
useTileColors(enabled?): boolean | void;
```

Configure authored tileset color preservation on the base layer.

This is equivalent to calling [TextmodeLayer.useTileColors](../../../namespaces/layering/classes/TextmodeLayer/methods/useTileColors.md) on the base layer.

When disabled (default), tilesets on the base layer are recolored through the current
character (`charColor`) and cell (`cellColor`) colors.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `enabled?` | `boolean` | Whether to preserve authored tileset colors. |

## Returns

`boolean` \| `void`

Current base-layer tileset-color mode when called without arguments.

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let authored = false;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	authored = Math.floor(t.frameCount / 120) % 2 === 0;
	t.useTileColors(authored);
	t.char(65);
	t.charColor(255, 210, 120);
	t.rect(12, 5);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.USETILECOLORS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TILE COLORS', x, y++, 100, 220, 255);
	drawText('Toggles authored tile color.', x, y++, 140, 160, 190);
	drawText('charColor handles recolor mode.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(authored ? 'MODE: AUTHORED' : 'MODE: RECOLOR', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

