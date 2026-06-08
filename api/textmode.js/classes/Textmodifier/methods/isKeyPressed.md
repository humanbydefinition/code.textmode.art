---
layout: doc
editLink: true
title: isKeyPressed
description: Check whether a key is currently pressed.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / isKeyPressed

# Method: isKeyPressed()

```ts
isKeyPressed(key): boolean;
```

Check whether a key is currently pressed.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to check (e.g., 'a', 'Enter', 'ArrowLeft') |

## Returns

`boolean`

`true` when the key is currently pressed.

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="isKeyPressed" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgZG93biA9IGZhbHNlOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDYsIDEwLCAyMik7Cglkb3duID0gdC5pc0tleVByZXNzZWQoJyAnKTsKCXQuY2hhcihkb3duID8gJ0AnIDogJy4nKTsKCXQuY2hhckNvbG9yKGRvd24gPyAxNDAgOiAxMDAsIGRvd24gPyAyNTUgOiAxMjAsIDE4MCk7Cgl0LnJlY3QoMTAsIDUpOwp9KTsKCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CglkcmF3VGV4dCgnVEVYVE1PRElGSUVSLklTS0VZUFJFU1NFRCcsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IEhFTEQgS0VZIENIRUNLJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdIb2xkIFNwYWNlIHRvIGFjdGl2YXRlLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnR29vZCBmb3IgY29udGludW91cyBtb3Rpb24uJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dChkb3duID8gJ1NQQUNFOiBET1dOJyA6ICdTUEFDRTogVVAnLCB4LCB5KyssIDE0MCwgMjU1LCAxODApOwp9KTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />
