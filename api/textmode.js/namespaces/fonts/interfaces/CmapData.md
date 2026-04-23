---
layout: doc
editLink: true
title: CmapData
description: Character map data from OpenType/TrueType font Contains multiple encoding tables and platform-specific mappings
category: Interfaces
api: true
namespace: fonts
kind: Interface
lastModified: 2026-04-19
isInterface: true
---

[textmode.js](../../../index.md) / [fonts](../index.md) / CmapData

# Interface: CmapData

Character map data from OpenType/TrueType font
Contains multiple encoding tables and platform-specific mappings

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="ids"></a> `ids` | `Record`\<`string`, `number`\> | Platform+encoding ID mappings to table indices |
| <a id="off"></a> `off` | `number` | Offset of cmap table in font data |
| <a id="tables"></a> `tables` | [`CmapTable`](../type-aliases/CmapTable.md)[] | Array of character mapping tables |
