---
layout: doc
editLink: true
title: on
description: Register an input event listener.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-09
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / on

# Method: on()

```ts
on<K>(event, handler): () => void;
```

Register an input event listener.

Multiple listeners can coexist on the same event;
unlike the legacy single-callback methods (e.g. `mousePressed()`), calling `on()`
never replaces existing listeners.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `K` *extends* \| keyof KeyboardEventMap \| keyof MouseEventMap \| keyof TouchEventMap \| keyof GamepadEventMap | Event name from the [InputEventMap](../../../namespaces/input/type-aliases/InputEventMap.md). |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `K` | The event to listen for (e.g. `'mousePressed'`, `'keyReleased'`, `'gamepadConnected'`, `'pinch'`). |
| `handler` | [`InputEventMap`](../../../namespaces/input/type-aliases/InputEventMap.md)\[`K`\] | The callback to invoke when the event fires. |

## Returns

A dispose function that removes this specific listener.

() => `void`

## Example

```ts
// Add a click listener
const dispose = t.on('mouseClicked', (data) => {
  console.log('Clicked at', data.position.x, data.position.y);
});

// Later, remove it
dispose();
```
