---
layout: doc
editLink: true
title: SynthContext
description: Context passed to dynamic parameter functions during rendering.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-06-07
isInterface: true
---

[textmode.synth.js](../index.md) / SynthContext

# Interface: SynthContext

Context passed to dynamic parameter functions during rendering.

## Example

<TextmodeApiSandbox profile="textmode.synth.js" encoded-files="W3siaW5mbyI6Imh0bWwgaW5kZXguaHRtbCBbaGlkZGVuXSBbcmVhZG9ubHldIiwiY29kZSI6IjwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI-XG4gIDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8-XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8dGl0bGU-U3ludGhDb250ZXh0PC90aXRsZT5cbiAgICA8c3R5bGU-XG4gICAgICBodG1sLFxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgIH1cblxuICAgICAgY2FudmFzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3RleHRtb2RlLmpzQDAuMTYuMC1iZXRhLjEvZGlzdC90ZXh0bW9kZS51bWQuanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3RleHRtb2RlLnN5bnRoLmpzQDEuNi4wL2Rpc3QvdGV4dG1vZGUuc3ludGgudW1kLmpzXCI-PC9zY3JpcHQ-XG4gIDwvaGVhZD5cbiAgPGJvZHk-XG4gICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCIgc3JjPVwic2tldGNoLmpzXCI-PC9zY3JpcHQ-XG4gIDwvYm9keT5cbjwvaHRtbD4ifSx7ImluZm8iOiJqcyBza2V0Y2guanMgW2FjdGl2ZV0iLCJjb2RlIjoiY29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7XG4gIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gIHBsdWdpbnM6IFtTeW50aFBsdWdpbl1cbn0pO1xuXG50LmxheWVycy5iYXNlLnN5bnRoKFxuICBub2lzZSgoY3R4KSA9PiA2ICsgTWF0aC5zaW4oY3R4LnRpbWUpICogNClcbiAgICAua2FsZWlkKDUpXG4pO1xuXG50LndpbmRvd1Jlc2l6ZWQoKCkgPT4ge1xuICB0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbn0pOyJ9XQ" />

## Properties

| Property | Description |
| ------ | ------ |
| [time](SynthContext/properties/time.md) | Current time in seconds |
| [frameCount](SynthContext/properties/frameCount.md) | Current frame count |
| [width](SynthContext/properties/width.md) | Grid width in pixels |
| [height](SynthContext/properties/height.md) | Grid height in pixels |
| [cols](SynthContext/properties/cols.md) | Grid columns |
| [rows](SynthContext/properties/rows.md) | Grid rows |
| [bpm](SynthContext/properties/bpm.md) | Current BPM (beats per minute) for array modulation timing |
| [onError](SynthContext/properties/onError.md) | Optional callback for handling dynamic parameter evaluation errors |
