---
layout: doc
editLink: true
title: lookAt
description: Update the look-at target and optional up vector for the active camera.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / lookAt

# Method: lookAt()

```ts
lookAt(
   targetX, 
   targetY, 
   targetZ, 
   upX?, 
   upY?, 
   upZ?): void;
```

Update the look-at target and optional up vector for the active camera.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetX` | `number` | Look-at target X position. |
| `targetY` | `number` | Look-at target Y position. |
| `targetZ` | `number` | Look-at target Z position. |
| `upX?` | `number` | Optional up vector X component. |
| `upY?` | `number` | Optional up vector Y component. |
| `upZ?` | `number` | Optional up vector Z component. |

## Returns

`void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="lookAt" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgdGFyZ2V0WCA9IDA7CgpmdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7Cgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKHIsIGcsIGIpOwoJdC5wcmludCh0ZXh0LCB4LCB5KTsKCXQucG9wKCk7Cn0KCnQuZHJhdygoKSA9PiB7Cgl0LmJhY2tncm91bmQoNiwgOCwgMTgpOwoJY29uc3QgdGltZSA9IHQuZnJhbWVDb3VudCAqIDAuMDM7Cgl0YXJnZXRYID0gTWF0aC5zaW4odGltZSkgKiAxMDsKCXQucGVyc3BlY3RpdmUoNTgsIDAuMSwgNDA5Nik7Cgl0LmNhbWVyYSgwLCAwLCA0NCk7Cgl0Lmxvb2tBdCh0YXJnZXRYLCAwLCAwKTsKCXQuYW1iaWVudExpZ2h0KDIwLCAyNCwgMzQpOwoJdC5wb2ludExpZ2h0KFsyNTUsIDIxMCwgMTQwXSwgeyB4OiAxNiwgeTogLTE2LCB6OiAyOCB9KTsKCXQucHVzaCgpOwoJdC50cmFuc2xhdGUodGFyZ2V0WCwgMCwgMCk7Cgl0LmNoYXIoJyonKTsKCXQuY2hhckNvbG9yKDI1NSwgMjIwLCAxMjApOwoJdC5ib3goNCwgNCwgNCk7Cgl0LnBvcCgpOwoJdC5jaGFyKCcjJyk7Cgl0LmNoYXJDb2xvcigxMjAsIDIyMCwgMjU1KTsKCXQuYm94KDgsIDgsIDgpOwp9KTsKCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CglkcmF3VGV4dCgnVEVYVE1PRElGSUVSLkxPT0tBVCcsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IEFJTSBDQU1FUkEnLCB4LCB5KyssIDEwMCwgMjIwLCAyNTUpOwoJZHJhd1RleHQoJ0NhbWVyYSBleWUgcmVtYWlucyBmaXhlZC4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJ1RhcmdldCBzbGlkZXMgYWNyb3NzIFguJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dChgVEFSR0VUIFg6ICR7dGFyZ2V0WC50b0ZpeGVkKDEpfWAsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
