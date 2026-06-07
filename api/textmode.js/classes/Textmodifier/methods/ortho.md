---
layout: doc
editLink: true
title: ortho
description: Enable orthographic projection for subsequent shape drawing.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / ortho

# Method: ortho()

```ts
ortho(near?, far?): void;
```

Enable orthographic projection for subsequent shape drawing.

By default, textmode uses a perspective projection. Calling this method switches to an
orthographic projection, where objects maintain their size regardless of depth (Z position).

The projection mode is reset to perspective at the beginning of each frame.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `near?` | `number` | Near clipping plane distance. |
| `far?` | `number` | Far clipping plane distance. |

## Returns

`void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="ortho" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpmdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7Cgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKHIsIGcsIGIpOwoJdC5wcmludCh0ZXh0LCB4LCB5KTsKCXQucG9wKCk7Cn0KCnQuZHJhdygoKSA9PiB7Cgl0LmJhY2tncm91bmQoNiwgOCwgMTgpOwoJdC5vcnRobygpOwoJdC5jYW1lcmEoMCwgMCwgNDIpOwoJZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHsKCQl0LnB1c2goKTsKCQl0LnRyYW5zbGF0ZSgoaSAtIDEpICogOSwgMCwgaSAqIC0xMik7CgkJdC5yb3RhdGVZKHQuZnJhbWVDb3VudCArIGkgKiAzNSk7CgkJdC5jaGFyKCcrJyk7CgkJdC5jaGFyQ29sb3IoMTIwICsgaSAqIDQwLCAyMjAsIDI1NSk7CgkJdC5ib3goNiwgNiwgNik7CgkJdC5wb3AoKTsKCX0KfSk7CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoJZHJhd1RleHQoJ1RFWFRNT0RJRklFUi5PUlRITycsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IE9SVEhPIFBST0pFQ1RJT04nLCB4LCB5KyssIDEwMCwgMjIwLCAyNTUpOwoJZHJhd1RleHQoJ0RlcHRoIG5vIGxvbmdlciBjaGFuZ2VzIHNjYWxlLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnQm94ZXMga2VlcCBlcXVhbCBhcHBhcmVudCBzaXplLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0FQSTogdC5vcnRobygpJywgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
