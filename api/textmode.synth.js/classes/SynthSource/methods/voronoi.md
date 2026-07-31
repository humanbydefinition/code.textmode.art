---
layout: doc
editLink: true
title: voronoi
description: Generate voronoi patterns.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / voronoi

# Method: voronoi()

```ts
voronoi(
   scale?, 
   speed?, 
   blending?): this;
```

Generate voronoi patterns.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `scale?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Scale of voronoi cells (default: 5.0) |
| `speed?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Animation speed (default: 0.3) |
| `blending?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Blending between cell regions (default: 0.3) |

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

	drawText(`SYNTHSOURCE.VORONOI`, x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CONCEPT: VORONOI CELLULAR FIELD`, x, y++, 100, 220, 255);
	drawText(`Dynamic cell distance mapping.`, x, y++, 140, 160, 190);
	drawText(`Organic noise-modulated crystal cells.`, x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`Cells: 5-15 Eased | Modulate: noise`, x, y++, 140, 255, 180);
});

t.synth(voronoi([5, 15].ease('easeInOutCubic'), 0.15, 0.5).modulate(noise(4), 0.2).colorama(0.1));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

