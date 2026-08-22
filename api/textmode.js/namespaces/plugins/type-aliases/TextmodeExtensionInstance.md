---
layout: doc
editLink: false
title: TextmodeExtensionInstance
description: Instance type associated with an extension target.
category: Type Aliases
api: true
namespace: plugins
kind: TypeAlias
lastModified: 2026-08-22
---

[textmode.js](../../../index.md) / [plugins](../index.md) / TextmodeExtensionInstance

# Type Alias: TextmodeExtensionInstance\<T\>

```ts
type TextmodeExtensionInstance<T> = T extends "textmodifier" ? Textmodifier : TextmodeLayer;
```

Instance type associated with an extension target.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`TextmodeExtensionTarget`](TextmodeExtensionTarget.md) |

