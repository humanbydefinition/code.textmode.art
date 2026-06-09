---
layout: doc
editLink: true
title: saveJSON
description: Downloads the selected layer or layer stack as a JSON file.
category: Methods
api: true
owner: TextmodeExportAPI
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.export.js](../../../index.md) / [TextmodeExportAPI](../../TextmodeExportAPI.md) / saveJSON

# Method: saveJSON()

```ts
saveJSON(options?): void;
```

Downloads the selected layer or layer stack as a JSON file.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`JSONExportOptions`](../../../type-aliases/JSONExportOptions.md) | Export options. |

## Returns

`void`

## Example

```ts
t.saveJSON({ filename: 'frame', layer: t.layers.base, pretty: true });
t.saveJSON({ filename: 'stack', target: 'all' });
```
