---
layout: doc
editLink: true
title: arc
description: Draw an arc with the current settings. Position is controlled via translate, push, and pop.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / arc

# Method: arc()

```ts
arc(
   width, 
   height, 
   startAngle, 
   endAngle): void;
```

Draw an arc with the current settings.
Position is controlled via [translate](translate.md), [push](push.md), and [pop](pop.md).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `width` | `number` | Arc width in grid cells. |
| `height` | `number` | Arc height in grid cells. |
| `startAngle` | `number` | Starting angle in degrees. |
| `endAngle` | `number` | Ending angle in degrees. |

## Returns

`void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="arc" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgc3RhcnREZWcgPSAwOwpsZXQgZW5kRGVnID0gMDsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKdC5kcmF3KCgpID0-IHsKCXQuYmFja2dyb3VuZCg2LCAxMCwgMjIpOwoJY29uc3QgdGltZSA9IHQuZnJhbWVDb3VudCAqIDAuMDM7CglzdGFydERlZyA9ICh0aW1lICogNjApICUgMzYwOwoJZW5kRGVnID0gc3RhcnREZWcgKyAxMTAgKyBNYXRoLnNpbih0aW1lKSAqIDM1OwoJdC5wdXNoKCk7Cgl0LnRyYW5zbGF0ZSg4LCAxKTsKCXQuY2hhcignIycpOwoJdC5jaGFyQ29sb3IoMTQwLCAxODAsIDI1NSk7Cgl0LmFyYygyMiwgMTIsIHN0YXJ0RGVnLCBlbmREZWcpOwoJdC5jaGFyQ29sb3IoNjAsIDcwLCAxMDApOwoJdC5saW5lKDAsIDAsIE1hdGguY29zKChzdGFydERlZyAqIE1hdGguUEkpIC8gMTgwKSAqIDExLCBNYXRoLnNpbigoc3RhcnREZWcgKiBNYXRoLlBJKSAvIDE4MCkgKiA2KTsKCXQucG9wKCk7Cn0pOwoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCWRyYXdUZXh0KCdURVhUTU9ESUZJRVIuQVJDJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogUEFSVElBTCBFTExJUFNFJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdBbmltYXRlZCBzdGFydCBhbmQgZW5kIGFuZ2xlcy4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJ0d1aWRlIGxpbmUgbWFya3MgdGhlIHN0YXJ0LicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoYFNUQVJUOiAke3N0YXJ0RGVnLnRvRml4ZWQoMSl9YCwgeCwgeSsrLCAyNTUsIDIxMCwgMTIwKTsKCWRyYXdUZXh0KGBFTkQ6ICR7ZW5kRGVnLnRvRml4ZWQoMSl9YCwgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
