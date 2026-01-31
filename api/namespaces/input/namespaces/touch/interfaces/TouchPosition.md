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

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="clientx"></a> `clientX` | `number` | Client X coordinate in CSS pixels | - |
| <a id="clienty"></a> `clientY` | `number` | Client Y coordinate in CSS pixels | - |
| <a id="id"></a> `id` | `number` | Identifier provided by the browser for a touch point | - |
| <a id="pressure"></a> `pressure?` | `number` | Touch pressure (0-1) when supported | - |
| <a id="radiusx"></a> `radiusX?` | `number` | Contact ellipse radius on the X axis in CSS pixels | - |
| <a id="radiusy"></a> `radiusY?` | `number` | Contact ellipse radius on the Y axis in CSS pixels | - |
| <a id="rotationangle"></a> `rotationAngle?` | `number` | Contact ellipse angle in radians when provided | - |
| <a id="x"></a> `x` | `number` | The X coordinate (column), often relative to the grid's center. | `GridPosition.x` |
| <a id="y"></a> `y` | `number` | The Y coordinate (row), often relative to the grid's center. | `GridPosition.y` |
