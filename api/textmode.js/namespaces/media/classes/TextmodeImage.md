---
layout: doc
editLink: true
title: TextmodeImage
description: Image source for textmode rendering.
category: Classes
api: true
namespace: media
kind: Class
lastModified: 2026-06-07
hasConstructor: false
---

[textmode.js](../../../index.md) / [media](../index.md) / TextmodeImage

# Class: TextmodeImage

Image source for textmode rendering.

Create one with [Textmodifier.loadImage](../../../classes/Textmodifier/methods/loadImage.md), draw it with [Textmodifier.image](../../../classes/Textmodifier/methods/image.md),
and configure conversion through inherited chainable methods.

## Example

<TextmodeApiSandbox profile="textmode.js" encoded-files="W3siaW5mbyI6Imh0bWwgaW5kZXguaHRtbCBbaGlkZGVuXSBbcmVhZG9ubHldIiwiY29kZSI6IjwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI-XG4gIDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8-XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8dGl0bGU-VGV4dG1vZGVJbWFnZTwvdGl0bGU-XG4gICAgPHN0eWxlPlxuICAgICAgaHRtbCxcbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICB9XG5cbiAgICAgIGNhbnZhcyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIDwvc3R5bGU-XG4gICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS90ZXh0bW9kZS5qc0AwLjE2LjAtYmV0YS4xL2Rpc3QvdGV4dG1vZGUudW1kLmpzXCI-PC9zY3JpcHQ-XG4gIDwvaGVhZD5cbiAgPGJvZHk-XG4gICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCIgc3JjPVwic2tldGNoLmpzXCI-PC9zY3JpcHQ-XG4gIDwvYm9keT5cbjwvaHRtbD4ifSx7ImluZm8iOiJqcyBza2V0Y2guanMgW2FjdGl2ZV0iLCJjb2RlIjoiY29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7XG5cdHBpeGVsRGVuc2l0eTogMSxcblx0d2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuXHRoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcblx0Zm9udFNpemU6IDE2LFxufSk7XG5cbmNvbnN0IGxhYmVsTGF5ZXIgPSB0LmxheWVycy5hZGQoKTtcblxubGV0IGltYWdlID0gbnVsbDtcblxuZnVuY3Rpb24gY3JlYXRlSW1hZ2VVcmwoKSB7XG5cdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHRjYW52YXMud2lkdGggPSA5Njtcblx0Y2FudmFzLmhlaWdodCA9IDY0O1xuXHRjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblx0Y29uc3QgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgOTYsIDY0KTtcblx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsICcjMGVhNWU5Jyk7XG5cdGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAnI2Y1OWUwYicpO1xuXHRjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG5cdGN0eC5maWxsUmVjdCgwLCAwLCA5NiwgNjQpO1xuXHRjdHguZmlsbFN0eWxlID0gJyMwMjA2MTcnO1xuXHRjdHguZmlsbFJlY3QoMTIsIDE4LCA3MiwgMjgpO1xuXHRjdHguZmlsbFN0eWxlID0gJyNmOGZhZmMnO1xuXHRjdHguZmlsbFJlY3QoMjIsIDI2LCA1MiwgMTIpO1xuXHRyZXR1cm4gY2FudmFzLnRvRGF0YVVSTCgpO1xufVxuXG50LnNldHVwKGFzeW5jICgpID0-IHtcblx0aW1hZ2UgPSBhd2FpdCB0LmxvYWRJbWFnZShjcmVhdGVJbWFnZVVybCgpKTtcblx0aW1hZ2UuY2hhcmFjdGVycygnIC46LT0rKiMlQCcpO1xuXHRpbWFnZS5jaGFyQ29sb3JNb2RlKCdmaXhlZCcpO1xuXHRpbWFnZS5jaGFyQ29sb3IoMjU1LCAyMzUsIDE4MCk7XG5cdGltYWdlLmNlbGxDb2xvck1vZGUoJ3NhbXBsZWQnKTtcbn0pO1xuXG5mdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7XG5cdHQucHVzaCgpO1xuXHR0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7XG5cdHQuY2hhckNvbG9yKHIsIGcsIGIpO1xuXHR0LnByaW50KHRleHQsIHgsIHkpO1xuXHR0LnBvcCgpO1xufVxuXG50LmRyYXcoKCkgPT4ge1xuXHR0LmJhY2tncm91bmQoNiwgMTAsIDE4KTtcblx0aWYgKCFpbWFnZSkgcmV0dXJuO1xuXHR0LnB1c2goKTtcblx0dC5yb3RhdGVaKE1hdGguc2luKHQuZnJhbWVDb3VudCAqIDAuMDIpICogNCk7XG5cdHQuaW1hZ2UoaW1hZ2UsIE1hdGguZmxvb3IodC5ncmlkLmNvbHMgKiAwLjU1KSwgTWF0aC5mbG9vcih0LmdyaWQucm93cyAqIDAuNTUpKTtcblx0dC5wb3AoKTtcbn0pO1xuXG5sYWJlbExheWVyLmRyYXcoKCkgPT4ge1xuXHR0LmNsZWFyKCk7XG5cdGNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpO1xuXHRjb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpO1xuXHRsZXQgeSA9IHRvcCArIDM7XG5cdGNvbnN0IHggPSBsZWZ0ICsgMztcblxuXHRkcmF3VGV4dCgnVEVYVE1PREVJTUFHRS5DUkVBVElPTicsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7XG5cdGRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7XG5cdGRyYXdUZXh0KCdDT05DRVBUOiBMT0FERUQgSU1BR0UgU09VUkNFJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTtcblx0ZHJhd1RleHQoJ0ltYWdlIGNvbnZlcnRzIHRvIGNlbGxzLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7XG5cdGRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7XG5cdGRyYXdUZXh0KGBTSVpFOiAke2ltYWdlID8gaW1hZ2Uud2lkdGggOiAwfWAsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7XG59KTtcblxudC53aW5kb3dSZXNpemVkKCgpID0-IHtcblx0dC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG59KTsifV0" />

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
