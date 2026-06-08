---
layout: doc
editLink: true
title: createUniforms
description: Create uniform values for this filter based on user parameters. Called each time the filter is applied.
category: Methods
api: true
owner: TextmodeFilterStrategy
namespace: filters
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../../../index.md) / [filters](../../../index.md) / [TextmodeFilterStrategy](../../TextmodeFilterStrategy.md) / createUniforms

# Method: createUniforms()

```ts
createUniforms(params, context): Record<string, unknown>;
```

Create uniform values for this filter based on user parameters.
Called each time the filter is applied.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `TParams` | The parameters passed by the user (can be undefined) |
| `context` | [`FilterContext`](../../FilterContext.md) | The filter context containing dimensions |

## Returns

`Record`\<`string`, `unknown`\>

An object mapping uniform names to values

## Example

```ts
createUniforms: (params) => ({ u_amount: params?.amount ?? 1 })
```
