---
layout: doc
editLink: true
title: background
description: Set the background color used for transparent pixels.
category: Methods
api: true
owner: TextmodeSource
namespace: media
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../../../index.md) / [media](../../../index.md) / [TextmodeSource](../../TextmodeSource.md) / background

# Method: background()

```ts
background(
   colorOrGray, 
   g?, 
   b?, 
   a?): this;
```

Set the background color used for transparent pixels.

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

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="background" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CmxldCBzb3VyY2VBLCBzb3VyY2VCOwoKZnVuY3Rpb24gY3JlYXRlVHJhbnNwYXJlbnRDYW52YXMoKSB7Cgljb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTsKCWNhbnZhcy53aWR0aCA9IDEyODsKCWNhbnZhcy5oZWlnaHQgPSAxMjg7Cgljb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTsKCWlmICghY3R4KSByZXR1cm4gY2FudmFzOwoKCWN0eC5jbGVhclJlY3QoMCwgMCwgMTI4LCAxMjgpOwoJY3R4LmxpbmVXaWR0aCA9IDEwOwoJY3R4LnN0cm9rZVN0eWxlID0gJyNmZmZmZmYnOwoJY3R4LnN0cm9rZVJlY3QoMjAsIDIwLCA4OCwgODgpOwoKCWN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7CgljdHguYmVnaW5QYXRoKCk7CgljdHguYXJjKDY0LCA2NCwgMzAsIDAsIE1hdGguUEkgKiAyKTsKCWN0eC5maWxsKCk7CgoJcmV0dXJuIGNhbnZhczsKfQoKdC5zZXR1cCgoKSA9PiB7Cgljb25zdCBjYW52YXMgPSBjcmVhdGVUcmFuc3BhcmVudENhbnZhcygpOwoKCXNvdXJjZUEgPSB0LmNyZWF0ZVRleHR1cmUoY2FudmFzKTsKCXNvdXJjZUEuY2hhcmFjdGVycygnIC46LT0rKiMlQCcpOwoKCXNvdXJjZUIgPSB0LmNyZWF0ZVRleHR1cmUoY2FudmFzKTsKCXNvdXJjZUIuY2hhcmFjdGVycygnIC46LT0rKiMlQCcpOwp9KTsKCnQuZHJhdygoKSA9PiB7Cgl0LmJhY2tncm91bmQoNiwgMTAsIDIyKTsKCWlmICghc291cmNlQSB8fCAhc291cmNlQikgcmV0dXJuOwoKCWNvbnN0IHRpbWUgPSB0LmZyYW1lQ291bnQgKiAwLjA1OwoJY29uc3QgcHVsc2UgPSAwLjUgKyAwLjUgKiBNYXRoLnNpbih0aW1lKTsKCXNvdXJjZUIuYmFja2dyb3VuZChwdWxzZSAqIDI1NSwgMTAwLCAyNTUgLSBwdWxzZSAqIDE1NSk7CgoJY29uc3QgaW1nVyA9IDIwOwoJY29uc3QgaW1nSCA9IDEyOwoKCXQucHVzaCgpOwoJdC50cmFuc2xhdGUoLTEyLCAwKTsKCXQuaW1hZ2Uoc291cmNlQSwgaW1nVywgaW1nSCk7Cgl0LnBvcCgpOwoKCXQucHVzaCgpOwoJdC50cmFuc2xhdGUoMTIsIDApOwoJdC5pbWFnZShzb3VyY2VCLCBpbWdXLCBpbWdIKTsKCXQucG9wKCk7Cn0pOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KCdURVhUTU9ERVNPVVJDRS5CQUNLR1JPVU5EJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogVFJBTlNQQVJFTlQgUElYRUwgRklMTCcsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnRmlsbHMgdHJhbnNwYXJlbnQgcGl4ZWxzIGJlZm9yZSBtYXBwaW5nLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0xlZnQgIDogREVGQVVMVCBCTEFDSyBGQUxMQkFDSycsIHgsIHkrKywgMTQwLCAxODAsIDI1NSk7CglkcmF3VGV4dCgnUmlnaHQgOiBDVVNUT00gQkcgUFVMU0UgRklMTCcsIHgsIHkrKywgMjU1LCAxODAsIDEwMCk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
