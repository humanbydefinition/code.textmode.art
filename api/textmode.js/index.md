---
layout: doc
editLink: false
title: textmode.js
description: textmode.js is a lightweight creative coding library for creating real-time ASCII art on the web.
category: API Reference
api: true
kind: Project
lastModified: 2026-08-03
---

# textmode.js

Build real-time ASCII and textmode graphics in the browser with a grid-based
WebGL2 drawing interface. Create a [textmode](classes/textmode.md) drawing context, then
compose characters, colors, shapes, media, layers, and effects on its grid.

## Start a sketch

```javascript
const t = textmode.create({
  width: window.innerWidth,
  height: window.innerHeight,
  fontSize: 16
});

t.draw(() => {
  t.background(8);
  t.char('@');
  t.charColor(255, 180, 80);
  t.point();
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Sketch workflow

1. Create the drawing context with [textmode.create](classes/textmode/methods/create.md).
2. Load or configure resources in [Textmodifier.setup](classes/Textmodifier/methods/setup.md).
3. Draw the base scene in [Textmodifier.draw](classes/Textmodifier/methods/draw.md).
4. Add layers, media conversion, filters, or shaders when the sketch needs them.
5. Respond to resize and input events as the sketch runs.

Read the [first sketch guide](/docs/first-sketch),
[fundamentals](/docs/fundamentals), and [examples](/docs/examples) for
guided learning; use [Textmodifier](classes/Textmodifier.md) for the complete drawing interface.

## Conversion & filters

Convert visual sources into textmode data and post-process the result.

| Namespace | Description |
| ------ | ------ |
| [conversion](namespaces/conversion/index.md) | All media conversion related modules and types. |
| [filters](namespaces/filters/index.md) | All filter related modules and types. |

## Core workflow

Create, configure, and run a textmode sketch.

| Name | Description |
| ------ | ------ |
| [textmode](classes/textmode.md) | The main entry point for the `textmode.js` library. |
| [Textmodifier](classes/Textmodifier.md) | The main `textmode.js` drawing context. |
| [TextmodeOptions](type-aliases/TextmodeOptions.md) | Options when creating a [Textmodifier](classes/Textmodifier.md) instance via [textmode.create](classes/textmode/methods/create.md). |

## Creative coding utilities

Use deterministic randomness and vector math in generative sketches.

| Class | Description |
| ------ | ------ |
| [TextmodeRandom](classes/TextmodeRandom.md) | A deterministic pseudo-random number generator for textmode sketches. |
| [TextmodeVector](classes/TextmodeVector.md) | Mutable two- or three-dimensional vector for creative-coding math. |

## Drawing & 3D

Draw primitives and control the camera used for spatial scenes.

| Name | Description |
| ------ | ------ |
| [ShapeAssemblyMode](enumerations/ShapeAssemblyMode.md) | Shape assembly modes for [Textmodifier.beginShape](classes/Textmodifier/methods/beginShape.md). |
| [TextmodeCamera](classes/TextmodeCamera.md) | Mutable camera object used for p5-style camera workflows. |

## Fonts & media

Load glyph sources and use images, video, and live textures.

| Namespace | Description |
| ------ | ------ |
| [fonts](namespaces/fonts/index.md) | All font rendering related modules and types. |
| [media](namespaces/media/index.md) | All media asset related modules and types. |

## Grid, glyphs & color

Define the cell-based visual language of a sketch.

| Name | Description |
| ------ | ------ |
| [color](namespaces/color/index.md) | Color objects, color modes, and types. |
| [TextmodeGlyphRamp](classes/TextmodeGlyphRamp.md) | Immutable character sequence for mapping numbers to glyphs. |
| [TextmodeGrid](classes/TextmodeGrid.md) | Grid used by a textmode layer. |

## Interaction

Respond to keyboard, mouse, touch, and gamepad input.

| Namespace | Description |
| ------ | ------ |
| [input](namespaces/input/index.md) | All types and interfaces related to input event handling. |

## Layers & GPU rendering

Compose scenes and work with GPU-backed drawing resources.

| Name | Description |
| ------ | ------ |
| [layering](namespaces/layering/index.md) | All modules and types related to multi-layered textmode rendering. |
| [TextmodeFramebuffer](classes/TextmodeFramebuffer.md) | Framebuffer class for managing offscreen rendering targets initialized via [Textmodifier.createFramebuffer](classes/Textmodifier/methods/createFramebuffer.md). |
| [TextmodeShader](classes/TextmodeShader.md) | WebGL shader program created by [Textmodifier.createMaterialShader](classes/Textmodifier/methods/createMaterialShader.md) or [Textmodifier.createShader](classes/Textmodifier/methods/createShader.md). |
| [TextmodeFramebufferOptions](type-aliases/TextmodeFramebufferOptions.md) | Options for creating a framebuffer via [Textmodifier.createFramebuffer](classes/Textmodifier/methods/createFramebuffer.md). If not specified, width and height default to the current textmode grid size. |

## Loading & errors

Control loading feedback and diagnose runtime failures.

| Namespace | Description |
| ------ | ------ |
| [errors](namespaces/errors/index.md) | All error handling related modules and types. |
| [loading](namespaces/loading/index.md) | All loading screen related modules and types. |

## Plugins

Extend layers, sources, and the sketch lifecycle.

| Namespace | Description |
| ------ | ------ |
| [plugins](namespaces/plugins/index.md) | Plugin system types for extending textmode.js functionality. |
