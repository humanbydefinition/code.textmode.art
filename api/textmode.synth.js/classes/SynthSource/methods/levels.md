---
layout: doc
editLink: true
title: levels
description: Adjust input/output levels and gamma for precise tonal control.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-08
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / levels

# Method: levels()

```ts
levels(
   inMin?, 
   inMax?, 
   outMin?, 
   outMax?, 
   gamma?): this;
```

Adjust input/output levels and gamma for precise tonal control.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inMin?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Input minimum (default: 0.0) |
| `inMax?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Input maximum (default: 1.0) |
| `outMin?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Output minimum (default: 0.0) |
| `outMax?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Output maximum (default: 1.0) |
| `gamma?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Gamma correction (default: 1.0) |

## Returns

`this`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="levels" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiA4LAoJcGx1Z2luczogW1N5bnRoUGx1Z2luXSwKfSk7Cgp0LmJwbSgxOCk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CmNvbnN0IGdseXBocyA9ICcgLjotPSsqIyVAJzsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCglkcmF3VGV4dCgnU1lOVEhTT1VSQ0UuTEVWRUxTJywgeCwgeSsrLCAxMTAsIDI1NSwgMTcwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDcwLCAxMTAsIDE0MCk7CglkcmF3VGV4dCgnVE9OQUwgUkVNQVBQSU5HJywgeCwgeSsrLCAxMjAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdJbnB1dCByYW5nZSBtYXBzIHRvIG91dHB1dC4nLCB4LCB5KyssIDE2MCwgMTgwLCAyMTApOwoJZHJhd1RleHQoJ0dhbW1hIGJyZWF0aGVzIGdlbnRseS4nLCB4LCB5KyssIDE2MCwgMTgwLCAyMTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgNzAsIDExMCwgMTQwKTsKCWRyYXdUZXh0KCdTZXBhcmF0ZSBhbmltYXRlZCBpbmsgYW5kIHBhcGVyLicsIHgsIHkrKywgMTUwLCAyNTUsIDE5MCk7Cn0pOwoKY29uc3QgaW5rID0gcGxhc21hKDQuMiwgMC4wMjQsIDAuMCwgMS4xMikuY29sb3IoMC40MiwgMS4wLCAwLjU4KS5tb2R1bGF0ZVJvdGF0ZShub2lzZSgyLjAsIDAuMDE1KSwgMC4yOCwgMC4wNCk7CmNvbnN0IHBhcGVyID0gbW9pcmUoNiwgNywgMC4wLCAxLjU3LCAwLjAxOCkuY29sb3IoMC4wMjUsIDAuMTMsIDAuMDY1KS5zb2Z0bGlnaHQobm9pc2UoMi4wLCAwLjAxNCksIDAuMTgpOwoKdC5sYXllcnMuYmFzZS5zeW50aCgKCWdyYWRpZW50KDAuMDE4KQoJCS5tb2R1bGF0ZUthbGVpZChub2lzZSgyLjQsIDAuMDE0KSwgNSkKCQkuY29sb3JhbWEoMC4xMikKCQkubGV2ZWxzKDAuMTIsIDAuODgsIDAuMDMsIDEuMCwgWzAuOCwgMS4yNV0uZmFzdCgwLjEyKS5lYXNlKCdlYXNlSW5PdXRTaW5lJykpCgkJLmNvbnRyYXN0KDEuMSkKCQkuY2hhck1hcChnbHlwaHMpCgkJLmNoYXJDb2xvcihpbmspCgkJLmNlbGxDb2xvcihwYXBlcikKKTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />
