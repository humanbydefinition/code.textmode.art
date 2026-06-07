---
layout: doc
editLink: true
title: moire
description: Generate moire interference patterns.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-07
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / moire

# Method: moire()

```ts
moire(
   freqA?, 
   freqB?, 
   angleA?, 
   angleB?, 
   speed?, 
   phase?): this;
```

Generate moire interference patterns.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `freqA?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Frequency of first grating (default: 20.0) |
| `freqB?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Frequency of second grating (default: 21.0) |
| `angleA?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Angle of first grating in radians (default: 0.0) |
| `angleB?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Angle of second grating in radians (default: 1.5708) |
| `speed?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Animation speed (default: 0.1) |
| `phase?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Phase offset (default: 0.0) |

## Returns

`this`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" encoded-files="W3siaW5mbyI6Imh0bWwgaW5kZXguaHRtbCBbaGlkZGVuXSBbcmVhZG9ubHldIiwiY29kZSI6IjwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI-XG4gIDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8-XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8dGl0bGU-bW9pcmU8L3RpdGxlPlxuICAgIDxzdHlsZT5cbiAgICAgIGh0bWwsXG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgfVxuXG4gICAgICBjYW52YXMge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vdGV4dG1vZGUuanNAMC4xNi4wLWJldGEuMS9kaXN0L3RleHRtb2RlLnVtZC5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vdGV4dG1vZGUuc3ludGguanNAMS42LjAvZGlzdC90ZXh0bW9kZS5zeW50aC51bWQuanNcIj48L3NjcmlwdD5cbiAgPC9oZWFkPlxuICA8Ym9keT5cbiAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIiBzcmM9XCJza2V0Y2guanNcIj48L3NjcmlwdD5cbiAgPC9ib2R5PlxuPC9odG1sPiJ9LHsiaW5mbyI6ImpzIHNrZXRjaC5qcyBbYWN0aXZlXSIsImNvZGUiOiJjb25zdCB0ID0gdGV4dG1vZGUuY3JlYXRlKHtcblx0d2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuXHRoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcblx0cGx1Z2luczogW1N5bnRoUGx1Z2luXSxcbn0pO1xuXG5jb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7XG5cbmZ1bmN0aW9uIGRyYXdFeGFtcGxlTGFiZWwodGV4dCwgY29sLCByb3csIGNvbG9yID0gJyNmZmZmZmYnKSB7XG5cdHQuY29sb3IoY29sb3IpO1xuXHR0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7XG5cdHQucHJpbnQodGV4dCwgY29sLCByb3cpO1xufVxuXG5mdW5jdGlvbiBkcmF3RXhhbXBsZUxhYmVscygpIHtcblx0dC5jbGVhcigpO1xuXHRjb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTtcblx0Y29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTtcblxuXHRkcmF3RXhhbXBsZUxhYmVsKCdTeW50aFNvdXJjZS5tb2lyZScsIGxlZnQgKyAxLCB0b3AgKyAxKTtcbn1cblxubGFiZWxMYXllci5kcmF3KGRyYXdFeGFtcGxlTGFiZWxzKTtcblxudC5sYXllcnMuYmFzZS5zeW50aChtb2lyZSgxNCwgMTUsIDAuMiwgMS4yLCAwLjIsIDAuMSkuY29sb3IoMC43LCAwLjUsIDEuMSkpO1xuXG50LndpbmRvd1Jlc2l6ZWQoKCkgPT4ge1xuXHR0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbn0pOyJ9XQ" />
