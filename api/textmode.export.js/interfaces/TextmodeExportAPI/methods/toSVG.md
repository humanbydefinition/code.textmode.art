---
layout: doc
editLink: true
title: toSVG
description: Generates SVG markup for the selected layer.
category: Methods
api: true
owner: TextmodeExportAPI
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.export.js](../../../index.md) / [TextmodeExportAPI](../../TextmodeExportAPI.md) / toSVG

# Method: toSVG()

```ts
toSVG(options?): string;
```

Generates SVG markup for the selected layer.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`SVGExportOptions`](../../../type-aliases/SVGExportOptions.md) | Export options. |

## Returns

`string`

The SVG content representing the artwork.

## Example

```ts
const svg = t.toSVG({ layer: t.layers.base, drawMode: 'stroke', strokeWidth: 1.5 });
```
