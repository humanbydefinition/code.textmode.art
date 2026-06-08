---
layout: doc
editLink: true
title: registerLayerPostRenderHook
description: Register a callback to be invoked after each layer's render cycle. This happens after the user draw callback but before the ASCII resolve pass.
category: Methods
api: true
owner: TextmodePluginContext
namespace: plugins
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../../../index.md) / [plugins](../../../index.md) / [TextmodePluginContext](../../TextmodePluginContext.md) / registerLayerPostRenderHook

# Method: registerLayerPostRenderHook()

```ts
registerLayerPostRenderHook(callback): () => void;
```

Register a callback to be invoked after each layer's render cycle.
This happens after the user draw callback but before the ASCII resolve pass.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`LayerRenderHook`](../../../type-aliases/LayerRenderHook.md) | The callback to invoke with the layer and render context. |

## Returns

A function to unregister the hook.

() => `void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="registerLayerPostRenderHook" encoded-code="bGV0IHBvc3RSZW5kZXJDb3VudCA9IDA7Cgpjb25zdCBob29rUGx1Z2luID0gewoJbmFtZTogJ2xheWVyLXBvc3QtcmVuZGVyLWhvb2stcGx1Z2luJywKCWluc3RhbGwodGV4dG1vZGlmaWVyLCBjb250ZXh0KSB7CgkJY29udGV4dC5yZWdpc3RlckxheWVyUG9zdFJlbmRlckhvb2soKCkgPT4gewoJCQlwb3N0UmVuZGVyQ291bnQgKz0gMTsKCQl9KTsKCX0sCn07Cgpjb25zdCB0ID0gdGV4dG1vZGUuY3JlYXRlKHsKCXBpeGVsRGVuc2l0eTogMSwKCXdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwKCWhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LAoJZm9udFNpemU6IDE2LAoJcGx1Z2luczogW2hvb2tQbHVnaW5dLAp9KTsKCmNvbnN0IGxhYmVsTGF5ZXIgPSB0LmxheWVycy5hZGQoKTsKCnQuZHJhdygoKSA9PiB7Cgl0LmJhY2tncm91bmQoNiwgOCwgMjApOwp9KTsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCglkcmF3VGV4dCgnUExVR0lOUy5SRUdJU1RFUkxBWUVSUE9TVFJFTkRFUkhPT0snLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBMQVlFUiBQT1NULVJFTkRFUiBIT09LJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdSdW5zIGFmdGVyIGRyYXdpbmcgZnJhbWVidWZmZXJzLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoYElOVk9DQVRJT05TIDogJHtwb3N0UmVuZGVyQ291bnR9YCwgeCwgeSsrLCAxNDAsIDE5MCwgMjU1KTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
