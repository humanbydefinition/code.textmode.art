---
layout: doc
editLink: true
title: TextmodeGamepadButtonSnapshot
description: Immutable snapshot of a single gamepad button for the current frame.
category: Interfaces
api: true
namespace: input.gamepad
kind: Interface
lastModified: 2026-05-19
isInterface: true
---

[textmode.js](../../../../../index.md) / [input](../../../index.md) / [gamepad](../index.md) / TextmodeGamepadButtonSnapshot

# Interface: TextmodeGamepadButtonSnapshot

Immutable snapshot of a single gamepad button for the current frame.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-pressed"></a> `pressed` | `boolean` | Whether the browser currently reports this button as pressed. |
| <a id="property-touched"></a> `touched?` | `boolean` | Whether the button is being touched, when the browser exposes that data. |
| <a id="property-value"></a> `value` | `number` | Analog value in the range the browser reports, typically `0..1`. |
