---
layout: doc
editLink: true
title: TextmodeSelectedDocumentJSON
description: Selected-layer document exported by the JSON exporter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-06-09
isInterface: true
---

[textmode.export.js](../index.md) / TextmodeSelectedDocumentJSON

# Interface: TextmodeSelectedDocumentJSON

Selected-layer document exported by the JSON exporter.

## Properties

| Property | Type |
| ------ | ------ |
| <a id="property-format"></a> `format` | `"textmode.document"` |
| <a id="property-formatversion"></a> `formatVersion` | `"2.0.0"` |
| <a id="property-target"></a> `target` | `"selected"` |
| <a id="property-metadata"></a> `metadata?` | [`JSONExportMetadata`](JSONExportMetadata.md) |
| <a id="property-canvas"></a> `canvas` | `object` |
| `canvas.width` | `number` |
| `canvas.height` | `number` |
| <a id="property-grid"></a> `grid` | [`JSONLayerGrid`](JSONLayerGrid.md) |
| <a id="property-layer"></a> `layer` | [`TextmodeSelectedDocumentLayer`](TextmodeSelectedDocumentLayer.md) |
