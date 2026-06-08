---
layout: doc
editLink: true
title: gamepad
description: Resolve a connected gamepad by its browser-assigned slot index.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / gamepad

# Method: gamepad()

```ts
gamepad(index): 
  | TextmodeGamepadSnapshot
  | undefined;
```

Resolve a connected gamepad by its browser-assigned slot index.

Returns `undefined` when that slot is currently absent or disconnected.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `index` | `number` | The browser `Gamepad.index` to resolve. |

## Returns

  \| [`TextmodeGamepadSnapshot`](../../../namespaces/input/namespaces/gamepad/interfaces/TextmodeGamepadSnapshot.md)
  \| `undefined`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="gamepad" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpmdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7Cgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKHIsIGcsIGIpOwoJdC5wcmludCh0ZXh0LCB4LCB5KTsKCXQucG9wKCk7Cn0KCnQuZHJhdygoKSA9PiB7Cgl0LmJhY2tncm91bmQoNCwgNiwgMTIpOwoJY29uc3QgY291bnQgPSBNYXRoLm1heCgxLCB0LmdhbWVwYWRzLmxlbmd0aCk7Cglmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHsKCQl0LnB1c2goKTsKCQljb25zdCBhbmdsZSA9IChpIC8gMTYpICogTWF0aC5QSSAqIDIgKyB0LmZyYW1lQ291bnQgKiAwLjAzOwoJCXQudHJhbnNsYXRlKE1hdGguY29zKGFuZ2xlKSAqICg2ICsgY291bnQpLCBNYXRoLnNpbihhbmdsZSkgKiA0KTsKCQl0LmNoYXIodC5nYW1lcGFkcy5sZW5ndGggPyAnQCcgOiAnLicpOwoJCXQuY2hhckNvbG9yKDgwICsgaSAqIDgsIDE4MCwgMjU1KTsKCQl0LnBvaW50KCk7CgkJdC5wb3AoKTsKCX0KfSk7CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KCdURVhUTU9ESUZJRVIuR0FNRVBBRCcsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IEdBTUVQQUQgSU5QVVQnLCB4LCB5KyssIDEwMCwgMjIwLCAyNTUpOwoJZHJhd1RleHQoJ1dvcmtzIHdpdGggYnJvd3NlciBwYWRzLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJY29uc3QgcGFkID0gdC5nYW1lcGFkKDApOwoJY29uc3Qgc3RhdGUgPSBwYWQgPyAnRk9VTkQnIDogJ0VNUFRZJzsKCWRyYXdUZXh0KGBTTE9UIDA6ICR7c3RhdGV9YCwgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
