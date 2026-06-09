---
layout: doc
editLink: true
title: saveGIF
description: Records an animated GIF and saves it to disk.
category: Methods
api: true
owner: TextmodeExportAPI
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.export.js](../../../index.md) / [TextmodeExportAPI](../../TextmodeExportAPI.md) / saveGIF

# Method: saveGIF()

```ts
saveGIF(options?): Promise<void>;
```

Records an animated GIF and saves it to disk.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`GIFExportOptions`](../../../type-aliases/GIFExportOptions.md) | Export options. |

## Returns

`Promise`\<`void`\>

## Example

```ts
await t.saveGIF({ frameCount: 120, frameRate: 30, filename: 'loop' });
```
