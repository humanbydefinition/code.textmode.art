---
layout: doc
editLink: true
title: paint
description: Create a synth source with both character and cell colors defined.
category: Functions
api: true
kind: Function
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../index.md) / paint

# Function: paint()

## Call Signature

```ts
function paint(source): SynthSource;
```

Create a synth source with both character and cell colors defined.

This function creates a SynthSource where both the character foreground color
and the cell background color are driven by the same source pattern.

Accepts either a `SynthSource` (pattern) or RGBA values (solid color).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`SynthSource`](../classes/SynthSource.md) | A SynthSource producing color values |

### Returns

[`SynthSource`](../classes/SynthSource.md)

A new SynthSource configured with both color sources

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

	drawText('PAINT.PAINT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: COMPOSITE PAINT SOURCE', x, y++, 100, 220, 255);
	drawText('Paints cells and glyphs from source.', x, y++, 140, 160, 190);
	drawText('Feeds single pattern to all channels.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('Source: osc color | Char: noise', x, y++, 140, 255, 180);
});

t.synth(paint(osc(10, 0.1).color(0.2, 0.8, 0.9)).char(noise(8, 0.15)));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
function paint(
   r, 
   g?, 
   b?, 
   a?): SynthSource;
```

Create a synth source with both character and cell colors defined using RGBA values.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | [`SynthParameterValue`](../type-aliases/SynthParameterValue.md) | Red channel (0-1) or value |
| `g?` | [`SynthParameterValue`](../type-aliases/SynthParameterValue.md) | Green channel (0-1) or value |
| `b?` | [`SynthParameterValue`](../type-aliases/SynthParameterValue.md) | Blue channel (0-1) or value |
| `a?` | [`SynthParameterValue`](../type-aliases/SynthParameterValue.md) | Alpha channel (0-1) or value |

### Returns

[`SynthSource`](../classes/SynthSource.md)

A new SynthSource configured with both color sources

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

	drawText('PAINT.PAINT2', x, y++, 110, 255, 170);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('TOP LEVEL PAINT SOURCE', x, y++, 120, 220, 255);
	drawText('paint(source) owns colors.', x, y++, 160, 180, 210);
	drawText('char(source) chooses glyphs.', x, y++, 160, 180, 210);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('No separate color-channel methods.', x, y++, 150, 255, 190);
});

const paintField = osc(7, 0.016, 1.4)
	.kaleid(6)
	.color(0.28, 0.76, 1.0)
	.modulate(plasma(2.6, 0.014, 0.1, 1.1), 0.025);
const glyphField = osc(9, 0.018, 1.2).kaleid(5).modulate(noise(2.2, 0.012), 0.018).levels(0.18, 0.88, 0.04, 1.0, 0.9);

t.synth(paint(paintField).char(glyphField).charMap(glyphs));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
function paint(gray): SynthSource;
```

Create a synth source with both character and cell colors defined using a grayscale value.

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

	drawText('PAINT.PAINT3', x, y++, 110, 255, 170);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('TOP LEVEL PAINT TEXTURE', x, y++, 120, 220, 255);
	drawText('paint(source) fills both layers.', x, y++, 160, 180, 210);
	drawText('char(source) sculpts glyphs.', x, y++, 160, 180, 210);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('No separate color-channel methods.', x, y++, 150, 255, 190);
});

const paintField = plasma(3.8, 0.02, 0.3, 1.14)
	.colorama(0.12)
	.softlight(osc(10, 0.012, 0.7).color(1.0, 0.55, 0.32), 0.28);
const glyphField = noise(4.5, 0.018)
	.modulateKaleid(osc(2.6, 0.008), 5)
	.levels(0.18, 0.86, 0.05, 1.0, 0.82)
	.contrast(1.12);

t.synth(paint(paintField).char(glyphField).charMap(glyphs));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

