---
layout: doc
editLink: true
title: levels
description: Number of color levels per channel.
category: Properties
api: true
owner: PosterizeOptions
kind: Property
ecosystem: textmode.js
lastModified: 2026-06-08
---

[textmode.filters.js](../../../index.md) / [PosterizeOptions](../../PosterizeOptions.md) / levels

# Property: levels

```ts
levels: number;
```

Number of color levels per channel.

Lower values create more dramatic banding effects.
Higher values approach the original image quality.

- `2` = extreme posterization (very few colors)
- `4` = strong posterization (default)
- `8+` = subtle posterization

## Default

```ts
4.0
```
