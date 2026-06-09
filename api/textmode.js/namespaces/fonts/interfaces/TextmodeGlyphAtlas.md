---
layout: doc
editLink: true
title: TextmodeGlyphAtlas
description: Backend-neutral glyph atlas contract used by the shared rendering pipeline.
category: Interfaces
api: true
namespace: fonts
kind: Interface
lastModified: 2026-06-09
isInterface: true
---

[textmode.js](../../../index.md) / [fonts](../index.md) / TextmodeGlyphAtlas

# Interface: TextmodeGlyphAtlas

Backend-neutral glyph atlas contract used by the shared rendering pipeline.

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="property-celldimensions"></a> `cellDimensions` | `readonly` | [`GlyphDimensions`](GlyphDimensions.md) |
| <a id="property-cellheight"></a> `cellHeight` | `readonly` | `number` |
| <a id="property-cellwidth"></a> `cellWidth` | `readonly` | `number` |
| <a id="property-charactermap"></a> `characterMap` | `readonly` | `Map`\<`string`, [`TextmodeGlyph`](../type-aliases/TextmodeGlyph.md)\> |
| <a id="property-characters"></a> `characters` | `readonly` | readonly [`TextmodeGlyph`](../type-aliases/TextmodeGlyph.md)[] |
| <a id="property-columns"></a> `columns` | `readonly` | `number` |
| <a id="property-framebuffer"></a> `framebuffer` | `readonly` | [`TextmodeFramebuffer`](../../../classes/TextmodeFramebuffer.md) |
| <a id="property-rows"></a> `rows` | `readonly` | `number` |
