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
lastModified: 2026-06-07
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

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="fit" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd0V4YW1wbGVMYWJlbCh0ZXh0LCBjb2wsIHJvdywgY29sb3IgPSAnI2ZmZmZmZicpIHsKCXQuY29sb3IoY29sb3IpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5wcmludCh0ZXh0LCBjb2wsIHJvdyk7Cn0KCmZ1bmN0aW9uIGRyYXdFeGFtcGxlTGFiZWxzKCkgewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoKCWRyYXdFeGFtcGxlTGFiZWwoJ01vZHVsYXRlZEFycmF5LmZpdCcsIGxlZnQgKyAxLCB0b3AgKyAxKTsKfQoKbGFiZWxMYXllci5kcmF3KGRyYXdFeGFtcGxlTGFiZWxzKTsKCnQubGF5ZXJzLmJhc2Uuc3ludGgoc2hhcGUoNikuc2NhbGUoWzIsIDZdLmZpdCgwLjUsIDEuNSkpKTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />
