---
layout: doc
editLink: true
title: moire
description: Generate moire interference patterns.
category: Functions
api: true
kind: Function
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.synth.js](../index.md) / moire

# Function: moire()

```ts
function moire(
   freqA?, 
   freqB?, 
   angleA?, 
   angleB?, 
   speed?, 
   phase?): SynthSource;
```

Generate moire interference patterns.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `freqA?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Frequency of first grating (default: 20.0) |
| `freqB?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Frequency of second grating (default: 21.0) |
| `angleA?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Angle of first grating in radians (default: 0.0) |
| `angleB?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Angle of second grating in radians (default: 1.5708) |
| `speed?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Animation speed (default: 0.1) |
| `phase?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Phase offset (default: 0.0) |

## Returns

[`SynthSource`](../classes/SynthSource.md)

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="moire" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KGBTWU5USFNPVVJDRS5NT0lSRWAsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoYENPTkNFUFQ6IE1PSVJFIElOVEVSRkVSRU5DRWAsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dChgQ3JlYXRlcyBvcHRpY2FsIGludGVyZmVyZW5jZSBncmlkcy5gLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoYENvbWJpbmVzIHJvdGF0aW5nIGhpZ2gtZnJlcXVlbmN5IHdhdmVzLmAsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoYEZyZXE6IDE1IHwgU2NhbGU6IDAuMSB8IE1vZDogTXVsdGAsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7Cn0pOwoKdC5sYXllcnMuYmFzZS5zeW50aCgKCW1vaXJlKDE1LCAwLjEsIDAuOCkKCQkubXVsdChvc2MoOCwgLTAuMDUsIDEuMikucm90YXRlKDEuNSkpCgkJLmNvbG9yKDAuMiwgMC43LCAxLjApCik7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
