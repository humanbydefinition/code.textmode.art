---
layout: doc
editLink: true
title: TextmodeConversionManager
description: Registers conversion strategies for a Textmodifier instance.
category: Classes
api: true
namespace: conversion
kind: Class
lastModified: 2026-06-08
hasConstructor: false
---

[textmode.js](../../../index.md) / [conversion](../index.md) / TextmodeConversionManager

# Class: TextmodeConversionManager

Registers conversion strategies for a Textmodifier instance.

Access via [Textmodifier.conversions](../../../classes/Textmodifier/accessors/conversions.md).

## Example

```ts
// Register a custom conversion strategy
t.conversions.register({
    id: 'custom',
    createShader: (ctx) => shader,
    createUniforms: (ctx) => ({ u_image: ctx.source.texture })
});

// Use the conversion mode on an image
img.conversionMode('custom');
```

## Methods

| Method | Description |
| ------ | ------ |
| [has](TextmodeConversionManager/methods/has.md) | Check if a conversion strategy with the given ID is registered. |
| [register](TextmodeConversionManager/methods/register.md) | Register a custom conversion strategy. |
| [unregister](TextmodeConversionManager/methods/unregister.md) | Unregister a conversion strategy by its ID. |
