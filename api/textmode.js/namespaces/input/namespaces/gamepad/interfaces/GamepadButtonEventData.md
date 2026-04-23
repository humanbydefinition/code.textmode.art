---
layout: doc
editLink: true
title: GamepadButtonEventData
description: Button edge payload emitted when a button crosses configured thresholds.
category: Interfaces
api: true
namespace: input.gamepad
kind: Interface
lastModified: 2026-04-19
isInterface: true
---

[textmode.js](../../../../../index.md) / [input](../../../index.md) / [gamepad](../index.md) / GamepadButtonEventData

# Interface: GamepadButtonEventData

Button edge payload emitted when a button crosses configured thresholds.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="button"></a> `button` | [`TextmodeGamepadButtonSnapshot`](TextmodeGamepadButtonSnapshot.md) | Current button snapshot. |
| <a id="buttonindex"></a> `buttonIndex` | `number` | Button index in the raw `buttons` array. |
| <a id="gamepad"></a> `gamepad` | [`TextmodeGamepadSnapshot`](TextmodeGamepadSnapshot.md) | The gamepad whose button changed state. |
| <a id="previousbutton"></a> `previousButton` | [`TextmodeGamepadButtonSnapshot`](TextmodeGamepadButtonSnapshot.md) | Previous-frame button snapshot. |
| <a id="standardbuttonname"></a> `standardButtonName?` | [`TextmodeStandardButtonName`](../type-aliases/TextmodeStandardButtonName.md) | Semantic button alias for standard-mapped controllers. |
