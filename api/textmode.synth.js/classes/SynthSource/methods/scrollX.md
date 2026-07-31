---
layout: doc
editLink: true
title: scrollX
description: Scroll coordinates in X direction.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / scrollX

# Method: scrollX()

```ts
scrollX(scrollX?, speed?): this;
```

Scroll coordinates in X direction.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `scrollX?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | X scroll amount (default: 0.5) |
| `speed?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Scroll speed (default: 0.0) |

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

	drawText(`SYNTHSOURCE.SCROLLX`, x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CONCEPT: HORIZONTAL SCROLLING`, x, y++, 100, 220, 255);
	drawText(`Scrolls coordinates horizontally.`, x, y++, 140, 160, 190);
	drawText(`Creates running colorama waves.`, x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`Scroll X: Linear (0 to 4)`, x, y++, 140, 255, 180);
});

t.synth(plasma(6, 0.2).scrollX([0, 4].ease('linear')).colorama(0.1));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

