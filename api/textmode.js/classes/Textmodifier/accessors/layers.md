---
layout: doc
editLink: true
title: layers
description: Layer manager for this Textmodifier instance.
category: Accessors
api: true
owner: Textmodifier
kind: Accessor
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / layers

# Accessor: layers

## Get Signature

```ts
get layers(): TextmodeLayerManager;
```

Layer manager for this Textmodifier instance.

Use this to create and manage multiple layers within the textmode rendering context.
Each layer has its own grid, font, draw callback, and filters.

### Returns

[`TextmodeLayerManager`](../../../namespaces/layering/classes/TextmodeLayerManager.md)

### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

const topLayer = t.layers.add({ blendMode: 'additive' });

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

topLayer.draw(() => {
	t.clear();
	t.char('+');
	t.charColor(255, 210, 120);
	t.rect(8, 4);
});

t.draw(() => {
	t.background(6, 10, 22);
	t.char('#');
	t.charColor(140, 220, 255);
	t.rect(12, 5);
	topLayer.offset(Math.sin(t.frameCount * 0.03) * 30, 0);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.LAYERS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LAYER MANAGER', x, y++, 100, 220, 255);
	drawText('Accesses the layer stack.', x, y++, 140, 160, 190);
	drawText('Overlay layer moves in pixels.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`LAYERS: ${t.layers.all.length}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

