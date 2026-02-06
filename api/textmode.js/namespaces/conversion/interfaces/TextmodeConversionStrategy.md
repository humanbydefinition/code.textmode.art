---
layout: doc
editLink: true
title: TextmodeConversionStrategy
description: Interface for defining a custom textmode conversion strategy.
category: Interfaces
api: true
namespace: conversion
kind: Interface
lastModified: 2026-02-06
isInterface: true
---

[textmode.js](../../../index.md) / [conversion](../index.md) / TextmodeConversionStrategy

# Interface: TextmodeConversionStrategy

Interface for defining a custom textmode conversion strategy.

A conversion strategy defines how a source image is converted into textmode attributes
(character index, primary color, secondary color) via a custom shader.

To register a custom strategy, implement this interface and pass it to [TextmodeConversionManager.register](../classes/TextmodeConversionManager.md#register).

## Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| <a id="id"></a> `id` | `readonly` | `string` | Unique identifier for this conversion strategy. This ID is used to select the strategy via [TextmodeSource.conversionMode](../../loadables/classes/TextmodeSource.md#conversionmode). |

## Methods

### createShader()

```ts
createShader(context): TextmodeShader;
```

Create the shader program for this conversion strategy.
This method is called once when the strategy is first used for a given source.

The shader must output to 3 render targets (MRT):
- location 0: Character data (R=char index, G=unused, B=unused, A=unused)
- location 1: Primary color (RGBA)
- location 2: Secondary/Background color (RGBA)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `context` | [`TextmodeConversionContext`](TextmodeConversionContext.md) | The conversion context containing renderer and source information. |

#### Returns

[`TextmodeShader`](../../../classes/TextmodeShader.md)

The compiled GLShader instance.

***

### createUniforms()

```ts
createUniforms(context): Record<string, UniformValue>;
```

Create uniform values for this conversion strategy.
This method is called every frame before rendering the conversion pass.

Use this to pass dynamic values (like time or source texture) to your shader.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `context` | [`TextmodeConversionContext`](TextmodeConversionContext.md) | The conversion context containing renderer and source information. |

#### Returns

`Record`\<`string`, `UniformValue`\>

An object mapping uniform names to values.
