---
layout: doc
editLink: true
title: postDraw
description: Set this layer's post-draw callback.
category: Methods
api: true
owner: TextmodeLayer
namespace: layering
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../../../index.md) / [layering](../../../index.md) / [TextmodeLayer](../../TextmodeLayer.md) / postDraw

# Method: postDraw()

```ts
postDraw(callback): void;
```

Set this layer's post-draw callback.

The callback is executed after the layer has been converted to ASCII and after
any filters queued in [filter](filter.md) during [draw](draw.md) have been applied.
Filters queued inside this callback are applied to the layer's final ASCII texture
before the layer is composited with the rest of the scene.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` | Function to run after this layer has been drawn and filtered. |

## Returns

`void`

## Example

```js
const layer = t.layers.add();

layer.draw(() => {
	t.background(0);
	t.char('A');
	t.rect(12, 8);
	layer.filter('grayscale', 0.4);
});

layer.postDraw(() => {
	layer.filter('invert');
});
```
