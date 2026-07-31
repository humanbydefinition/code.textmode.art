---
layout: doc
editLink: true
title: noise
description: Generate Perlin noise patterns.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / noise

# Method: noise()

```ts
noise(scale?, speed?): this;
```

Generate Perlin noise patterns.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `scale?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Scale of the noise pattern (default: 10.0) |
| `speed?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Animation speed (default: 0.1) |

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

	drawText(`SYNTHSOURCE.NOISE`, x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CONCEPT: PERLIN NOISE FIELD`, x, y++, 100, 220, 255);
	drawText(`Generates organic, fluid-like noise.`, x, y++, 140, 160, 190);
	drawText(`Smooth pseudo-random spatial field.`, x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`Octaves: 8 | Falloff: 0.2`, x, y++, 140, 255, 180);
});

t.synth(noise(8, 0.2).colorama(0.5).pixelate([16, 32].ease('easeInOutSine')));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

