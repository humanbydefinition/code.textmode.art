---
layout: doc
editLink: true
title: box
description: Draw a box mesh primitive.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-09
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / box

# Method: box()

```ts
box(
   width?, 
   height?, 
   depth?): void;
```

Draw a box mesh primitive.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `width?` | `number` | Width in grid cells (defaults to 50). |
| `height?` | `number` | Height in grid cells (defaults to width). |
| `depth?` | `number` | Depth in grid cells (defaults to height). |

## Returns

`void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="box" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgc3BpbiA9IDA7CgpmdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7Cgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKHIsIGcsIGIpOwoJdC5wcmludCh0ZXh0LCB4LCB5KTsKCXQucG9wKCk7Cn0KCnQuZHJhdygoKSA9PiB7Cgl0LmJhY2tncm91bmQoNiwgOCwgMTgpOwoJY29uc3QgdGltZSA9IHQuZnJhbWVDb3VudCAqIDAuMDI1OwoJc3BpbiA9ICh0aW1lICogNDApICUgMzYwOwoJdC5wZXJzcGVjdGl2ZSg1OCwgMC4xLCA0MDk2KTsKCXQuY2FtZXJhKDE4LCAtMTAsIDQyLCAwLCAwLCAwKTsKCXQuYW1iaWVudExpZ2h0KDI0LCAyOCwgMzgpOwoJdC5wb2ludExpZ2h0KFsyNTUsIDIxMCwgMTQwXSwgeyB4OiAxOCwgeTogLTE4LCB6OiAyOCB9KTsKCXQucHVzaCgpOwoJdC50cmFuc2xhdGUoNSwgMSwgMCk7Cgl0LnJvdGF0ZVkoc3Bpbik7Cgl0LnJvdGF0ZVgoMTgpOwoJdC5jaGFyKCcjJyk7Cgl0LmNoYXJDb2xvcigxNDAsIDIyMCwgMjU1KTsKCXQuY2VsbENvbG9yKDE2LCAyNCwgNDIpOwoJdC5ib3goOSwgNywgOCk7Cgl0LnBvcCgpOwp9KTsKCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CglkcmF3VGV4dCgnVEVYVE1PRElGSUVSLkJPWCcsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IDNEIEJPWCcsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnV2lkdGgsIGhlaWdodCwgYW5kIGRlcHRoIHZhcnkuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCdDYW1lcmEgYW5kIGxpZ2h0IHJldmVhbCBkZXB0aC4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KGBTUElOOiAke3NwaW4udG9GaXhlZCgxKX1gLCB4LCB5KyssIDE0MCwgMjU1LCAxODApOwp9KTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />
