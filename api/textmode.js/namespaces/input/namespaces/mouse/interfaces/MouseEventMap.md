---
layout: doc
editLink: true
title: MouseEventMap
description: Event map for all mouse events emitted by the mouse input manager.
category: Interfaces
api: true
namespace: input.mouse
kind: Interface
lastModified: 2026-05-14
isInterface: true
---

[textmode.js](../../../../../index.md) / [input](../../../index.md) / [mouse](../index.md) / MouseEventMap

# Interface: MouseEventMap

Event map for all mouse events emitted by the mouse input manager.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-doubleclicked"></a> `doubleClicked` | [`MouseEventHandler`](../type-aliases/MouseEventHandler.md) | Fires when the mouse is double-clicked. |
| <a id="property-mouseclicked"></a> `mouseClicked` | [`MouseEventHandler`](../type-aliases/MouseEventHandler.md) | Fires when the mouse button is clicked (full press + release). |
| <a id="property-mousedragged"></a> `mouseDragged` | [`MouseEventHandler`](../type-aliases/MouseEventHandler.md) | Fires when the mouse moves while a button is held down. |
| <a id="property-mousemoved"></a> `mouseMoved` | [`MouseEventHandler`](../type-aliases/MouseEventHandler.md) | Fires when the mouse moves over the canvas. |
| <a id="property-mousepressed"></a> `mousePressed` | [`MouseEventHandler`](../type-aliases/MouseEventHandler.md) | Fires when a mouse button is pressed down. |
| <a id="property-mousereleased"></a> `mouseReleased` | [`MouseEventHandler`](../type-aliases/MouseEventHandler.md) | Fires when a mouse button is released. |
| <a id="property-mousescrolled"></a> `mouseScrolled` | [`MouseEventHandler`](../type-aliases/MouseEventHandler.md) | Fires when the mouse wheel is scrolled. |
