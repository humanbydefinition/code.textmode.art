---
layout: doc
editLink: true
title: TextmodeLayer
description: A single layer within a multi-layered textmode rendering context.
category: Classes
api: true
namespace: layering
kind: Class
lastModified: 2026-06-08
hasConstructor: false
---

[textmode.js](../../../index.md) / [layering](../index.md) / TextmodeLayer

# Class: TextmodeLayer

A single layer within a multi-layered textmode rendering context.

Each layer has its own draw callback, grid, glyph source, filters, camera state,
opacity, blend mode, offset, and rotation.

Draw on a layer by providing a callback, similar to [Textmodifier.draw](../../../classes/Textmodifier/methods/draw.md)
on the base layer.

Plugins can extend TextmodeLayer with additional methods using the plugin API's
`extendLayer` function. For example, the `textmode-synth` plugin adds a `.synth()`
method for hydra-like procedural generation.

The base layer, which is always present at the bottom of the layer stack,
can be accessed via [Textmodifier.layers](../../../classes/Textmodifier/accessors/layers.md) as `t.layers.base`.

## Accessors

| Accessor | Description |
| ------ | ------ |
| [asciiFramebuffer](TextmodeLayer/accessors/asciiFramebuffer.md) | Framebuffer containing this layer's rendered textmode output. |
| [drawFramebuffer](TextmodeLayer/accessors/drawFramebuffer.md) | Draw framebuffer for this layer. |
| [font](TextmodeLayer/accessors/font.md) | Font or tileset used by this layer. |
| [grid](TextmodeLayer/accessors/grid.md) | Grid associated with this layer. |
| [height](TextmodeLayer/accessors/height.md) | Height of the final ASCII framebuffer in pixels. |
| [texture](TextmodeLayer/accessors/texture.md) | WebGL texture of the final ASCII framebuffer. |
| [width](TextmodeLayer/accessors/width.md) | Width of the final ASCII framebuffer in pixels. |

## Methods

| Method | Description |
| ------ | ------ |
| [blendMode](TextmodeLayer/methods/blendMode.md) | Set or get this layer's blend mode. |
| [camera](TextmodeLayer/methods/camera.md) | Set explicit camera parameters for this layer. |
| [createCamera](TextmodeLayer/methods/createCamera.md) | Create and activate a camera initialized from this layer's camera state. |
| [deletePluginState](TextmodeLayer/methods/deletePluginState.md) | Delete plugin-specific state from this layer. |
| [draw](TextmodeLayer/methods/draw.md) | Set this layer's draw callback. |
| [filter](TextmodeLayer/methods/filter.md) | Queue a post-processing filter for this layer. |
| [fontSize](TextmodeLayer/methods/fontSize.md) | Get or set this layer's font size. |
| [getPluginState](TextmodeLayer/methods/getPluginState.md) | Retrieve plugin-specific state stored on this layer. |
| [hasPluginState](TextmodeLayer/methods/hasPluginState.md) | Check whether plugin-specific state exists on this layer. |
| [hide](TextmodeLayer/methods/hide.md) | Hide this layer from rendering. |
| [loadFont](TextmodeLayer/methods/loadFont.md) | Load a font into this layer from a URL/path or existing [TextmodeFont](../../fonts/classes/TextmodeFont.md). |
| [loadTileset](TextmodeLayer/methods/loadTileset.md) | Load a tileset into this layer from options or an existing [TextmodeTileset](../../fonts/classes/TextmodeTileset.md). |
| [lookAt](TextmodeLayer/methods/lookAt.md) | Update this layer camera's target and optional up vector. |
| [offset](TextmodeLayer/methods/offset.md) | Set or get this layer's compositing offset in pixels. |
| [opacity](TextmodeLayer/methods/opacity.md) | Set or get this layer's opacity. |
| [ortho](TextmodeLayer/methods/ortho.md) | Enable orthographic projection for this layer. |
| [perspective](TextmodeLayer/methods/perspective.md) | Enable perspective projection for this layer. |
| [postDraw](TextmodeLayer/methods/postDraw.md) | Set this layer's post-draw callback. |
| [resetCamera](TextmodeLayer/methods/resetCamera.md) | Reset this layer to default auto camera behavior. |
| [rotateZ](TextmodeLayer/methods/rotateZ.md) | Set or get this layer's compositing rotation in degrees. |
| [setCamera](TextmodeLayer/methods/setCamera.md) | Activate a camera for this layer. |
| [setPluginState](TextmodeLayer/methods/setPluginState.md) | Store plugin-specific state on this layer. Plugins can use this to attach their own data to layer instances. |
| [show](TextmodeLayer/methods/show.md) | Show this layer for rendering. |
| [useTileColors](TextmodeLayer/methods/useTileColors.md) | Configure authored tileset color preservation for this layer. |
