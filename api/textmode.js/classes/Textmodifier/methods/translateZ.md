---
layout: doc
editLink: true
title: translateZ
description: Current accumulated Z-axis translation.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / translateZ

# Method: translateZ()

## Call Signature

```ts
translateZ(): number;
```

Current accumulated Z-axis translation.

### Returns

`number`

Current Z-axis translation in grid cells.

### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
const RAMP = ' .:-=+*#%@';

t.draw(() => {
	t.background(6, 10, 24);
	const cols = t.grid.cols,
		rows = t.grid.rows;
	const left = -Math.floor((cols - 1) / 2),
		right = left + cols - 1;
	const top = -Math.floor(rows / 2),
		bottom = top + rows - 1;
	const tm = t.frameCount * 0.04;

	for (let y = top; y <= bottom; y++) {
		for (let x = left; x <= right; x++) {
			const dist = Math.hypot(x, y);
			const z = Math.sin(dist * 0.25 - tm * 3) * 16;
			const norm = (z + 16) / 32;

			const charKey = RAMP[Math.floor(norm * (RAMP.length - 1))];

			t.push();
			t.translateZ(z);
			t.translate(x, y);
			t.charColor(Math.floor(100 + norm * 155), Math.floor(220 - norm * 80), Math.floor(255 - norm * 120));
			t.cellColor(Math.floor(8 + norm * 16), Math.floor(20 + norm * 18), Math.floor(40 + norm * 20));
			t.char(charKey);
			t.point();
			t.pop();
		}
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2),
		top = -Math.floor(t.grid.rows / 2);
	let y = top + 3,
		x = left + 3;

	t.push();
	t.printAlign('left', 'top');
	t.charColor(120, 240, 180);
	t.print('TEXTMODIFIER.TRANSLATEZ', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(140, 210, 255);
	t.print('CONCEPT: 3D HYPER-TUNNEL TRAVEL', x, y++);
	t.charColor(140, 160, 190);
	t.print('Translates origin along Z-axis (depth)', x, y++);
	t.print('demonstrating 3D perspective projection.', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(140, 255, 200);
	t.print('DISPLACEMENT: FULL-GRID Z-AXIS WARP', x, y++);
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
translateZ(pixels): void;
```

Translate subsequent shapes along the Z axis.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pixels` | `number` | Translation offset in grid cells. |

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

t.draw(() => {
	t.background(6, 10, 22);
	t.perspective(58, 0.1, 4096);
	t.camera(0, 0, 48, 0, 0, 0);
	const time = t.frameCount * 0.03;
	for (let i = 0; i < 4; i++) {
		t.push();
		t.translate((i - 1.5) * 7, 0, 0);
		t.translateZ(Math.sin(time + i) * 18);
		t.char('#');
		t.charColor(120 + i * 30, 220, 255 - i * 20);
		t.box(4, 4, 4);
		t.pop();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.TRANSLATEZ2', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: DEPTH MOTION', x, y++, 100, 220, 255);
	drawText('Boxes move toward camera.', x, y++, 140, 160, 190);
	drawText('Z changes perspective scale.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('API: t.translateZ(z)', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

