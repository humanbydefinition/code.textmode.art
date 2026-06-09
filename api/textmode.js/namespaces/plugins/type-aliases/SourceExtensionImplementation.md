---
layout: doc
editLink: true
title: SourceExtensionImplementation
description: Type for source extension method implementations.
category: Type Aliases
api: true
namespace: plugins
kind: TypeAlias
lastModified: 2026-06-09
---

[textmode.js](../../../index.md) / [plugins](../index.md) / SourceExtensionImplementation

# Type Alias: SourceExtensionImplementation

```ts
type SourceExtensionImplementation = (this, ...args) => unknown;
```

Type for source extension method implementations.

The `this` context is bound to the `TextmodeSource` instance.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | [`TextmodeSource`](../../media/classes/TextmodeSource.md) |
| ...`args` | `any`[] |

## Returns

`unknown`
