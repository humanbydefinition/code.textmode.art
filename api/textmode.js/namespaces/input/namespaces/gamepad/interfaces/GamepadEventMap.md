---
layout: doc
editLink: true
title: GamepadEventMap
description: Gamepad events emitted by the gamepad input manager.
category: Interfaces
api: true
namespace: input.gamepad
kind: Interface
lastModified: 2026-06-07
isInterface: true
---

[textmode.js](../../../../../index.md) / [input](../../../index.md) / [gamepad](../index.md) / GamepadEventMap

# Interface: GamepadEventMap

Gamepad events emitted by the gamepad input manager.

## Properties

| Property | Description |
| ------ | ------ |
| [gamepadAxisChanged](GamepadEventMap/properties/gamepadAxisChanged.md) | Fires when an axis value changes beyond the configured epsilon or crosses the deadzone boundary. |
| [gamepadButtonPressed](GamepadEventMap/properties/gamepadButtonPressed.md) | Fires when a button's value crosses above the press threshold. |
| [gamepadButtonReleased](GamepadEventMap/properties/gamepadButtonReleased.md) | Fires when a button's value crosses below the release threshold. |
| [gamepadConnected](GamepadEventMap/properties/gamepadConnected.md) | Fires when a gamepad appears in the current frame snapshot. |
| [gamepadDisconnected](GamepadEventMap/properties/gamepadDisconnected.md) | Fires when a previously seen gamepad disappears from the current frame snapshot. |
