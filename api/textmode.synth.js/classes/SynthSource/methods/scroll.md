---
layout: doc
editLink: true
title: scroll
description: Scroll coordinates in both X and Y directions.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / scroll

# Method: scroll()

```ts
scroll(
   scrollX?, 
   scrollY?, 
   speedX?, 
   speedY?): this;
```

Scroll coordinates in both X and Y directions.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `scrollX?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | X scroll amount (default: 0.5) |
| `scrollY?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Y scroll amount (default: 0.5) |
| `speedX?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | X scroll speed (default: 0.0) |
| `speedY?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Y scroll speed (default: 0.0) |

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

	drawText(`SYNTHSOURCE.SCROLL`, x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CONCEPT: SCROLL COORDINATES`, x, y++, 100, 220, 255);
	drawText(`Applies X and Y scrolling offset.`, x, y++, 140, 160, 190);
	drawText(`Creates diagonal gliding motions.`, x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`Scroll: Linear X & Y`, x, y++, 140, 255, 180);
});

t.synth(noise(6).scroll([0, 1].ease('linear'), [0, 1].ease('linear')).color(0.5, 0.9, 0.2));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

