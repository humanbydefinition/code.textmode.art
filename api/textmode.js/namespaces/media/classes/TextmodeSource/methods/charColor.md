---
layout: doc
editLink: true
title: charColor
description: Set the character color used when charColorMode is 'fixed'.
category: Methods
api: true
owner: TextmodeSource
namespace: media
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../../../index.md) / [media](../../../index.md) / [TextmodeSource](../../TextmodeSource.md) / charColor

# Method: charColor()

```ts
charColor(
   colorOrGray, 
   g?, 
   b?, 
   a?): this;
```

Set the character color used when [charColorMode](charColorMode.md) is `'fixed'`.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `colorOrGray` | \| `string` \| `number` \| [`TextmodeColor`](../../../../color/classes/TextmodeColor.md) | A grayscale value (0-255), hex string ('#RGB', '#RRGGBB', '#RRGGBBAA'), or TextmodeColor instance |
| `g?` | `number` | Optional green component (0-255) if using RGB format, or alpha (0-255) when using grayscale form |
| `b?` | `number` | Optional blue component (0-255) if using RGB format |
| `a?` | `number` | Optional alpha component (0-255) if using RGBA format |

## Returns

`this`

This instance for chaining.

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="charColor" encoded-code="Y29uc3QgSU1BR0VfVVJMID0gJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA2OTA1OTI1MzQ2LTIxYmRhNGQzMmRmND93PTkwMCZxPTgwJzsKY29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiA4LAp9KTsKCmNvbnN0IGxhYmVsTGF5ZXIgPSB0LmxheWVycy5hZGQoKTsKbGV0IHRlY2hTb3VyY2UgPSBudWxsOwpsZXQgciA9IDE1MDsKbGV0IGcgPSAxNTA7Cgp0LnNldHVwKGFzeW5jICgpID0-IHsKCXRlY2hTb3VyY2UgPSBhd2FpdCB0LmxvYWRJbWFnZShJTUFHRV9VUkwpOwoJdGVjaFNvdXJjZS5jaGFyYWN0ZXJzKCcgLjotPSsqIyVAJyk7Cgl0ZWNoU291cmNlLmNoYXJDb2xvck1vZGUoJ2ZpeGVkJyk7Cn0pOwoKdC5kcmF3KCgpID0-IHsKCXQuYmFja2dyb3VuZCg2LCAxMCwgMjIpOwoKCWlmICghdGVjaFNvdXJjZSkgcmV0dXJuOwoKCWNvbnN0IHRpbWUgPSB0LmZyYW1lQ291bnQgKiAwLjA0OwoJciA9IE1hdGgucm91bmQoMTUwICsgMTA1ICogTWF0aC5zaW4odGltZSkpOwoJZyA9IE1hdGgucm91bmQoMTUwICsgMTA1ICogTWF0aC5jb3ModGltZSAqIDAuNykpOwoKCXRlY2hTb3VyY2UuY2hhckNvbG9yKHIsIGcsIDEwMCk7CgoJdC5wdXNoKCk7Cgl0LnRyYW5zbGF0ZSgwLCAwKTsKCXQuaW1hZ2UodGVjaFNvdXJjZSwgMjQsIDE0KTsKCXQucG9wKCk7Cn0pOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KCdURVhUTU9ERVNPVVJDRS5DSEFSQ09MT1InLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBTRVQgQ09OU1RBTlQgQ0hBUkFDVEVSIENPTE9SJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdTZXRzIGNvbG9yIHVzZWQgaW4gZml4ZWQgY29sb3JpbmcgbW9kZS4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KGBDSEFSIENPTE9SOiBSR0IoJHtyfSwke2d9LDEwMClgLCB4LCB5KyssIDE0MCwgMTkwLCAyNTUpOwp9KTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />
