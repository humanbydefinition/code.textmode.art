---
layout: doc
editLink: true
title: InputEventMap
description: Union of every input event emitted by the library.
category: Type Aliases
api: true
namespace: input
kind: TypeAlias
lastModified: 2026-04-19
---

[textmode.js](../../../index.md) / [input](../index.md) / InputEventMap

# Type Alias: InputEventMap

```ts
type InputEventMap = KeyboardEventMap & MouseEventMap & TouchEventMap & GamepadEventMap;
```

Union of every input event emitted by the library.

This map is the single source of truth for the `on()` / `off()` / `once()` API,
combining keyboard, mouse, touch, gesture, and gamepad events into one flat namespace.
