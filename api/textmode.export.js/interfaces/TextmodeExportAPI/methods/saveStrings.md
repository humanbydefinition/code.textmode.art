---
layout: doc
editLink: true
title: saveStrings
description: Downloads the selected layer's text content as a plain-text file.
category: Methods
api: true
owner: TextmodeExportAPI
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.export.js](../../../index.md) / [TextmodeExportAPI](../../TextmodeExportAPI.md) / saveStrings

# Method: saveStrings()

```ts
saveStrings(options?): void;
```

Downloads the selected layer's text content as a plain-text file.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`TXTExportOptions`](../../../type-aliases/TXTExportOptions.md) | Export options. |

## Returns

`void`

## Example

```ts
t.saveStrings({ filename: 'frame', layer: t.layers.base, preserveTrailingSpaces: true });
```
