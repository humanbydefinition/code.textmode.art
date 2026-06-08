---
layout: doc
editLink: true
title: removeSourceExtension
description: Remove a method extension from TextmodeSource.
category: Methods
api: true
owner: TextmodePluginContext
namespace: plugins
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../../../index.md) / [plugins](../../../index.md) / [TextmodePluginContext](../../TextmodePluginContext.md) / removeSourceExtension

# Method: removeSourceExtension()

```ts
removeSourceExtension(methodName): void;
```

Remove a method extension from TextmodeSource.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `methodName` | `string` | The name of the method to remove. |

## Returns

`void`

## Example

```ts
api.removeSourceExtension('edgeDetection');
```
