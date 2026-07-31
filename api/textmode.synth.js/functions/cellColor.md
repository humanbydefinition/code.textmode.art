---
layout: doc
editLink: true
title: cellColor
description: Create a synth source with cell background color defined.
category: Functions
api: true
kind: Function
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../index.md) / cellColor

# Function: cellColor()

## Call Signature

```ts
function cellColor(source): SynthSource;
```

Create a synth source with cell background color defined.

This function creates a SynthSource where the cell background color
is driven by the provided source pattern. This is compositional and can be
combined with `char()` and `charColor()`.

Accepts either a `SynthSource` (pattern) or RGBA values (solid color).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`SynthSource`](../classes/SynthSource.md) | A SynthSource producing color values |

### Returns

[`SynthSource`](../classes/SynthSource.md)

A new SynthSource configured with cell color

### Example

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

	drawText(`CELLCOLOR.CELLCOLOR`, x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CONCEPT: CELL COLORING`, x, y++, 100, 220, 255);
	drawText(`Renders dynamic cells backdrop.`, x, y++, 140, 160, 190);
	drawText(`Combines rainbow plasma with noise.`, x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`Cell: plasma | Char: noise thresh`, x, y++, 140, 255, 180);
});

t.synth(cellColor(plasma(6, 0.3).colorama(0.15)).char(noise(8, 0.2).thresh(0.5)));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
function cellColor(
   r, 
   g?, 
   b?, 
   a?): SynthSource;
```

Create a synth source with cell background color defined using RGBA values.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | [`SynthParameterValue`](../type-aliases/SynthParameterValue.md) | Red channel (0-1) or value |
| `g?` | [`SynthParameterValue`](../type-aliases/SynthParameterValue.md) | Green channel (0-1) or value |
| `b?` | [`SynthParameterValue`](../type-aliases/SynthParameterValue.md) | Blue channel (0-1) or value |
| `a?` | [`SynthParameterValue`](../type-aliases/SynthParameterValue.md) | Alpha channel (0-1) or value |

### Returns

[`SynthSource`](../classes/SynthSource.md)

A new SynthSource configured with cell color

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

	drawText('CELLCOLOR.CELLCOLOR2', x, y++, 110, 255, 170);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('TOP LEVEL CELL RGBA', x, y++, 120, 220, 255);
	drawText('Creates cell color first.', x, y++, 160, 180, 210);
	drawText('Glyphs are added after.', x, y++, 160, 180, 210);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('Separate animated ink and paper.', x, y++, 150, 255, 190);
});

const ink = osc(5, 0.018, 1.1).kaleid(4).color(0.45, 0.72, 1.0).modulate(noise(2.2, 0.018), 0.025);

t.synth(
	cellColor(0.02, breathe, breathe.offset(0.5), 1.0)
		.char(noise(4.5, 0.03).kaleid(5).rotate(turn, 0.002))
		.charMap(glyphs)
		.charColor(ink)
);

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
function cellColor(gray): SynthSource;
```

Create a synth source with cell background color defined using a grayscale value.

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

	drawText('CELLCOLOR.CELLCOLOR3', x, y++, 110, 255, 170);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('TOP LEVEL CELL GRAY', x, y++, 120, 220, 255);
	drawText('One value fills cells.', x, y++, 160, 180, 210);
	drawText('Animated ink adds color.', x, y++, 160, 180, 210);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('Separate animated ink and paper.', x, y++, 150, 255, 190);
});

const ink = plasma(4.2, 0.024, 0.0, 1.12).color(0.42, 1.0, 0.58).modulateRotate(noise(2.0, 0.015), 0.28, 0.04);

t.synth(
	cellColor([0.04, 0.2].fast(0.12).ease('easeInOutSine'))
		.char(plasma(4.4, 0.024, 0.1, 1.12).kaleid(5))
		.charMap(glyphs)
		.charColor(ink)
);

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

