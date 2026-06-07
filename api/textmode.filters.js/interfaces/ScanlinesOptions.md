---
layout: doc
editLink: true
title: ScanlinesOptions
description: Configuration options for the 'scanlines' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-05-15
isInterface: true
---

[textmode.filters.js](../index.md) / ScanlinesOptions

# Interface: ScanlinesOptions

Configuration options for the `'scanlines'` filter.

A standalone scanline effect that adds horizontal lines to the image
to simulate a CRT display or old monitor. More customizable than
the scanlines in crtMattias.

## Example

<TextmodeApiSandbox profile="textmode.filters.js" language="javascript" title="ScanlinesOptions" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CiAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLAogIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LAogIHBsdWdpbnM6IFtGaWx0ZXJzUGx1Z2luXSwKfSk7CgpsZXQgdmlkZW87Cgp0LnNldHVwKGFzeW5jICgpID0-IHsKICB2aWRlbyA9IGF3YWl0IHQubG9hZFZpZGVvKCdodHRwczovL2ludGVyYWN0aXZlLWV4YW1wbGVzLm1kbi5tb3ppbGxhLm5ldC9tZWRpYS9jYzAtdmlkZW9zL2Zsb3dlci5tcDQnKTsKICB2aWRlby5wbGF5KCk7CiAgdmlkZW8ubG9vcCgpOwogIHZpZGVvLmNoYXJhY3RlcnMoJyAuOi09KyojJUAnKTsKfSk7Cgp0LmRyYXcoKCkgPT4gewogIHQuYmFja2dyb3VuZCgwKTsKICBpZiAodmlkZW8pIHsKICAgIHQuaW1hZ2UodmlkZW8sIHQuZ3JpZC5jb2xzLCB0LmdyaWQucm93cyk7CiAgfQoKICBjb25zdCB3b2JibGUgPSBNYXRoLnNpbih0LnNlY3MgKiAyKTsKICB0LmxheWVycy5iYXNlLmZpbHRlcignc2NhbmxpbmVzJywgewogICAgY291bnQ6IDI1NiwKICAgIGxpbmVXaWR0aDogMC41LAogICAgaW50ZW5zaXR5OiAwLjcgKyB3b2JibGUgKiAwLjEsCiAgICBzcGVlZDogMSArIHdvYmJsZSAqIDAuMTUsCiAgICB0aW1lOiB0LnNlY3MsCiAgfSk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKICB0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-count"></a> `count` | `number` | Number of scanlines across the image height. Higher values create finer, more dense lines. Minimum value: `10.0` **Default** `300.0` |
| <a id="property-linewidth"></a> `lineWidth` | `number` | Width of the lines relative to the spacing. - `0.0` = very thin lines (mostly transparent) - `0.5` = equal line and gap width - `1.0` = solid (no gaps) **Default** `0.5` |
| <a id="property-intensity"></a> `intensity` | `number` | Opacity/darkness of the scanlines. - `0.0` = invisible lines - `0.75` = clearly visible (default) - `1.0` = maximum darkness (solid black lines) **Default** `0.75` |
| <a id="property-speed"></a> `speed` | `number` | Scrolling speed of the lines. - `0.0` = static lines - `1.0` = normal scrolling speed - Higher values = faster scrolling **Default** `1.0` |
| <a id="property-time"></a> `time` | `number` | Animation time parameter. Increment this value each frame to animate the scrolling effect. **Default** `0.0` |
