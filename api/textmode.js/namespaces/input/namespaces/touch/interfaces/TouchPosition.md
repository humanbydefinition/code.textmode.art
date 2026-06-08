---
layout: doc
editLink: true
title: TouchPosition
description: Touch position expressed both in grid and client coordinates.
category: Interfaces
api: true
namespace: input.touch
kind: Interface
lastModified: 2026-06-08
isInterface: true
---

[textmode.js](../../../../../index.md) / [input](../../../index.md) / [touch](../index.md) / TouchPosition

# Interface: TouchPosition

Touch position expressed both in grid and client coordinates.

The grid coordinate system uses center-based coordinates matching the rendering space:
- `(0, 0)` is the center cell of the grid
- Negative X values are to the left of center
- Positive X values are to the right of center
- Negative Y values are above center
- Positive Y values are below center

When the touch is outside the grid bounds, `x` and `y` are set to
`Number.NEGATIVE_INFINITY` to indicate an invalid/outside position.

## Extends

- `GridPosition`

## Properties

| Property | Description |
| ------ | ------ |
| [clientX](TouchPosition/properties/clientX.md) | Client X coordinate in CSS pixels. |
| [clientY](TouchPosition/properties/clientY.md) | Client Y coordinate in CSS pixels. |
| [id](TouchPosition/properties/id.md) | Identifier provided by the browser for a touch point. |
| [pressure](TouchPosition/properties/pressure.md) | Touch pressure (0-1) when supported. |
| [radiusX](TouchPosition/properties/radiusX.md) | Contact ellipse radius on the X axis in CSS pixels. |
| [radiusY](TouchPosition/properties/radiusY.md) | Contact ellipse radius on the Y axis in CSS pixels. |
| [rotationAngle](TouchPosition/properties/rotationAngle.md) | Contact ellipse angle in degrees when provided. |
| [x](TouchPosition/properties/x.md) | The X coordinate (column), often relative to the grid's center. |
| [y](TouchPosition/properties/y.md) | The Y coordinate (row), often relative to the grid's center. |
