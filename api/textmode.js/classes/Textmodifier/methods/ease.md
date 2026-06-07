---
layout: doc
editLink: true
title: ease
description: Apply an easing curve to a normalized amount.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / ease

# Method: ease()

```ts
ease(name, amount): number;
```

Apply an easing curve to a normalized amount.

Inputs are clamped to the 0-1 range for animation-friendly behavior.
Outputs are not clamped, so back, elastic, and bounce curves can overshoot.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | \| `"linear"` \| `"inQuad"` \| `"outQuad"` \| `"inOutQuad"` \| `"inCubic"` \| `"outCubic"` \| `"inOutCubic"` \| `"inQuart"` \| `"outQuart"` \| `"inOutQuart"` \| `"inQuint"` \| `"outQuint"` \| `"inOutQuint"` \| `"inSine"` \| `"outSine"` \| `"inOutSine"` \| `"inExpo"` \| `"outExpo"` \| `"inOutExpo"` \| `"inCirc"` \| `"outCirc"` \| `"inOutCirc"` \| `"inBack"` \| `"outBack"` \| `"inOutBack"` \| `"inElastic"` \| `"outElastic"` \| `"inOutElastic"` \| `"inBounce"` \| `"outBounce"` \| `"inOutBounce"` | Easing curve name. |
| `amount` | `number` | Normalized amount to ease. |

## Returns

`number`

Eased amount.

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="ease" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CmNvbnN0IGR1cmF0aW9uID0gMTIwOwpjb25zdCBjdXJ2ZXMgPSBbCgl7IG5hbWU6ICdsaW5lYXInLCBjaGFyOiAnbycsIHk6IC02LCBjb2xvcjogWzEyMCwgMTkwLCAyNTVdIH0sCgl7IG5hbWU6ICdpblF1YWQnLCBjaGFyOiAncScsIHk6IC0zLCBjb2xvcjogWzI1NSwgMjEwLCAxMjBdIH0sCgl7IG5hbWU6ICdvdXRTaW5lJywgY2hhcjogJ3MnLCB5OiAwLCBjb2xvcjogWzI1NSwgMTQwLCAxODBdIH0sCgl7IG5hbWU6ICdpbk91dEN1YmljJywgY2hhcjogJ0AnLCB5OiAzLCBjb2xvcjogWzEyMCwgMjU1LCAxNzBdIH0sCgl7IG5hbWU6ICdvdXRCb3VuY2UnLCBjaGFyOiAnYicsIHk6IDYsIGNvbG9yOiBbMTkwLCAxNjAsIDI1NV0gfSwKXTsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKZnVuY3Rpb24gcGxvdCh4LCB5LCBjaGFyLCByLCBnLCBiKSB7Cgl0LnB1c2goKTsKCXQudHJhbnNsYXRlKE1hdGgucm91bmQoeCksIHkpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LmNoYXIoY2hhcik7Cgl0LnBvaW50KCk7Cgl0LnBvcCgpOwp9Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDUsIDgsIDE4KTsKCgljb25zdCBhbW91bnQgPSAodC5mcmFtZUNvdW50ICUgZHVyYXRpb24pIC8gZHVyYXRpb247Cgljb25zdCBsYWJlbFdpZHRoID0gMTA7Cgljb25zdCB3aWR0aCA9IE1hdGgubWF4KDgsIE1hdGgubWluKDI0LCB0LmdyaWQuY29scyAtIGxhYmVsV2lkdGggLSAxMCkpOwoJY29uc3QgdG90YWxXaWR0aCA9IGxhYmVsV2lkdGggKyAyICsgd2lkdGg7Cgljb25zdCBsYWJlbFggPSAtTWF0aC5mbG9vcih0b3RhbFdpZHRoIC8gMik7Cgljb25zdCBsZWZ0ID0gbGFiZWxYICsgbGFiZWxXaWR0aCArIDI7CgoJZm9yIChjb25zdCBjdXJ2ZSBvZiBjdXJ2ZXMpIHsKCQljb25zdCBlYXNlZCA9IHQuZWFzZShjdXJ2ZS5uYW1lLCBhbW91bnQpOwoJCWNvbnN0IHggPSB0LmxlcnAobGVmdCwgbGVmdCArIHdpZHRoLCBlYXNlZCk7CgkJY29uc3QgW3IsIGcsIGJdID0gY3VydmUuY29sb3I7CgoJCWRyYXdUZXh0KGN1cnZlLm5hbWUsIGxhYmVsWCwgY3VydmUueSAtIDEsIHIsIGcsIGIpOwoKCQlmb3IgKGxldCBzdGVwID0gMDsgc3RlcCA8PSB3aWR0aDsgc3RlcCsrKSB7CgkJCXBsb3QobGVmdCArIHN0ZXAsIGN1cnZlLnksICctJywgNzAsIDk1LCAxNDApOwoJCX0KCgkJcGxvdCh4LCBjdXJ2ZS55LCBjdXJ2ZS5jaGFyLCByLCBnLCBiKTsKCX0KfSk7CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoJY29uc3QgYW1vdW50ID0gKHQuZnJhbWVDb3VudCAlIGR1cmF0aW9uKSAvIGR1cmF0aW9uOwoKCWRyYXdUZXh0KCdURVhUTU9ESUZJRVIuRUFTRScsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDVVJWRVMgSU4gTU9USU9OJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdzYW1lIGFtb3VudCwgZGlmZmVyZW50IHRpbWluZycsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dChgYW1vdW50OiAke2Ftb3VudC50b0ZpeGVkKDIpfWAsIHgsIHkrKywgMjIwLCAyMzAsIDI1NSk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
