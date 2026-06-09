---
layout: doc
editLink: true
title: ModulatedArray
description: Extended array interface with modulation methods.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-06-09
isInterface: true
---

[textmode.synth.js](../index.md) / ModulatedArray

# Interface: ModulatedArray

Extended array interface with modulation methods.

Arrays in textmode.synth.js behave like hydra - they cycle through values over time,
creating dynamic, time-varying parameters. This enables complex animations without
manually tracking time or state.

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="ModulatedArray" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KGBNT0RVTEFURURBUlJBWS5BUlJBWVNgLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KGBDT05DRVBUOiBQT0xZUkhZVEhNSUMgQ1lDTElOR2AsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dChgQ3ljbGVzIG11bHRpcGxlIHBhcmFtcyB2aWEgYXJyYXlzLmAsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dChgUG9seXJoeXRobWljIGR5bmFtaWMgc3RlcCBtb3Rpb24uYCwgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dChgUG9seXJoeXRobXM6IEZyZXEsIFNlZ21lbnQsIENvbG9yYCwgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKfSk7Cgp0LmxheWVycy5iYXNlLnN5bnRoKAoJb3NjKFs4LCAxNiwgMzJdLCAwLjEsIFswLjUsIDEuNV0pCgkJLmthbGVpZChbMywgNSwgOF0pCgkJLmNvbG9yKFsxLCAwXS5lYXNlKCdsaW5lYXInKSwgWzAsIDFdLmVhc2UoJ2xpbmVhcicpLCBbMC41LCAwLjhdLmVhc2UoJ2xpbmVhcicpKQopOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />

## Extends

- `Array`\<`number`\>

## Indexable

```ts
[n: number]: number
```

## Methods

| Method | Description |
| ------ | ------ |
| [fast](ModulatedArray/methods/fast.md) | Set speed multiplier for array cycling. |
| [smooth](ModulatedArray/methods/smooth.md) | Enable smooth interpolation between array values. |
| [ease](ModulatedArray/methods/ease.md) | Apply easing function to interpolation between array values. |
| [offset](ModulatedArray/methods/offset.md) | Set time offset for array cycling. |
| [fit](ModulatedArray/methods/fit.md) | Fit (remap) array values to a new range. |
