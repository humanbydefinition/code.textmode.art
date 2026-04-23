---
layout: doc
editLink: true
title: GamepadEventMap
description: Event map for all gamepad events emitted by the GamepadInput.
category: Interfaces
api: true
namespace: input.gamepad
kind: Interface
lastModified: 2026-04-19
isInterface: true
---

[textmode.js](../../../../../index.md) / [input](../../../index.md) / [gamepad](../index.md) / GamepadEventMap

# Interface: GamepadEventMap

Event map for all gamepad events emitted by the GamepadInput.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="gamepadaxischanged"></a> `gamepadAxisChanged` | [`GamepadAxisEventHandler`](../type-aliases/GamepadAxisEventHandler.md) | Fires when an axis value changes beyond the configured epsilon or crosses the deadzone boundary. |
| <a id="gamepadbuttonpressed"></a> `gamepadButtonPressed` | [`GamepadButtonEventHandler`](../type-aliases/GamepadButtonEventHandler.md) | Fires when a button's value crosses above the press threshold. |
| <a id="gamepadbuttonreleased"></a> `gamepadButtonReleased` | [`GamepadButtonEventHandler`](../type-aliases/GamepadButtonEventHandler.md) | Fires when a button's value crosses below the release threshold. |
| <a id="gamepadconnected"></a> `gamepadConnected` | [`GamepadConnectionEventHandler`](../type-aliases/GamepadConnectionEventHandler.md) | Fires when a gamepad appears in the current frame snapshot. |
| <a id="gamepaddisconnected"></a> `gamepadDisconnected` | [`GamepadConnectionEventHandler`](../type-aliases/GamepadConnectionEventHandler.md) | Fires when a previously seen gamepad disappears from the current frame snapshot. |
