---
layout: doc
editLink: true
title: rotate
description: Rotate coordinates.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-08
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / rotate

# Method: rotate()

```ts
rotate(angle?, speed?): this;
```

Rotate coordinates.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `angle?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Rotation angle in radians (default: 10.0) |
| `speed?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Rotation speed multiplier (default: 0.0) |

## Returns

`this`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="rotate" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KCdTWU5USFNPVVJDRS5ST1RBVEUnLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBDT09SRElOQVRFIFJPVEFUSU9OJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdSb3RhdGVzIHNwYWNlIGJ5IGFuZ2xlIGFuZCBzcGVlZC4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJ0NyZWF0ZXMgc3Bpbm5pbmcgdmlzdWFsIG1vdmVtZW50cy4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdSb3RhdGU6IENvbnRpbnVvdXMgc3BpbiAoc3BlZWQgMS4wKScsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7Cn0pOwoKdC5sYXllcnMuYmFzZS5zeW50aCgKCW9zYygxOCwgMC4xKS5jb2xvcigwLjIsIDAuNiwgMS4wKS5yb3RhdGUoMC4wLCAxLjApLmNoYXJNYXAoJyAuOi09KyojJUAnKS5jZWxsQ29sb3IoMC4wNSwgMC4wNSwgMC4xNSkKKTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />
