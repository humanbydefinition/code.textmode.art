---
layout: doc
editLink: true
title: invert
description: Enable or disable source color inversion.
category: Methods
api: true
owner: TextmodeTexture
namespace: media
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../../../index.md) / [media](../../../index.md) / [TextmodeTexture](../../TextmodeTexture.md) / invert

# Method: invert()

```ts
invert(v?): this;
```

Enable or disable source color inversion.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | `number` \| `boolean` | `true` | Whether to invert colors. |

## Returns

`this`

This instance for chaining.

## Example

```javascript
const IMAGE_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80';
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
});

const labelLayer = t.layers.add();
let gradientSource = null;

t.setup(async () => {
	gradientSource = await t.loadImage(IMAGE_URL);
	gradientSource.characters(' .:-=+*#%@');
});

t.draw(() => {
	t.background(6, 10, 22);

	if (!gradientSource) return;

	const imgW = 20;
	const imgH = 12;

	t.push();
	t.translate(-12, 0);
	gradientSource.invert(false);
	t.image(gradientSource, imgW, imgH);
	t.pop();

	t.push();
	t.translate(12, 0);
	gradientSource.invert(true);
	t.image(gradientSource, imgW, imgH);
	t.pop();
});

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

	drawText('TEXTMODESOURCE.INVERT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: INVERT SOURCE BRIGHTNESS', x, y++, 100, 220, 255);
	drawText('Inverts pixel colors before mapping.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('INVERTED STATUS: false & true', x, y++, 140, 190, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Inherited from

[`TextmodeSource`](../../TextmodeSource.md).[`invert`](../../TextmodeSource/methods/invert.md)
