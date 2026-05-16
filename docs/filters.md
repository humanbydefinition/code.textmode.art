---
title: Filters
description: Apply built-in and custom fragment-shader filters to textmode.js layers and final rendered output.
---

# Filters

Filters are fragment-shader post-processing passes. They run on already-rendered ASCII textures: either a single layer's ASCII result, the final composited output from all layers, or the final texture immediately before presentation.

Use filters when you want to process rendered textmode imagery with effects such as inversion, thresholding, scanlines, bloom, glitch, or custom GLSL. (✧ω✧)

## Filter scopes

The same registered filter can be used in different scopes:

- `layer.filter()` inside a layer's `draw()` callback affects only that layer, after ASCII conversion and before `postDraw()`.
- `layer.filter()` inside that layer's `postDraw()` callback affects only that layer, after the draw-time layer filter sequence.
- `t.filter()` inside normal draw callbacks affects the composited scene after all visible layers are blended.
- `t.filter()` inside `finalDraw()` affects the final output after the normal global filter queue.

Each layer has its own independent filter sequence. A filter queued on one layer does not affect another layer unless the result is later blended through compositing.

## Global filters

Use [`t.filter()`](/api/textmode.js/classes/Textmodifier#filter) in `draw()` to queue a filter for the final output:

```js
t.draw(() => {
  t.background(0);
  t.char("@");
  t.rect(20, 12);

  t.filter("threshold", { threshold: 0.5 });
});
```

Global filters run after all visible layers have been composited. They do not replace layer-local filters; they process the already-blended scene.

The core library includes:

- `invert`
- `grayscale`
- `sepia`
- `threshold`

## Layer filters

Call [`layer.filter()`](/api/textmode.js/namespaces/layering/classes/TextmodeLayer.md#filter) inside a layer draw callback to process that layer before it is composited:

```js
const glow = t.layers.add({ blendMode: "screen" });

glow.draw(() => {
  t.clear();
  t.char("*");
  t.charColor(120, 220, 255);
  t.rect(24, 10);

  glow.filter("invert");
});
```

Layer filters are applied in the order they are called. Each layer keeps its own queue, so one layer can run `threshold` while another runs `invert` and the base layer runs no filters at all.

Use [`layer.postDraw()`](/api/textmode.js/namespaces/layering/classes/TextmodeLayer.md#postdraw) when you need a second layer-local filter stage after the filters requested during `draw()`:

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

Use [`t.filters.register()`](/api/textmode.js/namespaces/filters/classes/TextmodeFilterManager.md#register) to add a named filter:

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

Use [`has()`](/api/textmode.js/namespaces/filters/classes/TextmodeFilterManager.md#has) and [`unregister()`](/api/textmode.js/namespaces/filters/classes/TextmodeFilterManager.md#unregister) to manage the filter registry.

## Add-on filter package

The separate [`textmode.filters.js`](/api/textmode.filters.js/) package adds creative filters such as bloom, glitch, scanlines, vignette, film grain, pixelation, grid distortion, color adjustment, and chromatic aberration.

Install the package's plugin when you want those named effects available in `t.filter()` or `layer.filter()`:

```js
import { textmode } from "textmode.js";
import { FiltersPlugin } from "textmode.filters.js";

const t = textmode.create({
  plugins: [FiltersPlugin],
});
```

## Related APIs

- [`Textmodifier.filter()`](/api/textmode.js/classes/Textmodifier#filter)
- [`Textmodifier.finalDraw()`](/api/textmode.js/classes/Textmodifier#finaldraw)
- [`Textmodifier.filters`](/api/textmode.js/classes/Textmodifier#filters)
- [`TextmodeFilterManager`](/api/textmode.js/namespaces/filters/classes/TextmodeFilterManager.md)
- [`TextmodeLayer.filter()`](/api/textmode.js/namespaces/layering/classes/TextmodeLayer.md#filter)
- [`TextmodeLayer.postDraw()`](/api/textmode.js/namespaces/layering/classes/TextmodeLayer.md#postdraw)
- [`textmode.filters.js`](/api/textmode.filters.js/)
