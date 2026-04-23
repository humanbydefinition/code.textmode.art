---
layout: doc
editLink: true
title: TextmodeGrid
description: Manages the grid of each TextmodeLayer instance.
category: Classes
api: true
kind: Class
lastModified: 2026-04-23
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.setup(() => {
	t.grid.cols = 40;
	t.grid.rows = 25;
});

t.draw(() => {
	t.background(0);
	t.charColor(0, 255, 0);
	t.char('#');
	t.rect(t.grid.cols, t.grid.rows);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeGrid/creation/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
	t.background(0);

	const rows = t.grid.rows;
	const label = `CELL H: ${t.grid.cellHeight}px`;

	for (let y = -rows / 2; y < rows / 2; y++) {
		const brightness = 100 + (Math.sin(y * 0.2 + t.frameCount * 0.1) * 0.5 + 0.5) * 155;

		t.cellColor(0, brightness * 0.5, brightness);
		t.push();
		t.translate(0, y);
		t.char('=');
		t.charColor(255);
		t.point();
		t.pop();
	}

	for (let i = 0; i < label.length; i++) {
		t.push();
		t.translate(i - label.length / 2, 0);
		t.char(label[i]);
		t.cellColor(0);
		t.charColor(255, 255, 0);
		t.point();
		t.pop();
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeGrid/cellHeight/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
	t.background(0);

	const label = `${t.grid.cellWidth}x${t.grid.cellHeight}`;

	t.char('▓');
	t.charColor(255, 100, 100);
	t.rect(11, 11);

	for (let i = 0; i < label.length; i++) {
		t.push();
		t.translate(i - label.length / 2, 0);
		t.char(label[i]);
		t.charColor(255);
		t.point();
		t.pop();
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeGrid/cellWidth/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
	t.background(0);

	const cols = t.grid.cols;
	const rows = t.grid.rows;

	t.char('#');
	t.charColor(255, 100, 100);
	t.rect(cols, rows);

	t.char(' ');
	t.cellColor(0);
	t.rect(cols - 2, rows - 2);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeGrid/cols/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.setup(() => {
	t.grid.cols = 40;
});

t.draw(() => {
	t.background(0, 20, 0);

	for (let x = -20; x < 20; x++) {
		const height = 5 + Math.sin(t.frameCount * 0.1 + x * 0.5) * 5;

		t.push();
		t.translate(x + 0.5, 0);
		t.charColor(0, 255, 100);
		t.char('+');
		t.rect(1, height);
		t.pop();
	}

	const label = `LOCKED: ${t.grid.cols} COLS`;
	t.charColor(255);

	for (let i = 0; i < label.length; i++) {
		t.push();
		t.translate(i - label.length / 2, 10);
		t.char(label[i]);
		t.point();
		t.pop();
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeGrid/setCols/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
	t.background(0);

	const label = `${t.grid.height}px`;

	for (let i = 0; i < t.grid.rows; i++) {
		const y = i - t.grid.rows / 2;
		const brightness = Math.abs(y / (t.grid.rows / 2)) * 255;

		t.push();
		t.translate(0, y);
		t.char('|');
		t.charColor(255, 100, 255 - brightness);
		t.point();
		t.pop();
	}

	for (let i = 0; i < label.length; i++) {
		t.push();
		t.translate(i - label.length / 2, 0);
		t.char(label[i]);
		t.cellColor(0);
		t.charColor(255);
		t.point();
		t.pop();
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeGrid/height/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
	t.background(0);

	const text = `X MARGIN: ${t.grid.offsetX}px`;

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i - text.length / 2, -2);
		t.char(text[i]);
		t.charColor(200, 200, 255);
		t.point();
		t.pop();
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeGrid/offsetX/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
	t.background(0);

	const text = `Y MARGIN: ${t.grid.offsetY}px`;

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i - text.length / 2, 2);
		t.char(text[i]);
		t.charColor(255, 200, 200);
		t.point();
		t.pop();
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeGrid/offsetY/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
	t.background(0);

	const rows = t.grid.rows;

	for (let y = 0; y < rows; y++) {
		const brightness = (y / rows) * 255;

		t.cellColor(brightness, 0, 255 - brightness);
		t.push();
		t.translateY(y - rows / 2 + 0.5);
		t.rect(t.grid.cols, 1);
		t.pop();
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeGrid/rows/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.setup(() => {
	t.grid.rows = 15;
});

t.draw(() => {
	t.background(20, 0, 40);

	for (let y = -7; y <= 7; y++) {
		const brightness = 127 + 127 * Math.sin(t.frameCount * 0.1 + y);

		t.push();
		t.translate(0, y);
		t.charColor(brightness, 100, 255);
		t.char('=');
		t.rect(t.grid.cols, 1);
		t.pop();
	}

	const label = `LOCKED: ${t.grid.rows} ROWS`;
	t.charColor(255, 255, 0);

	for (let i = 0; i < label.length; i++) {
		t.push();
		t.translate(i - label.length / 2, 0);
		t.char(label[i]);
		t.cellColor(0);
		t.point();
		t.pop();
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeGrid/setRows/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
	t.background(0);

	const percent = (t.grid.width / window.innerWidth) * 100;
	const text = `Grid covers ${percent.toFixed(1)}% of width`;

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i - text.length / 2, 0);
		t.char(text[i]);
		t.charColor(0, 255, 255);
		t.point();
		t.pop();
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeGrid/width/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let locked = false;

t.draw(() => {
	t.background(0);
	t.charColor(255);
	t.char(locked ? 'L' : 'R');
	t.rect(t.grid.cols, t.grid.rows);
});

t.mousePressed(() => {
	locked = !locked;

	if (locked) {
		t.grid.cols = 20;
		t.grid.rows = 10;
		return;
	}

	t.grid.responsive();
	t.grid.reset();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeGrid/reset/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let isLocked = false;

t.draw(() => {
	t.background(0);
	t.charColor(isLocked ? t.color(255, 100, 100) : t.color(100, 255, 100));
	t.char(isLocked ? 'L' : 'R');
	t.rect(t.grid.cols - 2, t.grid.rows - 2);

	const message = isLocked ? 'LOCKED (Fixed 26x10)' : 'RESPONSIVE (Auto-size)';

	for (let i = 0; i < message.length; i++) {
		t.push();
		t.translate(i - message.length / 2, 0);
		t.char(message[i]);
		t.cellColor(0);
		t.point();
		t.pop();
	}
});

t.mousePressed(() => {
	isLocked = !isLocked;

	if (isLocked) {
		t.grid.cols = 26;
		t.grid.rows = 10;
		return;
	}

	t.grid.responsive();
	t.grid.reset();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeGrid/responsive/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>
