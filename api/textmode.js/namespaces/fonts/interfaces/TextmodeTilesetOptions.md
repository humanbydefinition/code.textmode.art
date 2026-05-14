---
layout: doc
editLink: true
title: TextmodeTilesetOptions
description: Configuration used to load a tileset image into a normalized glyph atlas.
category: Interfaces
api: true
namespace: fonts
kind: Interface
lastModified: 2026-05-14
isInterface: true
---

[textmode.js](../../../index.md) / [fonts](../index.md) / TextmodeTilesetOptions

# Interface: TextmodeTilesetOptions

Configuration used to load a tileset image into a normalized glyph atlas.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-columns"></a> `columns` | `number` | Number of columns in the authored tileset sheet. |
| <a id="property-count"></a> `count?` | `number` | Optional number of tiles to import from the sheet. Defaults to `columns * rows`. |
| <a id="property-fontsize"></a> `fontSize?` | `number` | Optional effective output cell height. Defaults to the native tile height. |
| <a id="property-map"></a> `map?` | `string` \| `string`[] \| `URL` | Optional explicit character mapping as a .char URL/path, inline grid string, or array of row strings. When omitted, tiles are assigned sequentially starting at space (`32`). |
| <a id="property-margin"></a> `margin?` | `number` | Optional uniform outer margin in pixels. |
| <a id="property-marginx"></a> `marginX?` | `number` | Optional horizontal outer margin in pixels. Overrides `margin` for the x axis. |
| <a id="property-marginy"></a> `marginY?` | `number` | Optional vertical outer margin in pixels. Overrides `margin` for the y axis. |
| <a id="property-rows"></a> `rows` | `number` | Number of rows in the authored tileset sheet. |
| <a id="property-source"></a> `source` | `string` \| `URL` \| `CanvasImageSource` | Source image or URL for the authored tileset sheet. |
| <a id="property-spacing"></a> `spacing?` | `number` | Optional uniform spacing between tiles in pixels. |
| <a id="property-spacingx"></a> `spacingX?` | `number` | Optional horizontal spacing between tiles in pixels. Overrides `spacing` for the x axis. |
| <a id="property-spacingy"></a> `spacingY?` | `number` | Optional vertical spacing between tiles in pixels. Overrides `spacing` for the y axis. |
