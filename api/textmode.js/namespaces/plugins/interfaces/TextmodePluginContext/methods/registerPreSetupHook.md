---
layout: doc
editLink: true
title: registerPreSetupHook
description: Register a callback to be invoked before the user's setup callback runs. This happens after the Textmodifier and all layers are fully initialized, but before...
category: Methods
api: true
owner: TextmodePluginContext
namespace: plugins
kind: Method
lastModified: 2026-06-09
---

[textmode.js](../../../../../index.md) / [plugins](../../../index.md) / [TextmodePluginContext](../../TextmodePluginContext.md) / registerPreSetupHook

# Method: registerPreSetupHook()

```ts
registerPreSetupHook(callback): () => void;
```

Register a callback to be invoked before the user's setup callback runs.
This happens after the Textmodifier and all layers are fully initialized,
but before user code in `setup()` executes.
Useful for plugins that need to prepare resources or state before user setup.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`SetupLifecycleHook`](../../../type-aliases/SetupLifecycleHook.md) | The callback to invoke before setup. |

## Returns

A function to unregister the hook.

() => `void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="registerPreSetupHook" encoded-code="bGV0IHByZVNldHVwQ291bnRlciA9IDA7Cgpjb25zdCBob29rUGx1Z2luID0gewoJbmFtZTogJ3ByZS1zZXR1cC1ob29rLXBsdWdpbicsCglpbnN0YWxsKHRleHRtb2RpZmllciwgY29udGV4dCkgewoJCWNvbnRleHQucmVnaXN0ZXJQcmVTZXR1cEhvb2soKCkgPT4gewoJCQlwcmVTZXR1cENvdW50ZXIgKz0gMTsKCQl9KTsKCX0sCn07Cgpjb25zdCB0ID0gdGV4dG1vZGUuY3JlYXRlKHsKCXBpeGVsRGVuc2l0eTogMSwKCXdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwKCWhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LAoJZm9udFNpemU6IDE2LAoJcGx1Z2luczogW2hvb2tQbHVnaW5dLAp9KTsKCmNvbnN0IGxhYmVsTGF5ZXIgPSB0LmxheWVycy5hZGQoKTsKCnQuZHJhdygoKSA9PiB7Cgl0LmJhY2tncm91bmQoNiwgOCwgMjApOwp9KTsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCglkcmF3VGV4dCgnUExVR0lOUy5SRUdJU1RFUlBSRVNFVFVQSE9PSycsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IFBSRS1TRVRVUCBMSUZFQ1lDTEUgSE9PSycsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnUnVucyBhZnRlciBpbnN0YWxsLCBiZWZvcmUgc2V0dXAuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dChgSU5WT0NBVElPTlMgOiAke3ByZVNldHVwQ291bnRlcn1gLCB4LCB5KyssIDE0MCwgMTkwLCAyNTUpOwp9KTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />
