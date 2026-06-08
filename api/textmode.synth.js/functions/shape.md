---
layout: doc
editLink: true
title: shape
description: Generate geometric shapes (polygons).
category: Functions
api: true
kind: Function
ecosystem: textmode.js
lastModified: 2026-06-08
---

[textmode.synth.js](../index.md) / shape

# Function: shape()

```ts
function shape(
   sides?, 
   radius?, 
   smoothing?): SynthSource;
```

Generate geometric shapes (polygons).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sides?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Number of sides (default: 3) |
| `radius?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Radius of the shape (default: 0.3) |
| `smoothing?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Edge smoothing amount (default: 0.01) |

## Returns

[`SynthSource`](../classes/SynthSource.md)

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="shape" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KGBTWU5USFNPVVJDRS5TSEFQRWAsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoYENPTkNFUFQ6IFJFR1VMQVIgUE9MWUdPTmAsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dChgR2VuZXJhdGVzIGEgcmVndWxhciBjb252ZXggc2hhcGUuYCwgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KGBQYXJhbWV0ZXJzOiBzaWRlcywgc2l6ZSwgYW5kIGJsdXIuYCwgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dChgU2lkZXM6IDMtNiBFYXNlZCB8IFJlcGVhdDogM3gzYCwgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKfSk7Cgp0LmxheWVycy5iYXNlLnN5bnRoKAoJc2hhcGUoWzMsIDZdLmVhc2UoJ2Vhc2VJbk91dFF1YWQnKSwgMC40LCAwLjEpCgkJLnJlcGVhdCgzLCAzKQoJCS5yb3RhdGUodC5mcmFtZUNvdW50ICogMC4wMSkKKTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />
