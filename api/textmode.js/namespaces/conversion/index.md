---
layout: doc
editLink: true
title: conversion
description: All media conversion related modules and types.
category: Namespaces
api: true
kind: Namespace
lastModified: 2026-05-15
---

[textmode.js](../../index.md) / conversion

# conversion

All media conversion related modules and types.

Responsible for converting images and videos into textmode-renderable formats
using various conversion strategies, like brightness- or edge-detection-based conversion.

`textmode.js` only comes with a built-in `'brightness'`-based conversion strategy,
but custom strategies can be registered via [TextmodeConversionManager.register](../../classes/TextmodeConversionManager.md#register).

## References

### BuiltInConversionMode

Re-exports [BuiltInConversionMode](../../type-aliases/BuiltInConversionMode.md)

***

### TextmodeConversionContext

Re-exports [TextmodeConversionContext](../../interfaces/TextmodeConversionContext.md)

***

### TextmodeConversionManager

Re-exports [TextmodeConversionManager](../../classes/TextmodeConversionManager.md)

***

### TextmodeConversionMode

Re-exports [TextmodeConversionMode](../../type-aliases/TextmodeConversionMode.md)

***

### TextmodeConversionStrategy

Re-exports [TextmodeConversionStrategy](../../interfaces/TextmodeConversionStrategy.md)
