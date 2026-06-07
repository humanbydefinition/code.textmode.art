---
layout: doc
editLink: true
title: fisheye
description: Fisheye lens distortion.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-07
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / fisheye

# Method: fisheye()

```ts
fisheye(
   amount?, 
   centerX?, 
   centerY?): this;
```

Fisheye lens distortion.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Distortion amount (default: 1.0) |
| `centerX?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Center X (default: 0.5) |
| `centerY?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Center Y (default: 0.5) |

## Returns

`this`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="fisheye" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd0V4YW1wbGVMYWJlbCh0ZXh0LCBjb2wsIHJvdywgY29sb3IgPSAnI2ZmZmZmZicpIHsKCXQuY29sb3IoY29sb3IpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5wcmludCh0ZXh0LCBjb2wsIHJvdyk7Cn0KCmZ1bmN0aW9uIGRyYXdFeGFtcGxlTGFiZWxzKCkgewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoKCWRyYXdFeGFtcGxlTGFiZWwoJ1N5bnRoU291cmNlLmZpc2hleWUnLCBsZWZ0ICsgMSwgdG9wICsgMSk7Cn0KCmxhYmVsTGF5ZXIuZHJhdyhkcmF3RXhhbXBsZUxhYmVscyk7Cgp0LmxheWVycy5iYXNlLnN5bnRoKG9zYyg4LCAwLjEsIDEuMikuZmlzaGV5ZSgwLjgpKTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />
