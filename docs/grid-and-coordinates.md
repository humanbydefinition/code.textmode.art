---
title: Grid and Coordinates
description: Learn how textmode.js maps pixels to text cells, center-based coordinates, grid metadata, and input coordinate mapping.
---

# Grid and coordinates

`textmode.js` renders a grid of character cells. Your code works mostly in cell coordinates, while the library handles canvas pixels, font metrics, and WebGL rendering.

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

  t.char('+');
  t.charColor(255);
  t.point(); // draws at the center

  t.translate(10, -4);
  t.char('@');
  t.point(); // draws 10 cells right and 4 cells up
});
```

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

  t.char('#');
  t.charColor(255, 120, 80);
  t.rect(t.grid.cols, t.grid.rows);
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
t.inputGrid('topmost');
```

## Related APIs

- [`Textmodifier.grid`](/api/textmode.js/classes/Textmodifier#grid)
- [`TextmodeGrid`](/api/textmode.js/classes/TextmodeGrid)
- [`Textmodifier.inputGrid()`](/api/textmode.js/classes/Textmodifier#inputgrid)
- [`Textmodifier.width`](/api/textmode.js/classes/Textmodifier#width)
- [`Textmodifier.height`](/api/textmode.js/classes/Textmodifier#height)

