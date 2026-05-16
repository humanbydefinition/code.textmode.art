---
layout: doc
editLink: true
title: TextmodeAllDocumentJSON
description: Layer stack document exported by the JSON exporter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-05-16
isInterface: true
---

[textmode.export.js](../index.md) / TextmodeAllDocumentJSON

# Interface: TextmodeAllDocumentJSON

Layer stack document exported by the JSON exporter.

## Properties

| Property | Type |
| ------ | ------ |
| <a id="property-format"></a> `format` | `"textmode.document"` |
| <a id="property-formatversion"></a> `formatVersion` | `"2.0.0"` |
| <a id="property-target"></a> `target` | `"all"` |
| <a id="property-metadata"></a> `metadata?` | [`JSONExportMetadata`](JSONExportMetadata.md) |
| <a id="property-canvas"></a> `canvas` | `object` |
| `canvas.width` | `number` |
| `canvas.height` | `number` |
| <a id="property-layers"></a> `layers` | [`TextmodeDocumentLayer`](TextmodeDocumentLayer.md)[] |
