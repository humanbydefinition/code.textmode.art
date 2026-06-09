---
layout: doc
editLink: true
title: TextmodePlugin
description: A plugin interface for extending the functionality of a Textmodifier instance.
category: Interfaces
api: true
namespace: plugins
kind: Interface
lastModified: 2026-06-09
isInterface: true
---

[textmode.js](../../../index.md) / [plugins](../index.md) / TextmodePlugin

# Interface: TextmodePlugin

A plugin interface for extending the functionality of a [Textmodifier](../../../classes/Textmodifier.md) instance.

Create plugins by implementing this interface.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-name"></a> `name` | `string` | Unique name for the plugin. |
| <a id="property-version"></a> `version?` | `string` | Version string for the plugin. |

## Methods

### install()

```ts
install(textmodifier, context): void | Promise<void>;
```

Called when the plugin is installed on a [Textmodifier](../../../classes/Textmodifier.md) instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `textmodifier` | [`Textmodifier`](../../../classes/Textmodifier.md) | The Textmodifier instance the plugin is being installed on. |
| `context` | [`TextmodePluginContext`](TextmodePluginContext.md) | A host-provided context exposing the Textmodifier runtime and plugin hook registration methods. |

#### Returns

`void` \| `Promise`\<`void`\>

#### Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="TextmodePlugin" encoded-code="bGV0IGluc3RhbGxlZCA9IGZhbHNlOwpsZXQgaW5zdGFsbFRpbWUgPSAnJzsKCmNvbnN0IG15UGx1Z2luID0gewoJbmFtZTogJ2luc3RhbGwtcGx1Z2luJywKCWluc3RhbGwodGV4dG1vZGlmaWVyLCBjb250ZXh0KSB7CgkJaW5zdGFsbGVkID0gdHJ1ZTsKCQlpbnN0YWxsVGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7Cgl9LAp9OwoKY29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKCXBsdWdpbnM6IFtteVBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKdC5kcmF3KCgpID0-IHsKCXQuYmFja2dyb3VuZCg2LCA4LCAyMCk7Cn0pOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KCdQTFVHSU5TLklOU1RBTEwnLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBQTFVHSU4gSU5JVElBTElaQVRJT04gSE9PSycsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnUnVucyBvbiB0ZXh0bW9kZSBpbnN0YW5jZSBjcmVhdGlvbi4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KGBJTlNUQUxMRUQgOiAke2luc3RhbGxlZH1gLCB4LCB5KyssIDE0MCwgMTkwLCAyNTUpOwoJZHJhd1RleHQoYFRSSUdHRVJFRCA6ICR7aW5zdGFsbFRpbWV9YCwgeCwgeSsrLCAxNDAsIDE5MCwgMjU1KTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />

***

### uninstall()?

```ts
optional uninstall(textmodifier, context): void | Promise<void>;
```

Called when the plugin is uninstalled from a [Textmodifier](../../../classes/Textmodifier.md) instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `textmodifier` | [`Textmodifier`](../../../classes/Textmodifier.md) | The Textmodifier instance the plugin is being uninstalled from. |
| `context` | [`TextmodePluginContext`](TextmodePluginContext.md) | A host-provided context exposing the Textmodifier runtime and plugin hook registration methods. |

#### Returns

`void` \| `Promise`\<`void`\>

#### Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="TextmodePlugin" encoded-code="bGV0IHVuaW5zdGFsbGVkID0gZmFsc2U7Cgpjb25zdCBteVBsdWdpbiA9IHsKCW5hbWU6ICd1bmluc3RhbGwtcGx1Z2luJywKCWluc3RhbGwodGV4dG1vZGlmaWVyLCBjb250ZXh0KSB7fSwKCXVuaW5zdGFsbCh0ZXh0bW9kaWZpZXIsIGNvbnRleHQpIHsKCQl1bmluc3RhbGxlZCA9IHRydWU7Cgl9LAp9OwoKY29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKCXBsdWdpbnM6IFtteVBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKdC5kcmF3KCgpID0-IHsKCXQuYmFja2dyb3VuZCg2LCA4LCAyMCk7Cn0pOwoKdC5tb3VzZUNsaWNrZWQoKCkgPT4gewoJaWYgKHVuaW5zdGFsbGVkKSByZXR1cm47Cgl0LmRlc3Ryb3koKTsKCWRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0KCQknPGRpdiBzdHlsZT0icGFkZGluZzogMjRweDsgY29sb3I6ICNlNGU0ZTc7IGJhY2tncm91bmQ6ICMwOTA5MGI7IG1pbi1oZWlnaHQ6IDEwMHZoOyI-cGx1Z2luLnVuaW5zdGFsbCgpIGV4ZWN1dGVkIHN1Y2Nlc3NmdWxseS48L2Rpdj4nOwp9KTsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCglkcmF3VGV4dCgnUExVR0lOUy5VTklOU1RBTEwnLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBQTFVHSU4gQ0xFQU5VUCBIT09LJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdFeGVjdXRlcyB3aGVuIHRoZSBza2V0Y2ggaXMgZGVzdHJveWVkLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQodW5pbnN0YWxsZWQgPyAnU3RhdHVzOiBDbGVhbmVkIFVwJyA6ICdTdGF0dXM6IEFjdGl2ZSAoQ2xpY2sgdG8gdW5pbnN0YWxsKScsIHgsIHkrKywgMTQwLCAxOTAsIDI1NSk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
