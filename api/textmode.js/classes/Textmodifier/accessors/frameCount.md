---
layout: doc
editLink: true
title: frameCount
description: Current frame count.
category: Accessors
api: true
owner: Textmodifier
kind: Accessor
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / frameCount

# Accessor: frameCount

## Get Signature

```ts
get frameCount(): number;
```

Current frame count.

The frame count starts at 0, but is incremented at the beginning of each draw cycle.
This means that inside the first call to `draw()`, `frameCount` is 1.

This value is useful for timing-based animations, patterns, and state changes.

### Returns

`number`

Number of frames rendered since the sketch started.

### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	t.push();
	t.translate(8, 2);
	t.rotateZ(t.frameCount * 2);
	t.char('#');
	t.charColor(140, 220, 255);
	t.rect(12, 2);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.FRAMECOUNT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: FRAME COUNTER', x, y++, 100, 220, 255);
	drawText('Counter increments each frame.', x, y++, 140, 160, 190);
	drawText('Rotation uses frameCount.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`FRAME: ${t.frameCount}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Set Signature

```ts
set frameCount(value): void;
```

Set the current frame count.

Modifying the frame count can be used to reset animations or jump to a specific
point in time-based patterns.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | New frame count value. |

### Returns

`void`

### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.keyPressed((data) => {
	if (data.key === ' ') t.frameCount = 0;
});

t.draw(() => {
	t.background(6, 10, 22);
	const phase = (t.frameCount % 120) / 120;
	t.push();
	t.translate(-16 + phase * 32, 2);
	t.char('@');
	t.charColor(255, 210, 120);
	t.point();
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.FRAMECOUNT2', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: RESET COUNTER', x, y++, 100, 220, 255);
	drawText('Space rewinds animation.', x, y++, 140, 160, 190);
	drawText('frameCount is writable.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`FRAME: ${t.frameCount}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

