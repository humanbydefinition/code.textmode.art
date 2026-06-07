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

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="filter" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBlZmZlY3RMYXllciA9IHQubGF5ZXJzLmFkZCgpOwpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7Cgpjb25zdCBmaWx0ZXJzID0gWwoJeyBuYW1lOiAnaW52ZXJ0JywgcGFyYW1zOiB1bmRlZmluZWQsIGxhYmVsOiAnSU5WRVJUJyB9LAoJeyBuYW1lOiAnZ3JheXNjYWxlJywgcGFyYW1zOiAxLjAsIGxhYmVsOiAnR1JBWVNDQUxFICgxLjApJyB9LAoJeyBuYW1lOiAnc2VwaWEnLCBwYXJhbXM6IDAuOCwgbGFiZWw6ICdTRVBJQSAoMC44KScgfSwKCXsgbmFtZTogJ3RocmVzaG9sZCcsIHBhcmFtczogMC41LCBsYWJlbDogJ1RIUkVTSE9MRCAoMC41KScgfSwKXTsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHJnYiA9IFsyNTUsIDI1NSwgMjU1XSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyZ2JbMF0sIHJnYlsxXSwgcmdiWzJdKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDYsIDEwLCAyMik7CgoJdC5wdXNoKCk7Cgl0LmNoYXJDb2xvcig0MCwgNTAsIDgwKTsKCXQuY2hhcignLicpOwoJdC5yZWN0KHQuZ3JpZC5jb2xzLCB0LmdyaWQucm93cyk7Cgl0LnBvcCgpOwp9KTsKCmVmZmVjdExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgdGltZSA9IHQuZnJhbWVDb3VudCAqIDAuMDI7CgoJZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHsKCQljb25zdCBhbmdsZSA9IHRpbWUgKyAoaSAvIDgpICogTWF0aC5QSSAqIDI7CgkJY29uc3QgciA9IDggKyBNYXRoLnNpbih0aW1lICogMikgKiAyOwoJCXQucHVzaCgpOwoJCXQudHJhbnNsYXRlKE1hdGgucm91bmQoTWF0aC5jb3MoYW5nbGUpICogciAqIDEuNSksIE1hdGgucm91bmQoTWF0aC5zaW4oYW5nbGUpICogciAqIDAuNikpOwoJCXQuY2hhckNvbG9yKDEwMCArIGkgKiAyMCwgMjU1IC0gaSAqIDEwLCAxNTAgKyBpICogMTApOwoJCXQuY2hhcignIycpOwoJCXQucG9pbnQoKTsKCQl0LnBvcCgpOwoJfQoKCWNvbnN0IGZpbHRlcklkeCA9IE1hdGguZmxvb3IodC5mcmFtZUNvdW50IC8gMTIwKSAlIChmaWx0ZXJzLmxlbmd0aCArIDEpOwoKCWlmIChmaWx0ZXJJZHggPCBmaWx0ZXJzLmxlbmd0aCkgewoJCWNvbnN0IGFjdGl2ZSA9IGZpbHRlcnNbZmlsdGVySWR4XTsKCQllZmZlY3RMYXllci5maWx0ZXIoYWN0aXZlLm5hbWUsIGFjdGl2ZS5wYXJhbXMpOwoJfQp9KTsKCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7Cgljb25zdCBmaWx0ZXJJZHggPSBNYXRoLmZsb29yKHQuZnJhbWVDb3VudCAvIDEyMCkgJSAoZmlsdGVycy5sZW5ndGggKyAxKTsKCWNvbnN0IGFjdGl2ZSA9IGZpbHRlcklkeCA8IGZpbHRlcnMubGVuZ3RoID8gZmlsdGVyc1tmaWx0ZXJJZHhdLmxhYmVsIDogJ05PUk1BTCc7CgoJZHJhd1RleHQoJ1RFWFRNT0RFTEFZRVIuRklMVEVSJywgeCwgeSsrLCBbMTAwLCAyNTUsIDE0MF0pOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgWzgwLCAxMDAsIDE1MF0pOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IExBWUVSIFBPU1QgRklMVEVSUycsIHgsIHkrKywgWzEwMCwgMjIwLCAyNTVdKTsKCWRyYXdUZXh0KCdPbmx5IHRoZSBlZmZlY3QgbGF5ZXIgY2hhbmdlcy4nLCB4LCB5KyssIFsxNDAsIDE2MCwgMTkwXSk7CglkcmF3VGV4dCgnQmFzZSBncmlkIHJlbWFpbnMgdW5maWx0ZXJlZC4nLCB4LCB5KyssIFsxNDAsIDE2MCwgMTkwXSk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCBbODAsIDEwMCwgMTUwXSk7CglkcmF3VGV4dChgQUNUSVZFOiAke2FjdGl2ZX1gLCB4LCB5KyssIFsxNDAsIDI1NSwgMTgwXSk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />

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
