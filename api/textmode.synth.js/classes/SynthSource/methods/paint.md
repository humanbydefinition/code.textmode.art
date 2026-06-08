---
layout: doc
editLink: true
title: paint
description: Set both character foreground and cell background color using the same source chain. This is a convenience method that combines .charColor() and .cellColor()...
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-08
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / paint

# Method: paint()

## Call Signature

```ts
paint(source): this;
```

Set both character foreground and cell background color using the same source chain.
This is a convenience method that combines `.charColor()` and `.cellColor()` in one call.

After calling `paint()`, you can still override the cell color separately using `.cellColor()`.

Otherwise useful for pixel art styles where both colors are the same, making the characters redundant.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`SynthSource`](../../SynthSource.md) | A SynthSource producing color values |

### Returns

`this`

The SynthSource for chaining

### Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="paint" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KCdTWU5USFNPVVJDRS5QQUlOVCcsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IENPTVBPU0lURSBQQUlOVCBNRVRIT0QnLCB4LCB5KyssIDEwMCwgMjIwLCAyNTUpOwoJZHJhd1RleHQoJ1BhaW50cyBjZWxscyBhbmQgZ2x5cGhzIGZyb20gc291cmNlLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnVXNlcyBzZXBhcmF0ZSBwbGFzbWEgc291cmNlIHZhbHVlcy4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDaGFyICYgQ2VsbDogcGxhc21hIHwgQmFzZTogb3NjJywgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKfSk7Cgp0LmxheWVycy5iYXNlLnN5bnRoKG9zYyg4LCAwLjEpLnBhaW50KHBsYXNtYSg2LCAwLjMpLmNvbG9yYW1hKDAuMSkpKTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />

## Call Signature

```ts
paint(
   r, 
   g?, 
   b?, 
   a?): this;
```

Set both character foreground and cell background color using RGBA values.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Red channel (0-1) or value |
| `g?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Green channel (0-1) or value |
| `b?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Blue channel (0-1) or value |
| `a?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Alpha channel (0-1) or value |

### Returns

`this`

The SynthSource for chaining

### Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="paint" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiA4LAoJcGx1Z2luczogW1N5bnRoUGx1Z2luXSwKfSk7Cgp0LmJwbSgxOCk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CmNvbnN0IGdseXBocyA9ICcgLjotPSsqIyVAJzsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCglkcmF3VGV4dCgnU1lOVEhTT1VSQ0UuUEFJTlQyJywgeCwgeSsrLCAxMTAsIDI1NSwgMTcwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDcwLCAxMTAsIDE0MCk7CglkcmF3VGV4dCgnUEFJTlQgU09VUkNFIEZJRUxEJywgeCwgeSsrLCAxMjAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdQYWludCByZWNlaXZlcyBhIGZ1bGwgc291cmNlLicsIHgsIHkrKywgMTYwLCAxODAsIDIxMCk7CglkcmF3VGV4dCgnQmFzZSBtb3Rpb24gc3VwcGxpZXMgZ2x5cGhzLicsIHgsIHkrKywgMTYwLCAxODAsIDIxMCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA3MCwgMTEwLCAxNDApOwoJZHJhd1RleHQoJ3BhaW50KHNvdXJjZSksIG5vIGNvbG9yIG92ZXJyaWRlcy4nLCB4LCB5KyssIDE1MCwgMjU1LCAxOTApOwp9KTsKCmNvbnN0IHBhaW50RmllbGQgPSBwbGFzbWEoNC40LCAwLjAyMiwgMC4xOCwgMS4xNikuY29sb3JhbWEoMC4xNikubW9kdWxhdGVIdWUob3NjKDUsIDAuMDEyKS5rYWxlaWQoNSksIDIuNik7Cgp0LmxheWVycy5iYXNlLnN5bnRoKAoJbW9pcmUoOCwgOSwgMC4xNSwgMS41OCwgMC4wMTgpCgkJLm1vZHVsYXRlUm90YXRlKG5vaXNlKDIuMCwgMC4wMTIpLCAwLjI0LCAwLjAzKQoJCS5wYWludChwYWludEZpZWxkKQoJCS5jaGFyTWFwKGdseXBocykKCQkuY29udHJhc3QoMS4yKQopOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />

## Call Signature

```ts
paint(gray): this;
```

Set both character foreground and cell background color using a grayscale value.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gray` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Grayscale value (0-1) |

### Returns

`this`

### Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="paint" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiA4LAoJcGx1Z2luczogW1N5bnRoUGx1Z2luXSwKfSk7Cgp0LmJwbSgxOCk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CmNvbnN0IGdseXBocyA9ICcgLjotPSsqIyVAJzsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCglkcmF3VGV4dCgnU1lOVEhTT1VSQ0UuUEFJTlQzJywgeCwgeSsrLCAxMTAsIDI1NSwgMTcwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDcwLCAxMTAsIDE0MCk7CglkcmF3VGV4dCgnUEFJTlQgVEVYVFVSRSBTT1VSQ0UnLCB4LCB5KyssIDEyMCwgMjIwLCAyNTUpOwoJZHJhd1RleHQoJ09uZSBzb3VyY2UgcGFpbnRzIGJvdGggbGF5ZXJzLicsIHgsIHkrKywgMTYwLCAxODAsIDIxMCk7CglkcmF3VGV4dCgnTmVzdGVkIG1vdGlvbiBhZGRzIGRlcHRoLicsIHgsIHkrKywgMTYwLCAxODAsIDIxMCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA3MCwgMTEwLCAxNDApOwoJZHJhd1RleHQoJ3BhaW50KHNvdXJjZSksIG5vIGNvbG9yIG92ZXJyaWRlcy4nLCB4LCB5KyssIDE1MCwgMjU1LCAxOTApOwp9KTsKCmNvbnN0IHBhaW50RmllbGQgPSBtb2lyZSg3LCA4LCAwLjMyLCAxLjUsIDAuMDE2KQoJLmNvbG9yKDAuMywgMC45LCAwLjcyKQoJLm92ZXJsYXkocGxhc21hKDMuNCwgMC4wMTgsIDAuMiwgMS4wNSkuY29sb3IoMC45LCAwLjQyLCAwLjg1KSwgMC4zNik7Cgp0LmxheWVycy5iYXNlLnN5bnRoKAoJcGxhc21hKDQuNiwgMC4wMiwgMC4xLCAxLjE4KS5tb2R1bGF0ZUthbGVpZChub2lzZSgyLjEsIDAuMDEyKSwgNikucGFpbnQocGFpbnRGaWVsZCkuY2hhck1hcChnbHlwaHMpLmNvbnRyYXN0KDEuMTYpCik7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
