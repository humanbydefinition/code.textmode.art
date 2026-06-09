---
layout: doc
editLink: true
title: modulateRepeatY
description: Modulate Y repeat with another source.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / modulateRepeatY

# Method: modulateRepeatY()

```ts
modulateRepeatY(
   source, 
   reps?, 
   offset?): this;
```

Modulate Y repeat with another source.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Modulation source |
| `reps?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Number of repetitions (default: 3.0) |
| `offset?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Offset amount (default: 0.5) |

## Returns

`this`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="modulateRepeatY" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiA4LAoJcGx1Z2luczogW1N5bnRoUGx1Z2luXSwKfSk7Cgp0LmJwbSgxOCk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CmNvbnN0IGdseXBocyA9ICcgLjotPSsqIyVAJzsKY29uc3QgdHVybiA9IFstMC40MiwgMC40Ml0uZmFzdCgwLjE0KS5lYXNlKCdlYXNlSW5PdXRTaW5lJyk7CgpmdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7Cgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKHIsIGcsIGIpOwoJdC5wcmludCh0ZXh0LCB4LCB5KTsKCXQucG9wKCk7Cn0KCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CgoJZHJhd1RleHQoJ1NZTlRIU09VUkNFLk1PRFJFUEVBVFknLCB4LCB5KyssIDExMCwgMjU1LCAxNzApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgNzAsIDExMCwgMTQwKTsKCWRyYXdUZXh0KCdZIFJFUEVBVCBNT0RVTEFUSU9OJywgeCwgeSsrLCAxMjAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdSb3dzIG9mZnNldCBieSBzb3VyY2UuJywgeCwgeSsrLCAxNjAsIDE4MCwgMjEwKTsKCWRyYXdUZXh0KCdWZXJ0aWNhbCBlY2hvZXMgcmlzZS4nLCB4LCB5KyssIDE2MCwgMTgwLCAyMTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgNzAsIDExMCwgMTQwKTsKCWRyYXdUZXh0KCdTZXBhcmF0ZSBhbmltYXRlZCBpbmsgYW5kIHBhcGVyLicsIHgsIHkrKywgMTUwLCAyNTUsIDE5MCk7Cn0pOwoKY29uc3QgaW5rID0gcGxhc21hKDQuMiwgMC4wMjQsIDAuMCwgMS4xMikuY29sb3IoMC40MiwgMS4wLCAwLjU4KS5tb2R1bGF0ZVJvdGF0ZShub2lzZSgyLjAsIDAuMDE1KSwgMC4yOCwgMC4wNCk7CmNvbnN0IHBhcGVyID0gbW9pcmUoNiwgNywgMC4wLCAxLjU3LCAwLjAxOCkuY29sb3IoMC4wMjUsIDAuMTMsIDAuMDY1KS5zb2Z0bGlnaHQobm9pc2UoMi4wLCAwLjAxNCksIDAuMTgpOwoKdC5sYXllcnMuYmFzZS5zeW50aCgKCXBsYXNtYSg0LjIsIDAuMDIyLCAwLjMsIDEuMTIpCgkJLm1vZHVsYXRlUmVwZWF0WShvc2MoNCwgMC4wMTIpLnJvdGF0ZSh0dXJuKSwgWzMsIDZdLmZhc3QoMC4xKS5lYXNlKCdlYXNlSW5PdXRTaW5lJyksIDAuMjIpCgkJLmNvbG9yKDAuMzUsIDAuOTUsIDAuNjUpCgkJLm1vZHVsYXRlU2Nyb2xsWChub2lzZSgyLjAsIDAuMDE0KSwgMC4wNiwgLTAuMDA2KQoJCS5jb250cmFzdCgxLjE2KQoJCS5jaGFyTWFwKGdseXBocykKCQkuY2hhckNvbG9yKGluaykKCQkuY2VsbENvbG9yKHBhcGVyKQopOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
