---
layout: doc
editLink: true
title: rotate
description: Set rotation for subsequent shape drawing.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / rotate

# Method: rotate()

## Call Signature

```ts
rotate(): void;
```

Set rotation for subsequent shape drawing.

All geometries rotate around the center of the shape.

### Returns

`void`

### Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="rotate" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgdmFsdWUgPSAwOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDYsIDEwLCAyMik7Cgljb25zdCB0aW1lID0gdC5mcmFtZUNvdW50ICogMC4wNDsKCXZhbHVlID0gKHRpbWUgKiA2MCkgJSAzNjA7Cgl0LmNoYXJDb2xvcig1MCwgNjAsIDkwKTsKCXQuY2hhcignLicpOwoJdC5saW5lKC0xOCwgMCwgMTgsIDApOwoJdC5saW5lKDAsIC0xMCwgMCwgMTApOwoJdC5wdXNoKCk7Cgl0LnJvdGF0ZSh2YWx1ZSk7Cgl0LmNoYXIoJyMnKTsKCXQuY2hhckNvbG9yKDE0MCwgMjU1LCAxODApOwoJdC5yZWN0KDYsIDQpOwoJdC5wb3AoKTsKfSk7CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoJZHJhd1RleHQoJ1RFWFRNT0RJRklFUi5ST1RBVEUnLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBST1RBVEUgSU4gMkQnLCB4LCB5KyssIDEwMCwgMjIwLCAyNTUpOwoJZHJhd1RleHQoJ1JvdGF0ZXMgYXJvdW5kIHRoZSBaIGF4aXMuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCdHcmlkIGNyb3NzIHNob3dzIG9yaWdpbmFsIGF4ZXMuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dChgREVHOiAke3ZhbHVlLnRvRml4ZWQoMSl9YCwgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />

## Call Signature

```ts
rotate(angle): void;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `angle` | `number` |

### Returns

`void`

## Call Signature

```ts
rotate(angle, axis): void;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `angle` | `number` |
| `axis` | \| \[`number`, `number`, `number`\] \| \{ `x`: `number`; `y`: `number`; `z`: `number`; \} |

### Returns

`void`

## Call Signature

```ts
rotate(
   degreesX?, 
   degreesY?, 
   degreesZ?): void;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `degreesX?` | `number` |
| `degreesY?` | `number` |
| `degreesZ?` | `number` |

### Returns

`void`
