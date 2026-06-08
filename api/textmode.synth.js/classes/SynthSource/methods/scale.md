---
layout: doc
editLink: true
title: scale
description: Scale coordinates.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-08
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / scale

# Method: scale()

```ts
scale(
   amount?, 
   xMult?, 
   yMult?, 
   offsetX?, 
   offsetY?): this;
```

Scale coordinates.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Scale amount (default: 1.5) |
| `xMult?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | X axis multiplier (default: 1.0) |
| `yMult?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Y axis multiplier (default: 1.0) |
| `offsetX?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | X offset (default: 0.5) |
| `offsetY?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Y offset (default: 0.5) |

## Returns

`this`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="scale" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KGBTWU5USFNPVVJDRS5TQ0FMRWAsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoYENPTkNFUFQ6IFNQQVRJQUwgWk9PTUlOR2AsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dChgU2NhbGVzIGNvb3JkaW5hdGUgZmllbGQgc2l6ZS5gLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoYENyZWF0ZXMgem9vbWluZy9wdWxzaW5nIHBhdHRlcm5zLmAsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoYFNjYWxlOiBFYXNlZCAoMC41IHRvIDMuMClgLCB4LCB5KyssIDE0MCwgMjU1LCAxODApOwp9KTsKCnQubGF5ZXJzLmJhc2Uuc3ludGgob3NjKDEwLCAwLjA1LCAwLjUpLnNjYWxlKFswLjUsIDMuMF0uZWFzZSgnZWFzZUluT3V0Q3ViaWMnKSkuY29sb3IoMC45LCAwLjIsIDAuNSkpOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
