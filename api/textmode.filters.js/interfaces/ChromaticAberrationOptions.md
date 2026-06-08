---
layout: doc
editLink: true
title: ChromaticAberrationOptions
description: Configuration options for the 'chromaticAberration' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-06-08
isInterface: true
---

[textmode.filters.js](../index.md) / ChromaticAberrationOptions

# Interface: ChromaticAberrationOptions

Configuration options for the `'chromaticAberration'` filter.

RGB color channel separation effect that simulates lens distortion
found in cheap cameras or creates stylized glitch aesthetics.

## Example

<TextmodeApiSandbox profile="textmode.filters.js" language="javascript" title="ChromaticAberrationOptions" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiA4LAoJcGx1Z2luczogW0ZpbHRlcnNQbHVnaW5dLAp9KTsKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKbGV0IHZpZGVvOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9Cgp0LnNldHVwKGFzeW5jICgpID0-IHsKCXZpZGVvID0gYXdhaXQgdC5sb2FkVmlkZW8oJ2h0dHBzOi8vaW50ZXJhY3RpdmUtZXhhbXBsZXMubWRuLm1vemlsbGEubmV0L21lZGlhL2NjMC12aWRlb3MvZmxvd2VyLm1wNCcpOwoJdmlkZW8ucGxheSgpOwoJdmlkZW8ubG9vcCgpOwoJdmlkZW8uY2hhcmFjdGVycygnIC46LT0rKiMlQCcpOwp9KTsKCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKSwKCQl0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzLAoJCXggPSBsZWZ0ICsgMzsKCgljb25zdCB2YWwgPSBNYXRoLnJvdW5kKDE1ICsgMTUgKiBNYXRoLnNpbih0LnNlY3MgKiAxLjUpKTsKCglkcmF3VGV4dCgnRklMVEVSU1BMVUdJTi5DSFJPTUFUSUNBQkVSUkFUSU9OJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogQ0hBTk5FTCBTRVBBUkFUSU9OJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdTZXBhcmF0ZXMgcmVkLCBncmVlbiwgYmx1ZSBjaGFubmVscy4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdBbW91bnQ6ICcgKyB2YWwgKyAncHgnLCB4LCB5KyssIDE0MCwgMjU1LCAxODApOwp9KTsKCnQuZHJhdygoKSA9PiB7CglpZiAoIXZpZGVvKSByZXR1cm47Cgljb25zdCB2YWwgPSAxNSArIDE1ICogTWF0aC5zaW4odC5zZWNzICogMS41KTsKCgl0LmxheWVycy5iYXNlLmZpbHRlcignY2hyb21hdGljQWJlcnJhdGlvbicsIHZhbCk7CgoJdC5iYWNrZ3JvdW5kKDApOwoJdC5pbWFnZSh2aWRlbyk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-amount"></a> `amount` | `number` | Offset amount in pixels. Controls how far the red and blue channels are separated from green. **Default** `5.0` |
| <a id="property-direction"></a> `direction` | \[`number`, `number`\] | Direction of the color separation as `[x, y]`. - `[1, 0]` = horizontal separation - `[0, 1]` = vertical separation - `[1, 1]` = diagonal separation The vector is normalized internally, so `[2, 0]` is the same as `[1, 0]`. **Default** `[1.0, 0.0]` |
