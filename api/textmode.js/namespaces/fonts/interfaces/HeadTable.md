---
layout: doc
editLink: true
title: HeadTable
description: Head table from OpenType/TrueType font Contains global font metrics and metadata
category: Interfaces
api: true
namespace: fonts
kind: Interface
lastModified: 2026-04-19
isInterface: true
---

[textmode.js](../../../index.md) / [fonts](../index.md) / HeadTable

# Interface: HeadTable

Head table from OpenType/TrueType font
Contains global font metrics and metadata

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="indextolocformat"></a> `indexToLocFormat` | `number` | Format of location table (0 = short, 1 = long) |
| <a id="unitsperem"></a> `unitsPerEm` | `number` | Units per EM square |
| <a id="xmax"></a> `xMax` | `number` | Maximum x coordinate across all glyphs |
| <a id="xmin"></a> `xMin` | `number` | Minimum x coordinate across all glyphs |
| <a id="ymax"></a> `yMax` | `number` | Maximum y coordinate across all glyphs |
| <a id="ymin"></a> `yMin` | `number` | Minimum y coordinate across all glyphs |
