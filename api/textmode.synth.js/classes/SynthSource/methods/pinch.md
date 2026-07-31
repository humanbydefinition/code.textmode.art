---
layout: doc
editLink: true
title: pinch
description: Pinch distortion (pull inward).
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / pinch

# Method: pinch()

```ts
pinch(
   amount?, 
   centerX?, 
   centerY?): this;
```

Pinch distortion (pull inward).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Distortion amount (default: 0.5) |
| `centerX?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Center X (default: 0.5) |
| `centerY?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Center Y (default: 0.5) |

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

	drawText(`SYNTHSOURCE.PINCH`, x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CONCEPT: PINCH LENS WARP`, x, y++, 100, 220, 255);
	drawText(`Applies concave pinch squeeze.`, x, y++, 140, 160, 190);
	drawText(`Draws coordinates inward.`, x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`Lens: Eased (-0.5 to 0.8)`, x, y++, 140, 255, 180);
});

t.synth(noise(6).pinch([-0.5, 0.8].ease('easeInOutSine')).color(0.1, 0.7, 0.9));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

