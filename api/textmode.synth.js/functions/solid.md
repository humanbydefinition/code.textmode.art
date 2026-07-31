---
layout: doc
editLink: true
title: solid
description: Generate a solid grayscale color.
category: Functions
api: true
kind: Function
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../index.md) / solid

# Function: solid()

## Call Signature

```ts
function solid(gray): SynthSource;
```

Generate a solid grayscale color.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gray` | [`SynthParameterValue`](../type-aliases/SynthParameterValue.md) | Grayscale value (0-1) |

### Returns

[`SynthSource`](../classes/SynthSource.md)

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

	drawText('SYNTHSOURCE.SOLID', x, y++, 110, 255, 170);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('GRAYSCALE SOURCE', x, y++, 120, 220, 255);
	drawText('A constant becomes canvas.', x, y++, 160, 180, 210);
	drawText('Channels add visible motion.', x, y++, 160, 180, 210);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('Separate animated ink and paper.', x, y++, 150, 255, 190);
});

const ink = plasma(4.2, 0.024, 0.0, 1.12).color(0.42, 1.0, 0.58).modulateRotate(noise(2.0, 0.015), 0.28, 0.04);
const paper = moire(6, 7, 0.0, 1.57, 0.018).color(0.025, 0.13, 0.065).softlight(noise(2.0, 0.014), 0.18);

t.synth(
	solid([0.06, 0.18].fast(0.1).ease('easeInOutSine'))
		.blend(osc(9, 0.014).kaleid(5), 0.34)
		.modulate(noise(2.0, 0.014), 0.018)
		.contrast(1.12)
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
function solid(
   r?, 
   g?, 
   b?, 
   a?): SynthSource;
```

Generate a solid color.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r?` | [`SynthParameterValue`](../type-aliases/SynthParameterValue.md) | Red channel (0-1, default: 0.0) |
| `g?` | [`SynthParameterValue`](../type-aliases/SynthParameterValue.md) | Green channel (0-1, default: 0.0) |
| `b?` | [`SynthParameterValue`](../type-aliases/SynthParameterValue.md) | Blue channel (0-1, default: 0.0) |
| `a?` | [`SynthParameterValue`](../type-aliases/SynthParameterValue.md) | Alpha channel (0-1, default: 1.0) |

### Returns

[`SynthSource`](../classes/SynthSource.md)

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

	drawText('SYNTHSOURCE.SOLID2', x, y++, 110, 255, 170);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('RGBA SOURCE', x, y++, 120, 220, 255);
	drawText('Four constants set color.', x, y++, 160, 180, 210);
	drawText('Motion comes from channels.', x, y++, 160, 180, 210);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('Separate animated ink and paper.', x, y++, 150, 255, 190);
});

const ink = moire(8, 9, 0.15, 1.6, 0.025).color(1.0, 0.62, 0.34).modulate(noise(2.3, 0.018), 0.022);
const paper = noise(3.0, 0.025).color(0.16, 0.055, 0.025).softlight(osc(4, 0.016), 0.22);

t.synth(
	solid(0.04, breathe.offset(0.2), breathe.offset(0.55), 1.0)
		.overlay(voronoi(3.4, 0.04, 0.24).color(1.0, 0.45, 0.25), 0.28)
		.modulateScale(noise(2.0, 0.014), 0.2, 0.95)
		.contrast(1.12)
		.charMap(glyphs)
		.charColor(ink)
		.cellColor(paper)
);

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

