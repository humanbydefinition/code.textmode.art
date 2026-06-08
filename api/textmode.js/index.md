---
layout: doc
editLink: true
title: textmode.js
description: ~ travelling without arriving
category: API Reference
api: true
kind: Project
lastModified: 2026-06-08
---

# textmode.js

~ travelling without arriving

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [color](namespaces/color/index.md) | Color objects, color modes, and types. |
| [conversion](namespaces/conversion/index.md) | All media conversion related modules and types. |
| [errors](namespaces/errors/index.md) | All error handling related modules and types. |
| [filters](namespaces/filters/index.md) | All filter related modules and types. |
| [fonts](namespaces/fonts/index.md) | All font rendering related modules and types. |
| [input](namespaces/input/index.md) | All types and interfaces related to input event handling. |
| [layering](namespaces/layering/index.md) | All modules and types related to multi-layered textmode rendering. |
| [loading](namespaces/loading/index.md) | All loading screen related modules and types. |
| [media](namespaces/media/index.md) | All media asset related modules and types. |
| [plugins](namespaces/plugins/index.md) | Plugin system types for extending textmode.js functionality. |

## Classes

| Class | Description |
| ------ | ------ |
| [textmode](classes/textmode.md) | The main entry point for the `textmode.js` library. |
| [TextmodeCamera](classes/TextmodeCamera.md) | Mutable camera object used for p5-style camera workflows. |
| [TextmodeFramebuffer](classes/TextmodeFramebuffer.md) | Framebuffer class for managing offscreen rendering targets initialized via [Textmodifier.createFramebuffer](classes/Textmodifier/methods/createFramebuffer.md). |
| [TextmodeGlyphRamp](classes/TextmodeGlyphRamp.md) | Immutable character sequence for mapping numbers to glyphs. |
| [TextmodeGrid](classes/TextmodeGrid.md) | Grid used by a textmode layer. |
| [TextmodeRandom](classes/TextmodeRandom.md) | A deterministic pseudo-random number generator for textmode sketches. |
| [TextmodeShader](classes/TextmodeShader.md) | WebGL shader program created by [Textmodifier.createMaterialShader](classes/Textmodifier/methods/createMaterialShader.md), [Textmodifier.createFilterShader](classes/Textmodifier/methods/createFilterShader.md), or [Textmodifier.createShader](classes/Textmodifier/methods/createShader.md). |
| [TextmodeVector](classes/TextmodeVector.md) | Mutable two- or three-dimensional vector for creative-coding math. |
| [Textmodifier](classes/Textmodifier.md) | The main `textmode.js` drawing context. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [TextmodeFramebufferOptions](type-aliases/TextmodeFramebufferOptions.md) | Options for creating a framebuffer via [Textmodifier.createFramebuffer](classes/Textmodifier/methods/createFramebuffer.md). If not specified, width and height default to the current textmode grid size. |
| [TextmodeOptions](type-aliases/TextmodeOptions.md) | Options when creating a [Textmodifier](classes/Textmodifier.md) instance via [textmode.create](classes/textmode/methods/create.md). |
