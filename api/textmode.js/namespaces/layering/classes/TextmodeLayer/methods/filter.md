---
layout: doc
editLink: true
title: filter
description: Queue a post-processing filter for this layer.
category: Methods
api: true
owner: TextmodeLayer
namespace: layering
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../../../index.md) / [layering](../../../index.md) / [TextmodeLayer](../../TextmodeLayer.md) / filter

# Method: filter()

## Call Signature

```ts
filter<T>(name, params?): void;
```

Queue a post-processing filter for this layer.

Filters are applied after the ASCII resolve pass in the order they are called.
Call this method within your layer's draw callback to apply effects.

**Built-in filters:**
- `'invert'` - Inverts all colors
- `'grayscale'` - Converts to grayscale (param: amount 0-1, default 1)
- `'sepia'` - Applies sepia tone (param: amount 0-1, default 1)
- `'threshold'` - Black/white threshold (param: threshold 0-1, default 0.5)

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`BuiltInFilterName`](../../../../filters/type-aliases/BuiltInFilterName.md) |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `T` | Built-in or registered filter name. |
| `params?` | [`BuiltInFilterParams`](../../../../filters/interfaces/BuiltInFilterParams.md)\[`T`\] | Optional filter parameters. |

### Returns

`void`

### Example

<TextmodeApiSandbox profile="textmode.js" encoded-files="W3siaW5mbyI6Imh0bWwgaW5kZXguaHRtbCBbaGlkZGVuXSBbcmVhZG9ubHldIiwiY29kZSI6IjwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI-XG4gIDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8-XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8dGl0bGU-ZmlsdGVyPC90aXRsZT5cbiAgICA8c3R5bGU-XG4gICAgICBodG1sLFxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgIH1cblxuICAgICAgY2FudmFzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3RleHRtb2RlLmpzQDAuMTYuMC1iZXRhLjEvZGlzdC90ZXh0bW9kZS51bWQuanNcIj48L3NjcmlwdD5cbiAgPC9oZWFkPlxuICA8Ym9keT5cbiAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIiBzcmM9XCJza2V0Y2guanNcIj48L3NjcmlwdD5cbiAgPC9ib2R5PlxuPC9odG1sPiJ9LHsiaW5mbyI6ImpzIHNrZXRjaC5qcyBbYWN0aXZlXSIsImNvZGUiOiJjb25zdCB0ID0gdGV4dG1vZGUuY3JlYXRlKHtcblx0cGl4ZWxEZW5zaXR5OiAxLFxuXHR3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG5cdGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuXHRmb250U2l6ZTogMTYsXG59KTtcblxuY29uc3QgZWZmZWN0TGF5ZXIgPSB0LmxheWVycy5hZGQoKTtcbmNvbnN0IGxhYmVsTGF5ZXIgPSB0LmxheWVycy5hZGQoKTtcblxuY29uc3QgZmlsdGVycyA9IFtcblx0eyBuYW1lOiAnaW52ZXJ0JywgcGFyYW1zOiB1bmRlZmluZWQsIGxhYmVsOiAnSU5WRVJUJyB9LFxuXHR7IG5hbWU6ICdncmF5c2NhbGUnLCBwYXJhbXM6IDEuMCwgbGFiZWw6ICdHUkFZU0NBTEUgKDEuMCknIH0sXG5cdHsgbmFtZTogJ3NlcGlhJywgcGFyYW1zOiAwLjgsIGxhYmVsOiAnU0VQSUEgKDAuOCknIH0sXG5cdHsgbmFtZTogJ3RocmVzaG9sZCcsIHBhcmFtczogMC41LCBsYWJlbDogJ1RIUkVTSE9MRCAoMC41KScgfSxcbl07XG5cbmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHJnYiA9IFsyNTUsIDI1NSwgMjU1XSkge1xuXHR0LnB1c2goKTtcblx0dC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpO1xuXHR0LmNoYXJDb2xvcihyZ2JbMF0sIHJnYlsxXSwgcmdiWzJdKTtcblx0dC5wcmludCh0ZXh0LCB4LCB5KTtcblx0dC5wb3AoKTtcbn1cblxudC5kcmF3KCgpID0-IHtcblx0dC5iYWNrZ3JvdW5kKDYsIDEwLCAyMik7XG5cblx0dC5wdXNoKCk7XG5cdHQuY2hhckNvbG9yKDQwLCA1MCwgODApO1xuXHR0LmNoYXIoJy4nKTtcblx0dC5yZWN0KHQuZ3JpZC5jb2xzLCB0LmdyaWQucm93cyk7XG5cdHQucG9wKCk7XG59KTtcblxuZWZmZWN0TGF5ZXIuZHJhdygoKSA9PiB7XG5cdHQuY2xlYXIoKTtcblx0Y29uc3QgdGltZSA9IHQuZnJhbWVDb3VudCAqIDAuMDI7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcblx0XHRjb25zdCBhbmdsZSA9IHRpbWUgKyAoaSAvIDgpICogTWF0aC5QSSAqIDI7XG5cdFx0Y29uc3QgciA9IDggKyBNYXRoLnNpbih0aW1lICogMikgKiAyO1xuXHRcdHQucHVzaCgpO1xuXHRcdHQudHJhbnNsYXRlKE1hdGgucm91bmQoTWF0aC5jb3MoYW5nbGUpICogciAqIDEuNSksIE1hdGgucm91bmQoTWF0aC5zaW4oYW5nbGUpICogciAqIDAuNikpO1xuXHRcdHQuY2hhckNvbG9yKDEwMCArIGkgKiAyMCwgMjU1IC0gaSAqIDEwLCAxNTAgKyBpICogMTApO1xuXHRcdHQuY2hhcignIycpO1xuXHRcdHQucG9pbnQoKTtcblx0XHR0LnBvcCgpO1xuXHR9XG5cblx0Y29uc3QgZmlsdGVySWR4ID0gTWF0aC5mbG9vcih0LmZyYW1lQ291bnQgLyAxMjApICUgKGZpbHRlcnMubGVuZ3RoICsgMSk7XG5cblx0aWYgKGZpbHRlcklkeCA8IGZpbHRlcnMubGVuZ3RoKSB7XG5cdFx0Y29uc3QgYWN0aXZlID0gZmlsdGVyc1tmaWx0ZXJJZHhdO1xuXHRcdGVmZmVjdExheWVyLmZpbHRlcihhY3RpdmUubmFtZSwgYWN0aXZlLnBhcmFtcyk7XG5cdH1cbn0pO1xuXG5sYWJlbExheWVyLmRyYXcoKCkgPT4ge1xuXHR0LmNsZWFyKCk7XG5cdGNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpO1xuXHRjb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpO1xuXHRsZXQgeSA9IHRvcCArIDM7XG5cdGNvbnN0IHggPSBsZWZ0ICsgMztcblx0Y29uc3QgZmlsdGVySWR4ID0gTWF0aC5mbG9vcih0LmZyYW1lQ291bnQgLyAxMjApICUgKGZpbHRlcnMubGVuZ3RoICsgMSk7XG5cdGNvbnN0IGFjdGl2ZSA9IGZpbHRlcklkeCA8IGZpbHRlcnMubGVuZ3RoID8gZmlsdGVyc1tmaWx0ZXJJZHhdLmxhYmVsIDogJ05PUk1BTCc7XG5cblx0ZHJhd1RleHQoJ1RFWFRNT0RFTEFZRVIuRklMVEVSJywgeCwgeSsrLCBbMTAwLCAyNTUsIDE0MF0pO1xuXHRkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCBbODAsIDEwMCwgMTUwXSk7XG5cdGRyYXdUZXh0KCdDT05DRVBUOiBMQVlFUiBQT1NUIEZJTFRFUlMnLCB4LCB5KyssIFsxMDAsIDIyMCwgMjU1XSk7XG5cdGRyYXdUZXh0KCdPbmx5IHRoZSBlZmZlY3QgbGF5ZXIgY2hhbmdlcy4nLCB4LCB5KyssIFsxNDAsIDE2MCwgMTkwXSk7XG5cdGRyYXdUZXh0KCdCYXNlIGdyaWQgcmVtYWlucyB1bmZpbHRlcmVkLicsIHgsIHkrKywgWzE0MCwgMTYwLCAxOTBdKTtcblx0ZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgWzgwLCAxMDAsIDE1MF0pO1xuXHRkcmF3VGV4dChgQUNUSVZFOiAke2FjdGl2ZX1gLCB4LCB5KyssIFsxNDAsIDI1NSwgMTgwXSk7XG59KTtcblxudC53aW5kb3dSZXNpemVkKCgpID0-IHtcblx0dC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG59KTsifV0" />

## Call Signature

```ts
filter<TParams>(name, params?): void;
```

Queue a registered custom filter for this layer.

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TParams` | `unknown` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Custom filter name. |
| `params?` | `TParams` | Optional filter parameters. |

### Returns

`void`
