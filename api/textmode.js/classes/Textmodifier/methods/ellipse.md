---
layout: doc
editLink: true
title: ellipse
description: Draw an ellipse with the current settings. Position is controlled via translate, push, and pop.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / ellipse

# Method: ellipse()

```ts
ellipse(width?, height?): void;
```

Draw an ellipse with the current settings.
Position is controlled via [translate](translate.md), [push](push.md), and [pop](pop.md).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `width?` | `number` | Ellipse width in grid cells. Defaults to 1. |
| `height?` | `number` | Ellipse height in grid cells. Defaults to 1. |

## Returns

`void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="ellipse" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgcnggPSAwOwpsZXQgcnkgPSAwOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDYsIDEwLCAyMik7Cgljb25zdCB0aW1lID0gdC5mcmFtZUNvdW50ICogMC4wMzsKCXJ4ID0gMTAgKyBNYXRoLnNpbih0aW1lKSAqIDQ7CglyeSA9IDUgKyBNYXRoLmNvcyh0aW1lICogMC44KSAqIDI7Cgl0LnB1c2goKTsKCXQudHJhbnNsYXRlKDgsIDEpOwoJdC5jaGFyKCdvJyk7Cgl0LmNoYXJDb2xvcigxNDAsIDIyMCwgMjU1KTsKCXQuY2VsbENvbG9yKDE1LCAyNSwgNTApOwoJdC5lbGxpcHNlKHJ4LCByeSk7Cgl0LnBvcCgpOwp9KTsKCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CglkcmF3VGV4dCgnVEVYVE1PRElGSUVSLkVMTElQU0UnLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBPVkFMIFBSSU1JVElWRScsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnUmFkaXVzIFggYW5kIFkgYW5pbWF0ZS4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJ1RoZSBzaGFwZSBzdGF5cyBjZW50ZXJlZCBsb2NhbGx5LicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoYFJYOiAke3J4LnRvRml4ZWQoMSl9YCwgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKCWRyYXdUZXh0KGBSWTogJHtyeS50b0ZpeGVkKDEpfWAsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
