---
layout: doc
editLink: true
title: TextmodeTilesetOptions
description: Configuration used to load a tileset image into a normalized glyph atlas.
category: Interfaces
api: true
namespace: fonts
kind: Interface
lastModified: 2026-04-19
isInterface: true
---

[textmode.js](../../../index.md) / [fonts](../index.md) / TextmodeTilesetOptions

# Interface: TextmodeTilesetOptions

Configuration used to load a tileset image into a normalized glyph atlas.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="autoassign"></a> `autoAssign?` | [`TextmodeTilesetAutoAssignOptions`](TextmodeTilesetAutoAssignOptions.md) | Sequential fallback mapping used when `map` is omitted. |
| <a id="columns"></a> `columns` | `number` | Number of columns in the authored tileset sheet. |
| <a id="count"></a> `count?` | `number` | Optional number of tiles to import from the sheet. Defaults to `columns * rows`. |
| <a id="fontsize"></a> `fontSize?` | `number` | Optional effective output cell height. Defaults to the native tile height. |
| <a id="map"></a> `map?` | [`TextmodeTilesetMapSource`](../type-aliases/TextmodeTilesetMapSource.md) | Optional explicit character mapping as a .char URL/path, inline grid string, or array of row strings. |
| <a id="margin"></a> `margin?` | `number` | Optional uniform outer margin in pixels. |
| <a id="marginx"></a> `marginX?` | `number` | Optional horizontal outer margin in pixels. Overrides `margin` for the x axis. |
| <a id="marginy"></a> `marginY?` | `number` | Optional vertical outer margin in pixels. Overrides `margin` for the y axis. |
| <a id="rows"></a> `rows` | `number` | Number of rows in the authored tileset sheet. |
| <a id="source"></a> `source` | [`TextmodeTilesetImageSource`](../type-aliases/TextmodeTilesetImageSource.md) | Source image or URL for the authored tileset sheet. |
| <a id="spacing"></a> `spacing?` | `number` | Optional uniform spacing between tiles in pixels. |
| <a id="spacingx"></a> `spacingX?` | `number` | Optional horizontal spacing between tiles in pixels. Overrides `spacing` for the x axis. |
| <a id="spacingy"></a> `spacingY?` | `number` | Optional vertical spacing between tiles in pixels. Overrides `spacing` for the y axis. |
| <a id="startcodepoint"></a> `startCodePoint?` | `number` | Legacy alias for `autoAssign.startCodePoint`. Unicode code point assigned to the first imported tile when `map` is omitted. Defaults to space (`32`). |
