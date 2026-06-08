---
layout: doc
editLink: true
title: draw
description: Set a custom renderer for the internal layer.
category: Methods
api: true
owner: LoadingLayerController
namespace: loading
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../../../index.md) / [loading](../../../index.md) / [LoadingLayerController](../../LoadingLayerController.md) / draw

# Method: draw()

```ts
draw(callback?): void;
```

Set a custom renderer for the internal layer.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback?` | (`context`) => `void` | Custom draw callback that receives the rendering context. |

## Returns

`void`

## Inherited from

```ts
InternalLayerController.draw
```
