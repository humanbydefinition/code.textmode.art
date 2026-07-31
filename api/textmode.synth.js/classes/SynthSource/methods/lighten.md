---
layout: doc
editLink: true
title: lighten
description: Lighten blend with another source.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / lighten

# Method: lighten()

```ts
lighten(source, amount?): this;
```

Lighten blend with another source.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Source to lighten |
| `amount?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Blend amount (default: 1.0) |

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

	drawText('SYNTHSOURCE.LIGHTEN', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LIGHTEN BLENDING (MAX)', x, y++, 100, 220, 255);
	drawText('Selects the lighter pixels of sources.', x, y++, 140, 160, 190);
	drawText('Creates bright grid intersections.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('Oscillators merged with max-blend', x, y++, 140, 255, 180);
});

t.synth(
	osc(15, 0.1)
		.color(0.1, 0.5, 0.9)
		.lighten(osc(15, 0.12).rotate(1.57).color(0.9, 0.1, 0.4), 1.0)
		.charMap(' .:-=+*#%@')
		.cellColor(0.02, 0.02, 0.05)
);

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

