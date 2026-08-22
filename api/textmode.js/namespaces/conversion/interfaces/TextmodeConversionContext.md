---
layout: doc
editLink: false
title: TextmodeConversionContext
description: Interface for the context provided to conversion strategies during shader and uniform creation.
category: Interfaces
api: true
namespace: conversion
kind: Interface
lastModified: 2026-08-22
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

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="TextmodeConversionContext" encoded-code="Y29uc3QgSU1BR0VfVVJMID0gJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA2OTA1OTI1MzQ2LTIxYmRhNGQzMmRmND93PTkwMCZxPTgwJzsKY29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7IHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CmxldCBpbWcgPSBudWxsOwpsZXQgYW5pbWF0ZWRTaGFkZXIgPSBudWxsOwoKdC5zZXR1cChhc3luYyAoKSA9PiB7Cgljb25zdCB2ZXJ0ID0gYCN2ZXJzaW9uIDMwMCBlcwoJCWluIHZlYzQgYV9wb3NpdGlvbjsKCQlpbiB2ZWMyIGFfdXY7CgkJb3V0IHZlYzIgdl91djsKCQl2b2lkIG1haW4oKSB7CgkJCWdsX1Bvc2l0aW9uID0gYV9wb3NpdGlvbjsKCQkJdl91diA9IGFfdXY7CgkJfQoJYDsKCgljb25zdCBmcmFnID0gYCN2ZXJzaW9uIDMwMCBlcwoJCXByZWNpc2lvbiBoaWdocCBmbG9hdDsKCQlpbiB2ZWMyIHZfdXY7CgkJdW5pZm9ybSBzYW1wbGVyMkQgdV9pbWFnZTsKCQl1bmlmb3JtIGZsb2F0IHVfdGltZTsKCQlsYXlvdXQobG9jYXRpb24gPSAwKSBvdXQgdmVjNCBvX2NoYXJhY3RlcjsKCQlsYXlvdXQobG9jYXRpb24gPSAxKSBvdXQgdmVjNCBvX3ByaW1hcnlDb2xvcjsKCQlsYXlvdXQobG9jYXRpb24gPSAyKSBvdXQgdmVjNCBvX3NlY29uZGFyeUNvbG9yOwoJCXZvaWQgbWFpbigpIHsKCQkJdmVjNCBjb2wgPSB0ZXh0dXJlKHVfaW1hZ2UsIHZfdXYpOwoJCQlmbG9hdCB3YXZlID0gMC41ICsgMC41ICogc2luKHVfdGltZSArIHZfdXYueCAqIDEyLjApOwoJCQlmbG9hdCBsdW1hID0gZG90KGNvbC5yZ2IsIHZlYzMoMC4yOTksIDAuNTg3LCAwLjExNCkpOwoJCQlvX2NoYXJhY3RlciA9IHZlYzQobHVtYSAqIHdhdmUgKiAwLjk1LCAwLjAsIDAuMCwgMC4wKTsKCQkJb19wcmltYXJ5Q29sb3IgPSB2ZWM0KGNvbC5yLCBjb2wuZyAqIHdhdmUsIGNvbC5iICogMS41LCAxLjApOwoJCQlvX3NlY29uZGFyeUNvbG9yID0gdmVjNCgwLjAyLCAwLjAzLCAwLjA2LCAxLjApOwoJCX0KCWA7CgoJYW5pbWF0ZWRTaGFkZXIgPSBhd2FpdCB0LmNyZWF0ZVNoYWRlcih2ZXJ0LCBmcmFnKTsKCgl0LmNvbnZlcnNpb25zLnJlZ2lzdGVyKHsKCQlpZDogJ3RpbWUtd2F2ZScsCgkJY3JlYXRlU2hhZGVyOiAoKSA9PiBhbmltYXRlZFNoYWRlciwKCQljcmVhdGVVbmlmb3JtczogKGN0eCkgPT4gKHsKCQkJLi4uY3R4LmNyZWF0ZUJhc2VVbmlmb3JtcygpLAoJCQl1X3RpbWU6IHQuZnJhbWVDb3VudCAqIDAuMDQsCgkJfSksCgl9KTsKCglpbWcgPSBhd2FpdCB0LmxvYWRJbWFnZShJTUFHRV9VUkwpOwoJaW1nLmNoYXJhY3RlcnMoJyAuOi09KyojJUAnKTsKCWltZy5jb252ZXJzaW9uTW9kZSgndGltZS13YXZlJyk7Cn0pOwoKdC5kcmF3KCgpID0-IHsKCXQuYmFja2dyb3VuZCg2LCA4LCAyMCk7CglpZiAoaW1nKSB7CgkJdC5pbWFnZShpbWcsIHQuZ3JpZC5jb2xzIC0gOCwgdC5ncmlkLnJvd3MgLSAxMCk7Cgl9Cn0pOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWNvbnN0IHRpbWVWYWwgPSB0LmZyYW1lQ291bnQgKiAwLjA0OwoKCWRyYXdUZXh0KCdDT05WRVJTSU9OLkNSRUFURVVOSUZPUk1TJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogUkVOREVSSU5HIFVOSUZPUk1TIEJJTkRJTkcnLCB4LCB5KyssIDEwMCwgMjIwLCAyNTUpOwoJZHJhd1RleHQoJ0JpbmRzIHRpbWUtYmFzZWQgYW5pbWF0aW9uIHZhbHVlcy4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KGBUSU1FIFVOSUZPUk06ICR7dGltZVZhbC50b0ZpeGVkKDIpfWAsIHgsIHkrKywgMTIwLCAyMDUsIDI1NSk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />

