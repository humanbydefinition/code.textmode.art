---
layout: doc
editLink: true
title: camera
description: Set an explicit camera transform for subsequent draw calls.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-09
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / camera

# Method: camera()

```ts
camera(
   eyeX, 
   eyeY, 
   eyeZ, 
   targetX?, 
   targetY?, 
   targetZ?, 
   upX?, 
   upY?, 
   upZ?): void;
```

Set an explicit camera transform for subsequent draw calls.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eyeX` | `number` | Camera eye X position. |
| `eyeY` | `number` | Camera eye Y position. |
| `eyeZ` | `number` | Camera eye Z position. |
| `targetX?` | `number` | Look-at target X position. |
| `targetY?` | `number` | Look-at target Y position. |
| `targetZ?` | `number` | Look-at target Z position. |
| `upX?` | `number` | Camera up vector X component. |
| `upY?` | `number` | Camera up vector Y component. |
| `upZ?` | `number` | Camera up vector Z component. |

## Returns

`void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="camera" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgZXllWCA9IDA7CgpmdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7Cgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKHIsIGcsIGIpOwoJdC5wcmludCh0ZXh0LCB4LCB5KTsKCXQucG9wKCk7Cn0KCnQuZHJhdygoKSA9PiB7Cgl0LmJhY2tncm91bmQoNiwgOCwgMTgpOwoJY29uc3QgdGltZSA9IHQuZnJhbWVDb3VudCAqIDAuMDI1OwoJZXllWCA9IE1hdGguc2luKHRpbWUpICogMjQ7Cgl0LnBlcnNwZWN0aXZlKDU4LCAwLjEsIDQwOTYpOwoJdC5jYW1lcmEoZXllWCwgOCwgNDIsIDAsIDAsIDApOwoJdC5hbWJpZW50TGlnaHQoMjUsIDI4LCAzNik7Cgl0LnBvaW50TGlnaHQoWzI1NSwgMjEwLCAxNDBdLCB7IHg6IDIwLCB5OiAtMTgsIHo6IDI4IH0pOwoJdC5wdXNoKCk7Cgl0LnJvdGF0ZVkodGltZSAqIDMwKTsKCXQuY2hhcignIycpOwoJdC5jaGFyQ29sb3IoMTQwLCAyMjAsIDI1NSk7Cgl0LmJveCg4LCA4LCA4KTsKCXQucG9wKCk7Cn0pOwoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCWRyYXdUZXh0KCdURVhUTU9ESUZJRVIuQ0FNRVJBJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogU0VUIFZJRVcgQ0FNRVJBJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdFeWUgcG9zaXRpb24gbW92ZXMgbGVmdC9yaWdodC4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJ1RhcmdldCByZW1haW5zIGF0IG9yaWdpbi4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KGBFWUUgWDogJHtleWVYLnRvRml4ZWQoMSl9YCwgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
