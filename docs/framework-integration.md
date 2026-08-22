---
title: Framework Integration
description: Integrate textmode.js with framework-owned canvases, overlay targets, live media textures, and shared WebGL contexts.
---

# Framework integration

`textmode.js` is framework-agnostic, but there is no single integration pattern that fits every host environment. (・∀・)人(・∀・)

In practice, there are four useful ways to integrate it:

1. render directly into a framework-owned canvas
2. run the [`textmode.overlay.js`](/api/textmode.overlay.js/) add-on on top of another canvas or video
3. sample another canvas or video through [`createTexture()`](/api/textmode.js/classes/Textmodifier#createtexture)
4. share an existing `WebGL2RenderingContext`

The right choice depends on who should own the canvas, who should own the render loop, and whether you want the final result to be a separate textmode scene or a DOM overlay.

## Choose the integration path

Use a framework-owned canvas when `textmode.js` should be the only renderer for that element.

Use the `textmode.overlay.js` add-on when another canvas or video should remain visible and `textmode.js` should create a second canvas directly on top of it.

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

## 2. Use the overlay add-on

Overlay mode now lives in the official [`textmode.overlay.js`](/api/textmode.overlay.js/) add-on. Use it when another canvas or video should keep rendering normally and `textmode.js` should sit above it as a separate ASCII layer.

Install the add-on and pass its [`OverlayPlugin`](/api/textmode.overlay.js/variables/OverlayPlugin.md) to `textmode.create()`, then bind the target element:

```js
const sourceCanvas = renderer.domElement;

const t = textmode.create({
  plugins: [OverlayPlugin],
  fontSize: 8,
});

const source = t.overlay.setTarget(sourceCanvas);

t.setup(() => {
  source
    .characters(" .:-=+*#%@")
    .charColorMode("sampled")
    .cellColorMode("fixed")
    .cellColor(0, 0, 0);
});

t.draw(() => {
  t.clear();
  t.image(source, t.grid.cols, t.grid.rows);
});
```

In overlay mode:

- `textmode.js` creates its own canvas
- that canvas is inserted directly after the target element
- its size and position are kept in sync with the target
- the target content is exposed through [`t.overlay.source`](/api/textmode.overlay.js/interfaces/TextmodeOverlayController#source), a [`TextmodeTexture`](/api/textmode.js/namespaces/media/classes/TextmodeTexture.md)

The overlay controller accepts both `HTMLCanvasElement` and `HTMLVideoElement` targets via [`setTarget()`](/api/textmode.overlay.js/interfaces/TextmodeOverlayController#settarget), and can [`show()`](/api/textmode.overlay.js/interfaces/TextmodeOverlayController#show), [`hide()`](/api/textmode.overlay.js/interfaces/TextmodeOverlayController#hide), or [`toggle()`](/api/textmode.overlay.js/interfaces/TextmodeOverlayController#toggle) the output canvas while drawing continues. Without the add-on, `canvas` must be a real canvas.

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

The same WebGL drawing-buffer rule applies here: an independently rendered WebGL canvas must use `preserveDrawingBuffer: true`, or the application must sample it synchronously before the browser is allowed to discard its contents.

## 4. Share an existing WebGL context

If another library already owns a `WebGL2RenderingContext` and both renderers intentionally share one canvas, pass it through [`gl`](/api/textmode.js/type-aliases/TextmodeOptions#gl):

```js
const t = textmode.create({
  gl: renderer.getContext(),
});
```

This is an advanced single-context integration, not a DOM overlay. Both renderers mutate the same WebGL state and present to the same canvas, so the application must establish render order and restore any renderer-specific state between them.

For example, a deliberately coordinated Three.js integration can render the host scene first and then let `textmode.js` replace the shared canvas output:

```js
const t = textmode.create({
  gl: renderer.getContext(),
});

t.setup(() => {
  // Configure the textmode scene.
});

t.noLoop();

renderer.setAnimationLoop(() => {
  renderer.render(scene, camera);
  renderer.resetState();
  t.redraw();
  renderer.resetState();
});
```

Do not combine an independently running `createTexture(renderer.domElement)` loop with shared `gl` as a default pattern: the source and destination would be the same canvas, and either renderer may overwrite state before the other finishes. When you pass `gl`, the host framework still owns the underlying canvas and context. Calling [`destroy()`](/api/textmode.js/classes/Textmodifier#destroy) cleans up `textmode.js` resources, but it does not tear down the external canvas or external context.

## Render-loop coordination

Many frameworks already have their own animation loop. `textmode.js` does too. For normal overlay integrations, let both loops run independently; the examples below all use that pattern.

When deterministic ordering is a requirement, such as a shared context or an unpreserved source captured immediately after rendering, coordinate the loops explicitly:

```js
t.noLoop();

function animate() {
  requestAnimationFrame(animate);

  hostRenderer.render(scene, camera);
  t.redraw();
}
```

This advanced pattern is especially useful with shared textures or shared WebGL contexts. It is not required for ordinary overlay sketches whose host drawing buffer remains available.

Relevant APIs:

- [`noLoop()`](/api/textmode.js/classes/Textmodifier#noloop)
- [`loop()`](/api/textmode.js/classes/Textmodifier#loop)
- [`redraw()`](/api/textmode.js/classes/Textmodifier#redraw)

## Resizing

If `textmode.js` owns its canvas size, resize it explicitly with [`resizeCanvas()`](/api/textmode.js/classes/Textmodifier#resizecanvas):

```js
t.resizeCanvas(window.innerWidth, window.innerHeight);
```

If you use the overlay add-on, the target element is the source of truth. The overlay controller observes that target and keeps the overlay canvas in sync automatically. In that case, resize the host canvas or video element and let `textmode.js` follow it.

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

If the framework must also guarantee deterministic shared-context ordering, use the advanced `t.noLoop()` and `t.redraw()` coordination pattern described above.

## Which path to prefer

Prefer direct canvas ownership when `textmode.js` is the main renderer.

Prefer the [`textmode.overlay.js`](/api/textmode.overlay.js/) add-on when you want ASCII conversion on top of an existing canvas or video with minimal coordination.

Prefer [`createTexture()`](/api/textmode.js/classes/Textmodifier#createtexture) when you want another framework's output inside a normal textmode composition.

Prefer shared `gl` when integrating with an existing WebGL renderer and you want `textmode.js` to live inside that rendering stack rather than as a separate canvas.

## Examples

Most of the examples below use the [`textmode.overlay.js`](/api/textmode.overlay.js/) add-on because it is the lowest-friction way to drop `textmode.js` on top of an existing renderer or media element.

<!--@include: ./examples/integration/p5js.md-->
<!--@include: ./examples/integration/hydra-synth.md-->
<!--@include: ./examples/integration/threejs.md-->
<!--@include: ./examples/integration/webcam.md-->

## Related APIs

- [`TextmodeOptions.canvas`](/api/textmode.js/type-aliases/TextmodeOptions#canvas)
- [`TextmodeOptions.gl`](/api/textmode.js/type-aliases/TextmodeOptions#gl)
- [`OverlayPlugin`](/api/textmode.overlay.js/variables/OverlayPlugin.md)
- [`TextmodeOverlayController`](/api/textmode.overlay.js/interfaces/TextmodeOverlayController.md)
- [`Textmodifier.canvas`](/api/textmode.js/classes/Textmodifier#canvas)
- [`Textmodifier.createTexture()`](/api/textmode.js/classes/Textmodifier#createtexture)
- [`Textmodifier.image()`](/api/textmode.js/classes/Textmodifier#image)
- [`Textmodifier.resizeCanvas()`](/api/textmode.js/classes/Textmodifier#resizecanvas)
- [`Textmodifier.destroy()`](/api/textmode.js/classes/Textmodifier#destroy)
- [`Textmodifier.noLoop()`](/api/textmode.js/classes/Textmodifier#noloop)
- [`Textmodifier.loop()`](/api/textmode.js/classes/Textmodifier#loop)
- [`Textmodifier.redraw()`](/api/textmode.js/classes/Textmodifier#redraw)
- [Media](/docs/media-sources)
