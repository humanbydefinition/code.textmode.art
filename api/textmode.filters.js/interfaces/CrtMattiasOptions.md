---
layout: doc
editLink: true
title: CrtMattiasOptions
description: Configuration options for the 'crtMattias' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-06-09
isInterface: true
---

[textmode.filters.js](../index.md) / CrtMattiasOptions

# Interface: CrtMattiasOptions

Configuration options for the `'crtMattias'` filter.

CRT monitor emulation effect with screen curvature, animated scanlines,
blur, vignette, and film grain noise. Based on Mattias Gustavsson's
classic CRT shader.

## Example

<TextmodeApiSandbox profile="textmode.filters.js" language="javascript" title="CrtMattiasOptions" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAzMiwKCXBsdWdpbnM6IFtGaWx0ZXJzUGx1Z2luXSwKfSk7CmNvbnN0IGxhYmVsTGF5ZXIgPSB0LmxheWVycy5hZGQoKTsKCmxldCB2aWRlbzsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKdC5zZXR1cChhc3luYyAoKSA9PiB7Cgl2aWRlbyA9IGF3YWl0IHQubG9hZFZpZGVvKCdodHRwczovL2ludGVyYWN0aXZlLWV4YW1wbGVzLm1kbi5tb3ppbGxhLm5ldC9tZWRpYS9jYzAtdmlkZW9zL2Zsb3dlci5tcDQnKTsKCXZpZGVvLnBsYXkoKTsKCXZpZGVvLmxvb3AoKTsKCXZpZGVvLmNoYXJhY3RlcnMoJyAuOi09KyojJUAnKTsKfSk7CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMiksCgkJdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMywKCQl4ID0gbGVmdCArIDM7CgoJY29uc3QgY3VydiA9ICgwLjQgKyAwLjMgKiBNYXRoLnNpbih0LnNlY3MgKiAxLjApKS50b0ZpeGVkKDIpOwoKCWRyYXdUZXh0KCdGSUxURVJTUExVR0lOLkNSVE1BVFRJQVMnLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBDQVRIT0RFIFJBWSBUVUJFIEVNVUxBVE9SJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdBcHBsaWVzIHNjcmVlbiBjdXJ2YXR1cmUgYW5kIHNjYW5saW5lcy4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDdXJ2YXR1cmU6ICcgKyBjdXJ2LCB4LCB5KyssIDE0MCwgMjU1LCAxODApOwoJZHJhd1RleHQoJ1NjYW4gU3BlZWQ6IDEuNScsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7Cn0pOwoKdC5kcmF3KCgpID0-IHsKCWlmICghdmlkZW8pIHJldHVybjsKCWNvbnN0IGN1cnYgPSAwLjQgKyAwLjMgKiBNYXRoLnNpbih0LnNlY3MgKiAxLjApOwoKCXQubGF5ZXJzLmJhc2UuZmlsdGVyKCdjcnRNYXR0aWFzJywgewoJCWN1cnZhdHVyZTogY3VydiwKCQlzY2FuU3BlZWQ6IDEuNSwKCQl0aW1lOiB0LnNlY3MsCgl9KTsKCgl0LmJhY2tncm91bmQoMCk7Cgl0LmltYWdlKHZpZGVvKTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />

## See

[Original shader by Mattias Gustavsson](https://github.com/libretro/glsl-shaders/blob/master/crt/shaders/crt-mattias.glsl)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-curvature"></a> `curvature` | `number` | Amount of screen curvature/barrel distortion. - `0.0` = flat screen - `0.5` = moderate curvature (default) - `1.0` = maximum curvature **Default** `0.5` |
| <a id="property-scanspeed"></a> `scanSpeed` | `number` | Speed of the scrolling scanline effect. Higher values make the scanline crawl faster. **Default** `1.0` |
| <a id="property-time"></a> `time` | `number` | Animation time parameter. Increment this value each frame to animate the effect. Typically use elapsed time in seconds or frame count. **Default** `0.0` |
