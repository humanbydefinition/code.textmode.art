---
layout: doc
editLink: true
title: noise
description: Generate Perlin noise patterns.
category: Functions
api: true
kind: Function
ecosystem: textmode.js
lastModified: 2026-06-07
---

[textmode.synth.js](../index.md) / noise

# Function: noise()

```ts
function noise(scale?, offset?): SynthSource;
```

Generate Perlin noise patterns.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `scale?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Scale of the noise pattern (default: 10.0) |
| `offset?` | `number` \| `number`[] \| ((`ctx`) => `number`) | Offset in noise space (default: 0.1) |

## Returns

[`SynthSource`](../classes/SynthSource.md)

## Example

<TextmodeApiSandbox profile="textmode.synth.js" encoded-files="W3siaW5mbyI6Imh0bWwgaW5kZXguaHRtbCBbaGlkZGVuXSBbcmVhZG9ubHldIiwiY29kZSI6IjwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI-XG4gIDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8-XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8dGl0bGU-bm9pc2U8L3RpdGxlPlxuICAgIDxzdHlsZT5cbiAgICAgIGh0bWwsXG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgfVxuXG4gICAgICBjYW52YXMge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vdGV4dG1vZGUuanNAMC4xNi4wLWJldGEuMS9kaXN0L3RleHRtb2RlLnVtZC5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vdGV4dG1vZGUuc3ludGguanNAMS42LjAvZGlzdC90ZXh0bW9kZS5zeW50aC51bWQuanNcIj48L3NjcmlwdD5cbiAgPC9oZWFkPlxuICA8Ym9keT5cbiAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIiBzcmM9XCJza2V0Y2guanNcIj48L3NjcmlwdD5cbiAgPC9ib2R5PlxuPC9odG1sPiJ9LHsiaW5mbyI6ImpzIHNrZXRjaC5qcyBbYWN0aXZlXSIsImNvZGUiOiJjb25zdCB0ID0gdGV4dG1vZGUuY3JlYXRlKHtcblx0d2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuXHRoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcblx0cGx1Z2luczogW1N5bnRoUGx1Z2luXSxcbn0pO1xuXG5jb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7XG5cbmZ1bmN0aW9uIGRyYXdFeGFtcGxlTGFiZWwodGV4dCwgY29sLCByb3csIGNvbG9yID0gJyNmZmZmZmYnKSB7XG5cdHQuY29sb3IoY29sb3IpO1xuXHR0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7XG5cdHQucHJpbnQodGV4dCwgY29sLCByb3cpO1xufVxuXG5mdW5jdGlvbiBkcmF3RXhhbXBsZUxhYmVscygpIHtcblx0dC5jbGVhcigpO1xuXHRjb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTtcblx0Y29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTtcblxuXHRkcmF3RXhhbXBsZUxhYmVsKCdTeW50aFNvdXJjZS5ub2lzZScsIGxlZnQgKyAxLCB0b3AgKyAxKTtcbn1cblxubGFiZWxMYXllci5kcmF3KGRyYXdFeGFtcGxlTGFiZWxzKTtcblxudC5sYXllcnMuYmFzZS5zeW50aChub2lzZSgxMCwgMC4xKS5jb2xvcigwLjIsIDAuNiwgMS4wKSk7XG5cbnQud2luZG93UmVzaXplZCgoKSA9PiB7XG5cdHQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xufSk7In1d" />
