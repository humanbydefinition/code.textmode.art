---
layout: doc
editLink: false
title: fonts
description: All font rendering related modules and types.
category: Namespaces
api: true
kind: Namespace
lastModified: 2026-10-31
---

[textmode.js](../../index.md) / fonts

# fonts

All font rendering related modules and types.

## Classes

| Class | Description |
| ------ | ------ |
| [TextmodeFont](classes/TextmodeFont.md) | Vector font glyph source for textmode rendering. |
| [TextmodeTileset](classes/TextmodeTileset.md) | Bitmap tileset glyph source for textmode rendering. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [GlyphData](interfaces/GlyphData.md) | Glyph outline data for a character *([TextmodeFont](classes/TextmodeFont.md) only)*. |
| [GlyphDimensions](interfaces/GlyphDimensions.md) | Glyph cell dimensions in pixels. |
| [TextmodeFontSourceData](interfaces/TextmodeFontSourceData.md) | Immutable decoded SFNT source shared by layer-safe font copies. |
| [TextmodeGlyphAtlas](interfaces/TextmodeGlyphAtlas.md) | Backend-neutral glyph atlas contract used by the shared rendering pipeline. |
| [TextmodeTilesetOptions](interfaces/TextmodeTilesetOptions.md) | Configuration used to load a tileset image into a normalized glyph atlas. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [TextmodeGlyph](type-aliases/TextmodeGlyph.md) | Represents a single glyph entry in a textmode glyph atlas. |
