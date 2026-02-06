---
layout: doc
editLink: true
title: TextmodeGrid
description: Manages the grid of each TextmodeLayer instance.
category: Classes
api: true
kind: Class
lastModified: 2026-02-06
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
  // Lock the grid to a fixed resolution of 40x25 characters
  // regardless of the window size.
  t.grid.cols = 40;
  t.grid.rows = 25;
});

t.draw(() => {
  t.background(0);
  t.charColor(0, 255, 0);
  t.char('#');

  // Draw a border around the fixed grid
  t.rect(t.grid.cols, t.grid.rows);
});
```

## Accessors

### cellHeight

#### Get Signature

```ts
get cellHeight(): number;
```

Returns the height of each cell in the grid in screen pixels.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const h = t.grid.cellHeight;
  const rows = t.grid.rows;

  // Draw vertical stripes to visualize rows
  for (let y = -rows / 2; y < rows / 2; y++) {
    // Gradient based on Y position
    const brightness = 100 + (Math.sin(y * 0.2 + t.frameCount * 0.1) * 0.5 + 0.5) * 155;
    t.cellColor(0, brightness * 0.5, brightness);

    t.push();
    t.translate(0, y);
    // Draw a horizontal line across the center column
    t.char('=');
    t.charColor(255);
    t.point();
    t.pop();
  }

  // Display the cell height in pixels
  const label = `CELL H: ${h}px`;
  for (let i = 0; i < label.length; i++) {
    t.push();
    t.translate(i - label.length / 2, 0);
    t.char(label[i]);
    t.cellColor(0); // clear background for text
    t.charColor(255, 255, 0);
    t.point();
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Returns

`number`

***

### cellWidth

#### Get Signature

```ts
get cellWidth(): number;
```

Returns the width of each cell in the grid in screen pixels.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const w = t.grid.cellWidth;
  const h = t.grid.cellHeight;

  t.char('▓');
  t.charColor(255, 100, 100);
  t.rect(11, 11);

  // Display pixel dimensions
  const label = `${w}x${h}`;
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

##### Returns

`number`

***

### cols

#### Get Signature

```ts
get cols(): number;
```

Returns the number of columns in the grid.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  // Draw a frame around the grid
  const w = t.grid.cols;
  const h = t.grid.rows;

  t.char('#');
  t.charColor(255, 100, 100);
  t.rect(w, h);

  // Clear center
  t.char(' ');
  t.cellColor(0);
  t.rect(w - 2, h - 2);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Returns

`number`

#### Set Signature

```ts
set cols(newCols): void;
```

Sets the number of columns and locks grid sizing until `responsive()` is called.

##### Example

```javascript
// Locking the grid columns
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.setup(() => {
  // Lock the grid to exactly 40 columns.
  // Resizing the window will now only increase the margins.
  t.grid.cols = 40;
});

t.draw(() => {
  t.background(0, 20, 0);

  // Draw a pattern that fills the 40-column width
  for (let x = -20; x < 20; x++) {
    const h = 5 + Math.sin(t.frameCount * 0.1 + x * 0.5) * 5;
    t.push();
    t.translate(x + 0.5, 0);
    t.charColor(0, 255, 100);
    t.char('+');
    t.rect(1, h);
    t.pop();
  }

  // Display the fixed column count
  const label = `LOCKED: ${t.grid.cols} COLS`;
  t.charColor(255);
  for(let i=0; i<label.length; i++) {
    t.push(); t.translate(i - label.length/2, 10); t.char(label[i]); t.point(); t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `newCols` | `number` |

##### Returns

`void`

***

### height

#### Get Signature

```ts
get height(): number;
```

Returns the total height of the grid in screen pixels.

This is equal to `rows * cellHeight`.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  // Display the total grid height in pixels
  const h = t.grid.height;
  const label = `${h}px`;

  // Draw a vertical gradient ruler
  for (let i = 0; i < t.grid.rows; i++) {
    const y = i - t.grid.rows / 2;
    // Gradient from center (blue) to edges (pink)
    const brightness = Math.abs(y / (t.grid.rows / 2)) * 255;

    t.push();
    t.translate(0, y);
    t.char('|');
    t.charColor(255, 100, 255 - brightness);
    t.point();
    t.pop();
  }

  // Overlay the pixel height text
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

##### Returns

`number`

***

### offsetX

#### Get Signature

```ts
get offsetX(): number;
```

Returns the horizontal offset (margin) in pixels from the canvas edge to the grid.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const margin = t.grid.offsetX;
  const text = `X MARGIN: ${margin}px`;

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

##### Returns

`number`

***

### offsetY

#### Get Signature

```ts
get offsetY(): number;
```

Returns the vertical offset (margin) in pixels from the canvas edge to the grid.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const margin = t.grid.offsetY;
  const text = `Y MARGIN: ${margin}px`;

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

##### Returns

`number`

***

### rows

#### Get Signature

```ts
get rows(): number;
```

Returns the number of rows in the grid.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const rows = t.grid.rows;

  // Draw horizontal stripes
  for (let y = 0; y < rows; y++) {
    const brightness = (y / rows) * 255;
    t.cellColor(brightness, 0, 255 - brightness);

    // Draw a full row
    t.push();
    // Note: Default coordinates are centered.
    // We need to calculate Y relative to center.
    t.translateY(y - rows / 2 + 0.5);
    t.rect(t.grid.cols, 1);
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Returns

`number`

#### Set Signature

```ts
set rows(newRows): void;
```

Sets the number of rows and locks grid sizing until `responsive()` is called.

##### Example

```javascript
// Locking the grid rows
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.setup(() => {
  // Lock the grid to exactly 15 rows.
  t.grid.rows = 15;
});

t.draw(() => {
  t.background(20, 0, 40);

  // Visualize the 15 locked rows
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
  for(let i=0; i<label.length; i++) {
    t.push(); t.translate(i - label.length/2, 0); t.char(label[i]); t.cellColor(0); t.point(); t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `newRows` | `number` |

##### Returns

`void`

***

### width

#### Get Signature

```ts
get width(): number;
```

Returns the total width of the grid in screen pixels.

This is equal to `cols * cellWidth`.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  // Visualize the grid width vs window width
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

##### Returns

`number`

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

// Toggle between fixed size and responsive
t.mousePressed(() => {
  locked = !locked;
  if (locked) {
    // Lock to small grid
    t.grid.cols = 20;
    t.grid.rows = 10;
  } else {
    // Restore responsive sizing
    t.grid.responsive();
    t.grid.reset();
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
// Restoring responsive sizing
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let isLocked = false;

t.draw(() => {
  t.background(0);

  t.charColor(isLocked ? t.color(255, 100, 100) : t.color(100, 255, 100));
  t.char(isLocked ? 'L' : 'R');

  // Draw a frame fitting the current grid
  t.rect(t.grid.cols - 2, t.grid.rows - 2);

  const msg = isLocked ? "LOCKED (Fixed 20x10)" : "RESPONSIVE (Auto-size)";
  for(let i=0; i<msg.length; i++) {
    t.push(); t.translate(i - msg.length/2, 0); t.char(msg[i]); t.cellColor(0); t.point(); t.pop();
  }
});

t.mousePressed(() => {
  isLocked = !isLocked;

  if (isLocked) {
    t.grid.cols = 20;
    t.grid.rows = 10;
  } else {
    // Restore automatic sizing based on window/canvas dimensions
    t.grid.responsive();
    t.grid.reset();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
