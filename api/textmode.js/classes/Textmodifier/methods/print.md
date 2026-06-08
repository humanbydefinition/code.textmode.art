---
layout: doc
editLink: true
title: print
description: Print a string of text onto the active drawing layer.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / print

# Method: print()

```ts
print(
   str, 
   x, 
   y, 
   options?): void;
```

Print a string of text onto the active drawing layer.

Supports custom leading, letter spacing, tab size, and inline BBCode-style formatting tags
like `[fg=red]`, `[bg=color]`, `[inv]`, `[rot=90]`, `[fx]`, `[fy]`, and their closing tags.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The text string to print. |
| `x` | `number` | Coordinate along the horizontal axis in cells. |
| `y` | `number` | Coordinate along the vertical axis in cells. |
| `options?` | \{ `leading?`: `number`; `letterSpacing?`: `number`; `markup?`: `boolean`; `tabSize?`: `number`; \} | Optional printing configurations. |
| `options.leading?` | `number` | Distance between printed lines in cells. |
| `options.letterSpacing?` | `number` | Extra horizontal spacing between characters in cells. |
| `options.markup?` | `boolean` | Whether to parse inline BBCode-style formatting tags. |
| `options.tabSize?` | `number` | Number of spaces used for tab characters. |

## Returns

`void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="print" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDYsIDEwLCAyMik7CgoJLy8gU3VidGxlIGR5bmFtaWMgYmFja2dyb3VuZCBwYXJ0aWNsZXMKCWZvciAobGV0IGkgPSAwOyBpIDwgMTU7IGkrKykgewoJCWNvbnN0IGFuZ2xlID0gdC5mcmFtZUNvdW50ICogMC4wMiArIGk7CgkJY29uc3QgcmFkaXVzID0gOCArIChpICUgMykgKiAyLjU7CgkJdC5wdXNoKCk7CgkJdC50cmFuc2xhdGUoTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzICogMS42LCBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXMpOwoJCXQuY2hhckNvbG9yKDMwLCA0NSwgODApOwoJCXQuY2hhcihpICUgMiA9PT0gMCA_ICcuJyA6ICcrJyk7CgkJdC5wb2ludCgpOwoJCXQucG9wKCk7Cgl9Cn0pOwoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCgl0LnB1c2goKTsKCXQuY2hhckNvbG9yKDEwMCwgMjU1LCAxNDApOwoJdC5wcmludCgnVEVYVE1PRElGSUVSLlBSSU5UJywgeCwgeSsrKTsKCXQucG9wKCk7CgoJdC5wdXNoKCk7Cgl0LmNoYXJDb2xvcig4MCwgMTAwLCAxNTApOwoJdC5wcmludCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrKTsKCXQucG9wKCk7CgoJdC5wdXNoKCk7Cgl0LmNoYXJDb2xvcigxMDAsIDIyMCwgMjU1KTsKCXQucHJpbnQoJ0NPTkNFUFQ6IE5BVElWRSBSSUNIIFRZUE9HUkFQSFknLCB4LCB5KyspOwoJdC5wb3AoKTsKCgl0LnB1c2goKTsKCXQuY2hhckNvbG9yKDE0MCwgMTYwLCAxOTApOwoJdC5wcmludCgnUHJpbnRzIHN0cmluZ3Mgd2l0aCBpbmxpbmUgQkJDb2RlLXN0eWxlIHRhZ3M6JywgeCwgeSsrKTsKCXQucHJpbnQoJyAgLSBbZmc9Z3JlZW5dRm9yZWdyb3VuZCBDb2xvclsvZmddJywgeCwgeSsrKTsKCXQucHJpbnQoJyAgLSBbYmc9Ymx1ZV1CYWNrZ3JvdW5kIENvbG9yWy9iZ10nLCB4LCB5KyspOwoJdC5wcmludCgnICAtIFtpbnZdSW52ZXJ0ZWQgY29sb3JzWy9pbnZdJywgeCwgeSsrKTsKCXQucHJpbnQoJyAgLSBbcm90PTkwXVJvdGF0ZWRbL3JvdF0gW2Z4XUZsaXAgWFsvZnhdIFtmeV1GbGlwIFlbL2Z5XScsIHgsIHkrKyk7Cgl0LnBvcCgpOwoKCXQucHVzaCgpOwoJdC5jaGFyQ29sb3IoODAsIDEwMCwgMTUwKTsKCXQucHJpbnQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKyk7Cgl0LnBvcCgpOwoKCXQucHJpbnQoJ05FU1RFRDogW2ZnPXllbGxvd11baW52XVtyb3Q9MTgwXSBMRVZFTCAwNSBbL3JvdF1bL2ludl1bL2ZnXSB8IFNUQVRVUzogW2ZnPXJlZF1DUklUSUNBTFsvZmddJywgeCwgeSsrKTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
