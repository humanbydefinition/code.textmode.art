---
layout: doc
editLink: true
title: TextmodeImage
description: Image source for textmode rendering.
category: Classes
api: true
namespace: media
kind: Class
lastModified: 2026-07-31
hasConstructor: false
---

[textmode.js](../../../index.md) / [media](../index.md) / TextmodeImage

# Class: TextmodeImage

Image source for textmode rendering.

Create one with [Textmodifier.loadImage](../../../classes/Textmodifier/methods/loadImage.md), draw it with [Textmodifier.image](../../../classes/Textmodifier/methods/image.md),
and configure conversion through inherited chainable methods.

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let image = null;

function createReactionCanvas() {
	const canvas = document.createElement('canvas');
	canvas.width = 64;
	canvas.height = 48;
	const ctx = canvas.getContext('2d');

	const imgData = ctx.createImageData(64, 48);
	const data = imgData.data;

	for (let y = 0; y < 48; y++) {
		for (let x = 0; x < 64; x++) {
			const idx = (y * 64 + x) * 4;
			const v = Math.sin(x * 0.15) * Math.cos(y * 0.15) + Math.sin(x * 0.3 + y * 0.2);
			const norm = (v + 2) / 4;

			data[idx] = Math.floor(15 + norm * 240);
			data[idx + 1] = Math.floor(23 + norm * 160);
			data[idx + 2] = Math.floor(42 + norm * 210);
			data[idx + 3] = 255;
		}
	}
	ctx.putImageData(imgData, 0, 0);
	return canvas.toDataURL();
}

t.setup(async () => {
	image = await t.loadImage(createReactionCanvas());
	image.characters(' .:-=+*#%@');
	image.cellColorMode('sampled');
});

t.draw(() => {
	t.background(15, 23, 42);
	if (!image) return;

	t.push();
	t.rotateZ(Math.sin(t.frameCount * 0.03) * 64);
	t.image(image, Math.floor(t.grid.cols * 0.6), Math.floor(t.grid.rows * 0.6));
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	t.push();
	t.printAlign('left', 'top');
	t.charColor(120, 240, 180);
	t.print('TEXTMODEIMAGE.CREATION', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(140, 210, 255);
	t.print('CONCEPT: REACTION CANV CONVERTER', x, y++);
	t.charColor(140, 160, 190);
	t.print('Loads HTML canvas data into image.', x, y++);
	t.print('Converts source pixels into cells.', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(245, 158, 11);
	t.print(`IMAGE SIZE: ${image ? image.width : 0}x${image ? image.height : 0} PX`, x, y++);
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Extends

- [`TextmodeSource`](TextmodeSource.md)

## Accessors

| Accessor | Description |
| ------ | ------ |
| [height](TextmodeImage/accessors/height.md) | Ideal draw height in grid cells. |
| [originalHeight](TextmodeImage/accessors/originalHeight.md) | Original source height in pixels. |
| [originalWidth](TextmodeImage/accessors/originalWidth.md) | Original source width in pixels. |
| [texture](TextmodeImage/accessors/texture.md) | WebGL texture backing this source. |
| [width](TextmodeImage/accessors/width.md) | Ideal draw width in grid cells. |

## Methods

| Method | Description |
| ------ | ------ |
| [background](TextmodeImage/methods/background.md) | Set the background color used for transparent pixels. |
| [brightnessRange](TextmodeImage/methods/brightnessRange.md) | Capture only source pixels whose brightness is inside the inclusive byte range. |
| [cellColor](TextmodeImage/methods/cellColor.md) | Set the cell color used when [cellColorMode](TextmodeSource/methods/cellColorMode.md) is `'fixed'`. |
| [cellColorMode](TextmodeImage/methods/cellColorMode.md) | Set whether cell color is sampled from the source or fixed. |
| [characters](TextmodeImage/methods/characters.md) | Set the characters used for brightness mapping. |
| [charColor](TextmodeImage/methods/charColor.md) | Set the character color used when [charColorMode](TextmodeSource/methods/charColorMode.md) is `'fixed'`. |
| [charColorMode](TextmodeImage/methods/charColorMode.md) | Set whether character color is sampled from the source or fixed. |
| [charRotation](TextmodeImage/methods/charRotation.md) | Rotate generated characters. |
| [clearConversions](TextmodeImage/methods/clearConversions.md) | Clear this source's conversion stack and return to single-mode conversion. |
| [conversionMode](TextmodeImage/methods/conversionMode.md) | Select the conversion mode for this source. |
| [conversions](TextmodeImage/methods/conversions.md) | Set an ordered conversion stack for this source. |
| [dispose](TextmodeImage/methods/dispose.md) | Dispose of the resource and free associated WebGL textures. |
| [flipX](TextmodeImage/methods/flipX.md) | Flip the source horizontally. |
| [flipY](TextmodeImage/methods/flipY.md) | Flip the source vertically. |
| [invert](TextmodeImage/methods/invert.md) | Enable or disable source color inversion. |
