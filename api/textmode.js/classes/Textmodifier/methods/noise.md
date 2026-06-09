---
layout: doc
editLink: true
title: noise
description: Return deterministic multi-octave noise for a coordinate.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-09
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / noise

# Method: noise()

```ts
noise(
   x, 
   y?, 
   z?): number;
```

Return deterministic multi-octave noise for a coordinate.

Similar input coordinates produce similar values, making `noise()` useful
for organic motion, terrain, contours, and flow-field sketches.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x` | `number` | X coordinate in noise space. |
| `y?` | `number` | Y coordinate in noise space. |
| `z?` | `number` | Z coordinate in noise space. |

## Returns

`number`

Noise value in the range `[0, 1]`.

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="noise" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKCXNlZWQ6ICdub2lzZS1maWVsZCcsCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwpjb25zdCByYW1wID0gJyAuOi09KyojJUAnOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDMsIDgsIDE4KTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWNvbnN0IHRpbWUgPSB0LmZyYW1lQ291bnQgKiAwLjAxODsKCglmb3IgKGxldCB5ID0gMDsgeSA8IHQuZ3JpZC5yb3dzOyB5ICs9IDEpIHsKCQlmb3IgKGxldCB4ID0gMDsgeCA8IHQuZ3JpZC5jb2xzOyB4ICs9IDEpIHsKCQkJY29uc3QgdmFsdWUgPSB0Lm5vaXNlKHggKiAwLjA4LCB5ICogMC4wOCwgdGltZSk7CgkJCWNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcih2YWx1ZSAqIChyYW1wLmxlbmd0aCAtIDEpKTsKCQkJdC5wdXNoKCk7CgkJCXQudHJhbnNsYXRlKGxlZnQgKyB4LCB0b3AgKyB5KTsKCQkJdC5jaGFyKHJhbXBbaW5kZXhdKTsKCQkJdC5jaGFyQ29sb3IoNjAgKyB2YWx1ZSAqIDE4MCwgMTUwICsgdmFsdWUgKiA5MCwgMjU1KTsKCQkJdC5wb2ludCgpOwoJCQl0LnBvcCgpOwoJCX0KCX0KfSk7CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KCdURVhUTU9ESUZJRVIuTk9JU0UnLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBPUkdBTklDIEZJRUxEJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdOZWFyYnkgaW5wdXRzIHJldHVybiBjbG9zZSB2YWx1ZXMuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCdaIGFjdHMgbGlrZSBhIHNtb290aCB0aW1lIGF4aXMuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
