---
layout: doc
editLink: false
title: projectClientToGrid
description: Project CSS viewport/client coordinates into a textmode grid.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-08-22
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / projectClientToGrid

# Method: projectClientToGrid()

```ts
projectClientToGrid(
   clientX, 
   clientY, 
   target?): GridPosition;
```

Project CSS viewport/client coordinates into a textmode grid.

When `target` is omitted, the topmost visible layer grid is used, falling back to the base grid.
Coordinates outside an initialized grid are returned as `Number.NEGATIVE_INFINITY` on both axes.
This is grid projection, not transformed visual hit-testing.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `clientX` | `number` | Horizontal CSS client coordinate. |
| `clientY` | `number` | Vertical CSS client coordinate. |
| `target?` | [`TextmodeGrid`](../../TextmodeGrid.md) | Optional grid to project onto. |

## Returns

[`GridPosition`](../../../interfaces/GridPosition.md)

Center-based grid coordinates.

## Example

```ts
const cell = t.projectClientToGrid(event.clientX, event.clientY);
```

