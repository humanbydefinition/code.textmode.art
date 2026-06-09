---
layout: doc
editLink: true
title: MouseEventData
description: Mouse event payload passed to input callbacks.
category: Interfaces
api: true
namespace: input.mouse
kind: Interface
lastModified: 2026-06-09
isInterface: true
---

[textmode.js](../../../../../index.md) / [input](../../../index.md) / [mouse](../index.md) / MouseEventData

# Interface: MouseEventData

Mouse event payload passed to input callbacks.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-button"></a> `button?` | `number` | Mouse button that triggered the event *(for click events)*. |
| <a id="property-delta"></a> `delta?` | `object` | Scroll delta for wheel events. |
| `delta.x` | `number` | Scroll delta in X direction. |
| `delta.y` | `number` | Scroll delta in Y direction. |
| <a id="property-originalevent"></a> `originalEvent` | `MouseEvent` \| `WheelEvent` | Original DOM event. |
| <a id="property-position"></a> `position` | [`MousePosition`](../type-aliases/MousePosition.md) | Current mouse position in grid coordinates. |
| <a id="property-previousposition"></a> `previousPosition` | [`MousePosition`](../type-aliases/MousePosition.md) | Previous mouse position in grid coordinates. |
