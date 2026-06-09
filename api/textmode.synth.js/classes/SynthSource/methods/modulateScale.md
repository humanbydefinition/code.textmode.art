---
layout: doc
editLink: true
title: modulateScale
description: Modulate scale using another source.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / modulateScale

# Method: modulateScale()

```ts
modulateScale(
   source, 
   multiple?, 
   offset?): this;
```

Modulate scale using another source.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Modulation source |
| `multiple?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Scale multiplier (default: 1.0) |
| `offset?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Offset amount (default: 1.0) |

## Returns

`this`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="modulateScale" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiA4LAoJcGx1Z2luczogW1N5bnRoUGx1Z2luXSwKfSk7Cgp0LmJwbSgxOCk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CmNvbnN0IGdseXBocyA9ICcgLjotPSsqIyVAJzsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCglkcmF3VGV4dCgnU1lOVEhTT1VSQ0UuTU9EU0NBTEUnLCB4LCB5KyssIDExMCwgMjU1LCAxNzApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgNzAsIDExMCwgMTQwKTsKCWRyYXdUZXh0KCdTT1VSQ0UgRFJJVkVOIFNDQUxFJywgeCwgeSsrLCAxMjAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdCcmlnaHRuZXNzIHpvb21zIHRoZSBmaWVsZC4nLCB4LCB5KyssIDE2MCwgMTgwLCAyMTApOwoJZHJhd1RleHQoJ05lc3RlZCByaW5ncyBicmVhdGhlIHNsb3dseS4nLCB4LCB5KyssIDE2MCwgMTgwLCAyMTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgNzAsIDExMCwgMTQwKTsKCWRyYXdUZXh0KCdTZXBhcmF0ZSBhbmltYXRlZCBpbmsgYW5kIHBhcGVyLicsIHgsIHkrKywgMTUwLCAyNTUsIDE5MCk7Cn0pOwoKY29uc3QgaW5rID0gb3NjKDUsIDAuMDE4LCAxLjEpLmthbGVpZCg0KS5jb2xvcigwLjQ1LCAwLjcyLCAxLjApLm1vZHVsYXRlKG5vaXNlKDIuMiwgMC4wMTgpLCAwLjAyNSk7CmNvbnN0IHBhcGVyID0gcGxhc21hKDMuNiwgMC4wMjgsIDAuMSwgMS4wNSkuY29sb3IoMC4wMywgMC4wOCwgMC4xOCkubW9kdWxhdGVTY2FsZShub2lzZSgyLjAsIDAuMDE1KSwgMC4yMiwgMC45NSk7Cgp0LmxheWVycy5iYXNlLnN5bnRoKAoJb3NjKDksIDAuMDIsIDEuNCkKCQkubW9kdWxhdGVTY2FsZShub2lzZSgyLjQsIDAuMDE4KSwgWzAuNzUsIDEuMjVdLmZhc3QoMC4xMikuZWFzZSgnZWFzZUluT3V0U2luZScpLCAwLjkpCgkJLmthbGVpZCg2KQoJCS5jb2xvcigwLjM1LCAwLjgsIDEuMCkKCQkub3ZlcmxheShwbGFzbWEoMywgMC4wMTgpLmNvbG9yKDEuMCwgMC4zOCwgMC42MiksIDAuMjIpCgkJLmNvbnRyYXN0KDEuMTYpCgkJLmNoYXJNYXAoZ2x5cGhzKQoJCS5jaGFyQ29sb3IoaW5rKQoJCS5jZWxsQ29sb3IocGFwZXIpCik7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
