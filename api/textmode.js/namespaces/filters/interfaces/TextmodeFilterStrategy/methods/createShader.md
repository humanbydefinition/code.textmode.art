---
layout: doc
editLink: true
title: createShader
description: Create the shader program for this filter. Called once when the filter is first used (lazy initialization).
category: Methods
api: true
owner: TextmodeFilterStrategy
namespace: filters
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../../../index.md) / [filters](../../../index.md) / [TextmodeFilterStrategy](../../TextmodeFilterStrategy.md) / createShader

# Method: createShader()

```ts
createShader(context): TextmodeShader;
```

Create the shader program for this filter.
Called once when the filter is first used (lazy initialization).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `context` | [`FilterContext`](../../FilterContext.md) | The filter context containing renderer and dimensions |

## Returns

[`TextmodeShader`](../../../../../classes/TextmodeShader.md)

The compiled shader program

## Example

```ts
createShader: () => shader
```
