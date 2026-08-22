---
layout: doc
editLink: false
title: ease
description: Apply easing function to interpolation between array values.
category: Methods
api: true
owner: ModulatedArray
kind: Method
ecosystem: textmode.js
lastModified: 2026-08-22
---

[textmode.synth.js](../../../index.md) / [ModulatedArray](../../ModulatedArray.md) / ease

# Method: ease()

```ts
ease(ease): this;
```

Apply easing function to interpolation between array values.

Easing controls the acceleration curve of transitions between values.
Automatically enables smoothing when applied. Use built-in easing names
or provide a custom function that takes a value 0-1 and returns 0-1.

Available easing functions: `'linear'`, `'easeInQuad'`, `'easeOutQuad'`,
`'easeInOutQuad'`, `'easeInCubic'`, `'easeOutCubic'`, `'easeInOutCubic'`,
`'easeInQuart'`, `'easeOutQuart'`, `'easeInOutQuart'`, `'easeInQuint'`,
`'easeOutQuint'`, `'easeInOutQuint'`, `'sin'`

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ease` | [`EasingFunction`](../../../type-aliases/EasingFunction.md) | Easing function name or custom function (default: 'linear') |

## Returns

`this`

The array for chaining

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="ease" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiA4LAoJcGx1Z2luczogW1N5bnRoUGx1Z2luXSwKfSk7Cgp0LmJwbSgxNyk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CmNvbnN0IGdseXBocyA9ICcgLjotPSsqIyVAJzsKY29uc3QgZm9sZCA9IFstMC44NSwgLTAuMiwgMC40NSwgMS4wNV0uZmFzdCgwLjIpLmVhc2UoJ2Vhc2VJbk91dEN1YmljJyk7CmNvbnN0IHNwYW4gPSBbMC41OCwgMS4xOCwgMC43NCwgMS4zMl0uZmFzdCgwLjIpLmVhc2UoJ2Vhc2VJbk91dEN1YmljJyk7CgpmdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7Cgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKHIsIGcsIGIpOwoJdC5wcmludCh0ZXh0LCB4LCB5KTsKCXQucG9wKCk7Cn0KCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CgoJZHJhd1RleHQoJ01PRFVMQVRFREFSUkFZLkVBU0UnLCB4LCB5KyssIDExMCwgMjU1LCAxNzApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgNzAsIDExMCwgMTQwKTsKCWRyYXdUZXh0KCdFQVNFRCBGT0xEIFRSQU5TSVRJT05TJywgeCwgeSsrLCAxMjAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdFYXNpbmcgY2hhbmdlcyB0cmF2ZWwsIG5vdCB2YWx1ZXMuJywgeCwgeSsrLCAxNjAsIDE4MCwgMjEwKTsKCWRyYXdUZXh0KCdUaGUgYWNjb3JkaW9uIGFjY2VsZXJhdGVzIG1pZC1zdGVwLicsIHgsIHkrKywgMTYwLCAxODAsIDIxMCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA3MCwgMTEwLCAxNDApOwoJZHJhd1RleHQoImFycmF5LmVhc2UoJ2Vhc2VJbk91dEN1YmljJykiLCB4LCB5KyssIDE1MCwgMjU1LCAxOTApOwp9KTsKCmNvbnN0IGdseXBoRmllbGQgPSBzaGFwZSg0LCAwLjM4LCAwLjAyNSkuc2NhbGUoc3Bhbikucm90YXRlKGZvbGQpLnJlcGVhdCg0LCAzKTsKY29uc3QgbGluZXMgPSBvc2MoMTIsIDAuMDE4LCAxLjMpLnJvdGF0ZShmb2xkLCAwLjAwNikua2FsZWlkKDQpOwpjb25zdCBpbmtGaWVsZCA9IHNoYXBlKDQsIDAuMzgsIDAuMDI1KQoJLnNjYWxlKHNwYW4pCgkucm90YXRlKGZvbGQpCgkucmVwZWF0KDQsIDMpCgkuY29sb3IoMS4wLCAwLjcyLCAwLjIpCgkuc2NyZWVuKG9zYygxMiwgMC4wMTgsIDEuMykucm90YXRlKGZvbGQsIDAuMDA2KS5rYWxlaWQoNCkuY29sb3IoMC4zOCwgMC4zLCAxLjApLCAwLjQyKTsKY29uc3QgcGFwZXJGaWVsZCA9IHBsYXNtYShzcGFuLmZpdCgyLjUsIDQuMiksIDAuMDE0LCAwLjM1LCAxLjApLmJyaWdodG5lc3MoMC4yKS5jb2xvcigwLjE4LCAwLjA5LCAwLjMpOwoKdC5zeW50aChjaGFyKGdseXBoRmllbGQuYWRkKGxpbmVzLCAwLjM4KSkuY2hhck1hcChnbHlwaHMpLmNoYXJDb2xvcihpbmtGaWVsZCkuY2VsbENvbG9yKHBhcGVyRmllbGQpKTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />

## Overrides

```ts
Array.ease
```
