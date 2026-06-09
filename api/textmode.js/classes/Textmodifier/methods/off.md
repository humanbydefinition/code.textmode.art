---
layout: doc
editLink: true
title: off
description: Remove a previously registered input event listener.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-09
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / off

# Method: off()

```ts
off<K>(event, handler): void;
```

Remove a previously registered input event listener.

The handler reference must be the same function instance that was passed to `on()` or `once()`.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `K` *extends* \| keyof KeyboardEventMap \| keyof MouseEventMap \| keyof TouchEventMap \| keyof GamepadEventMap | Event name from the [InputEventMap](../../../namespaces/input/type-aliases/InputEventMap.md). |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `K` | The event the handler was attached to. |
| `handler` | [`InputEventMap`](../../../namespaces/input/type-aliases/InputEventMap.md)\[`K`\] | The exact function reference to remove. |

## Returns

`void`

## Example

```ts
function onPress(data) { console.log(data.position); }
t.on('mousePressed', onPress);

// Later
t.off('mousePressed', onPress);
```
