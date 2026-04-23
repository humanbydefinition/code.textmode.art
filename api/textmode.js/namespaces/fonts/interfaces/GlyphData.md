---
layout: doc
editLink: true
title: GlyphData
description: Glyph data structure for parsed glyphs Contains the actual glyph outline data
category: Interfaces
api: true
namespace: fonts
kind: Interface
lastModified: 2026-04-19
isInterface: true
---

[textmode.js](../../../index.md) / [fonts](../index.md) / GlyphData

# Interface: GlyphData

Glyph data structure for parsed glyphs
Contains the actual glyph outline data

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="endpts"></a> `endPts` | `number`[] | End points of each contour |
| <a id="flags"></a> `flags` | `number`[] | Point flags indicating curve/line segments |
| <a id="noc"></a> `noc` | `number` | Number of contours (-1 for composite glyphs) |
| <a id="parts"></a> `parts?` | `unknown`[] | Composite glyph parts (for composite glyphs) |
| <a id="xmax"></a> `xMax` | `number` | - |
| <a id="xmin"></a> `xMin` | `number` | Bounding box coordinates |
| <a id="xs"></a> `xs` | `number`[] | X coordinates of all points |
| <a id="ymax"></a> `yMax` | `number` | - |
| <a id="ymin"></a> `yMin` | `number` | - |
| <a id="ys"></a> `ys` | `number`[] | Y coordinates of all points |
