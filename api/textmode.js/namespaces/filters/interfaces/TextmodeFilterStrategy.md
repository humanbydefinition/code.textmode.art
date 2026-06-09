---
layout: doc
editLink: true
title: TextmodeFilterStrategy
description: Interface for implementing custom filter strategies.
category: Interfaces
api: true
namespace: filters
kind: Interface
lastModified: 2026-06-09
isInterface: true
---

[textmode.js](../../../index.md) / [filters](../index.md) / TextmodeFilterStrategy

# Interface: TextmodeFilterStrategy\<TParams\>

Interface for implementing custom filter strategies.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TParams` | `unknown` |

## Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| <a id="property-id"></a> `id` | `readonly` | `string` | Unique identifier for this filter |

## Methods

### createShader()

```ts
createShader(context): TextmodeShader;
```

Create the shader program for this filter.
Called once when the filter is first used (lazy initialization).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `context` | [`FilterContext`](FilterContext.md) | The filter context containing renderer and dimensions |

#### Returns

[`TextmodeShader`](../../../classes/TextmodeShader.md)

The compiled shader program

#### Example

```ts
createShader: () => shader
```

***

### createUniforms()

```ts
createUniforms(params, context): Record<string, unknown>;
```

Create uniform values for this filter based on user parameters.
Called each time the filter is applied.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `TParams` | The parameters passed by the user (can be undefined) |
| `context` | [`FilterContext`](FilterContext.md) | The filter context containing dimensions |

#### Returns

`Record`\<`string`, `unknown`\>

An object mapping uniform names to values

#### Example

```ts
createUniforms: (params) => ({ u_amount: params?.amount ?? 1 })
```
