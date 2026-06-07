---
layout: doc
editLink: true
title: HueRotateOptions
description: Configuration options for the 'hueRotate' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-05-15
isInterface: true
---

[textmode.filters.js](../index.md) / HueRotateOptions

# Interface: HueRotateOptions

Configuration options for the `'hueRotate'` filter.

Shifts all colors around the color wheel by a specified angle.
Useful for color grading or creating surreal color effects.

## Example

<TextmodeApiSandbox profile="textmode.filters.js" language="javascript" title="HueRotateOptions" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CiAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLAogIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LAogIHBsdWdpbnM6IFtGaWx0ZXJzUGx1Z2luXSwKfSk7CgpsZXQgdmlkZW87Cgp0LnNldHVwKGFzeW5jICgpID0-IHsKICB2aWRlbyA9IGF3YWl0IHQubG9hZFZpZGVvKCdodHRwczovL2ludGVyYWN0aXZlLWV4YW1wbGVzLm1kbi5tb3ppbGxhLm5ldC9tZWRpYS9jYzAtdmlkZW9zL2Zsb3dlci5tcDQnKTsKICB2aWRlby5wbGF5KCk7CiAgdmlkZW8ubG9vcCgpOwogIHZpZGVvLmNoYXJhY3RlcnMoJyAuOi09KyojJUAnKTsKfSk7Cgp0LmRyYXcoKCkgPT4gewogIHQuYmFja2dyb3VuZCgwKTsKICBpZiAodmlkZW8pIHsKICAgIHQuaW1hZ2UodmlkZW8sIHQuZ3JpZC5jb2xzLCB0LmdyaWQucm93cyk7CiAgfQoKICBjb25zdCB3b2JibGUgPSBNYXRoLnNpbih0LnNlY3MgKiAyKTsKICBjb25zdCBodWUgPSAodC5mcmFtZUNvdW50ICogMiArIHdvYmJsZSAqIDQ1KSAlIDM2MDsKICB0LmxheWVycy5iYXNlLmZpbHRlcignaHVlUm90YXRlJywgewogICAgYW5nbGU6IGh1ZSwKICB9KTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewogIHQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-angle"></a> `angle` | `number` | Rotation angle in degrees. - `0` = no change - `180` = complementary colors - `360` = full rotation (same as 0) Values wrap around, so `370` is equivalent to `10`. **Default** `0.0` |
