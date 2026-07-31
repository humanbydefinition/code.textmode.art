---
layout: doc
editLink: true
title: targetFrameRate
description: Set or get the target frame rate limit.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / targetFrameRate

# Method: targetFrameRate()

```ts
targetFrameRate(fps?): number | void;
```

Set or get the target frame rate limit.

Unlike [frameRate](frameRate.md), the getter returns the configured target instead of the measured rate.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fps?` | `number` | New target frame rate. |

## Returns

`number` \| `void`

Current target frame rate when called without arguments.

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let target = 60;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	target = Math.floor(t.frameCount / 150) % 2 === 0 ? 24 : 60;
	t.targetFrameRate(target);
	for (let i = 0; i < target / 4; i++) {
		t.push();
		t.translate(-18 + i, 3);
		t.char('+');
		t.charColor(120, 220, 255);
		t.point();
		t.pop();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.TARGETFRAMERATE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TARGET FPS', x, y++, 100, 220, 255);
	drawText('Sets desired draw cadence.', x, y++, 140, 160, 190);
	drawText('Readout is kept compact.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`TARGET: ${t.targetFrameRate()}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

