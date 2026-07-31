---
layout: doc
editLink: true
title: ease
description: Apply easing function to interpolation between array values.
category: Methods
api: true
owner: ModulatedArray
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [ModulatedArray](../../ModulatedArray.md) / ease

# Method: ease()

```ts
ease(ease): this;
```

Apply easing function to interpolation between array values.

Easing controls the acceleration curve of transitions between values.
Automatically enables smoothing when applied. Use built-in easing names
or provide a custom function that takes a value 0-1 and returns 0-1.

Available easing functions: `'linear'`, `'easeInQuad'`, `'easeOutQuad'`,
`'easeInOutQuad'`, `'easeInCubic'`, `'easeOutCubic'`, `'easeInOutCubic'`,
`'easeInQuart'`, `'easeOutQuart'`, `'easeInOutQuart'`, `'easeInQuint'`,
`'easeOutQuint'`, `'easeInOutQuint'`, `'sin'`

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ease` | [`EasingFunction`](../../../type-aliases/EasingFunction.md) | Easing function name or custom function (default: 'linear') |

## Returns

`this`

The array for chaining

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

	drawText(`MODULATEDARRAY.EASE`, x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CONCEPT: EASED ARRAY TRANSITIONS`, x, y++, 100, 220, 255);
	drawText(`Applies easing to cycles.`, x, y++, 140, 160, 190);
	drawText(`Blends array steps smoothly.`, x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`Easing: easeInOutCubic`, x, y++, 140, 255, 180);
});

t.synth(shape(4).rotate([-1.5, 1.5].ease('easeInOutCubic')));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

