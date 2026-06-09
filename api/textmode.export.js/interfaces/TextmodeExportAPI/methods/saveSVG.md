---
layout: doc
editLink: true
title: saveSVG
description: Downloads the selected layer as an SVG file.
category: Methods
api: true
owner: TextmodeExportAPI
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.export.js](../../../index.md) / [TextmodeExportAPI](../../TextmodeExportAPI.md) / saveSVG

# Method: saveSVG()

```ts
saveSVG(options?): void;
```

Downloads the selected layer as an SVG file.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`SVGExportOptions`](../../../type-aliases/SVGExportOptions.md) | Export options. |

## Returns

`void`

## Example

```ts
t.saveSVG({ filename: 'poster', layer: t.layers.base, includeBackgroundRectangles: true });
```
