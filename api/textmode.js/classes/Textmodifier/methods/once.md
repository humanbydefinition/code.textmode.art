---
layout: doc
editLink: true
title: once
description: Register an input event listener that removes itself after the first invocation.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / once

# Method: once()

```ts
once<K>(event, handler): () => void;
```

Register an input event listener that removes itself after the first invocation.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `K` *extends* \| keyof KeyboardEventMap \| keyof MouseEventMap \| keyof TouchEventMap \| keyof GamepadEventMap | Event name from the [InputEventMap](../../../namespaces/input/type-aliases/InputEventMap.md). |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `K` | The event to listen for. |
| `handler` | [`InputEventMap`](../../../namespaces/input/type-aliases/InputEventMap.md)\[`K`\] | The callback to invoke once. |

## Returns

A dispose function that removes the listener before it fires (if needed).

() => `void`

## Example

```ts
t.once('keyPressed', (data) => {
  console.log('First key press was:', data.key);
});
```
