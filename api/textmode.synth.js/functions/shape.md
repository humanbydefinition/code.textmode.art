---
layout: doc
editLink: true
title: shape
description: Generate geometric shapes (polygons).
category: Functions
api: true
kind: Function
ecosystem: textmode.js
lastModified: 2026-06-07
---

[textmode.synth.js](../index.md) / shape

# Function: shape()

```ts
function shape(
   sides?, 
   radius?, 
   smoothing?): SynthSource;
```

Generate geometric shapes (polygons).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sides?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Number of sides (default: 3) |
| `radius?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Radius of the shape (default: 0.3) |
| `smoothing?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Edge smoothing amount (default: 0.01) |

## Returns

[`SynthSource`](../classes/SynthSource.md)

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="shape" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd0V4YW1wbGVMYWJlbCh0ZXh0LCBjb2wsIHJvdywgY29sb3IgPSAnI2ZmZmZmZicpIHsKCXQuY29sb3IoY29sb3IpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5wcmludCh0ZXh0LCBjb2wsIHJvdyk7Cn0KCmZ1bmN0aW9uIGRyYXdFeGFtcGxlTGFiZWxzKCkgewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoKCWRyYXdFeGFtcGxlTGFiZWwoJ1N5bnRoU291cmNlLnNoYXBlJywgbGVmdCArIDEsIHRvcCArIDEpOwp9CgpsYWJlbExheWVyLmRyYXcoZHJhd0V4YW1wbGVMYWJlbHMpOwoKdC5sYXllcnMuYmFzZS5zeW50aChzaGFwZSg2LCAwLjM1LCAwLjAyKS5yb3RhdGUoKCkgPT4gdC5zZWNzKSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
