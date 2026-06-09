---
layout: doc
editLink: true
title: KeyboardEventMap
description: Keyboard events emitted by the keyboard input manager.
category: Interfaces
api: true
namespace: input.keyboard
kind: Interface
lastModified: 2026-06-09
isInterface: true
---

[textmode.js](../../../../../index.md) / [input](../../../index.md) / [keyboard](../index.md) / KeyboardEventMap

# Interface: KeyboardEventMap

Keyboard events emitted by the keyboard input manager.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-keypressed"></a> `keyPressed` | [`KeyboardEventHandler`](../type-aliases/KeyboardEventHandler.md) | Fires when a key is pressed down (no repeat). |
| <a id="property-keyreleased"></a> `keyReleased` | [`KeyboardEventHandler`](../type-aliases/KeyboardEventHandler.md) | Fires when a key is released. |
| <a id="property-keytyped"></a> `keyTyped` | [`KeyboardEventHandler`](../type-aliases/KeyboardEventHandler.md) | Fires when a printable character is typed. |
