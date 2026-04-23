---
layout: doc
editLink: true
title: GlyphData
description: Glyph outline data for a character *(TextmodeFont only)*.
category: Interfaces
api: true
namespace: fonts
kind: Interface
lastModified: 2026-04-23
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
| <a id="advancewidth"></a> `advanceWidth` | `number` | Advance width of the character. | - |
| <a id="endpts"></a> `endPts` | `number`[] | End point indices for each contour. | `GlyphOutlineData.endPts` |
| <a id="flags"></a> `flags` | `number`[] | Point flags describing curve and line segments. | `GlyphOutlineData.flags` |
| <a id="noc"></a> `noc` | `number` | Number of contours (`-1` for composite glyphs). | `GlyphOutlineData.noc` |
| <a id="parts"></a> `parts?` | `unknown`[] | Composite glyph parts, when present. | `GlyphOutlineData.parts` |
| <a id="xmax"></a> `xMax` | `number` | Maximum x coordinate of the glyph bounds. | `GlyphOutlineData.xMax` |
| <a id="xmin"></a> `xMin` | `number` | Minimum x coordinate of the glyph bounds. | `GlyphOutlineData.xMin` |
| <a id="xs"></a> `xs` | `number`[] | X coordinates for all outline points. | `GlyphOutlineData.xs` |
| <a id="ymax"></a> `yMax` | `number` | Maximum y coordinate of the glyph bounds. | `GlyphOutlineData.yMax` |
| <a id="ymin"></a> `yMin` | `number` | Minimum y coordinate of the glyph bounds. | `GlyphOutlineData.yMin` |
| <a id="ys"></a> `ys` | `number`[] | Y coordinates for all outline points. | `GlyphOutlineData.ys` |
