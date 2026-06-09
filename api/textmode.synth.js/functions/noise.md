---
layout: doc
editLink: true
title: noise
description: Generate Perlin noise patterns.
category: Functions
api: true
kind: Function
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.synth.js](../index.md) / noise

# Function: noise()

```ts
function noise(scale?, offset?): SynthSource;
```

Generate Perlin noise patterns.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `scale?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Scale of the noise pattern (default: 10.0) |
| `offset?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Offset in noise space (default: 0.1) |

## Returns

[`SynthSource`](../classes/SynthSource.md)

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="noise" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KGBTWU5USFNPVVJDRS5OT0lTRWAsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoYENPTkNFUFQ6IFBFUkxJTiBOT0lTRSBGSUVMRGAsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dChgR2VuZXJhdGVzIG9yZ2FuaWMsIGZsdWlkLWxpa2Ugbm9pc2UuYCwgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KGBTbW9vdGggcHNldWRvLXJhbmRvbSBzcGF0aWFsIGZpZWxkLmAsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoYE9jdGF2ZXM6IDggfCBGYWxsb2ZmOiAwLjJgLCB4LCB5KyssIDE0MCwgMjU1LCAxODApOwp9KTsKCnQubGF5ZXJzLmJhc2Uuc3ludGgobm9pc2UoOCwgMC4yKS5jb2xvcmFtYSgwLjUpLnBpeGVsYXRlKFsxNiwgMzJdLmVhc2UoJ2Vhc2VJbk91dFNpbmUnKSkpOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
