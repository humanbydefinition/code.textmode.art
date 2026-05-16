---
title: Framework Integration
description: Integrate textmode.js with framework-owned canvases, overlay targets, live media textures, and shared WebGL contexts.
---

# Framework integration

`textmode.js` is framework-agnostic, but there is no single integration pattern that fits every host environment. (・∀・)人(・∀・)

In practice, there are four useful ways to integrate it:

1. render directly into a framework-owned canvas
2. run in overlay mode on top of another canvas or video
3. sample another canvas or video through [`createTexture()`](/api/textmode.js/classes/Textmodifier#createtexture)
4. share an existing `WebGL2RenderingContext`

The right choice depends on who should own the canvas, who should own the render loop, and whether you want the final result to be a separate textmode scene or a DOM overlay.

## Choose the integration path

Use a framework-owned canvas when `textmode.js` should be the only renderer for that element.

Use overlay mode when another canvas or video should remain visible and `textmode.js` should create a second canvas directly on top of it.

Use [`createTexture()`](/api/textmode.js/classes/Textmodifier#createtexture) when another library already renders into a canvas or video element and you want to pull that content into your own textmode scene.

Use `gl` when another WebGL library already owns the context and you want `textmode.js` to render through that same `WebGL2` context.

## 1. Use a framework-owned canvas

If your framework gives you an `HTMLCanvasElement` and you want `textmode.js` to render directly into it, pass that element as [`canvas`](/api/textmode.js/type-aliases/TextmodeOptions#canvas):

```js
const canvas = canvasRef.current;

const t = textmode.create({
  canvas,
  fontSize: 16,
});
```

This keeps canvas ownership with the host framework. `textmode.js` will use that canvas directly and [`destroy()`](/api/textmode.js/classes/Textmodifier#destroy) will not remove it from the DOM.

This is the simplest path when the host app is just responsible for layout and lifecycle, while `textmode.js` is responsible for all rendering.

## 2. Use overlay mode

Overlay mode is for cases where another canvas or video should keep rendering normally and `textmode.js` should sit above it as a separate ASCII layer.

Pass the target element as `canvas` and enable [`overlay`](/api/textmode.js/type-aliases/TextmodeOptions#overlay):

```js
const sourceCanvas = renderer.domElement;

const t = textmode.create({
  canvas: sourceCanvas,
  overlay: true,
  fontSize: 8,
});

t.setup(() => {
  t.overlay
    .characters(" .:-=+*#%@")
    .charColorMode("sampled")
    .cellColorMode("fixed")
    .cellColor(0, 0, 0);
});

t.draw(() => {
  t.clear();

  if (t.overlay) {
    t.image(t.overlay, t.grid.cols, t.grid.rows);
  }
});
```

In overlay mode:

- `textmode.js` creates its own canvas
- that canvas is inserted directly after the target element
- its size and position are kept in sync with the target
- the target content is exposed as [`t.overlay`](/api/textmode.js/classes/Textmodifier#overlay), a [`TextmodeImage`](/api/textmode.js/namespaces/media/classes/TextmodeImage.md)

Overlay mode accepts both `HTMLCanvasElement` and `HTMLVideoElement` targets. Outside overlay mode, `canvas` must be a real canvas.

## 3. Sample external content with `createTexture()`

[`createTexture()`](/api/textmode.js/classes/Textmodifier#createtexture) is often the most flexible integration path.

It lets another framework render however it wants, while `textmode.js` samples that canvas or video element as a live [`TextmodeTexture`](/api/textmode.js/namespaces/media/classes/TextmodeTexture.md):

```js
const t = textmode.create({
  width: window.innerWidth,
  height: window.innerHeight,
  fontSize: 16,
});

let sourceTex;

t.setup(() => {
  sourceTex = t.createTexture(sourceCanvas);

  sourceTex
    .characters(" .:-=+*#%@")
    .charColorMode("sampled")
    .cellColorMode("fixed")
    .cellColor(0);
});

t.draw(() => {
  t.background(0);
  t.image(sourceTex);
});
```

Unlike overlay mode, [`createTexture()`](/api/textmode.js/classes/Textmodifier#createtexture) does not create a DOM relationship between the source element and the `textmode.js` canvas.

It simply samples a live `canvas` or `video` element as media input. That means:

- the source canvas can stay visible
- the `textmode.js` canvas can stay visible
- you can show both at once, hide one, or position them independently
- sizing and layout are entirely up to your application

## 4. Share an existing WebGL context

If another library already owns a `WebGL2RenderingContext`, pass it through [`gl`](/api/textmode.js/type-aliases/TextmodeOptions#gl):

```js
const t = textmode.create({
  gl: renderer.getContext(),
});
```

This tells `textmode.js` to render through the host library's existing context instead of creating its own.

That path is especially useful for WebGL-based frameworks such as `three.js`, `Babylon.js`, or `A-Frame`.

It is commonly paired with [`createTexture()`](/api/textmode.js/classes/Textmodifier#createtexture) so the host renderer can draw first and `textmode.js` can reinterpret the same canvas as a live source:

```js
const t = textmode.create({
  gl: renderer.getContext(),
});

let sceneTex;

t.setup(() => {
  sceneTex = t.createTexture(renderer.domElement);
});

t.draw(() => {
  t.clear();
  t.image(sceneTex, t.grid.cols, t.grid.rows);
});
```

When you pass `gl`, the host framework still owns the underlying canvas and context. Calling [`destroy()`](/api/textmode.js/classes/Textmodifier#destroy) cleans up `textmode.js` resources, but it does not tear down the external canvas or external context.

## Render-loop coordination

Many frameworks already have their own animation loop. `textmode.js` does too.

You can let both loops run independently, but when you want deterministic ordering it is better to let the host render first and then trigger `textmode.js` manually:

```js
t.noLoop();

function animate() {
  requestAnimationFrame(animate);

  hostRenderer.render(scene, camera);
  t.redraw();
}
```

This is especially useful with shared textures or shared WebGL contexts, where you want `textmode.js` to sample the latest host frame immediately after it is rendered.

Relevant APIs:

- [`noLoop()`](/api/textmode.js/classes/Textmodifier#noloop)
- [`loop()`](/api/textmode.js/classes/Textmodifier#loop)
- [`redraw()`](/api/textmode.js/classes/Textmodifier#redraw)

## Resizing

If `textmode.js` owns its canvas size, resize it explicitly with [`resizeCanvas()`](/api/textmode.js/classes/Textmodifier#resizecanvas):

```js
t.resizeCanvas(window.innerWidth, window.innerHeight);
```

If you use overlay mode, the target element is the source of truth. `textmode.js` observes that target and keeps the overlay canvas in sync automatically. In that case, resize the host canvas or video element and let `textmode.js` follow it.

If you use [`createTexture()`](/api/textmode.js/classes/Textmodifier#createtexture), resize both sides as needed:

- resize the host canvas or video source
- resize the `textmode.js` canvas if your textmode scene should also change size

## Component lifecycle

In React, Vue, Svelte, and similar frameworks, the safe pattern is:

1. wait until the host canvas or video element exists
2. create the `Textmodifier` instance
3. attach your `setup()` and `draw()` callbacks
4. call [`destroy()`](/api/textmode.js/classes/Textmodifier#destroy) on unmount

Generic component-style flow:

```js
let t;

function mount(canvas) {
  t = textmode.create({ canvas, fontSize: 16 });

  t.draw(() => {
    t.background(0);
  });
}

function unmount() {
  t?.destroy();
  t = undefined;
}
```

If the framework already controls when frames should render, combine that with `t.noLoop()` and `t.redraw()`.

## Which path to prefer

Prefer direct canvas ownership when `textmode.js` is the main renderer.

Prefer overlay mode when you want ASCII conversion on top of an existing canvas or video with minimal coordination.

Prefer [`createTexture()`](/api/textmode.js/classes/Textmodifier#createtexture) when you want another framework's output inside a normal textmode composition.

Prefer shared `gl` when integrating with an existing WebGL renderer and you want `textmode.js` to live inside that rendering stack rather than as a separate canvas.

## Examples

Most of the examples below use the overlay path because it is the lowest-friction way to drop `textmode.js` on top of an existing renderer or media element.

<!--@include: ./examples/integration/p5js.md-->
<!--@include: ./examples/integration/hydra-synth.md-->
<!--@include: ./examples/integration/threejs.md-->
<!--@include: ./examples/integration/webcam.md-->
<!--@include: ./examples/integration/video.md-->

## Related APIs

- [`TextmodeOptions.canvas`](/api/textmode.js/type-aliases/TextmodeOptions#canvas)
- [`TextmodeOptions.gl`](/api/textmode.js/type-aliases/TextmodeOptions#gl)
- [`TextmodeOptions.overlay`](/api/textmode.js/type-aliases/TextmodeOptions#overlay)
- [`Textmodifier.canvas`](/api/textmode.js/classes/Textmodifier#canvas)
- [`Textmodifier.overlay`](/api/textmode.js/classes/Textmodifier#overlay)
- [`Textmodifier.createTexture()`](/api/textmode.js/classes/Textmodifier#createtexture)
- [`Textmodifier.image()`](/api/textmode.js/classes/Textmodifier#image)
- [`Textmodifier.resizeCanvas()`](/api/textmode.js/classes/Textmodifier#resizecanvas)
- [`Textmodifier.destroy()`](/api/textmode.js/classes/Textmodifier#destroy)
- [`Textmodifier.noLoop()`](/api/textmode.js/classes/Textmodifier#noloop)
- [`Textmodifier.loop()`](/api/textmode.js/classes/Textmodifier#loop)
- [`Textmodifier.redraw()`](/api/textmode.js/classes/Textmodifier#redraw)
- [Media](/docs/loadables)
