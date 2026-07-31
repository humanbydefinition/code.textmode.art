---
layout: doc
editLink: true
title: cols
description: Number of columns in the grid.
category: Accessors
api: true
owner: TextmodeGrid
kind: Accessor
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [TextmodeGrid](../../TextmodeGrid.md) / cols

# Accessor: cols

## Get Signature

```ts
get cols(): number;
```

Number of columns in the grid.

### Returns

`number`

### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

t.draw(() => {
	t.background(6, 10, 22);
	const cols = t.grid.cols;
	const rows = t.grid.rows;
	const hw = Math.floor(cols / 2);
	const hh = Math.floor(rows / 2);
	const tm = t.frameCount * 0.04;

	for (let c = 0; c < cols; c++) {
		const x = c - hw;
		const wave = Math.sin(c * 0.3 + tm) * 0.5 + Math.cos(c * 0.12 - tm * 1.5) * 0.3 + 0.5;
		const barH = Math.floor(1 + wave * (rows - 4));
		const ramp = ['.', ':', '+', '*', '#', '%', '@'];

		for (let r = 0; r < barH; r++) {
			const y = hh - r;
			const ci = Math.min(ramp.length - 1, Math.floor((r / Math.max(1, barH - 1)) * ramp.length));

			t.push();
			t.translate(x, y);
			t.charColor(Math.floor(60 + wave * 140), Math.floor(140 + ci * 15), Math.floor(255 - ci * 10));
			t.cellColor(Math.floor(8 + ci * 3), Math.floor(16 + ci * 4), Math.floor(30 + ci * 5));
			t.char(ramp[ci]);
			t.point();
			t.pop();
		}

		t.push();
		t.translate(x, hh - barH);
		t.charColor(255, 220, 100);
		t.cellColor(40, 30, 10);
		t.char('*');
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

	t.push();
	t.printAlign('left', 'top');
	t.charColor(120, 240, 180);
	t.print('TEXTMODEGRID.COLS', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(140, 210, 255);
	t.print('CONCEPT: MULTI-CHANNEL EQUALIZER SPECTRUM', x, y++);
	t.charColor(140, 160, 190);
	t.print('Number of columns in grid layout.', x, y++);
	t.print('Renders exact 1:1 column frequency bars.', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(140, 255, 200);
	t.print(`TOTAL COLUMNS: ${t.grid.cols}`, x, y++);
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Set Signature

```ts
set cols(newCols): void;
```

Set the number of columns and lock grid sizing until `responsive()` is called.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `newCols` | `number` |

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
const presets = [16, 32, 48, 64];
let presetIdx = 1;

t.setup(() => {
	t.grid.cols = presets[presetIdx];
});

t.mousePressed(() => {
	presetIdx = (presetIdx + 1) % presets.length;
	t.grid.cols = presets[presetIdx];
});

t.draw(() => {
	t.background(6, 14, 22);
	const cols = t.grid.cols;
	const rows = t.grid.rows;
	const hw = Math.floor(cols / 2);
	const hh = Math.floor(rows / 2);
	const tm = t.frameCount * 0.05;

	for (let y = -hh; y <= hh; y++) {
		for (let x = -hw; x <= hw; x++) {
			const wave = Math.sin(x * 0.2 + tm) * Math.cos(y * 0.2 + tm);
			const norm = (wave + 1) * 0.5;

			const charKey = norm > 0.7 ? '#' : norm > 0.4 ? '+' : norm > 0.2 ? ':' : '.';

			t.push();
			t.translate(x, y);
			t.charColor(Math.floor(80 + norm * 175), Math.floor(200 + norm * 55), Math.floor(140 - norm * 60));
			t.cellColor(Math.floor(6 + norm * 10), Math.floor(18 + norm * 14), Math.floor(12 + norm * 16));
			t.char(charKey);
			t.point();
			t.pop();
		}
	}
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
	t.print('TEXTMODEGRID.SETCOLS', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(140, 210, 255);
	t.print('CONCEPT: COLUMN DENSITY QUANTIZER', x, y++);
	t.charColor(140, 160, 190);
	t.print('Sets column count and locks grid size', x, y++);
	t.print('until responsive() is called.', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(140, 255, 200);
	t.print(`LOCKED COLS: ${t.grid.cols}`, x, y++);
	t.charColor(255, 200, 100);
	t.print('CLICK CANVAS TO CYCLE COLS PRESETS', x, y++);
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

