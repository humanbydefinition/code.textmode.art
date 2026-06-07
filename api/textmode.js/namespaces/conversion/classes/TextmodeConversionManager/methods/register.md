---
layout: doc
editLink: true
title: register
description: Register a custom conversion strategy.
category: Methods
api: true
owner: TextmodeConversionManager
namespace: conversion
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../../../index.md) / [conversion](../../../index.md) / [TextmodeConversionManager](../../TextmodeConversionManager.md) / register

# Method: register()

```ts
register(strategy): void;
```

Register a custom conversion strategy.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `strategy` | [`TextmodeConversionStrategy`](../../../interfaces/TextmodeConversionStrategy.md) | The conversion strategy to register |

## Returns

`void`

## Example

```ts
t.conversions.register({
    id: 'custom',
    createShader: (ctx) => shader,
    createUniforms: (ctx) => ({ u_image: ctx.source.texture })
});
```
