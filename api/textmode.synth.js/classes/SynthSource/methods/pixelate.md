---
layout: doc
editLink: true
title: pixelate
description: Pixelate the output.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-08
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / pixelate

# Method: pixelate()

```ts
pixelate(pixelX?, pixelY?): this;
```

Pixelate the output.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pixelX?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Pixel size in X (default: 20.0) |
| `pixelY?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Pixel size in Y (default: 20.0) |

## Returns

`this`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="pixelate" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KGBTWU5USFNPVVJDRS5QSVhFTEFURWAsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoYENPTkNFUFQ6IFJFU09MVVRJT04gUElYRUxBVElPTmAsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dChgU25hcHMgY29vcmRpbmF0ZXMgaW50byBncmlkIHN0ZXBzLmAsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dChgQ3JlYXRlcyByZXRybyBwaXhlbGF0ZWQgc3R5bGluZy5gLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KGBHcmlkOiBFYXNlZCAoOHg4IHRvIDY0eDY0KWAsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7Cn0pOwoKdC5sYXllcnMuYmFzZS5zeW50aChwbGFzbWEoOCwgMC41KS5waXhlbGF0ZShbOCwgNjRdLmVhc2UoJ2Vhc2VJbk91dFF1YWQnKSkuY29sb3IoMC41LCAwLjgsIDAuMikpOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
