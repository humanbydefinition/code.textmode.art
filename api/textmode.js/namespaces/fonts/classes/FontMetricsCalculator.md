---
layout: doc
editLink: true
title: FontMetricsCalculator
description: Handles calculation of font metrics and glyph dimensions. This class encapsulates the logic for measuring text and calculating font properties directly from ...
category: Classes
api: true
namespace: fonts
kind: Class
lastModified: 2026-04-19
hasConstructor: true
---

[textmode.js](../../../index.md) / [fonts](../index.md) / FontMetricsCalculator

# Class: FontMetricsCalculator

Handles calculation of font metrics and glyph dimensions.
This class encapsulates the logic for measuring text and calculating font properties
directly from font data using Typr.ts, eliminating the need for Canvas-based measurement.

## Constructors

### Constructor

```ts
new FontMetricsCalculator(): FontMetricsCalculator;
```

Creates a new FontMetricsCalculator instance.

#### Returns

`FontMetricsCalculator`

## Methods

### \_calculateMaxGlyphDimensions()

```ts
_calculateMaxGlyphDimensions(
   characters, 
   fontSize, 
   font): GlyphDimensions;
```

Calculates the maximum glyph dimensions for a given set of characters
using direct font metrics from the parsed font data.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `characters` | `string`[] | Array of character strings |
| `fontSize` | `number` | Font size to use for scaling measurements |
| `font` | [`TyprFont`](../interfaces/TyprFont.md) | Parsed TyprFont object containing font data |

#### Returns

[`GlyphDimensions`](../interfaces/GlyphDimensions.md)

Object containing width and height dimensions
