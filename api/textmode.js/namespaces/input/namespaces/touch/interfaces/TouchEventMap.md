---
layout: doc
editLink: true
title: TouchEventMap
description: Event map for all touch events emitted by the TouchInput.
category: Interfaces
api: true
namespace: input.touch
kind: Interface
lastModified: 2026-04-19
isInterface: true
---

[textmode.js](../../../../../index.md) / [input](../../../index.md) / [touch](../index.md) / TouchEventMap

# Interface: TouchEventMap

Event map for all touch events emitted by the TouchInput.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="doubletap"></a> `doubleTap` | [`TouchTapHandler`](../type-aliases/TouchTapHandler.md) | Fires on a double tap gesture. |
| <a id="longpress"></a> `longPress` | [`TouchLongPressHandler`](../type-aliases/TouchLongPressHandler.md) | Fires on a long press gesture. |
| <a id="pinch"></a> `pinch` | [`TouchPinchHandler`](../type-aliases/TouchPinchHandler.md) | Fires on a pinch gesture update. |
| <a id="rotategesture"></a> `rotateGesture` | [`TouchRotateHandler`](../type-aliases/TouchRotateHandler.md) | Fires on a rotation gesture update. |
| <a id="swipe"></a> `swipe` | [`TouchSwipeHandler`](../type-aliases/TouchSwipeHandler.md) | Fires on a swipe gesture. |
| <a id="tap"></a> `tap` | [`TouchTapHandler`](../type-aliases/TouchTapHandler.md) | Fires on a single tap gesture. |
| <a id="touchcancelled"></a> `touchCancelled` | [`TouchEventHandler`](../type-aliases/TouchEventHandler.md) | Fires when the browser cancels a touch. |
| <a id="touchended"></a> `touchEnded` | [`TouchEventHandler`](../type-aliases/TouchEventHandler.md) | Fires when a touch point is lifted from the canvas. |
| <a id="touchmoved"></a> `touchMoved` | [`TouchEventHandler`](../type-aliases/TouchEventHandler.md) | Fires when a touch point moves across the canvas. |
| <a id="touchstarted"></a> `touchStarted` | [`TouchEventHandler`](../type-aliases/TouchEventHandler.md) | Fires when a touch point begins on the canvas. |
