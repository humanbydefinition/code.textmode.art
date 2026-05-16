---
title: Layers and Compositing
description: Compose textmode.js scenes with base and user layers, blend modes, opacity, offsets, filters, and layer-local draw callbacks.
---

# Layers and compositing

Layers let you build a composition from independent render passes. Each layer has its own draw callback, grid, font, framebuffers, opacity, blend mode, filter sequences, and camera state. (ﾉ◕ヮ◕)ﾉ\*:･ﾟ✧

Access layers through [`t.layers`](/api/textmode.js/classes/Textmodifier#layers), a [`TextmodeLayerManager`](/api/textmode.js/namespaces/layering/classes/TextmodeLayerManager.md).

## Base layer

Every sketch has a base layer:

```js
t.layers.base.draw(() => {
  t.background(0);
  t.char(".");
  t.charColor(120);
  t.rect(t.grid.cols, t.grid.rows);
});
```

Calling `t.draw(...)` is the common shorthand for drawing on the base layer.

## Add a layer

Create user layers with [`t.layers.add()`](/api/textmode.js/namespaces/layering/classes/TextmodeLayerManager.md#add):

```js
const glow = t.layers.add({
  opacity: 0.75,
  blendMode: "screen",
  fontSize: 8,
});

glow.draw(() => {
  t.clear();
  t.char("*");
  t.charColor(120, 220, 255);
  t.rotateZ(t.frameCount);
  t.rect(24, 12);
});
```

Layer options include:

- `visible`
- `opacity`
- `blendMode`
- `offsetX` and `offsetY`
- `rotationZ`
- `fontSize`
- `fontSource`

## Blend modes

[`blendMode()`](/api/textmode.js/namespaces/layering/classes/TextmodeLayer.md#blendmode) controls how a layer is composited over the result below it:

```js
glow.blendMode("additive");
```

Built-in modes include `normal`, `additive`, `multiply`, `screen`, `overlay`, `difference`, and other modes listed in [`TEXTMODE_LAYER_BLEND_MODES`](/api/textmode.js/namespaces/layering/variables/TEXTMODE_LAYER_BLEND_MODES.md).

## Opacity, visibility, and placement

```js
glow.opacity(0.5);
glow.offset(20, 0);
glow.rotateZ(8);
glow.hide();
glow.show();
```

These layer transforms affect compositing placement, not the drawing coordinate system inside the layer.

## Manage layer order

Use the layer manager to reorder or remove user layers:

```js
t.layers.move(glow, 0);
t.layers.swap(layerA, layerB);
t.layers.remove(glow);
t.layers.clear();
```

The base layer is always present.

## Layer-local resources

Layers can load their own fonts or tilesets:

```js
const labelLayer = t.layers.add({ fontSize: 12 });

await labelLayer.loadFont("./fonts/label.woff");
```

Layer-local font loading lets one sketch mix different glyph systems without changing the base layer.

## Filters on layers

Apply filters before a layer is composited. Each layer has its own filter queue, and filters run in the order they are requested:

```js
glow.filter("threshold", { threshold: 0.5 });
```

Calls to [`layer.filter()`](/api/textmode.js/namespaces/layering/classes/TextmodeLayer.md#filter) made during a layer's `draw()` callback run after that layer is converted to ASCII. Calls made during [`layer.postDraw()`](/api/textmode.js/namespaces/layering/classes/TextmodeLayer.md#postdraw) run after the draw-time filter sequence and still before compositing:

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

Apply global filters with [`t.filter()`](/api/textmode.js/classes/Textmodifier#filter) after all layers are composited. See [Filters](/docs/filters) for the full filtering model.

## Final draw

Use [`finalDraw()`](/api/textmode.js/classes/Textmodifier#finaldraw) for final post-processing operations after layer compositing and before presentation:

```js
t.finalDraw(() => {
  t.filter("grayscale");
});
```

## Export layered sketches

Use [Exporting](/docs/exporting) to choose the right export model:

- canvas exports capture the final composited result, including layers, opacity, blend modes, filters, and `finalDraw()`;
- TXT and SVG exports read one selected layer through the `layer` option;
- JSON exports one selected layer by default, or the full descriptive layer stack with `target: 'all'`.

## Related APIs

- [`Textmodifier.layers`](/api/textmode.js/classes/Textmodifier#layers)
- [`TextmodeLayerManager`](/api/textmode.js/namespaces/layering/classes/TextmodeLayerManager.md)
- [`TextmodeLayer`](/api/textmode.js/namespaces/layering/classes/TextmodeLayer.md)
- [`TextmodeLayerOptions`](/api/textmode.js/namespaces/layering/interfaces/TextmodeLayerOptions.md)
- [`TEXTMODE_LAYER_BLEND_MODES`](/api/textmode.js/namespaces/layering/variables/TEXTMODE_LAYER_BLEND_MODES.md)
