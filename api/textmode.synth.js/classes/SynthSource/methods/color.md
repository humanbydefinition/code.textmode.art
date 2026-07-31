---
layout: doc
editLink: true
title: color
description: Multiply all channels by a scalar value (grayscale).
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / color

# Method: color()

## Call Signature

```ts
color(gray): this;
```

Multiply all channels by a scalar value (grayscale).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gray` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Scalar multiplier |

### Returns

`this`

### Example

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
const slow = [0.0, 1.0].fast(0.16).ease('easeInOutSine');
const breathe = [0.22, 0.78].fast(0.18).ease('easeInOutSine');
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

	drawText('SYNTHSOURCE.COLOR', x, y++, 110, 255, 170);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('MULTIPLY BY GRAYSCALE', x, y++, 120, 220, 255);
	drawText('Gray gain breathes slowly.', x, y++, 160, 180, 210);
	drawText('Color channels stay separate.', x, y++, 160, 180, 210);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('Separate animated ink and paper.', x, y++, 150, 255, 190);
});

const ink = osc(6, 0.018, 1.6).rotate(turn, 0.002).color(0.9, 0.58, 1.0).modulateKaleid(noise(2.0, 0.014), 5);
const paper = plasma(3.2, 0.024, 0.2, 1.08).color(0.08, 0.035, 0.16).hue(slow);

t.synth(
	osc(11, 0.02, 1.2)
		.rotate(turn, 0.002)
		.kaleid(5)
		.color(breathe)
		.mult(noise(2.5, 0.018), 0.36)
		.contrast(1.18)
		.charMap(glyphs)
		.charColor(ink)
		.cellColor(paper)
);

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
color(
   r?, 
   g?, 
   b?, 
   a?): this;
```

Colorize a grayscale source or multiply an existing color source.

This is the recommended way to add color to grayscale sources like `osc()`,
`noise()`, or `voronoi()`.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Red channel multiplier (default: 1.0) |
| `g?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Green channel multiplier (default: 1.0) |
| `b?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Blue channel multiplier (default: 1.0) |
| `a?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Alpha channel multiplier (default: 1.0) |

### Returns

`this`

### Example

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
const breathe = [0.22, 0.78].fast(0.18).ease('easeInOutSine');

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

	drawText('SYNTHSOURCE.COLOR2', x, y++, 110, 255, 170);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('MULTIPLY BY RGBA', x, y++, 120, 220, 255);
	drawText('Each color channel eases.', x, y++, 160, 180, 210);
	drawText('Phase offsets avoid flashing.', x, y++, 160, 180, 210);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('Separate animated ink and paper.', x, y++, 150, 255, 190);
});

const ink = osc(5, 0.018, 1.1).kaleid(4).color(0.45, 0.72, 1.0).modulate(noise(2.2, 0.018), 0.025);
const paper = plasma(3.6, 0.028, 0.1, 1.05).color(0.03, 0.08, 0.18).modulateScale(noise(2.0, 0.015), 0.22, 0.95);

t.synth(
	plasma(4.4, 0.024, 0.0, 1.14)
		.modulate(noise(2.4, 0.016), 0.03)
		.color(breathe, breathe.offset(0.33), breathe.offset(0.66), 1.0)
		.overlay(osc(7, 0.016).kaleid(4), 0.24)
		.contrast(1.16)
		.charMap(glyphs)
		.charColor(ink)
		.cellColor(paper)
);

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

