---
layout: doc
editLink: true
title: rotate
description: Set rotation for subsequent shape drawing.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-07
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

<TextmodeApiSandbox profile="textmode.js" encoded-files="W3siaW5mbyI6Imh0bWwgaW5kZXguaHRtbCBbaGlkZGVuXSBbcmVhZG9ubHldIiwiY29kZSI6IjwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI-XG4gIDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8-XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8dGl0bGU-cm90YXRlPC90aXRsZT5cbiAgICA8c3R5bGU-XG4gICAgICBodG1sLFxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgIH1cblxuICAgICAgY2FudmFzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3RleHRtb2RlLmpzQDAuMTYuMC1iZXRhLjEvZGlzdC90ZXh0bW9kZS51bWQuanNcIj48L3NjcmlwdD5cbiAgPC9oZWFkPlxuICA8Ym9keT5cbiAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIiBzcmM9XCJza2V0Y2guanNcIj48L3NjcmlwdD5cbiAgPC9ib2R5PlxuPC9odG1sPiJ9LHsiaW5mbyI6ImpzIHNrZXRjaC5qcyBbYWN0aXZlXSIsImNvZGUiOiJjb25zdCB0ID0gdGV4dG1vZGUuY3JlYXRlKHtcblx0cGl4ZWxEZW5zaXR5OiAxLFxuXHR3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG5cdGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuXHRmb250U2l6ZTogMTYsXG59KTtcblxuY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpO1xuXG5sZXQgdmFsdWUgPSAwO1xuXG5mdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7XG5cdHQucHVzaCgpO1xuXHR0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7XG5cdHQuY2hhckNvbG9yKHIsIGcsIGIpO1xuXHR0LnByaW50KHRleHQsIHgsIHkpO1xuXHR0LnBvcCgpO1xufVxuXG50LmRyYXcoKCkgPT4ge1xuXHR0LmJhY2tncm91bmQoNiwgMTAsIDIyKTtcblx0Y29uc3QgdGltZSA9IHQuZnJhbWVDb3VudCAqIDAuMDQ7XG5cdHZhbHVlID0gKHRpbWUgKiA2MCkgJSAzNjA7XG5cdHQuY2hhckNvbG9yKDUwLCA2MCwgOTApO1xuXHR0LmNoYXIoJy4nKTtcblx0dC5saW5lKC0xOCwgMCwgMTgsIDApO1xuXHR0LmxpbmUoMCwgLTEwLCAwLCAxMCk7XG5cdHQucHVzaCgpO1xuXHR0LnJvdGF0ZSh2YWx1ZSk7XG5cdHQuY2hhcignIycpO1xuXHR0LmNoYXJDb2xvcigxNDAsIDI1NSwgMTgwKTtcblx0dC5yZWN0KDYsIDQpO1xuXHR0LnBvcCgpO1xufSk7XG5cbmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7XG5cdHQuY2xlYXIoKTtcblx0Y29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7XG5cdGNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7XG5cdGxldCB5ID0gdG9wICsgMztcblx0Y29uc3QgeCA9IGxlZnQgKyAzO1xuXHRkcmF3VGV4dCgnVEVYVE1PRElGSUVSLlJPVEFURScsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7XG5cdGRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7XG5cdGRyYXdUZXh0KCdDT05DRVBUOiBST1RBVEUgSU4gMkQnLCB4LCB5KyssIDEwMCwgMjIwLCAyNTUpO1xuXHRkcmF3VGV4dCgnUm90YXRlcyBhcm91bmQgdGhlIFogYXhpcy4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApO1xuXHRkcmF3VGV4dCgnR3JpZCBjcm9zcyBzaG93cyBvcmlnaW5hbCBheGVzLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7XG5cdGRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7XG5cdGRyYXdUZXh0KGBERUc6ICR7dmFsdWUudG9GaXhlZCgxKX1gLCB4LCB5KyssIDE0MCwgMjU1LCAxODApO1xufSk7XG5cbnQud2luZG93UmVzaXplZCgoKSA9PiB7XG5cdHQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xufSk7In1d" />

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
