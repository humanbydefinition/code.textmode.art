---
layout: doc
editLink: true
title: GlyphData
description: Glyph outline data for a character *(TextmodeFont only)*.
category: Interfaces
api: true
namespace: fonts
kind: Interface
lastModified: 2026-05-19
isInterface: true
---

[textmode.js](../../../index.md) / [fonts](../index.md) / GlyphData

# Interface: GlyphData

Glyph outline data for a character *([TextmodeFont](../classes/TextmodeFont.md) only)*.

## Extends

- `GlyphOutlineData`

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="property-advancewidth"></a> `advanceWidth` | `number` | Advance width of the character. | - |
| <a id="property-endpts"></a> `endPts` | `number`[] | End point indices for each contour. | `GlyphOutlineData.endPts` |
| <a id="property-flags"></a> `flags` | `number`[] | Point flags describing curve and line segments. | `GlyphOutlineData.flags` |
| <a id="property-noc"></a> `noc` | `number` | Number of contours (`-1` for composite glyphs). | `GlyphOutlineData.noc` |
| <a id="property-parts"></a> `parts?` | `unknown`[] | Composite glyph parts, when present. | `GlyphOutlineData.parts` |
| <a id="property-xmax"></a> `xMax` | `number` | Maximum x coordinate of the glyph bounds. | `GlyphOutlineData.xMax` |
| <a id="property-xmin"></a> `xMin` | `number` | Minimum x coordinate of the glyph bounds. | `GlyphOutlineData.xMin` |
| <a id="property-xs"></a> `xs` | `number`[] | X coordinates for all outline points. | `GlyphOutlineData.xs` |
| <a id="property-ymax"></a> `yMax` | `number` | Maximum y coordinate of the glyph bounds. | `GlyphOutlineData.yMax` |
| <a id="property-ymin"></a> `yMin` | `number` | Minimum y coordinate of the glyph bounds. | `GlyphOutlineData.yMin` |
| <a id="property-ys"></a> `ys` | `number`[] | Y coordinates for all outline points. | `GlyphOutlineData.ys` |
