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

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="x"></a> `x` | `number` | Grid X coordinate (column) in center-based coords. `Number.NEGATIVE_INFINITY` if outside grid. |
| <a id="y"></a> `y` | `number` | Grid Y coordinate (row) in center-based coords. `Number.NEGATIVE_INFINITY` if outside grid. |
