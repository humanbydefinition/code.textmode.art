---
layout: doc
editLink: false
title: TextmodePluginContext
description: Host-provided context passed to plugins when they are installed on a Textmodifier instance.
category: Interfaces
api: true
namespace: plugins
kind: Interface
lastModified: 2026-08-03
isInterface: true
---

[textmode.js](../../../index.md) / [plugins](../index.md) / TextmodePluginContext

# Interface: TextmodePluginContext

Host-provided context passed to plugins when they are installed on a [Textmodifier](../../../classes/Textmodifier.md) instance.


## Extensions

Add and remove methods on layer and source instances.

| Method | Description |
| ------ | ------ |
| [extendLayer](TextmodePluginContext/methods/extendLayer.md) | Extend TextmodeLayer instances with a new method. The method will be available on all existing and future layer instances. |
| [extendSource](TextmodePluginContext/methods/extendSource.md) | Extend TextmodeSource instances with a new method. The method will be available on image, video, texture, and overlay sources. |
| [removeLayerExtension](TextmodePluginContext/methods/removeLayerExtension.md) | Remove a method extension from TextmodeLayer. |
| [removeSourceExtension](TextmodePluginContext/methods/removeSourceExtension.md) | Remove a method extension from TextmodeSource. |

## Host resources

Access the renderer, grid, glyph atlas, canvas, framebuffers, and layer manager.

### asciiFramebuffer

```ts
asciiFramebuffer: TextmodeFramebuffer;
```

The framebuffer containing the ASCII representation (from base layer).<br/>
This framebuffer only has a single attachment.


***

### canvas

```ts
canvas: TextmodeCanvasHandle;
```

A stable handle for the canvas used by the Textmodifier instance.


***

### drawFramebuffer

```ts
drawFramebuffer: TextmodeFramebuffer;
```

The framebuffer the user draws to with 3 attachments (from base layer).


***

### font

```ts
font: 
  | TextmodeFont
  | TextmodeTileset;
```

The active glyph source used by the Textmodifier instance (from base layer).


***

### glyphAtlas

```ts
glyphAtlas: TextmodeGlyphAtlas;
```

Backend-neutral glyph atlas used by the Textmodifier instance (from base layer).


***

### grid

```ts
grid: TextmodeGrid;
```

The grid used by the Textmodifier instance (from base layer).


***

### layerManager

```ts
layerManager: TextmodeLayerManager;
```

The layer manager for accessing and managing all layers.


## Layer hooks

Register callbacks around individual layer renders and disposal.

| Method | Description |
| ------ | ------ |
| [registerLayerDisposedHook](TextmodePluginContext/methods/registerLayerDisposedHook.md) | Register a callback to be invoked when a layer is about to be disposed. |
| [registerLayerPostRenderHook](TextmodePluginContext/methods/registerLayerPostRenderHook.md) | Register a callback to be invoked after each layer's render cycle. This happens after the user draw callback but before the ASCII resolve pass. |
| [registerLayerPreRenderHook](TextmodePluginContext/methods/registerLayerPreRenderHook.md) | Register a callback to be invoked before each layer's render cycle. This happens after the layer's visibility check but before any drawing operations. Useful for rendering content to the layer's framebuffer before user draw callbacks. |

## Sketch hooks

Register callbacks around setup and the sketch draw cycle.

| Method | Description |
| ------ | ------ |
| [registerPostDrawHook](TextmodePluginContext/methods/registerPostDrawHook.md) | Register a callback to be invoked after each draw cycle. Happens outside of the draw framebuffer being bound after the final result is drawn to the screen. |
| [registerPostSetupHook](TextmodePluginContext/methods/registerPostSetupHook.md) | Register a callback to be invoked after the user's setup callback completes. This happens after user code in `setup()` has finished executing, but before the loading screen finishes and the main render loop begins. Useful for plugins that need to finalize initialization after user setup. |
| [registerPreDrawHook](TextmodePluginContext/methods/registerPreDrawHook.md) | Register a callback to be invoked before each draw cycle. Happens just before any framebuffer |
| [registerPreSetupHook](TextmodePluginContext/methods/registerPreSetupHook.md) | Register a callback to be invoked before the user's setup callback runs. This happens after the Textmodifier and all layers are fully initialized, but before user code in `setup()` executes. Useful for plugins that need to prepare resources or state before user setup. |
