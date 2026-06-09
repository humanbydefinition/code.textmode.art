---
layout: doc
editLink: true
title: toString
description: Produces the selected layer's text content as a string.
category: Methods
api: true
owner: TextmodeExportAPI
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.export.js](../../../index.md) / [TextmodeExportAPI](../../TextmodeExportAPI.md) / toString

# Method: toString()

```ts
toString(options?): string;
```

Produces the selected layer's text content as a string.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`TXTExportOptions`](../../../type-aliases/TXTExportOptions.md) | Export options. |

## Returns

`string`

The textual representation of the artwork.

## Example

```ts
const text = t.toString({ layer: t.layers.base, preserveTrailingSpaces: false });
```
