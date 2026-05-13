---
layout: doc
editLink: true
title: TextmodeLayerJSON
description: Layer document exported by the JSON exporter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-05-13
isInterface: true
---

[textmode.export.js](../index.md) / TextmodeLayerJSON

# Interface: TextmodeLayerJSON

Layer document exported by the JSON exporter.

## Properties

| Property | Type |
| ------ | ------ |
| <a id="property-schema"></a> `$schema` | `string` |
| <a id="property-format"></a> `format` | `"textmode.layer"` |
| <a id="property-formatversion"></a> `formatVersion` | `"1.0.0"` |
| <a id="property-metadata"></a> `metadata?` | `JSONExportMetadata` |
| <a id="property-canvas"></a> `canvas` | `object` |
| `canvas.width` | `number` |
| `canvas.height` | `number` |
| <a id="property-grid"></a> `grid` | `object` |
| `grid.cols` | `number` |
| `grid.rows` | `number` |
| `grid.cellWidth` | `number` |
| `grid.cellHeight` | `number` |
| <a id="property-layer"></a> `layer` | `object` |
| `layer.id` | `"base"` |
| `layer.cells` | `JSONObjectRowsCellCollection` |
