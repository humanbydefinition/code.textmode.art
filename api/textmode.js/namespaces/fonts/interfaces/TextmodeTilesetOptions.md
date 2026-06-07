---
layout: doc
editLink: true
title: TextmodeTilesetOptions
description: Configuration used to load a tileset image into a normalized glyph atlas.
category: Interfaces
api: true
namespace: fonts
kind: Interface
lastModified: 2026-06-07
isInterface: true
---

[textmode.js](../../../index.md) / [fonts](../index.md) / TextmodeTilesetOptions

# Interface: TextmodeTilesetOptions

Configuration used to load a tileset image into a normalized glyph atlas.

## Properties

| Property | Description |
| ------ | ------ |
| [columns](TextmodeTilesetOptions/properties/columns.md) | Number of columns in the authored tileset sheet. |
| [count](TextmodeTilesetOptions/properties/count.md) | Optional number of tiles to import from the sheet. Defaults to `columns * rows`. |
| [fontSize](TextmodeTilesetOptions/properties/fontSize.md) | Optional effective output cell height. Defaults to the native tile height. |
| [map](TextmodeTilesetOptions/properties/map.md) | Optional explicit character mapping as a .char URL/path, inline grid string, or array of row strings. When omitted, tiles are assigned sequentially starting at space (`32`). |
| [margin](TextmodeTilesetOptions/properties/margin.md) | Optional uniform outer margin in pixels. |
| [marginX](TextmodeTilesetOptions/properties/marginX.md) | Optional horizontal outer margin in pixels. Overrides `margin` for the x axis. |
| [marginY](TextmodeTilesetOptions/properties/marginY.md) | Optional vertical outer margin in pixels. Overrides `margin` for the y axis. |
| [rows](TextmodeTilesetOptions/properties/rows.md) | Number of rows in the authored tileset sheet. |
| [source](TextmodeTilesetOptions/properties/source.md) | Source image or URL for the authored tileset sheet. |
| [spacing](TextmodeTilesetOptions/properties/spacing.md) | Optional uniform spacing between tiles in pixels. |
| [spacingX](TextmodeTilesetOptions/properties/spacingX.md) | Optional horizontal spacing between tiles in pixels. Overrides `spacing` for the x axis. |
| [spacingY](TextmodeTilesetOptions/properties/spacingY.md) | Optional vertical spacing between tiles in pixels. Overrides `spacing` for the y axis. |
