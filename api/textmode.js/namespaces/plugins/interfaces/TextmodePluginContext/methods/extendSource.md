---
layout: doc
editLink: true
title: extendSource
description: Extend TextmodeSource instances with a new method. The method will be available on image, video, texture, and overlay sources.
category: Methods
api: true
owner: TextmodePluginContext
namespace: plugins
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../../../index.md) / [plugins](../../../index.md) / [TextmodePluginContext](../../TextmodePluginContext.md) / extendSource

# Method: extendSource()

```ts
extendSource<TArgs, TReturn>(methodName, implementation): void;
```

Extend TextmodeSource instances with a new method.
The method will be available on image, video, texture, and overlay sources.

## Type Parameters

| Type Parameter |
| ------ |
| `TArgs` *extends* `unknown`[] |
| `TReturn` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `methodName` | `string` | The name of the method to add. |
| `implementation` | (`this`, ...`args`) => `TReturn` | The implementation function. `this` will be bound to the TextmodeSource instance. |

## Returns

`void`

## Example

```ts
api.extendSource('edgeDetection', function() {
  // `this` is the TextmodeSource instance
  return this.conversionMode('edge');
});
```
