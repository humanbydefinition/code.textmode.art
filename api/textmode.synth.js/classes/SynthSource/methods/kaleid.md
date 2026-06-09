---
layout: doc
editLink: true
title: kaleid
description: Apply kaleidoscope effect.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / kaleid

# Method: kaleid()

```ts
kaleid(nSides?): this;
```

Apply kaleidoscope effect.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `nSides?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Number of kaleidoscope sides (default: 4.0) |

## Returns

`this`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="kaleid" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KGBTWU5USFNPVVJDRS5LQUxFSURgLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KGBDT05DRVBUOiBSQURJQUwgS0FMRUlET1NDT1BFYCwgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KGBNaXJyb3JzIGNvb3JkaW5hdGVzIHJhZGlhbGx5LmAsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dChgQ3JlYXRlcyBpbnRyaWNhdGUgc3ltbWV0cmljIHNoYXBlcy5gLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KGBTZWdtZW50czogRWFzZWQgKDMgdG8gOClgLCB4LCB5KyssIDE0MCwgMjU1LCAxODApOwp9KTsKCnQubGF5ZXJzLmJhc2Uuc3ludGgob3NjKDEwLCAwLjEsIDAuOCkua2FsZWlkKFszLCA4XS5lYXNlKCdlYXNlSW5PdXRRdWFkJykpLmNvbG9yKDAuOSwgMC4xLCAwLjQpKTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />
