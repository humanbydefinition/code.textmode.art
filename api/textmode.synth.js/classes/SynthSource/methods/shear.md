---
layout: doc
editLink: true
title: shear
description: Shear coordinates along X and Y axes.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / shear

# Method: shear()

```ts
shear(
   x?, 
   y?, 
   centerX?, 
   centerY?): this;
```

Shear coordinates along X and Y axes.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | X shear amount (default: 0.0) |
| `y?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Y shear amount (default: 0.0) |
| `centerX?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Center X (default: 0.5) |
| `centerY?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Center Y (default: 0.5) |

## Returns

`this`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="shear" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiA4LAoJcGx1Z2luczogW1N5bnRoUGx1Z2luXSwKfSk7Cgp0LmJwbSgxOCk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CmNvbnN0IGdseXBocyA9ICcgLjotPSsqIyVAJzsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCglkcmF3VGV4dCgnU1lOVEhTT1VSQ0UuU0hFQVInLCB4LCB5KyssIDExMCwgMjU1LCAxNzApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgNzAsIDExMCwgMTQwKTsKCWRyYXdUZXh0KCdTTEFOVEVEIENPT1JESU5BVEVTJywgeCwgeSsrLCAxMjAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdSb3dzIGFuZCBjb2x1bW5zIGxlYW4uJywgeCwgeSsrLCAxNjAsIDE4MCwgMjEwKTsKCWRyYXdUZXh0KCdUaGUgbGF0dGljZSBzbGlwcyBnZW50bHkuJywgeCwgeSsrLCAxNjAsIDE4MCwgMjEwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDcwLCAxMTAsIDE0MCk7CglkcmF3VGV4dCgnU2VwYXJhdGUgYW5pbWF0ZWQgaW5rIGFuZCBwYXBlci4nLCB4LCB5KyssIDE1MCwgMjU1LCAxOTApOwp9KTsKCmNvbnN0IGluayA9IG9zYyg1LCAwLjAxOCwgMS4xKS5rYWxlaWQoNCkuY29sb3IoMC40NSwgMC43MiwgMS4wKS5tb2R1bGF0ZShub2lzZSgyLjIsIDAuMDE4KSwgMC4wMjUpOwpjb25zdCBwYXBlciA9IHBsYXNtYSgzLjYsIDAuMDI4LCAwLjEsIDEuMDUpLmNvbG9yKDAuMDMsIDAuMDgsIDAuMTgpLm1vZHVsYXRlU2NhbGUobm9pc2UoMi4wLCAwLjAxNSksIDAuMjIsIDAuOTUpOwoKdC5sYXllcnMuYmFzZS5zeW50aCgKCW9zYyg5LCAwLjAyLCAxLjIpCgkJLnNoZWFyKFstMC4xOCwgMC4xOF0uZmFzdCgwLjEyKS5lYXNlKCdlYXNlSW5PdXRTaW5lJyksIFswLjE0LCAtMC4xNF0uZmFzdCgwLjEyKS5lYXNlKCdlYXNlSW5PdXRTaW5lJyksIDAuNSwgMC41KQoJCS5yZXBlYXQoMiwgMywgMC4xLCAwLjA2KQoJCS5jb2xvcigwLjU1LCAwLjk1LCAxLjApCgkJLm1vZHVsYXRlU2NhbGUobm9pc2UoMi4wLCAwLjAxNCksIDAuMjIsIDAuOTUpCgkJLmNvbnRyYXN0KDEuMTYpCgkJLmNoYXJNYXAoZ2x5cGhzKQoJCS5jaGFyQ29sb3IoaW5rKQoJCS5jZWxsQ29sb3IocGFwZXIpCik7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
