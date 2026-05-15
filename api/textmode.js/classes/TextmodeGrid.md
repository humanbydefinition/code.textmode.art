---
layout: doc
editLink: true
title: TextmodeGrid
description: Manages the grid of each TextmodeLayer instance.
category: Classes
api: true
kind: Class
lastModified: 2026-05-15
hasConstructor: false
---

[textmode.js](../index.md) / TextmodeGrid

# Class: TextmodeGrid

Manages the grid of each `TextmodeLayer` instance.

The grid determines how characters are positioned and sized on the canvas.
By default, the grid is responsive, meaning it recalculates the number of columns
and rows based on the canvas size and the font size.

You can manually set `cols` and `rows` to lock the grid to a specific size.

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

let isLocked = false;

t.setup(() => {
	t.grid.cols = 40;
	t.grid.rows = 20;
	isLocked = true;
});

function drawLabel(text, x, y, col = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(...col);
	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}
	t.pop();
}

t.draw(() => {
	t.background(10, 15, 24);

	const { cols, rows } = t.grid;
	const time = t.frameCount * 0.05;

	t.char('.');
	t.charColor(60, 80, 110);
	t.rect(cols, rows);

	const scanX = Math.floor((Math.sin(time * 0.7) * 0.5 + 0.5) * cols);
	t.push();
	t.translate(scanX - (cols - 1) / 2, 0);
	t.char('|');
	t.charColor(100, 200, 255);
	t.rect(1, rows);
	t.pop();

	const title = '--- TEXTMODE GRID CREATION ---';
	drawLabel(title, -(title.length - 1) / 2, -(rows - 1) / 2 + 2, [255, 220, 100]);

	const modeText = isLocked ? 'MODE: LOCKED (FIXED 40x20)' : 'MODE: RESPONSIVE (AUTO)';
	drawLabel(modeText, -(modeText.length - 1) / 2, -1, isLocked ? [255, 100, 100] : [100, 255, 100]);

	const dimText = `CURRENT SIZE: ${cols} x ${rows}`;
	drawLabel(dimText, -(dimText.length - 1) / 2, 1, [150, 180, 255]);

	const hint = 'Click to toggle responsiveness';
	drawLabel(hint, -(hint.length - 1) / 2, (rows - 1) / 2 - 3, [120, 120, 120]);
});

