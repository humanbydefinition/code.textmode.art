---
layout: doc
editLink: true
title: image
description: Draw a framebuffer, image, video, or texture source to the currently bound framebuffer.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / image

# Method: image()

```ts
image(
   source, 
   width?, 
   height?): void;
```

Draw a framebuffer, image, video, or texture source to the currently bound framebuffer.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | \| [`TextmodeFramebuffer`](../../TextmodeFramebuffer.md) \| [`TextmodeImage`](../../../namespaces/media/classes/TextmodeImage.md) \| [`TextmodeTexture`](../../../namespaces/media/classes/TextmodeTexture.md) \| [`TextmodeVideo`](../../../namespaces/media/classes/TextmodeVideo.md) | Source to render. |
| `width?` | `number` | Width in grid cells. Defaults to an aspect-ratio-preserving fit. |
| `height?` | `number` | Height in grid cells. Defaults to an aspect-ratio-preserving fit. |

## Returns

`void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="image" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7Cgpjb25zdCBmYiA9IHQuY3JlYXRlRnJhbWVidWZmZXIoeyB3aWR0aDogMjQsIGhlaWdodDogMTQgfSk7CgpmdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7Cgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKHIsIGcsIGIpOwoJdC5wcmludCh0ZXh0LCB4LCB5KTsKCXQucG9wKCk7Cn0KCnQuZHJhdygoKSA9PiB7Cgl0LmJhY2tncm91bmQoNiwgMTAsIDIyKTsKCWZiLmJlZ2luKCk7Cgl0LmNsZWFyKCk7Cgl0LmJhY2tncm91bmQoMjAsIDMwLCA2MCk7Cgl0LnJvdGF0ZVoodC5mcmFtZUNvdW50ICogMik7Cgl0LmNoYXIoJyMnKTsKCXQuY2hhckNvbG9yKDI1NSwgMjEwLCAxMjApOwoJdC5yZWN0KDEyLCA0KTsKCWZiLmVuZCgpOwoJdC5pbWFnZShmYiwgMjQsIDE0KTsKfSk7CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoJZHJhd1RleHQoJ1RFWFRNT0RJRklFUi5JTUFHRScsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IERSQVcgSU1BR0UgU09VUkNFJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdGcmFtZWJ1ZmZlciBpcyBkcmF3biBhcyBpbWFnZS4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJ09mZnNjcmVlbiBjb250ZW50IHJvdGF0ZXMuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnU09VUkNFOiBGUkFNRUJVRkZFUicsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
