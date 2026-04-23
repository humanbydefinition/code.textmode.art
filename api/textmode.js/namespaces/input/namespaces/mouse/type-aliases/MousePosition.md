---
layout: doc
editLink: true
title: MousePosition
description: Mouse coordinates in grid space using center-based coordinates.
category: Type Aliases
api: true
namespace: input.mouse
kind: TypeAlias
lastModified: 2026-04-23
---

[textmode.js](../../../../../index.md) / [input](../../../index.md) / [mouse](../index.md) / MousePosition

# Type Alias: MousePosition

```ts
type MousePosition = GridPosition;
```

Mouse coordinates in grid space using center-based coordinates.

The coordinate system matches the main drawing/rendering space:
- `(0, 0)` is the center cell of the grid
- Negative X values are to the left of center
- Positive X values are to the right of center
- Negative Y values are above center
- Positive Y values are below center

When the mouse is outside the grid bounds, both `x` and `y` are set to
`Number.NEGATIVE_INFINITY` to indicate an invalid/outside position.
