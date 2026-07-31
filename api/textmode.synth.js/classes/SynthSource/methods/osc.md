---
layout: doc
editLink: true
title: osc
description: Generate oscillating patterns using sine waves.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / osc

# Method: osc()

```ts
osc(
   frequency?, 
   sync?, 
   offset?): this;
```

Generate oscillating patterns using sine waves.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `frequency?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Frequency of the oscillation (default: 60.0) |
| `sync?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Synchronization offset (default: 0.1) |
| `offset?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Phase offset (default: 0.0) |

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

	drawText(`SYNTHSOURCE.OSC`, x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CONCEPT: SINE WAVE OSCILLATOR`, x, y++, 100, 220, 255);
	drawText(`Generates periodic band patterns.`, x, y++, 140, 160, 190);
	drawText(`Params: frequency, sync, offset.`, x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`Freq: 12 | Sync: 0.15`, x, y++, 140, 255, 180);
});

t.synth(osc(12, 0.15, [0.5, 2.0].ease('easeInOutQuad')).kaleid([3, 7].ease('easeInOutCubic')).color(0.9, 0.25, 1.2));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

