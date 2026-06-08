---
layout: doc
editLink: true
title: modulateRepeatX
description: Modulate X repeat with another source.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-08
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / modulateRepeatX

# Method: modulateRepeatX()

```ts
modulateRepeatX(
   source, 
   reps?, 
   offset?): this;
```

Modulate X repeat with another source.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Modulation source |
| `reps?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Number of repetitions (default: 3.0) |
| `offset?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Offset amount (default: 0.5) |

## Returns

`this`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="modulateRepeatX" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiA4LAoJcGx1Z2luczogW1N5bnRoUGx1Z2luXSwKfSk7Cgp0LmJwbSgxOCk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CmNvbnN0IGdseXBocyA9ICcgLjotPSsqIyVAJzsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCglkcmF3VGV4dCgnU1lOVEhTT1VSQ0UuTU9EUkVQRUFUWCcsIHgsIHkrKywgMTEwLCAyNTUsIDE3MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA3MCwgMTEwLCAxNDApOwoJZHJhd1RleHQoJ1ggUkVQRUFUIE1PRFVMQVRJT04nLCB4LCB5KyssIDEyMCwgMjIwLCAyNTUpOwoJZHJhd1RleHQoJ0NvbHVtbnMgb2Zmc2V0IGJ5IHNvdXJjZS4nLCB4LCB5KyssIDE2MCwgMTgwLCAyMTApOwoJZHJhd1RleHQoJ0hvcml6b250YWwgZWNob2VzIHJpcHBsZS4nLCB4LCB5KyssIDE2MCwgMTgwLCAyMTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgNzAsIDExMCwgMTQwKTsKCWRyYXdUZXh0KCdTZXBhcmF0ZSBhbmltYXRlZCBpbmsgYW5kIHBhcGVyLicsIHgsIHkrKywgMTUwLCAyNTUsIDE5MCk7Cn0pOwoKY29uc3QgaW5rID0gbW9pcmUoOCwgOSwgMC4xNSwgMS42LCAwLjAyNSkuY29sb3IoMS4wLCAwLjYyLCAwLjM0KS5tb2R1bGF0ZShub2lzZSgyLjMsIDAuMDE4KSwgMC4wMjIpOwpjb25zdCBwYXBlciA9IG5vaXNlKDMuMCwgMC4wMjUpLmNvbG9yKDAuMTYsIDAuMDU1LCAwLjAyNSkuc29mdGxpZ2h0KG9zYyg0LCAwLjAxNiksIDAuMjIpOwoKdC5sYXllcnMuYmFzZS5zeW50aCgKCW1vaXJlKDgsIDksIDAuMCwgMS41NywgMC4wMTgpCgkJLm1vZHVsYXRlUmVwZWF0WChub2lzZSgyLjgsIDAuMDIpLCBbMywgNl0uZmFzdCgwLjEpLmVhc2UoJ2Vhc2VJbk91dFNpbmUnKSwgMC4yNCkKCQkuY29sb3IoMC45LCAwLjQ1LCAwLjI1KQoJCS5tb2R1bGF0ZVNjcm9sbFkob3NjKDQsIDAuMDEyKSwgMC4wNiwgMC4wMDYpCgkJLmNvbnRyYXN0KDEuMTYpCgkJLmNoYXJNYXAoZ2x5cGhzKQoJCS5jaGFyQ29sb3IoaW5rKQoJCS5jZWxsQ29sb3IocGFwZXIpCik7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
