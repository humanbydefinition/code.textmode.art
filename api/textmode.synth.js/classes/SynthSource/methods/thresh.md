---
layout: doc
editLink: true
title: thresh
description: Apply hard threshold.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-08
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / thresh

# Method: thresh()

```ts
thresh(threshold?, tolerance?): this;
```

Apply hard threshold.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threshold?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Threshold value (default: 0.5) |
| `tolerance?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Tolerance range (default: 0.04) |

## Returns

`this`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="thresh" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KGBTWU5USFNPVVJDRS5USFJFU0hgLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KGBDT05DRVBUOiBUSFJFU0hPTEQgRklMVEVSYCwgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KGBCaW5hcml6ZXMgY2FudmFzIHRvIGJsYWNrL3doaXRlLmAsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dChgU3BsaXRzIHZhbHVlcyBhdCBwaXZvdCBwb2ludC5gLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KGBQaXZvdDogRWFzZWQgKDAuMyB0byAwLjcpYCwgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKfSk7Cgp0LmxheWVycy5iYXNlLnN5bnRoKG5vaXNlKDYpLnRocmVzaChbMC4zLCAwLjddLmVhc2UoJ2Vhc2VJbk91dFNpbmUnKSkpOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
