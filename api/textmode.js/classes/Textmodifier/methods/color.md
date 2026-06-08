---
layout: doc
editLink: true
title: color
description: Create a reusable color object from a grayscale value.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / color

# Method: color()

## Call Signature

```ts
color(gray, alpha?): TextmodeColor;
```

Create a reusable color object from a grayscale value.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gray` | `number` | Grayscale value (0-255) |
| `alpha?` | `number` | Optional alpha value (0-255) |

### Returns

[`TextmodeColor`](../../../namespaces/color/classes/TextmodeColor.md)

A TextmodeColor instance

### Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="color" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgdmFsdWUgPSAwOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDYsIDEwLCAyMik7Cgl2YWx1ZSA9IE1hdGgucm91bmQoODAgKyA4MCAqIE1hdGguc2luKHQuZnJhbWVDb3VudCAqIDAuMDQpKTsKCXQuY2hhcignIycpOwoJY29uc3QgYyA9IHQuY29sb3IodmFsdWUsIDE4MCk7Cgl0LmNoYXJDb2xvcihjKTsKCXQucmVjdCgxMCwgNSk7Cn0pOwoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCWRyYXdUZXh0KCdURVhUTU9ESUZJRVIuQ09MT1InLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBNQUtFIENPTE9SJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdDcmVhdGVzIHJldXNhYmxlIGdyYXkgY29sb3IuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCdUaGUgdmFsdWUgcHVsc2VzIGV2ZXJ5IGZyYW1lLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoYFZBTFVFOiAke3ZhbHVlfWAsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />

## Call Signature

```ts
color(
   r, 
   g, 
   b, 
   a?): TextmodeColor;
```

Create a reusable color object from RGB(A) values.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | `number` | Red component (0-255) |
| `g` | `number` | Green component (0-255) |
| `b` | `number` | Blue component (0-255) |
| `a?` | `number` | Optional alpha component (0-255) |

### Returns

[`TextmodeColor`](../../../namespaces/color/classes/TextmodeColor.md)

A TextmodeColor instance

### Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="color" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7Cgpjb25zdCBnb2xkTGF5ZXIgPSB0LmxheWVycy5hZGQoKTsKY29uc3QgY3lhbiA9IHQuY29sb3IoMTAwLCAyMjAsIDI1NSk7CmNvbnN0IGdvbGQgPSB0LmNvbG9yKDI1NSwgMjI1LCAxNDAsIDE1MCk7Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDYsIDEwLCAyMik7Cgl0LmNoYXJDb2xvcihjeWFuKTsKCXQuY2hhcignbycpOwoJdC50cmFuc2xhdGUoTWF0aC5jb3ModC5mcmFtZUNvdW50ICogMC4wMykgKiAxMCwgMCk7Cgl0LmVsbGlwc2UoMTIsIDEwKTsKfSk7Cgpnb2xkTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgl0LmNoYXJDb2xvcihnb2xkKTsKCXQuY2hhcignIycpOwoJdC5yZWN0KDEyLCA4KTsKfSk7CgpmdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7Cgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKHIsIGcsIGIpOwoJdC5wcmludCh0ZXh0LCB4LCB5KTsKCXQucG9wKCk7Cn0KCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CgoJZHJhd1RleHQoJ1RFWFRNT0RJRklFUi5DT0xPUjInLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBSR0JBIENPTE9SIE9CSkVDVCcsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnQ29tcGFjdCBBUEkgZGVtb25zdHJhdGlvbi4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdSR0JBIEFMUEhBOiAxNTAnLCB4LCB5KyssIDE0MCwgMjU1LCAxODApOwp9KTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />

## Call Signature

```ts
color(value): TextmodeColor;
```

Create a reusable color object from a CSS string or existing TextmodeColor.

Accepts hex strings (e.g. `'#FF0000'`) and `rgb()`/`rgba()` strings.
**Note:** Named CSS colors (e.g., `'red'`, `'blue'`) are **not** supported.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | \| `string` \| [`TextmodeColor`](../../../namespaces/color/classes/TextmodeColor.md) | Hex string, `rgb()`/`rgba()` string, or an existing color object |

### Returns

[`TextmodeColor`](../../../namespaces/color/classes/TextmodeColor.md)

A TextmodeColor instance

### Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="color" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgdmFsdWUgPSAwOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDYsIDEwLCAyMik7Cgl2YWx1ZSA9IE1hdGgucm91bmQoODAgKyA4MCAqIE1hdGguc2luKHQuZnJhbWVDb3VudCAqIDAuMDQpKTsKCXQuY2hhcignIycpOwoJY29uc3QgYyA9IHQuY29sb3IodmFsdWUgPiA4MCA_ICcjZmFjYzE1JyA6ICcjMzhiZGY4Jyk7Cgl0LmNoYXJDb2xvcihjKTsKCXQucmVjdCgxMCwgNSk7Cn0pOwoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCWRyYXdUZXh0KCdURVhUTU9ESUZJRVIuQ09MT1IzJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogSEVYIENPTE9SJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdDcmVhdGVzIGNvbG9yIGZyb20gaGV4IHN0cmluZy4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJ1RoZSB2YWx1ZSBwdWxzZXMgZXZlcnkgZnJhbWUuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCh2YWx1ZSA-IDgwID8gJ0hFWDogR09MRCcgOiAnSEVYOiBDWUFOJywgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