t.mousePressed(() => {
	isLocked = !isLocked;

	if (isLocked) {
		t.grid.cols = 40;
		t.grid.rows = 20;
	} else {
		t.grid.responsive();
		t.grid.reset();
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Accessors

### cellHeight

#### Get Signature

```ts
get cellHeight(): number;
```

Returns the height of each cell in the grid in screen pixels.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);

	const h = t.grid.cellHeight;

	drawCenteredText('TextmodeGrid.cellHeight', -8, [240, 245, 255]);
	drawCenteredText(`${h} PIXELS`, 6, [255, 225, 140]);

	for (let y = -3; y <= 3; y++) {
		const isTarget = y === 0;

		t.push();
		t.translate(0, y);

		if (isTarget) {
			t.char('#');
			t.charColor(255, 225, 140);

			t.push();
			t.translate(-3, 0);
			t.char('>');
			t.point();
			t.translate(6, 0);
			t.char('<');
			t.point();
			t.pop();
		} else {
			t.char('.');
			t.charColor(100, 120, 150);
		}

		t.point();
		t.pop();
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### cellWidth

#### Get Signature

```ts
get cellWidth(): number;
```

Returns the width of each cell in the grid in screen pixels.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);

	const w = t.grid.cellWidth;

	drawCenteredText('TextmodeGrid.cellWidth', -8, [240, 245, 255]);
	drawCenteredText(`${w} PIXELS`, 6, [120, 255, 180]);

	for (let x = -3; x <= 3; x++) {
		const isTarget = x === 0;

		t.push();
		t.translate(x, 0);

		if (isTarget) {
			t.char('#');
			t.charColor(120, 255, 180);

			t.push();
			t.translate(0, -3);
			t.char('v');
			t.point();
			t.translate(0, 6);
			t.char('^');
			t.point();
			t.pop();
		} else {
			t.char('.');
			t.charColor(100, 120, 150);
		}

		t.point();
		t.pop();
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### cols

#### Get Signature

```ts
get cols(): number;
```

Returns the number of columns in the grid.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);

	const cols = t.grid.cols;

	drawCenteredText('TextmodeGrid.cols', -8, [240, 245, 255]);
	drawCenteredText(`${cols} COLUMNS`, 6, [140, 180, 255]);

	const halfWidth = Math.floor(cols / 2);

	for (let x = -halfWidth; x < halfWidth; x++) {
		t.push();
		t.translate(x, 0);

		const isMarker = (x + halfWidth) % 5 === 0;

		if (isMarker) {
			t.char('|');
			t.charColor(140, 180, 255);
		} else {
			t.char('-');
			t.charColor(60, 70, 100);
		}

		t.point();
		t.pop();
	}

	t.push();
	t.charColor(255, 255, 255);
	t.translate(-halfWidth, 0);
	t.char('<');
	t.point();
	t.translate(cols - 1, 0);
	t.char('>');
	t.point();
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Set Signature

```ts
set cols(newCols): void;
```

Sets the number of columns and locks grid sizing until `responsive()` is called.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `newCols` | `number` |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawLabel(text, x, y, col = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(...col);
	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}
	t.pop();
}

t.draw(() => {
	t.background(10, 25, 10);

	const { cols, rows } = t.grid;
	const time = t.frameCount * 0.1;

	t.charColor(0, 200, 100);
	t.char('|');
	for (let x = 0; x < cols; x++) {
		const h = Math.floor(6 + Math.sin(time + x * 0.2) * 4);
		t.push();
		t.translate(x - (cols - 1) / 2, 0);
		t.rect(1, h);
		t.pop();
	}

	const title = '--- GRID.COLS SETTER ---';
	drawLabel(title, -(title.length - 1) / 2, -(rows - 1) / 2 + 2, [200, 255, 200]);

	const valText = `COLS: ${cols}`;
	drawLabel(valText, -(valText.length - 1) / 2, 0, [255, 255, 255]);

	const hint = 'Move mouse to resize columns';
	drawLabel(hint, -(hint.length - 1) / 2, (rows - 1) / 2 - 2, [120, 150, 120]);
});

t.mouseMoved((e) => {
	if (e.position.x !== Number.NEGATIVE_INFINITY) {
		const targetCols = Math.floor(40 + e.position.x * 2);
		t.grid.cols = Math.max(5, Math.min(100, targetCols));
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### height

#### Get Signature

```ts
get height(): number;
```

Returns the total height of the grid in screen pixels.

This is equal to `rows * cellHeight`.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);

	const h = t.grid.height;
	const rows = t.grid.rows;
	const halfHeight = Math.floor(rows / 2);

	t.push();
	t.translate(0, 0);
	t.char('|');
	t.charColor(255, 140, 180, 100);
	t.rect(1, rows);
	t.pop();

	t.push();
	t.charColor(255, 255, 255);
	t.translate(0, -halfHeight);
	t.char('-');
	t.point();
	t.translate(0, rows - 1);
	t.char('-');
	t.point();
	t.pop();

	drawCenteredText('TextmodeGrid.height', -12, [240, 245, 255]);
	drawCenteredText(`${h} PIXELS`, 12, [255, 140, 180]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### offsetX

#### Get Signature

```ts
get offsetX(): number;
```

Returns the horizontal offset (margin) in pixels from the canvas edge to the grid.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);

	const offset = t.grid.offsetX;
	const cols = t.grid.cols;
	const halfWidth = Math.floor(cols / 2);

	t.push();
	t.translate(-halfWidth, 0);
	t.charColor(140, 255, 220, 150);
	t.char('|');
	t.rect(1, 7);

	t.push();
	t.translate(-2, 0);
	t.char('<');
	t.point();
	t.translate(-1, 0);
	t.char('-');
	t.point();
	t.pop();
	t.pop();

	t.push();
	t.char('.');
	t.charColor(60, 70, 100, 80);
	t.translate(0, 0);
	t.rect(cols, 1);
	t.pop();

	// They will overwrite/clip the lines if they occupy the same cells
	drawCenteredText('TextmodeGrid.offsetX', -8, [240, 245, 255]);
	drawCenteredText('Horizontal margin from canvas edge to grid.', -6, [150, 170, 200]);
	drawCenteredText(`${offset} PX`, 4, [140, 255, 220]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### offsetY

#### Get Signature

```ts
get offsetY(): number;
```

Returns the vertical offset (margin) in pixels from the canvas edge to the grid.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);

	const offset = t.grid.offsetY;
	const rows = t.grid.rows;
	const halfHeight = Math.floor(rows / 2);

	t.push();
	t.translate(0, -halfHeight);
	t.charColor(255, 180, 140, 150);
	t.char('-');
	t.rect(11, 1);

	t.push();
	t.translate(0, -2);
	t.char('^');
	t.point();
	t.translate(0, -1);
	t.char('|');
	t.point();
	t.pop();
	t.pop();

	t.push();
	t.char('.');
	t.charColor(60, 70, 100, 80);
	t.translate(0, 0);
	t.rect(1, rows);
	t.pop();

	drawCenteredText('TextmodeGrid.offsetY', -12, [240, 245, 255]);
	drawCenteredText('Vertical margin from canvas edge to grid.', -10, [150, 170, 200]);
	drawCenteredText(`${offset} PX`, 4, [255, 180, 140]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### rows

#### Get Signature

```ts
get rows(): number;
```

Returns the number of rows in the grid.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);

	const rows = t.grid.rows;
	const halfHeight = Math.floor(rows / 2);

	for (let y = -halfHeight; y < halfHeight; y++) {
		t.push();
		t.translate(0, y);

		const isMarker = (y + halfHeight) % 5 === 0;

		if (isMarker) {
			t.char('-');
			t.charColor(140, 180, 255, 180);
		} else {
			t.char('|');
			t.charColor(60, 70, 100, 100);
		}

		t.point();
		t.pop();
	}

	t.push();
	t.charColor(255, 255, 255);
	t.translate(0, -halfHeight);
	t.char('^');
	t.point();
	t.translate(0, rows - 1);
	t.char('v');
	t.point();
	t.pop();

	drawCenteredText('TextmodeGrid.rows', -12, [240, 245, 255]);
	drawCenteredText(`${rows} ROWS`, 12, [140, 180, 255]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Set Signature

```ts
set rows(newRows): void;
```

Sets the number of rows and locks grid sizing until `responsive()` is called.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `newRows` | `number` |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawLabel(text, x, y, col = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(...col);
	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}
	t.pop();
}

t.draw(() => {
	t.background(20, 10, 25);

	const { cols, rows } = t.grid;
	const time = t.frameCount * 0.1;

	t.charColor(150, 100, 255);
	t.char('=');
	for (let y = 0; y < rows; y++) {
		const w = Math.floor(10 + Math.sin(time + y * 0.3) * 8);
		t.push();
		t.translate(0, y - (rows - 1) / 2);
		t.rect(w, 1);
		t.pop();
	}

	const title = '--- GRID.ROWS SETTER ---';
	drawLabel(title, -(title.length - 1) / 2, -(rows - 1) / 2 + 2, [220, 180, 255]);

	const valText = `ROWS: ${rows}`;
	drawLabel(valText, -(valText.length - 1) / 2, 0, [255, 255, 255]);

	const hint = 'Move mouse to resize rows';
	drawLabel(hint, -(hint.length - 1) / 2, (rows - 1) / 2 - 2, [150, 120, 150]);
});

t.mouseMoved((e) => {
	if (e.position.y !== Number.NEGATIVE_INFINITY) {
		const targetRows = Math.floor(20 + e.position.y * 2);
		t.grid.rows = Math.max(5, Math.min(60, targetRows));
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### width

#### Get Signature

```ts
get width(): number;
```

Returns the total width of the grid in screen pixels.

This is equal to `cols * cellWidth`.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);

	const w = t.grid.width;
	const cols = t.grid.cols;
	const halfWidth = Math.floor(cols / 2);

	t.push();
	t.translate(0, 0);
	t.char('=');
	t.charColor(255, 140, 180, 100);
	t.rect(cols, 1);
	t.pop();

	t.push();
	t.charColor(255, 255, 255);
	t.translate(-halfWidth, 0);
	t.char('[');
	t.point();
	t.translate(cols - 1, 0);
	t.char(']');
	t.point();
	t.pop();

	drawCenteredText('TextmodeGrid.width', -8, [240, 245, 255]);
	drawCenteredText(`${w} PIXELS`, 6, [255, 140, 180]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Methods

### reset()

```ts
reset(): void;
```

Reset the grid to the default number of columns and rows based on the current canvas dimensions, and the grid cell dimensions.

If either `cols` or `rows` were manually set, this method does nothing.
Make sure to call `responsive()` first to restore responsive sizing.

`textmode.js` handles calling this method automatically when the canvas is resized.
You typically do not need to call this method directly.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

let isLocked = false;
let resetAnim = 0;

function drawLabel(text, x, y, col = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(...col);
	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}
	t.pop();
}

t.draw(() => {
	t.background(15, 15, 20);

	const { cols, rows } = t.grid;

	t.char('+');
	t.charColor(40, 40, 60);
	t.rect(cols, rows);

	if (resetAnim > 0) {
		t.char(' ');
		t.charColor(100, 150, 255);
		t.rect(cols * resetAnim, rows * resetAnim);
		resetAnim *= 0.9;
		if (resetAnim < 0.01) resetAnim = 0;
	}

	const stateText = isLocked ? 'MANUAL OVERRIDE: ON' : 'MANUAL OVERRIDE: OFF';
	drawLabel(stateText, -(stateText.length - 1) / 2, -1, isLocked ? [255, 180, 100] : [100, 180, 255]);

	const sizeText = `GRID SIZE: ${cols}x${rows}`;
	drawLabel(sizeText, -(sizeText.length - 1) / 2, 1, [150, 150, 180]);

	const hint = 'Click to toggle t.grid.reset()';
	drawLabel(hint, -(hint.length - 1) / 2, (rows - 1) / 2 - 2, [80, 80, 80]);
});

t.mousePressed(() => {
	isLocked = !isLocked;

	if (isLocked) {
		t.grid.cols = 32;
		t.grid.rows = 16;
	} else {
		t.grid.responsive();
		t.grid.reset();
		resetAnim = 1.0;
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### responsive()

```ts
responsive(): void;
```

Restores responsive sizing so subsequent `t.resizeCanvas` calls recompute cols/rows.

A grid becomes non-responsive when either `cols` or `rows` is manually set.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

let isLocked = false;

function drawLabel(text, x, y, col = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(...col);
	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}
	t.pop();
}

t.draw(() => {
	t.background(10, 20, 15);

	const { cols, rows } = t.grid;
	const time = t.frameCount * 0.05;

	t.charColor(30, 60, 40);
	for (let y = 0; y < rows; y++) {
		for (let x = 0; x < cols; x++) {
			t.push();
			t.translate(x - (cols - 1) / 2, y - (rows - 1) / 2);
			const charCode = 33 + Math.abs(Math.floor(Math.sin(time + (x + y) * 0.1) * 10));
			t.char(String.fromCharCode(charCode));
			t.point();
			t.pop();
		}
	}

	t.char(' ');
	t.charColor(isLocked ? [255, 100, 100] : [100, 255, 150]);
	t.rect(cols - 2, rows - 2);

	const modeText = isLocked ? 'GRID: LOCKED (26x12)' : 'GRID: RESPONSIVE';
	drawLabel(modeText, -(modeText.length - 1) / 2, 0, isLocked ? [255, 150, 150] : [150, 255, 200]);

	const hint = 'Click to toggle';
	drawLabel(hint, -(hint.length - 1) / 2, (rows - 1) / 2 - 2, [100, 100, 100]);
});

t.mousePressed(() => {
	isLocked = !isLocked;

	if (isLocked) {
		t.grid.cols = 26;
		t.grid.rows = 12;
	} else {
		t.grid.responsive();
		t.grid.reset();
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
