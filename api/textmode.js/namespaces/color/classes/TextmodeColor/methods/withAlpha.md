---
layout: doc
editLink: false
title: withAlpha
description: Create a copy of this color with a different alpha value.
category: Methods
api: true
owner: TextmodeColor
namespace: color
kind: Method
lastModified: 2026-08-03
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

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="withAlpha" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7IHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgfSk7Cgpjb25zdCBsYXllcnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA1IH0sICgpID0-IHQubGF5ZXJzLmFkZCgpKTsKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKdC5kcmF3KCgpID0-IHsKCXQuYmFja2dyb3VuZCgwKTsKfSk7CgpsYXllcnMuZm9yRWFjaCgobGF5ZXIsIGkpID0-IHsKCWxheWVyLmRyYXcoKCkgPT4gewoJCXQuY2xlYXIoKTsKCgkJY29uc3QgYmFzZSA9IHQuY29sb3IoNTAsIDE1MCwgMjU1KTsKCQljb25zdCBvcGFjaXR5ID0gMTAwICsgaSAqIDMwOwoKCQl0LnB1c2goKTsKCQl0LnRyYW5zbGF0ZSgoaSAtIDIpICogNSwgTWF0aC5zaW4odC5mcmFtZUNvdW50ICogMC4wNSArIGkpICogNSk7CgkJdC5jaGFyQ29sb3IoYmFzZS53aXRoQWxwaGEob3BhY2l0eSkpOwoJCXQuY2VsbENvbG9yKDAsIDAsIDAsIDApOwoJCXQuY2hhcihTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgaSkpOwoJCXQucmVjdCgxMiwgMTIpOwoJCXQucG9wKCk7Cgl9KTsKfSk7CgpmdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7Cgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKHIsIGcsIGIpOwoJdC5wcmludCh0ZXh0LCB4LCB5KTsKCXQucG9wKCk7Cn0KCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CgoJZHJhd1RleHQoJ1RFWFRNT0RFQ09MT1IuV0lUSEFMUEhBJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogQ0xPTkUgQ09MT1IgV0lUSCBORVcgQUxQSEEnLCB4LCB5KyssIDEwMCwgMjIwLCAyNTUpOwoJZHJhd1RleHQoJ1JldHVybnMgY29weSB3aXRoIGFkanVzdGVkIG9wYWNpdHkuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnUmVuZGVyaW5nIGxheWVycyBBLUUgd2l0aCBhbHBoYS4nLCB4LCB5KyssIDE0MCwgMTkwLCAyNTUpOwp9KTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />

