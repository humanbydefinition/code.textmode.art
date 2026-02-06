---
layout: doc
editLink: true
title: LayerExtensionImplementation
description: Type for layer extension method implementations.
category: Type Aliases
api: true
namespace: plugins
kind: TypeAlias
lastModified: 2026-02-01
---

[textmode.js](../../../index.md) / [plugins](../index.md) / LayerExtensionImplementation

# Type Alias: LayerExtensionImplementation()

```ts
type LayerExtensionImplementation = (this, ...args) => unknown;
```

Type for layer extension method implementations.

The `this` context is bound to the `TextmodeLayer` instance.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | [`TextmodeLayer`](../../layering/classes/TextmodeLayer.md) |
| ...`args` | `any`[] |

## Returns

`unknown`
