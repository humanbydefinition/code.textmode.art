---
layout: doc
editLink: true
title: rotate
description: Set rotation for subsequent shape drawing.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-31
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

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="rotate" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CmNvbnN0IFJBTVAgPSAnIC46LT0rKiMlQCc7Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDYsIDgsIDIwKTsKCWNvbnN0IGNvbHMgPSB0LmdyaWQuY29scywKCQlyb3dzID0gdC5ncmlkLnJvd3M7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IoKGNvbHMgLSAxKSAvIDIpLAoJCXJpZ2h0ID0gbGVmdCArIGNvbHMgLSAxOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3Iocm93cyAvIDIpLAoJCWJvdHRvbSA9IHRvcCArIHJvd3MgLSAxOwoJY29uc3QgdG0gPSB0LmZyYW1lQ291bnQgKiAwLjA0OwoKCWZvciAobGV0IHkgPSB0b3A7IHkgPD0gYm90dG9tOyB5KyspIHsKCQlmb3IgKGxldCB4ID0gbGVmdDsgeCA8PSByaWdodDsgeCsrKSB7CgkJCWNvbnN0IGRpc3QgPSBNYXRoLmh5cG90KHgsIHkpOwoJCQljb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoeSwgeCk7CgoJCQljb25zdCB3YXZlID0gTWF0aC5zaW4oZGlzdCAqIDAuMjUgLSB0bSAqIDIpICogTWF0aC5jb3MoYW5nbGUgKiA2ICsgdG0pOwoJCQljb25zdCBub3JtID0gKHdhdmUgKyAxKSAqIDAuNTsKCgkJCWNvbnN0IGNoYXJLZXkgPSBSQU1QW01hdGguZmxvb3Iobm9ybSAqIChSQU1QLmxlbmd0aCAtIDEpKV07CgoJCQl0LnB1c2goKTsKCQkJdC5yb3RhdGUoTWF0aC5zaW4odG0gKiAwLjUpICogMC4yKTsKCQkJdC50cmFuc2xhdGUoeCwgeSk7CgkJCXQuY2hhckNvbG9yKE1hdGguZmxvb3IoODAgKyBub3JtICogMTc1KSwgTWF0aC5mbG9vcigxODAgKyBub3JtICogNzUpLCBNYXRoLmZsb29yKDI1NSAtIG5vcm0gKiAxMDApKTsKCQkJdC5jZWxsQ29sb3IoTWF0aC5mbG9vcig2ICsgbm9ybSAqIDEyKSwgTWF0aC5mbG9vcigxMiArIG5vcm0gKiAxNCksIE1hdGguZmxvb3IoMjggKyBub3JtICogMTgpKTsKCQkJdC5jaGFyKGNoYXJLZXkpOwoJCQl0LnBvaW50KCk7CgkJCXQucG9wKCk7CgkJfQoJfQp9KTsKCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKSwKCQl0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzLAoJCXggPSBsZWZ0ICsgMzsKCgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKDEyMCwgMjQwLCAxODApOwoJdC5wcmludCgnVEVYVE1PRElGSUVSLlJPVEFURScsIHgsIHkrKyk7Cgl0LmNoYXJDb2xvcig3MCwgMTAwLCAxNDApOwoJdC5wcmludCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrKTsKCXQuY2hhckNvbG9yKDE0MCwgMjEwLCAyNTUpOwoJdC5wcmludCgnQ09OQ0VQVDogTU9JUkUgU1BJUk9HUkFQSCBDSVRBREVMJywgeCwgeSsrKTsKCXQuY2hhckNvbG9yKDE0MCwgMTYwLCAxOTApOwoJdC5wcmludCgnUm90YXRlcyBjdXJyZW50IGNvb3JkaW5hdGUgc3BhY2UnLCB4LCB5KyspOwoJdC5wcmludCgnYnkgc3BlY2lmaWVkIGFuZ2xlIGluIDJEIHBsYW5lLicsIHgsIHkrKyk7Cgl0LmNoYXJDb2xvcig3MCwgMTAwLCAxNDApOwoJdC5wcmludCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrKTsKCXQuY2hhckNvbG9yKDE0MCwgMjU1LCAyMDApOwoJdC5wcmludCgnUk9UQVRJT046IEZVTEwtU0NSRUVOIEhBUk1PTklDIE1PSVJFJywgeCwgeSsrKTsKCXQucG9wKCk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />

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
