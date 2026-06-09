---
layout: doc
editLink: true
title: FilmGrainOptions
description: Configuration options for the 'filmGrain' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-06-09
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

<TextmodeApiSandbox profile="textmode.filters.js" language="javascript" title="FilmGrainOptions" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiA4LAoJcGx1Z2luczogW0ZpbHRlcnNQbHVnaW5dLAp9KTsKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKbGV0IHZpZGVvOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9Cgp0LnNldHVwKGFzeW5jICgpID0-IHsKCXZpZGVvID0gYXdhaXQgdC5sb2FkVmlkZW8oJ2h0dHBzOi8vaW50ZXJhY3RpdmUtZXhhbXBsZXMubWRuLm1vemlsbGEubmV0L21lZGlhL2NjMC12aWRlb3MvZmxvd2VyLm1wNCcpOwoJdmlkZW8ucGxheSgpOwoJdmlkZW8ubG9vcCgpOwoJdmlkZW8uY2hhcmFjdGVycygnIC46LT0rKiMlQCcpOwp9KTsKCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKSwKCQl0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzLAoJCXggPSBsZWZ0ICsgMzsKCgljb25zdCBpbnRlbnNpdHkgPSAoMC4zICsgMC4yICogTWF0aC5zaW4odC5zZWNzICogMi4wKSkudG9GaXhlZCgyKTsKCglkcmF3VGV4dCgnRklMVEVSU1BMVUdJTi5GSUxNR1JBSU4nLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBBTkFMT0cgTk9JU0UgT1ZFUkxBWScsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnU2ltdWxhdGVzIG9yZ2FuaWMgZmlsbSBncmFpbi4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdJbnRlbnNpdHk6ICcgKyBpbnRlbnNpdHksIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7CglkcmF3VGV4dCgnU2l6ZTogMi4wJywgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKfSk7Cgp0LmRyYXcoKCkgPT4gewoJaWYgKCF2aWRlbykgcmV0dXJuOwoJY29uc3QgaW50ZW5zaXR5ID0gMC4zICsgMC4yICogTWF0aC5zaW4odC5zZWNzICogMi4wKTsKCgl0LmxheWVycy5iYXNlLmZpbHRlcignZmlsbUdyYWluJywgewoJCWludGVuc2l0eTogaW50ZW5zaXR5LAoJCXNpemU6IDIuMCwKCQlzcGVlZDogMS4wLAoJCXRpbWU6IHQuc2VjcywKCX0pOwoKCXQuYmFja2dyb3VuZCgwKTsKCXQuaW1hZ2UodmlkZW8pOwp9KTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-intensity"></a> `intensity` | `number` | Strength of the grain effect. - `0.0` = no grain - `0.2` = subtle grain (default) - `0.5+` = heavy, noticeable grain **Default** `0.2` |
| <a id="property-size"></a> `size` | `number` | Size of grain particles. - `1.0` = fine grain - `2.0` = medium grain (default) - `5.0+` = coarse, chunky grain **Default** `2.0` |
| <a id="property-speed"></a> `speed` | `number` | Animation speed of the grain. - `0.0` = static grain (not recommended) - `1.0` = normal animation speed (default) - `2.0+` = fast, flickering grain **Default** `1.0` |
| <a id="property-time"></a> `time` | `number` | Animation time parameter. Increment this value each frame to animate the grain effect. **Default** `0.0` |
