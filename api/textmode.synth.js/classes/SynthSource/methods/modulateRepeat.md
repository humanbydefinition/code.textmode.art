---
layout: doc
editLink: true
title: modulateRepeat
description: Modulate repeat pattern with another source.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-08
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / modulateRepeat

# Method: modulateRepeat()

```ts
modulateRepeat(
   source, 
   repeatX?, 
   repeatY?, 
   offsetX?, 
   offsetY?): this;
```

Modulate repeat pattern with another source.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Modulation source |
| `repeatX?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | X repetitions (default: 3.0) |
| `repeatY?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Y repetitions (default: 3.0) |
| `offsetX?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | X offset (default: 0.5) |
| `offsetY?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Y offset (default: 0.5) |

## Returns

`this`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="modulateRepeat" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiA4LAoJcGx1Z2luczogW1N5bnRoUGx1Z2luXSwKfSk7Cgp0LmJwbSgxOCk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CmNvbnN0IGdseXBocyA9ICcgLjotPSsqIyVAJzsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCglkcmF3VGV4dCgnU1lOVEhTT1VSQ0UuTU9EUkVQRUFUJywgeCwgeSsrLCAxMTAsIDI1NSwgMTcwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDcwLCAxMTAsIDE0MCk7CglkcmF3VGV4dCgnV0FSUEVEIFRJTElORycsIHgsIHkrKywgMTIwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnQSBzb3VyY2Ugb2Zmc2V0cyByZXBlYXRzLicsIHgsIHkrKywgMTYwLCAxODAsIDIxMCk7CglkcmF3VGV4dCgnVGlsZXMgc3dpbSBpbiBmb3JtYXRpb24uJywgeCwgeSsrLCAxNjAsIDE4MCwgMjEwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDcwLCAxMTAsIDE0MCk7CglkcmF3VGV4dCgnU2VwYXJhdGUgYW5pbWF0ZWQgaW5rIGFuZCBwYXBlci4nLCB4LCB5KyssIDE1MCwgMjU1LCAxOTApOwp9KTsKCmNvbnN0IGluayA9IHBsYXNtYSg0LjIsIDAuMDI0LCAwLjAsIDEuMTIpLmNvbG9yKDAuNDIsIDEuMCwgMC41OCkubW9kdWxhdGVSb3RhdGUobm9pc2UoMi4wLCAwLjAxNSksIDAuMjgsIDAuMDQpOwpjb25zdCBwYXBlciA9IG1vaXJlKDYsIDcsIDAuMCwgMS41NywgMC4wMTgpLmNvbG9yKDAuMDI1LCAwLjEzLCAwLjA2NSkuc29mdGxpZ2h0KG5vaXNlKDIuMCwgMC4wMTQpLCAwLjE4KTsKCnQubGF5ZXJzLmJhc2Uuc3ludGgoCglvc2MoOCwgMC4wMTgsIDEuMCkKCQkubW9kdWxhdGVSZXBlYXQoCgkJCW5vaXNlKDIuNSwgMC4wMTgpLAoJCQlbMiwgNF0uZmFzdCgwLjEpLmVhc2UoJ2Vhc2VJbk91dFNpbmUnKSwKCQkJWzMsIDVdLmZhc3QoMC4xMikuZWFzZSgnZWFzZUluT3V0U2luZScpLAoJCQkwLjE4LAoJCQkwLjEyCgkJKQoJCS5jb2xvcigwLjM1LCAwLjg1LCAxLjApCgkJLnNvZnRsaWdodChwbGFzbWEoMywgMC4wMTgpLCAwLjMyKQoJCS5jb250cmFzdCgxLjE4KQoJCS5jaGFyTWFwKGdseXBocykKCQkuY2hhckNvbG9yKGluaykKCQkuY2VsbENvbG9yKHBhcGVyKQopOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
