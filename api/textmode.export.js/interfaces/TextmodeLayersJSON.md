---
layout: doc
editLink: true
title: TextmodeLayersJSON
description: Layer stack document exported by the JSON exporter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-05-16
isInterface: true
---

[textmode.export.js](../index.md) / TextmodeLayersJSON

# Interface: TextmodeLayersJSON

Layer stack document exported by the JSON exporter.

## Properties

| Property | Type |
| ------ | ------ |
| <a id="property-schema"></a> `$schema` | `string` |
| <a id="property-format"></a> `format` | `"textmode.layer"` |
| <a id="property-formatversion"></a> `formatVersion` | `"1.1.0"` |
| <a id="property-metadata"></a> `metadata?` | [`JSONExportMetadata`](JSONExportMetadata.md) |
| <a id="property-canvas"></a> `canvas` | `object` |
| `canvas.width` | `number` |
| `canvas.height` | `number` |
| <a id="property-layers"></a> `layers` | [`TextmodeLayersJSONLayer`](TextmodeLayersJSONLayer.md)[] |
