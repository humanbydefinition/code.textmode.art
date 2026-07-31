---
layout: doc
editLink: true
title: image
description: Draw a framebuffer, image, video, or texture source to the currently bound framebuffer.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / image

# Method: image()

```ts
image(
   source, 
   width?, 
   height?): void;
```

Draw a framebuffer, image, video, or texture source to the currently bound framebuffer.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | \| [`TextmodeFramebuffer`](../../TextmodeFramebuffer.md) \| [`TextmodeImage`](../../../namespaces/media/classes/TextmodeImage.md) \| [`TextmodeTexture`](../../../namespaces/media/classes/TextmodeTexture.md) \| [`TextmodeVideo`](../../../namespaces/media/classes/TextmodeVideo.md) | Source to render. |
| `width?` | `number` | Width in grid cells. Defaults to an aspect-ratio-preserving fit. |
| `height?` | `number` | Height in grid cells. Defaults to an aspect-ratio-preserving fit. |

## Returns

`void`

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

const fb = t.createFramebuffer({ width: 24, height: 14 });

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	fb.begin();
	t.clear();
	t.background(20, 30, 60);
	t.rotateZ(t.frameCount * 2);
	t.char('#');
	t.charColor(255, 210, 120);
	t.rect(12, 4);
	fb.end();
	t.image(fb, 24, 14);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.IMAGE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: DRAW IMAGE SOURCE', x, y++, 100, 220, 255);
	drawText('Framebuffer is drawn as image.', x, y++, 140, 160, 190);
	drawText('Offscreen content rotates.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('SOURCE: FRAMEBUFFER', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

