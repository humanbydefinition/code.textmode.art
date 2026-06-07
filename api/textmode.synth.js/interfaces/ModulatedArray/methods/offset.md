---
layout: doc
editLink: true
title: offset
description: Set time offset for array cycling.
category: Methods
api: true
owner: ModulatedArray
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-07
---

[textmode.synth.js](../../../index.md) / [ModulatedArray](../../ModulatedArray.md) / offset

# Method: offset()

```ts
offset(offset): this;
```

Set time offset for array cycling.

Shifts when the array starts cycling through its values.
Useful for creating phase-shifted animations where multiple arrays
cycle with the same speed but at different times.

The offset wraps around at 1.0, so offset(0.5) starts halfway through
the cycle, and offset(1.5) is equivalent to offset(0.5).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset` | `number` | Time offset 0-1, wraps at 1.0 (default: 0) |

## Returns

`this`

The array for chaining

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="offset" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd0V4YW1wbGVMYWJlbCh0ZXh0LCBjb2wsIHJvdywgY29sb3IgPSAnI2ZmZmZmZicpIHsKCXQuY29sb3IoY29sb3IpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5wcmludCh0ZXh0LCBjb2wsIHJvdyk7Cn0KCmZ1bmN0aW9uIGRyYXdFeGFtcGxlTGFiZWxzKCkgewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoKCWRyYXdFeGFtcGxlTGFiZWwoJ01vZHVsYXRlZEFycmF5Lm9mZnNldCcsIGxlZnQgKyAxLCB0b3AgKyAxKTsKfQoKbGFiZWxMYXllci5kcmF3KGRyYXdFeGFtcGxlTGFiZWxzKTsKCmNvbnN0IGJhc2UgPSBbNiwgMTIsIDE4XS5mYXN0KDEuNSk7Cgp0LmxheWVycy5iYXNlLnN5bnRoKG9zYyhiYXNlLCAwLjEsIDEuMikubGF5ZXIob3NjKGJhc2Uub2Zmc2V0KDAuNSksIDAuMSwgMS4yKSwgMC41KSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
