---
layout: doc
editLink: false
title: TextmodeLayer
description: A single layer within a multi-layered textmode rendering context.
category: Classes
api: true
namespace: layering
kind: Class
lastModified: 2026-08-24
hasConstructor: false
---

[textmode.js](../../../index.md) / [layering](../index.md) / TextmodeLayer

# Class: TextmodeLayer

A single layer within a multi-layered textmode rendering context.

Each layer has its own draw callback, grid, glyph source, camera state,
opacity, blend mode, offset, and rotation.

Draw on a layer by providing a callback, similar to [Textmodifier.draw](../../../classes/Textmodifier/methods/draw.md)
on the base layer.

Plugins can add instance-safe methods and accessors with
`context.defineExtension('layer', ...)`.

The base layer, which is always present at the bottom of the layer stack,
can be accessed via [Textmodifier.layers](../../../classes/Textmodifier/accessors/layers.md) as `t.layers.base`.


## Cameras & projection

Create and configure the camera used while rendering this layer.

| Method | Description |
| ------ | ------ |
| [camera](TextmodeLayer/methods/camera.md) | Set explicit camera parameters for this layer. |
| [createCamera](TextmodeLayer/methods/createCamera.md) | Create and activate a camera initialized from this layer's camera state. |
| [lookAt](TextmodeLayer/methods/lookAt.md) | Update this layer camera's target and optional up vector. |
| [ortho](TextmodeLayer/methods/ortho.md) | Enable orthographic projection for this layer. |
| [perspective](TextmodeLayer/methods/perspective.md) | Enable perspective projection for this layer. |
| [resetCamera](TextmodeLayer/methods/resetCamera.md) | Reset this layer to default auto camera behavior. |
| [setCamera](TextmodeLayer/methods/setCamera.md) | Activate a camera for this layer. |

## Compositing & visibility

Adjust the layer's opacity, blend mode, position, and rotation.

| Method | Description |
| ------ | ------ |
| [blendMode](TextmodeLayer/methods/blendMode.md) | Set or get this layer's blend mode. |
| [offset](TextmodeLayer/methods/offset.md) | Set or get this layer's compositing offset in pixels. |
| [opacity](TextmodeLayer/methods/opacity.md) | Set or get this layer's opacity. |
| [rotateZ](TextmodeLayer/methods/rotateZ.md) | Set or get this layer's compositing rotation in degrees. |

## Grid, fonts & glyphs

Configure the layer-specific grid and glyph source.

| Method | Description |
| ------ | ------ |
| [fontSize](TextmodeLayer/methods/fontSize.md) | Get or set this layer's font size. |
| [loadFont](TextmodeLayer/methods/loadFont.md) | Load a font into this layer from a URL/path or existing [TextmodeFont](../../fonts/classes/TextmodeFont.md). |
| [loadTileset](TextmodeLayer/methods/loadTileset.md) | Load a tileset into this layer from options or an existing [TextmodeTileset](../../fonts/classes/TextmodeTileset.md). |
| [useTileColors](TextmodeLayer/methods/useTileColors.md) | Configure authored tileset color preservation for this layer. |

## Layer lifecycle

Set a layer's drawing callbacks and control whether it is visible.

| Method | Description |
| ------ | ------ |
| [draw](TextmodeLayer/methods/draw.md) | Set this layer's draw callback. |
| [hide](TextmodeLayer/methods/hide.md) | Hide this layer from rendering. |
| [isVisible](TextmodeLayer/methods/isVisible.md) | Check whether this layer is visible for rendering. |
| [postDraw](TextmodeLayer/methods/postDraw.md) | Set this layer's post-draw callback. |
| [show](TextmodeLayer/methods/show.md) | Show this layer for rendering. |

## Render outputs

Read the layer's texture, dimensions, and intermediate framebuffers.

| Accessor | Description |
| ------ | ------ |
| [asciiFramebuffer](TextmodeLayer/accessors/asciiFramebuffer.md) | Framebuffer containing this layer's rendered textmode output. |
| [drawFramebuffer](TextmodeLayer/accessors/drawFramebuffer.md) | Draw framebuffer for this layer. |
| [font](TextmodeLayer/accessors/font.md) | Font or tileset used by this layer. |
| [grid](TextmodeLayer/accessors/grid.md) | Grid associated with this layer. |
| [height](TextmodeLayer/accessors/height.md) | Height of the final ASCII framebuffer in pixels. |
| [texture](TextmodeLayer/accessors/texture.md) | WebGL texture of the final ASCII framebuffer. |
| [width](TextmodeLayer/accessors/width.md) | Width of the final ASCII framebuffer in pixels. |
