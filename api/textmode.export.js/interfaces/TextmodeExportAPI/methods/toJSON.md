---
layout: doc
editLink: true
title: toJSON
description: Produces the selected layer or layer stack as structured JSON data.
category: Methods
api: true
owner: TextmodeExportAPI
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.export.js](../../../index.md) / [TextmodeExportAPI](../../TextmodeExportAPI.md) / toJSON

# Method: toJSON()

```ts
toJSON(options?): TextmodeDocumentJSON;
```

Produces the selected layer or layer stack as structured JSON data.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`JSONExportOptions`](../../../type-aliases/JSONExportOptions.md) | Export options. |

## Returns

[`TextmodeDocumentJSON`](../../../type-aliases/TextmodeDocumentJSON.md)

The JSON document representing the selected layer or layer stack.

## Example

```ts
const layer = t.toJSON({ layer: t.layers.base, colorMode: 'hex', includeMetadata: true });
const stack = t.toJSON({ target: 'all' });
```
