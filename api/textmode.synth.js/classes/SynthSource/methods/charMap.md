---
layout: doc
editLink: true
title: charMap
description: Map character indices to a specific character set. This is the primary textmode-native way to define which characters to use.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / charMap

# Method: charMap()

```ts
charMap(chars): this;
```

Map character indices to a specific character set.
This is the primary textmode-native way to define which characters to use.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chars` | `string` | A string of characters to map indices to |

## Returns

`this`

The SynthSource for chaining

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

	drawText('SYNTHSOURCE.CHARMAP', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CUSTOM GLYPH RE-MAPPING', x, y++, 100, 220, 255);
	drawText('Maps luminance to custom character set.', x, y++, 140, 160, 190);
	drawText('Creates styled ascii/digital screens.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CharMap: Binary code screen "01 "', x, y++, 140, 255, 180);
});

t.synth(noise(10, 0.15).color(0.2, 0.9, 0.4).cellColor(0.02, 0.05, 0.02).charMap('01 '));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

