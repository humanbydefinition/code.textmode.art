---
layout: doc
editLink: true
title: gradient
description: Generate a rotating radial gradient.
category: Functions
api: true
kind: Function
ecosystem: textmode.js
lastModified: 2026-06-07
---

[textmode.synth.js](../index.md) / gradient

# Function: gradient()

```ts
function gradient(speed?): SynthSource;
```

Generate a rotating radial gradient.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `speed?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Rotation speed (default: 0.0) |

## Returns

[`SynthSource`](../classes/SynthSource.md)

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="gradient" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd0V4YW1wbGVMYWJlbCh0ZXh0LCBjb2wsIHJvdywgY29sb3IgPSAnI2ZmZmZmZicpIHsKCXQuY29sb3IoY29sb3IpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5wcmludCh0ZXh0LCBjb2wsIHJvdyk7Cn0KCmZ1bmN0aW9uIGRyYXdFeGFtcGxlTGFiZWxzKCkgewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoKCWRyYXdFeGFtcGxlTGFiZWwoJ1N5bnRoU291cmNlLmdyYWRpZW50JywgbGVmdCArIDEsIHRvcCArIDEpOwp9CgpsYWJlbExheWVyLmRyYXcoZHJhd0V4YW1wbGVMYWJlbHMpOwoKdC5sYXllcnMuYmFzZS5zeW50aChncmFkaWVudCgwLjIpLmthbGVpZCg1KSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
