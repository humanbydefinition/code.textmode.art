---
layout: doc
editLink: true
title: scale
description: Scale coordinates.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / scale

# Method: scale()

```ts
scale(
   amount?, 
   xMult?, 
   yMult?, 
   offsetX?, 
   offsetY?): this;
```

Scale coordinates.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Scale amount (default: 1.5) |
| `xMult?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | X axis multiplier (default: 1.0) |
| `yMult?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Y axis multiplier (default: 1.0) |
| `offsetX?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | X offset (default: 0.5) |
| `offsetY?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Y offset (default: 0.5) |

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

	drawText(`SYNTHSOURCE.SCALE`, x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CONCEPT: SPATIAL ZOOMING`, x, y++, 100, 220, 255);
	drawText(`Scales coordinate field size.`, x, y++, 140, 160, 190);
	drawText(`Creates zooming/pulsing patterns.`, x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`Scale: Eased (0.5 to 3.0)`, x, y++, 140, 255, 180);
});

t.synth(osc(10, 0.05, 0.5).scale([0.5, 3.0].ease('easeInOutCubic')).color(0.9, 0.2, 0.5));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

