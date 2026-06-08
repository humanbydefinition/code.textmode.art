---
layout: doc
editLink: true
title: GlyphData
description: Glyph outline data for a character *(TextmodeFont only)*.
category: Interfaces
api: true
namespace: fonts
kind: Interface
lastModified: 2026-06-08
isInterface: true
---

[textmode.js](../../../index.md) / [fonts](../index.md) / GlyphData

# Interface: GlyphData

Glyph outline data for a character *([TextmodeFont](../classes/TextmodeFont.md) only)*.

## Extends

- `GlyphOutlineData`

## Properties

| Property | Description |
| ------ | ------ |
| [advanceWidth](GlyphData/properties/advanceWidth.md) | Advance width of the character. |
| [endPts](GlyphData/properties/endPts.md) | End point indices for each contour. |
| [flags](GlyphData/properties/flags.md) | Point flags describing curve and line segments. |
| [noc](GlyphData/properties/noc.md) | Number of contours (`-1` for composite glyphs). |
| [parts](GlyphData/properties/parts.md) | Composite glyph parts, when present. |
| [xMax](GlyphData/properties/xMax.md) | Maximum x coordinate of the glyph bounds. |
| [xMin](GlyphData/properties/xMin.md) | Minimum x coordinate of the glyph bounds. |
| [xs](GlyphData/properties/xs.md) | X coordinates for all outline points. |
| [yMax](GlyphData/properties/yMax.md) | Maximum y coordinate of the glyph bounds. |
| [yMin](GlyphData/properties/yMin.md) | Minimum y coordinate of the glyph bounds. |
| [ys](GlyphData/properties/ys.md) | Y coordinates for all outline points. |
