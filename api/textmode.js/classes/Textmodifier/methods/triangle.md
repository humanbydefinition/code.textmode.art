---
layout: doc
editLink: true
title: triangle
description: Draw a triangle with the current settings.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / triangle

# Method: triangle()

```ts
triangle(
   x1, 
   y1, 
   x2, 
   y2, 
   x3, 
   y3): void;
```

Draw a triangle with the current settings.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x1` | `number` | First vertex X coordinate in grid cells. |
| `y1` | `number` | First vertex Y coordinate in grid cells. |
| `x2` | `number` | Second vertex X coordinate in grid cells. |
| `y2` | `number` | Second vertex Y coordinate in grid cells. |
| `x3` | `number` | Third vertex X coordinate in grid cells. |
| `y3` | `number` | Third vertex Y coordinate in grid cells. |

## Returns

`void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="triangle" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpmdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7Cgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKHIsIGcsIGIpOwoJdC5wcmludCh0ZXh0LCB4LCB5KTsKCXQucG9wKCk7Cn0KCnQuZHJhdygoKSA9PiB7Cgl0LmJhY2tncm91bmQoNiwgMTAsIDIyKTsKCWNvbnN0IHRpbWUgPSB0LmZyYW1lQ291bnQgKiAwLjAzOwoJdC5wdXNoKCk7Cgl0LnRyYW5zbGF0ZSg4LCAyKTsKCXQucm90YXRlWihNYXRoLnNpbih0aW1lKSAqIDE4KTsKCXQuY2hhcignXicpOwoJdC5jaGFyQ29sb3IoMjU1LCAyMTAsIDEyMCk7Cgl0LmNlbGxDb2xvcigzMCwgMjAsIDEwKTsKCXQudHJpYW5nbGUoLTksIDYsIDAsIC03LCA5LCA2KTsKCXQucG9wKCk7Cn0pOwoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCWRyYXdUZXh0KCdURVhUTU9ESUZJRVIuVFJJQU5HTEUnLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBUSFJFRSBQT0lOVCBTSEFQRScsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnVXNlcyB0aHJlZSBleHBsaWNpdCB2ZXJ0aWNlcy4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJ1JvdGF0aW9uIHNob3dzIHRoZSBmaWxsZWQgYXJlYS4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdBUEk6IHQudHJpYW5nbGUoLi4uKScsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
