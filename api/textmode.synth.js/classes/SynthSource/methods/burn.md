---
layout: doc
editLink: true
title: burn
description: Color burn blend with another source.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-08
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / burn

# Method: burn()

```ts
burn(source, amount?): this;
```

Color burn blend with another source.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Source to burn |
| `amount?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Blend amount (default: 1.0) |

## Returns

`this`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="burn" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KGBTWU5USFNPVVJDRS5CVVJOYCwgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dChgQ09OQ0VQVDogQ09MT1IgQlVSTklOR2AsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dChgQnVybnMgY29sb3JzIGRvd24gdG8gYmxhY2suYCwgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KGBBZ2dyZXNzaXZlbHkgZGFya2VucyBjb2xvciBzcGFjZXMuYCwgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dChgQmxlbmQ6IEJ1cm5gLCB4LCB5KyssIDE0MCwgMjU1LCAxODApOwp9KTsKCnQubGF5ZXJzLmJhc2Uuc3ludGgobm9pc2UoNikuYnVybihvc2MoOCwgMC4xNSkuY29sb3IoMC45LCAwLjMsIDAuMikpKTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />
