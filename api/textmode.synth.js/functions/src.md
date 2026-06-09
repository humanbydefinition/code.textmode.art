---
layout: doc
editLink: true
title: src
description: Sample a source for synth compositions.
category: Functions
api: true
kind: Function
ecosystem: textmode.js
lastModified: 2026-06-09
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

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="src" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiA4LAoJcGx1Z2luczogW1N5bnRoUGx1Z2luXSwKfSk7Cgp0LmJwbSgxOCk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CmNvbnN0IGdseXBocyA9ICcgLjotPSsqIyVAJzsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCglkcmF3VGV4dCgnU1lOVEhTT1VSQ0UuU1JDJywgeCwgeSsrLCAxMTAsIDI1NSwgMTcwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDcwLCAxMTAsIDE0MCk7CglkcmF3VGV4dCgnU0VMRiBGRUVEQkFDSyBMT09QJywgeCwgeSsrLCAxMjAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdTYW1wbGVzIHByZXZpb3VzIGZyYW1lLicsIHgsIHkrKywgMTYwLCAxODAsIDIxMCk7CglkcmF3VGV4dCgnRnJlc2ggaW5wdXQgaXMgdmVyeSBzdWJ0bGUuJywgeCwgeSsrLCAxNjAsIDE4MCwgMjEwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDcwLCAxMTAsIDE0MCk7CglkcmF3VGV4dCgnU2VwYXJhdGUgYW5pbWF0ZWQgaW5rIGFuZCBwYXBlci4nLCB4LCB5KyssIDE1MCwgMjU1LCAxOTApOwp9KTsKCmNvbnN0IGluayA9IG9zYyg1LCAwLjAxOCwgMS4xKS5rYWxlaWQoNCkuY29sb3IoMC40NSwgMC43MiwgMS4wKS5tb2R1bGF0ZShub2lzZSgyLjIsIDAuMDE4KSwgMC4wMjUpOwpjb25zdCBwYXBlciA9IHBsYXNtYSgzLjYsIDAuMDI4LCAwLjEsIDEuMDUpLmNvbG9yKDAuMDMsIDAuMDgsIDAuMTgpLm1vZHVsYXRlU2NhbGUobm9pc2UoMi4wLCAwLjAxNSksIDAuMjIsIDAuOTUpOwoKdC5sYXllcnMuYmFzZS5zeW50aCgKCXNyYygpCgkJLnNjYWxlKDEuMDA2KQoJCS5yb3RhdGUoMC4wMDYpCgkJLmJsZW5kKG9zYyg3LCAwLjAxOCkua2FsZWlkKDUpLmNvbG9yKDAuMiwgMC43LCAxLjApLCAwLjAyNikKCQkuYmxlbmQob3NjKDksIDAuMDE2KS5rYWxlaWQoNCkucm90YXRlKDAuNCkuY29sb3IoMS4wLCAwLjIsIDAuNSksIDAuMDE4KQoJCS5jb250cmFzdCgxLjA1KQoJCS5jaGFyTWFwKGdseXBocykKCQkuY2hhckNvbG9yKGluaykKCQkuY2VsbENvbG9yKHBhcGVyKQopOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
