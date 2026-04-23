---
layout: doc
editLink: true
title: TextmodeGamepadSnapshot
description: Immutable frame snapshot for a connected gamepad.
category: Interfaces
api: true
namespace: input.gamepad
kind: Interface
lastModified: 2026-04-23
isInterface: true
---

[textmode.js](../../../../../index.md) / [input](../../../index.md) / [gamepad](../index.md) / TextmodeGamepadSnapshot

# Interface: TextmodeGamepadSnapshot

Immutable frame snapshot for a connected gamepad.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="axes"></a> `axes` | readonly `number`[] | Raw axis values in browser order. |
| <a id="buttons"></a> `buttons` | readonly [`TextmodeGamepadButtonSnapshot`](TextmodeGamepadButtonSnapshot.md)[] | Raw button states in browser order. |
| <a id="connected"></a> `connected` | `boolean` | Whether the controller is currently connected. |
| <a id="id"></a> `id` | `string` | Browser-reported identifier string. |
| <a id="index"></a> `index` | `number` | Browser-assigned gamepad slot index. |
| <a id="mapping"></a> `mapping` | `""` \| `"standard"` | Recognized browser mapping type used by textmode.js. |
| <a id="standard"></a> `standard?` | [`TextmodeStandardGamepadSnapshot`](TextmodeStandardGamepadSnapshot.md) | Optional semantic helpers for standard-mapped controllers. |
| <a id="timestamp"></a> `timestamp` | `number` | Browser-provided timestamp for the current state sample. |
