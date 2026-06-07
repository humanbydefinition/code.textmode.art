---
layout: doc
editLink: true
title: TextmodeLayerManager
description: Manages the stack of layers within a Textmodifier instance.
category: Classes
api: true
namespace: layering
kind: Class
lastModified: 2026-06-07
hasConstructor: false
---

[textmode.js](../../../index.md) / [layering](../index.md) / TextmodeLayerManager

# Class: TextmodeLayerManager

Manages the stack of layers within a [Textmodifier](../../../classes/Textmodifier.md) instance.

The `base` layer is always present at the bottom of the stack. User-created layers are added
above it and can render with independent grids, fonts, filters, offsets, opacity, and blend modes.

Access this manager via `textmodifier.layers`.

## Accessors

| Accessor | Description |
| ------ | ------ |
| [all](TextmodeLayerManager/accessors/all.md) | All user-created layers in stack order. |
| [base](TextmodeLayerManager/accessors/base.md) | Base layer rendered at the bottom of the stack. |
| [filters](TextmodeLayerManager/accessors/filters.md) | Filter manager used by this layer stack. |
| [resultFramebuffer](TextmodeLayerManager/accessors/resultFramebuffer.md) | Framebuffer containing the most recent composited result. |

## Methods

| Method | Description |
| ------ | ------ |
| [\_renderAndPresentWithOverlay](TextmodeLayerManager/methods/renderAndPresentWithOverlay.md) | - |
| [add](TextmodeLayerManager/methods/add.md) | Create a layer at the top of the stack. |
| [clear](TextmodeLayerManager/methods/clear.md) | Remove and dispose all user-created layers. |
| [move](TextmodeLayerManager/methods/move.md) | Move a user-created layer to a new index in the stack. |
| [remove](TextmodeLayerManager/methods/remove.md) | Remove and dispose a user-created layer. |
| [swap](TextmodeLayerManager/methods/swap.md) | Swap two user-created layers. |
