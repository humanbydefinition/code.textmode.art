---
layout: doc
editLink: true
title: TextmodeImage
description: Image source for textmode rendering.
category: Classes
api: true
namespace: media
kind: Class
lastModified: 2026-06-08
hasConstructor: false
---

[textmode.js](../../../index.md) / [media](../index.md) / TextmodeImage

# Class: TextmodeImage

Image source for textmode rendering.

Create one with [Textmodifier.loadImage](../../../classes/Textmodifier/methods/loadImage.md), draw it with [Textmodifier.image](../../../classes/Textmodifier/methods/image.md),
and configure conversion through inherited chainable methods.

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="TextmodeImage" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgaW1hZ2UgPSBudWxsOwoKZnVuY3Rpb24gY3JlYXRlSW1hZ2VVcmwoKSB7Cgljb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTsKCWNhbnZhcy53aWR0aCA9IDk2OwoJY2FudmFzLmhlaWdodCA9IDY0OwoJY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7Cgljb25zdCBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCA5NiwgNjQpOwoJZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsICcjMGVhNWU5Jyk7CglncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgJyNmNTllMGInKTsKCWN0eC5maWxsU3R5bGUgPSBncmFkaWVudDsKCWN0eC5maWxsUmVjdCgwLCAwLCA5NiwgNjQpOwoJY3R4LmZpbGxTdHlsZSA9ICcjMDIwNjE3JzsKCWN0eC5maWxsUmVjdCgxMiwgMTgsIDcyLCAyOCk7CgljdHguZmlsbFN0eWxlID0gJyNmOGZhZmMnOwoJY3R4LmZpbGxSZWN0KDIyLCAyNiwgNTIsIDEyKTsKCXJldHVybiBjYW52YXMudG9EYXRhVVJMKCk7Cn0KCnQuc2V0dXAoYXN5bmMgKCkgPT4gewoJaW1hZ2UgPSBhd2FpdCB0LmxvYWRJbWFnZShjcmVhdGVJbWFnZVVybCgpKTsKCWltYWdlLmNoYXJhY3RlcnMoJyAuOi09KyojJUAnKTsKCWltYWdlLmNoYXJDb2xvck1vZGUoJ2ZpeGVkJyk7CglpbWFnZS5jaGFyQ29sb3IoMjU1LCAyMzUsIDE4MCk7CglpbWFnZS5jZWxsQ29sb3JNb2RlKCdzYW1wbGVkJyk7Cn0pOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDYsIDEwLCAxOCk7CglpZiAoIWltYWdlKSByZXR1cm47Cgl0LnB1c2goKTsKCXQucm90YXRlWihNYXRoLnNpbih0LmZyYW1lQ291bnQgKiAwLjAyKSAqIDQpOwoJdC5pbWFnZShpbWFnZSwgTWF0aC5mbG9vcih0LmdyaWQuY29scyAqIDAuNTUpLCBNYXRoLmZsb29yKHQuZ3JpZC5yb3dzICogMC41NSkpOwoJdC5wb3AoKTsKfSk7CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KCdURVhUTU9ERUlNQUdFLkNSRUFUSU9OJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogTE9BREVEIElNQUdFIFNPVVJDRScsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnSW1hZ2UgY29udmVydHMgdG8gY2VsbHMuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dChgU0laRTogJHtpbWFnZSA_IGltYWdlLndpZHRoIDogMH1gLCB4LCB5KyssIDE0MCwgMjU1LCAxODApOwp9KTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />

## Extends

- [`TextmodeSource`](TextmodeSource.md)

## Accessors

| Accessor | Description |
| ------ | ------ |
| [height](TextmodeImage/accessors/height.md) | Ideal draw height in grid cells. |
| [originalHeight](TextmodeImage/accessors/originalHeight.md) | Original source height in pixels. |
| [originalWidth](TextmodeImage/accessors/originalWidth.md) | Original source width in pixels. |
| [texture](TextmodeImage/accessors/texture.md) | WebGL texture backing this source. |
| [width](TextmodeImage/accessors/width.md) | Ideal draw width in grid cells. |

## Methods

| Method | Description |
| ------ | ------ |
| [background](TextmodeImage/methods/background.md) | Set the background color used for transparent pixels. |
| [brightnessRange](TextmodeImage/methods/brightnessRange.md) | Capture only source pixels whose brightness is inside the inclusive byte range. |
| [cellColor](TextmodeImage/methods/cellColor.md) | Set the cell color used when [cellColorMode](TextmodeSource/methods/cellColorMode.md) is `'fixed'`. |
| [cellColorMode](TextmodeImage/methods/cellColorMode.md) | Set whether cell color is sampled from the source or fixed. |
| [characters](TextmodeImage/methods/characters.md) | Set the characters used for brightness mapping. |
| [charColor](TextmodeImage/methods/charColor.md) | Set the character color used when [charColorMode](TextmodeSource/methods/charColorMode.md) is `'fixed'`. |
| [charColorMode](TextmodeImage/methods/charColorMode.md) | Set whether character color is sampled from the source or fixed. |
| [charRotation](TextmodeImage/methods/charRotation.md) | Rotate generated characters. |
| [clearConversions](TextmodeImage/methods/clearConversions.md) | Clear this source's conversion stack and return to single-mode conversion. |
| [conversionMode](TextmodeImage/methods/conversionMode.md) | Select the conversion mode for this source. |
| [conversions](TextmodeImage/methods/conversions.md) | Set an ordered conversion stack for this source. |
| [dispose](TextmodeImage/methods/dispose.md) | Dispose of the resource and free associated WebGL textures. |
| [flipX](TextmodeImage/methods/flipX.md) | Flip the source horizontally. |
| [flipY](TextmodeImage/methods/flipY.md) | Flip the source vertically. |
| [invert](TextmodeImage/methods/invert.md) | Enable or disable source color inversion. |
