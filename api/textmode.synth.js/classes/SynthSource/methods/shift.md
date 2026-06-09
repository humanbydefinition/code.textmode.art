---
layout: doc
editLink: true
title: shift
description: Shift color channels by adding offset values.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / shift

# Method: shift()

```ts
shift(
   r?, 
   g?, 
   b?, 
   a?): this;
```

Shift color channels by adding offset values.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Red channel shift (default: 0.5) |
| `g?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Green channel shift (default: 0.0) |
| `b?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Blue channel shift (default: 0.0) |
| `a?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Alpha channel shift (default: 0.0) |

## Returns

`this`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="shift" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiA4LAoJcGx1Z2luczogW1N5bnRoUGx1Z2luXSwKfSk7Cgp0LmJwbSgxOCk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CmNvbnN0IGdseXBocyA9ICcgLjotPSsqIyVAJzsKY29uc3Qgc2xvdyA9IFswLjAsIDEuMF0uZmFzdCgwLjE2KS5lYXNlKCdlYXNlSW5PdXRTaW5lJyk7CmNvbnN0IGJyZWF0aGUgPSBbMC4yMiwgMC43OF0uZmFzdCgwLjE4KS5lYXNlKCdlYXNlSW5PdXRTaW5lJyk7CmNvbnN0IHR1cm4gPSBbLTAuNDIsIDAuNDJdLmZhc3QoMC4xNCkuZWFzZSgnZWFzZUluT3V0U2luZScpOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KCdTWU5USFNPVVJDRS5TSElGVCcsIHgsIHkrKywgMTEwLCAyNTUsIDE3MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA3MCwgMTEwLCAxNDApOwoJZHJhd1RleHQoJ0NIQU5ORUwgT0ZGU0VUUycsIHgsIHkrKywgMTIwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnUkdCIHBsYW5lcyBkcmlmdCBzbG93bHkuJywgeCwgeSsrLCAxNjAsIDE4MCwgMjEwKTsKCWRyYXdUZXh0KCdPZmZzZXRzIHN0YXkgYmVsb3cgZmxpY2tlci4nLCB4LCB5KyssIDE2MCwgMTgwLCAyMTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgNzAsIDExMCwgMTQwKTsKCWRyYXdUZXh0KCdTZXBhcmF0ZSBhbmltYXRlZCBpbmsgYW5kIHBhcGVyLicsIHgsIHkrKywgMTUwLCAyNTUsIDE5MCk7Cn0pOwoKY29uc3QgaW5rID0gb3NjKDYsIDAuMDE4LCAxLjYpLnJvdGF0ZSh0dXJuLCAwLjAwMikuY29sb3IoMC45LCAwLjU4LCAxLjApLm1vZHVsYXRlS2FsZWlkKG5vaXNlKDIuMCwgMC4wMTQpLCA1KTsKY29uc3QgcGFwZXIgPSBwbGFzbWEoMy4yLCAwLjAyNCwgMC4yLCAxLjA4KS5jb2xvcigwLjA4LCAwLjAzNSwgMC4xNikuaHVlKHNsb3cpOwoKdC5sYXllcnMuYmFzZS5zeW50aCgKCXBsYXNtYSg0LjgsIDAuMDI2LCAwLjEsIDEuMTIpCgkJLm1vZHVsYXRlUm90YXRlKG5vaXNlKDIuMCwgMC4wMTQpLCAwLjI4LCAwLjA0KQoJCS5zaGlmdChicmVhdGhlLCBicmVhdGhlLm9mZnNldCgwLjMzKSwgYnJlYXRoZS5vZmZzZXQoMC42NiksIDAuMCkKCQkub3ZlcmxheShvc2MoNiwgMC4wMTQpLmthbGVpZCg1KSwgMC4yMikKCQkuY29udHJhc3QoMS4xNCkKCQkuY2hhck1hcChnbHlwaHMpCgkJLmNoYXJDb2xvcihpbmspCgkJLmNlbGxDb2xvcihwYXBlcikKKTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />
