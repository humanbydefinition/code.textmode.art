---
layout: doc
editLink: true
title: ellipsoid
description: Draw an ellipsoid mesh primitive.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / ellipsoid

# Method: ellipsoid()

```ts
ellipsoid(
   radiusX?, 
   radiusY?, 
   radiusZ?): void;
```

Draw an ellipsoid mesh primitive.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `radiusX?` | `number` | Radius on X axis in grid cells (defaults to 50). |
| `radiusY?` | `number` | Radius on Y axis in grid cells (defaults to radiusX). |
| `radiusZ?` | `number` | Radius on Z axis in grid cells (defaults to radiusX). |

## Returns

`void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="ellipsoid" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgc3BpbiA9IDA7CgpmdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7Cgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKHIsIGcsIGIpOwoJdC5wcmludCh0ZXh0LCB4LCB5KTsKCXQucG9wKCk7Cn0KCnQuZHJhdygoKSA9PiB7Cgl0LmJhY2tncm91bmQoNiwgOCwgMTgpOwoJY29uc3QgdGltZSA9IHQuZnJhbWVDb3VudCAqIDAuMDI1OwoJc3BpbiA9ICh0aW1lICogNDApICUgMzYwOwoJdC5wZXJzcGVjdGl2ZSg1OCwgMC4xLCA0MDk2KTsKCXQuY2FtZXJhKDE4LCAtMTAsIDQyLCAwLCAwLCAwKTsKCXQuYW1iaWVudExpZ2h0KDI0LCAyOCwgMzgpOwoJdC5wb2ludExpZ2h0KFsyNTUsIDIxMCwgMTQwXSwgeyB4OiAxOCwgeTogLTE4LCB6OiAyOCB9KTsKCXQucHVzaCgpOwoJdC50cmFuc2xhdGUoNSwgMSwgMCk7Cgl0LnJvdGF0ZVkoc3Bpbik7Cgl0LnJvdGF0ZVgoMTgpOwoJdC5jaGFyKCcjJyk7Cgl0LmNoYXJDb2xvcigxNDAsIDIyMCwgMjU1KTsKCXQuY2VsbENvbG9yKDE2LCAyNCwgNDIpOwoJdC5lbGxpcHNvaWQoOCwgNSwgNik7Cgl0LnBvcCgpOwp9KTsKCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CglkcmF3VGV4dCgnVEVYVE1PRElGSUVSLkVMTElQU09JRCcsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IDNEIEVMTElQU09JRCcsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnSW5kZXBlbmRlbnQgWCwgWSwgWiByYWRpaS4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJ0NhbWVyYSBhbmQgbGlnaHQgcmV2ZWFsIGRlcHRoLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoYFNQSU46ICR7c3Bpbi50b0ZpeGVkKDEpfWAsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
