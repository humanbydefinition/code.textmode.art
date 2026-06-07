---
layout: doc
editLink: true
title: BloomOptions
description: Configuration options for the 'bloom' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-05-15
isInterface: true
---

[textmode.filters.js](../index.md) / BloomOptions

# Interface: BloomOptions

Configuration options for the `'bloom'` filter.

Creates a glow effect around bright areas of the image. Pixels above
the brightness threshold emit a soft glow that spreads outward.
Perfect for creating neon, glowing text, or dreamy effects.

## Example

<TextmodeApiSandbox profile="textmode.filters.js" language="javascript" title="BloomOptions" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CiAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLAogIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LAogIHBsdWdpbnM6IFtGaWx0ZXJzUGx1Z2luXSwKfSk7CgpsZXQgdmlkZW87Cgp0LnNldHVwKGFzeW5jICgpID0-IHsKICB2aWRlbyA9IGF3YWl0IHQubG9hZFZpZGVvKCdodHRwczovL2ludGVyYWN0aXZlLWV4YW1wbGVzLm1kbi5tb3ppbGxhLm5ldC9tZWRpYS9jYzAtdmlkZW9zL2Zsb3dlci5tcDQnKTsKICB2aWRlby5wbGF5KCk7CiAgdmlkZW8ubG9vcCgpOwogIHZpZGVvLmNoYXJhY3RlcnMoJyAuOi09KyojJUAnKTsKfSk7Cgp0LmRyYXcoKCkgPT4gewogIHQuYmFja2dyb3VuZCgwKTsKICBpZiAodmlkZW8pIHsKICAgIHQuaW1hZ2UodmlkZW8sIHQuZ3JpZC5jb2xzLCB0LmdyaWQucm93cyk7CiAgfQoKICBjb25zdCB3b2JibGUgPSBNYXRoLnNpbih0LnNlY3MgKiAyKTsKICB0LmxheWVycy5iYXNlLmZpbHRlcignYmxvb20nLCB7CiAgICB0aHJlc2hvbGQ6IDAuNSwKICAgIGludGVuc2l0eTogMS4yICsgd29iYmxlICogMC41LAogICAgcmFkaXVzOiA2ICsgd29iYmxlICogMiwKICB9KTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewogIHQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-threshold"></a> `threshold` | `number` | Brightness level above which pixels will glow. - `0.0` = everything glows - `0.5` = mid-brightness and above glows (default) - `1.0` = only the brightest pixels glow **Default** `0.5` |
| <a id="property-intensity"></a> `intensity` | `number` | Strength of the glow effect. - `0.0` = no visible glow - `1.0` = normal glow intensity (default) - `2.0+` = very bright, intense glow **Default** `1.0` |
| <a id="property-radius"></a> `radius` | `number` | Size of the glow spread in pixels. Larger values create a wider, softer glow. - `1.0` = tight glow - `4.0` = moderate spread (default) - `10.0+` = wide, diffuse glow **Default** `4.0` |
