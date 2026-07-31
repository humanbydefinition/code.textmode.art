---
layout: doc
editLink: true
title: charColor
description: Set the character foreground color using a color source chain.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / charColor

# Method: charColor()

## Call Signature

```ts
charColor(source): this;
```

Set the character foreground color using a color source chain.

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

	drawText(`SYNTHSOURCE.CHARCOLOR`, x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CONCEPT: FOREGROUND CHROMATIC`, x, y++, 100, 220, 255);
	drawText(`Sets glyph color channels.`, x, y++, 140, 160, 190);
	drawText(`Leaves cell background dark.`, x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`RGB: 0.2, 0.9, 0.5`, x, y++, 140, 255, 180);
});

t.synth(osc(10, 0.1).charColor(0.2, 0.9, 0.5));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
charColor(
   r, 
   g?, 
   b?, 
   a?): this;
```

Set the character foreground color using RGBA values.

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

	drawText('SYNTHSOURCE.CHARCOLOR2', x, y++, 110, 255, 170);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('FOREGROUND RGBA', x, y++, 120, 220, 255);
	drawText('Numbers animate glyph ink.', x, y++, 160, 180, 210);
	drawText('Paper remains source driven.', x, y++, 160, 180, 210);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('Separate animated ink and paper.', x, y++, 150, 255, 190);
});

const paper = noise(3.0, 0.025).color(0.16, 0.055, 0.025).softlight(osc(4, 0.016), 0.22);

t.synth(
	noise(3.8, 0.025)
		.modulateScale(osc(3, 0.01), 0.25, 0.95)
		.charMap(glyphs)
		.charColor(breathe, breathe.offset(0.33), breathe.offset(0.66), 1.0)
		.cellColor(paper)
		.contrast(1.18)
);

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
charColor(gray): this;
```

Set the character foreground color using a grayscale value.

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

	drawText('SYNTHSOURCE.CHARCOLOR3', x, y++, 110, 255, 170);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('FOREGROUND GRAY', x, y++, 120, 220, 255);
	drawText('One value controls ink.', x, y++, 160, 180, 210);
	drawText('Paper carries color motion.', x, y++, 160, 180, 210);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('Separate animated ink and paper.', x, y++, 150, 255, 190);
});

const paper = plasma(3.6, 0.028, 0.1, 1.05).color(0.03, 0.08, 0.18).modulateScale(noise(2.0, 0.015), 0.22, 0.95);

t.synth(
	moire(7, 8, 0.18, 1.5, 0.018)
		.modulate(noise(2.0, 0.014), 0.02)
		.charMap(glyphs)
		.charColor([0.42, 0.9].fast(0.14).ease('easeInOutSine'))
		.cellColor(paper)
		.contrast(1.2)
);

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

