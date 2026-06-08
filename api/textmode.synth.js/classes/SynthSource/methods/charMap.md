---
layout: doc
editLink: true
title: charMap
description: Map character indices to a specific character set. This is the primary textmode-native way to define which characters to use.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-08
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / charMap

# Method: charMap()

```ts
charMap(chars): this;
```

Map character indices to a specific character set.
This is the primary textmode-native way to define which characters to use.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chars` | `string` | A string of characters to map indices to |

## Returns

`this`

The SynthSource for chaining

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="charMap" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KCdTWU5USFNPVVJDRS5DSEFSTUFQJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogQ1VTVE9NIEdMWVBIIFJFLU1BUFBJTkcnLCB4LCB5KyssIDEwMCwgMjIwLCAyNTUpOwoJZHJhd1RleHQoJ01hcHMgbHVtaW5hbmNlIHRvIGN1c3RvbSBjaGFyYWN0ZXIgc2V0LicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnQ3JlYXRlcyBzdHlsZWQgYXNjaWkvZGlnaXRhbCBzY3JlZW5zLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NoYXJNYXA6IEJpbmFyeSBjb2RlIHNjcmVlbiAiMDEgIicsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7Cn0pOwoKdC5sYXllcnMuYmFzZS5zeW50aChub2lzZSgxMCwgMC4xNSkuY29sb3IoMC4yLCAwLjksIDAuNCkuY2VsbENvbG9yKDAuMDIsIDAuMDUsIDAuMDIpLmNoYXJNYXAoJzAxICcpKTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />
