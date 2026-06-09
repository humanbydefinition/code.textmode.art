---
layout: doc
editLink: true
title: flipX
description: Flip the source horizontally.
category: Methods
api: true
owner: TextmodeImage
namespace: media
kind: Method
lastModified: 2026-06-09
---

[textmode.js](../../../../../index.md) / [media](../../../index.md) / [TextmodeImage](../../TextmodeImage.md) / flipX

# Method: flipX()

```ts
flipX(v?): this;
```

Flip the source horizontally.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | `number` \| `boolean` | `true` | Whether to flip horizontally. |

## Returns

`this`

This instance for chaining.

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="flipX" encoded-code="Y29uc3QgSU1BR0VfVVJMID0gJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA2OTA1OTI1MzQ2LTIxYmRhNGQzMmRmND93PTkwMCZxPTgwJzsKY29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiA4LAp9KTsKCmNvbnN0IGxhYmVsTGF5ZXIgPSB0LmxheWVycy5hZGQoKTsKbGV0IHNvdXJjZUEgPSBudWxsOwpsZXQgc291cmNlQiA9IG51bGw7Cgp0LnNldHVwKGFzeW5jICgpID0-IHsKCXNvdXJjZUEgPSBhd2FpdCB0LmxvYWRJbWFnZShJTUFHRV9VUkwpOwoJc291cmNlQS5jaGFyYWN0ZXJzKCcgLjotPSsqIyVAJyk7Cglzb3VyY2VBLmZsaXBYKGZhbHNlKTsKCglzb3VyY2VCID0gYXdhaXQgdC5sb2FkSW1hZ2UoSU1BR0VfVVJMKTsKCXNvdXJjZUIuY2hhcmFjdGVycygnIC46LT0rKiMlQCcpOwoJc291cmNlQi5mbGlwWCh0cnVlKTsKfSk7Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDYsIDEwLCAyMik7CgoJaWYgKCFzb3VyY2VBIHx8ICFzb3VyY2VCKSByZXR1cm47CgoJY29uc3QgaW1nVyA9IDIwOwoJY29uc3QgaW1nSCA9IDEyOwoKCXQucHVzaCgpOwoJdC50cmFuc2xhdGUoLTEyLCAwKTsKCXQuaW1hZ2Uoc291cmNlQSwgaW1nVywgaW1nSCk7Cgl0LnBvcCgpOwoKCXQucHVzaCgpOwoJdC50cmFuc2xhdGUoMTIsIDApOwoJdC5pbWFnZShzb3VyY2VCLCBpbWdXLCBpbWdIKTsKCXQucG9wKCk7Cn0pOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KCdURVhUTU9ERVNPVVJDRS5GTElQWCcsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IEZMSVAgU09VUkNFIEhPUklaT05UQUxMWScsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnRmxpcHMgaW1hZ2UgaG9yaXpvbnRhbGx5IGJlZm9yZSBtYXBwaW5nLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0ZMSVAgWCBTVEFUVVM6IGZhbHNlICYgdHJ1ZScsIHgsIHkrKywgMTQwLCAxOTAsIDI1NSk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />

## Inherited from

[`TextmodeSource`](../../TextmodeSource.md).[`flipX`](../../TextmodeSource/methods/flipX.md)
