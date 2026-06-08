---
layout: doc
editLink: true
title: ScanlinesOptions
description: Configuration options for the 'scanlines' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-06-08
isInterface: true
---

[textmode.filters.js](../index.md) / ScanlinesOptions

# Interface: ScanlinesOptions

Configuration options for the `'scanlines'` filter.

A standalone scanline effect that adds horizontal lines to the image
to simulate a CRT display or old monitor. More customizable than
the scanlines in crtMattias.

## Example

<TextmodeApiSandbox profile="textmode.filters.js" language="javascript" title="ScanlinesOptions" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKCXBsdWdpbnM6IFtGaWx0ZXJzUGx1Z2luXSwKfSk7CmNvbnN0IGxhYmVsTGF5ZXIgPSB0LmxheWVycy5hZGQoKTsKCmxldCB2aWRlbzsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKdC5zZXR1cChhc3luYyAoKSA9PiB7Cgl2aWRlbyA9IGF3YWl0IHQubG9hZFZpZGVvKCdodHRwczovL2ludGVyYWN0aXZlLWV4YW1wbGVzLm1kbi5tb3ppbGxhLm5ldC9tZWRpYS9jYzAtdmlkZW9zL2Zsb3dlci5tcDQnKTsKCXZpZGVvLnBsYXkoKTsKCXZpZGVvLmxvb3AoKTsKCXZpZGVvLmNoYXJhY3RlcnMoJyAuOi09KyojJUAnKTsKfSk7CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMiksCgkJdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMywKCQl4ID0gbGVmdCArIDM7CgoJY29uc3QgaW50ZW5zaXR5ID0gKDAuNSArIDAuMyAqIE1hdGguc2luKHQuc2VjcyAqIDEuNSkpLnRvRml4ZWQoMik7CgoJZHJhd1RleHQoJ0ZJTFRFUlNQTFVHSU4uU0NBTkxJTkVTJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogRElTUExBWSBTQ0FOIEdSSUQnLCB4LCB5KyssIDEwMCwgMjIwLCAyNTUpOwoJZHJhd1RleHQoJ092ZXJsYXlzIGRyaWZ0aW5nIHJhc3RlciBsaW5lcy4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdMaW5lIENvdW50OiAzMDAnLCB4LCB5KyssIDE0MCwgMjU1LCAxODApOwoJZHJhd1RleHQoJ0ludGVuc2l0eTogJyArIGludGVuc2l0eSwgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKfSk7Cgp0LmRyYXcoKCkgPT4gewoJaWYgKCF2aWRlbykgcmV0dXJuOwoJY29uc3QgaW50ZW5zaXR5ID0gMC41ICsgMC4zICogTWF0aC5zaW4odC5zZWNzICogMS41KTsKCgl0LmxheWVycy5iYXNlLmZpbHRlcignc2NhbmxpbmVzJywgewoJCWNvdW50OiAzMDAsCgkJaW50ZW5zaXR5OiBpbnRlbnNpdHksCgkJc3BlZWQ6IDEuMCwKCQl0aW1lOiB0LnNlY3MsCgl9KTsKCgl0LmJhY2tncm91bmQoMCk7Cgl0LmltYWdlKHZpZGVvKTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-count"></a> `count` | `number` | Number of scanlines across the image height. Higher values create finer, more dense lines. Minimum value: `10.0` **Default** `300.0` |
| <a id="property-linewidth"></a> `lineWidth` | `number` | Width of the lines relative to the spacing. - `0.0` = very thin lines (mostly transparent) - `0.5` = equal line and gap width - `1.0` = solid (no gaps) **Default** `0.5` |
| <a id="property-intensity"></a> `intensity` | `number` | Opacity/darkness of the scanlines. - `0.0` = invisible lines - `0.75` = clearly visible (default) - `1.0` = maximum darkness (solid black lines) **Default** `0.75` |
| <a id="property-speed"></a> `speed` | `number` | Scrolling speed of the lines. - `0.0` = static lines - `1.0` = normal scrolling speed - Higher values = faster scrolling **Default** `1.0` |
| <a id="property-time"></a> `time` | `number` | Animation time parameter. Increment this value each frame to animate the scrolling effect. **Default** `0.0` |
