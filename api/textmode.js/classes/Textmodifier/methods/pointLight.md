---
layout: doc
editLink: true
title: pointLight
description: Add a point light using RGB components and explicit XYZ position.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / pointLight

# Method: pointLight()

## Call Signature

```ts
pointLight(
   v1, 
   v2, 
   v3, 
   x, 
   y, 
   z): void;
```

Add a point light using RGB components and explicit XYZ position.

Point lights are frame-scoped and reset each layer draw callback.
Up to five point lights are supported per frame. Additional calls are ignored.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v1` | `number` | Red component (0-255) |
| `v2` | `number` | Green component (0-255) |
| `v3` | `number` | Blue component (0-255) |
| `x` | `number` | World-space X position |
| `y` | `number` | World-space Y position |
| `z` | `number` | World-space Z position |

### Returns

`void`

### Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="pointLight" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgdmFsdWUgPSAwOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDYsIDgsIDE4KTsKCWNvbnN0IHRpbWUgPSB0LmZyYW1lQ291bnQgKiAwLjAyNTsKCXZhbHVlID0gMC41ICsgMC41ICogTWF0aC5zaW4odGltZSk7Cgl0LnBlcnNwZWN0aXZlKDU4LCAwLjEsIDQwOTYpOwoJdC5jYW1lcmEoMTYsIC0xMCwgNDIsIDAsIDAsIDApOwoJdC5hbWJpZW50TGlnaHQoMjAsIDIwLCAyOCk7Cgl0LnBvaW50TGlnaHQoWzI1NSwgMjEwLCAxMjBdLCB7IHg6IE1hdGguc2luKHRpbWUpICogMjQsIHk6IC0xOCwgejogMjggfSk7Cgl0LnJvdGF0ZVkodGltZSAqIDQwKTsKCXQuY2hhcignIycpOwoJdC5jaGFyQ29sb3IoMTQwLCAyMjAsIDI1NSk7Cgl0LnNwaGVyZSg3KTsKfSk7CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoJZHJhd1RleHQoJ1RFWFRNT0RJRklFUi5QT0lOVExJR0hUJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogUE9JTlQgTElHSFQnLCB4LCB5KyssIDEwMCwgMjIwLCAyNTUpOwoJZHJhd1RleHQoJ0xpZ2h0aW5nIGNoYW5nZXMgc3VyZmFjZSBzaGFkZS4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJ1NjZW5lIGtlZXBzIGZvY3VzIG9uIG9uZSBzcGhlcmUuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dChgU1dFRVA6ICR7dmFsdWUudG9GaXhlZCgyKX1gLCB4LCB5KyssIDE0MCwgMjU1LCAxODApOwp9KTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />

## Call Signature

```ts
pointLight(
   v1, 
   v2, 
   v3, 
   position): void;
```

Add a point light using RGB components and an object position.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v1` | `number` | Red component (0-255) |
| `v2` | `number` | Green component (0-255) |
| `v3` | `number` | Blue component (0-255) |
| `position` | \{ `x`: `number`; `y`: `number`; `z`: `number`; \} | World-space position |
| `position.x` | `number` | World-space X position |
| `position.y` | `number` | World-space Y position |
| `position.z` | `number` | World-space Z position |

### Returns

`void`

## Call Signature

```ts
pointLight(
   color, 
   x, 
   y, 
   z): void;
```

Add a point light using a color value and explicit XYZ position.

Lighting uses RGB only, so any provided alpha value is ignored.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `color` | \| `string` \| \[`number`, `number`, `number`\] \| \[`number`, `number`, `number`, `number`\] \| [`TextmodeColor`](../../../namespaces/color/classes/TextmodeColor.md) | Color value (CSS string, TextmodeColor, or RGB(A) array) |
| `x` | `number` | World-space X position |
| `y` | `number` | World-space Y position |
| `z` | `number` | World-space Z position |

### Returns

`void`

## Call Signature

```ts
pointLight(color, position): void;
```

Add a point light using a color value and an object position.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `color` | \| `string` \| \[`number`, `number`, `number`\] \| \[`number`, `number`, `number`, `number`\] \| [`TextmodeColor`](../../../namespaces/color/classes/TextmodeColor.md) | Color value (CSS string, TextmodeColor, or RGB(A) array) |
| `position` | \{ `x`: `number`; `y`: `number`; `z`: `number`; \} | World-space position |
| `position.x` | `number` | World-space X position |
| `position.y` | `number` | World-space Y position |
| `position.z` | `number` | World-space Z position |

### Returns

`void`
