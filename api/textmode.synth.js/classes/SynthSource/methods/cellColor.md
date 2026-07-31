---
layout: doc
editLink: true
title: cellColor
description: Set the cell background colors using a color source chain.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / cellColor

# Method: cellColor()

## Call Signature

```ts
cellColor(source): this;
```

Set the cell background colors using a color source chain.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`SynthSource`](../../SynthSource.md) | A SynthSource producing color values, or RGBA values |

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

	drawText(`SYNTHSOURCE.CELLCOLOR`, x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CONCEPT: CELL COLOR TINT`, x, y++, 100, 220, 255);
	drawText(`Sets cell background color.`, x, y++, 140, 160, 190);
	drawText(`Leaves glyph color neutral.`, x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`RGB: 0.9, 0.2, 0.5`, x, y++, 140, 255, 180);
});

t.synth(osc(10, 0.1).cellColor(0.9, 0.2, 0.5));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
cellColor(
   r, 
   g?, 
   b?, 
   a?): this;
```

Set the cell background color using RGBA values.

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

	drawText('SYNTHSOURCE.CELLCOLOR2', x, y++, 110, 255, 170);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('CELL RGBA', x, y++, 120, 220, 255);
	drawText('Numbers animate the bed.', x, y++, 160, 180, 210);
	drawText('Ink stays source driven.', x, y++, 160, 180, 210);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('Separate animated ink and paper.', x, y++, 150, 255, 190);
});

const ink = osc(6, 0.018, 1.6).rotate(turn, 0.002).color(0.9, 0.58, 1.0).modulateKaleid(noise(2.0, 0.014), 5);

t.synth(
	osc(10, 0.018, 1.1)
		.kaleid(5)
		.color(0.9, 0.5, 0.3)
		.cellColor(0.03, breathe.offset(0.2), breathe.offset(0.55), 1.0)
		.modulateScale(noise(2.1, 0.014), 0.3, 0.92)
		.charMap(glyphs)
		.charColor(ink)
		.contrast(1.12)
);

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
cellColor(gray): this;
```

Set the cell background color using a grayscale value.

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

	drawText('SYNTHSOURCE.CELLCOLOR3', x, y++, 110, 255, 170);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('CELL GRAYSCALE', x, y++, 120, 220, 255);
	drawText('One value fills cells.', x, y++, 160, 180, 210);
	drawText('Ink carries color motion.', x, y++, 160, 180, 210);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('Separate animated ink and paper.', x, y++, 150, 255, 190);
});

const ink = plasma(4.2, 0.024, 0.0, 1.12).color(0.42, 1.0, 0.58).modulateRotate(noise(2.0, 0.015), 0.28, 0.04);

t.synth(
	plasma(4.2, 0.022, 0.2, 1.12)
		.modulate(noise(2.0, 0.014), 0.02)
		.cellColor([0.05, 0.22].fast(0.12).ease('easeInOutSine'))
		.charMap(glyphs)
		.charColor(ink)
		.contrast(1.16)
);

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

