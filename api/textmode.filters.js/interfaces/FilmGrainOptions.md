---
layout: doc
editLink: true
title: FilmGrainOptions
description: Configuration options for the 'filmGrain' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-05-15
isInterface: true
---

[textmode.filters.js](../index.md) / FilmGrainOptions

# Interface: FilmGrainOptions

Configuration options for the `'filmGrain'` filter.

Adds an animated film grain/noise texture overlay to simulate vintage
film stock or analog video. The multi-layered noise creates an organic,
moving grain pattern that's less visible in darker areas, mimicking
real film characteristics.

## Example

<TextmodeApiSandbox profile="textmode.filters.js" language="javascript" title="FilmGrainOptions" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CiAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLAogIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LAogIHBsdWdpbnM6IFtGaWx0ZXJzUGx1Z2luXSwKfSk7CgpsZXQgdmlkZW87Cgp0LnNldHVwKGFzeW5jICgpID0-IHsKICB2aWRlbyA9IGF3YWl0IHQubG9hZFZpZGVvKCdodHRwczovL2ludGVyYWN0aXZlLWV4YW1wbGVzLm1kbi5tb3ppbGxhLm5ldC9tZWRpYS9jYzAtdmlkZW9zL2Zsb3dlci5tcDQnKTsKICB2aWRlby5wbGF5KCk7CiAgdmlkZW8ubG9vcCgpOwogIHZpZGVvLmNoYXJhY3RlcnMoJyAuOi09KyojJUAnKTsKfSk7Cgp0LmRyYXcoKCkgPT4gewogIHQuYmFja2dyb3VuZCgwKTsKICBpZiAodmlkZW8pIHsKICAgIHQuaW1hZ2UodmlkZW8sIHQuZ3JpZC5jb2xzLCB0LmdyaWQucm93cyk7CiAgfQoKICBjb25zdCB3b2JibGUgPSBNYXRoLnNpbih0LnNlY3MgKiAyKTsKICB0LmxheWVycy5iYXNlLmZpbHRlcignZmlsbUdyYWluJywgewogICAgaW50ZW5zaXR5OiAwLjIgKyB3b2JibGUgKiAwLjEsCiAgICBzaXplOiAyICsgd29iYmxlICogMC41LAogICAgc3BlZWQ6IDEgKyB3b2JibGUgKiAwLjIsCiAgICB0aW1lOiB0LnNlY3MsCiAgfSk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKICB0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-intensity"></a> `intensity` | `number` | Strength of the grain effect. - `0.0` = no grain - `0.2` = subtle grain (default) - `0.5+` = heavy, noticeable grain **Default** `0.2` |
| <a id="property-size"></a> `size` | `number` | Size of grain particles. - `1.0` = fine grain - `2.0` = medium grain (default) - `5.0+` = coarse, chunky grain **Default** `2.0` |
| <a id="property-speed"></a> `speed` | `number` | Animation speed of the grain. - `0.0` = static grain (not recommended) - `1.0` = normal animation speed (default) - `2.0+` = fast, flickering grain **Default** `1.0` |
| <a id="property-time"></a> `time` | `number` | Animation time parameter. Increment this value each frame to animate the grain effect. **Default** `0.0` |
