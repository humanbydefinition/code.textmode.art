---
layout: doc
editLink: true
title: blendMode
description: Set or get this layer's blend mode.
category: Methods
api: true
owner: TextmodeLayer
namespace: layering
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../../../index.md) / [layering](../../../index.md) / [TextmodeLayer](../../TextmodeLayer.md) / blendMode

# Method: blendMode()

```ts
blendMode(mode?): 
  | void
  | "normal"
  | "darken"
  | "difference"
  | "exclusion"
  | "lighten"
  | "multiply"
  | "overlay"
  | "screen"
  | "additive"
  | "subtract"
  | "softLight"
  | "hardLight"
  | "colorDodge"
  | "colorBurn";
```

Set or get this layer's blend mode.

Available modes are listed in [TEXTMODE\_LAYER\_BLEND\_MODES](../../../variables/TEXTMODE_LAYER_BLEND_MODES.md).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mode?` | \| `"normal"` \| `"darken"` \| `"difference"` \| `"exclusion"` \| `"lighten"` \| `"multiply"` \| `"overlay"` \| `"screen"` \| `"additive"` \| `"subtract"` \| `"softLight"` \| `"hardLight"` \| `"colorDodge"` \| `"colorBurn"` | Blend mode to apply. |

## Returns

  \| `void`
  \| `"normal"`
  \| `"darken"`
  \| `"difference"`
  \| `"exclusion"`
  \| `"lighten"`
  \| `"multiply"`
  \| `"overlay"`
  \| `"screen"`
  \| `"additive"`
  \| `"subtract"`
  \| `"softLight"`
  \| `"hardLight"`
  \| `"colorDodge"`
  \| `"colorBurn"`

Current blend mode when called without arguments.

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="blendMode" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBibGVuZE1vZGVzID0gWydhZGRpdGl2ZScsICdzY3JlZW4nLCAnb3ZlcmxheScsICdkaWZmZXJlbmNlJywgJ211bHRpcGx5J107CmNvbnN0IGNvbG9ycyA9IFsKCVsyNTUsIDgwLCAxNTBdLAoJWzgwLCAxODAsIDI1NV0sCglbMjU1LCAyMDAsIDgwXSwKCVsxNTAsIDI1NSwgMTIwXSwKCVsyMDAsIDEyMCwgMjU1XSwKXTsKCmNvbnN0IGxheWVycyA9IGJsZW5kTW9kZXMubWFwKChtb2RlKSA9PiB0LmxheWVycy5hZGQoeyBibGVuZE1vZGU6IG1vZGUsIG9wYWNpdHk6IDAuOSB9KSk7CmNvbnN0IGxhYmVsTGF5ZXIgPSB0LmxheWVycy5hZGQoKTsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHJnYiA9IFsyNTUsIDI1NSwgMjU1XSkgewoJdC5wdXNoKCk7Cgl0LnRyYW5zbGF0ZSh4LCB5KTsKCXQuY2hhckNvbG9yKHJnYlswXSwgcmdiWzFdLCByZ2JbMl0pOwoJZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7CgkJdC5jaGFyKHRleHRbaV0pOwoJCXQucG9pbnQoKTsKCQl0LnRyYW5zbGF0ZSgxLCAwKTsKCX0KCXQucG9wKCk7Cn0KCmZ1bmN0aW9uIGRyYXdDZW50ZXJlZFRleHQodGV4dCwgeSwgcmdiID0gWzI1NSwgMjU1LCAyNTVdKSB7CglkcmF3VGV4dCh0ZXh0LCAtTWF0aC5mbG9vcih0ZXh0Lmxlbmd0aCAvIDIpLCB5LCByZ2IpOwp9Cgp0LmRyYXcoKCkgPT4gewoJY29uc3QgdGltZSA9IHQuZnJhbWVDb3VudCAqIDAuMDI7Cgl0LmJhY2tncm91bmQoMTAsIDE1LCAyNSk7CgoJY29uc3QgeyBjb2xzLCByb3dzIH0gPSB0LmdyaWQ7CgoJdC5jaGFyKCcrJyk7Cgl0LmNoYXJDb2xvcig0MCwgNTAsIDgwKTsKCXQucmVjdChjb2xzLCByb3dzKTsKCglsYXllcnMuZm9yRWFjaCgobGF5ZXIsIGkpID0-IHsKCQlsYXllci5kcmF3KCgpID0-IHsKCQkJdC5jbGVhcigpOwoJCQl0LnB1c2goKTsKCgkJCWNvbnN0IGFuZ2xlID0gKGkgLyBsYXllcnMubGVuZ3RoKSAqIE1hdGguUEkgKiAyICsgdGltZTsKCQkJY29uc3QgcmFkaXVzID0gOCArIE1hdGguc2luKHRpbWUgKiAyKSAqIDI7CgkJCXQudHJhbnNsYXRlKE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzKTsKCgkJCXQuY2hhckNvbG9yKC4uLmNvbG9yc1tpXSk7CgkJCXQuY2hhcignQCcpOwoJCQl0LnJlY3QoMTQsIDgpOwoKCQkJZHJhd0NlbnRlcmVkVGV4dChibGVuZE1vZGVzW2ldLCAwLCBbMjU1LCAyNTUsIDI1NV0pOwoKCQkJdC5wb3AoKTsKCQl9KTsKCX0pOwp9KTsKCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7Cgljb25zdCBhY3RpdmUgPSBibGVuZE1vZGVzW01hdGguZmxvb3IodC5mcmFtZUNvdW50IC8gODApICUgYmxlbmRNb2Rlcy5sZW5ndGhdOwoKCWRyYXdUZXh0KCdURVhUTU9ERUxBWUVSLkJMRU5ETU9ERScsIHgsIHkrKywgWzEwMCwgMjU1LCAxNDBdKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIFs4MCwgMTAwLCAxNTBdKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBQRVItTEFZRVIgQkxFTkRJTkcnLCB4LCB5KyssIFsxMDAsIDIyMCwgMjU1XSk7CglkcmF3VGV4dCgnRWFjaCBsYXllciBjb21wb3NpdGVzIGRpZmZlcmVudGx5LicsIHgsIHkrKywgWzE0MCwgMTYwLCAxOTBdKTsKCWRyYXdUZXh0KCdPcGFjaXR5IGlzIHNldCBwZXIgbGF5ZXIgdG9vLicsIHgsIHkrKywgWzE0MCwgMTYwLCAxOTBdKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIFs4MCwgMTAwLCAxNTBdKTsKCWRyYXdUZXh0KGBNT0RFUzogJHtibGVuZE1vZGVzLmxlbmd0aH1gLCB4LCB5KyssIFsxNDAsIDI1NSwgMTgwXSk7CglkcmF3VGV4dChgV0FUQ0g6ICR7YWN0aXZlfWAsIHgsIHkrKywgWzEyMCwgMjAwLCAyNTVdKTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
