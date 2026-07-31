---
layout: doc
editLink: true
title: screen
description: Screen blend with another source.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / screen

# Method: screen()

```ts
screen(source, amount?): this;
```

Screen blend with another source.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Source to screen |
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

	drawText(`SYNTHSOURCE.SCREEN`, x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CONCEPT: SCREEN HIGHLIGHT BLEND`, x, y++, 100, 220, 255);
	drawText(`Inverts, multiplies, inverts.`, x, y++, 140, 160, 190);
	drawText(`Ensures no pixel is darkened.`, x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`Blend: Screen`, x, y++, 140, 255, 180);
});

t.synth(osc(10, 0.05).screen(plasma(6, 0.2)));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

