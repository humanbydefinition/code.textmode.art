---
layout: doc
editLink: true
title: translateY
description: Current accumulated Y-axis translation.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / translateY

# Method: translateY()

## Call Signature

```ts
translateY(): number;
```

Current accumulated Y-axis translation.

### Returns

`number`

Current Y-axis translation in grid cells.

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
	const tm = t.frameCount * 0.05;

	for (let x = left; x <= right; x++) {
		const shiftY = Math.sin(tm * 2 + x * 0.25) * 6;

		for (let y = top; y <= bottom; y++) {
			const wave = Math.cos((y + shiftY) * 0.25 + tm);
			const norm = (wave + 1) * 0.5;

			const charKey = RAMP[Math.floor(norm * (RAMP.length - 1))];

			t.push();
			t.translate(x, 0);
			t.translateY(shiftY);
			t.translate(0, y);
			t.charColor(255, Math.floor(160 + norm * 95), Math.floor(80 + norm * 120));
			t.cellColor(Math.floor(28 + norm * 14), Math.floor(12 + norm * 12), Math.floor(6 + norm * 10));
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
	t.print('TEXTMODIFIER.TRANSLATEY', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(140, 210, 255);
	t.print('CONCEPT: EQUALIZER SEISMIC PISTON ARRAY', x, y++);
	t.charColor(140, 160, 190);
	t.print('Shifts origin along Y-axis independently', x, y++);
	t.print('without affecting X or Z coordinates.', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(140, 255, 200);
	t.print('DISPLACEMENT: FULL-SCREEN Y-AXIS PISTONS', x, y++);
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
translateY(pixels): void;
```

Translate subsequent shapes along the Y axis.

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
const RAMP = ' .:-=+*#%@';

t.draw(() => {
	t.background(6, 10, 24);
	const cols = t.grid.cols,
		rows = t.grid.rows;
	const left = -Math.floor((cols - 1) / 2),
		right = left + cols - 1;
	const top = -Math.floor(rows / 2),
		bottom = top + rows - 1;
	const tm = t.frameCount * 0.05;

	for (let x = left; x <= right; x++) {
		const dropY = ((tm * 12 + Math.sin(x * 0.4) * 15) % rows) - Math.floor(rows / 2);

		for (let y = top; y <= bottom; y++) {
			const distToHead = Math.abs(y - dropY);
			const norm = Math.max(0, 1 - distToHead / 8);

			const charKey = RAMP[Math.floor(norm * (RAMP.length - 1))];

			t.push();
			t.translate(x, 0);
			t.translateY(dropY * 0.1);
			t.translate(0, y);
			t.charColor(Math.floor(60 + norm * 195), Math.floor(220 + norm * 35), Math.floor(180 - norm * 80));
			t.cellColor(Math.floor(4 + norm * 12), Math.floor(16 + norm * 20), Math.floor(24 + norm * 16));
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
	t.print('TEXTMODIFIER.TRANSLATEY2', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(140, 210, 255);
	t.print('CONCEPT: DIGITAL RAIN WATERFALL CASCADE', x, y++);
	t.charColor(140, 160, 190);
	t.print('Vertical offset streams cascading', x, y++);
	t.print('downwards through coordinate space.', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(140, 255, 200);
	t.print('DISPLACEMENT: CONTINUOUS Y RAIN STREAM', x, y++);
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

