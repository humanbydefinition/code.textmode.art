---
layout: doc
editLink: true
title: postDraw
description: Set the base layer post-draw callback.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / postDraw

# Method: postDraw()

```ts
postDraw(callback): void;
```

Set the base layer post-draw callback.

This callback runs after the base layer's draw callback, ASCII resolve pass, and
any filters queued on the base layer during draw. Filters queued on
`t.layers.base` inside this callback are applied to the base layer before
other layers are composited on top.

Calling this method is equivalent to setting the callback on `textmodifier.layers.base`:
```js
textmodifier.layers.base.postDraw(callback);
```

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` | Function to run after the base layer has been drawn and filtered. |

## Returns

`void`

## Example

```js
t.draw(() => {
	t.background(0);
	t.char('A');
	t.rect(12, 8);
	t.layers.base.filter('grayscale', 0.5);
});

t.postDraw(() => {
	t.layers.base.filter('invert');
});
```
