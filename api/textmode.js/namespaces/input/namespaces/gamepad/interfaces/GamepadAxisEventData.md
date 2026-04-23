---
layout: doc
editLink: true
title: GamepadAxisEventData
description: Axis change payload emitted when an axis crosses configured thresholds.
category: Interfaces
api: true
namespace: input.gamepad
kind: Interface
lastModified: 2026-04-19
isInterface: true
---

[textmode.js](../../../../../index.md) / [input](../../../index.md) / [gamepad](../index.md) / GamepadAxisEventData

# Interface: GamepadAxisEventData

Axis change payload emitted when an axis crosses configured thresholds.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="axisindex"></a> `axisIndex` | `number` | Axis index in the raw `axes` array. |
| <a id="delta"></a> `delta` | `number` | Difference between current and previous values. |
| <a id="gamepad"></a> `gamepad` | [`TextmodeGamepadSnapshot`](TextmodeGamepadSnapshot.md) | The gamepad whose axis changed state. |
| <a id="previousvalue"></a> `previousValue` | `number` | Previous-frame axis value. |
| <a id="standardaxisname"></a> `standardAxisName?` | [`TextmodeStandardAxisName`](../type-aliases/TextmodeStandardAxisName.md) | Semantic axis alias for standard-mapped controllers. |
| <a id="value"></a> `value` | `number` | Current axis value. |
