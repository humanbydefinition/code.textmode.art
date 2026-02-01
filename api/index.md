---
layout: doc
editLink: true
title: textmode.js
description: Complete API reference for textmode.js - a lightweight creative coding library for real-time ASCII art on the web.
category: API Reference
api: true
kind: Project
lastModified: 2026-02-01
---

# textmode.js

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [conversion](namespaces/conversion/index.md) | All media conversion related modules and types. |
| [filters](namespaces/filters/index.md) | All filter related modules and types. |
| [input](namespaces/input/index.md) | All types and interfaces related to input event handling. |
| [layering](namespaces/layering/index.md) | All modules and types related to multi-layered textmode rendering. |
| [loadables](namespaces/loadables/index.md) | All loadable assets related to textmode rendering. |
| [loading](namespaces/loading/index.md) | All loading screen related modules and types. |
| [plugins](namespaces/plugins/index.md) | Plugin system types for extending textmode.js functionality. |

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [TextmodeErrorLevel](enumerations/TextmodeErrorLevel.md) | Error handling levels to control how errors are reported and handled. |

## Classes

| Class | Description |
| ------ | ------ |
| [textmode](classes/textmode.md) | The main entry point for the `textmode.js` library. |
| [TextmodeColor](classes/TextmodeColor.md) | Represents a color in the `textmode.js` rendering system. |
| [TextmodeError](classes/TextmodeError.md) | Custom error class for textmode.js exceptions. |
| [TextmodeFramebuffer](classes/TextmodeFramebuffer.md) | Framebuffer class for managing offscreen rendering targets initialized via [Textmodifier.createFramebuffer](classes/Textmodifier.md#createframebuffer). |
| [TextmodeGrid](classes/TextmodeGrid.md) | Manages the grid of each `TextmodeLayer` instance. |
| [TextmodeShader](classes/TextmodeShader.md) | Shader class for managing WebGL shader programs initialized via [Textmodifier.createFilterShader](classes/Textmodifier.md#createfiltershader) or [Textmodifier.createShader](classes/Textmodifier.md#createshader). |
| [Textmodifier](classes/Textmodifier.md) | Manages textmode rendering on a [`HTMLCanvasElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement) and provides methods for drawing, font management, event handling, layer management, animation control, and more. The heart of the `textmode.js` library. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [TextmodeFramebufferOptions](type-aliases/TextmodeFramebufferOptions.md) | Options for creating a framebuffer. If not specified, width and height default to the current textmode grid size. |
| [TextmodeOptions](type-aliases/TextmodeOptions.md) | Options when creating a [Textmodifier](classes/Textmodifier.md) instance. |
