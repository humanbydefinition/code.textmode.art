---
layout: doc
editLink: true
title: modulateScrollY
description: Modulate Y scroll using another source.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-08
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / modulateScrollY

# Method: modulateScrollY()

```ts
modulateScrollY(
   source, 
   scrollY?, 
   speed?): this;
```

Modulate Y scroll using another source.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Modulation source |
| `scrollY?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Y scroll amount (default: 0.5) |
| `speed?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Scroll speed (default: 0.0) |

## Returns

`this`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="modulateScrollY" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiA4LAoJcGx1Z2luczogW1N5bnRoUGx1Z2luXSwKfSk7Cgp0LmJwbSgxOCk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CmNvbnN0IGdseXBocyA9ICcgLjotPSsqIyVAJzsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCglkcmF3VGV4dCgnU1lOVEhTT1VSQ0UuTU9EU0NST0xMWScsIHgsIHkrKywgMTEwLCAyNTUsIDE3MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA3MCwgMTEwLCAxNDApOwoJZHJhd1RleHQoJ1NPVVJDRSBTQ1JPTExFRCBZJywgeCwgeSsrLCAxMjAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdCcmlnaHRuZXNzIHNoaWZ0cyByb3dzLicsIHgsIHkrKywgMTYwLCAxODAsIDIxMCk7CglkcmF3VGV4dCgnQSB2ZXJ0aWNhbCB0aWRlIGZvbGRzIGxpZ2h0LicsIHgsIHkrKywgMTYwLCAxODAsIDIxMCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA3MCwgMTEwLCAxNDApOwoJZHJhd1RleHQoJ1NlcGFyYXRlIGFuaW1hdGVkIGluayBhbmQgcGFwZXIuJywgeCwgeSsrLCAxNTAsIDI1NSwgMTkwKTsKfSk7Cgpjb25zdCBpbmsgPSBwbGFzbWEoNC4yLCAwLjAyNCwgMC4wLCAxLjEyKS5jb2xvcigwLjQyLCAxLjAsIDAuNTgpLm1vZHVsYXRlUm90YXRlKG5vaXNlKDIuMCwgMC4wMTUpLCAwLjI4LCAwLjA0KTsKY29uc3QgcGFwZXIgPSBtb2lyZSg2LCA3LCAwLjAsIDEuNTcsIDAuMDE4KS5jb2xvcigwLjAyNSwgMC4xMywgMC4wNjUpLnNvZnRsaWdodChub2lzZSgyLjAsIDAuMDE0KSwgMC4xOCk7Cgp0LmxheWVycy5iYXNlLnN5bnRoKAoJcGxhc21hKDQuMiwgMC4wMjIsIDAuMSwgMS4xMikKCQkubW9kdWxhdGVTY3JvbGxZKG9zYyg0LCAwLjAxMikua2FsZWlkKDQpLCBbMC4wMywgMC4xNV0uZmFzdCgwLjEyKS5lYXNlKCdlYXNlSW5PdXRTaW5lJyksIC0wLjAwNSkKCQkuY29sb3IoMC41LCAwLjk1LCAwLjU1KQoJCS5vdmVybGF5KG5vaXNlKDIuMiwgMC4wMTYpLCAwLjIpCgkJLmNvbnRyYXN0KDEuMTIpCgkJLmNoYXJNYXAoZ2x5cGhzKQoJCS5jaGFyQ29sb3IoaW5rKQoJCS5jZWxsQ29sb3IocGFwZXIpCik7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
