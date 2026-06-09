---
layout: doc
editLink: true
title: toJSONString
description: Produces the selected layer or layer stack as a JSON string.
category: Methods
api: true
owner: TextmodeExportAPI
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.export.js](../../../index.md) / [TextmodeExportAPI](../../TextmodeExportAPI.md) / toJSONString

# Method: toJSONString()

```ts
toJSONString(options?): string;
```

Produces the selected layer or layer stack as a JSON string.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`JSONExportOptions`](../../../type-aliases/JSONExportOptions.md) | Export options. |

## Returns

`string`

Serialized JSON string for the selected layer or layer stack.

## Example

```ts
const json = t.toJSONString({ layer: t.layers.base, pretty: false, colorMode: 'hex' });
const stackJson = t.toJSONString({ target: 'all' });
```
