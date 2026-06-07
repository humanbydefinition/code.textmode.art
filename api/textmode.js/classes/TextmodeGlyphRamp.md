---
layout: doc
editLink: true
title: TextmodeGlyphRamp
description: Immutable character sequence for mapping numbers to glyphs.
category: Classes
api: true
kind: Class
lastModified: 2026-06-07
hasConstructor: true
---

[textmode.js](../index.md) / TextmodeGlyphRamp

# Class: TextmodeGlyphRamp

Immutable character sequence for mapping numbers to glyphs.

`TextmodeGlyphRamp` stores a low-to-high sequence of grapheme clusters and maps
normalized values to one glyph from that sequence.

Use [Textmodifier.createGlyphRamp](Textmodifier/methods/createGlyphRamp.md) to create ramps inside a sketch.

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="TextmodeGlyphRamp" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CmNvbnN0IHJhbXAgPSB0LmNyZWF0ZUdseXBoUmFtcCgnIC46LT0rKiMlQCcpOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDgsIDcsIDE4KTsKCgljb25zdCBjb2xzID0gTWF0aC5taW4odC5ncmlkLmNvbHMsIDQ4KTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcihjb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtNDsKCglmb3IgKGxldCB4ID0gMDsgeCA8IGNvbHM7IHgrKykgewoJCWNvbnN0IHZhbHVlID0gY29scyA8PSAxID8gMCA6IHggLyAoY29scyAtIDEpOwoJCWNvbnN0IGhlaWdodCA9IE1hdGguZmxvb3IodC5tYXAodmFsdWUsIDAsIDEsIDIsIDEyKSk7CgoJCWZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHsKCQkJdC5wdXNoKCk7CgkJCXQudHJhbnNsYXRlKGxlZnQgKyB4LCB0b3AgKyAxMiAtIHkpOwoJCQl0LmNoYXJDb2xvcig5MCArIHZhbHVlICogMTUwLCAxNzAgKyB2YWx1ZSAqIDYwLCAyMTApOwoJCQl0LmNoYXIocmFtcC5hdCh2YWx1ZSkpOwoJCQl0LnBvaW50KCk7CgkJCXQucG9wKCk7CgkJfQoJfQp9KTsKCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CgoJZHJhd1RleHQoJ1RFWFRNT0RFR0xZUEhSQU1QLkNSRUFUSU9OJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogVkFMVUVTIFRPIEdMWVBIUycsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnYXQoMCkgcmV0dXJucyB0aGUgZmlyc3QgZ2x5cGguJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCdhdCgxKSByZXR1cm5zIHRoZSBmaW5hbCBnbHlwaC4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoYGxlbmd0aDogJHtyYW1wLmxlbmd0aH1gLCB4LCB5KyssIDIyMCwgMjMwLCAyNTUpOwp9KTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />

## Constructors

| Constructor | Description |
| ------ | ------ |
| [constructor](TextmodeGlyphRamp/constructors/constructor.md) | Create a ramp from characters ordered from low values to high values. |

## Properties

| Property | Description |
| ------ | ------ |
| [characters](TextmodeGlyphRamp/properties/characters.md) | The character sequence this ramp was created with. |
| [length](TextmodeGlyphRamp/properties/length.md) | Number of grapheme clusters in the ramp. |

## Methods

| Method | Description |
| ------ | ------ |
| [at](TextmodeGlyphRamp/methods/at.md) | Map a normalized value to a character. |
| [shift](TextmodeGlyphRamp/methods/shift.md) | Return a shifted copy of this ramp. |
