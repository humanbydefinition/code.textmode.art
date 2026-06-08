---
layout: doc
editLink: true
title: heightFactors
description: Array of distortion values (0-1) for each row.
category: Properties
api: true
owner: GridDistortionOptions
kind: Property
ecosystem: textmode.js
lastModified: 2026-06-08
---

[textmode.filters.js](../../../index.md) / [GridDistortionOptions](../../GridDistortionOptions.md) / heightFactors

# Property: heightFactors

```ts
heightFactors: number[];
```

Array of distortion values (0-1) for each row.

Must contain at least as many elements as rows (max 128).
Values control the relative height of each row:
- `0.0` = minimum height
- `0.5` = normal height
- `1.0` = maximum height

## Default

```ts
Array(128).fill(0.5)
```
