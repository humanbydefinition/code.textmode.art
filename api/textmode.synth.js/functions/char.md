---
layout: doc
editLink: true
title: char
description: Create a character source from any color/pattern source.
category: Functions
api: true
kind: Function
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../index.md) / char

# Function: char()

```ts
function char(source): SynthSource;
```

Create a character source from any color/pattern source.

This function converts any pattern (like `osc()`, `noise()`, `voronoi()`) into
character indices. The pattern's luminance or color values are mapped to character indices.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`SynthSource`](../classes/SynthSource.md) | A SynthSource producing color values that will be mapped to characters |

## Returns

[`SynthSource`](../classes/SynthSource.md)

A new SynthSource configured for character generation

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

	drawText('CHAR.CHAR', x, y++, 110, 255, 170);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('TOP LEVEL GLYPH SOURCE', x, y++, 120, 220, 255);
	drawText('Creates characters first.', x, y++, 160, 180, 210);
	drawText('Ink and paper color them.', x, y++, 160, 180, 210);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('Separate animated ink and paper.', x, y++, 150, 255, 190);
});

const ink = moire(8, 9, 0.15, 1.6, 0.025).color(1.0, 0.62, 0.34).modulate(noise(2.3, 0.018), 0.022);
const paper = noise(3.0, 0.025).color(0.16, 0.055, 0.025).softlight(osc(4, 0.016), 0.22);

t.synth(
	char(noise(4.6, 0.03).modulateRotate(osc(3, 0.01), 0.35, 0.04))
		.charMap(glyphs)
		.charColor(ink)
		.cellColor(paper)
);

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

