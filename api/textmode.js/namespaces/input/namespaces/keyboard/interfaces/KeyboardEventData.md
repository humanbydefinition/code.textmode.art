---
layout: doc
editLink: true
title: KeyboardEventData
description: Keyboard event payload passed to input callbacks.
category: Interfaces
api: true
namespace: input.keyboard
kind: Interface
lastModified: 2026-06-09
isInterface: true
---

[textmode.js](../../../../../index.md) / [input](../../../index.md) / [keyboard](../index.md) / KeyboardEventData

# Interface: KeyboardEventData

Keyboard event payload passed to input callbacks.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-altkey"></a> `altKey` | `boolean` | Whether Alt key is held down. |
| <a id="property-ctrlkey"></a> `ctrlKey` | `boolean` | Whether Ctrl key is held down. |
| <a id="property-ispressed"></a> `isPressed` | `boolean` | Whether this key is currently held down for this event. |
| <a id="property-key"></a> `key` | `string` | The key that was pressed/released (e.g., 'a', 'Enter', 'ArrowLeft'). |
| <a id="property-keycode"></a> `keyCode` | `number` | The key code (for compatibility). |
| <a id="property-metakey"></a> `metaKey` | `boolean` | Whether Meta key (Windows/Cmd) is held down. |
| <a id="property-originalevent"></a> `originalEvent` | `KeyboardEvent` | Original DOM keyboard event. |
| <a id="property-shiftkey"></a> `shiftKey` | `boolean` | Whether Shift key is held down. |
