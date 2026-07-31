---
layout: doc
editLink: true
title: paint
description: Set both character foreground and cell background color using the same source chain. This is a convenience method that combines .charColor() and .cellColor()...
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / paint

# Method: paint()

## Call Signature

```ts
paint(source): this;
```

Set both character foreground and cell background color using the same source chain.
This is a convenience method that combines `.charColor()` and `.cellColor()` in one call.

After calling `paint()`, you can still override the cell color separately using `.cellColor()`.

Otherwise useful for pixel art styles where both colors are the same, making the characters redundant.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`SynthSource`](../../SynthSource.md) | A SynthSource producing color values |

### Returns

`this`

The SynthSource for chaining

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

	drawText('SYNTHSOURCE.PAINT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: COMPOSITE PAINT METHOD', x, y++, 100, 220, 255);
	drawText('Paints cells and glyphs from source.', x, y++, 140, 160, 190);
	drawText('Uses separate plasma source values.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('Char & Cell: plasma | Base: osc', x, y++, 140, 255, 180);
});

t.synth(osc(8, 0.1).paint(plasma(6, 0.3).colorama(0.1)));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
paint(
   r, 
   g?, 
   b?, 
   a?): this;
```

Set both character foreground and cell background color using RGBA values.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Red channel (0-1) or value |
| `g?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Green channel (0-1) or value |
| `b?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Blue channel (0-1) or value |
| `a?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Alpha channel (0-1) or value |

### Returns

`this`

The SynthSource for chaining

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

	drawText('SYNTHSOURCE.PAINT2', x, y++, 110, 255, 170);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('PAINT SOURCE FIELD', x, y++, 120, 220, 255);
	drawText('Paint receives a full source.', x, y++, 160, 180, 210);
	drawText('Base motion supplies glyphs.', x, y++, 160, 180, 210);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('paint(source), no color overrides.', x, y++, 150, 255, 190);
});

const paintField = plasma(4.4, 0.022, 0.18, 1.16).colorama(0.16).modulateHue(osc(5, 0.012).kaleid(5), 2.6);

t.synth(
	moire(8, 9, 0.15, 1.58, 0.018)
		.modulateRotate(noise(2.0, 0.012), 0.24, 0.03)
		.paint(paintField)
		.charMap(glyphs)
		.contrast(1.2)
);

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
paint(gray): this;
```

Set both character foreground and cell background color using a grayscale value.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gray` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Grayscale value (0-1) |

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

	drawText('SYNTHSOURCE.PAINT3', x, y++, 110, 255, 170);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('PAINT TEXTURE SOURCE', x, y++, 120, 220, 255);
	drawText('One source paints both layers.', x, y++, 160, 180, 210);
	drawText('Nested motion adds depth.', x, y++, 160, 180, 210);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('paint(source), no color overrides.', x, y++, 150, 255, 190);
});

const paintField = moire(7, 8, 0.32, 1.5, 0.016)
	.color(0.3, 0.9, 0.72)
	.overlay(plasma(3.4, 0.018, 0.2, 1.05).color(0.9, 0.42, 0.85), 0.36);

t.synth(
	plasma(4.6, 0.02, 0.1, 1.18).modulateKaleid(noise(2.1, 0.012), 6).paint(paintField).charMap(glyphs).contrast(1.16)
);

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

