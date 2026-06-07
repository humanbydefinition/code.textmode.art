---
layout: doc
editLink: true
title: registerPostDrawHook
description: Register a callback to be invoked after each draw cycle. Happens outside of the draw framebuffer being bound after the final result is drawn to the screen.
category: Methods
api: true
owner: TextmodePluginContext
namespace: plugins
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../../../index.md) / [plugins](../../../index.md) / [TextmodePluginContext](../../TextmodePluginContext.md) / registerPostDrawHook

# Method: registerPostDrawHook()

```ts
registerPostDrawHook(callback): () => void;
```

Register a callback to be invoked after each draw cycle.
Happens outside of the draw framebuffer being bound after the final result is drawn to the screen.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | [`TextmodePluginHook`](../../../type-aliases/TextmodePluginHook.md) |

## Returns

A function to unregister the hook.

() => `void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="registerPostDrawHook" encoded-code="bGV0IHBvc3REcmF3Q291bnRlciA9IDA7Cgpjb25zdCBob29rUGx1Z2luID0gewoJbmFtZTogJ3Bvc3QtZHJhdy1ob29rLXBsdWdpbicsCglpbnN0YWxsKHRleHRtb2RpZmllciwgY29udGV4dCkgewoJCWNvbnRleHQucmVnaXN0ZXJQb3N0RHJhd0hvb2soKCkgPT4gewoJCQlwb3N0RHJhd0NvdW50ZXIgKz0gMTsKCQl9KTsKCX0sCn07Cgpjb25zdCB0ID0gdGV4dG1vZGUuY3JlYXRlKHsKCXBpeGVsRGVuc2l0eTogMSwKCXdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwKCWhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LAoJZm9udFNpemU6IDE2LAoJcGx1Z2luczogW2hvb2tQbHVnaW5dLAp9KTsKCmNvbnN0IGxhYmVsTGF5ZXIgPSB0LmxheWVycy5hZGQoKTsKCnQuZHJhdygoKSA9PiB7Cgl0LmJhY2tncm91bmQoNiwgOCwgMjApOwp9KTsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCglkcmF3VGV4dCgnUExVR0lOUy5SRUdJU1RFUlBPU1REUkFXSE9PSycsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IFBPU1QtRFJBVyBMSUZFQ1lDTEUgSE9PSycsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnUnVucyBlYWNoIGZyYW1lIGFmdGVyIHVzZXIgZHJhdygpLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoYElOVk9DQVRJT05TIDogJHtwb3N0RHJhd0NvdW50ZXJ9YCwgeCwgeSsrLCAxNDAsIDE5MCwgMjU1KTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
