---
layout: doc
editLink: true
title: fit
description: Fit (remap) array values to a new range.
category: Methods
api: true
owner: ModulatedArray
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [ModulatedArray](../../ModulatedArray.md) / fit

# Method: fit()

```ts
fit(low, high): ModulatedArray;
```

Fit (remap) array values to a new range.

Takes the minimum and maximum values in the array and linearly maps them
to the specified low and high values. All intermediate values are scaled
proportionally. The original array is not modified.

Preserves any modulation settings (speed, smooth, ease, offset) from the
original array.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `low` | `number` | New minimum value |
| `high` | `number` | New maximum value |

## Returns

[`ModulatedArray`](../../ModulatedArray.md)

A new ModulatedArray with remapped values

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

	drawText('MODULATEDARRAY.FIT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: RANGE FITTING', x, y++, 100, 220, 255);
	drawText('Fits cycling inputs to new bounds.', x, y++, 140, 160, 190);
	drawText('Scales values to custom ranges.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('Fit: Rotation & Scale dynamic bounds', x, y++, 140, 255, 180);
});

t.synth(osc(12, 0.1).rotate([0, 1].fit(-3.14, 3.14)).scale([0, 1].fit(0.5, 2.5)).color(0.9, 0.2, 0.6));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

