---
layout: doc
editLink: true
title: translate
description: Translate subsequent shape drawing.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / translate

# Method: translate()

```ts
translate(
   x?, 
   y?, 
   z?): void;
```

Translate subsequent shape drawing.

All geometries are displaced by the specified amounts. Similar to p5.js translate().

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x?` | `number` | Translation along the X axis in grid cells. Defaults to 0. |
| `y?` | `number` | Translation along the Y axis in grid cells. Defaults to 0. |
| `z?` | `number` | Translation along the Z axis in grid cells. Defaults to 0. |

## Returns

`void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="translate" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgdmFsdWUgPSAwOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDYsIDEwLCAyMik7Cgljb25zdCB0aW1lID0gdC5mcmFtZUNvdW50ICogMC4wNDsKCXZhbHVlID0gTWF0aC5zaW4odGltZSkgKiAxMjsKCXQuY2hhckNvbG9yKDUwLCA2MCwgOTApOwoJdC5jaGFyKCcuJyk7Cgl0LmxpbmUoLTE4LCAwLCAxOCwgMCk7Cgl0LmxpbmUoMCwgLTEwLCAwLCAxMCk7Cgl0LnB1c2goKTsKCXQudHJhbnNsYXRlKHZhbHVlLCBNYXRoLmNvcyh0aW1lKSAqIDUsIDApOwoJdC5jaGFyKCcjJyk7Cgl0LmNoYXJDb2xvcigxNDAsIDI1NSwgMTgwKTsKCXQucmVjdCg2LCA0KTsKCXQucG9wKCk7Cn0pOwoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCWRyYXdUZXh0KCdURVhUTU9ESUZJRVIuVFJBTlNMQVRFJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogTU9WRSBPUklHSU4nLCB4LCB5KyssIDEwMCwgMjIwLCAyNTUpOwoJZHJhd1RleHQoJ01vdmVzIHgsIHksIGFuZCB6IHRvZ2V0aGVyLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnR3JpZCBjcm9zcyBzaG93cyBvcmlnaW5hbCBheGVzLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoYFg6ICR7dmFsdWUudG9GaXhlZCgxKX1gLCB4LCB5KyssIDE0MCwgMjU1LCAxODApOwp9KTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />
