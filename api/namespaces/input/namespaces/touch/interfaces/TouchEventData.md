[textmode.js](../../../../../index.md) / [input](../../../index.md) / [touch](../index.md) / TouchEventData

# Interface: TouchEventData

Touch event data.

The coordinate system uses center-based coordinates matching the main rendering space:
- `(0, 0)` is the center cell of the grid
- Coordinates can be used directly with `translate()` and other drawing functions

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="changedtouches"></a> `changedTouches` | [`TouchPosition`](TouchPosition.md)[] | Touches that changed during this event |
| <a id="deltatime"></a> `deltaTime` | `number` | Milliseconds elapsed since the previous update for this touch |
| <a id="originalevent"></a> `originalEvent` | `TouchEvent` | Original browser event |
| <a id="previoustouch"></a> `previousTouch?` | [`TouchPosition`](TouchPosition.md) | The previous position for this touch if available |
| <a id="previoustouches"></a> `previousTouches` | [`TouchPosition`](TouchPosition.md)[] | Active touches snapshot before this event |
| <a id="touch"></a> `touch` | [`TouchPosition`](TouchPosition.md) | The touch point that triggered this event |
| <a id="touches"></a> `touches` | [`TouchPosition`](TouchPosition.md)[] | All active touches mapped to grid coordinates |
