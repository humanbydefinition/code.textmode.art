---
layout: doc
editLink: true
title: TextmodeTexture
description: Dynamic texture source for external canvas or video content.
category: Classes
api: true
namespace: media
kind: Class
lastModified: 2026-06-08
hasConstructor: false
---

[textmode.js](../../../index.md) / [media](../index.md) / TextmodeTexture

# Class: TextmodeTexture

Dynamic texture source for external canvas or video content.

Create one with [Textmodifier.createTexture](../../../classes/Textmodifier/methods/createTexture.md) and draw it with
[Textmodifier.image](../../../classes/Textmodifier/methods/image.md). The texture refreshes each frame so it can mirror
renderers such as three.js, p5.js, Babylon.js, or hydra-synth.

## Extends

- [`TextmodeSource`](TextmodeSource.md)

## Extended by

- [`TextmodeVideo`](TextmodeVideo.md)

## Accessors

| Accessor | Description |
| ------ | ------ |
| [height](TextmodeTexture/accessors/height.md) | Ideal draw height in grid cells. |
| [originalHeight](TextmodeTexture/accessors/originalHeight.md) | Original source height in pixels. |
| [originalWidth](TextmodeTexture/accessors/originalWidth.md) | Original source width in pixels. |
| [source](TextmodeTexture/accessors/source.md) | Source element this texture captures. |
| [texture](TextmodeTexture/accessors/texture.md) | WebGL texture backing this source. |
| [width](TextmodeTexture/accessors/width.md) | Ideal draw width in grid cells. |

## Methods

| Method | Description |
| ------ | ------ |
| [background](TextmodeTexture/methods/background.md) | Set the background color used for transparent pixels. |
| [brightnessRange](TextmodeTexture/methods/brightnessRange.md) | Capture only source pixels whose brightness is inside the inclusive byte range. |
| [cellColor](TextmodeTexture/methods/cellColor.md) | Set the cell color used when [cellColorMode](TextmodeSource/methods/cellColorMode.md) is `'fixed'`. |
| [cellColorMode](TextmodeTexture/methods/cellColorMode.md) | Set whether cell color is sampled from the source or fixed. |
| [characters](TextmodeTexture/methods/characters.md) | Set the characters used for brightness mapping. |
| [charColor](TextmodeTexture/methods/charColor.md) | Set the character color used when [charColorMode](TextmodeSource/methods/charColorMode.md) is `'fixed'`. |
| [charColorMode](TextmodeTexture/methods/charColorMode.md) | Set whether character color is sampled from the source or fixed. |
| [charRotation](TextmodeTexture/methods/charRotation.md) | Rotate generated characters. |
| [clearConversions](TextmodeTexture/methods/clearConversions.md) | Clear this source's conversion stack and return to single-mode conversion. |
| [conversionMode](TextmodeTexture/methods/conversionMode.md) | Select the conversion mode for this source. |
| [conversions](TextmodeTexture/methods/conversions.md) | Set an ordered conversion stack for this source. |
| [dispose](TextmodeTexture/methods/dispose.md) | Dispose of the resource and free associated WebGL textures. |
| [flipX](TextmodeTexture/methods/flipX.md) | Flip the source horizontally. |
| [flipY](TextmodeTexture/methods/flipY.md) | Flip the source vertically. |
| [invert](TextmodeTexture/methods/invert.md) | Enable or disable source color inversion. |
