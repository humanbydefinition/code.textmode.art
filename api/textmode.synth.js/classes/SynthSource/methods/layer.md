---
layout: doc
editLink: true
title: layer
description: Layer another source on top.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / layer

# Method: layer()

```ts
layer(source): this;
```

Layer another source on top.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Source to layer |

## Returns

`this`

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	plugins: [SynthPlugin],
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('SYNTHSOURCE.LAYER', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: ALPHA LAYER OVERLAY', x, y++, 100, 220, 255);
	drawText('Overlays source using its alpha.', x, y++, 140, 160, 190);
	drawText('Blends colors by transparency.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('Overlay: Rotated shape on base osc', x, y++, 140, 255, 180);
});

t.synth(
	osc(15, 0.1)
		.color(0.2, 0.4, 0.8)
		.layer(shape(5, 0.35, 0.1).rotate([0, 6.28].ease('linear')).color(1.0, 0.3, 0.5, 0.75))
		.charMap(' .:-=+*#%@')
		.cellColor(0.05, 0.05, 0.1)
);

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

