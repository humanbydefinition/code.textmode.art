---
layout: doc
editLink: true
title: line
description: Draw a line from (x1, y1) to (x2, y2).
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / line

# Method: line()

```ts
line(
   x1, 
   y1, 
   x2, 
   y2): void;
```

Draw a line from `(x1, y1)` to `(x2, y2)`.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x1` | `number` | Start X coordinate in grid cells. |
| `y1` | `number` | Start Y coordinate in grid cells. |
| `x2` | `number` | End X coordinate in grid cells. |
| `y2` | `number` | End Y coordinate in grid cells. |

## Returns

`void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="line" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgYSA9IDA7CmxldCBiID0gMDsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKdC5kcmF3KCgpID0-IHsKCXQuYmFja2dyb3VuZCg2LCAxMCwgMjIpOwoJY29uc3QgdGltZSA9IHQuZnJhbWVDb3VudCAqIDAuMDI1OwoJYSA9IE1hdGguc2luKHRpbWUpICogMTA7CgliID0gTWF0aC5jb3ModGltZSAqIDAuNykgKiA3OwoJdC5jaGFyQ29sb3IoNjAsIDcwLCAxMDApOwoJdC5jaGFyKCcuJyk7Cgl0LmxpbmUoLTE4LCAwLCAxOCwgMCk7Cgl0LmxpbmUoMCwgLTEwLCAwLCAxMCk7Cgl0LmNoYXJDb2xvcigxMjAsIDIyMCwgMjU1KTsKCXQuY2hhcignIycpOwoJdC5saW5lKC0xOCwgLWIsIDE4LCBiKTsKCXQuY2hhckNvbG9yKDI1NSwgMjEwLCAxMjApOwoJdC5saW5lKC1hLCAtMTAsIGEsIDEwKTsKfSk7CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoJZHJhd1RleHQoJ1RFWFRNT0RJRklFUi5MSU5FJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogRFJBVyBTRUdNRU5UUycsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnQ29ubmVjdHMgdHdvIGdyaWQgY29vcmRpbmF0ZXMuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCdBbmltYXRlZCBlbmRwb2ludHMgY3Jvc3MgY2VudGVyLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoYEE6ICR7YS50b0ZpeGVkKDEpfWAsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7CglkcmF3VGV4dChgQjogJHtiLnRvRml4ZWQoMSl9YCwgeCwgeSsrLCAyNTUsIDIxMCwgMTIwKTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
