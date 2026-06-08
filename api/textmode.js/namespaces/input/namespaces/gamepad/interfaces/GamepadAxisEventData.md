---
layout: doc
editLink: true
title: GamepadAxisEventData
description: Axis change payload emitted when an axis crosses configured thresholds.
category: Interfaces
api: true
namespace: input.gamepad
kind: Interface
lastModified: 2026-06-08
isInterface: true
---

[textmode.js](../../../../../index.md) / [input](../../../index.md) / [gamepad](../index.md) / GamepadAxisEventData

# Interface: GamepadAxisEventData

Axis change payload emitted when an axis crosses configured thresholds.

## Properties

| Property | Description |
| ------ | ------ |
| [axisIndex](GamepadAxisEventData/properties/axisIndex.md) | Axis index in the raw `axes` array. |
| [delta](GamepadAxisEventData/properties/delta.md) | Difference between current and previous values. |
| [gamepad](GamepadAxisEventData/properties/gamepad.md) | The gamepad whose axis changed state. |
| [previousValue](GamepadAxisEventData/properties/previousValue.md) | Previous-frame axis value. |
| [standardAxisName](GamepadAxisEventData/properties/standardAxisName.md) | Semantic axis alias for standard-mapped controllers. |
| [value](GamepadAxisEventData/properties/value.md) | Current axis value. |
