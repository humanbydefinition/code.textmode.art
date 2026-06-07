---
layout: doc
editLink: true
title: finalDraw
description: Set the final post-processing callback for the composited output.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / finalDraw

# Method: finalDraw()

```ts
finalDraw(callback): void;
```

Set the final post-processing callback for the composited output.

This callback runs after all visible layers have been composited and after
global filters queued via [filter](filter.md) during normal draw callbacks have
been applied. Filters queued with `t.filter()` inside this callback are applied
to the final composited texture before it is presented to the canvas.

Use [postDraw](postDraw.md) when you want to affect only the base layer. Use this
method when you want to affect the final image made from all layers.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` | Function to run before the final texture is presented. |

## Returns

`void`

## Example

```js
t.draw(() => {
	t.background(0);
	t.char('A');
	t.rect(12, 8);
	t.filter('grayscale', 0.4);
});

t.finalDraw(() => {
	t.filter('invert');
});
```
