---
layout: doc
editLink: false
title: TextmodeImage
description: Image source for textmode rendering.
category: Classes
api: true
namespace: media
kind: Class
lastModified: 2026-08-22
hasConstructor: false
---

[textmode.js](../../../index.md) / [media](../index.md) / TextmodeImage

# Class: TextmodeImage

Image source for textmode rendering.

Create one with [Textmodifier.loadImage](../../../classes/Textmodifier/methods/loadImage.md), draw it with [Textmodifier.image](../../../classes/Textmodifier/methods/image.md),
and configure conversion through inherited chainable methods.

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="TextmodeImage" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CmxldCBpbWFnZSA9IG51bGw7CgpmdW5jdGlvbiBjcmVhdGVSZWFjdGlvbkNhbnZhcygpIHsKCWNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpOwoJY2FudmFzLndpZHRoID0gNjQ7CgljYW52YXMuaGVpZ2h0ID0gNDg7Cgljb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTsKCgljb25zdCBpbWdEYXRhID0gY3R4LmNyZWF0ZUltYWdlRGF0YSg2NCwgNDgpOwoJY29uc3QgZGF0YSA9IGltZ0RhdGEuZGF0YTsKCglmb3IgKGxldCB5ID0gMDsgeSA8IDQ4OyB5KyspIHsKCQlmb3IgKGxldCB4ID0gMDsgeCA8IDY0OyB4KyspIHsKCQkJY29uc3QgaWR4ID0gKHkgKiA2NCArIHgpICogNDsKCQkJY29uc3QgdiA9IE1hdGguc2luKHggKiAwLjE1KSAqIE1hdGguY29zKHkgKiAwLjE1KSArIE1hdGguc2luKHggKiAwLjMgKyB5ICogMC4yKTsKCQkJY29uc3Qgbm9ybSA9ICh2ICsgMikgLyA0OwoKCQkJZGF0YVtpZHhdID0gTWF0aC5mbG9vcigxNSArIG5vcm0gKiAyNDApOwoJCQlkYXRhW2lkeCArIDFdID0gTWF0aC5mbG9vcigyMyArIG5vcm0gKiAxNjApOwoJCQlkYXRhW2lkeCArIDJdID0gTWF0aC5mbG9vcig0MiArIG5vcm0gKiAyMTApOwoJCQlkYXRhW2lkeCArIDNdID0gMjU1OwoJCX0KCX0KCWN0eC5wdXRJbWFnZURhdGEoaW1nRGF0YSwgMCwgMCk7CglyZXR1cm4gY2FudmFzLnRvRGF0YVVSTCgpOwp9Cgp0LnNldHVwKGFzeW5jICgpID0-IHsKCWltYWdlID0gYXdhaXQgdC5sb2FkSW1hZ2UoY3JlYXRlUmVhY3Rpb25DYW52YXMoKSk7CglpbWFnZS5jaGFyYWN0ZXJzKCcgLjotPSsqIyVAJyk7CglpbWFnZS5jZWxsQ29sb3JNb2RlKCdzYW1wbGVkJyk7Cn0pOwoKdC5kcmF3KCgpID0-IHsKCXQuYmFja2dyb3VuZCgxNSwgMjMsIDQyKTsKCWlmICghaW1hZ2UpIHJldHVybjsKCgl0LnB1c2goKTsKCXQucm90YXRlWihNYXRoLnNpbih0LmZyYW1lQ291bnQgKiAwLjAzKSAqIDY0KTsKCXQuaW1hZ2UoaW1hZ2UsIE1hdGguZmxvb3IodC5ncmlkLmNvbHMgKiAwLjYpLCBNYXRoLmZsb29yKHQuZ3JpZC5yb3dzICogMC42KSk7Cgl0LnBvcCgpOwp9KTsKCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CgoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcigxMjAsIDI0MCwgMTgwKTsKCXQucHJpbnQoJ1RFWFRNT0RFSU1BR0UuQ1JFQVRJT04nLCB4LCB5KyspOwoJdC5jaGFyQ29sb3IoNzAsIDEwMCwgMTQwKTsKCXQucHJpbnQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKyk7Cgl0LmNoYXJDb2xvcigxNDAsIDIxMCwgMjU1KTsKCXQucHJpbnQoJ0NPTkNFUFQ6IFJFQUNUSU9OIENBTlYgQ09OVkVSVEVSJywgeCwgeSsrKTsKCXQuY2hhckNvbG9yKDE0MCwgMTYwLCAxOTApOwoJdC5wcmludCgnTG9hZHMgSFRNTCBjYW52YXMgZGF0YSBpbnRvIGltYWdlLicsIHgsIHkrKyk7Cgl0LnByaW50KCdDb252ZXJ0cyBzb3VyY2UgcGl4ZWxzIGludG8gY2VsbHMuJywgeCwgeSsrKTsKCXQuY2hhckNvbG9yKDcwLCAxMDAsIDE0MCk7Cgl0LnByaW50KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyspOwoJdC5jaGFyQ29sb3IoMjQ1LCAxNTgsIDExKTsKCXQucHJpbnQoYElNQUdFIFNJWkU6ICR7aW1hZ2UgPyBpbWFnZS53aWR0aCA6IDB9eCR7aW1hZ2UgPyBpbWFnZS5oZWlnaHQgOiAwfSBQWGAsIHgsIHkrKyk7Cgl0LnBvcCgpOwp9KTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />

