---
layout: doc
editLink: true
title: TextmodeStandardGamepadSnapshot
description: Semantic helpers derived from the browser's standard gamepad mapping.
category: Interfaces
api: true
namespace: input.gamepad
kind: Interface
lastModified: 2026-04-23
isInterface: true
---

[textmode.js](../../../../../index.md) / [input](../../../index.md) / [gamepad](../index.md) / TextmodeStandardGamepadSnapshot

# Interface: TextmodeStandardGamepadSnapshot

Semantic helpers derived from the browser's standard gamepad mapping.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="center"></a> `center` | `object` | Center and stick-press buttons. |
| `center.home?` | [`TextmodeGamepadButtonSnapshot`](TextmodeGamepadButtonSnapshot.md) | - |
| `center.leftStickPress` | [`TextmodeGamepadButtonSnapshot`](TextmodeGamepadButtonSnapshot.md) | - |
| `center.rightStickPress` | [`TextmodeGamepadButtonSnapshot`](TextmodeGamepadButtonSnapshot.md) | - |
| `center.select` | [`TextmodeGamepadButtonSnapshot`](TextmodeGamepadButtonSnapshot.md) | - |
| `center.start` | [`TextmodeGamepadButtonSnapshot`](TextmodeGamepadButtonSnapshot.md) | - |
| <a id="dpad"></a> `dpad` | `object` | Directional pad buttons. |
| `dpad.down` | [`TextmodeGamepadButtonSnapshot`](TextmodeGamepadButtonSnapshot.md) | - |
| `dpad.left` | [`TextmodeGamepadButtonSnapshot`](TextmodeGamepadButtonSnapshot.md) | - |
| `dpad.right` | [`TextmodeGamepadButtonSnapshot`](TextmodeGamepadButtonSnapshot.md) | - |
| `dpad.up` | [`TextmodeGamepadButtonSnapshot`](TextmodeGamepadButtonSnapshot.md) | - |
| <a id="facebuttons"></a> `faceButtons` | `object` | Face button cluster. |
| `faceButtons.east` | [`TextmodeGamepadButtonSnapshot`](TextmodeGamepadButtonSnapshot.md) | - |
| `faceButtons.north` | [`TextmodeGamepadButtonSnapshot`](TextmodeGamepadButtonSnapshot.md) | - |
| `faceButtons.south` | [`TextmodeGamepadButtonSnapshot`](TextmodeGamepadButtonSnapshot.md) | - |
| `faceButtons.west` | [`TextmodeGamepadButtonSnapshot`](TextmodeGamepadButtonSnapshot.md) | - |
| <a id="leftstick"></a> `leftStick` | [`TextmodeGamepadStickSnapshot`](TextmodeGamepadStickSnapshot.md) | Left analog stick helper. |
| <a id="rightstick"></a> `rightStick` | [`TextmodeGamepadStickSnapshot`](TextmodeGamepadStickSnapshot.md) | Right analog stick helper. |
| <a id="shoulders"></a> `shoulders` | `object` | Shoulder and trigger buttons. |
| `shoulders.l1` | [`TextmodeGamepadButtonSnapshot`](TextmodeGamepadButtonSnapshot.md) | - |
| `shoulders.l2` | [`TextmodeGamepadButtonSnapshot`](TextmodeGamepadButtonSnapshot.md) | - |
| `shoulders.r1` | [`TextmodeGamepadButtonSnapshot`](TextmodeGamepadButtonSnapshot.md) | - |
| `shoulders.r2` | [`TextmodeGamepadButtonSnapshot`](TextmodeGamepadButtonSnapshot.md) | - |
