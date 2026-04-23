---
layout: doc
editLink: true
title: KeyboardEventMap
description: Event map for all keyboard events emitted by the KeyboardInput.
category: Interfaces
api: true
namespace: input.keyboard
kind: Interface
lastModified: 2026-04-19
isInterface: true
---

[textmode.js](../../../../../index.md) / [input](../../../index.md) / [keyboard](../index.md) / KeyboardEventMap

# Interface: KeyboardEventMap

Event map for all keyboard events emitted by the KeyboardInput.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="keypressed"></a> `keyPressed` | [`KeyboardEventHandler`](../type-aliases/KeyboardEventHandler.md) | Fires when a key is pressed down (no repeat). |
| <a id="keyreleased"></a> `keyReleased` | [`KeyboardEventHandler`](../type-aliases/KeyboardEventHandler.md) | Fires when a key is released. |
| <a id="keytyped"></a> `keyTyped` | [`KeyboardEventHandler`](../type-aliases/KeyboardEventHandler.md) | Fires when a printable character is typed. |
