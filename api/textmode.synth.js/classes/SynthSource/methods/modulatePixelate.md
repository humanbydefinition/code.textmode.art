---
layout: doc
editLink: true
title: modulatePixelate
description: Modulate pixelation using another source.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / modulatePixelate

# Method: modulatePixelate()

```ts
modulatePixelate(
   source, 
   multiple?, 
   offset?): this;
```

Modulate pixelation using another source.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Modulation source |
| `multiple?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Pixelation multiplier (default: 10.0) |
| `offset?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Offset amount (default: 3.0) |

## Returns

`this`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="modulatePixelate" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiA4LAoJcGx1Z2luczogW1N5bnRoUGx1Z2luXSwKfSk7Cgp0LmJwbSgxOCk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CmNvbnN0IGdseXBocyA9ICcgLjotPSsqIyVAJzsKY29uc3QgdHVybiA9IFstMC40MiwgMC40Ml0uZmFzdCgwLjE0KS5lYXNlKCdlYXNlSW5PdXRTaW5lJyk7CgpmdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7Cgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKHIsIGcsIGIpOwoJdC5wcmludCh0ZXh0LCB4LCB5KTsKCXQucG9wKCk7Cn0KCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CgoJZHJhd1RleHQoJ1NZTlRIU09VUkNFLk1PRFBJWEVMJywgeCwgeSsrLCAxMTAsIDI1NSwgMTcwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDcwLCAxMTAsIDE0MCk7CglkcmF3VGV4dCgnVkFSSUFCTEUgUElYRUwgR1JJRCcsIHgsIHkrKywgMTIwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnQSBzb3VyY2UgY29udHJvbHMgY2VsbCBzaXplLicsIHgsIHkrKywgMTYwLCAxODAsIDIxMCk7CglkcmF3VGV4dCgnTW9zYWljIHdhdmVzIHBhc3Mgc2xvd2x5LicsIHgsIHkrKywgMTYwLCAxODAsIDIxMCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA3MCwgMTEwLCAxNDApOwoJZHJhd1RleHQoJ1NlcGFyYXRlIGFuaW1hdGVkIGluayBhbmQgcGFwZXIuJywgeCwgeSsrLCAxNTAsIDI1NSwgMTkwKTsKfSk7Cgpjb25zdCBpbmsgPSBvc2MoNSwgMC4wMTgsIDEuMSkua2FsZWlkKDQpLmNvbG9yKDAuNDUsIDAuNzIsIDEuMCkubW9kdWxhdGUobm9pc2UoMi4yLCAwLjAxOCksIDAuMDI1KTsKY29uc3QgcGFwZXIgPSBwbGFzbWEoMy42LCAwLjAyOCwgMC4xLCAxLjA1KS5jb2xvcigwLjAzLCAwLjA4LCAwLjE4KS5tb2R1bGF0ZVNjYWxlKG5vaXNlKDIuMCwgMC4wMTUpLCAwLjIyLCAwLjk1KTsKCnQubGF5ZXJzLmJhc2Uuc3ludGgoCglncmFkaWVudCgwLjAxOCkKCQkubW9kdWxhdGVQaXhlbGF0ZShub2lzZSgzLjAsIDAuMDI1KSwgWzEwLCAzMl0uZmFzdCgwLjEyKS5lYXNlKCdlYXNlSW5PdXRTaW5lJyksIDYpCgkJLmNvbG9yYW1hKDAuMDgpCgkJLm92ZXJsYXkob3NjKDUsIDAuMDE0KS5yb3RhdGUodHVybiksIDAuMjIpCgkJLmNvbnRyYXN0KDEuMTIpCgkJLmNoYXJNYXAoZ2x5cGhzKQoJCS5jaGFyQ29sb3IoaW5rKQoJCS5jZWxsQ29sb3IocGFwZXIpCik7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
