---
layout: doc
editLink: true
title: dodge
description: Color dodge blend with another source.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / dodge

# Method: dodge()

```ts
dodge(source, amount?): this;
```

Color dodge blend with another source.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Source to dodge |
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

	drawText(`SYNTHSOURCE.DODGE`, x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CONCEPT: COLOR DODGING`, x, y++, 100, 220, 255);
	drawText(`Dazes primary colors to white.`, x, y++, 140, 160, 190);
	drawText(`Creates neon glowing paths.`, x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`Blend: Dodge`, x, y++, 140, 255, 180);
});

t.synth(noise(6).dodge(osc(8, 0.15).color(0.2, 0.8, 0.9)));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

