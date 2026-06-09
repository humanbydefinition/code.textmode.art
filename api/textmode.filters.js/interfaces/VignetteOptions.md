---
layout: doc
editLink: true
title: VignetteOptions
description: Configuration options for the 'vignette' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-06-09
isInterface: true
---

[textmode.filters.js](../index.md) / VignetteOptions

# Interface: VignetteOptions

Configuration options for the `'vignette'` filter.

Darkens the edges and corners of the image, drawing focus to the center.
Useful for creating a cinematic look or highlighting central content.

## Example

<TextmodeApiSandbox profile="textmode.filters.js" language="javascript" title="VignetteOptions" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiA4LAoJcGx1Z2luczogW0ZpbHRlcnNQbHVnaW5dLAp9KTsKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKbGV0IHZpZGVvOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9Cgp0LnNldHVwKGFzeW5jICgpID0-IHsKCXZpZGVvID0gYXdhaXQgdC5sb2FkVmlkZW8oJ2h0dHBzOi8vaW50ZXJhY3RpdmUtZXhhbXBsZXMubWRuLm1vemlsbGEubmV0L21lZGlhL2NjMC12aWRlb3MvZmxvd2VyLm1wNCcpOwoJdmlkZW8ucGxheSgpOwoJdmlkZW8ubG9vcCgpOwoJdmlkZW8uY2hhcmFjdGVycygnIC46LT0rKiMlQCcpOwp9KTsKCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKSwKCQl0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzLAoJCXggPSBsZWZ0ICsgMzsKCgljb25zdCBhbXQgPSAoMC42ICsgMC4zICogTWF0aC5zaW4odC5zZWNzICogMS41KSkudG9GaXhlZCgyKTsKCWNvbnN0IHNvZnQgPSAoMC41ICsgMC4yICogTWF0aC5jb3ModC5zZWNzICogMS4wKSkudG9GaXhlZCgyKTsKCglkcmF3VGV4dCgnRklMVEVSU1BMVUdJTi5WSUdORVRURScsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IEVER0UgU0hBRE9XSU5HJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdBcHBsaWVzIHNoYWRpbmcgdG8gZnJhbWUgcGVyaW1ldGVyLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0Ftb3VudDogJyArIGFtdCwgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKCWRyYXdUZXh0KCdTb2Z0bmVzczogJyArIHNvZnQsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7Cn0pOwoKdC5kcmF3KCgpID0-IHsKCWlmICghdmlkZW8pIHJldHVybjsKCWNvbnN0IGFtdCA9IDAuNiArIDAuMyAqIE1hdGguc2luKHQuc2VjcyAqIDEuNSk7Cgljb25zdCBzb2Z0ID0gMC41ICsgMC4yICogTWF0aC5jb3ModC5zZWNzICogMS4wKTsKCgl0LmxheWVycy5iYXNlLmZpbHRlcigndmlnbmV0dGUnLCB7CgkJYW1vdW50OiBhbXQsCgkJc29mdG5lc3M6IHNvZnQsCgkJcm91bmRuZXNzOiAwLjUsCgl9KTsKCgl0LmJhY2tncm91bmQoMCk7Cgl0LmltYWdlKHZpZGVvKTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-amount"></a> `amount` | `number` | Intensity of the darkening effect. - `0.0` = no vignette - `0.5` = moderate vignette (default) - `1.0` = very dark edges **Default** `0.5` |
| <a id="property-softness"></a> `softness` | `number` | Falloff gradient softness. - `0.0` = hard edge (sharp transition) - `0.5` = moderate gradient (default) - `1.0` = very soft, gradual falloff **Default** `0.5` |
| <a id="property-roundness"></a> `roundness` | `number` | Shape of the vignette. - `0.0` = rectangular (follows screen edges) - `0.5` = rounded rectangle (default) - `1.0` = circular/elliptical **Default** `0.5` |
