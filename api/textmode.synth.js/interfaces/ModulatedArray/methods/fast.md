---
layout: doc
editLink: true
title: fast
description: Set speed multiplier for array cycling.
category: Methods
api: true
owner: ModulatedArray
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.synth.js](../../../index.md) / [ModulatedArray](../../ModulatedArray.md) / fast

# Method: fast()

```ts
fast(speed): this;
```

Set speed multiplier for array cycling.

Controls how fast the array cycles through its values over time.
A speed of 1 is the default rate. Values > 1 cycle faster, values < 1 cycle slower.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `speed` | `number` | Speed multiplier (default: 1) |

## Returns

`this`

The array for chaining

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="fast" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KGBNT0RVTEFURURBUlJBWS5GQVNUYCwgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dChgQ09OQ0VQVDogUkVMQVRJVkUgU1BFRURTYCwgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KGBTcGVlZHMgdXAgcGFyYW1ldGVyIGludGVycG9sYXRpb24uYCwgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KGBEcml2ZXMgY3ljbGVzIGF0IGRpZmZlcmVudCBzcGVlZHMuYCwgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dChgU3BlZWQ6IG9zYyAoMngpIHwga2FsZWlkICgzeClgLCB4LCB5KyssIDE0MCwgMjU1LCAxODApOwp9KTsKCnQubGF5ZXJzLmJhc2Uuc3ludGgob3NjKFsxMCwgMjAsIDMwXS5mYXN0KDIuMCksIDAuMTUpLmthbGVpZChbMywgNSwgN10uZmFzdCgzLjApKS5jb2xvcigwLjIsIDAuOCwgMC45KSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
