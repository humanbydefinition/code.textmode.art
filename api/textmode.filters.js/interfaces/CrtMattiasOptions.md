---
layout: doc
editLink: true
title: CrtMattiasOptions
description: Configuration options for the 'crtMattias' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-05-15
isInterface: true
---

[textmode.filters.js](../index.md) / CrtMattiasOptions

# Interface: CrtMattiasOptions

Configuration options for the `'crtMattias'` filter.

CRT monitor emulation effect with screen curvature, animated scanlines,
blur, vignette, and film grain noise. Based on Mattias Gustavsson's
classic CRT shader.

## Example

<TextmodeApiSandbox profile="textmode.filters.js" language="javascript" title="CrtMattiasOptions" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CiAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLAogIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LAogIHBsdWdpbnM6IFtGaWx0ZXJzUGx1Z2luXSwKfSk7CgpsZXQgdmlkZW87Cgp0LnNldHVwKGFzeW5jICgpID0-IHsKICB2aWRlbyA9IGF3YWl0IHQubG9hZFZpZGVvKCdodHRwczovL2ludGVyYWN0aXZlLWV4YW1wbGVzLm1kbi5tb3ppbGxhLm5ldC9tZWRpYS9jYzAtdmlkZW9zL2Zsb3dlci5tcDQnKTsKICB2aWRlby5wbGF5KCk7CiAgdmlkZW8ubG9vcCgpOwogIHZpZGVvLmNoYXJhY3RlcnMoJyAuOi09KyojJUAnKTsKfSk7Cgp0LmRyYXcoKCkgPT4gewogIHQuYmFja2dyb3VuZCgwKTsKICBpZiAodmlkZW8pIHsKICAgIHQuaW1hZ2UodmlkZW8sIHQuZ3JpZC5jb2xzLCB0LmdyaWQucm93cyk7CiAgfQoKICBjb25zdCB3b2JibGUgPSBNYXRoLnNpbih0LnNlY3MgKiAyKTsKICB0LmxheWVycy5iYXNlLmZpbHRlcignY3J0TWF0dGlhcycsIHsKICAgIGN1cnZhdHVyZTogMC40NSArIHdvYmJsZSAqIDAuMSwKICAgIHNjYW5TcGVlZDogMSArIHdvYmJsZSAqIDAuMjUsCiAgICB0aW1lOiB0LnNlY3MsCiAgfSk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKICB0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />

## See

[Original shader by Mattias Gustavsson](https://github.com/libretro/glsl-shaders/blob/master/crt/shaders/crt-mattias.glsl)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-curvature"></a> `curvature` | `number` | Amount of screen curvature/barrel distortion. - `0.0` = flat screen - `0.5` = moderate curvature (default) - `1.0` = maximum curvature **Default** `0.5` |
| <a id="property-scanspeed"></a> `scanSpeed` | `number` | Speed of the scrolling scanline effect. Higher values make the scanline crawl faster. **Default** `1.0` |
| <a id="property-time"></a> `time` | `number` | Animation time parameter. Increment this value each frame to animate the effect. Typically use elapsed time in seconds or frame count. **Default** `0.0` |
