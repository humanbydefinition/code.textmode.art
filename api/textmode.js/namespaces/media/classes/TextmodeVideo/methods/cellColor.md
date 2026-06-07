---
layout: doc
editLink: true
title: cellColor
description: Set the cell color used when cellColorMode is 'fixed'.
category: Methods
api: true
owner: TextmodeVideo
namespace: media
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../../../index.md) / [media](../../../index.md) / [TextmodeVideo](../../TextmodeVideo.md) / cellColor

# Method: cellColor()

```ts
cellColor(
   colorOrGray, 
   g?, 
   b?, 
   a?): this;
```

Set the cell color used when [cellColorMode](../../TextmodeSource/methods/cellColorMode.md) is `'fixed'`.

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

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="cellColor" encoded-code="Y29uc3QgSU1BR0VfVVJMID0gJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA2OTA1OTI1MzQ2LTIxYmRhNGQzMmRmND93PTkwMCZxPTgwJzsKY29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiA4LAp9KTsKCmNvbnN0IGxhYmVsTGF5ZXIgPSB0LmxheWVycy5hZGQoKTsKbGV0IHRlY2hTb3VyY2UgPSBudWxsOwpsZXQgcmVkID0gNDA7CmxldCBibHVlID0gODA7Cgp0LnNldHVwKGFzeW5jICgpID0-IHsKCXRlY2hTb3VyY2UgPSBhd2FpdCB0LmxvYWRJbWFnZShJTUFHRV9VUkwpOwoJdGVjaFNvdXJjZS5jaGFyYWN0ZXJzKCcgLjotPSsqIyVAJyk7Cgl0ZWNoU291cmNlLmNoYXJDb2xvck1vZGUoJ2ZpeGVkJykuY2hhckNvbG9yKDI1NSk7Cgl0ZWNoU291cmNlLmNlbGxDb2xvck1vZGUoJ2ZpeGVkJyk7Cn0pOwoKdC5kcmF3KCgpID0-IHsKCXQuYmFja2dyb3VuZCg2LCAxMCwgMjIpOwoKCWlmICghdGVjaFNvdXJjZSkgcmV0dXJuOwoKCWNvbnN0IHRpbWUgPSB0LmZyYW1lQ291bnQgKiAwLjA0OwoJcmVkID0gTWF0aC5yb3VuZCg0MCArIDQwICogTWF0aC5zaW4odGltZSkpOwoJYmx1ZSA9IE1hdGgucm91bmQoODAgKyA0MCAqIE1hdGguY29zKHRpbWUgKiAwLjcpKTsKCgl0ZWNoU291cmNlLmNlbGxDb2xvcihyZWQsIDQwLCBibHVlKTsKCgl0LnB1c2goKTsKCXQudHJhbnNsYXRlKDAsIDApOwoJdC5pbWFnZSh0ZWNoU291cmNlLCAyNCwgMTQpOwoJdC5wb3AoKTsKfSk7CgpmdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7Cgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKHIsIGcsIGIpOwoJdC5wcmludCh0ZXh0LCB4LCB5KTsKCXQucG9wKCk7Cn0KCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CgoJZHJhd1RleHQoJ1RFWFRNT0RFU09VUkNFLkNFTExDT0xPUicsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IFNFVCBDT05TVEFOVCBDRUxMIENPTE9SJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdTZXRzIGNvbG9yIHVzZWQgaW4gZml4ZWQgY29sb3JpbmcgbW9kZS4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KGBDRUxMIENPTE9SOiBSR0IoJHtyZWR9LDQwLCR7Ymx1ZX0pYCwgeCwgeSsrLCAxNDAsIDE5MCwgMjU1KTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />

## Inherited from

[`TextmodeTexture`](../../TextmodeTexture.md).[`cellColor`](../../TextmodeTexture/methods/cellColor.md)
