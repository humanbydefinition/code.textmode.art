---
layout: doc
editLink: true
title: TextmodeConversionContext
description: Interface for the context provided to conversion strategies during shader and uniform creation.
category: Interfaces
api: true
namespace: conversion
kind: Interface
lastModified: 2026-06-19
isInterface: true
---

[textmode.js](../../../index.md) / [conversion](../index.md) / TextmodeConversionContext

# Interface: TextmodeConversionContext

Interface for the context provided to conversion strategies during shader and uniform creation.

This context provides access to the renderer, GL context, source asset, and grid dimensions
necessary for implementing custom conversion logic.


## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-font"></a> `font` | [`TextmodeGlyphAtlas`](../../fonts/interfaces/TextmodeGlyphAtlas.md) | Legacy alias for the active glyph atlas. Kept for backward compatibility with existing conversion strategies. |
| <a id="property-gl"></a> `gl` | `WebGL2RenderingContext` | The native WebGL2 rendering context. Use this for creating textures, buffers, or other low-level WebGL resources. |
| <a id="property-glyphatlas"></a> `glyphAtlas` | [`TextmodeGlyphAtlas`](../../fonts/interfaces/TextmodeGlyphAtlas.md) | Backend-neutral glyph atlas currently being used for rendering. Prefer this in new code. |
| <a id="property-pass"></a> `pass?` | [`TextmodeConversionPassContext`](TextmodeConversionPassContext.md) | Metadata for the active source-level conversion stack pass. Undefined for legacy single-conversion rendering. |
| <a id="property-source"></a> `source` | [`TextmodeConversionSource`](TextmodeConversionSource.md) | The source asset (image, video, etc.) being converted. Provides access to the source texture and dimensions. |

## Methods

### createBaseUniforms()

```ts
createBaseUniforms(): Record<string, unknown>;
```

Create the standard source conversion uniforms for this strategy call.

These uniforms include the source texture, color settings, flip/invert flags,
brightness range, and character palette texture for the active pass.

#### Returns

`Record`\<`string`, `unknown`\>

#### Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="TextmodeConversionContext" encoded-code="Y29uc3QgSU1BR0VfVVJMID0gJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA2OTA1OTI1MzQ2LTIxYmRhNGQzMmRmND93PTkwMCZxPTgwJzsKY29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7IHBpeGVsRGVuc2l0eTogMSwgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB9KTsKCmNvbnN0IGxhYmVsTGF5ZXIgPSB0LmxheWVycy5hZGQoKTsKbGV0IGltZyA9IG51bGw7CmxldCBhbmltYXRlZFNoYWRlciA9IG51bGw7Cgp0LnNldHVwKGFzeW5jICgpID0-IHsKCWNvbnN0IHZlcnQgPSBgI3ZlcnNpb24gMzAwIGVzCgkJaW4gdmVjNCBhX3Bvc2l0aW9uOwoJCWluIHZlYzIgYV91djsKCQlvdXQgdmVjMiB2X3V2OwoJCXZvaWQgbWFpbigpIHsKCQkJZ2xfUG9zaXRpb24gPSBhX3Bvc2l0aW9uOwoJCQl2X3V2ID0gYV91djsKCQl9CglgOwoKCWNvbnN0IGZyYWcgPSBgI3ZlcnNpb24gMzAwIGVzCgkJcHJlY2lzaW9uIGhpZ2hwIGZsb2F0OwoJCWluIHZlYzIgdl91djsKCQl1bmlmb3JtIHNhbXBsZXIyRCB1X2ltYWdlOwoJCXVuaWZvcm0gZmxvYXQgdV90aW1lOwoJCWxheW91dChsb2NhdGlvbiA9IDApIG91dCB2ZWM0IG9fY2hhcmFjdGVyOwoJCWxheW91dChsb2NhdGlvbiA9IDEpIG91dCB2ZWM0IG9fcHJpbWFyeUNvbG9yOwoJCWxheW91dChsb2NhdGlvbiA9IDIpIG91dCB2ZWM0IG9fc2Vjb25kYXJ5Q29sb3I7CgkJdm9pZCBtYWluKCkgewoJCQl2ZWM0IGNvbCA9IHRleHR1cmUodV9pbWFnZSwgdl91dik7CgkJCWZsb2F0IHdhdmUgPSAwLjUgKyAwLjUgKiBzaW4odV90aW1lICsgdl91di54ICogMTIuMCk7CgkJCWZsb2F0IGx1bWEgPSBkb3QoY29sLnJnYiwgdmVjMygwLjI5OSwgMC41ODcsIDAuMTE0KSk7CgkJCW9fY2hhcmFjdGVyID0gdmVjNChsdW1hICogd2F2ZSAqIDAuOTUsIDAuMCwgMC4wLCAwLjApOwoJCQlvX3ByaW1hcnlDb2xvciA9IHZlYzQoY29sLnIsIGNvbC5nICogd2F2ZSwgY29sLmIgKiAxLjUsIDEuMCk7CgkJCW9fc2Vjb25kYXJ5Q29sb3IgPSB2ZWM0KDAuMDIsIDAuMDMsIDAuMDYsIDEuMCk7CgkJfQoJYDsKCglhbmltYXRlZFNoYWRlciA9IGF3YWl0IHQuY3JlYXRlU2hhZGVyKHZlcnQsIGZyYWcpOwoKCXQuY29udmVyc2lvbnMucmVnaXN0ZXIoewoJCWlkOiAndGltZS13YXZlJywKCQljcmVhdGVTaGFkZXI6ICgpID0-IGFuaW1hdGVkU2hhZGVyLAoJCWNyZWF0ZVVuaWZvcm1zOiAoY3R4KSA9PiAoewoJCQkuLi5jdHguY3JlYXRlQmFzZVVuaWZvcm1zKCksCgkJCXVfdGltZTogdC5mcmFtZUNvdW50ICogMC4wNCwKCQl9KSwKCX0pOwoKCWltZyA9IGF3YWl0IHQubG9hZEltYWdlKElNQUdFX1VSTCk7CglpbWcuY2hhcmFjdGVycygnIC46LT0rKiMlQCcpOwoJaW1nLmNvbnZlcnNpb25Nb2RlKCd0aW1lLXdhdmUnKTsKfSk7Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDYsIDgsIDIwKTsKCWlmIChpbWcpIHsKCQl0LmltYWdlKGltZywgdC5ncmlkLmNvbHMgLSA4LCB0LmdyaWQucm93cyAtIDEwKTsKCX0KfSk7CgpmdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7Cgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKHIsIGcsIGIpOwoJdC5wcmludCh0ZXh0LCB4LCB5KTsKCXQucG9wKCk7Cn0KCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CgoJY29uc3QgdGltZVZhbCA9IHQuZnJhbWVDb3VudCAqIDAuMDQ7CgoJZHJhd1RleHQoJ0NPTlZFUlNJT04uQ1JFQVRFVU5JRk9STVMnLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBSRU5ERVJJTkcgVU5JRk9STVMgQklORElORycsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnQmluZHMgdGltZS1iYXNlZCBhbmltYXRpb24gdmFsdWVzLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoYFRJTUUgVU5JRk9STTogJHt0aW1lVmFsLnRvRml4ZWQoMil9YCwgeCwgeSsrLCAxMjAsIDIwNSwgMjU1KTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />

