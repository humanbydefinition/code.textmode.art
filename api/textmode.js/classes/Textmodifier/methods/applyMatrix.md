---
layout: doc
editLink: true
title: applyMatrix
description: Multiply the current model transform by a custom 4x4 matrix.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-25
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

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="applyMatrix" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CmNvbnN0IFJBTVAgPSAnIC46LT0rKiMlQCc7Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDYsIDEwLCAyNCk7Cgljb25zdCBjb2xzID0gdC5ncmlkLmNvbHMsIHJvd3MgPSB0LmdyaWQucm93czsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcigoY29scyAtIDEpIC8gMiksIHJpZ2h0ID0gbGVmdCArIGNvbHMgLSAxOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3Iocm93cyAvIDIpLCBib3R0b20gPSB0b3AgKyByb3dzIC0gMTsKCWNvbnN0IHRtID0gdC5mcmFtZUNvdW50ICogMC4wNDsKCgljb25zdCBjID0gTWF0aC5jb3ModG0gKiAwLjgpLCBzID0gTWF0aC5zaW4odG0gKiAwLjgpOwoJY29uc3Qgc2hlYXIgPSBNYXRoLnNpbih0bSAqIDEuMikgKiAwLjQ1OwoKCWZvciAobGV0IHkgPSB0b3A7IHkgPD0gYm90dG9tOyB5KyspIHsKCQlmb3IgKGxldCB4ID0gbGVmdDsgeCA8PSByaWdodDsgeCsrKSB7CgkJCWNvbnN0IGRpc3QgPSBNYXRoLmh5cG90KHgsIHkpOwoJCQljb25zdCB3YXZlID0gTWF0aC5zaW4oZGlzdCAqIDAuMiAtIHRtICogMikgKiBNYXRoLmNvcyh4ICogMC4xICsgeSAqIDAuMSk7CgkJCWNvbnN0IG5vcm0gPSAod2F2ZSArIDEpICogMC41OwoKCQkJY29uc3QgcmFtcElkeCA9IE1hdGguZmxvb3Iobm9ybSAqIChSQU1QLmxlbmd0aCAtIDEpKTsKCQkJY29uc3QgY2hhcktleSA9IFJBTVBbcmFtcElkeF07CgoJCQl0LnB1c2goKTsKCQkJdC50cmFuc2xhdGUoeCwgeSk7CgkJCXQuYXBwbHlNYXRyaXgoCgkJCQljLCBzICsgc2hlYXIsIDAsIDAsCgkJCQktcywgYywgMCwgMCwKCQkJCTAsIDAsIDEsIDAsCgkJCQkwLCAwLCAwLCAxCgkJCSk7CgoJCQl0LmNoYXJDb2xvcihNYXRoLmZsb29yKDYwICsgbm9ybSAqIDE5NSksIE1hdGguZmxvb3IoMTQwICsgbm9ybSAqIDExNSksIE1hdGguZmxvb3IoMjU1IC0gbm9ybSAqIDEyMCkpOwoJCQl0LmNlbGxDb2xvcihNYXRoLmZsb29yKDYgKyBub3JtICogMTQpLCBNYXRoLmZsb29yKDEwICsgbm9ybSAqIDE4KSwgTWF0aC5mbG9vcigyNCArIG5vcm0gKiAyMCkpOwoJCQl0LmNoYXIoY2hhcktleSk7CgkJCXQucG9pbnQoKTsKCQkJdC5wb3AoKTsKCQl9Cgl9Cn0pOwoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpLCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzLCB4ID0gbGVmdCArIDM7CgoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcigxMjAsIDI0MCwgMTgwKTsKCXQucHJpbnQoJ1RFWFRNT0RJRklFUi5BUFBMWU1BVFJJWCcsIHgsIHkrKyk7Cgl0LmNoYXJDb2xvcig3MCwgMTAwLCAxNDApOwoJdC5wcmludCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrKTsKCXQuY2hhckNvbG9yKDE0MCwgMjEwLCAyNTUpOwoJdC5wcmludCgnQ09OQ0VQVDogRlVMTC1TQ1JFRU4gSE9MT0dSQVBISUMgV0FSUCcsIHgsIHkrKyk7Cgl0LmNoYXJDb2xvcigxNDAsIDE2MCwgMTkwKTsKCXQucHJpbnQoJ0FwcGxpZXMgY3VzdG9tIDR4NCB0cmFuc2Zvcm1hdGlvbicsIHgsIHkrKyk7Cgl0LnByaW50KCdtYXRyaXggZGlyZWN0bHkgdG8gbG9jYWwgc3BhY2UuJywgeCwgeSsrKTsKCXQuY2hhckNvbG9yKDcwLCAxMDAsIDE0MCk7Cgl0LnByaW50KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyspOwoJdC5jaGFyQ29sb3IoMTQwLCAyNTUsIDIwMCk7Cgl0LnByaW50KCdUUkFOU0ZPUk06IDRYNCBBRkZJTkUgU0hFQVIgTUFUUklYJywgeCwgeSsrKTsKCXQucG9wKCk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />

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
