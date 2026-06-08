---
layout: doc
editLink: true
title: TouchEventData
description: Touch event payload passed to input callbacks.
category: Interfaces
api: true
namespace: input.touch
kind: Interface
lastModified: 2026-06-08
isInterface: true
---

[textmode.js](../../../../../index.md) / [input](../../../index.md) / [touch](../index.md) / TouchEventData

# Interface: TouchEventData

Touch event payload passed to input callbacks.

The coordinate system uses center-based coordinates matching the main rendering space:
- `(0, 0)` is the center cell of the grid
- Coordinates can be used directly with `translate()` and other drawing functions

## Properties

| Property | Description |
| ------ | ------ |
| [changedTouches](TouchEventData/properties/changedTouches.md) | Touches that changed during this event. |
| [deltaTime](TouchEventData/properties/deltaTime.md) | Milliseconds elapsed since the previous update for this touch. |
| [originalEvent](TouchEventData/properties/originalEvent.md) | Original browser event. |
| [previousTouch](TouchEventData/properties/previousTouch.md) | The previous position for this touch if available. |
| [previousTouches](TouchEventData/properties/previousTouches.md) | Active touches snapshot before this event. |
| [touch](TouchEventData/properties/touch.md) | The touch point that triggered this event. |
| [touches](TouchEventData/properties/touches.md) | All active touches mapped to grid coordinates. |
