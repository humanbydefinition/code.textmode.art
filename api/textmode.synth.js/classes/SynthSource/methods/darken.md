---
layout: doc
editLink: true
title: darken
description: Darken blend with another source.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / darken

# Method: darken()

```ts
darken(source, amount?): this;
```

Darken blend with another source.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Source to darken |
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

	drawText('SYNTHSOURCE.DARKEN', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: DARKEN BLENDING (MIN)', x, y++, 100, 220, 255);
	drawText('Selects the darker pixels of sources.', x, y++, 140, 160, 190);
	drawText('Creates interesting grid shadows.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('Oscillators merged with min-blend', x, y++, 140, 255, 180);
});

t.synth(
	osc(15, 0.1)
		.color(0.9, 0.3, 0.6)
		.darken(osc(15, 0.12).rotate(1.57).color(0.2, 0.8, 1.0), 1.0)
		.charMap(' .:-=+*#%@')
		.cellColor(0.02, 0.02, 0.05)
);

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

