---
layout: doc
editLink: true
title: conversion
description: All media conversion related modules and types.
category: Namespaces
api: true
kind: Namespace
lastModified: 2026-05-19
---

[textmode.js](../../index.md) / conversion

# conversion

All media conversion related modules and types.

Responsible for converting images and videos into textmode-renderable formats
using various conversion strategies, like brightness- or edge-detection-based conversion.

`textmode.js` only comes with a built-in `'brightness'`-based conversion strategy,
but custom strategies can be registered via [conversion.TextmodeConversionManager.register](classes/TextmodeConversionManager.md#register).

## Classes

| Class | Description |
| ------ | ------ |
| [TextmodeConversionManager](classes/TextmodeConversionManager.md) | Manages conversion strategy registration and retrieval. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [TextmodeConversionContext](interfaces/TextmodeConversionContext.md) | Interface for the context provided to conversion strategies during shader and uniform creation. |
| [TextmodeConversionPassContext](interfaces/TextmodeConversionPassContext.md) | Metadata describing the active pass while a conversion stack is being rendered. |
| [TextmodeConversionStep](interfaces/TextmodeConversionStep.md) | One pass in a source-level conversion stack. |
| [TextmodeConversionStrategy](interfaces/TextmodeConversionStrategy.md) | Interface for defining a custom textmode conversion strategy. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [BuiltInConversionMode](type-aliases/BuiltInConversionMode.md) | Built-in conversion mode names provided by textmode.js |
| [TextmodeColorInput](type-aliases/TextmodeColorInput.md) | Color input accepted by conversion stack steps. |
| [TextmodeConversionMode](type-aliases/TextmodeConversionMode.md) | Type representing the available textmode conversion modes |
| [TextmodeConversionStepOptions](type-aliases/TextmodeConversionStepOptions.md) | Custom options passed to conversion strategies for one conversion stack pass. |
