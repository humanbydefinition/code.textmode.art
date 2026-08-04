---
layout: doc
editLink: false
title: textmode.filters.js
description: Image filters plugin for textmode.js
category: API Reference
api: true
kind: Project
ecosystem: textmode.js
lastModified: 2026-08-03
---

# textmode.filters.js

Apply GPU-accelerated image filters to finished textmode.js scenes.

Add [FiltersPlugin](variables/FiltersPlugin.md) to a sketch to register the built-in WebGL2
effects. Use the option interfaces below to configure a filter when adding
it to a layer, the composited scene, or the final presentation stage.

## Choose a filter

**Color adjustment** changes brightness, contrast, saturation, hue, and
posterization. **Distortion** changes pixels, color channels, or grid
geometry. **Stylization** adds glitch, CRT, scanlines, vignette, bloom, and
film grain treatments.

Start with [FiltersPlugin](variables/FiltersPlugin.md), then read the
[Filters guide](/docs/filters) for scopes and workflows.

## Color adjustment filters

| Interface | Description |
| ------ | ------ |
| [BrightnessOptions](interfaces/BrightnessOptions.md) | Configuration options for the `'brightness'` filter. |
| [ContrastOptions](interfaces/ContrastOptions.md) | Configuration options for the `'contrast'` filter. |
| [HueRotateOptions](interfaces/HueRotateOptions.md) | Configuration options for the `'hueRotate'` filter. |
| [PosterizeOptions](interfaces/PosterizeOptions.md) | Configuration options for the `'posterize'` filter. |
| [SaturationOptions](interfaces/SaturationOptions.md) | Configuration options for the `'saturation'` filter. |

## Distortion filters

| Interface | Description |
| ------ | ------ |
| [ChromaticAberrationOptions](interfaces/ChromaticAberrationOptions.md) | Configuration options for the `'chromaticAberration'` filter. |
| [GridDistortionOptions](interfaces/GridDistortionOptions.md) | Configuration options for the `'gridDistortion'` filter. |
| [PixelateOptions](interfaces/PixelateOptions.md) | Configuration options for the `'pixelate'` filter. |

## Stylization filters

| Interface | Description |
| ------ | ------ |
| [BloomOptions](interfaces/BloomOptions.md) | Configuration options for the `'bloom'` filter. |
| [CrtMattiasOptions](interfaces/CrtMattiasOptions.md) | Configuration options for the `'crtMattias'` filter. |
| [FilmGrainOptions](interfaces/FilmGrainOptions.md) | Configuration options for the `'filmGrain'` filter. |
| [GlitchOptions](interfaces/GlitchOptions.md) | Configuration options for the `'glitch'` filter. |
| [ScanlinesOptions](interfaces/ScanlinesOptions.md) | Configuration options for the `'scanlines'` filter. |
| [VignetteOptions](interfaces/VignetteOptions.md) | Configuration options for the `'vignette'` filter. |

## Workflow

| Variable | Description |
| ------ | ------ |
| [FiltersPlugin](variables/FiltersPlugin.md) | GPU-accelerated image filters plugin for textmode.js. |
