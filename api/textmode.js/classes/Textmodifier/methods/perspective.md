---
layout: doc
editLink: true
title: perspective
description: Enable perspective projection and optionally set projection parameters.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-09
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / perspective

# Method: perspective()

```ts
perspective(
   fov?, 
   near?, 
   far?): void;
```

Enable perspective projection and optionally set projection parameters.

The default perspective is tuned to match textmode.js legacy depth behavior.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fov?` | `number` | Vertical field-of-view in degrees. |
| `near?` | `number` | Near clipping plane distance; must be greater than 0. |
| `far?` | `number` | Far clipping plane distance; must be greater than `near`. |

## Returns

`void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="perspective" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgZm92ID0gNjA7CgpmdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7Cgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKHIsIGcsIGIpOwoJdC5wcmludCh0ZXh0LCB4LCB5KTsKCXQucG9wKCk7Cn0KCnQuZHJhdygoKSA9PiB7Cgl0LmJhY2tncm91bmQoNiwgOCwgMTgpOwoJZm92ID0gNjAgKyBNYXRoLnNpbih0LmZyYW1lQ291bnQgKiAwLjAzKSAqIDI1OwoJdC5wZXJzcGVjdGl2ZShmb3YsIDAuMSwgNDA5Nik7Cgl0LmNhbWVyYSgwLCAwLCA0NCwgMCwgMCwgMCk7Cglmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykgewoJCXQucHVzaCgpOwoJCXQudHJhbnNsYXRlKChpIC0gMSkgKiA4LCAwLCBpICogLTEyKTsKCQl0LmNoYXIoJyMnKTsKCQl0LmNoYXJDb2xvcigxMjAgKyBpICogNDAsIDIyMCwgMjU1IC0gaSAqIDIwKTsKCQl0LmJveCg2LCA2LCA2KTsKCQl0LnBvcCgpOwoJfQp9KTsKCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CglkcmF3VGV4dCgnVEVYVE1PRElGSUVSLlBFUlNQRUNUSVZFJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogRk9WIFBST0pFQ1RJT04nLCB4LCB5KyssIDEwMCwgMjIwLCAyNTUpOwoJZHJhd1RleHQoJ0ZPViBicmVhdGhlcyB3aWRlIHRvIG5hcnJvdy4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJ0RlcHRoIGNoYW5nZXMgYXBwYXJlbnQgc2l6ZS4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KGBGT1Y6ICR7Zm92LnRvRml4ZWQoMSl9YCwgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
