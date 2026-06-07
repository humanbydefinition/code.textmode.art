---
layout: doc
editLink: true
title: ChromaticAberrationOptions
description: Configuration options for the 'chromaticAberration' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-05-15
isInterface: true
---

[textmode.filters.js](../index.md) / ChromaticAberrationOptions

# Interface: ChromaticAberrationOptions

Configuration options for the `'chromaticAberration'` filter.

RGB color channel separation effect that simulates lens distortion
found in cheap cameras or creates stylized glitch aesthetics.

## Example

<TextmodeApiSandbox profile="textmode.filters.js" language="javascript" title="ChromaticAberrationOptions" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CiAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLAogIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LAogIHBsdWdpbnM6IFtGaWx0ZXJzUGx1Z2luXSwKfSk7CgpsZXQgdmlkZW87Cgp0LnNldHVwKGFzeW5jICgpID0-IHsKICB2aWRlbyA9IGF3YWl0IHQubG9hZFZpZGVvKCdodHRwczovL2ludGVyYWN0aXZlLWV4YW1wbGVzLm1kbi5tb3ppbGxhLm5ldC9tZWRpYS9jYzAtdmlkZW9zL2Zsb3dlci5tcDQnKTsKICB2aWRlby5wbGF5KCk7CiAgdmlkZW8ubG9vcCgpOwogIHZpZGVvLmNoYXJhY3RlcnMoJyAuOi09KyojJUAnKTsKfSk7Cgp0LmRyYXcoKCkgPT4gewogIHQuYmFja2dyb3VuZCgwKTsKICBpZiAodmlkZW8pIHsKICAgIHQuaW1hZ2UodmlkZW8sIHQuZ3JpZC5jb2xzLCB0LmdyaWQucm93cyk7CiAgfQoKICBjb25zdCB3b2JibGUgPSBNYXRoLnNpbih0LnNlY3MgKiAyKTsKICB0LmxheWVycy5iYXNlLmZpbHRlcignY2hyb21hdGljQWJlcnJhdGlvbicsIHsKICAgIGFtb3VudDogNiArIHdvYmJsZSAqIDQsCiAgICBkaXJlY3Rpb246IFtNYXRoLnNpbih0LnNlY3MpLCBNYXRoLmNvcyh0LnNlY3MpXSwKICB9KTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewogIHQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-amount"></a> `amount` | `number` | Offset amount in pixels. Controls how far the red and blue channels are separated from green. **Default** `5.0` |
| <a id="property-direction"></a> `direction` | \[`number`, `number`\] | Direction of the color separation as `[x, y]`. - `[1, 0]` = horizontal separation - `[0, 1]` = vertical separation - `[1, 1]` = diagonal separation The vector is normalized internally, so `[2, 0]` is the same as `[1, 0]`. **Default** `[1.0, 0.0]` |
