---
layout: doc
editLink: true
title: applyMatrix
description: Multiply the current model transform by a custom 4x4 matrix.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-09
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / applyMatrix

# Method: applyMatrix()

## Call Signature

```ts
applyMatrix(matrix): void;
```

Multiply the current model transform by a custom 4x4 matrix.

Current implementation supports affine TRS-style matrices (no perspective/shear).

### Parameters

| Parameter | Type |
| ------ | ------ |
| `matrix` | `ArrayLike`\<`number`\> |

### Returns

`void`

### Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="applyMatrix" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpmdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7Cgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKHIsIGcsIGIpOwoJdC5wcmludCh0ZXh0LCB4LCB5KTsKCXQucG9wKCk7Cn0KCnQuZHJhdygoKSA9PiB7Cgl0LmJhY2tncm91bmQoNiwgMTAsIDIyKTsKCWNvbnN0IHRpbWUgPSB0LmZyYW1lQ291bnQgKiAwLjAzOwoJY29uc3QgYyA9IE1hdGguY29zKHRpbWUpOwoJY29uc3QgcyA9IE1hdGguc2luKHRpbWUpOwoJdC5wdXNoKCk7Cgl0LnRyYW5zbGF0ZSg4LCAxKTsKCXQuYXBwbHlNYXRyaXgoYywgcywgMCwgMCwgLXMsIGMsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpOwoJdC5jaGFyKCcjJyk7Cgl0LmNoYXJDb2xvcigxNDAsIDIyMCwgMjU1KTsKCXQucmVjdCgxMiwgNCk7Cgl0LnBvcCgpOwp9KTsKCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CglkcmF3VGV4dCgnVEVYVE1PRElGSUVSLkFQUExZTUFUUklYJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogQ1VTVE9NIE1BVFJJWCcsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnQXBwbGllcyBhIDR4NCB0cmFuc2Zvcm0uJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCdNYXRyaXggcm90YXRlcyB0aGUgcmVjdGFuZ2xlLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0FQSTogdC5hcHBseU1hdHJpeCguLi4pJywgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />

## Call Signature

```ts
applyMatrix(
   m00, 
   m01, 
   m02, 
   m03, 
   m10, 
   m11, 
   m12, 
   m13, 
   m20, 
   m21, 
   m22, 
   m23, 
   m30, 
   m31, 
   m32, 
   m33): void;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `m00` | `number` |
| `m01` | `number` |
| `m02` | `number` |
| `m03` | `number` |
| `m10` | `number` |
| `m11` | `number` |
| `m12` | `number` |
| `m13` | `number` |
| `m20` | `number` |
| `m21` | `number` |
| `m22` | `number` |
| `m23` | `number` |
| `m30` | `number` |
| `m31` | `number` |
| `m32` | `number` |
| `m33` | `number` |

### Returns

`void`
