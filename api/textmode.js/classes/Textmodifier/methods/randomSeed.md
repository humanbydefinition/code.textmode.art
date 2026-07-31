---
layout: doc
editLink: true
title: randomSeed
description: Reset the main sketch random generator to a seed.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / randomSeed

# Method: randomSeed()

```ts
randomSeed(seed): void;
```

Reset the main sketch random generator to a seed.

This also clears named streams created with [randomStream](randomStream.md), so future
stream lookups are derived from the new root seed.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `seed` | `string` \| `number` | Seed used to restart the sequence. |

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
const points = [];

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

function rebuildPoints() {
	t.randomSeed('repeatable-grid');
	points.length = 0;
	for (let i = 0; i < 28; i++) {
		points.push({
			x: Math.floor(t.random(-20, 20)),
			y: Math.floor(t.random(-9, 9)),
			char: t.random(['.', '+', '*', '#']) ?? '.',
		});
	}
}

rebuildPoints();

t.draw(() => {
	t.background(8, 7, 18);
	if (t.frameCount % 120 === 1) {
		rebuildPoints();
	}

	for (const point of points) {
		t.push();
		t.translate(point.x, point.y);
		t.char(point.char);
		t.charColor(120, 240, 255);
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
	drawText('TEXTMODIFIER.RANDOMSEED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: RESET SEQUENCE', x, y++, 100, 220, 255);
	drawText('The same points return.', x, y++, 140, 160, 190);
	drawText('The seed is set every loop.', x, y++, 140, 160, 190);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

