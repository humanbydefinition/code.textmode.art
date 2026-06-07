---
layout: doc
editLink: true
title: extendLayer
description: Extend TextmodeLayer instances with a new method. The method will be available on all existing and future layer instances.
category: Methods
api: true
owner: TextmodePluginContext
namespace: plugins
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../../../index.md) / [plugins](../../../index.md) / [TextmodePluginContext](../../TextmodePluginContext.md) / extendLayer

# Method: extendLayer()

```ts
extendLayer<TArgs, TReturn>(methodName, implementation): void;
```

Extend TextmodeLayer instances with a new method.
The method will be available on all existing and future layer instances.

## Type Parameters

| Type Parameter |
| ------ |
| `TArgs` *extends* `unknown`[] |
| `TReturn` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `methodName` | `string` | The name of the method to add. |
| `implementation` | (`this`, ...`args`) => `TReturn` | The implementation function. `this` will be bound to the TextmodeLayer instance. |

## Returns

`void`

## Example

```ts
api.extendLayer('synth', function(source: SynthSource) {
  // `this` is the TextmodeLayer instance
  this.setPluginState('synth', { source, compiled: compile(source) });
});
```
