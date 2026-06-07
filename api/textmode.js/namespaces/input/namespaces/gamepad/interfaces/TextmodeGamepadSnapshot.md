---
layout: doc
editLink: true
title: TextmodeGamepadSnapshot
description: Immutable frame snapshot for a connected gamepad.
category: Interfaces
api: true
namespace: input.gamepad
kind: Interface
lastModified: 2026-06-07
isInterface: true
---

[textmode.js](../../../../../index.md) / [input](../../../index.md) / [gamepad](../index.md) / TextmodeGamepadSnapshot

# Interface: TextmodeGamepadSnapshot

Immutable frame snapshot for a connected gamepad.

## Properties

| Property | Description |
| ------ | ------ |
| [axes](TextmodeGamepadSnapshot/properties/axes.md) | Raw axis values in browser order. |
| [buttons](TextmodeGamepadSnapshot/properties/buttons.md) | Raw button states in browser order. |
| [connected](TextmodeGamepadSnapshot/properties/connected.md) | Whether the controller is currently connected. |
| [id](TextmodeGamepadSnapshot/properties/id.md) | Browser-reported identifier string. |
| [index](TextmodeGamepadSnapshot/properties/index.md) | Browser-assigned gamepad slot index. |
| [mapping](TextmodeGamepadSnapshot/properties/mapping.md) | Recognized browser mapping type used by textmode.js. |
| [standard](TextmodeGamepadSnapshot/properties/standard.md) | Optional semantic helpers for standard-mapped controllers. |
| [timestamp](TextmodeGamepadSnapshot/properties/timestamp.md) | Browser-provided timestamp for the current state sample. |
