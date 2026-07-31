---
layout: doc
editLink: true
title: rotateGesture
description: Register a callback for rotate gestures, receiving rotation deltas in degrees.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / rotateGesture

# Method: rotateGesture()

```ts
rotateGesture(callback): void;
```

Register a callback for rotate gestures, receiving rotation deltas in degrees.

Rotation callbacks provide the cumulative rotation and delta rotation since the last update,
along with the gesture centre in grid coordinates. Ideal for dial-like interactions.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchRotateHandler`](../../../namespaces/input/namespaces/touch/type-aliases/TouchRotateHandler.md) | Handler to run when a rotation gesture is detected. |

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

let rotation = 0;
let dragStart = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.rotateGesture((data) => {
	rotation += data.deltaRotation;
});

t.mousePressed(() => {
	dragStart = t.mouse.x;
});

t.mouseDragged(() => {
	rotation += (t.mouse.x - dragStart) * 0.5;
	dragStart = t.mouse.x;
});

t.draw(() => {
	t.background(6, 10, 22);
	t.rotateZ(rotation);
	t.char('#');
	t.charColor(140, 220, 255);
	t.rect(14, 4);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.ROTATEGESTURE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: ROTATE GESTURE', x, y++, 100, 220, 255);
	drawText('Touch twist or drag rotates.', x, y++, 140, 160, 190);
	drawText('Rotation accumulates over time.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`DEG: ${rotation.toFixed(1)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

