---
layout: doc
editLink: true
title: modulatePixelate
description: Modulate pixelation using another source.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / modulatePixelate

# Method: modulatePixelate()

```ts
modulatePixelate(
   source, 
   multiple?, 
   offset?): this;
```

Modulate pixelation using another source.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Modulation source |
| `multiple?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Pixelation multiplier (default: 10.0) |
| `offset?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Offset amount (default: 3.0) |

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
const turn = [-0.42, 0.42].fast(0.14).ease('easeInOutSine');

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

	drawText('SYNTHSOURCE.MODPIXEL', x, y++, 110, 255, 170);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('VARIABLE PIXEL GRID', x, y++, 120, 220, 255);
	drawText('A source controls cell size.', x, y++, 160, 180, 210);
	drawText('Mosaic waves pass slowly.', x, y++, 160, 180, 210);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('Separate animated ink and paper.', x, y++, 150, 255, 190);
});

const ink = osc(5, 0.018, 1.1).kaleid(4).color(0.45, 0.72, 1.0).modulate(noise(2.2, 0.018), 0.025);
const paper = plasma(3.6, 0.028, 0.1, 1.05).color(0.03, 0.08, 0.18).modulateScale(noise(2.0, 0.015), 0.22, 0.95);

t.synth(
	gradient(0.018)
		.modulatePixelate(noise(3.0, 0.025), [10, 32].fast(0.12).ease('easeInOutSine'), 6)
		.colorama(0.08)
		.overlay(osc(5, 0.014).rotate(turn), 0.22)
		.contrast(1.12)
		.charMap(glyphs)
		.charColor(ink)
		.cellColor(paper)
);

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

