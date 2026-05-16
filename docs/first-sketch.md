---
title: First Sketch
description: Create your first textmode.js sketch and learn the smallest useful setup, draw, and resize pattern.
---

# First sketch

This page shows the smallest complete `textmode.js` sketch: create a canvas, draw one frame repeatedly, and keep the canvas responsive.

If you have not installed the library yet, start with [Installation](/docs/installation).

## Create a textmode canvas

The main entry point is [`textmode.create()`](/api/textmode.js/classes/textmode#create). It returns a [`Textmodifier`](/api/textmode.js/classes/Textmodifier) instance, conventionally named `t`:

```js
import { textmode } from 'textmode.js';

const t = textmode.create({
  width: window.innerWidth,
  height: window.innerHeight,
  fontSize: 16,
  frameRate: 60,
});
```

If you do not pass an existing canvas, `textmode.js` creates one and adds it to the page.

## Draw every frame

Use [`draw()`](/api/textmode.js/classes/Textmodifier#draw) for animation. The callback runs once per frame:

```js
t.draw(() => {
  t.background(18, 20, 28);

  t.char('@');
  t.charColor(255, 180, 90);
  t.cellColor(0, 0, 0);

  t.rotateZ(t.frameCount * 2);
  t.rect(12, 8);
});
```

Drawing works in grid cells rather than pixels. `rect(12, 8)` fills a block that is 12 cells wide and 8 cells tall.

## Add setup when you load resources

Use [`setup()`](/api/textmode.js/classes/Textmodifier#setup) for work that should happen after the renderer, grid, and default font are ready:

```js
let poster;

t.setup(async () => {
  poster = await t.loadImage('./poster.png');
  poster.characters(' .:-=+*#%@');
});
```

The setup callback may be synchronous or asynchronous.

## Handle resizing

Use [`windowResized()`](/api/textmode.js/classes/Textmodifier#windowresized) with [`resizeCanvas()`](/api/textmode.js/classes/Textmodifier#resizecanvas) when the sketch should follow the browser viewport:

```js
t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Complete sketch

```js
import { textmode } from 'textmode.js';

const t = textmode.create({
  width: window.innerWidth,
  height: window.innerHeight,
  fontSize: 16,
  frameRate: 60,
});

t.draw(() => {
  t.background(18, 20, 28);

  t.char('@');
  t.charColor(255, 180, 90);
  t.cellColor(0, 0, 0);

  t.rotateZ(t.frameCount * 2);
  t.rect(12, 8);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Next steps

- [Sketch lifecycle](/docs/sketch-lifecycle) explains `setup`, `draw`, resizing, and teardown.
- [Grid and coordinates](/docs/grid-and-coordinates) explains how positions map to cells.
- [Drawing shapes](/docs/drawing-shapes) covers the built-in primitives.
- [Characters and colors](/docs/characters-and-colors) covers glyph and color state.

