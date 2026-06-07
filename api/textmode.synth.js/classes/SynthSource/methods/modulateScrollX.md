---
layout: doc
editLink: true
title: modulateScrollX
description: Modulate X scroll using another source.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-07
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / modulateScrollX

# Method: modulateScrollX()

```ts
modulateScrollX(
   source, 
   scrollX?, 
   speed?): this;
```

Modulate X scroll using another source.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Modulation source |
| `scrollX?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | X scroll amount (default: 0.5) |
| `speed?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Scroll speed (default: 0.0) |

## Returns

`this`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" encoded-files="W3siaW5mbyI6Imh0bWwgaW5kZXguaHRtbCBbaGlkZGVuXSBbcmVhZG9ubHldIiwiY29kZSI6IjwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI-XG4gIDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8-XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8dGl0bGU-bW9kdWxhdGVTY3JvbGxYPC90aXRsZT5cbiAgICA8c3R5bGU-XG4gICAgICBodG1sLFxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgIH1cblxuICAgICAgY2FudmFzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3RleHRtb2RlLmpzQDAuMTYuMC1iZXRhLjEvZGlzdC90ZXh0bW9kZS51bWQuanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3RleHRtb2RlLnN5bnRoLmpzQDEuNi4wL2Rpc3QvdGV4dG1vZGUuc3ludGgudW1kLmpzXCI-PC9zY3JpcHQ-XG4gIDwvaGVhZD5cbiAgPGJvZHk-XG4gICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCIgc3JjPVwic2tldGNoLmpzXCI-PC9zY3JpcHQ-XG4gIDwvYm9keT5cbjwvaHRtbD4ifSx7ImluZm8iOiJqcyBza2V0Y2guanMgW2FjdGl2ZV0iLCJjb2RlIjoiY29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7XG5cdHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcblx0aGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdHBsdWdpbnM6IFtTeW50aFBsdWdpbl0sXG59KTtcblxuY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpO1xuXG5mdW5jdGlvbiBkcmF3RXhhbXBsZUxhYmVsKHRleHQsIGNvbCwgcm93LCBjb2xvciA9ICcjZmZmZmZmJykge1xuXHR0LmNvbG9yKGNvbG9yKTtcblx0dC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpO1xuXHR0LnByaW50KHRleHQsIGNvbCwgcm93KTtcbn1cblxuZnVuY3Rpb24gZHJhd0V4YW1wbGVMYWJlbHMoKSB7XG5cdHQuY2xlYXIoKTtcblx0Y29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7XG5cdGNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7XG5cblx0ZHJhd0V4YW1wbGVMYWJlbCgnU3ludGhTb3VyY2UubW9kdWxhdGVTY3JvbGxYJywgbGVmdCArIDEsIHRvcCArIDEpO1xufVxuXG5sYWJlbExheWVyLmRyYXcoZHJhd0V4YW1wbGVMYWJlbHMpO1xuXG50LmxheWVycy5iYXNlLnN5bnRoKG9zYyg2LCAwLjEsIDEuMikubW9kdWxhdGVTY3JvbGxYKG5vaXNlKDMsIDAuMSksIDAuNSwgMC4xKSk7XG5cbnQud2luZG93UmVzaXplZCgoKSA9PiB7XG5cdHQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xufSk7In1d" />
