---
layout: doc
editLink: true
title: textmode.js
description: ~ travelling without arriving
category: API Reference
api: true
kind: Project
lastModified: 2026-05-15
---

# textmode.js

~ travelling without arriving

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [conversion](namespaces/conversion/index.md) | All media conversion related modules and types. |
| [errors](namespaces/errors/index.md) | All error handling related modules and types. |
| [filters](namespaces/filters/index.md) | All filter related modules and types. |
| [fonts](namespaces/fonts/index.md) | All font rendering related modules and types. |
| [input](namespaces/input/index.md) | All types and interfaces related to input event handling. |
| [layering](namespaces/layering/index.md) | All modules and types related to multi-layered textmode rendering. |
| [loading](namespaces/loading/index.md) | All loading screen related modules and types. |
| [media](namespaces/media/index.md) | All media asset related modules and types. |
| [plugins](namespaces/plugins/index.md) | Plugin system types for extending textmode.js functionality. |

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [TextmodeErrorLevel](enumerations/TextmodeErrorLevel.md) | Error handling levels to control how errors are reported and handled. |

## Classes

| Class | Description |
| ------ | ------ |
| [ErrorLayerController](classes/ErrorLayerController.md) | Controls the dedicated internal error layer lifecycle and rendering behavior. |
| [LoadingLayerController](classes/LoadingLayerController.md) | Controls the internal loading layer lifecycle and rendering behavior. |
| [textmode](classes/textmode.md) | The main entry point for the `textmode.js` library. |
| [TextmodeCamera](classes/TextmodeCamera.md) | Mutable camera object used for p5-style camera workflows. |
| [TextmodeColor](classes/TextmodeColor.md) | Represents a color in the `textmode.js` rendering system. |
| [TextmodeConversionManager](classes/TextmodeConversionManager.md) | Manages conversion strategy registration and retrieval. |
| [TextmodeError](classes/TextmodeError.md) | Custom error class for textmode.js exceptions. |
| [TextmodeFilterManager](classes/TextmodeFilterManager.md) | Manages filter registration, shader compilation, and filter chain application. |
| [TextmodeFont](classes/TextmodeFont.md) | Manages the font used for rendering characters via [layering.TextmodeLayer.loadFont](classes/TextmodeLayer.md#loadfont). |
| [TextmodeFramebuffer](classes/TextmodeFramebuffer.md) | Framebuffer class for managing offscreen rendering targets initialized via [Textmodifier.createFramebuffer](classes/Textmodifier.md#createframebuffer). |
| [TextmodeGrid](classes/TextmodeGrid.md) | Manages the grid of each `TextmodeLayer` instance. |
| [TextmodeImage](classes/TextmodeImage.md) | Represents an image uploaded for textmode rendering via [Textmodifier.loadImage](classes/Textmodifier.md#loadimage). |
| [TextmodeLayer](classes/TextmodeLayer.md) | A single layer within a multi-layered textmode rendering context. |
| [TextmodeLayerManager](classes/TextmodeLayerManager.md) | Manages the stack of layers within a [Textmodifier](classes/Textmodifier.md) instance. |
| [TextmodeShader](classes/TextmodeShader.md) | Shader class for managing WebGL shader programs initialized via [Textmodifier.createFilterShader](classes/Textmodifier.md#createfiltershader) or [Textmodifier.createShader](classes/Textmodifier.md#createshader). |
| [TextmodeSource](classes/TextmodeSource.md) | Abstract base class representing a textmode source asset (image, video, texture). |
| [TextmodeTexture](classes/TextmodeTexture.md) | Represents an external texture source for textmode rendering via [Textmodifier.createTexture](classes/Textmodifier.md#createtexture). |
| [TextmodeTileset](classes/TextmodeTileset.md) | Manages a bitmap tileset as a normalized glyph atlas. |
| [TextmodeVideo](classes/TextmodeVideo.md) | Represents a video element for textmode rendering via [Textmodifier.loadVideo](classes/Textmodifier.md#loadvideo). |
| [Textmodifier](classes/Textmodifier.md) | Manages textmode rendering on a [`HTMLCanvasElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement) and provides methods for drawing, font management, event handling, layer management, animation control, and more. The heart of the `textmode.js` library. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [BuiltInFilterParams](interfaces/BuiltInFilterParams.md) | Filter parameter types for built-in filters. |
| [ErrorScreenRendererContext](interfaces/ErrorScreenRendererContext.md) | Context object passed to error renderer callbacks. |
| [GlyphData](interfaces/GlyphData.md) | Glyph outline data for a character *([TextmodeFont](classes/TextmodeFont.md) only)*. |
| [LoadingScreenOptions](interfaces/LoadingScreenOptions.md) | Options for configuring the loading screen. |
| [LoadingScreenRendererContext](interfaces/LoadingScreenRendererContext.md) | Context object passed to loading renderer callbacks. |
| [TextmodeCanvasHandle](interfaces/TextmodeCanvasHandle.md) | Stable read-only canvas handle exposed to plugins. |
| [TextmodeConversionContext](interfaces/TextmodeConversionContext.md) | Interface for the context provided to conversion strategies during shader and uniform creation. |
| [TextmodeConversionStrategy](interfaces/TextmodeConversionStrategy.md) | Interface for defining a custom textmode conversion strategy. |
| [TextmodeLayerOptions](interfaces/TextmodeLayerOptions.md) | Options for configuring a new TextmodeLayer via [TextmodeLayerManager.add](classes/TextmodeLayerManager.md#add). |
| [TextmodePlugin](interfaces/TextmodePlugin.md) | A plugin interface for extending the functionality of a [Textmodifier](classes/Textmodifier.md) instance. |
| [TextmodePluginContext](interfaces/TextmodePluginContext.md) | Host-provided context passed to plugins when they are installed on a [Textmodifier](classes/Textmodifier.md) instance. |
| [TextmodeTilesetOptions](interfaces/TextmodeTilesetOptions.md) | Configuration used to load a tileset image into a normalized glyph atlas. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [BuiltInConversionMode](type-aliases/BuiltInConversionMode.md) | Built-in conversion mode names provided by textmode.js |
| [BuiltInFilterName](type-aliases/BuiltInFilterName.md) | Built-in filter names provided by textmode.js |
| [FilterName](type-aliases/FilterName.md) | Filter name type that allows both built-in and custom filter names |
| [InputEventMap](type-aliases/InputEventMap.md) | Union of every input event emitted by the library. |
| [InputEventName](type-aliases/InputEventName.md) | Every valid event name accepted by [Textmodifier.on](classes/Textmodifier.md#on), [Textmodifier.off](classes/Textmodifier.md#off), and [Textmodifier.once](classes/Textmodifier.md#once). |
| [InputEventOwner](type-aliases/InputEventOwner.md) | Input subsystem that owns a given event name. |
| [LayerExtensionImplementation](type-aliases/LayerExtensionImplementation.md) | Type for layer extension method implementations. |
| [LayerLifecycleHook](type-aliases/LayerLifecycleHook.md) | Callback type for layer lifecycle events. |
| [LayerRenderHook](type-aliases/LayerRenderHook.md) | Callback type for layer render hooks. |
| [LoadingScreenState](type-aliases/LoadingScreenState.md) | Internal state of the loading screen. |
| [SetupLifecycleHook](type-aliases/SetupLifecycleHook.md) | Callback type for setup lifecycle hooks. |
| [TextmodeConversionMode](type-aliases/TextmodeConversionMode.md) | Type representing the available textmode conversion modes |
| [TextmodeFramebufferOptions](type-aliases/TextmodeFramebufferOptions.md) | Options for creating a framebuffer via [Textmodifier.createFramebuffer](classes/Textmodifier.md#createframebuffer). If not specified, width and height default to the current textmode grid size. |
| [TextmodeGlyph](type-aliases/TextmodeGlyph.md) | Represents a single glyph entry in a textmode glyph atlas. |
| [TextmodeLayerBlendMode](type-aliases/TextmodeLayerBlendMode.md) | - |
| [TextmodeOptions](type-aliases/TextmodeOptions.md) | Options when creating a [Textmodifier](classes/Textmodifier.md) instance via [textmode.create](classes/textmode.md#create). |
| [TextmodePluginHook](type-aliases/TextmodePluginHook.md) | Callback type for simple plugin hooks without parameters. |

## Variables

| Variable | Description |
| ------ | ------ |
| [INPUT\_EVENT\_NAMES](variables/INPUT_EVENT_NAMES.md) | Flat readonly list of every input event name accepted by [Textmodifier.on](classes/Textmodifier.md#on), [Textmodifier.off](classes/Textmodifier.md#off), and [Textmodifier.once](classes/Textmodifier.md#once). |
| [TEXTMODE\_LAYER\_BLEND\_MODES](variables/TEXTMODE_LAYER_BLEND_MODES.md) | Blend modes available for [TextmodeLayer](classes/TextmodeLayer.md) compositing in 2D mode. |
