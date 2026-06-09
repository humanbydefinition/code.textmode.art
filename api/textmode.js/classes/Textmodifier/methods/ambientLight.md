---
layout: doc
editLink: true
title: ambientLight
description: Add an ambient light using a grayscale value.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-09
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / ambientLight

# Method: ambientLight()

## Call Signature

```ts
ambientLight(gray): void;
```

Add an ambient light using a grayscale value.

Ambient light shines evenly from all directions.
Multiple calls are additive, so colors accumulate.
Ambient lights are frame-scoped and reset each layer draw callback.
Lighting uses RGB only, so any provided alpha value is ignored.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gray` | `number` | Grayscale value (0-255) |

### Returns

`void`

### Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="ambientLight" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgY2hhbm5lbCA9IDA7CgpmdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7Cgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKHIsIGcsIGIpOwoJdC5wcmludCh0ZXh0LCB4LCB5KTsKCXQucG9wKCk7Cn0KCnQuZHJhdygoKSA9PiB7Cgl0LmJhY2tncm91bmQoNiwgOCwgMTgpOwoJY29uc3QgdGltZSA9IHQuZnJhbWVDb3VudCAqIDAuMDI1OwoJY2hhbm5lbCA9IDEyNy41ICsgMTI3LjUgKiBNYXRoLnNpbih0aW1lKTsKCXQucGVyc3BlY3RpdmUoNTgsIDAuMSwgNDA5Nik7Cgl0LmNhbWVyYSgxNiwgLTEwLCA0MiwgMCwgMCwgMCk7Cgl0LmFtYmllbnRMaWdodChjaGFubmVsLCBjaGFubmVsLCBjaGFubmVsLCBjaGFubmVsKTsKCXQucm90YXRlWSh0aW1lICogNDApOwoJdC5jaGFyKCcjJyk7Cgl0LmNoYXJDb2xvcigyNTUsIDI1NSwgMjU1KTsKCXQuc3BoZXJlKDcpOwp9KTsKCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CglkcmF3VGV4dCgnVEVYVE1PRElGSUVSLkFNQklFTlRMSUdIVCcsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IEFNQklFTlQgTElHSFQnLCB4LCB5KyssIDEwMCwgMjIwLCAyNTUpOwoJZHJhd1RleHQoJ0xpZ2h0aW5nIGNoYW5nZXMgc3VyZmFjZSBzaGFkZS4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJ1NjZW5lIGtlZXBzIGZvY3VzIG9uIG9uZSBzcGhlcmUuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7Cgljb25zdCBsZXZlbCA9IE1hdGgucm91bmQoY2hhbm5lbCk7CglkcmF3VGV4dChgUkdCQToke2xldmVsfSwke2xldmVsfSwke2xldmVsfSwke2xldmVsfWAsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />

## Call Signature

```ts
ambientLight(gray, alpha): void;
```

Add an ambient light using a grayscale value and alpha.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gray` | `number` | Grayscale value (0-255) |
| `alpha` | `number` | Alpha value (0-255) |

### Returns

`void`

## Call Signature

```ts
ambientLight(
   v1, 
   v2, 
   v3): void;
```

Add an ambient light using RGB components.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v1` | `number` | Red component (0-255) |
| `v2` | `number` | Green component (0-255) |
| `v3` | `number` | Blue component (0-255) |

### Returns

`void`

## Call Signature

```ts
ambientLight(
   v1, 
   v2, 
   v3, 
   alpha): void;
```

Add an ambient light using RGB components and alpha.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v1` | `number` | Red component (0-255) |
| `v2` | `number` | Green component (0-255) |
| `v3` | `number` | Blue component (0-255) |
| `alpha` | `number` | Alpha value (0-255) |

### Returns

`void`

## Call Signature

```ts
ambientLight(color): void;
```

Add an ambient light using a color value.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `color` | \| `string` \| \[`number`, `number`, `number`\] \| \[`number`, `number`, `number`, `number`\] \| [`TextmodeColor`](../../../namespaces/color/classes/TextmodeColor.md) | Color value (CSS string, TextmodeColor, or RGB(A) array) |

### Returns

`void`
