---
layout: doc
editLink: true
title: rect
description: Draw a rectangle with the current settings. Position is controlled via translate, push, and pop.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / rect

# Method: rect()

```ts
rect(width?, height?): void;
```

Draw a rectangle with the current settings.
Position is controlled via [translate](translate.md), [push](push.md), and [pop](pop.md).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `width?` | `number` | Rectangle width in grid cells. Defaults to 1. |
| `height?` | `number` | Rectangle height in grid cells. Defaults to 1. |

## Returns

`void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="rect" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgd2lkdGhDZWxscyA9IDA7CmxldCBoZWlnaHRDZWxscyA9IDA7CgpmdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7Cgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKHIsIGcsIGIpOwoJdC5wcmludCh0ZXh0LCB4LCB5KTsKCXQucG9wKCk7Cn0KCnQuZHJhdygoKSA9PiB7Cgl0LmJhY2tncm91bmQoNiwgMTAsIDIyKTsKCWNvbnN0IHRpbWUgPSB0LmZyYW1lQ291bnQgKiAwLjAzOwoJd2lkdGhDZWxscyA9IDEyICsgTWF0aC5yb3VuZChNYXRoLnNpbih0aW1lKSAqIDUpOwoJaGVpZ2h0Q2VsbHMgPSA2ICsgTWF0aC5yb3VuZChNYXRoLmNvcyh0aW1lICogMC44KSAqIDMpOwoJdC5wdXNoKCk7Cgl0LnRyYW5zbGF0ZSg4LCAxKTsKCXQucm90YXRlWihNYXRoLnNpbih0aW1lKSAqIDgpOwoJdC5jaGFyKCcjJyk7Cgl0LmNoYXJDb2xvcigxMjAsIDIyMCwgMjU1KTsKCXQuY2VsbENvbG9yKDIwLCAzMCwgNjApOwoJdC5yZWN0KHdpZHRoQ2VsbHMsIGhlaWdodENlbGxzKTsKCXQucG9wKCk7Cn0pOwoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCWRyYXdUZXh0KCdURVhUTU9ESUZJRVIuUkVDVCcsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IFJFQ1RBTkdMRSBTSEFQRScsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnRHJhd3Mgd2lkdGggYnkgaGVpZ2h0IGNlbGxzLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnU2NlbmUgc2hpZnRlZCBjbGVhciBvZiB0aGUgSFVELicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoYFc6ICR7d2lkdGhDZWxsc31gLCB4LCB5KyssIDE0MCwgMjU1LCAxODApOwoJZHJhd1RleHQoYEg6ICR7aGVpZ2h0Q2VsbHN9YCwgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
