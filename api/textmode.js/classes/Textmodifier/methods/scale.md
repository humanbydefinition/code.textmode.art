---
layout: doc
editLink: true
title: scale
description: Scale subsequent geometry in model space.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / scale

# Method: scale()

```ts
scale(
   x, 
   y?, 
   z?): void;
```

Scale subsequent geometry in model space.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x` | `number` | Scale factor for X. |
| `y?` | `number` | Scale factor for Y. Defaults to `x`. |
| `z?` | `number` | Scale factor for Z. Defaults to `x` for uniform scale, or `1` when only `x` and `y` are provided. |

## Returns

`void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="scale" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgdmFsdWUgPSAxOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDYsIDEwLCAyMik7Cgljb25zdCB0aW1lID0gdC5mcmFtZUNvdW50ICogMC4wNDsKCXZhbHVlID0gMC43ICsgMC40ICogTWF0aC5zaW4odGltZSk7Cgl0LmNoYXJDb2xvcig1MCwgNjAsIDkwKTsKCXQuY2hhcignLicpOwoJdC5saW5lKC0xOCwgMCwgMTgsIDApOwoJdC5saW5lKDAsIC0xMCwgMCwgMTApOwoJdC5wdXNoKCk7Cgl0LnRyYW5zbGF0ZSg4LCAxKTsKCXQuc2NhbGUodmFsdWUsIHZhbHVlKTsKCXQuY2hhcignIycpOwoJdC5jaGFyQ29sb3IoMTQwLCAyNTUsIDE4MCk7Cgl0LmNlbGxDb2xvcigyMCwgNTAsIDkwKTsKCXQucmVjdCgxMCwgNSk7Cgl0LnBvcCgpOwp9KTsKCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CglkcmF3VGV4dCgnVEVYVE1PRElGSUVSLlNDQUxFJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogUkVTSVpFIE1PREVMJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdTY2FsZXMgZm9sbG93aW5nIGdlb21ldHJ5LicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnR3JpZCBjcm9zcyBzaG93cyBvcmlnaW5hbCBheGVzLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoYFNDQUxFOiAke3ZhbHVlLnRvRml4ZWQoMil9YCwgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
