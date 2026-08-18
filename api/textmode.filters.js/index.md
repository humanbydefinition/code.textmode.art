---
layout: doc
editLink: false
title: textmode.filters.js
description: Image filters plugin for textmode.js
category: API Reference
api: true
kind: Project
ecosystem: textmode.js
lastModified: 2026-08-17
---

# textmode.filters.js

Complete optional filter system for textmode.js, including 18 setup-compiled GPU effects,
custom registration, layer/global/final queues, and automatic resource cleanup.

## Built-in filters

The shipped filter names and their parameter types.

| Name | Description |
| ------ | ------ |
| [BuiltInFilterParameterMap](interfaces/BuiltInFilterParameterMap.md) | Parameter types for every built-in filter. |
| [BuiltInFilterName](type-aliases/BuiltInFilterName.md) | Names installed synchronously by [FiltersPlugin](variables/FiltersPlugin.md). |

## Color adjustment filters

Configuration options for the bundled color-adjustment effects.

| Interface | Description |
| ------ | ------ |
| [BrightnessOptions](interfaces/BrightnessOptions.md) | Configuration options for the `'brightness'` filter. |
| [ContrastOptions](interfaces/ContrastOptions.md) | Configuration options for the `'contrast'` filter. |
| [GrayscaleOptions](interfaces/GrayscaleOptions.md) | Options for the built-in grayscale effect. |
| [HueRotateOptions](interfaces/HueRotateOptions.md) | Configuration options for the `'hueRotate'` filter. |
| [PosterizeOptions](interfaces/PosterizeOptions.md) | Configuration options for the `'posterize'` filter. |
| [SaturationOptions](interfaces/SaturationOptions.md) | Configuration options for the `'saturation'` filter. |
| [SepiaOptions](interfaces/SepiaOptions.md) | Options for the built-in sepia effect. |
| [ThresholdOptions](interfaces/ThresholdOptions.md) | Options for the built-in threshold effect. |

## Custom filters

Types used when registering bespoke GPU filters on the manager.

| Type Alias | Description |
| ------ | ------ |
| [FilterName](type-aliases/FilterName.md) | Built-in names retain completion while arbitrary custom names remain valid. |
| [TextmodeFilterShader](type-aliases/TextmodeFilterShader.md) | A precompiled textmode shader, inline fragment source, or shader URL accepted by custom registration. |
| [TextmodeFilterUniformDefinitions](type-aliases/TextmodeFilterUniformDefinitions.md) | Uniform declarations for a custom filter, mapping GLSL names to public parameter names and defaults. |

## Distortion filters

Configuration options for the bundled distortion effects.

| Interface | Description |
| ------ | ------ |
| [ChromaticAberrationOptions](interfaces/ChromaticAberrationOptions.md) | Configuration options for the `'chromaticAberration'` filter. |
| [GridDistortionOptions](interfaces/GridDistortionOptions.md) | Configuration options for the `'gridDistortion'` filter. |
| [PixelateOptions](interfaces/PixelateOptions.md) | Configuration options for the `'pixelate'` filter. |

## Filter management

The runtime that owns filter registration, queues, GPU resources, and cleanup.

| Class | Description |
| ------ | ------ |
| [TextmodeFilterManager](classes/TextmodeFilterManager.md) | Owns filter registration, queues, GPU resources, pass execution, and cleanup. |

## Stylization filters

Configuration options for the bundled stylization effects.

| Interface | Description |
| ------ | ------ |
| [BloomOptions](interfaces/BloomOptions.md) | Configuration options for the `'bloom'` filter. |
| [CrtMattiasOptions](interfaces/CrtMattiasOptions.md) | Configuration options for the `'crtMattias'` filter. |
| [FilmGrainOptions](interfaces/FilmGrainOptions.md) | Configuration options for the `'filmGrain'` filter. |
| [GlitchOptions](interfaces/GlitchOptions.md) | Configuration options for the `'glitch'` filter. |
| [ScanlinesOptions](interfaces/ScanlinesOptions.md) | Configuration options for the `'scanlines'` filter. |
| [VignetteOptions](interfaces/VignetteOptions.md) | Configuration options for the `'vignette'` filter. |

## Workflow

The plugin that installs the filter system on a textmode.js sketch.

| Variable | Description |
| ------ | ------ |
| [FiltersPlugin](variables/FiltersPlugin.md) | GPU-accelerated filters plugin. Installing it adds the complete 18-filter workflow to one Textmodifier. |
