---
layout: doc
editLink: true
title: TyprFont
description: Complete TyprFont interface representing a parsed OpenType/TrueType font This interface describes the structure returned by Typr.parse()
category: Interfaces
api: true
namespace: fonts
kind: Interface
lastModified: 2026-04-19
isInterface: true
---

[textmode.js](../../../index.md) / [fonts](../index.md) / TyprFont

# Interface: TyprFont

Complete TyprFont interface representing a parsed OpenType/TrueType font
This interface describes the structure returned by Typr.parse()

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="_data"></a> `_data` | `Uint8Array` | Internal font data buffer |
| <a id="_index"></a> `_index` | `number` | Font index in collection |
| <a id="_offset"></a> `_offset` | `number` | Font offset in data |
| <a id="cmap"></a> `cmap` | [`CmapData`](CmapData.md) | Character map table |
| <a id="glyf"></a> `glyf` | (`null` \| [`GlyphData`](GlyphData.md))[] | Glyph data table - stores parsed glyph data (populated on demand) |
| <a id="head"></a> `head` | [`HeadTable`](HeadTable.md) | Font header table |
| <a id="hhea"></a> `hhea` | [`HheaTable`](HheaTable.md) | Horizontal header table |
| <a id="hmtx"></a> `hmtx` | [`HmtxTable`](HmtxTable.md) | Horizontal metrics table |
| <a id="loca"></a> `loca` | [`LocaTable`](../type-aliases/LocaTable.md) | Glyph location table |
| <a id="maxp"></a> `maxp` | [`MaxpTable`](MaxpTable.md) | Maximum profile table |
