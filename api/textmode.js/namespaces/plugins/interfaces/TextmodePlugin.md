---
layout: doc
editLink: false
title: TextmodePlugin
description: A plugin interface for extending the functionality of a Textmodifier instance.
category: Interfaces
api: true
namespace: plugins
kind: Interface
lastModified: 2026-08-22
isInterface: true
---

[textmode.js](../../../index.md) / [plugins](../index.md) / TextmodePlugin

# Interface: TextmodePlugin

A plugin interface for extending the functionality of a [Textmodifier](../../../classes/Textmodifier.md) instance.

Create plugins by implementing this interface.


## Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| <a id="property-name"></a> `name` | `readonly` | `string` | Unique name for the plugin. |

## Methods

### install()

```ts
install(textmodifier, context): void | (() => void);
```

Called when the plugin is installed on a [Textmodifier](../../../classes/Textmodifier.md) instance.

Installation must finish synchronously; awaited work belongs in the `preSetup` hook.
Register hooks and extensions through [TextmodePluginContext](TextmodePluginContext.md). Resources the plugin
allocates for itself are released by the returned cleanup function, which the host stores
and invokes exactly once during rollback or teardown.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `textmodifier` | [`Textmodifier`](../../../classes/Textmodifier.md) | The Textmodifier instance the plugin is being installed on. |
| `context` | [`TextmodePluginContext`](TextmodePluginContext.md) | A host-provided context exposing the Textmodifier runtime and plugin hook registration methods. |

#### Returns

`void` \| (() => `void`)

An optional cleanup function that releases the plugin's own resources.

#### Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="TextmodePlugin" encoded-code="bGV0IGlzSW5zdGFsbGVkID0gZmFsc2U7CmxldCBjb3JlRW5lcmd5ID0gMDsKCmNvbnN0IHF1YW50dW1QbHVnaW4gPSB7CgluYW1lOiAncXVhbnR1bS1jb3JlJywKCWluc3RhbGwodGV4dG1vZGlmaWVyKSB7CgkJaXNJbnN0YWxsZWQgPSB0cnVlOwoJCWNvcmVFbmVyZ3kgPSAxLjA7CgkJcmV0dXJuICgpID0-IHsKCQkJaXNJbnN0YWxsZWQgPSBmYWxzZTsKCQkJY29yZUVuZXJneSA9IDA7CgkJfTsKCX0sCn07Cgpjb25zdCB0ID0gdGV4dG1vZGUuY3JlYXRlKHsKCXdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwKCWhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LAoJZm9udFNpemU6IDE2LAoJcGx1Z2luczogW3F1YW50dW1QbHVnaW5dLAp9KTsKCmNvbnN0IGxhYmVsTGF5ZXIgPSB0LmxheWVycy5hZGQoKTsKCnQuZHJhdygoKSA9PiB7Cgl0LmJhY2tncm91bmQoNiwgOCwgMjIpOwoJY29uc3QgY29scyA9IHQuZ3JpZC5jb2xzOwoJY29uc3Qgcm93cyA9IHQuZ3JpZC5yb3dzOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKChjb2xzIC0gMSkgLyAyKTsKCWNvbnN0IHJpZ2h0ID0gbGVmdCArIGNvbHMgLSAxOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3Iocm93cyAvIDIpOwoJY29uc3QgYm90dG9tID0gdG9wICsgcm93cyAtIDE7Cgljb25zdCB0bSA9IHQuZnJhbWVDb3VudCAqIDAuMDU7CgoJZm9yIChsZXQgeSA9IHRvcDsgeSA8PSBib3R0b207IHkrKykgewoJCWZvciAobGV0IHggPSBsZWZ0OyB4IDw9IHJpZ2h0OyB4KyspIHsKCQkJY29uc3QgZGlzdCA9IE1hdGguaHlwb3QoeCwgeSk7CgkJCWNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMih5LCB4KTsKCQkJY29uc3Qgc3BpcmFsID0gTWF0aC5zaW4oZGlzdCAqIDAuMyAtIGFuZ2xlICogMyArIHRtICogMik7CgkJCWNvbnN0IG5vcm0gPSAoc3BpcmFsICsgMSkgKiAwLjU7CgoJCQljb25zdCBjaGFyS2V5ID0gZGlzdCA8IDMgPyAnQCcgOiBkaXN0IDwgOCA_ICcjJyA6IG5vcm0gPiAwLjYgPyAnKicgOiBub3JtID4gMC4zID8gJysnIDogJy4nOwoKCQkJdC5wdXNoKCk7CgkJCXQudHJhbnNsYXRlKHgsIHkpOwoJCQl0LmNoYXJDb2xvcigKCQkJCWlzSW5zdGFsbGVkID8gTWF0aC5mbG9vcigxMDAgKyBub3JtICogMTU1KSA6IDgwLAoJCQkJaXNJbnN0YWxsZWQgPyBNYXRoLmZsb29yKDE4MCArIG5vcm0gKiA3NSkgOiA4MCwKCQkJCWlzSW5zdGFsbGVkID8gTWF0aC5mbG9vcigyNTUgLSBkaXN0ICogOCkgOiA4MAoJCQkpOwoJCQl0LmNlbGxDb2xvcigKCQkJCWlzSW5zdGFsbGVkID8gTWF0aC5mbG9vcig4ICsgbm9ybSAqIDE2KSA6IDQsCgkJCQlpc0luc3RhbGxlZCA_IE1hdGguZmxvb3IoMTQgKyBub3JtICogMjApIDogNCwKCQkJCWlzSW5zdGFsbGVkID8gTWF0aC5mbG9vcigzMiArIG5vcm0gKiAyNCkgOiA4CgkJCSk7CgkJCXQuY2hhcihjaGFyS2V5KTsKCQkJdC5wb2ludCgpOwoJCQl0LnBvcCgpOwoJCX0KCX0KfSk7CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IoMTIwLCAyNDAsIDE4MCk7Cgl0LnByaW50KCdQTFVHSU5TLlRFWFRNT0RFUExVR0lOLklOU1RBTEwnLCB4LCB5KyspOwoJdC5jaGFyQ29sb3IoNzAsIDEwMCwgMTQwKTsKCXQucHJpbnQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKyk7Cgl0LmNoYXJDb2xvcigxNDAsIDIxMCwgMjU1KTsKCXQucHJpbnQoJ0NPTkNFUFQ6IE5FVVJBTCBNQVRSSVggQ09SRSBJR05JVElPTicsIHgsIHkrKyk7Cgl0LmNoYXJDb2xvcigxNDAsIDE2MCwgMTkwKTsKCXQucHJpbnQoJ2luc3RhbGwodCwgY29udGV4dCkgaW5pdGlhbGl6ZXMgc3RhdGUnLCB4LCB5KyspOwoJdC5wcmludCgnYW5kIHJldHVybnMgYSBjbGVhbnVwIGZ1bmN0aW9uJywgeCwgeSsrKTsKCXQucHJpbnQoJ2NhbGxlZCBvbmNlIG9uIGRlc3Ryb3kuJywgeCwgeSsrKTsKCXQuY2hhckNvbG9yKDcwLCAxMDAsIDE0MCk7Cgl0LnByaW50KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyspOwoJdC5jaGFyQ29sb3IoMTQwLCAyNTUsIDIwMCk7Cgl0LnByaW50KGBQTFVHSU4gSU5TVEFMTEVEOiAke2lzSW5zdGFsbGVkfWAsIHgsIHkrKyk7Cgl0LnByaW50KGBDT1JFIEVORVJHWTogJHsoY29yZUVuZXJneSAqIDEwMCkudG9GaXhlZCgwKX0lYCwgeCwgeSsrKTsKCXQucG9wKCk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />

