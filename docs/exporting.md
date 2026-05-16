---
title: Exporting
description: Export textmode.js sketches with textmode.export.js as TXT, JSON, SVG, raster images, animated GIFs, and WebM video.
---

# Exporting

Exporting in `textmode.js` is provided by the official add-on library [`textmode.export.js`](/api/textmode.export.js/). (╯✧▽✧)╯

Install the export plugin alongside `textmode.js`, then add [`ExportPlugin`](/api/textmode.export.js/variables/ExportPlugin.md) to your sketch:

```js
import { textmode } from "textmode.js";
import { ExportPlugin } from "textmode.export.js";

const t = textmode.create({
  width: 800,
  height: 600,
  fontSize: 16,
  plugins: [ExportPlugin],
});
```

Once installed, the plugin adds runtime export helpers directly to your `Textmodifier` instance.

## What can be exported

`textmode.export.js` covers six export targets:

- plain text via [`toString()`](#text-export) and [`saveStrings()`](#text-export)
- structured layer data via [`toJSON()`](#json-export), [`toJSONString()`](#json-export), and [`saveJSON()`](#json-export)
- SVG via [`toSVG()`](#svg-export) and [`saveSVG()`](#svg-export)
- raster images via [`saveCanvas()`](#image-export) and [`copyCanvas()`](#image-export)
- animated GIF via [`saveGIF()`](#gif-export)
- WebM video via [`saveWEBM()`](#video-export)

## Two export models

`textmode.export.js` has two different export paths, and the distinction matters:

- **Canvas capture** exports the final presented canvas exactly as it appears on screen. This includes layering, compositing, shaders, filters, and post-processing. Use this for:
  - [`saveCanvas()`](#image-export)
  - [`copyCanvas()`](#image-export)
  - [`saveGIF()`](#gif-export)
  - [`saveWEBM()`](#video-export)

- **Layer data export** reads layer draw framebuffer data and converts it into another representation. TXT and SVG export one selected layer. JSON exports one selected layer by default, or the full descriptive layer stack with `target: 'all'`. Use this for:
  - [`toString()`](#text-export) / [`saveStrings()`](#text-export)
  - [`toSVG()`](#svg-export) / [`saveSVG()`](#svg-export)
  - [`toJSON()`](#json-export) / [`toJSONString()`](#json-export) / [`saveJSON()`](#json-export)

If your sketch depends on layer compositing and you need the exact final composition, use raster or video export rather than TXT, SVG, or JSON.

## Overlay

The plugin also mounts an export overlay UI automatically. It gives you quick access to all supported formats without writing custom UI code.

Control it at runtime through [`t.exportOverlay`](/api/textmode.export.js/interfaces/ExportOverlayController.md):

```js
t.exportOverlay.hide();
t.exportOverlay.show();
t.exportOverlay.toggle();
```

The overlay supports clipboard export for:

- text
- JSON
- SVG
- raster images

For TXT, SVG, and selected-layer JSON export, the overlay shows a layer selector populated from the current layer stack. For JSON export, the `target` selector switches between `selected layer` and `all layers`; `all layers` ignores the layer selector and exports the full descriptive layer stack.

## Text export

Use text export when you want plain character output.

```js
const text = t.toString();
console.log(text);

t.saveStrings({
  filename: "frame",
});
```

You can customize whitespace handling:

```js
const text = t.toString({
  layer: t.layers.base,
  preserveTrailingSpaces: true,
  emptyCharacter: ".",
});
```

Available [`TXTExportOptions`](/api/textmode.export.js/type-aliases/TXTExportOptions.md):

- `filename`
- `layer`
- `preserveTrailingSpaces`
- `emptyCharacter`

Text export comes from the selected layer grid. It does not export the final composited canvas.

## JSON export

JSON export is useful when you want structured layer data for tooling, storage, or further processing.

```js
const layerData = t.toJSON();
const jsonString = t.toJSONString();

t.saveJSON({
  filename: "frame",
});
```

By default, the exported document is a [`TextmodeLayerJSON`](/api/textmode.export.js/interfaces/TextmodeLayerJSON.md) object with `formatVersion: "1.0.0"` and:

- canvas dimensions
- grid dimensions
- selected-layer cell data
- per-cell character, foreground, background, and transform state
- optional metadata about export time and generator version

Example with explicit formatting options:

```js
t.saveJSON({
  filename: "frame",
  layer: t.layers.base,
  pretty: true,
  colorMode: "hex",
  includeMetadata: true,
});
```

To export the base layer plus every user-created layer, use `target: 'all'`:

```js
const stackData = t.toJSON({ target: "all" });

t.saveJSON({
  target: "all",
  filename: "layer-stack",
});
```

All-layer JSON exports use [`TextmodeLayersJSON`](/api/textmode.export.js/interfaces/TextmodeLayersJSON.md) with `formatVersion: "1.1.0"`. They include hidden layers and preserve each layer's `visible`, `opacity`, `blendMode`, `offsetX`, `offsetY`, and `rotationZ` values. This is descriptive layer data, not a flattened composite.

Available [`JSONExportOptions`](/api/textmode.export.js/type-aliases/JSONExportOptions.md):

- `filename`
- `target`
- `layer`
- `pretty`
- `colorMode`
- `includeMetadata`

`toJSON()` returns the structured object. `toJSONString()` returns serialized JSON text.

Like TXT export, JSON export reads layer data rather than the final presented canvas.

## SVG export

SVG export turns the selected layer into vector paths.

```js
const svg = t.toSVG();

t.saveSVG({
  filename: "poster",
});
```

You can control whether cell background rectangles are included and whether glyphs are filled or stroked:

```js
t.saveSVG({
  filename: "outline",
  layer: t.layers.base,
  includeBackgroundRectangles: true,
  drawMode: "stroke",
  strokeWidth: 1.5,
});
```

Available [`SVGExportOptions`](/api/textmode.export.js/type-aliases/SVGExportOptions.md):

- `filename`
- `layer`
- `includeBackgroundRectangles`
- `drawMode`
- `strokeWidth`

SVG export is path-based and uses glyph outline data from the selected layer font. In practice, this is the right export path for sketches using [`TextmodeFont`](/api/textmode.js/namespaces/fonts/classes/TextmodeFont.md). If you need exact bitmap tileset output, use image, GIF, or WebM export instead.

## Image export

Use [`saveCanvas()`](/api/textmode.export.js/interfaces/TextmodeExportAPI.md#savecanvas) when you want a raster export of the final presented canvas.

```js
await t.saveCanvas({
  filename: "still",
  format: "png",
});
```

Supported image formats:

- `png`
- `jpg`
- `webp`

You can also scale the export:

```js
await t.saveCanvas({
  filename: "still-2x",
  format: "png",
  scale: 2,
});
```

Available [`ImageExportOptions`](/api/textmode.export.js/type-aliases/ImageExportOptions.md):

- `filename`
- `format`
- `scale`

To copy the current raster result to the clipboard instead of downloading it:

```js
await t.copyCanvas({
  format: "png",
  scale: 2,
});
```

This path captures the final browser canvas, so it is the correct choice when you want the exact visual result of a layered or filtered sketch.

## GIF export

Use [`saveGIF()`](/api/textmode.export.js/interfaces/TextmodeExportAPI.md#savegif) to record a sequence of future frames and encode them as an animated GIF.

```js
await t.saveGIF({
  filename: "loop",
  frameCount: 180,
  frameRate: 30,
});
```

You can scale the captured frames and control loop behavior:

```js
await t.saveGIF({
  filename: "loop-2x",
  frameCount: 240,
  frameRate: 60,
  scale: 2,
  repeat: 0,
  onProgress(progress) {
    console.log(progress.state, progress.frameIndex, progress.totalFrames);
  },
});
```

Available [`GIFExportOptions`](/api/textmode.export.js/type-aliases/GIFExportOptions.md):

- `filename`
- `frameCount`
- `frameRate`
- `scale`
- `repeat`
- `onProgress`

GIF export works by registering a post-draw hook and capturing the next rendered frames from the canvas. It does not export frames retroactively.

## Video export

Use [`saveWEBM()`](/api/textmode.export.js/interfaces/TextmodeExportAPI.md#savewebm) to record a WebM video of the final presented canvas.

```js
await t.saveWEBM({
  filename: "capture",
  frameCount: 240,
  frameRate: 60,
});
```

You can control encoder quality and optionally request transparent output:

```js
await t.saveWEBM({
  filename: "capture-alpha",
  frameCount: 240,
  frameRate: 60,
  quality: 0.85,
  transparent: true,
  onProgress(progress) {
    console.log(progress.state, progress.frameIndex, progress.totalFrames);
  },
});
```

Available [`VideoExportOptions`](/api/textmode.export.js/type-aliases/VideoExportOptions.md):

- `filename`
- `frameCount`
- `frameRate`
- `quality`
- `transparent`
- `onProgress`
- `debugLogging`

Like GIF export, WebM recording captures upcoming frames through a post-draw hook, so the animation needs to keep rendering while the export runs.

## Related APIs

- [`textmode.export.js`](/api/textmode.export.js/)
- [`ExportPlugin`](/api/textmode.export.js/variables/ExportPlugin.md)
- [`TextmodeExportAPI`](/api/textmode.export.js/interfaces/TextmodeExportAPI.md)
- [`ExportOverlayController`](/api/textmode.export.js/interfaces/ExportOverlayController.md)
- [`LayerExportOptions`](/api/textmode.export.js/interfaces/LayerExportOptions.md)
- [`ImageExportOptions`](/api/textmode.export.js/type-aliases/ImageExportOptions.md)
- [`TXTExportOptions`](/api/textmode.export.js/type-aliases/TXTExportOptions.md)
- [`JSONExportOptions`](/api/textmode.export.js/type-aliases/JSONExportOptions.md)
- [`JSONExportTarget`](/api/textmode.export.js/type-aliases/JSONExportTarget.md)
- [`TextmodeLayerJSON`](/api/textmode.export.js/interfaces/TextmodeLayerJSON.md)
- [`TextmodeLayersJSON`](/api/textmode.export.js/interfaces/TextmodeLayersJSON.md)
- [`SVGExportOptions`](/api/textmode.export.js/type-aliases/SVGExportOptions.md)
- [`GIFExportOptions`](/api/textmode.export.js/type-aliases/GIFExportOptions.md)
- [`GIFExportProgress`](/api/textmode.export.js/type-aliases/GIFExportProgress.md)
- [`VideoExportOptions`](/api/textmode.export.js/type-aliases/VideoExportOptions.md)
- [`VideoExportProgress`](/api/textmode.export.js/type-aliases/VideoExportProgress.md)
