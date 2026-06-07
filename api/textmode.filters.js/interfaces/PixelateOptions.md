---
layout: doc
editLink: true
title: PixelateOptions
description: Configuration options for the 'pixelate' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-05-15
isInterface: true
---

[textmode.filters.js](../index.md) / PixelateOptions

# Interface: PixelateOptions

Configuration options for the `'pixelate'` filter.

Reduces image resolution to create a mosaic/pixelated effect
reminiscent of retro video games or censored content.

## Example

<TextmodeApiSandbox profile="textmode.filters.js" language="javascript" title="PixelateOptions" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CiAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLAogIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LAogIHBsdWdpbnM6IFtGaWx0ZXJzUGx1Z2luXSwKfSk7CgpsZXQgdmlkZW87Cgp0LnNldHVwKGFzeW5jICgpID0-IHsKICB2aWRlbyA9IGF3YWl0IHQubG9hZFZpZGVvKCdodHRwczovL2ludGVyYWN0aXZlLWV4YW1wbGVzLm1kbi5tb3ppbGxhLm5ldC9tZWRpYS9jYzAtdmlkZW9zL2Zsb3dlci5tcDQnKTsKICB2aWRlby5wbGF5KCk7CiAgdmlkZW8ubG9vcCgpOwogIHZpZGVvLmNoYXJhY3RlcnMoJyAuOi09KyojJUAnKTsKfSk7Cgp0LmRyYXcoKCkgPT4gewogIHQuYmFja2dyb3VuZCgwKTsKICBpZiAodmlkZW8pIHsKICAgIHQuaW1hZ2UodmlkZW8sIHQuZ3JpZC5jb2xzLCB0LmdyaWQucm93cyk7CiAgfQoKICBjb25zdCB3b2JibGUgPSBNYXRoLnNpbih0LnNlY3MgKiAyKTsKICB0LmxheWVycy5iYXNlLmZpbHRlcigncGl4ZWxhdGUnLCB7CiAgICBwaXhlbFNpemU6IDYgKyB3b2JibGUgKiAzLAogIH0pOwp9KTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7CiAgdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-pixelsize"></a> `pixelSize` | `number` | Size of each pixel block in pixels. Larger values create bigger, more visible pixels. Minimum value: `1.0` **Default** `4.0` |
