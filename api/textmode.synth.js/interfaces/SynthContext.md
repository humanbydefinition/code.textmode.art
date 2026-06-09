---
layout: doc
editLink: true
title: SynthContext
description: Context passed to dynamic parameter functions during rendering.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-06-09
isInterface: true
---

[textmode.synth.js](../index.md) / SynthContext

# Interface: SynthContext

Context passed to dynamic parameter functions during rendering.

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="SynthContext" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CiAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLAogIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LAogIHBsdWdpbnM6IFtTeW50aFBsdWdpbl0KfSk7Cgp0LmxheWVycy5iYXNlLnN5bnRoKAogIG5vaXNlKChjdHgpID0-IDYgKyBNYXRoLnNpbihjdHgudGltZSkgKiA0KQogICAgLmthbGVpZCg1KQopOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKICB0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-time"></a> `time` | `number` | Current time in seconds |
| <a id="property-framecount"></a> `frameCount` | `number` | Current frame count |
| <a id="property-width"></a> `width` | `number` | Grid width in pixels |
| <a id="property-height"></a> `height` | `number` | Grid height in pixels |
| <a id="property-cols"></a> `cols` | `number` | Grid columns |
| <a id="property-rows"></a> `rows` | `number` | Grid rows |
| <a id="property-bpm"></a> `bpm` | `number` | Current BPM (beats per minute) for array modulation timing |
| <a id="property-onerror"></a> `onError?` | (`error`, `uniformName`) => `void` | Optional callback for handling dynamic parameter evaluation errors |
