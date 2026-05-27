---
layout: doc
editLink: true
title: touch
description: Types and interfaces for touch event handling
category: Namespaces
api: true
namespace: input
kind: Namespace
lastModified: 2026-05-27
---

[textmode.js](../../../../index.md) / [input](../../index.md) / touch

# touch

Types and interfaces for touch event handling

## Interfaces

| Interface | Description |
| ------ | ------ |
| [TouchEventData](interfaces/TouchEventData.md) | Touch event payload passed to input callbacks. |
| [TouchEventMap](interfaces/TouchEventMap.md) | Touch and gesture events emitted by the touch input manager. |
| [TouchLongPressEventData](interfaces/TouchLongPressEventData.md) | Long press event data. |
| [TouchPinchEventData](interfaces/TouchPinchEventData.md) | Pinch gesture event data describing the scaling factor between the initial and current distance. |
| [TouchPosition](interfaces/TouchPosition.md) | Touch position expressed both in grid and client coordinates. |
| [TouchRotateEventData](interfaces/TouchRotateEventData.md) | Rotate gesture event data describing the angle change between the initial and current segment. |
| [TouchSwipeEventData](interfaces/TouchSwipeEventData.md) | Swipe event data reported when the finger travels a minimum distance within a time window. |
| [TouchTapEventData](interfaces/TouchTapEventData.md) | Tap (single or double) event data. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [TouchEventHandler](type-aliases/TouchEventHandler.md) | Touch event callback signature. |
| [TouchLongPressHandler](type-aliases/TouchLongPressHandler.md) | Long-press event callback signature. |
| [TouchPinchHandler](type-aliases/TouchPinchHandler.md) | Pinch event callback signature. |
| [TouchRotateHandler](type-aliases/TouchRotateHandler.md) | Rotate-gesture event callback signature. |
| [TouchSwipeHandler](type-aliases/TouchSwipeHandler.md) | Swipe event callback signature. |
| [TouchTapHandler](type-aliases/TouchTapHandler.md) | Tap event callback signature. |

## Variables

| Variable | Description |
| ------ | ------ |
| [GESTURE\_EVENT\_NAMES](variables/GESTURE_EVENT_NAMES.md) | Touch gesture event names supported by the shared input event API. |
| [TOUCH\_EVENT\_NAMES](variables/TOUCH_EVENT_NAMES.md) | Touch lifecycle event names supported by the shared input event API. |
