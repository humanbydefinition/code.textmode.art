---
layout: doc
editLink: true
title: voronoi
description: Generate voronoi patterns.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-08
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / voronoi

# Method: voronoi()

```ts
voronoi(
   scale?, 
   speed?, 
   blending?): this;
```

Generate voronoi patterns.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `scale?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Scale of voronoi cells (default: 5.0) |
| `speed?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Animation speed (default: 0.3) |
| `blending?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Blending between cell regions (default: 0.3) |

## Returns

`this`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="voronoi" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KGBTWU5USFNPVVJDRS5WT1JPTk9JYCwgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dChgQ09OQ0VQVDogVk9ST05PSSBDRUxMVUxBUiBGSUVMRGAsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dChgRHluYW1pYyBjZWxsIGRpc3RhbmNlIG1hcHBpbmcuYCwgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KGBPcmdhbmljIG5vaXNlLW1vZHVsYXRlZCBjcnlzdGFsIGNlbGxzLmAsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoYENlbGxzOiA1LTE1IEVhc2VkIHwgTW9kdWxhdGU6IG5vaXNlYCwgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKfSk7Cgp0LmxheWVycy5iYXNlLnN5bnRoKHZvcm9ub2koWzUsIDE1XS5lYXNlKCdlYXNlSW5PdXRDdWJpYycpLCAwLjE1LCAwLjUpLm1vZHVsYXRlKG5vaXNlKDQpLCAwLjIpLmNvbG9yYW1hKDAuMSkpOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
