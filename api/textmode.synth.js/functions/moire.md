---
layout: doc
editLink: true
title: moire
description: Generate moire interference patterns.
category: Functions
api: true
kind: Function
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../index.md) / moire

# Function: moire()

```ts
function moire(
   freqA?, 
   freqB?, 
   angleA?, 
   angleB?, 
   speed?, 
   phase?): SynthSource;
```

Generate moire interference patterns.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `freqA?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Frequency of first grating (default: 20.0) |
| `freqB?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Frequency of second grating (default: 21.0) |
| `angleA?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Angle of first grating in radians (default: 0.0) |
| `angleB?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Angle of second grating in radians (default: 1.5708) |
| `speed?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Animation speed (default: 0.1) |
| `phase?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Phase offset (default: 0.0) |

## Returns

[`SynthSource`](../classes/SynthSource.md)

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

	drawText(`SYNTHSOURCE.MOIRE`, x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CONCEPT: MOIRE INTERFERENCE`, x, y++, 100, 220, 255);
	drawText(`Creates optical interference grids.`, x, y++, 140, 160, 190);
	drawText(`Combines rotating high-frequency waves.`, x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`Freq: 15 | Scale: 0.1 | Mod: Mult`, x, y++, 140, 255, 180);
});

t.synth(
	moire(15, 0.1, 0.8)
		.mult(osc(8, -0.05, 1.2).rotate(1.5))
		.color(0.2, 0.7, 1.0)
);

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

