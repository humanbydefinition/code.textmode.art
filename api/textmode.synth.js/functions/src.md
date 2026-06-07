---
layout: doc
editLink: true
title: src
description: Sample a source for synth compositions.
category: Functions
api: true
kind: Function
ecosystem: textmode.js
lastModified: 2026-06-07
---

[textmode.synth.js](../index.md) / src

# Function: src()

```ts
function src(source?): SynthSource;
```

Sample a source for synth compositions.

This is the core of feedback loops and source sampling - it reads from various sources,
enabling effects like trails, motion blur, image processing, and recursive patterns.

**Three modes of operation:**

1. **Self-feedback** (`src()` with no arguments): Samples from the previous frame
   - Context-aware: automatically samples the appropriate texture based on compilation context
   - Inside `char(...)` → samples previous frame's character data
   - Inside `charColor(...)` → samples previous frame's primary color
   - Inside `cellColor(...)` → samples previous frame's cell color

2. **Cross-layer sampling** (`src(layer)`): Samples from another layer's output
   - Enables hydra-style multi-output compositions
   - Context-aware based on current compilation target

3. **TextmodeSource sampling** (`src(image)` or `src(video)`): Samples from loaded media
   - Works with TextmodeImage and TextmodeVideo loaded via `t.loadImage()` or `t.loadVideo()`
   - Samples directly from the source texture

Equivalent to hydra's `src(o0)`.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source?` | \| `TextmodeSource` \| `TextmodeLayer` \| (() => `TextmodeSource` \| `TextmodeLayer` \| `undefined`) | Optional source to sample from: TextmodeLayer for cross-layer, or TextmodeImage/TextmodeVideo for media |

## Returns

[`SynthSource`](../classes/SynthSource.md)

A new SynthSource that samples the specified source or self

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="src" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd0V4YW1wbGVMYWJlbCh0ZXh0LCBjb2wsIHJvdywgY29sb3IgPSAnI2ZmZmZmZicpIHsKCXQuY29sb3IoY29sb3IpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5wcmludCh0ZXh0LCBjb2wsIHJvdyk7Cn0KCmZ1bmN0aW9uIGRyYXdFeGFtcGxlTGFiZWxzKCkgewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoKCWRyYXdFeGFtcGxlTGFiZWwoJ1N5bnRoU291cmNlLnNyYycsIGxlZnQgKyAxLCB0b3AgKyAxKTsKfQoKbGFiZWxMYXllci5kcmF3KGRyYXdFeGFtcGxlTGFiZWxzKTsKCnQubGF5ZXJzLmJhc2Uuc3ludGgoCglzcmMoKQoJCS5zY2FsZSgxLjAxKQoJCS5ibGVuZChvc2MoNiwgMC4xLCAxLjIpLCAwLjEpCik7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
