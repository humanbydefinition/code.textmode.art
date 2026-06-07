---
layout: doc
editLink: true
title: scrollX
description: Scroll coordinates in X direction.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-07
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / scrollX

# Method: scrollX()

```ts
scrollX(scrollX?, speed?): this;
```

Scroll coordinates in X direction.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `scrollX?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | X scroll amount (default: 0.5) |
| `speed?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Scroll speed (default: 0.0) |

## Returns

`this`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" encoded-files="W3siaW5mbyI6Imh0bWwgaW5kZXguaHRtbCBbaGlkZGVuXSBbcmVhZG9ubHldIiwiY29kZSI6IjwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI-XG4gIDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8-XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8dGl0bGU-c2Nyb2xsWDwvdGl0bGU-XG4gICAgPHN0eWxlPlxuICAgICAgaHRtbCxcbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICB9XG5cbiAgICAgIGNhbnZhcyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIDwvc3R5bGU-XG4gICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS90ZXh0bW9kZS5qc0AwLjE2LjAtYmV0YS4xL2Rpc3QvdGV4dG1vZGUudW1kLmpzXCI-PC9zY3JpcHQ-XG4gICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS90ZXh0bW9kZS5zeW50aC5qc0AxLjYuMC9kaXN0L3RleHRtb2RlLnN5bnRoLnVtZC5qc1wiPjwvc2NyaXB0PlxuICA8L2hlYWQ-XG4gIDxib2R5PlxuICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cInNrZXRjaC5qc1wiPjwvc2NyaXB0PlxuICA8L2JvZHk-XG48L2h0bWw-In0seyJpbmZvIjoianMgc2tldGNoLmpzIFthY3RpdmVdIiwiY29kZSI6ImNvbnN0IHQgPSB0ZXh0bW9kZS5jcmVhdGUoe1xuXHR3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG5cdGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuXHRwbHVnaW5zOiBbU3ludGhQbHVnaW5dLFxufSk7XG5cbmNvbnN0IGxhYmVsTGF5ZXIgPSB0LmxheWVycy5hZGQoKTtcblxuZnVuY3Rpb24gZHJhd0V4YW1wbGVMYWJlbCh0ZXh0LCBjb2wsIHJvdywgY29sb3IgPSAnI2ZmZmZmZicpIHtcblx0dC5jb2xvcihjb2xvcik7XG5cdHQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTtcblx0dC5wcmludCh0ZXh0LCBjb2wsIHJvdyk7XG59XG5cbmZ1bmN0aW9uIGRyYXdFeGFtcGxlTGFiZWxzKCkge1xuXHR0LmNsZWFyKCk7XG5cdGNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpO1xuXHRjb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpO1xuXG5cdGRyYXdFeGFtcGxlTGFiZWwoJ1N5bnRoU291cmNlLnNjcm9sbFgnLCBsZWZ0ICsgMSwgdG9wICsgMSk7XG59XG5cbmxhYmVsTGF5ZXIuZHJhdyhkcmF3RXhhbXBsZUxhYmVscyk7XG5cbnQubGF5ZXJzLmJhc2Uuc3ludGgob3NjKDgsIDAuMSwgMS4yKS5zY3JvbGxYKDAuMywgMC4xKSk7XG5cbnQud2luZG93UmVzaXplZCgoKSA9PiB7XG5cdHQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xufSk7In1d" />
