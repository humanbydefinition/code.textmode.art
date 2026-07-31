---
layout: doc
editLink: true
title: levels
description: Adjust input/output levels and gamma for precise tonal control.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / levels

# Method: levels()

```ts
levels(
   inMin?, 
   inMax?, 
   outMin?, 
   outMax?, 
   gamma?): this;
```

Adjust input/output levels and gamma for precise tonal control.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inMin?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Input minimum (default: 0.0) |
| `inMax?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Input maximum (default: 1.0) |
| `outMin?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Output minimum (default: 0.0) |
| `outMax?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Output maximum (default: 1.0) |
| `gamma?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Gamma correction (default: 1.0) |

## Returns

`this`

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
	plugins: [SynthPlugin],
});

t.bpm(18);

const labelLayer = t.layers.add();
const glyphs = ' .:-=+*#%@';

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

	drawText('SYNTHSOURCE.LEVELS', x, y++, 110, 255, 170);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('TONAL REMAPPING', x, y++, 120, 220, 255);
	drawText('Input range maps to output.', x, y++, 160, 180, 210);
	drawText('Gamma breathes gently.', x, y++, 160, 180, 210);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('Separate animated ink and paper.', x, y++, 150, 255, 190);
});

const ink = plasma(4.2, 0.024, 0.0, 1.12).color(0.42, 1.0, 0.58).modulateRotate(noise(2.0, 0.015), 0.28, 0.04);
const paper = moire(6, 7, 0.0, 1.57, 0.018).color(0.025, 0.13, 0.065).softlight(noise(2.0, 0.014), 0.18);

t.synth(
	gradient(0.018)
		.modulateKaleid(noise(2.4, 0.014), 5)
		.colorama(0.12)
		.levels(0.12, 0.88, 0.03, 1.0, [0.8, 1.25].fast(0.12).ease('easeInOutSine'))
		.contrast(1.1)
		.charMap(glyphs)
		.charColor(ink)
		.cellColor(paper)
);

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

