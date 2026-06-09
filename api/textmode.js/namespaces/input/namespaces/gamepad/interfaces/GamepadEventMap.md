---
layout: doc
editLink: true
title: GamepadEventMap
description: Gamepad events emitted by the gamepad input manager.
category: Interfaces
api: true
namespace: input.gamepad
kind: Interface
lastModified: 2026-06-09
isInterface: true
---

[textmode.js](../../../../../index.md) / [input](../../../index.md) / [gamepad](../index.md) / GamepadEventMap

# Interface: GamepadEventMap

Gamepad events emitted by the gamepad input manager.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-gamepadaxischanged"></a> `gamepadAxisChanged` | [`GamepadAxisEventHandler`](../type-aliases/GamepadAxisEventHandler.md) | Fires when an axis value changes beyond the configured epsilon or crosses the deadzone boundary. |
| <a id="property-gamepadbuttonpressed"></a> `gamepadButtonPressed` | [`GamepadButtonEventHandler`](../type-aliases/GamepadButtonEventHandler.md) | Fires when a button's value crosses above the press threshold. |
| <a id="property-gamepadbuttonreleased"></a> `gamepadButtonReleased` | [`GamepadButtonEventHandler`](../type-aliases/GamepadButtonEventHandler.md) | Fires when a button's value crosses below the release threshold. |
| <a id="property-gamepadconnected"></a> `gamepadConnected` | [`GamepadConnectionEventHandler`](../type-aliases/GamepadConnectionEventHandler.md) | Fires when a gamepad appears in the current frame snapshot. |
| <a id="property-gamepaddisconnected"></a> `gamepadDisconnected` | [`GamepadConnectionEventHandler`](../type-aliases/GamepadConnectionEventHandler.md) | Fires when a previously seen gamepad disappears from the current frame snapshot. |
