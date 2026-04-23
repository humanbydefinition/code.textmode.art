---
layout: doc
editLink: true
title: fonts
description: All font rendering related modules and types.
category: Namespaces
api: true
kind: Namespace
lastModified: 2026-04-19
---

[textmode.js](../../index.md) / fonts

# fonts

All font rendering related modules and types.

## Classes

| Class | Description |
| ------ | ------ |
| [CharacterColorMapper](classes/CharacterColorMapper.md) | Handles color generation and mapping for characters. This class manages the unique RGB color assignment for character identification. |
| [CharacterExtractor](classes/CharacterExtractor.md) | Handles extraction of characters from font cmap tables. This class encapsulates the complex logic for reading different cmap table formats. |
| [FontMetricsCalculator](classes/FontMetricsCalculator.md) | Handles calculation of font metrics and glyph dimensions. This class encapsulates the logic for measuring text and calculating font properties directly from font data using Typr.ts, eliminating the need for Canvas-based measurement. |
| [TextmodeFont](classes/TextmodeFont.md) | Manages the font used for rendering characters via [TextmodeLayer.loadFont](../layering/classes/TextmodeLayer.md#loadfont). |
| [TextmodeTileset](classes/TextmodeTileset.md) | Manages a bitmap tileset as a normalized glyph atlas. |
| [TextureAtlas](classes/TextureAtlas.md) | Handles creation of texture atlases for font rendering. This class manages the Canvas 2D rendering and WebGL framebuffer creation. Supports both Typr.js path-based rendering for uniform cross-browser text and fallback fillText rendering. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [CmapData](interfaces/CmapData.md) | Character map data from OpenType/TrueType font Contains multiple encoding tables and platform-specific mappings |
| [CmapTableFormat12](interfaces/CmapTableFormat12.md) | Interface for cmap table Format 12 (Extended Unicode ranges) Used for full Unicode character mapping including supplementary planes |
| [CmapTableFormat4](interfaces/CmapTableFormat4.md) | Interface for cmap table Format 4 (Basic Multilingual Plane) Used for Unicode BMP character mapping |
| [GlyphData](interfaces/GlyphData.md) | Glyph data structure for parsed glyphs Contains the actual glyph outline data |
| [GlyphDimensions](interfaces/GlyphDimensions.md) | Font glyph dimensions |
| [HeadTable](interfaces/HeadTable.md) | Head table from OpenType/TrueType font Contains global font metrics and metadata |
| [HheaTable](interfaces/HheaTable.md) | Horizontal header table from OpenType/TrueType font Contains horizontal layout metrics |
| [HmtxTable](interfaces/HmtxTable.md) | Horizontal metrics table from OpenType/TrueType font Contains advance widths and left side bearings for all glyphs |
| [MaxpTable](interfaces/MaxpTable.md) | Maximum profile table from OpenType/TrueType font Contains the number of glyphs and other maximums |
| [TextmodeTilesetAutoAssignOptions](interfaces/TextmodeTilesetAutoAssignOptions.md) | Configuration for sequential fallback mapping when no explicit map is provided. |
| [TextmodeTilesetOptions](interfaces/TextmodeTilesetOptions.md) | Configuration used to load a tileset image into a normalized glyph atlas. |
| [TyprFont](interfaces/TyprFont.md) | Complete TyprFont interface representing a parsed OpenType/TrueType font This interface describes the structure returned by Typr.parse() |
| [TyprStatic](interfaces/TyprStatic.md) | Main Typr interface Provides font parsing and table lookup functionality |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [CmapTable](type-aliases/CmapTable.md) | Union type for supported cmap table formats |
| [LocaTable](type-aliases/LocaTable.md) | Location table for glyph offsets Maps glyph indices to their byte offsets in the glyf table |
| [TextmodeCharacter](type-aliases/TextmodeCharacter.md) | Represents a single character in the [TextmodeFont.characters](classes/TextmodeFont.md#characters) array. Kept as an alias for backward compatibility while glyph sources are generalized. |
| [TextmodeGlyph](type-aliases/TextmodeGlyph.md) | Represents a single glyph entry in a textmode glyph atlas. |
| [TextmodeTilesetImageSource](type-aliases/TextmodeTilesetImageSource.md) | Supported source types for tileset-backed glyph atlases. |
| [TextmodeTilesetMapSource](type-aliases/TextmodeTilesetMapSource.md) | Supported mapping sources for tileset-backed glyph atlases. |

## Variables

| Variable | Description |
| ------ | ------ |
| [Typr](variables/Typr.md) | Main Typr class implementation |
