---
layout: doc
editLink: true
title: registerPreDrawHook
description: Register a callback to be invoked before each draw cycle. Happens just before any framebuffer
category: Methods
api: true
owner: TextmodePluginContext
namespace: plugins
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../../../index.md) / [plugins](../../../index.md) / [TextmodePluginContext](../../TextmodePluginContext.md) / registerPreDrawHook

# Method: registerPreDrawHook()

```ts
registerPreDrawHook(callback): () => void;
```

Register a callback to be invoked before each draw cycle.
Happens just before any framebuffer

## Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | [`TextmodePluginHook`](../../../type-aliases/TextmodePluginHook.md) |

## Returns

A function to unregister the hook.

() => `void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="registerPreDrawHook" encoded-code="bGV0IHByZURyYXdDb3VudGVyID0gMDsKCmNvbnN0IGhvb2tQbHVnaW4gPSB7CgluYW1lOiAncHJlLWRyYXctaG9vay1wbHVnaW4nLAoJaW5zdGFsbCh0ZXh0bW9kaWZpZXIsIGNvbnRleHQpIHsKCQljb250ZXh0LnJlZ2lzdGVyUHJlRHJhd0hvb2soKCkgPT4gewoJCQlwcmVEcmF3Q291bnRlciArPSAxOwoJCX0pOwoJfSwKfTsKCmNvbnN0IHQgPSB0ZXh0bW9kZS5jcmVhdGUoewoJcGl4ZWxEZW5zaXR5OiAxLAoJd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLAoJaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsCglmb250U2l6ZTogMTYsCglwbHVnaW5zOiBbaG9va1BsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKdC5kcmF3KCgpID0-IHsKCXQuYmFja2dyb3VuZCg2LCA4LCAyMCk7Cn0pOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KCdQTFVHSU5TLlJFR0lTVEVSUFJFRFJBV0hPT0snLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBQUkUtRFJBVyBMSUZFQ1lDTEUgSE9PSycsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnUnVucyBlYWNoIGZyYW1lIGJlZm9yZSB1c2VyIGRyYXcoKS4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KGBJTlZPQ0FUSU9OUyA6ICR7cHJlRHJhd0NvdW50ZXJ9YCwgeCwgeSsrLCAxNDAsIDE5MCwgMjU1KTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
