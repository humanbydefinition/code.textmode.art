---
layout: doc
editLink: true
title: uninstall
description: Called when the plugin is uninstalled from a Textmodifier instance.
category: Methods
api: true
owner: TextmodePlugin
namespace: plugins
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../../../index.md) / [plugins](../../../index.md) / [TextmodePlugin](../../TextmodePlugin.md) / uninstall

# Method: uninstall()

```ts
optional uninstall(textmodifier, context): void | Promise<void>;
```

Called when the plugin is uninstalled from a [Textmodifier](../../../../../classes/Textmodifier.md) instance.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `textmodifier` | [`Textmodifier`](../../../../../classes/Textmodifier.md) | The Textmodifier instance the plugin is being uninstalled from. |
| `context` | [`TextmodePluginContext`](../../TextmodePluginContext.md) | A host-provided context exposing the Textmodifier runtime and plugin hook registration methods. |

## Returns

`void` \| `Promise`\<`void`\>

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="uninstall" encoded-code="bGV0IHVuaW5zdGFsbGVkID0gZmFsc2U7Cgpjb25zdCBteVBsdWdpbiA9IHsKCW5hbWU6ICd1bmluc3RhbGwtcGx1Z2luJywKCWluc3RhbGwodGV4dG1vZGlmaWVyLCBjb250ZXh0KSB7fSwKCXVuaW5zdGFsbCh0ZXh0bW9kaWZpZXIsIGNvbnRleHQpIHsKCQl1bmluc3RhbGxlZCA9IHRydWU7Cgl9LAp9OwoKY29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKCXBsdWdpbnM6IFtteVBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKdC5kcmF3KCgpID0-IHsKCXQuYmFja2dyb3VuZCg2LCA4LCAyMCk7Cn0pOwoKdC5tb3VzZUNsaWNrZWQoKCkgPT4gewoJaWYgKHVuaW5zdGFsbGVkKSByZXR1cm47Cgl0LmRlc3Ryb3koKTsKCWRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0KCQknPGRpdiBzdHlsZT0icGFkZGluZzogMjRweDsgY29sb3I6ICNlNGU0ZTc7IGJhY2tncm91bmQ6ICMwOTA5MGI7IG1pbi1oZWlnaHQ6IDEwMHZoOyI-cGx1Z2luLnVuaW5zdGFsbCgpIGV4ZWN1dGVkIHN1Y2Nlc3NmdWxseS48L2Rpdj4nOwp9KTsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCglkcmF3VGV4dCgnUExVR0lOUy5VTklOU1RBTEwnLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBQTFVHSU4gQ0xFQU5VUCBIT09LJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdFeGVjdXRlcyB3aGVuIHRoZSBza2V0Y2ggaXMgZGVzdHJveWVkLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQodW5pbnN0YWxsZWQgPyAnU3RhdHVzOiBDbGVhbmVkIFVwJyA6ICdTdGF0dXM6IEFjdGl2ZSAoQ2xpY2sgdG8gdW5pbnN0YWxsKScsIHgsIHkrKywgMTQwLCAxOTAsIDI1NSk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
