---
title: Filters
description: Apply built-in and custom fragment-shader filters to textmode.js layers and final rendered output.
---

# Filters

Filters are fragment-shader post-processing passes provided by the official [`textmode.filters.js`](/api/textmode.filters.js/) add-on (`FiltersPlugin`). They run on already-rendered ASCII textures: either a single layer's ASCII result, the final composited output from all layers, or the final texture immediately before presentation.

Use filters when you want to process rendered textmode imagery with effects such as inversion, color grading, scanlines, bloom, glitch, CRT monitors, or custom GLSL. (✧ω✧)

## Installation & Plugin Setup

To use filters, install `textmode.filters.js` and pass `FiltersPlugin` when creating your sketch:

```js
import { textmode } from "textmode.js";
import { FiltersPlugin } from "textmode.filters.js";

const t = textmode.create({
  width: 800,
  height: 600,
  fontSize: 16,
  plugins: [FiltersPlugin],
});
```

Installing `FiltersPlugin` registers `t.filter()`, `layer.filter()`, and the `t.filters` filter manager on your sketch instance.

## Filter scopes

The same registered filter can be used in different scopes:

- `layer.filter()` inside a layer's `draw()` callback affects only that layer, after ASCII conversion and before `postDraw()`.
- `layer.filter()` inside that layer's `postDraw()` callback affects only that layer, after the draw-time layer filter sequence.
- `t.filter()` inside normal draw callbacks affects the composited scene after all visible layers are blended.
- `t.filter()` inside `finalDraw()` affects the final output after the normal global filter queue.

Each layer has its own independent filter sequence. A filter queued on one layer does not affect another layer unless the result is later blended through compositing.

## Global filters

Use `t.filter()` in `draw()` to queue a filter for the final output:

```js
t.draw(() => {
  t.background(0);
  t.char("@");
  t.rect(20, 12);

  t.filter("threshold", { cutoff: 0.5 });
});
```

Global filters run after all visible layers have been composited. They do not replace layer-local filters; they process the already-blended scene.

`textmode.filters.js` includes 18 built-in filters:

- **Color adjustment**: `brightness`, `contrast`, `grayscale`, `hueRotate`, `invert`, `posterize`, `saturation`, `sepia`, `threshold`
- **Distortion**: `chromaticAberration`, `gridDistortion`, `pixelate`
- **Stylization**: `bloom`, `crtMattias`, `filmGrain`, `glitch`, `scanlines`, `vignette`

## Layer filters

Call [`layer.filter()`](/api/textmode.js/namespaces/layering/classes/TextmodeLayer#filter) inside a layer draw callback to process that layer before it is composited:

```js
const glow = t.layers.add({ blendMode: t.BLEND_SCREEN });

glow.draw(() => {
  t.clear();
  t.char("*");
  t.charColor(120, 220, 255);
  t.rect(24, 10);

  glow.filter("invert");
});
```

Layer filters are applied in the order they are called. Each layer keeps its own queue, so one layer can run `threshold` while another runs `invert` and the base layer runs no filters at all.

Use [`layer.postDraw()`](/api/textmode.js/namespaces/layering/classes/TextmodeLayer#postdraw) when you need a second layer-local filter stage after the filters requested during `draw()`:

```js
glow.draw(() => {
  t.clear();
  t.char("*");
  t.rect(24, 10);
  glow.filter("grayscale");
});

glow.postDraw(() => {
  glow.filter("invert");
});
```

The `invert` filter runs after the layer has already been converted and passed through `grayscale`, but before `glow` is composited with other layers.

## Final draw filters

Use [`finalDraw()`](/api/textmode.js/classes/Textmodifier#finaldraw) when a filter should run after normal global filters and just before presentation:

```js
t.draw(() => {
  t.background(0);
  t.filter("grayscale");
});

t.finalDraw(() => {
  t.filter("invert");
});
```

Here `grayscale` runs on the composited scene first. `invert` then runs on that final composited result.

## Register a custom filter

Use [`t.filters.register()`](/api/textmode.filters.js/classes/TextmodeFilterManager#register) to add a named filter:

```js
await t.filters.register("vignette", "./vignette.frag", {
  u_intensity: ["intensity", 0.5],
});

t.draw(() => {
  t.background(0);
  t.filter("vignette", { intensity: 0.8 });
});
```

The `uniformDefs` object maps shader uniform names to public parameter names and default values. A numeric filter argument maps to the first configured parameter:

```js
t.filter("vignette", 0.8);
```

Use [`has()`](/api/textmode.filters.js/classes/TextmodeFilterManager#has) and [`unregister()`](/api/textmode.filters.js/classes/TextmodeFilterManager#unregister) to manage the filter registry.

## Related APIs

- [`Textmodifier.finalDraw()`](/api/textmode.js/classes/Textmodifier#finaldraw)
- [`TextmodeFilterManager`](/api/textmode.filters.js/classes/TextmodeFilterManager)
- [`TextmodeLayer.filter()`](/api/textmode.js/namespaces/layering/classes/TextmodeLayer#filter)
- [`TextmodeLayer.postDraw()`](/api/textmode.js/namespaces/layering/classes/TextmodeLayer#postdraw)
- [`FiltersPlugin`](/api/textmode.filters.js/variables/FiltersPlugin)
- [`textmode.filters.js`](/api/textmode.filters.js/)
