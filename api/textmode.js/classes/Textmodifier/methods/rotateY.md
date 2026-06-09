---
layout: doc
editLink: true
title: rotateY
description: Set Y-axis rotation for subsequent shape drawing, or get the current angle.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-09
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / rotateY

# Method: rotateY()

```ts
rotateY(degrees?): number | void;
```

Set Y-axis rotation for subsequent shape drawing, or get the current angle.

All geometries rotate around the center of the shape.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `degrees?` | `number` | Rotation angle in degrees around the Y axis. |

## Returns

`number` \| `void`

Current Y-axis rotation in degrees when called without arguments.

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="rotateY" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgdmFsdWUgPSAwOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDYsIDEwLCAyMik7Cgljb25zdCB0aW1lID0gdC5mcmFtZUNvdW50ICogMC4wNDsKCXZhbHVlID0gKHRpbWUgKiA3MCkgJSAzNjA7Cgl0LmNoYXJDb2xvcig1MCwgNjAsIDkwKTsKCXQuY2hhcignLicpOwoJdC5saW5lKC0xOCwgMCwgMTgsIDApOwoJdC5saW5lKDAsIC0xMCwgMCwgMTApOwoJdC5wdXNoKCk7Cgl0LnJvdGF0ZVkodmFsdWUpOwoJdC5jaGFyKCcjJyk7Cgl0LmNoYXJDb2xvcigxNDAsIDI1NSwgMTgwKTsKCXQucmVjdCg2LCA0KTsKCXQucG9wKCk7Cn0pOwoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCWRyYXdUZXh0KCdURVhUTU9ESUZJRVIuUk9UQVRFWScsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IFkgQVhJUyBST1RBVElPTicsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnWWF3IHR1cm5zIHRoZSByZWN0YW5nbGUuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCdHcmlkIGNyb3NzIHNob3dzIG9yaWdpbmFsIGF4ZXMuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dChgREVHOiAke3ZhbHVlLnRvRml4ZWQoMSl9YCwgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
