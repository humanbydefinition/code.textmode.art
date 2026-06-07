---
layout: doc
editLink: true
title: lightFalloff
description: Configure distance attenuation used by point lights.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / lightFalloff

# Method: lightFalloff()

```ts
lightFalloff(
   constant, 
   linear, 
   quadratic): void;
```

Configure distance attenuation used by point lights.

Uses the p5-style formula: `1 / (constant + d * linear + d * d * quadratic)`.
Negative inputs are clamped to `0`. If all inputs resolve to `0`, the falloff resets to `(1, 0, 0)`.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constant` | `number` | Constant attenuation term |
| `linear` | `number` | Linear attenuation term |
| `quadratic` | `number` | Quadratic attenuation term |

## Returns

`void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="lightFalloff" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgdmFsdWUgPSAwOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDYsIDgsIDE4KTsKCWNvbnN0IHRpbWUgPSB0LmZyYW1lQ291bnQgKiAwLjAyNTsKCXZhbHVlID0gMC41ICsgMC41ICogTWF0aC5zaW4odGltZSk7Cgl0LnBlcnNwZWN0aXZlKDU4LCAwLjEsIDQwOTYpOwoJdC5jYW1lcmEoMTYsIC0xMCwgNDIsIDAsIDAsIDApOwoJdC5saWdodEZhbGxvZmYoMSwgdmFsdWUgKiAwLjA4LCB2YWx1ZSAqIDAuMDEpOwoJdC5wb2ludExpZ2h0KFsyNTUsIDIxMCwgMTIwXSwgeyB4OiAxOCwgeTogLTE4LCB6OiAyOCB9KTsKCXQucm90YXRlWSh0aW1lICogNDApOwoJdC5jaGFyKCcjJyk7Cgl0LmNoYXJDb2xvcigxNDAsIDIyMCwgMjU1KTsKCXQuc3BoZXJlKDcpOwp9KTsKCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CglkcmF3VGV4dCgnVEVYVE1PRElGSUVSLkxJR0hURkFMTE9GRicsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IExJR0hUIEZBTExPRkYnLCB4LCB5KyssIDEwMCwgMjIwLCAyNTUpOwoJZHJhd1RleHQoJ0xpZ2h0aW5nIGNoYW5nZXMgc3VyZmFjZSBzaGFkZS4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJ1NjZW5lIGtlZXBzIGZvY3VzIG9uIG9uZSBzcGhlcmUuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dChgRkFMTE9GRjogJHt2YWx1ZS50b0ZpeGVkKDIpfWAsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
