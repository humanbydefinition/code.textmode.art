---
layout: doc
editLink: true
title: TouchEventData
description: Touch event data.
category: Interfaces
api: true
namespace: input.touch
kind: Interface
lastModified: 2026-05-15
isInterface: true
---

[textmode.js](../../../../../index.md) / [input](../../../index.md) / [touch](../index.md) / TouchEventData

# Interface: TouchEventData

Touch event data.

The coordinate system uses center-based coordinates matching the main rendering space:
- `(0, 0)` is the center cell of the grid
- Coordinates can be used directly with `translate()` and other drawing functions

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-changedtouches"></a> `changedTouches` | [`TouchPosition`](TouchPosition.md)[] | Touches that changed during this event. |
| <a id="property-deltatime"></a> `deltaTime` | `number` | Milliseconds elapsed since the previous update for this touch. |
| <a id="property-originalevent"></a> `originalEvent` | `TouchEvent` | Original browser event. |
| <a id="property-previoustouch"></a> `previousTouch?` | [`TouchPosition`](TouchPosition.md) | The previous position for this touch if available. |
| <a id="property-previoustouches"></a> `previousTouches` | [`TouchPosition`](TouchPosition.md)[] | Active touches snapshot before this event. |
| <a id="property-touch"></a> `touch` | [`TouchPosition`](TouchPosition.md) | The touch point that triggered this event. |
| <a id="property-touches"></a> `touches` | [`TouchPosition`](TouchPosition.md)[] | All active touches mapped to grid coordinates. |
