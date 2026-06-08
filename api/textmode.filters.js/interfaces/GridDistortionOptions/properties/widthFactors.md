---
layout: doc
editLink: true
title: widthFactors
description: Array of distortion values (0-1) for each column.
category: Properties
api: true
owner: GridDistortionOptions
kind: Property
ecosystem: textmode.js
lastModified: 2026-06-08
---

[textmode.filters.js](../../../index.md) / [GridDistortionOptions](../../GridDistortionOptions.md) / widthFactors

# Property: widthFactors

```ts
widthFactors: number[];
```

Array of distortion values (0-1) for each column.

Must contain at least as many elements as columns (max 128).
Values control the relative width of each column:
- `0.0` = minimum width
- `0.5` = normal width
- `1.0` = maximum width

## Default

```ts
Array(128).fill(0.5)
```
