---
layout: doc
editLink: true
title: ambientLight
description: Add an ambient light using a grayscale value.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-07
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

<TextmodeApiSandbox profile="textmode.js" encoded-files="W3siaW5mbyI6Imh0bWwgaW5kZXguaHRtbCBbaGlkZGVuXSBbcmVhZG9ubHldIiwiY29kZSI6IjwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI-XG4gIDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8-XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8dGl0bGU-YW1iaWVudExpZ2h0PC90aXRsZT5cbiAgICA8c3R5bGU-XG4gICAgICBodG1sLFxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgIH1cblxuICAgICAgY2FudmFzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3RleHRtb2RlLmpzQDAuMTYuMC1iZXRhLjEvZGlzdC90ZXh0bW9kZS51bWQuanNcIj48L3NjcmlwdD5cbiAgPC9oZWFkPlxuICA8Ym9keT5cbiAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIiBzcmM9XCJza2V0Y2guanNcIj48L3NjcmlwdD5cbiAgPC9ib2R5PlxuPC9odG1sPiJ9LHsiaW5mbyI6ImpzIHNrZXRjaC5qcyBbYWN0aXZlXSIsImNvZGUiOiJjb25zdCB0ID0gdGV4dG1vZGUuY3JlYXRlKHtcblx0cGl4ZWxEZW5zaXR5OiAxLFxuXHR3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG5cdGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuXHRmb250U2l6ZTogMTYsXG59KTtcblxuY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpO1xuXG5sZXQgY2hhbm5lbCA9IDA7XG5cbmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHtcblx0dC5wdXNoKCk7XG5cdHQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTtcblx0dC5jaGFyQ29sb3IociwgZywgYik7XG5cdHQucHJpbnQodGV4dCwgeCwgeSk7XG5cdHQucG9wKCk7XG59XG5cbnQuZHJhdygoKSA9PiB7XG5cdHQuYmFja2dyb3VuZCg2LCA4LCAxOCk7XG5cdGNvbnN0IHRpbWUgPSB0LmZyYW1lQ291bnQgKiAwLjAyNTtcblx0Y2hhbm5lbCA9IDEyNy41ICsgMTI3LjUgKiBNYXRoLnNpbih0aW1lKTtcblx0dC5wZXJzcGVjdGl2ZSg1OCwgMC4xLCA0MDk2KTtcblx0dC5jYW1lcmEoMTYsIC0xMCwgNDIsIDAsIDAsIDApO1xuXHR0LmFtYmllbnRMaWdodChjaGFubmVsLCBjaGFubmVsLCBjaGFubmVsLCBjaGFubmVsKTtcblx0dC5yb3RhdGVZKHRpbWUgKiA0MCk7XG5cdHQuY2hhcignIycpO1xuXHR0LmNoYXJDb2xvcigyNTUsIDI1NSwgMjU1KTtcblx0dC5zcGhlcmUoNyk7XG59KTtcblxubGFiZWxMYXllci5kcmF3KCgpID0-IHtcblx0dC5jbGVhcigpO1xuXHRjb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTtcblx0Y29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTtcblx0bGV0IHkgPSB0b3AgKyAzO1xuXHRjb25zdCB4ID0gbGVmdCArIDM7XG5cdGRyYXdUZXh0KCdURVhUTU9ESUZJRVIuQU1CSUVOVExJR0hUJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTtcblx0ZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTtcblx0ZHJhd1RleHQoJ0NPTkNFUFQ6IEFNQklFTlQgTElHSFQnLCB4LCB5KyssIDEwMCwgMjIwLCAyNTUpO1xuXHRkcmF3VGV4dCgnTGlnaHRpbmcgY2hhbmdlcyBzdXJmYWNlIHNoYWRlLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7XG5cdGRyYXdUZXh0KCdTY2VuZSBrZWVwcyBmb2N1cyBvbiBvbmUgc3BoZXJlLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7XG5cdGRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7XG5cdGNvbnN0IGxldmVsID0gTWF0aC5yb3VuZChjaGFubmVsKTtcblx0ZHJhd1RleHQoYFJHQkE6JHtsZXZlbH0sJHtsZXZlbH0sJHtsZXZlbH0sJHtsZXZlbH1gLCB4LCB5KyssIDE0MCwgMjU1LCAxODApO1xufSk7XG5cbnQud2luZG93UmVzaXplZCgoKSA9PiB7XG5cdHQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xufSk7In1d" />

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
