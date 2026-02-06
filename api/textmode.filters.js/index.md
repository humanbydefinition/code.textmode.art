---
title: textmode.filters.js
description: GPU-accelerated image filters plugin for textmode.js.
category: API Reference
api: true
kind: Project
lastModified: 2026-02-06
---

# textmode.filters.js

GPU-accelerated image filters plugin for textmode.js.

This plugin provides customizable visual effects that run entirely on the GPU
via WebGL2 fragment shaders for maximum performance.

## Available filters

### Color adjustment
- [brightness](interfaces/BrightnessOptions.md) - Adjust image brightness
- [contrast](interfaces/ContrastOptions.md) - Adjust image contrast  
- [saturation](interfaces/SaturationOptions.md) - Adjust color intensity
- [hueRotate](interfaces/HueRotateOptions.md) - Rotate colors around the color wheel
- [posterize](interfaces/PosterizeOptions.md) - Reduce color levels

### Distortion
- [chromaticAberration](interfaces/ChromaticAberrationOptions.md) - RGB channel separation
- [pixelate](interfaces/PixelateOptions.md) - Pixelation/mosaic effect
- [gridDistortion](interfaces/GridDistortionOptions.md) - Custom grid warping

### Stylization  
- [glitch](interfaces/GlitchOptions.md) - Digital glitch effect
- [crtMattias](interfaces/CrtMattiasOptions.md) - CRT monitor emulation
- [scanlines](interfaces/ScanlinesOptions.md) - Customizable scanlines
- [vignette](interfaces/VignetteOptions.md) - Darkened edges effect
- [bloom](interfaces/BloomOptions.md) - Glow around bright areas
- [filmGrain](interfaces/FilmGrainOptions.md) - Animated film grain overlay

## Functions

| Function | Description |
| ------ | ------ |
| [~~createFiltersPlugin~~](functions/createFiltersPlugin.md) | Creates the `textmode.filters.js` plugin for textmode.js. |

## Interfaces

### Color adjustment filters

| Interface | Description |
| ------ | ------ |
| [BrightnessOptions](interfaces/BrightnessOptions.md) | Configuration options for the `'brightness'` filter. |
| [ContrastOptions](interfaces/ContrastOptions.md) | Configuration options for the `'contrast'` filter. |
| [SaturationOptions](interfaces/SaturationOptions.md) | Configuration options for the `'saturation'` filter. |
| [HueRotateOptions](interfaces/HueRotateOptions.md) | Configuration options for the `'hueRotate'` filter. |
| [PosterizeOptions](interfaces/PosterizeOptions.md) | Configuration options for the `'posterize'` filter. |

### Distortion filters

| Interface | Description |
| ------ | ------ |
| [ChromaticAberrationOptions](interfaces/ChromaticAberrationOptions.md) | Configuration options for the `'chromaticAberration'` filter. |
| [PixelateOptions](interfaces/PixelateOptions.md) | Configuration options for the `'pixelate'` filter. |
| [GridDistortionOptions](interfaces/GridDistortionOptions.md) | Configuration options for the `'gridDistortion'` filter. |

### Stylization filters

| Interface | Description |
| ------ | ------ |
| [GlitchOptions](interfaces/GlitchOptions.md) | Configuration options for the `'glitch'` filter. |
| [CrtMattiasOptions](interfaces/CrtMattiasOptions.md) | Configuration options for the `'crtMattias'` filter. |
| [ScanlinesOptions](interfaces/ScanlinesOptions.md) | Configuration options for the `'scanlines'` filter. |
| [VignetteOptions](interfaces/VignetteOptions.md) | Configuration options for the `'vignette'` filter. |
| [BloomOptions](interfaces/BloomOptions.md) | Configuration options for the `'bloom'` filter. |
| [FilmGrainOptions](interfaces/FilmGrainOptions.md) | Configuration options for the `'filmGrain'` filter. |

## Variables

| Variable | Description |
| ------ | ------ |
| [FiltersPlugin](variables/FiltersPlugin.md) | GPU-accelerated image filters plugin for textmode.js. |
