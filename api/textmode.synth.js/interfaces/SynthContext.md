---
layout: doc
editLink: true
title: SynthContext
description: Context passed to dynamic parameter functions during rendering.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-06-07
isInterface: true
---

[textmode.synth.js](../index.md) / SynthContext

# Interface: SynthContext

Context passed to dynamic parameter functions during rendering.

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="SynthContext" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CiAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLAogIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LAogIHBsdWdpbnM6IFtTeW50aFBsdWdpbl0KfSk7Cgp0LmxheWVycy5iYXNlLnN5bnRoKAogIG5vaXNlKChjdHgpID0-IDYgKyBNYXRoLnNpbihjdHgudGltZSkgKiA0KQogICAgLmthbGVpZCg1KQopOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKICB0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />

## Properties

| Property | Description |
| ------ | ------ |
| [time](SynthContext/properties/time.md) | Current time in seconds |
| [frameCount](SynthContext/properties/frameCount.md) | Current frame count |
| [width](SynthContext/properties/width.md) | Grid width in pixels |
| [height](SynthContext/properties/height.md) | Grid height in pixels |
| [cols](SynthContext/properties/cols.md) | Grid columns |
| [rows](SynthContext/properties/rows.md) | Grid rows |
| [bpm](SynthContext/properties/bpm.md) | Current BPM (beats per minute) for array modulation timing |
| [onError](SynthContext/properties/onError.md) | Optional callback for handling dynamic parameter evaluation errors |
