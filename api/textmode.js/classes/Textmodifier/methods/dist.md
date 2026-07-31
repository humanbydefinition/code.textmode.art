---
layout: doc
editLink: true
title: dist
description: Calculate the Euclidean distance between two points.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / dist

# Method: dist()

```ts
dist(
   x1, 
   y1, 
   x2, 
   y2): number;
```

Calculate the Euclidean distance between two points.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x1` | `number` | X coordinate of the first point in grid cells. |
| `y1` | `number` | Y coordinate of the first point in grid cells. |
| `x2` | `number` | X coordinate of the second point in grid cells. |
| `y2` | `number` | Y coordinate of the second point in grid cells. |

## Returns

`number`

The distance between the two points.

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let distance = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

function drawPoint(x, y) {
	t.push();
	t.translate(x, y);
	t.point();
	t.pop();
}

t.draw(() => {
	t.background(5, 10, 18);
	const beaconX = Math.cos(t.frameCount * 0.025) * 8;
	const beaconY = Math.sin(t.frameCount * 0.035) * 5;
	distance = t.dist(beaconX, beaconY, t.mouse.x, t.mouse.y);

	for (let y = -10; y <= 10; y += 2) {
		for (let x = -18; x <= 18; x += 2) {
			const d = t.dist(x, y, beaconX, beaconY);
			const shade = Math.round(t.constrain(t.map(d, 0, 20, 210, 35), 35, 210));
			t.char(d < 4 ? '*' : '.');
			t.charColor(60, shade, 255 - shade * 0.4);
			drawPoint(x, y);
		}
	}

	t.char('o');
	t.charColor(255, 220, 120);
	t.push();
	t.translate(beaconX, beaconY);
	t.ellipse(8, 8);
	t.point();
	t.pop();

	t.char('+');
	t.charColor(120, 255, 180);
	drawPoint(t.mouse.x, t.mouse.y);
	t.line(beaconX, beaconY, t.mouse.x, t.mouse.y);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.DIST', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: POINT DISTANCE', x, y++, 100, 220, 255);
	drawText('dist() measures between two points.', x, y++, 140, 160, 190);
	drawText('Distance drives the field shading.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`MOUSE RANGE: ${distance.toFixed(1)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

