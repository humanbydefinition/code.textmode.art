---
layout: doc
editLink: true
title: TextmodeGrid
description: Grid used by a textmode layer.
category: Classes
api: true
kind: Class
lastModified: 2026-05-27
hasConstructor: false
---

[textmode.js](../index.md) / TextmodeGrid

# Class: TextmodeGrid

Grid used by a textmode layer.

The grid determines how characters are positioned and sized. By default, it is
responsive and recalculates columns and rows from the canvas size and glyph cell size.

You can manually set `cols` and `rows` to lock the grid to a specific size.

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

t.draw(() => {
	t.background(6, 10, 22);

	t.push();
	t.char('+');
	t.charColor(100, 255, 180);
	t.rect(t.grid.cols, t.grid.rows);
	t.pop();
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEGRID.CREATION', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CHARACTER GRID INSTANCE', x, y++, 100, 220, 255);
	drawText('Manages positioning and layout.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const dims = t.grid.cols + 'x' + t.grid.rows;
	drawText(`GRID: ${dims}`, x, y++, 100, 255, 180);
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

Height of each grid cell in screen pixels.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

t.draw(() => {
	t.background(6, 10, 22);

	t.push();
	t.translate(14, 0);
	t.charColor(255, 180, 100);
	t.char('▲');
	t.rect(1, t.grid.cellHeight);
	t.pop();
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEGRID.CELLHEIGHT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: INDIVIDUAL CELL PIXEL HEIGHT', x, y++, 100, 220, 255);
	drawText('Height in pixels of a single cell.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CELL H: ${t.grid.cellHeight} px`, x, y++, 255, 180, 100);
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

Width of each grid cell in screen pixels.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

t.draw(() => {
	t.background(6, 10, 22);

	t.push();
	t.translate(0, 0);
	t.charColor(255, 180, 100);
	t.char('◄');
	t.rect(t.grid.cellWidth, 1);
	t.pop();
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEGRID.CELLWIDTH', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: INDIVIDUAL CELL PIXEL WIDTH', x, y++, 100, 220, 255);
	drawText('Width in pixels of a single cell.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CELL PIXEL WIDTH: ${t.grid.cellWidth} px`, x, y++, 255, 180, 100);
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

Number of columns in the grid.

##### Returns

`number`

##### Example

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
	const halfWidth = Math.floor(cols / 2);

	t.push();
	t.translate(0, 0);
	t.char('=');
	t.charColor(100, 160, 255, 120);
	t.rect(cols, 1);
	t.pop();

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

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEGRID.COLS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: COLUMN COUNT READOUT', x, y++, 100, 220, 255);
	drawText('Number of character columns in grid.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`GRID COLUMNS: ${t.grid.cols} cells`, x, y++, 100, 160, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Set Signature

```ts
set cols(newCols): void;
```

Set the number of columns and lock grid sizing until `responsive()` is called.

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

const labelLayer = t.layers.add();

t.draw(() => {
	t.background(6, 10, 22);

	// Animate column count dynamically between 16 and 40
	const cols = 28 + Math.floor(Math.sin(t.frameCount * 0.05) * 12);
	t.grid.cols = cols;

	const rows = t.grid.rows;
	const halfWidth = Math.floor(cols / 2);
	const halfHeight = Math.floor(rows / 2);

	t.push();
	t.translate(-halfWidth, -halfHeight);
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			const wave = Math.sin(c * 0.3 + t.frameCount * 0.08) * 0.4 + 0.5;
			const rNormalized = r / rows;

			t.push();
			t.translate(c, r);
			if (Math.abs(rNormalized - wave) < 0.15) {
				t.char('★');
				t.charColor(100, 255, 180);
			} else {
				t.char('.');
				t.charColor(50, 70, 100);
			}
			t.point();
			t.pop();
		}
	}
	t.pop();
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEGRID.SETCOLS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: MUTATE COLUMN COUNT', x, y++, 100, 220, 255);
	drawText('Dynamically overrides grid width.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`GRID COLS: ${t.grid.cols} cells`, x, y++, 100, 180, 255);
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

Total grid height in screen pixels.

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

const labelLayer = t.layers.add();

t.draw(() => {
	t.background(6, 10, 22);

	const rows = t.grid.rows;
	const halfHeight = Math.floor(rows / 2);

	t.push();
	t.translate(14, 0);
	t.char('|');
	t.charColor(140, 255, 180, 100);
	t.rect(1, rows);
	t.pop();

	t.push();
	t.charColor(255, 255, 255);
	t.translate(14, -halfHeight);
	t.char('▲');
	t.point();
	t.translate(0, rows - 1);
	t.char('▼');
	t.point();
	t.pop();
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEGRID.HEIGHT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TOTAL GRID PIXEL HEIGHT', x, y++, 100, 220, 255);
	drawText('Returns pixel height of grid.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`GRID PIXEL HEIGHT: ${t.grid.height} px`, x, y++, 140, 255, 180);
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

Horizontal offset in pixels from the canvas edge to the grid.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	const cols = t.grid.cols;
	const rows = t.grid.rows;
	const left = -Math.floor(cols / 2);
	const top = -Math.floor(rows / 2);
	t.charColor(60, 80, 120);
	t.char('#');
	t.rect(cols, rows);
	t.push();
	t.translate(0, 1);
	t.charColor(100, 255, 180);
	drawText(`OFFSET X: ${t.grid.offsetX}px`, left + 4, 0, 100, 255, 180);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEGRID.OFFSETX', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: HORIZONTAL OFFSET', x, y++, 100, 220, 255);
	drawText('Grid centers inside canvas.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`PIXELS: ${t.grid.offsetX}`, x, y++, 140, 255, 180);
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

Vertical offset in pixels from the canvas edge to the grid.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	const cols = t.grid.cols;
	const rows = t.grid.rows;
	const left = -Math.floor(cols / 2);
	const top = -Math.floor(rows / 2);
	t.charColor(60, 80, 120);
	t.char('#');
	t.rect(cols, rows);
	t.push();
	t.translate(1, 0);
	t.charColor(100, 255, 180);
	drawText(`OFFSET Y: ${t.grid.offsetY}px`, left + 4, 0, 100, 255, 180);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEGRID.OFFSETY', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: VERTICAL OFFSET', x, y++, 100, 220, 255);
	drawText('Grid centers inside canvas.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`PIXELS: ${t.grid.offsetY}`, x, y++, 140, 255, 180);
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

Number of rows in the grid.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

t.draw(() => {
	t.background(6, 10, 22);

	const rows = t.grid.rows;
	const halfHeight = Math.floor(rows / 2);

	t.push();
	t.translate(14, 0);
	t.char('|');
	t.charColor(100, 180, 255, 120);
	t.rect(1, rows);
	t.pop();

	t.push();
	t.charColor(255, 255, 255);
	t.translate(14, -halfHeight);
	t.char('▲');
	t.point();
	t.translate(0, rows - 1);
	t.char('▼');
	t.point();
	t.pop();
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEGRID.ROWS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: ROW COUNT READOUT', x, y++, 100, 220, 255);
	drawText('Number of character rows in grid.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`GRID ROWS: ${t.grid.rows} cells`, x, y++, 100, 180, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Set Signature

```ts
set rows(newRows): void;
```

Set the number of rows and lock grid sizing until `responsive()` is called.

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

const labelLayer = t.layers.add();

t.draw(() => {
	t.background(6, 10, 22);

	const cols = t.grid.cols;
	// Animate row count dynamically between 12 and 28
	const rows = 20 + Math.floor(Math.sin(t.frameCount * 0.05) * 8);
	t.grid.rows = rows;

	const halfWidth = Math.floor(cols / 2);
	const halfHeight = Math.floor(rows / 2);

	t.push();
	t.translate(-halfWidth, -halfHeight);
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			const wave = Math.sin(r * 0.3 + t.frameCount * 0.08) * 0.4 + 0.5;
			const cNormalized = c / cols;

			t.push();
			t.translate(c, r);
			if (Math.abs(cNormalized - wave) < 0.15) {
				t.char('★');
				t.charColor(255, 180, 100);
			} else {
				t.char('.');
				t.charColor(70, 50, 100);
			}
			t.point();
			t.pop();
		}
	}
	t.pop();
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEGRID.SETROWS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: MUTATE ROW COUNT', x, y++, 100, 220, 255);
	drawText('Dynamically overrides grid height.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`GRID ROWS: ${t.grid.rows} cells`, x, y++, 100, 180, 255);
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

Total grid width in screen pixels.

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

const labelLayer = t.layers.add();

t.draw(() => {
	t.background(6, 10, 22);

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
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEGRID.WIDTH', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TOTAL GRID PIXEL WIDTH', x, y++, 100, 220, 255);
	drawText('Returns pixel width of character grid.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`GRID PIXEL WIDTH: ${t.grid.width} px`, x, y++, 255, 140, 180);
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

Recalculate columns and rows from the current canvas and cell dimensions.

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

const labelLayer = t.layers.add();
let gridStatus = 'CUSTOM (26x12)';

t.setup(() => {
	t.grid.cols = 26;
	t.grid.rows = 12;
});

t.draw(() => {
	t.background(6, 10, 22);

	t.push();
	t.char('+');
	t.charColor(100, 255, 150);
	t.rect(t.grid.cols, t.grid.rows);
	t.pop();
});

t.mouseClicked(() => {
	if (t.grid.cols === 26 && t.grid.rows === 12) {
		t.grid.responsive();
		t.grid.reset();
		gridStatus = 'RESET TO VIEWPORT';
	} else {
		t.grid.cols = 26;
		t.grid.rows = 12;
		gridStatus = 'CUSTOM (26x12)';
	}
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEGRID.RESET', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: RESET GRID TO FIT VIEWPORT', x, y++, 100, 220, 255);
	drawText('Resets grid size to viewport.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`GRID STATUS: ${gridStatus}`, x, y++, 140, 190, 255);
	const dims = t.grid.cols + 'x' + t.grid.rows;
	drawText(`DIMS: ${dims}`, x, y++, 140, 190, 255);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('Click to toggle custom grid size.', x, y++, 120, 205, 255);
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

Restore responsive sizing so subsequent canvas resizes recompute columns and rows.

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

const labelLayer = t.layers.add();
let isLocked = false;

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

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	const modeText = isLocked ? 'LOCKED (26x12)' : 'RESPONSIVE';

	drawText('TEXTMODEGRID.RESPONSIVE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: AUTO-RESPONSIVE GRID', x, y++, 100, 220, 255);
	drawText(`GRID STATE: ${modeText}`, x, y++, isLocked ? 255 : 150, isLocked ? 150 : 255, isLocked ? 150 : 200);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('Click anywhere to toggle grid lock.', x, y++, 140, 190, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
