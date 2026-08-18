---
layout: doc
editLink: false
title: postDraw
description: Set this layer's post-draw callback.
category: Methods
api: true
owner: TextmodeLayer
namespace: layering
kind: Method
lastModified: 2026-08-17
---

[textmode.js](../../../../../index.md) / [layering](../../../index.md) / [TextmodeLayer](../../TextmodeLayer.md) / postDraw

# Method: postDraw()

```ts
postDraw(callback): void;
```

Set this layer's post-draw callback.

The callback is executed after the layer has been converted to textmode and after
plugin-provided resolved-output transforms. Finalized-output transforms run afterward.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` | Function to run after this layer has been drawn and resolved. |

## Returns

`void`

## Example

```js
const layer = t.layers.add();

layer.draw(() => {
	t.background(0);
	t.char('A');
	t.rect(12, 8);
});

layer.postDraw(() => {
	// inspect post-draw state
});
```

