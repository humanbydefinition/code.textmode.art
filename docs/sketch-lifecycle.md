---
title: Sketch Lifecycle
description: Understand the textmode.js create, setup, draw, resize, manual render, and destroy lifecycle.
---

# Sketch lifecycle

Most sketches follow the same lifecycle. (¬‿¬)ﾉ

1. Create a [`Textmodifier`](/api/textmode.js/classes/Textmodifier) with [`textmode.create()`](/api/textmode.js/classes/textmode#create).
2. Load resources or calculate layout in [`setup()`](/api/textmode.js/classes/Textmodifier#setup).
3. Draw each frame in [`draw()`](/api/textmode.js/classes/Textmodifier#draw).
4. Respond to browser or host-app changes with [`windowResized()`](/api/textmode.js/classes/Textmodifier#windowresized).
5. Clean up with [`destroy()`](/api/textmode.js/classes/Textmodifier#destroy) when the sketch is removed.

## Create

[`textmode.create()`](/api/textmode.js/classes/textmode#create) accepts [`TextmodeOptions`](/api/textmode.js/type-aliases/TextmodeOptions):

```js
const t = textmode.create({
  width: 800,
  height: 600,
  fontSize: 16,
  frameRate: 60,
});
```

Use `width` and `height` when `textmode.js` creates the canvas. Use `canvas` when your app already owns an `HTMLCanvasElement`.

## Setup

[`setup()`](/api/textmode.js/classes/Textmodifier#setup) runs after the renderer and base layer are initialized:

```js
let font;

t.setup(async () => {
  font = await t.loadFont("./fonts/display.woff");
  console.log(t.grid.cols, t.grid.rows);
});
```

Use setup when you need access to initialized resources such as `t.grid`, `t.font`, loaded media, custom shaders, or layer-local assets.

## Draw

[`draw()`](/api/textmode.js/classes/Textmodifier#draw) sets the callback for the automatic render loop:

```js
t.draw(() => {
  t.background(0);
  t.char("*");
  t.rotateZ(t.frameCount);
  t.rect(8, 8);
});
```

The draw callback should describe the whole frame. Call [`background()`](/api/textmode.js/classes/Textmodifier#background) or [`clear()`](/api/textmode.js/classes/Textmodifier#clear) at the start when you do not want previous contents to remain.

## Resize

Use [`windowResized()`](/api/textmode.js/classes/Textmodifier#windowresized) for browser-driven resizing:

```js
t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

[`resizeCanvas()`](/api/textmode.js/classes/Textmodifier#resizecanvas) updates the canvas and layer resources. If it is called during a render frame, the resize is deferred safely.

## Manual rendering

By default, `textmode.js` renders automatically. For framework integration, previews, or event-driven sketches, pause the loop and render on demand:

```js
t.noLoop();

button.addEventListener("click", () => {
  t.redraw();
});
```

Useful APIs:

- [`noLoop()`](/api/textmode.js/classes/Textmodifier#noloop)
- [`loop()`](/api/textmode.js/classes/Textmodifier#loop)
- [`redraw()`](/api/textmode.js/classes/Textmodifier#redraw)
- [`isLooping()`](/api/textmode.js/classes/Textmodifier#islooping)

## Teardown

Call [`destroy()`](/api/textmode.js/classes/Textmodifier#destroy) when a sketch is removed from an app:

```js
function unmount() {
  t.destroy();
}
```

This disposes textmode-managed resources, input listeners, media sources, framebuffers, plugins, and internal layers.

## Related APIs

- [`textmode.create()`](/api/textmode.js/classes/textmode#create)
- [`TextmodeOptions`](/api/textmode.js/type-aliases/TextmodeOptions)
- [`Textmodifier.setup()`](/api/textmode.js/classes/Textmodifier#setup)
- [`Textmodifier.draw()`](/api/textmode.js/classes/Textmodifier#draw)
- [`Textmodifier.windowResized()`](/api/textmode.js/classes/Textmodifier#windowresized)
- [`Textmodifier.destroy()`](/api/textmode.js/classes/Textmodifier#destroy)
