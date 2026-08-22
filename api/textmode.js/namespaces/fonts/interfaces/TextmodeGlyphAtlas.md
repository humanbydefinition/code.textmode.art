---
layout: doc
editLink: false
title: TextmodeGlyphAtlas
description: Backend-neutral glyph atlas contract used by the shared rendering pipeline.
category: Interfaces
api: true
namespace: fonts
kind: Interface
lastModified: 2026-08-22
isInterface: true
---

[textmode.js](../../../index.md) / [fonts](../index.md) / TextmodeGlyphAtlas

# Interface: TextmodeGlyphAtlas

Backend-neutral glyph atlas contract used by the shared rendering pipeline.


## Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| <a id="property-celldimensions"></a> `cellDimensions` | `readonly` | [`GlyphDimensions`](GlyphDimensions.md) | Combined glyph cell dimensions in pixels. |
| <a id="property-cellheight"></a> `cellHeight` | `readonly` | `number` | Height of each glyph cell in pixels. |
| <a id="property-cellwidth"></a> `cellWidth` | `readonly` | `number` | Width of each glyph cell in pixels. |
| <a id="property-charactermap"></a> `characterMap` | `readonly` | `Map`\<`string`, [`TextmodeGlyph`](../type-aliases/TextmodeGlyph.md)\> | Lookup table from character string to glyph entry. |
| <a id="property-characters"></a> `characters` | `readonly` | readonly [`TextmodeGlyph`](../type-aliases/TextmodeGlyph.md)[] | Ordered glyph entries available in this atlas. |
| <a id="property-columns"></a> `columns` | `readonly` | `number` | Number of glyph columns in the atlas texture. |
| <a id="property-framebuffer"></a> `framebuffer` | `readonly` | [`TextmodeFramebuffer`](../../../classes/TextmodeFramebuffer.md) | Framebuffer containing the atlas texture data. |
| <a id="property-rows"></a> `rows` | `readonly` | `number` | Number of glyph rows in the atlas texture. |
