---
layout: doc
editLink: true
title: repeat
description: Repeat coordinates in both X and Y directions.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-07
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / repeat

# Method: repeat()

```ts
repeat(
   repeatX?, 
   repeatY?, 
   offsetX?, 
   offsetY?): this;
```

Repeat coordinates in both X and Y directions.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `repeatX?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Number of X repetitions (default: 3.0) |
| `repeatY?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Number of Y repetitions (default: 3.0) |
| `offsetX?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | X offset between repetitions (default: 0.0) |
| `offsetY?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Y offset between repetitions (default: 0.0) |

## Returns

`this`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="repeat" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd0V4YW1wbGVMYWJlbCh0ZXh0LCBjb2wsIHJvdywgY29sb3IgPSAnI2ZmZmZmZicpIHsKCXQuY29sb3IoY29sb3IpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5wcmludCh0ZXh0LCBjb2wsIHJvdyk7Cn0KCmZ1bmN0aW9uIGRyYXdFeGFtcGxlTGFiZWxzKCkgewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoKCWRyYXdFeGFtcGxlTGFiZWwoJ1N5bnRoU291cmNlLnJlcGVhdCcsIGxlZnQgKyAxLCB0b3AgKyAxKTsKfQoKbGFiZWxMYXllci5kcmF3KGRyYXdFeGFtcGxlTGFiZWxzKTsKCnQubGF5ZXJzLmJhc2Uuc3ludGgoc2hhcGUoNCwgMC4yNSkucmVwZWF0KDQsIDMsIDAuMSwgMC4xKSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
