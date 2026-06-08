---
layout: doc
editLink: true
title: BloomOptions
description: Configuration options for the 'bloom' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-06-08
isInterface: true
---

[textmode.filters.js](../index.md) / BloomOptions

# Interface: BloomOptions

Configuration options for the `'bloom'` filter.

Creates a glow effect around bright areas of the image. Pixels above
the brightness threshold emit a soft glow that spreads outward.
Perfect for creating neon, glowing text, or dreamy effects.

## Example

<TextmodeApiSandbox profile="textmode.filters.js" language="javascript" title="BloomOptions" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiA4LAoJcGx1Z2luczogW0ZpbHRlcnNQbHVnaW5dLAp9KTsKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKbGV0IHZpZGVvOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9Cgp0LnNldHVwKGFzeW5jICgpID0-IHsKCXZpZGVvID0gYXdhaXQgdC5sb2FkVmlkZW8oJ2h0dHBzOi8vaW50ZXJhY3RpdmUtZXhhbXBsZXMubWRuLm1vemlsbGEubmV0L21lZGlhL2NjMC12aWRlb3MvZmxvd2VyLm1wNCcpOwoJdmlkZW8ucGxheSgpOwoJdmlkZW8ubG9vcCgpOwoJdmlkZW8uY2hhcmFjdGVycygnIC46LT0rKiMlQCcpOwp9KTsKCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKSwKCQl0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzLAoJCXggPSBsZWZ0ICsgMzsKCgljb25zdCB0aCA9ICgwLjQgKyAwLjMgKiBNYXRoLnNpbih0LnNlY3MgKiAxLjUpKS50b0ZpeGVkKDIpOwoJY29uc3QgdmFsID0gKDEuNSArIDEuMCAqIE1hdGguY29zKHQuc2VjcyAqIDEuMCkpLnRvRml4ZWQoMik7CgoJZHJhd1RleHQoJ0ZJTFRFUlNQTFVHSU4uQkxPT00nLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBHTE9XIEhJR0hMSUdIVFMnLCB4LCB5KyssIDEwMCwgMjIwLCAyNTUpOwoJZHJhd1RleHQoJ0dsb3dzIGJyaWdodCByZWdpb25zIGluIHRoZSBzY2VuZS4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdUaHJlc2hvbGQ6ICcgKyB0aCwgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKCWRyYXdUZXh0KCdJbnRlbnNpdHk6ICcgKyB2YWwsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7Cn0pOwoKdC5kcmF3KCgpID0-IHsKCWlmICghdmlkZW8pIHJldHVybjsKCWNvbnN0IHRoID0gMC40ICsgMC4zICogTWF0aC5zaW4odC5zZWNzICogMS41KTsKCWNvbnN0IHZhbCA9IDEuNSArIDEuMCAqIE1hdGguY29zKHQuc2VjcyAqIDEuMCk7CgoJdC5sYXllcnMuYmFzZS5maWx0ZXIoJ2Jsb29tJywgewoJCXRocmVzaG9sZDogdGgsCgkJaW50ZW5zaXR5OiB2YWwsCgkJcmFkaXVzOiA0LjAsCgl9KTsKCgl0LmJhY2tncm91bmQoMCk7Cgl0LmltYWdlKHZpZGVvKTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-threshold"></a> `threshold` | `number` | Brightness level above which pixels will glow. - `0.0` = everything glows - `0.5` = mid-brightness and above glows (default) - `1.0` = only the brightest pixels glow **Default** `0.5` |
| <a id="property-intensity"></a> `intensity` | `number` | Strength of the glow effect. - `0.0` = no visible glow - `1.0` = normal glow intensity (default) - `2.0+` = very bright, intense glow **Default** `1.0` |
| <a id="property-radius"></a> `radius` | `number` | Size of the glow spread in pixels. Larger values create a wider, softer glow. - `1.0` = tight glow - `4.0` = moderate spread (default) - `10.0+` = wide, diffuse glow **Default** `4.0` |
