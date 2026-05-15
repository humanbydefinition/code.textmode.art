---
layout: doc
editLink: true
title: filters
description: All filter related modules and types.
category: Namespaces
api: true
kind: Namespace
lastModified: 2026-05-15
---

[textmode.js](../../index.md) / filters

# filters

All filter related modules and types.

Provides various image processing filters that can be applied in sequence on a layer's textmode-converted output,
such as blur, sharpen, edge detection, and color adjustments.
Filters can also be applied globally to all layers as post-processing effects.

While `textmode.js` only offers a basic set of filters,
additional filters can be implemented and registered via the [TextmodeFilterManager](../../classes/TextmodeFilterManager.md),
which is accessible through [Textmodifier.filters](../../classes/Textmodifier.md#filters).

## References

### BuiltInFilterName

Re-exports [BuiltInFilterName](../../type-aliases/BuiltInFilterName.md)

***

### BuiltInFilterParams

Re-exports [BuiltInFilterParams](../../interfaces/BuiltInFilterParams.md)

***

### FilterName

Re-exports [FilterName](../../type-aliases/FilterName.md)

***

### TextmodeFilterManager

Re-exports [TextmodeFilterManager](../../classes/TextmodeFilterManager.md)
