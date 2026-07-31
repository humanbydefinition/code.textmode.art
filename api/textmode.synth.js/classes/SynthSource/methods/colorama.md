---
layout: doc
editLink: true
title: colorama
description: Apply colorama effect (hue rotation based on luminance).
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / colorama

# Method: colorama()

```ts
colorama(amount?): this;
```

Apply colorama effect (hue rotation based on luminance).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Effect amount (default: 0.005) |

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

	drawText(`SYNTHSOURCE.COLORAMA`, x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CONCEPT: COLORAMA CYCLE`, x, y++, 100, 220, 255);
	drawText(`Maps values to cyclic spectrum.`, x, y++, 140, 160, 190);
	drawText(`Creates running rainbow fills.`, x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`Phase: Eased (0.1 to 0.9)`, x, y++, 140, 255, 180);
});

t.synth(noise(6).colorama([0.1, 0.9].ease('easeInOutQuad')));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

