---
layout: doc
editLink: true
title: ExportOverlayPosition
description: Current canvas-relative placement state for the export overlay UI.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-07-31
isInterface: true
---

[textmode.export.js](../index.md) / ExportOverlayPosition

# Interface: ExportOverlayPosition

Current canvas-relative placement state for the export overlay UI.

`auto` means the overlay is using the library default offset from the
textmode canvas. `custom` means the user or runtime API has moved it.


## Properties

| Property | Type |
| ------ | ------ |
| <a id="property-mode"></a> `mode` | `"auto"` \| `"custom"` |
| <a id="property-offsetx"></a> `offsetX` | `number` |
| <a id="property-offsety"></a> `offsetY` | `number` |
