---
layout: doc
editLink: true
title: blend
description: Blend with another source.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / blend

# Method: blend()

```ts
blend(source, amount?): this;
```

Blend with another source.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Source to blend |
| `amount?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Blend amount (default: 0.5) |

## Returns

`this`

## Example

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

	drawText('SYNTHSOURCE.BLEND', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SOURCE BLENDING', x, y++, 100, 220, 255);
	drawText('Linear interpolation of two sources.', x, y++, 140, 160, 190);
	drawText('Blends colors and alpha channels.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('Oscillator blended with noise', x, y++, 140, 255, 180);
});

t.synth(
	osc(15, 0.1, 0.5)
		.color(0.2, 0.6, 1.0)
		.blend(noise(10, 0.15).color(1.0, 0.3, 0.6), [0.1, 0.9].ease('easeInOutQuad'))
		.charMap(' .:-=+*#%@')
		.cellColor(0.05, 0.05, 0.1)
);

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

