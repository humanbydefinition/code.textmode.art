---
layout: doc
editLink: true
title: conversion
description: All media conversion related modules and types.
category: Namespaces
api: true
kind: Namespace
lastModified: 2026-02-06
---

[textmode.js](../../index.md) / conversion

# conversion

All media conversion related modules and types.

Responsible for converting images and videos into textmode-renderable formats
using various conversion strategies, like brightness- or edge-detection-based conversion.

`textmode.js` only comes with a built-in `'brightness'`-based conversion strategy,
but custom strategies can be registered via [TextmodeConversionManager.register](classes/TextmodeConversionManager.md#register).

## Classes

| Class | Description |
| ------ | ------ |
| [TextmodeConversionManager](classes/TextmodeConversionManager.md) | Manages conversion strategy registration and retrieval. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [TextmodeConversionContext](interfaces/TextmodeConversionContext.md) | Interface for the context provided to conversion strategies during shader and uniform creation. |
| [TextmodeConversionStrategy](interfaces/TextmodeConversionStrategy.md) | Interface for defining a custom textmode conversion strategy. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [BuiltInConversionMode](type-aliases/BuiltInConversionMode.md) | Built-in conversion mode names provided by textmode.js |
| [TextmodeConversionMode](type-aliases/TextmodeConversionMode.md) | Type representing the available textmode conversion modes |
