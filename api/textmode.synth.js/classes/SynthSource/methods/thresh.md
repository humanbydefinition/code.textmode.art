---
layout: doc
editLink: true
title: thresh
description: Apply hard threshold.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / thresh

# Method: thresh()

```ts
thresh(threshold?, tolerance?): this;
```

Apply hard threshold.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threshold?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Threshold value (default: 0.5) |
| `tolerance?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Tolerance range (default: 0.04) |

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

	drawText(`SYNTHSOURCE.THRESH`, x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CONCEPT: THRESHOLD FILTER`, x, y++, 100, 220, 255);
	drawText(`Binarizes canvas to black/white.`, x, y++, 140, 160, 190);
	drawText(`Splits values at pivot point.`, x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`Pivot: Eased (0.3 to 0.7)`, x, y++, 140, 255, 180);
});

t.synth(noise(6).thresh([0.3, 0.7].ease('easeInOutSine')));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

