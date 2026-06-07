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

<TextmodeApiSandbox profile="textmode.js" encoded-files="W3siaW5mbyI6Imh0bWwgaW5kZXguaHRtbCBbaGlkZGVuXSBbcmVhZG9ubHldIiwiY29kZSI6IjwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI-XG4gIDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8-XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8dGl0bGU-YmxlbmRNb2RlPC90aXRsZT5cbiAgICA8c3R5bGU-XG4gICAgICBodG1sLFxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgIH1cblxuICAgICAgY2FudmFzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3RleHRtb2RlLmpzQDAuMTYuMC1iZXRhLjEvZGlzdC90ZXh0bW9kZS51bWQuanNcIj48L3NjcmlwdD5cbiAgPC9oZWFkPlxuICA8Ym9keT5cbiAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIiBzcmM9XCJza2V0Y2guanNcIj48L3NjcmlwdD5cbiAgPC9ib2R5PlxuPC9odG1sPiJ9LHsiaW5mbyI6ImpzIHNrZXRjaC5qcyBbYWN0aXZlXSIsImNvZGUiOiJjb25zdCB0ID0gdGV4dG1vZGUuY3JlYXRlKHtcblx0cGl4ZWxEZW5zaXR5OiAxLFxuXHR3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG5cdGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuXHRmb250U2l6ZTogMTYsXG59KTtcblxuY29uc3QgYmxlbmRNb2RlcyA9IFsnYWRkaXRpdmUnLCAnc2NyZWVuJywgJ292ZXJsYXknLCAnZGlmZmVyZW5jZScsICdtdWx0aXBseSddO1xuY29uc3QgY29sb3JzID0gW1xuXHRbMjU1LCA4MCwgMTUwXSxcblx0WzgwLCAxODAsIDI1NV0sXG5cdFsyNTUsIDIwMCwgODBdLFxuXHRbMTUwLCAyNTUsIDEyMF0sXG5cdFsyMDAsIDEyMCwgMjU1XSxcbl07XG5cbmNvbnN0IGxheWVycyA9IGJsZW5kTW9kZXMubWFwKChtb2RlKSA9PiB0LmxheWVycy5hZGQoeyBibGVuZE1vZGU6IG1vZGUsIG9wYWNpdHk6IDAuOSB9KSk7XG5jb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7XG5cbmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHJnYiA9IFsyNTUsIDI1NSwgMjU1XSkge1xuXHR0LnB1c2goKTtcblx0dC50cmFuc2xhdGUoeCwgeSk7XG5cdHQuY2hhckNvbG9yKHJnYlswXSwgcmdiWzFdLCByZ2JbMl0pO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcblx0XHR0LmNoYXIodGV4dFtpXSk7XG5cdFx0dC5wb2ludCgpO1xuXHRcdHQudHJhbnNsYXRlKDEsIDApO1xuXHR9XG5cdHQucG9wKCk7XG59XG5cbmZ1bmN0aW9uIGRyYXdDZW50ZXJlZFRleHQodGV4dCwgeSwgcmdiID0gWzI1NSwgMjU1LCAyNTVdKSB7XG5cdGRyYXdUZXh0KHRleHQsIC1NYXRoLmZsb29yKHRleHQubGVuZ3RoIC8gMiksIHksIHJnYik7XG59XG5cbnQuZHJhdygoKSA9PiB7XG5cdGNvbnN0IHRpbWUgPSB0LmZyYW1lQ291bnQgKiAwLjAyO1xuXHR0LmJhY2tncm91bmQoMTAsIDE1LCAyNSk7XG5cblx0Y29uc3QgeyBjb2xzLCByb3dzIH0gPSB0LmdyaWQ7XG5cblx0dC5jaGFyKCcrJyk7XG5cdHQuY2hhckNvbG9yKDQwLCA1MCwgODApO1xuXHR0LnJlY3QoY29scywgcm93cyk7XG5cblx0bGF5ZXJzLmZvckVhY2goKGxheWVyLCBpKSA9PiB7XG5cdFx0bGF5ZXIuZHJhdygoKSA9PiB7XG5cdFx0XHR0LmNsZWFyKCk7XG5cdFx0XHR0LnB1c2goKTtcblxuXHRcdFx0Y29uc3QgYW5nbGUgPSAoaSAvIGxheWVycy5sZW5ndGgpICogTWF0aC5QSSAqIDIgKyB0aW1lO1xuXHRcdFx0Y29uc3QgcmFkaXVzID0gOCArIE1hdGguc2luKHRpbWUgKiAyKSAqIDI7XG5cdFx0XHR0LnRyYW5zbGF0ZShNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cyk7XG5cblx0XHRcdHQuY2hhckNvbG9yKC4uLmNvbG9yc1tpXSk7XG5cdFx0XHR0LmNoYXIoJ0AnKTtcblx0XHRcdHQucmVjdCgxNCwgOCk7XG5cblx0XHRcdGRyYXdDZW50ZXJlZFRleHQoYmxlbmRNb2Rlc1tpXSwgMCwgWzI1NSwgMjU1LCAyNTVdKTtcblxuXHRcdFx0dC5wb3AoKTtcblx0XHR9KTtcblx0fSk7XG59KTtcblxubGFiZWxMYXllci5kcmF3KCgpID0-IHtcblx0dC5jbGVhcigpO1xuXHRjb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTtcblx0Y29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTtcblx0bGV0IHkgPSB0b3AgKyAzO1xuXHRjb25zdCB4ID0gbGVmdCArIDM7XG5cdGNvbnN0IGFjdGl2ZSA9IGJsZW5kTW9kZXNbTWF0aC5mbG9vcih0LmZyYW1lQ291bnQgLyA4MCkgJSBibGVuZE1vZGVzLmxlbmd0aF07XG5cblx0ZHJhd1RleHQoJ1RFWFRNT0RFTEFZRVIuQkxFTkRNT0RFJywgeCwgeSsrLCBbMTAwLCAyNTUsIDE0MF0pO1xuXHRkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCBbODAsIDEwMCwgMTUwXSk7XG5cdGRyYXdUZXh0KCdDT05DRVBUOiBQRVItTEFZRVIgQkxFTkRJTkcnLCB4LCB5KyssIFsxMDAsIDIyMCwgMjU1XSk7XG5cdGRyYXdUZXh0KCdFYWNoIGxheWVyIGNvbXBvc2l0ZXMgZGlmZmVyZW50bHkuJywgeCwgeSsrLCBbMTQwLCAxNjAsIDE5MF0pO1xuXHRkcmF3VGV4dCgnT3BhY2l0eSBpcyBzZXQgcGVyIGxheWVyIHRvby4nLCB4LCB5KyssIFsxNDAsIDE2MCwgMTkwXSk7XG5cdGRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIFs4MCwgMTAwLCAxNTBdKTtcblx0ZHJhd1RleHQoYE1PREVTOiAke2JsZW5kTW9kZXMubGVuZ3RofWAsIHgsIHkrKywgWzE0MCwgMjU1LCAxODBdKTtcblx0ZHJhd1RleHQoYFdBVENIOiAke2FjdGl2ZX1gLCB4LCB5KyssIFsxMjAsIDIwMCwgMjU1XSk7XG59KTtcblxudC53aW5kb3dSZXNpemVkKCgpID0-IHtcblx0dC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG59KTsifV0" />
