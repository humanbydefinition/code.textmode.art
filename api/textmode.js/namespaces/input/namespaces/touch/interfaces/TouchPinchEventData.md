---
layout: doc
editLink: true
title: TouchPinchEventData
description: Pinch gesture event data describing the scaling factor between the initial and current distance.
category: Interfaces
api: true
namespace: input.touch
kind: Interface
lastModified: 2026-05-27
isInterface: true
---

[textmode.js](../../../../../index.md) / [input](../../../index.md) / [touch](../index.md) / TouchPinchEventData

# Interface: TouchPinchEventData

Pinch gesture event data describing the scaling factor between the initial and current distance.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-center"></a> `center` | `object` | Centre of the gesture in grid coordinates. |
| `center.x` | `number` | Grid X coordinate *(column)*. |
| `center.y` | `number` | Grid Y coordinate *(row)*. |
| <a id="property-deltascale"></a> `deltaScale` | `number` | Scale delta compared to the previous callback. |
| <a id="property-originalevent"></a> `originalEvent` | `TouchEvent` | Original browser event. |
| <a id="property-scale"></a> `scale` | `number` | Scale factor relative to the initial distance *(1 == unchanged)*. |
| <a id="property-touches"></a> `touches` | \[[`TouchPosition`](TouchPosition.md), [`TouchPosition`](TouchPosition.md)\] | Touch points participating in the pinch, always two entries. |
