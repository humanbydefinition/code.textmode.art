---
layout: doc
editLink: true
title: fit
description: Fit (remap) array values to a new range.
category: Methods
api: true
owner: ModulatedArray
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-08
---

[textmode.synth.js](../../../index.md) / [ModulatedArray](../../ModulatedArray.md) / fit

# Method: fit()

```ts
fit(low, high): ModulatedArray;
```

Fit (remap) array values to a new range.

Takes the minimum and maximum values in the array and linearly maps them
to the specified low and high values. All intermediate values are scaled
proportionally. The original array is not modified.

Preserves any modulation settings (speed, smooth, ease, offset) from the
original array.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `low` | `number` | New minimum value |
| `high` | `number` | New maximum value |

## Returns

[`ModulatedArray`](../../ModulatedArray.md)

A new ModulatedArray with remapped values

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="fit" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KCdNT0RVTEFURURBUlJBWS5GSVQnLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBSQU5HRSBGSVRUSU5HJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdGaXRzIGN5Y2xpbmcgaW5wdXRzIHRvIG5ldyBib3VuZHMuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCdTY2FsZXMgdmFsdWVzIHRvIGN1c3RvbSByYW5nZXMuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnRml0OiBSb3RhdGlvbiAmIFNjYWxlIGR5bmFtaWMgYm91bmRzJywgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKfSk7Cgp0LmxheWVycy5iYXNlLnN5bnRoKG9zYygxMiwgMC4xKS5yb3RhdGUoWzAsIDFdLmZpdCgtMy4xNCwgMy4xNCkpLnNjYWxlKFswLCAxXS5maXQoMC41LCAyLjUpKS5jb2xvcigwLjksIDAuMiwgMC42KSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
