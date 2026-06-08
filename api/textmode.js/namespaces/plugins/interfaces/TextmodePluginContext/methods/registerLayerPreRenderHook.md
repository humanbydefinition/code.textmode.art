---
layout: doc
editLink: true
title: registerLayerPreRenderHook
description: Register a callback to be invoked before each layer's render cycle. This happens after the layer's visibility check but before any drawing operations. Useful...
category: Methods
api: true
owner: TextmodePluginContext
namespace: plugins
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../../../index.md) / [plugins](../../../index.md) / [TextmodePluginContext](../../TextmodePluginContext.md) / registerLayerPreRenderHook

# Method: registerLayerPreRenderHook()

```ts
registerLayerPreRenderHook(callback): () => void;
```

Register a callback to be invoked before each layer's render cycle.
This happens after the layer's visibility check but before any drawing operations.
Useful for rendering content to the layer's framebuffer before user draw callbacks.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`LayerRenderHook`](../../../type-aliases/LayerRenderHook.md) | The callback to invoke with the layer and render context. |

## Returns

A function to unregister the hook.

() => `void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="registerLayerPreRenderHook" encoded-code="bGV0IHByZVJlbmRlckNvdW50ID0gMDsKCmNvbnN0IGhvb2tQbHVnaW4gPSB7CgluYW1lOiAnbGF5ZXItcHJlLXJlbmRlci1ob29rLXBsdWdpbicsCglpbnN0YWxsKHRleHRtb2RpZmllciwgY29udGV4dCkgewoJCWNvbnRleHQucmVnaXN0ZXJMYXllclByZVJlbmRlckhvb2soKCkgPT4gewoJCQlwcmVSZW5kZXJDb3VudCArPSAxOwoJCX0pOwoJfSwKfTsKCmNvbnN0IHQgPSB0ZXh0bW9kZS5jcmVhdGUoewoJcGl4ZWxEZW5zaXR5OiAxLAoJd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLAoJaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsCglmb250U2l6ZTogMTYsCglwbHVnaW5zOiBbaG9va1BsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKdC5kcmF3KCgpID0-IHsKCXQuYmFja2dyb3VuZCg2LCA4LCAyMCk7Cn0pOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KCdQTFVHSU5TLlJFR0lTVEVSTEFZRVJQUkVSRU5ERVJIT09LJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogTEFZRVIgUFJFLVJFTkRFUiBIT09LJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdSdW5zIGJlZm9yZSBkcmF3aW5nIGZyYW1lYnVmZmVycy4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KGBJTlZPQ0FUSU9OUyA6ICR7cHJlUmVuZGVyQ291bnR9YCwgeCwgeSsrLCAxNDAsIDE5MCwgMjU1KTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
