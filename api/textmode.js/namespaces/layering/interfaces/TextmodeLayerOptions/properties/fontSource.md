---
layout: doc
editLink: true
title: fontSource
description: Source for the font to use in this layer.
category: Properties
api: true
owner: TextmodeLayerOptions
namespace: layering
kind: Property
lastModified: 2026-06-08
---

[textmode.js](../../../../../index.md) / [layering](../../../index.md) / [TextmodeLayerOptions](../../TextmodeLayerOptions.md) / fontSource

# Property: fontSource

```ts
optional fontSource?: string | TextmodeFont;
```

Source for the font to use in this layer.

Can be a URL/path to a font file, or an existing TextmodeFont instance.
Existing TextmodeFont inputs are forked per layer to keep resources independent.
