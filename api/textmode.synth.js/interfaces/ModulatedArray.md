---
layout: doc
editLink: true
title: ModulatedArray
description: Extended array interface with modulation methods.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-07-31
isInterface: true
---

[textmode.synth.js](../index.md) / ModulatedArray

# Interface: ModulatedArray

Extended array interface with modulation methods.

Arrays in textmode.synth.js behave like hydra - they cycle through values over time,
creating dynamic, time-varying parameters. This enables complex animations without
manually tracking time or state.

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

	drawText(`MODULATEDARRAY.ARRAYS`, x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CONCEPT: POLYRHYTHMIC CYCLING`, x, y++, 100, 220, 255);
	drawText(`Cycles multiple params via arrays.`, x, y++, 140, 160, 190);
	drawText(`Polyrhythmic dynamic step motion.`, x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`Polyrhythms: Freq, Segment, Color`, x, y++, 140, 255, 180);
});

t.synth(
	osc([8, 16, 32], 0.1, [0.5, 1.5])
		.kaleid([3, 5, 8])
		.color([1, 0].ease('linear'), [0, 1].ease('linear'), [0.5, 0.8].ease('linear'))
);

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Extends

- `Array`\<`number`\>

## Indexable

```ts
[n: number]: number
```

## Methods

| Method | Description |
| ------ | ------ |
| [fast](ModulatedArray/methods/fast.md) | Set speed multiplier for array cycling. |
| [smooth](ModulatedArray/methods/smooth.md) | Enable smooth interpolation between array values. |
| [ease](ModulatedArray/methods/ease.md) | Apply easing function to interpolation between array values. |
| [offset](ModulatedArray/methods/offset.md) | Set time offset for array cycling. |
| [fit](ModulatedArray/methods/fit.md) | Fit (remap) array values to a new range. |
