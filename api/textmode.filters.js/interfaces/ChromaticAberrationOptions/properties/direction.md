---
layout: doc
editLink: true
title: direction
description: Direction of the color separation as [x, y].
category: Properties
api: true
owner: ChromaticAberrationOptions
kind: Property
ecosystem: textmode.js
lastModified: 2026-06-08
---

[textmode.filters.js](../../../index.md) / [ChromaticAberrationOptions](../../ChromaticAberrationOptions.md) / direction

# Property: direction

```ts
direction: [number, number];
```

Direction of the color separation as `[x, y]`.

- `[1, 0]` = horizontal separation
- `[0, 1]` = vertical separation
- `[1, 1]` = diagonal separation

The vector is normalized internally, so `[2, 0]` is the same as `[1, 0]`.

## Default

```ts
[1.0, 0.0]
```
