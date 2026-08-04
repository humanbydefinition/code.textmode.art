---
title: Grid and Coordinates
description: Learn how textmode.js maps pixels to text cells, center-based coordinates, grid metadata, and input coordinate mapping.
---

# Grid and coordinates

`textmode.js` renders a grid of character cells. Your code works mostly in cell coordinates, while the library handles canvas pixels, font metrics, and WebGL rendering. (⊙_⊙)

## Center-based coordinates

The drawing coordinate system is centered:

- `(0, 0)` is the center of the active grid.
- negative X moves left.
- positive X moves right.
- negative Y moves up.
- positive Y moves down.
- Z is available for 3D transforms and camera workflows.

```js
t.draw(() => {
  t.background(0);

  t.char("+");
  t.charColor(255);
  t.point(); // draws at the center

  t.translate(10, -4);
  t.char("@");
  t.point(); // draws 10 cells right and 4 cells up
});
```

## Map cell indices exactly

Grid indices use a top-left origin, while drawing coordinates use the center of
the grid. To place content at an exact column or row, including on even-sized
grids, map the index to the center of that cell:

```js
function cellIndexToCentered(index, dimension) {
  return index - (dimension - 1) / 2;
}

const x = cellIndexToCentered(column, t.grid.cols);
const y = cellIndexToCentered(row, t.grid.rows);
t.print("A", x, y);
```

For example, the first column of a 5-column grid is centered at `-2`, while the
first column of a 4-column grid is centered at `-1.5`. Even-sized grids therefore
require half-integer coordinates for cell-exact placement.

`-Math.floor(dimension / 2)` is useful as an approximate left or top layout
anchor, especially when content has a margin. It is not the center of the first
cell on an even-sized grid and can clip or shift content placed directly on a
framebuffer edge.

## Grid metadata

Use [`t.grid`](/api/textmode.js/classes/Textmodifier#grid) to inspect the active [`TextmodeGrid`](/api/textmode.js/classes/TextmodeGrid):

```js
console.log(t.grid.cols);
console.log(t.grid.rows);
console.log(t.grid.cellWidth);
console.log(t.grid.cellHeight);
```

The grid depends on canvas size, font size, and the active font or tileset. When those change, the grid can change too.

## Canvas size vs grid size

[`t.width`](/api/textmode.js/classes/Textmodifier#width) and [`t.height`](/api/textmode.js/classes/Textmodifier#height) are canvas dimensions in pixels.

[`t.grid.cols`](/api/textmode.js/classes/TextmodeGrid#cols) and [`t.grid.rows`](/api/textmode.js/classes/TextmodeGrid#rows) are drawing dimensions in cells.

```js
t.draw(() => {
  t.background(0);

  t.char("#");
  t.charColor(255, 120, 80);
  t.rect(t.grid.cols, t.grid.rows);
});
```

## Pixel density

The sketch has three related sizes:

- The logical canvas size: the `width` and `height` you pass to `textmode.create()` or [`resizeCanvas()`](/api/textmode.js/classes/Textmodifier#resizecanvas).
- The CSS display size: how large the canvas appears on the page.
- The backing-store size: the internal pixel buffer used by WebGL.

By default, these use a pixel density of `1`. With [`pixelDensity`](/api/textmode.js/type-aliases/TextmodeOptions#pixeldensity), an internally-created canvas can keep the same logical and CSS size while rendering to a denser backing store:

```js
const t = textmode.create({
  width: 800,
  height: 600,
  fontSize: 16,
  pixelDensity: window.devicePixelRatio,
});
```

You can also read or update it at runtime with [`t.pixelDensity()`](/api/textmode.js/classes/Textmodifier/methods/pixelDensity):

```js
t.pixelDensity(2);
```

`t.width`, `t.height`, and `t.grid` remain based on the logical canvas size, not the multiplied backing-store size. That means drawing code stays stable when you move between standard and HiDPI displays.

When you resize a HiDPI sketch, keep passing logical dimensions:

```js
t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Responsive and fixed grids

The grid is responsive by default. You can also set rows or columns directly:

```js
t.grid.cols = 80;
t.grid.rows = 45;
```

Call [`grid.responsive()`](/api/textmode.js/classes/TextmodeGrid#responsive) to return to responsive sizing:

```js
t.grid.responsive();
```

Call [`grid.reset()`](/api/textmode.js/classes/TextmodeGrid#reset) after manual changes when you want to recompute from the current canvas and font metrics.

## Layer grids

Each [`TextmodeLayer`](/api/textmode.js/namespaces/layering/classes/TextmodeLayer.md) has its own grid. Inside a layer's draw callback, `t.grid` resolves to that active layer:

```js
const smallLayer = t.layers.add({ fontSize: 8 });

smallLayer.draw(() => {
  t.background(0);
  t.rect(t.grid.cols, t.grid.rows);
});
```

This allows different layers to use different font sizes, fonts, and grid densities in one composition.

## Input coordinates

Mouse and touch coordinates also use center-based grid coordinates. By default, input maps to the topmost visible layer. Use [`inputGrid()`](/api/textmode.js/classes/Textmodifier#inputgrid) to lock input to a specific grid:

```js
t.inputGrid(t.layers.base.grid);

t.mousePressed((data) => {
  console.log(data.position.x, data.position.y);
});
```

Return to responsive topmost-layer mapping with:

```js
t.inputGrid("topmost");
```

## Related APIs

- [`Textmodifier.grid`](/api/textmode.js/classes/Textmodifier#grid)
- [`TextmodeGrid`](/api/textmode.js/classes/TextmodeGrid)
- [`Textmodifier.inputGrid()`](/api/textmode.js/classes/Textmodifier#inputgrid)
- [`Textmodifier.width`](/api/textmode.js/classes/Textmodifier#width)
- [`Textmodifier.height`](/api/textmode.js/classes/Textmodifier#height)
- [`Textmodifier.pixelDensity()`](/api/textmode.js/classes/Textmodifier/methods/pixelDensity)
