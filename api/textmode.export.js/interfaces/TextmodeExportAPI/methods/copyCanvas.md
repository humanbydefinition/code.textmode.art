---
layout: doc
editLink: true
title: copyCanvas
description: Copies the current canvas to the user's clipboard as an image.
category: Methods
api: true
owner: TextmodeExportAPI
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.export.js](../../../index.md) / [TextmodeExportAPI](../../TextmodeExportAPI.md) / copyCanvas

# Method: copyCanvas()

```ts
copyCanvas(options?): Promise<void>;
```

Copies the current canvas to the user's clipboard as an image.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`ImageExportOptions`](../../../type-aliases/ImageExportOptions.md) | Export options. |

## Returns

`Promise`\<`void`\>

## Example

```ts
await t.copyCanvas({ format: 'png' });
```
