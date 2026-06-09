---
layout: doc
editLink: true
title: osc
description: Generate oscillating patterns using sine waves.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / osc

# Method: osc()

```ts
osc(
   frequency?, 
   sync?, 
   offset?): this;
```

Generate oscillating patterns using sine waves.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `frequency?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Frequency of the oscillation (default: 60.0) |
| `sync?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Synchronization offset (default: 0.1) |
| `offset?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Phase offset (default: 0.0) |

## Returns

`this`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="osc" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KGBTWU5USFNPVVJDRS5PU0NgLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KGBDT05DRVBUOiBTSU5FIFdBVkUgT1NDSUxMQVRPUmAsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dChgR2VuZXJhdGVzIHBlcmlvZGljIGJhbmQgcGF0dGVybnMuYCwgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KGBQYXJhbXM6IGZyZXF1ZW5jeSwgc3luYywgb2Zmc2V0LmAsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoYEZyZXE6IDEyIHwgU3luYzogMC4xNWAsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7Cn0pOwoKdC5sYXllcnMuYmFzZS5zeW50aCgKCW9zYygxMiwgMC4xNSwgWzAuNSwgMi4wXS5lYXNlKCdlYXNlSW5PdXRRdWFkJykpLmthbGVpZChbMywgN10uZWFzZSgnZWFzZUluT3V0Q3ViaWMnKSkuY29sb3IoMC45LCAwLjI1LCAxLjIpCik7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
