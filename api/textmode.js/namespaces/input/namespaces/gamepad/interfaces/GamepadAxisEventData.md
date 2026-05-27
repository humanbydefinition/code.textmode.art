---
layout: doc
editLink: true
title: GamepadAxisEventData
description: Axis change payload emitted when an axis crosses configured thresholds.
category: Interfaces
api: true
namespace: input.gamepad
kind: Interface
lastModified: 2026-05-27
isInterface: true
---

[textmode.js](../../../../../index.md) / [input](../../../index.md) / [gamepad](../index.md) / GamepadAxisEventData

# Interface: GamepadAxisEventData

Axis change payload emitted when an axis crosses configured thresholds.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-axisindex"></a> `axisIndex` | `number` | Axis index in the raw `axes` array. |
| <a id="property-delta"></a> `delta` | `number` | Difference between current and previous values. |
| <a id="property-gamepad"></a> `gamepad` | [`TextmodeGamepadSnapshot`](TextmodeGamepadSnapshot.md) | The gamepad whose axis changed state. |
| <a id="property-previousvalue"></a> `previousValue` | `number` | Previous-frame axis value. |
| <a id="property-standardaxisname"></a> `standardAxisName?` | [`TextmodeStandardAxisName`](../type-aliases/TextmodeStandardAxisName.md) | Semantic axis alias for standard-mapped controllers. |
| <a id="property-value"></a> `value` | `number` | Current axis value. |
