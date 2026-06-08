---
layout: doc
editLink: true
title: angle
description: Rotation angle in degrees.
category: Properties
api: true
owner: HueRotateOptions
kind: Property
ecosystem: textmode.js
lastModified: 2026-06-08
---

[textmode.filters.js](../../../index.md) / [HueRotateOptions](../../HueRotateOptions.md) / angle

# Property: angle

```ts
angle: number;
```

Rotation angle in degrees.

- `0` = no change
- `180` = complementary colors
- `360` = full rotation (same as 0)

Values wrap around, so `370` is equivalent to `10`.

## Default

```ts
0.0
```
