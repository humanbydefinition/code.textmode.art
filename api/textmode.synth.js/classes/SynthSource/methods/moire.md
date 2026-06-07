---
layout: doc
editLink: true
title: moire
description: Generate moire interference patterns.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-07
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / moire

# Method: moire()

```ts
moire(
   freqA?, 
   freqB?, 
   angleA?, 
   angleB?, 
   speed?, 
   phase?): this;
```

Generate moire interference patterns.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `freqA?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Frequency of first grating (default: 20.0) |
| `freqB?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Frequency of second grating (default: 21.0) |
| `angleA?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Angle of first grating in radians (default: 0.0) |
| `angleB?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Angle of second grating in radians (default: 1.5708) |
| `speed?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Animation speed (default: 0.1) |
| `phase?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Phase offset (default: 0.0) |

## Returns

`this`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="moire" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd0V4YW1wbGVMYWJlbCh0ZXh0LCBjb2wsIHJvdywgY29sb3IgPSAnI2ZmZmZmZicpIHsKCXQuY29sb3IoY29sb3IpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5wcmludCh0ZXh0LCBjb2wsIHJvdyk7Cn0KCmZ1bmN0aW9uIGRyYXdFeGFtcGxlTGFiZWxzKCkgewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoKCWRyYXdFeGFtcGxlTGFiZWwoJ1N5bnRoU291cmNlLm1vaXJlJywgbGVmdCArIDEsIHRvcCArIDEpOwp9CgpsYWJlbExheWVyLmRyYXcoZHJhd0V4YW1wbGVMYWJlbHMpOwoKdC5sYXllcnMuYmFzZS5zeW50aChtb2lyZSgxNCwgMTUsIDAuMiwgMS4yLCAwLjIsIDAuMSkuY29sb3IoMC43LCAwLjUsIDEuMSkpOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
