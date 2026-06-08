---
layout: doc
editLink: true
title: clamp
description: Clamp color values to a specified range for stability.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-08
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / clamp

# Method: clamp()

```ts
clamp(min?, max?): this;
```

Clamp color values to a specified range for stability.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `min?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Minimum value (default: 0.0) |
| `max?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Maximum value (default: 1.0) |

## Returns

`this`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="clamp" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiA4LAoJcGx1Z2luczogW1N5bnRoUGx1Z2luXSwKfSk7Cgp0LmJwbSgxOCk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CmNvbnN0IGdseXBocyA9ICcgLjotPSsqIyVAJzsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCglkcmF3VGV4dCgnU1lOVEhTT1VSQ0UuQ0xBTVAnLCB4LCB5KyssIDExMCwgMjU1LCAxNzApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgNzAsIDExMCwgMTQwKTsKCWRyYXdUZXh0KCdWQUxVRSBXSU5ET1dJTkcnLCB4LCB5KyssIDEyMCwgMjIwLCAyNTUpOwoJZHJhd1RleHQoJ0NsYW1wIGNhcHMgdGhlIGNvbG9yIHJhbmdlLicsIHgsIHkrKywgMTYwLCAxODAsIDIxMCk7CglkcmF3VGV4dCgnTGV2ZWxzIHJldmVhbCB0aGUgY2xpcHBlZCBiYW5kLicsIHgsIHkrKywgMTYwLCAxODAsIDIxMCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA3MCwgMTEwLCAxNDApOwoJZHJhd1RleHQoJ1NpbmdsZSBjaGFpbjogc291cmNlIC0-IGNsYW1wLicsIHgsIHkrKywgMTUwLCAyNTUsIDE5MCk7Cn0pOwoKdC5sYXllcnMuYmFzZS5zeW50aCgKCXBsYXNtYSg2LjAsIDAuMTIsIDAuMiwgMS40NSkKCQkuYWRkKG9zYygxMiwgMC4wNiwgMS4xKS5rYWxlaWQoNSksIDAuMjgpCgkJLmNvbG9yYW1hKDAuMTIpCgkJLmNsYW1wKDAuMTgsIDAuNzQpCgkJLmxldmVscygwLjE4LCAwLjc0LCAwLjA0LCAxLjAsIDAuODgpCgkJLmNvbnRyYXN0KDEuMjgpCgkJLmNvbG9yKDAuMywgMC43OCwgMS4wKQoJCS5jaGFyTWFwKGdseXBocykKCQkuY2VsbENvbG9yKDAuMDE1LCAwLjAyLCAwLjAzNSkKKTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />
