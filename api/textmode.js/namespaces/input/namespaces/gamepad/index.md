---
layout: doc
editLink: true
title: gamepad
description: Types and interfaces for gamepad event handling
category: Namespaces
api: true
namespace: input
kind: Namespace
lastModified: 2026-04-19
---

[textmode.js](../../../../index.md) / [input](../../index.md) / gamepad

# gamepad

Types and interfaces for gamepad event handling

## Interfaces

| Interface | Description |
| ------ | ------ |
| [GamepadAxisEventData](interfaces/GamepadAxisEventData.md) | Axis change payload emitted when an axis crosses configured thresholds. |
| [GamepadButtonEventData](interfaces/GamepadButtonEventData.md) | Button edge payload emitted when a button crosses configured thresholds. |
| [GamepadConnectionEventData](interfaces/GamepadConnectionEventData.md) | Connection lifecycle payload emitted by the gamepad manager. |
| [GamepadEventMap](interfaces/GamepadEventMap.md) | Event map for all gamepad events emitted by the GamepadInput. |
| [TextmodeGamepadButtonSnapshot](interfaces/TextmodeGamepadButtonSnapshot.md) | Immutable snapshot of a single gamepad button for the current frame. |
| [TextmodeGamepadSnapshot](interfaces/TextmodeGamepadSnapshot.md) | Immutable frame snapshot for a connected gamepad. |
| [TextmodeGamepadStickSnapshot](interfaces/TextmodeGamepadStickSnapshot.md) | Normalized two-axis stick state for standard-mapped controllers. |
| [TextmodeStandardGamepadSnapshot](interfaces/TextmodeStandardGamepadSnapshot.md) | Semantic helpers derived from the browser's standard gamepad mapping. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [GamepadAxisEventHandler](type-aliases/GamepadAxisEventHandler.md) | Gamepad axis event handler. |
| [GamepadButtonEventHandler](type-aliases/GamepadButtonEventHandler.md) | Gamepad button event handler. |
| [GamepadConnectionEventHandler](type-aliases/GamepadConnectionEventHandler.md) | Gamepad connection event handler. |
| [TextmodeStandardAxisName](type-aliases/TextmodeStandardAxisName.md) | Semantic axis names exposed for standard-mapped controllers. |
| [TextmodeStandardButtonName](type-aliases/TextmodeStandardButtonName.md) | Semantic button names exposed for standard-mapped controllers. |
