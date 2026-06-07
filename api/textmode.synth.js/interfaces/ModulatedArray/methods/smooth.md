---
layout: doc
editLink: true
title: smooth
description: Enable smooth interpolation between array values.
category: Methods
api: true
owner: ModulatedArray
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-07
---

[textmode.synth.js](../../../index.md) / [ModulatedArray](../../ModulatedArray.md) / smooth

# Method: smooth()

```ts
smooth(amount?): this;
```

Enable smooth interpolation between array values.

Instead of jumping from one value to the next, smooth() creates gradual
transitions. The amount parameter controls the smoothing duration.
When amount is 1 (default), smoothing is applied across the full transition.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount?` | `number` | Smoothing amount 0-1 (default: 1) |

## Returns

`this`

The array for chaining

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="smooth" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd0V4YW1wbGVMYWJlbCh0ZXh0LCBjb2wsIHJvdywgY29sb3IgPSAnI2ZmZmZmZicpIHsKCXQuY29sb3IoY29sb3IpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5wcmludCh0ZXh0LCBjb2wsIHJvdyk7Cn0KCmZ1bmN0aW9uIGRyYXdFeGFtcGxlTGFiZWxzKCkgewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoKCWRyYXdFeGFtcGxlTGFiZWwoJ01vZHVsYXRlZEFycmF5LnNtb290aCcsIGxlZnQgKyAxLCB0b3AgKyAxKTsKfQoKbGFiZWxMYXllci5kcmF3KGRyYXdFeGFtcGxlTGFiZWxzKTsKCnQubGF5ZXJzLmJhc2Uuc3ludGgoc2hhcGUoNSwgMC40KS5zY2FsZShbMC42LCAxLjJdLnNtb290aCgwLjgpKSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
