---
layout: doc
editLink: false
title: postDraw
description: Set the base layer post-draw callback.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-08-22
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / postDraw

# Method: postDraw()

```ts
postDraw(callback): void;
```

Set the base layer post-draw callback.

This callback runs after the base layer's draw callback, textmode resolve pass,
and plugin-provided resolved-output transforms.

Calling this method is equivalent to setting the callback on `textmodifier.layers.base`:
```js
textmodifier.layers.base.postDraw(callback);
```

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` | Function to run after the base layer has been drawn and resolved. |

## Returns

`void`

## Example

```js
t.draw(() => {
	t.background(0);
	t.char('A');
	t.rect(12, 8);
});

t.postDraw(() => {
	// inspect post-draw state
});
```

