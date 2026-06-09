---
layout: doc
editLink: true
title: offset
description: Set or get this layer's compositing offset in pixels.
category: Methods
api: true
owner: TextmodeLayer
namespace: layering
kind: Method
lastModified: 2026-06-09
---

[textmode.js](../../../../../index.md) / [layering](../../../index.md) / [TextmodeLayer](../../TextmodeLayer.md) / offset

# Method: offset()

```ts
offset(x?, y?): 
  | void
  | {
  x: number;
  y: number;
};
```

Set or get this layer's compositing offset in pixels.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `x?` | `number` | `undefined` | Horizontal offset in pixels. |
| `y?` | `number` | `0` | Vertical offset in pixels. |

## Returns

  \| `void`
  \| \{
  `x`: `number`;
  `y`: `number`;
\}

Current offset when called without arguments.

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="offset" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBvZmZzZXRMYXllciA9IHQubGF5ZXJzLmFkZCh7IGJsZW5kTW9kZTogJ2FkZGl0aXZlJyB9KTsKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwpsZXQgY3VycmVudE9mZnNldCA9IHsgeDogMCwgeTogMCB9OwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgcmdiID0gWzI1NSwgMjU1LCAyNTVdKSB7Cgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKHJnYlswXSwgcmdiWzFdLCByZ2JbMl0pOwoJdC5wcmludCh0ZXh0LCB4LCB5KTsKCXQucG9wKCk7Cn0KCnQuZHJhdygoKSA9PiB7Cgl0LmJhY2tncm91bmQoNiwgMTAsIDIyKTsKCgljb25zdCB0aW1lID0gdC5mcmFtZUNvdW50ICogMC4wMzsKCWNvbnN0IGcgPSB0LmdyaWQ7CgoJY29uc3Qgb2ZmWCA9IE1hdGgucm91bmQoTWF0aC5jb3ModGltZSkgKiAoZy53aWR0aCAqIDAuMjUpKTsKCWNvbnN0IG9mZlkgPSBNYXRoLnJvdW5kKE1hdGguc2luKHRpbWUgKiAwLjcpICogKGcuaGVpZ2h0ICogMC4yNSkpOwoKCWN1cnJlbnRPZmZzZXQgPSB7IHg6IG9mZlgsIHk6IG9mZlkgfTsKCW9mZnNldExheWVyLm9mZnNldChvZmZYLCBvZmZZKTsKCgljb25zdCB0YXJnZXRHcmlkWCA9IE1hdGgucm91bmQob2ZmWCAvIGcuY2VsbFdpZHRoKTsKCWNvbnN0IHRhcmdldEdyaWRZID0gTWF0aC5yb3VuZChvZmZZIC8gZy5jZWxsSGVpZ2h0KTsKCgl0LnB1c2goKTsKCXQuY2hhckNvbG9yKDYwLCA3MCwgMTAwLCAxNTApOwoJdC5jaGFyKCcuJyk7Cgl0LmxpbmUoMCwgMCwgdGFyZ2V0R3JpZFgsIHRhcmdldEdyaWRZKTsKCXQucG9wKCk7CgoJdC5wdXNoKCk7Cgl0LmNoYXJDb2xvcigxMDAsIDEyMCwgMTUwKTsKCXQuY2hhcignKycpOwoJdC5wb2ludCgpOwoJdC5wb3AoKTsKfSk7CgpvZmZzZXRMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCgl0LnB1c2goKTsKCXQuY2hhckNvbG9yKDI1NSwgMTgwLCAxMDApOwoJdC5jaGFyKCcjJyk7Cgl0LnJlY3QoNywgMyk7Cgl0LnBvcCgpOwp9KTsKCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CgoJZHJhd1RleHQoJ1RFWFRNT0RFTEFZRVIuT0ZGU0VUJywgeCwgeSsrLCBbMTAwLCAyNTUsIDE0MF0pOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgWzgwLCAxMDAsIDE1MF0pOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IFBJWEVMIE9GRlNFVCcsIHgsIHkrKywgWzEwMCwgMjIwLCAyNTVdKTsKCWRyYXdUZXh0KCdNb3ZlcyB0aGUgbGF5ZXIgZHVyaW5nIGNvbXBvc2l0ZS4nLCB4LCB5KyssIFsxNDAsIDE2MCwgMTkwXSk7CglkcmF3VGV4dCgnRHJhd2luZyBjb29yZGluYXRlcyBzdGF5IGxvY2FsLicsIHgsIHkrKywgWzE0MCwgMTYwLCAxOTBdKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIFs4MCwgMTAwLCAxNTBdKTsKCWRyYXdUZXh0KGBPRkZTRVQgWDogJHtjdXJyZW50T2Zmc2V0Lnh9IFBYYCwgeCwgeSsrLCBbMjU1LCAxODAsIDEwMF0pOwoJZHJhd1RleHQoYE9GRlNFVCBZOiAke2N1cnJlbnRPZmZzZXQueX0gUFhgLCB4LCB5KyssIFsyNTUsIDE4MCwgMTAwXSk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
