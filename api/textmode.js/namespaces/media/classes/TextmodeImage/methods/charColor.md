---
layout: doc
editLink: true
title: charColor
description: Set the character color used when charColorMode is 'fixed'.
category: Methods
api: true
owner: TextmodeImage
namespace: media
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../../../index.md) / [media](../../../index.md) / [TextmodeImage](../../TextmodeImage.md) / charColor

# Method: charColor()

```ts
charColor(
   colorOrGray, 
   g?, 
   b?, 
   a?): this;
```

Set the character color used when [charColorMode](../../TextmodeSource/methods/charColorMode.md) is `'fixed'`.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `colorOrGray` | \| `string` \| `number` \| [`TextmodeColor`](../../../../color/classes/TextmodeColor.md) | A grayscale value (0-255), hex string ('#RGB', '#RRGGBB', '#RRGGBBAA'), or TextmodeColor instance |
| `g?` | `number` | Optional green component (0-255) if using RGB format, or alpha (0-255) when using grayscale form |
| `b?` | `number` | Optional blue component (0-255) if using RGB format |
| `a?` | `number` | Optional alpha component (0-255) if using RGBA format |

## Returns

`this`

This instance for chaining.

## Example

<TextmodeApiSandbox profile="textmode.js" encoded-files="W3siaW5mbyI6Imh0bWwgaW5kZXguaHRtbCBbaGlkZGVuXSBbcmVhZG9ubHldIiwiY29kZSI6IjwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI-XG4gIDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8-XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8dGl0bGU-Y2hhckNvbG9yPC90aXRsZT5cbiAgICA8c3R5bGU-XG4gICAgICBodG1sLFxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgIH1cblxuICAgICAgY2FudmFzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3RleHRtb2RlLmpzQDAuMTYuMC1iZXRhLjEvZGlzdC90ZXh0bW9kZS51bWQuanNcIj48L3NjcmlwdD5cbiAgPC9oZWFkPlxuICA8Ym9keT5cbiAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIiBzcmM9XCJza2V0Y2guanNcIj48L3NjcmlwdD5cbiAgPC9ib2R5PlxuPC9odG1sPiJ9LHsiaW5mbyI6ImpzIHNrZXRjaC5qcyBbYWN0aXZlXSIsImNvZGUiOiJjb25zdCBJTUFHRV9VUkwgPSAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDY5MDU5MjUzNDYtMjFiZGE0ZDMyZGY0P3c9OTAwJnE9ODAnO1xuY29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7XG5cdHBpeGVsRGVuc2l0eTogMSxcblx0d2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuXHRoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcblx0Zm9udFNpemU6IDgsXG59KTtcblxuY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpO1xubGV0IHRlY2hTb3VyY2UgPSBudWxsO1xubGV0IHIgPSAxNTA7XG5sZXQgZyA9IDE1MDtcblxudC5zZXR1cChhc3luYyAoKSA9PiB7XG5cdHRlY2hTb3VyY2UgPSBhd2FpdCB0LmxvYWRJbWFnZShJTUFHRV9VUkwpO1xuXHR0ZWNoU291cmNlLmNoYXJhY3RlcnMoJyAuOi09KyojJUAnKTtcblx0dGVjaFNvdXJjZS5jaGFyQ29sb3JNb2RlKCdmaXhlZCcpO1xufSk7XG5cbnQuZHJhdygoKSA9PiB7XG5cdHQuYmFja2dyb3VuZCg2LCAxMCwgMjIpO1xuXG5cdGlmICghdGVjaFNvdXJjZSkgcmV0dXJuO1xuXG5cdGNvbnN0IHRpbWUgPSB0LmZyYW1lQ291bnQgKiAwLjA0O1xuXHRyID0gTWF0aC5yb3VuZCgxNTAgKyAxMDUgKiBNYXRoLnNpbih0aW1lKSk7XG5cdGcgPSBNYXRoLnJvdW5kKDE1MCArIDEwNSAqIE1hdGguY29zKHRpbWUgKiAwLjcpKTtcblxuXHR0ZWNoU291cmNlLmNoYXJDb2xvcihyLCBnLCAxMDApO1xuXG5cdHQucHVzaCgpO1xuXHR0LnRyYW5zbGF0ZSgwLCAwKTtcblx0dC5pbWFnZSh0ZWNoU291cmNlLCAyNCwgMTQpO1xuXHR0LnBvcCgpO1xufSk7XG5cbmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHtcblx0dC5wdXNoKCk7XG5cdHQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTtcblx0dC5jaGFyQ29sb3IociwgZywgYik7XG5cdHQucHJpbnQodGV4dCwgeCwgeSk7XG5cdHQucG9wKCk7XG59XG5cbmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7XG5cdHQuY2xlYXIoKTtcblx0Y29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7XG5cdGNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7XG5cdGxldCB5ID0gdG9wICsgMztcblx0Y29uc3QgeCA9IGxlZnQgKyAzO1xuXG5cdGRyYXdUZXh0KCdURVhUTU9ERVNPVVJDRS5DSEFSQ09MT1InLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApO1xuXHRkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApO1xuXHRkcmF3VGV4dCgnQ09OQ0VQVDogU0VUIENPTlNUQU5UIENIQVJBQ1RFUiBDT0xPUicsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7XG5cdGRyYXdUZXh0KCdTZXRzIGNvbG9yIHVzZWQgaW4gZml4ZWQgY29sb3JpbmcgbW9kZS4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApO1xuXHRkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApO1xuXHRkcmF3VGV4dChgQ0hBUiBDT0xPUjogUkdCKCR7cn0sJHtnfSwxMDApYCwgeCwgeSsrLCAxNDAsIDE5MCwgMjU1KTtcbn0pO1xuXG50LndpbmRvd1Jlc2l6ZWQoKCkgPT4ge1xuXHR0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbn0pOyJ9XQ" />

## Inherited from

[`TextmodeSource`](../../TextmodeSource.md).[`charColor`](../../TextmodeSource/methods/charColor.md)
