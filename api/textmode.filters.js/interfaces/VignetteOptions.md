---
layout: doc
editLink: true
title: VignetteOptions
description: Configuration options for the 'vignette' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-05-15
isInterface: true
---

[textmode.filters.js](../index.md) / VignetteOptions

# Interface: VignetteOptions

Configuration options for the `'vignette'` filter.

Darkens the edges and corners of the image, drawing focus to the center.
Useful for creating a cinematic look or highlighting central content.

## Example

<TextmodeApiSandbox profile="textmode.filters.js" language="javascript" title="VignetteOptions" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CiAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLAogIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LAogIHBsdWdpbnM6IFtGaWx0ZXJzUGx1Z2luXSwKfSk7CgpsZXQgdmlkZW87Cgp0LnNldHVwKGFzeW5jICgpID0-IHsKICB2aWRlbyA9IGF3YWl0IHQubG9hZFZpZGVvKCdodHRwczovL2ludGVyYWN0aXZlLWV4YW1wbGVzLm1kbi5tb3ppbGxhLm5ldC9tZWRpYS9jYzAtdmlkZW9zL2Zsb3dlci5tcDQnKTsKICB2aWRlby5wbGF5KCk7CiAgdmlkZW8ubG9vcCgpOwogIHZpZGVvLmNoYXJhY3RlcnMoJyAuOi09KyojJUAnKTsKfSk7Cgp0LmRyYXcoKCkgPT4gewogIHQuYmFja2dyb3VuZCgwKTsKICBpZiAodmlkZW8pIHsKICAgIHQuaW1hZ2UodmlkZW8sIHQuZ3JpZC5jb2xzLCB0LmdyaWQucm93cyk7CiAgfQoKICBjb25zdCB3b2JibGUgPSBNYXRoLnNpbih0LnNlY3MgKiAyKTsKICB0LmxheWVycy5iYXNlLmZpbHRlcigndmlnbmV0dGUnLCB7CiAgICBhbW91bnQ6IDAuNSArIHdvYmJsZSAqIDAuMiwKICAgIHNvZnRuZXNzOiAwLjUsCiAgICByb3VuZG5lc3M6IDAuNSArIHdvYmJsZSAqIDAuMTUsCiAgfSk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKICB0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-amount"></a> `amount` | `number` | Intensity of the darkening effect. - `0.0` = no vignette - `0.5` = moderate vignette (default) - `1.0` = very dark edges **Default** `0.5` |
| <a id="property-softness"></a> `softness` | `number` | Falloff gradient softness. - `0.0` = hard edge (sharp transition) - `0.5` = moderate gradient (default) - `1.0` = very soft, gradual falloff **Default** `0.5` |
| <a id="property-roundness"></a> `roundness` | `number` | Shape of the vignette. - `0.0` = rectangular (follows screen edges) - `0.5` = rounded rectangle (default) - `1.0` = circular/elliptical **Default** `0.5` |
