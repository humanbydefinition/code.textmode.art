---
layout: doc
editLink: true
title: invert
description: Enable or disable source color inversion.
category: Methods
api: true
owner: TextmodeTexture
namespace: media
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../../../index.md) / [media](../../../index.md) / [TextmodeTexture](../../TextmodeTexture.md) / invert

# Method: invert()

```ts
invert(v?): this;
```

Enable or disable source color inversion.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | `number` \| `boolean` | `true` | Whether to invert colors. |

## Returns

`this`

This instance for chaining.

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="invert" encoded-code="Y29uc3QgSU1BR0VfVVJMID0gJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA2OTA1OTI1MzQ2LTIxYmRhNGQzMmRmND93PTkwMCZxPTgwJzsKY29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiA4LAp9KTsKCmNvbnN0IGxhYmVsTGF5ZXIgPSB0LmxheWVycy5hZGQoKTsKbGV0IGdyYWRpZW50U291cmNlID0gbnVsbDsKCnQuc2V0dXAoYXN5bmMgKCkgPT4gewoJZ3JhZGllbnRTb3VyY2UgPSBhd2FpdCB0LmxvYWRJbWFnZShJTUFHRV9VUkwpOwoJZ3JhZGllbnRTb3VyY2UuY2hhcmFjdGVycygnIC46LT0rKiMlQCcpOwp9KTsKCnQuZHJhdygoKSA9PiB7Cgl0LmJhY2tncm91bmQoNiwgMTAsIDIyKTsKCglpZiAoIWdyYWRpZW50U291cmNlKSByZXR1cm47CgoJY29uc3QgaW1nVyA9IDIwOwoJY29uc3QgaW1nSCA9IDEyOwoKCXQucHVzaCgpOwoJdC50cmFuc2xhdGUoLTEyLCAwKTsKCWdyYWRpZW50U291cmNlLmludmVydChmYWxzZSk7Cgl0LmltYWdlKGdyYWRpZW50U291cmNlLCBpbWdXLCBpbWdIKTsKCXQucG9wKCk7CgoJdC5wdXNoKCk7Cgl0LnRyYW5zbGF0ZSgxMiwgMCk7CglncmFkaWVudFNvdXJjZS5pbnZlcnQodHJ1ZSk7Cgl0LmltYWdlKGdyYWRpZW50U291cmNlLCBpbWdXLCBpbWdIKTsKCXQucG9wKCk7Cn0pOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KCdURVhUTU9ERVNPVVJDRS5JTlZFUlQnLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBJTlZFUlQgU09VUkNFIEJSSUdIVE5FU1MnLCB4LCB5KyssIDEwMCwgMjIwLCAyNTUpOwoJZHJhd1RleHQoJ0ludmVydHMgcGl4ZWwgY29sb3JzIGJlZm9yZSBtYXBwaW5nLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0lOVkVSVEVEIFNUQVRVUzogZmFsc2UgJiB0cnVlJywgeCwgeSsrLCAxNDAsIDE5MCwgMjU1KTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />

## Inherited from

[`TextmodeSource`](../../TextmodeSource.md).[`invert`](../../TextmodeSource/methods/invert.md)
