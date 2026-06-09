---
layout: doc
editLink: true
title: modulateScrollX
description: Modulate X scroll using another source.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / modulateScrollX

# Method: modulateScrollX()

```ts
modulateScrollX(
   source, 
   scrollX?, 
   speed?): this;
```

Modulate X scroll using another source.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Modulation source |
| `scrollX?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | X scroll amount (default: 0.5) |
| `speed?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Scroll speed (default: 0.0) |

## Returns

`this`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="modulateScrollX" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiA4LAoJcGx1Z2luczogW1N5bnRoUGx1Z2luXSwKfSk7Cgp0LmJwbSgxOCk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CmNvbnN0IGdseXBocyA9ICcgLjotPSsqIyVAJzsKY29uc3QgdHVybiA9IFstMC40MiwgMC40Ml0uZmFzdCgwLjE0KS5lYXNlKCdlYXNlSW5PdXRTaW5lJyk7CgpmdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7Cgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKHIsIGcsIGIpOwoJdC5wcmludCh0ZXh0LCB4LCB5KTsKCXQucG9wKCk7Cn0KCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CgoJZHJhd1RleHQoJ1NZTlRIU09VUkNFLk1PRFNDUk9MTFgnLCB4LCB5KyssIDExMCwgMjU1LCAxNzApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgNzAsIDExMCwgMTQwKTsKCWRyYXdUZXh0KCdTT1VSQ0UgU0NST0xMRUQgWCcsIHgsIHkrKywgMTIwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnQnJpZ2h0bmVzcyBzaGlmdHMgY29sdW1ucy4nLCB4LCB5KyssIDE2MCwgMTgwLCAyMTApOwoJZHJhd1RleHQoJ0EgY3VycmVudCBtb3ZlcyBzaWRld2F5cy4nLCB4LCB5KyssIDE2MCwgMTgwLCAyMTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgNzAsIDExMCwgMTQwKTsKCWRyYXdUZXh0KCdTZXBhcmF0ZSBhbmltYXRlZCBpbmsgYW5kIHBhcGVyLicsIHgsIHkrKywgMTUwLCAyNTUsIDE5MCk7Cn0pOwoKY29uc3QgaW5rID0gb3NjKDUsIDAuMDE4LCAxLjEpLmthbGVpZCg0KS5jb2xvcigwLjQ1LCAwLjcyLCAxLjApLm1vZHVsYXRlKG5vaXNlKDIuMiwgMC4wMTgpLCAwLjAyNSk7CmNvbnN0IHBhcGVyID0gcGxhc21hKDMuNiwgMC4wMjgsIDAuMSwgMS4wNSkuY29sb3IoMC4wMywgMC4wOCwgMC4xOCkubW9kdWxhdGVTY2FsZShub2lzZSgyLjAsIDAuMDE1KSwgMC4yMiwgMC45NSk7Cgp0LmxheWVycy5iYXNlLnN5bnRoKAoJbW9pcmUoNywgOCwgMC4xLCAxLjU3LCAwLjAxOCkKCQkubW9kdWxhdGVTY3JvbGxYKG5vaXNlKDIuOCwgMC4wMiksIFswLjAzLCAwLjE2XS5mYXN0KDAuMTIpLmVhc2UoJ2Vhc2VJbk91dFNpbmUnKSwgMC4wMDYpCgkJLmNvbG9yKDAuMjUsIDAuNywgMS4wKQoJCS5zb2Z0bGlnaHQob3NjKDUsIDAuMDEyKS5yb3RhdGUodHVybiksIDAuMjQpCgkJLmNvbnRyYXN0KDEuMTIpCgkJLmNoYXJNYXAoZ2x5cGhzKQoJCS5jaGFyQ29sb3IoaW5rKQoJCS5jZWxsQ29sb3IocGFwZXIpCik7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
