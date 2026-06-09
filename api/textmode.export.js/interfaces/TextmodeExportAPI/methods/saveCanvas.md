---
layout: doc
editLink: true
title: saveCanvas
description: Saves the current canvas content to an image file *('png' by default)*.
category: Methods
api: true
owner: TextmodeExportAPI
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.export.js](../../../index.md) / [TextmodeExportAPI](../../TextmodeExportAPI.md) / saveCanvas

# Method: saveCanvas()

```ts
saveCanvas(options?): Promise<void>;
```

Saves the current canvas content to an image file *(`'png'` by default)*.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`ImageExportOptions`](../../../type-aliases/ImageExportOptions.md) | Export options. |

## Returns

`Promise`\<`void`\>

## Example

```ts
await t.saveCanvas({ format: 'png', filename: 'frame-001' });
```
