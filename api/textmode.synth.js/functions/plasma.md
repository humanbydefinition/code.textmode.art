---
layout: doc
editLink: true
title: plasma
description: Generate plasma-like sine field patterns.
category: Functions
api: true
kind: Function
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.synth.js](../index.md) / plasma

# Function: plasma()

```ts
function plasma(
   scale?, 
   speed?, 
   phase?, 
   contrast?): SynthSource;
```

Generate plasma-like sine field patterns.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `scale?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Spatial scale of the plasma (default: 10.0) |
| `speed?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Animation speed (default: 0.5) |
| `phase?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Phase offset (default: 0.0) |
| `contrast?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Contrast adjustment (default: 1.0) |

## Returns

[`SynthSource`](../classes/SynthSource.md)

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="plasma" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KGBTWU5USFNPVVJDRS5QTEFTTUFgLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KGBDT05DRVBUOiBQTEFTTUEgV0FWRUZJRUxEYCwgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KGBHZW5lcmF0ZXMgY29tcGxleCByaXBwbGUgZmllbGRzLmAsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dChgU3VwZXJpbXBvc2VzIG11bHRpcGxlIHNpbmUgd2F2ZXMuYCwgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dChgRnJlcTogNiB8IFNjYWxlOiAwLjRgLCB4LCB5KyssIDE0MCwgMjU1LCAxODApOwp9KTsKCnQubGF5ZXJzLmJhc2Uuc3ludGgocGxhc21hKDYsIDAuNCwgMC44LCAxLjUpLmthbGVpZChbMywgNl0uZWFzZSgnZWFzZUluT3V0RXhwbycpKS5jb250cmFzdCgxLjIpLmJyaWdodG5lc3MoMC4xKSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
