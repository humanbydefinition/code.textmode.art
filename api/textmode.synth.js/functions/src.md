---
layout: doc
editLink: true
title: src
description: Sample a source for synth compositions.
category: Functions
api: true
kind: Function
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../index.md) / src

# Function: src()

```ts
function src(source?): SynthSource;
```

Sample a source for synth compositions.

This is the core of feedback loops and source sampling - it reads from various sources,
enabling effects like trails, motion blur, image processing, and recursive patterns.

**Three modes of operation:**

1. **Self-feedback** (`src()` with no arguments): Samples from the previous frame
   - Context-aware: automatically samples the appropriate texture based on compilation context
   - Inside `char(...)` → samples previous frame's character data
   - Inside `charColor(...)` → samples previous frame's primary color
   - Inside `cellColor(...)` → samples previous frame's cell color

2. **Cross-layer sampling** (`src(layer)`): Samples from another layer's output
   - Enables hydra-style multi-output compositions
   - Context-aware based on current compilation target

3. **TextmodeSource sampling** (`src(image)` or `src(video)`): Samples from loaded media
   - Works with TextmodeImage and TextmodeVideo loaded via `t.loadImage()` or `t.loadVideo()`
   - Samples directly from the source texture

Equivalent to hydra's `src(o0)`.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source?` | \| `TextmodeSource` \| `TextmodeLayer` \| (() => `TextmodeSource` \| `TextmodeLayer` \| `undefined`) | Optional source to sample from: TextmodeLayer for cross-layer, or TextmodeImage/TextmodeVideo for media |

## Returns

[`SynthSource`](../classes/SynthSource.md)

A new SynthSource that samples the specified source or self

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

	drawText('SYNTHSOURCE.SRC', x, y++, 110, 255, 170);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('SELF FEEDBACK LOOP', x, y++, 120, 220, 255);
	drawText('Samples previous frame.', x, y++, 160, 180, 210);
	drawText('Fresh input is very subtle.', x, y++, 160, 180, 210);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('Separate animated ink and paper.', x, y++, 150, 255, 190);
});

const ink = osc(5, 0.018, 1.1).kaleid(4).color(0.45, 0.72, 1.0).modulate(noise(2.2, 0.018), 0.025);
const paper = plasma(3.6, 0.028, 0.1, 1.05).color(0.03, 0.08, 0.18).modulateScale(noise(2.0, 0.015), 0.22, 0.95);

t.synth(
	src()
		.scale(1.006)
		.rotate(0.006)
		.blend(osc(7, 0.018).kaleid(5).color(0.2, 0.7, 1.0), 0.026)
		.blend(osc(9, 0.016).kaleid(4).rotate(0.4).color(1.0, 0.2, 0.5), 0.018)
		.contrast(1.05)
		.charMap(glyphs)
		.charColor(ink)
		.cellColor(paper)
);

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

