---
layout: doc
editLink: true
title: cellColor
description: Set the cell color used when cellColorMode is 'fixed'.
category: Methods
api: true
owner: TextmodeImage
namespace: media
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../../../index.md) / [media](../../../index.md) / [TextmodeImage](../../TextmodeImage.md) / cellColor

# Method: cellColor()

```ts
cellColor(
   colorOrGray, 
   g?, 
   b?, 
   a?): this;
```

Set the cell color used when [cellColorMode](../../TextmodeSource/methods/cellColorMode.md) is `'fixed'`.

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

<TextmodeApiSandbox profile="textmode.js" encoded-files="W3siaW5mbyI6Imh0bWwgaW5kZXguaHRtbCBbaGlkZGVuXSBbcmVhZG9ubHldIiwiY29kZSI6IjwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI-XG4gIDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8-XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8dGl0bGU-Y2VsbENvbG9yPC90aXRsZT5cbiAgICA8c3R5bGU-XG4gICAgICBodG1sLFxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgIH1cblxuICAgICAgY2FudmFzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3RleHRtb2RlLmpzQDAuMTYuMC1iZXRhLjEvZGlzdC90ZXh0bW9kZS51bWQuanNcIj48L3NjcmlwdD5cbiAgPC9oZWFkPlxuICA8Ym9keT5cbiAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIiBzcmM9XCJza2V0Y2guanNcIj48L3NjcmlwdD5cbiAgPC9ib2R5PlxuPC9odG1sPiJ9LHsiaW5mbyI6ImpzIHNrZXRjaC5qcyBbYWN0aXZlXSIsImNvZGUiOiJjb25zdCBJTUFHRV9VUkwgPSAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDY5MDU5MjUzNDYtMjFiZGE0ZDMyZGY0P3c9OTAwJnE9ODAnO1xuY29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7XG5cdHBpeGVsRGVuc2l0eTogMSxcblx0d2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuXHRoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcblx0Zm9udFNpemU6IDgsXG59KTtcblxuY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpO1xubGV0IHRlY2hTb3VyY2UgPSBudWxsO1xubGV0IHJlZCA9IDQwO1xubGV0IGJsdWUgPSA4MDtcblxudC5zZXR1cChhc3luYyAoKSA9PiB7XG5cdHRlY2hTb3VyY2UgPSBhd2FpdCB0LmxvYWRJbWFnZShJTUFHRV9VUkwpO1xuXHR0ZWNoU291cmNlLmNoYXJhY3RlcnMoJyAuOi09KyojJUAnKTtcblx0dGVjaFNvdXJjZS5jaGFyQ29sb3JNb2RlKCdmaXhlZCcpLmNoYXJDb2xvcigyNTUpO1xuXHR0ZWNoU291cmNlLmNlbGxDb2xvck1vZGUoJ2ZpeGVkJyk7XG59KTtcblxudC5kcmF3KCgpID0-IHtcblx0dC5iYWNrZ3JvdW5kKDYsIDEwLCAyMik7XG5cblx0aWYgKCF0ZWNoU291cmNlKSByZXR1cm47XG5cblx0Y29uc3QgdGltZSA9IHQuZnJhbWVDb3VudCAqIDAuMDQ7XG5cdHJlZCA9IE1hdGgucm91bmQoNDAgKyA0MCAqIE1hdGguc2luKHRpbWUpKTtcblx0Ymx1ZSA9IE1hdGgucm91bmQoODAgKyA0MCAqIE1hdGguY29zKHRpbWUgKiAwLjcpKTtcblxuXHR0ZWNoU291cmNlLmNlbGxDb2xvcihyZWQsIDQwLCBibHVlKTtcblxuXHR0LnB1c2goKTtcblx0dC50cmFuc2xhdGUoMCwgMCk7XG5cdHQuaW1hZ2UodGVjaFNvdXJjZSwgMjQsIDE0KTtcblx0dC5wb3AoKTtcbn0pO1xuXG5mdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7XG5cdHQucHVzaCgpO1xuXHR0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7XG5cdHQuY2hhckNvbG9yKHIsIGcsIGIpO1xuXHR0LnByaW50KHRleHQsIHgsIHkpO1xuXHR0LnBvcCgpO1xufVxuXG5sYWJlbExheWVyLmRyYXcoKCkgPT4ge1xuXHR0LmNsZWFyKCk7XG5cdGNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpO1xuXHRjb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpO1xuXHRsZXQgeSA9IHRvcCArIDM7XG5cdGNvbnN0IHggPSBsZWZ0ICsgMztcblxuXHRkcmF3VGV4dCgnVEVYVE1PREVTT1VSQ0UuQ0VMTENPTE9SJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTtcblx0ZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTtcblx0ZHJhd1RleHQoJ0NPTkNFUFQ6IFNFVCBDT05TVEFOVCBDRUxMIENPTE9SJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTtcblx0ZHJhd1RleHQoJ1NldHMgY29sb3IgdXNlZCBpbiBmaXhlZCBjb2xvcmluZyBtb2RlLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7XG5cdGRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7XG5cdGRyYXdUZXh0KGBDRUxMIENPTE9SOiBSR0IoJHtyZWR9LDQwLCR7Ymx1ZX0pYCwgeCwgeSsrLCAxNDAsIDE5MCwgMjU1KTtcbn0pO1xuXG50LndpbmRvd1Jlc2l6ZWQoKCkgPT4ge1xuXHR0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbn0pOyJ9XQ" />

## Inherited from

[`TextmodeSource`](../../TextmodeSource.md).[`cellColor`](../../TextmodeSource/methods/cellColor.md)
