---
layout: doc
editLink: true
title: rotateZ
description: Set or get this layer's compositing rotation in degrees.
category: Methods
api: true
owner: TextmodeLayer
namespace: layering
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../../../index.md) / [layering](../../../index.md) / [TextmodeLayer](../../TextmodeLayer.md) / rotateZ

# Method: rotateZ()

```ts
rotateZ(z?): number | void;
```

Set or get this layer's compositing rotation in degrees.

The rotation is applied during compositing around the center of the layer's
rectangular bounds. The rotation origin remains at the center even when
an offset is applied.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `z?` | `number` | Rotation angle in degrees. Positive values rotate clockwise. |

## Returns

`number` \| `void`

Current rotation in degrees when called without arguments.

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const scannerLayer = t.layers.add({ blendMode: 'additive' });
const labelLayer = t.layers.add();
let currentAngle = 0;

function drawText(text, x, y, rgb = [255, 255, 255]) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(rgb[0], rgb[1], rgb[2]);
	t.print(text, x, y);
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 1.5;
	const angle = time % 360;

	currentAngle = angle;
	scannerLayer.rotateZ(angle);

	t.push();
	t.charColor(60, 70, 100);
	t.char('.');
	t.line(-15, 0, 15, 0);
	t.line(0, -8, 0, 8);
	t.pop();
});

scannerLayer.draw(() => {
	t.clear();

	t.push();
	t.charColor(140, 180, 255, 200);
	t.char('#');
	t.rect(20, 1);
	t.pop();

	t.push();
	t.translate(10, 0);
	t.char('>');
	t.charColor(255, 225, 140);
	t.point();
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODELAYER.ROTATEZ', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: COMPOSITE ROTATION', x, y++, [100, 220, 255]);
	drawText('Layer output rotates around center.', x, y++, [140, 160, 190]);
	drawText('Draw callback remains unrotated.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(`ANGLE: ${currentAngle.toFixed(1)} DEG`, x, y++, [140, 255, 180]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