## Extends

- [`TextmodeSource`](TextmodeSource.md)

## Character & color mapping

| Method | Description |
| ------ | ------ |
| [background](TextmodeImage/methods/background.md) | Set the background color used for transparent pixels. |
| [cellColor](TextmodeImage/methods/cellColor.md) | Set the cell color used when [cellColorMode](TextmodeSource/methods/cellColorMode.md) is `'fixed'`. |
| [cellColorMode](TextmodeImage/methods/cellColorMode.md) | Set whether cell color is sampled from the source or fixed. |
| [characters](TextmodeImage/methods/characters.md) | Set the characters used for brightness mapping. |
| [charColor](TextmodeImage/methods/charColor.md) | Set the character color used when [charColorMode](TextmodeSource/methods/charColorMode.md) is `'fixed'`. |
| [charColorMode](TextmodeImage/methods/charColorMode.md) | Set whether character color is sampled from the source or fixed. |

## Conversion

| Method | Description |
| ------ | ------ |
| [brightnessRange](TextmodeImage/methods/brightnessRange.md) | Capture only source pixels whose brightness is inside the inclusive byte range. |
| [clearConversions](TextmodeImage/methods/clearConversions.md) | Clear this source's conversion stack and return to single-mode conversion. |
| [conversionMode](TextmodeImage/methods/conversionMode.md) | Select the conversion mode for this source. |
| [conversions](TextmodeImage/methods/conversions.md) | Set an ordered conversion stack for this source. |

## Resource lifecycle

| Method | Description |
| ------ | ------ |
| [dispose](TextmodeImage/methods/dispose.md) | Dispose of the resource and free associated WebGL textures. |

## Source dimensions

| Accessor | Description |
| ------ | ------ |
| [height](TextmodeImage/accessors/height.md) | Ideal draw height in grid cells. |
| [originalHeight](TextmodeImage/accessors/originalHeight.md) | Original source height in pixels. |
| [originalWidth](TextmodeImage/accessors/originalWidth.md) | Original source width in pixels. |
| [texture](TextmodeImage/accessors/texture.md) | WebGL texture backing this source. |
| [width](TextmodeImage/accessors/width.md) | Ideal draw width in grid cells. |

## Source transforms

| Method | Description |
| ------ | ------ |
| [charRotation](TextmodeImage/methods/charRotation.md) | Rotate generated characters. |
| [flipX](TextmodeImage/methods/flipX.md) | Flip the source horizontally. |
| [flipY](TextmodeImage/methods/flipY.md) | Flip the source vertically. |
| [invert](TextmodeImage/methods/invert.md) | Enable or disable source color inversion. |
