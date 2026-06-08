---
layout: doc
editLink: true
title: bezierCurve
description: Draw a smooth cubic Bezier curve between two points. The curve thickness is controlled by the current lineWeight setting.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / bezierCurve

# Method: bezierCurve()

```ts
bezierCurve(
   x1, 
   y1, 
   cp1x, 
   cp1y, 
   cp2x, 
   cp2y, 
   x2, 
   y2): void;
```

Draw a smooth cubic Bezier curve between two points.
The curve thickness is controlled by the current [lineWeight](lineWeight.md) setting.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x1` | `number` | Start point X coordinate in grid cells. |
| `y1` | `number` | Start point Y coordinate in grid cells. |
| `cp1x` | `number` | First control point X coordinate in grid cells. |
| `cp1y` | `number` | First control point Y coordinate in grid cells. |
| `cp2x` | `number` | Second control point X coordinate in grid cells. |
| `cp2y` | `number` | Second control point Y coordinate in grid cells. |
| `x2` | `number` | End point X coordinate in grid cells. |
| `y2` | `number` | End point Y coordinate in grid cells. |

## Returns

`void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="bezierCurve" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpmdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7Cgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKHIsIGcsIGIpOwoJdC5wcmludCh0ZXh0LCB4LCB5KTsKCXQucG9wKCk7Cn0KCnQuZHJhdygoKSA9PiB7Cgl0LmJhY2tncm91bmQoNiwgMTAsIDIyKTsKCWNvbnN0IHRpbWUgPSB0LmZyYW1lQ291bnQgKiAwLjAyNTsKCWNvbnN0IGNwMXggPSAtOCArIE1hdGguc2luKHRpbWUpICogNjsKCWNvbnN0IGNwMXkgPSAtNzsKCWNvbnN0IGNwMnggPSA4ICsgTWF0aC5jb3ModGltZSAqIDAuOCkgKiA2OwoJY29uc3QgY3AyeSA9IDc7Cgl0LnB1c2goKTsKCXQudHJhbnNsYXRlKDcsIDEpOwoJdC5jaGFyQ29sb3IoNjAsIDcwLCAxMDApOwoJdC5jaGFyKCcuJyk7Cgl0LmxpbmUoLTE0LCAwLCBjcDF4LCBjcDF5KTsKCXQubGluZSgxNCwgMCwgY3AyeCwgY3AyeSk7Cgl0LmNoYXIoJyMnKTsKCXQuY2hhckNvbG9yKDE0MCwgMjIwLCAyNTUpOwoJdC5iZXppZXJDdXJ2ZSgtMTQsIDAsIGNwMXgsIGNwMXksIGNwMngsIGNwMnksIDE0LCAwKTsKCXQucG9wKCk7Cn0pOwoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCWRyYXdUZXh0KCdURVhUTU9ESUZJRVIuQkVaSUVSQ1VSVkUnLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBDVUJJQyBDVVJWRScsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnVHdvIGNvbnRyb2wgcG9pbnRzIGJlbmQgcGF0aC4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJ0d1aWRlIGxpbmVzIHNob3cgaGFuZGxlcy4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdBUEk6IHQuYmV6aWVyQ3VydmUoLi4uKScsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
