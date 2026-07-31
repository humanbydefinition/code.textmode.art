---
layout: doc
editLink: true
title: charColor
description: Create a synth source with character foreground color defined.
category: Functions
api: true
kind: Function
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../index.md) / charColor

# Function: charColor()

## Call Signature

```ts
function charColor(source): SynthSource;
```

Create a synth source with character foreground color defined.

This function creates a SynthSource where the character foreground color
is driven by the provided source pattern. This is compositional and can be
combined with `char()` and `cellColor()`.

Accepts either a `SynthSource` (pattern) or RGBA values (solid color).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`SynthSource`](../classes/SynthSource.md) | A SynthSource producing color values |

### Returns

[`SynthSource`](../classes/SynthSource.md)

A new SynthSource configured with character color

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

	drawText(`CHARCOLOR.CHARCOLOR`, x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CONCEPT: GLYPH CHARACTER COLOR`, x, y++, 100, 220, 255);
	drawText(`Colors glyph foregrounds only.`, x, y++, 140, 160, 190);
	drawText(`Draws a dark neutral background.`, x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`Mode: Char Color Only`, x, y++, 140, 255, 180);
});

t.synth(charColor(osc(6, 0.1, 1.2).invert()).char(noise(6)));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
function charColor(
   r, 
   g?, 
   b?, 
   a?): SynthSource;
```

Create a synth source with character foreground color defined using RGBA values.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | [`SynthParameterValue`](../type-aliases/SynthParameterValue.md) | Red channel (0-1) or value |
| `g?` | [`SynthParameterValue`](../type-aliases/SynthParameterValue.md) | Green channel (0-1) or value |
| `b?` | [`SynthParameterValue`](../type-aliases/SynthParameterValue.md) | Blue channel (0-1) or value |
| `a?` | [`SynthParameterValue`](../type-aliases/SynthParameterValue.md) | Alpha channel (0-1) or value |

### Returns

[`SynthSource`](../classes/SynthSource.md)

A new SynthSource configured with character color

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

	drawText('CHARCOLOR.CHARCOLOR2', x, y++, 110, 255, 170);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('TOP LEVEL INK RGBA', x, y++, 120, 220, 255);
	drawText('Creates glyph color first.', x, y++, 160, 180, 210);
	drawText('Cells remain source driven.', x, y++, 160, 180, 210);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('Separate animated ink and paper.', x, y++, 150, 255, 190);
});

const paper = noise(3.0, 0.025).color(0.16, 0.055, 0.025).softlight(osc(4, 0.016), 0.22);

t.synth(
	charColor(breathe, breathe.offset(0.3), 0.18, 1.0)
		.char(noise(4.2, 0.028).kaleid(5).rotate(turn, 0.002))
		.charMap(glyphs)
		.cellColor(paper)
);

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
function charColor(gray): SynthSource;
```

Create a synth source with character foreground color defined using a grayscale value.

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

	drawText('CHARCOLOR.CHARCOLOR3', x, y++, 110, 255, 170);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('TOP LEVEL INK GRAY', x, y++, 120, 220, 255);
	drawText('One value controls ink.', x, y++, 160, 180, 210);
	drawText('Cell color still moves.', x, y++, 160, 180, 210);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('Separate animated ink and paper.', x, y++, 150, 255, 190);
});

const paper = plasma(3.6, 0.028, 0.1, 1.05).color(0.03, 0.08, 0.18).modulateScale(noise(2.0, 0.015), 0.22, 0.95);

t.synth(
	charColor([0.36, 0.92].fast(0.12).ease('easeInOutSine'))
		.char(moire(7, 8, 0.15, 1.5, 0.018))
		.charMap(glyphs)
		.cellColor(paper)
);

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

