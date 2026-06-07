---
layout: doc
editLink: true
title: ModulatedArray
description: Extended array interface with modulation methods.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-06-07
isInterface: true
---

[textmode.synth.js](../index.md) / ModulatedArray

# Interface: ModulatedArray

Extended array interface with modulation methods.

Arrays in textmode.synth.js behave like hydra - they cycle through values over time,
creating dynamic, time-varying parameters. This enables complex animations without
manually tracking time or state.

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="ModulatedArray" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd0V4YW1wbGVMYWJlbCh0ZXh0LCBjb2wsIHJvdywgY29sb3IgPSAnI2ZmZmZmZicpIHsKCXQuY29sb3IoY29sb3IpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5wcmludCh0ZXh0LCBjb2wsIHJvdyk7Cn0KCmZ1bmN0aW9uIGRyYXdFeGFtcGxlTGFiZWxzKCkgewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoKCWRyYXdFeGFtcGxlTGFiZWwoJ01vZHVsYXRlZEFycmF5LmFycmF5cycsIGxlZnQgKyAxLCB0b3AgKyAxKTsKfQoKbGFiZWxMYXllci5kcmF3KGRyYXdFeGFtcGxlTGFiZWxzKTsKCnQubGF5ZXJzLmJhc2Uuc3ludGgob3NjKFs0LCA4LCAxMl0uZmFzdCgxLjUpLCAwLjEsIDEuMikua2FsZWlkKDUpKTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />

## Extends

- `Array`\<`number`\>

## Indexable

```ts
[n: number]: number
```

## Methods

| Method | Description |
| ------ | ------ |
| [fast](ModulatedArray/methods/fast.md) | Set speed multiplier for array cycling. |
| [smooth](ModulatedArray/methods/smooth.md) | Enable smooth interpolation between array values. |
| [ease](ModulatedArray/methods/ease.md) | Apply easing function to interpolation between array values. |
| [offset](ModulatedArray/methods/offset.md) | Set time offset for array cycling. |
| [fit](ModulatedArray/methods/fit.md) | Fit (remap) array values to a new range. |
