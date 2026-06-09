---
layout: doc
editLink: true
title: withAlpha
description: Create a copy of this color with a different alpha value.
category: Methods
api: true
owner: TextmodeColor
namespace: color
kind: Method
lastModified: 2026-06-09
---

[textmode.js](../../../../../index.md) / [color](../../../index.md) / [TextmodeColor](../../TextmodeColor.md) / withAlpha

# Method: withAlpha()

```ts
withAlpha(alpha): TextmodeColor;
```

Create a copy of this color with a different alpha value.

Useful for creating semi-transparent variations of existing colors without
manually copying RGB components.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `alpha` | `number` | The new alpha value (0-255). Values outside this range will be clamped. |

## Returns

[`TextmodeColor`](../../TextmodeColor.md)

A new TextmodeColor instance with the updated alpha.

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="withAlpha" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7IHBpeGVsRGVuc2l0eTogMSwgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB9KTsKCmNvbnN0IGxheWVycyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKCkgPT4gdC5sYXllcnMuYWRkKCkpOwpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDApOwp9KTsKCmxheWVycy5mb3JFYWNoKChsYXllciwgaSkgPT4gewoJbGF5ZXIuZHJhdygoKSA9PiB7CgkJdC5jbGVhcigpOwoKCQljb25zdCBiYXNlID0gdC5jb2xvcig1MCwgMTUwLCAyNTUpOwoJCWNvbnN0IG9wYWNpdHkgPSAxMDAgKyBpICogMzA7CgoJCXQucHVzaCgpOwoJCXQudHJhbnNsYXRlKChpIC0gMikgKiA1LCBNYXRoLnNpbih0LmZyYW1lQ291bnQgKiAwLjA1ICsgaSkgKiA1KTsKCQl0LmNoYXJDb2xvcihiYXNlLndpdGhBbHBoYShvcGFjaXR5KSk7CgkJdC5jaGFyKFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpKSk7CgkJdC5yZWN0KDEyLCAxMik7CgkJdC5wb3AoKTsKCX0pOwp9KTsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCglkcmF3VGV4dCgnVEVYVE1PREVDT0xPUi5XSVRIQUxQSEEnLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBDTE9ORSBDT0xPUiBXSVRIIE5FVyBBTFBIQScsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnUmV0dXJucyBjb3B5IHdpdGggYWRqdXN0ZWQgb3BhY2l0eS4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdSZW5kZXJpbmcgbGF5ZXJzIEEtRSB3aXRoIGFscGhhLicsIHgsIHkrKywgMTQwLCAxOTAsIDI1NSk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
