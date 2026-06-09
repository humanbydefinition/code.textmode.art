---
layout: doc
editLink: true
title: ease
description: Apply easing function to interpolation between array values.
category: Methods
api: true
owner: ModulatedArray
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-09
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

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="ease" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KGBNT0RVTEFURURBUlJBWS5FQVNFYCwgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dChgQ09OQ0VQVDogRUFTRUQgQVJSQVkgVFJBTlNJVElPTlNgLCB4LCB5KyssIDEwMCwgMjIwLCAyNTUpOwoJZHJhd1RleHQoYEFwcGxpZXMgZWFzaW5nIHRvIGN5Y2xlcy5gLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoYEJsZW5kcyBhcnJheSBzdGVwcyBzbW9vdGhseS5gLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KGBFYXNpbmc6IGVhc2VJbk91dEN1YmljYCwgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKfSk7Cgp0LmxheWVycy5iYXNlLnN5bnRoKHNoYXBlKDQpLnJvdGF0ZShbLTEuNSwgMS41XS5lYXNlKCdlYXNlSW5PdXRDdWJpYycpKSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
