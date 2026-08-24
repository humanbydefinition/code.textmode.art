---
layout: doc
editLink: false
title: TextmodeSource
description: Shared base for image, video, and dynamic texture sources drawn with Textmodifier.image.
category: Classes
api: true
namespace: media
kind: Class
lastModified: 2026-08-24
hasConstructor: false
---

[textmode.js](../../../index.md) / [media](../index.md) / TextmodeSource

# Abstract Class: TextmodeSource

Shared base for image, video, and dynamic texture sources drawn with [Textmodifier.image](../../../classes/Textmodifier/methods/image.md).


## Extends

- `Disposable`

## Extended by

- [`TextmodeImage`](TextmodeImage.md)
- [`TextmodeTexture`](TextmodeTexture.md)

## Character & color mapping

Map sampled values to glyphs, foreground colors, cell colors, and a background.

| Method | Description |
| ------ | ------ |
| [background](TextmodeSource/methods/background.md) | Set the background color used for transparent pixels. |
| [cellColor](TextmodeSource/methods/cellColor.md) | Set the cell color used when [cellColorMode](TextmodeSource/methods/cellColorMode.md) is `'fixed'`. |
| [cellColorMode](TextmodeSource/methods/cellColorMode.md) | Set whether cell color is sampled from the source or fixed. |
| [characters](TextmodeSource/methods/characters.md) | Set the characters used for brightness mapping. |
| [charColor](TextmodeSource/methods/charColor.md) | Set the character color used when [charColorMode](TextmodeSource/methods/charColorMode.md) is `'fixed'`. |
| [charColorMode](TextmodeSource/methods/charColorMode.md) | Set whether character color is sampled from the source or fixed. |

## Conversion

Select and clear the conversion stack used when drawing this source.

| Method | Description |
| ------ | ------ |
| [brightnessRange](TextmodeSource/methods/brightnessRange.md) | Capture only source pixels whose brightness is inside the inclusive byte range. |
| [clearConversions](TextmodeSource/methods/clearConversions.md) | Clear this source's conversion stack and return to single-mode conversion. |
| [conversionMode](TextmodeSource/methods/conversionMode.md) | Select the conversion mode for this source. |
| [conversions](TextmodeSource/methods/conversions.md) | Set an ordered conversion stack for this source. |

## Resource lifecycle

Release the WebGL resources owned by the source.

| Method | Description |
| ------ | ------ |
| [dispose](TextmodeSource/methods/dispose.md) | Dispose of the resource and free associated WebGL textures. |

## Source dimensions

Inspect the source texture and its original and grid-fitted dimensions.

| Accessor | Description |
| ------ | ------ |
| [height](TextmodeSource/accessors/height.md) | Ideal draw height in grid cells. |
| [originalHeight](TextmodeSource/accessors/originalHeight.md) | Original source height in pixels. |
| [originalWidth](TextmodeSource/accessors/originalWidth.md) | Original source width in pixels. |
| [texture](TextmodeSource/accessors/texture.md) | WebGL texture backing this source. |
| [width](TextmodeSource/accessors/width.md) | Ideal draw width in grid cells. |

## Source transforms

Mirror, invert, or rotate the source's converted output.

| Method | Description |
| ------ | ------ |
| [charRotation](TextmodeSource/methods/charRotation.md) | Rotate generated characters. |
| [flipX](TextmodeSource/methods/flipX.md) | Flip the source horizontally. |
| [flipY](TextmodeSource/methods/flipY.md) | Flip the source vertically. |
| [invert](TextmodeSource/methods/invert.md) | Enable or disable source color inversion. |
