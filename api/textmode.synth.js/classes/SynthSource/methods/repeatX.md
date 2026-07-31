---
layout: doc
editLink: true
title: repeatX
description: Repeat coordinates in X direction.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / repeatX

# Method: repeatX()

```ts
repeatX(reps?, offset?): this;
```

Repeat coordinates in X direction.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `reps?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Number of repetitions (default: 3.0) |
| `offset?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Offset between repetitions (default: 0.0) |

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

	drawText(`SYNTHSOURCE.REPEATX`, x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CONCEPT: HORIZONTAL TILING`, x, y++, 100, 220, 255);
	drawText(`Repeats space on the horizontal axis.`, x, y++, 140, 160, 190);
	drawText(`Creates repeating columns of shape.`, x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`Repeat X: Eased (2 to 6)`, x, y++, 140, 255, 180);
});

t.synth(shape(4, 0.2, 0.05).repeatX([2, 6].ease('easeInOutCubic')).color(0.2, 0.8, 0.8));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

