---
layout: doc
editLink: true
title: MousePosition
description: Mouse coordinates in grid space using center-based coordinates.
category: Interfaces
api: true
namespace: input.mouse
kind: Interface
lastModified: 2026-02-06
isInterface: true
---

[textmode.js](../../../../../index.md) / [input](../../../index.md) / [mouse](../index.md) / MousePosition

# Interface: MousePosition

Mouse coordinates in grid space using center-based coordinates.

The coordinate system matches the main drawing/rendering space:
- `(0, 0)` is the center cell of the grid
- Negative X values are to the left of center
- Positive X values are to the right of center
- Negative Y values are above center
- Positive Y values are below center

When the mouse is outside the grid bounds, both `x` and `y` are set to
`Number.NEGATIVE_INFINITY` to indicate an invalid/outside position.

## Extends

- `GridPosition`

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="x"></a> `x` | `number` | The X coordinate (column), often relative to the grid's center. | `GridPosition.x` |
| <a id="y"></a> `y` | `number` | The Y coordinate (row), often relative to the grid's center. | `GridPosition.y` |
