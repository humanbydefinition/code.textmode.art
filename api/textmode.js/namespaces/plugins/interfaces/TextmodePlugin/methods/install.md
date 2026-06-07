---
layout: doc
editLink: true
title: install
description: Called when the plugin is installed on a Textmodifier instance.
category: Methods
api: true
owner: TextmodePlugin
namespace: plugins
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../../../index.md) / [plugins](../../../index.md) / [TextmodePlugin](../../TextmodePlugin.md) / install

# Method: install()

```ts
install(textmodifier, context): void | Promise<void>;
```

Called when the plugin is installed on a [Textmodifier](../../../../../classes/Textmodifier.md) instance.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `textmodifier` | [`Textmodifier`](../../../../../classes/Textmodifier.md) | The Textmodifier instance the plugin is being installed on. |
| `context` | [`TextmodePluginContext`](../../TextmodePluginContext.md) | A host-provided context exposing the Textmodifier runtime and plugin hook registration methods. |

## Returns

`void` \| `Promise`\<`void`\>

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="install" encoded-code="bGV0IGluc3RhbGxlZCA9IGZhbHNlOwpsZXQgaW5zdGFsbFRpbWUgPSAnJzsKCmNvbnN0IG15UGx1Z2luID0gewoJbmFtZTogJ2luc3RhbGwtcGx1Z2luJywKCWluc3RhbGwodGV4dG1vZGlmaWVyLCBjb250ZXh0KSB7CgkJaW5zdGFsbGVkID0gdHJ1ZTsKCQlpbnN0YWxsVGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7Cgl9LAp9OwoKY29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKCXBsdWdpbnM6IFtteVBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKdC5kcmF3KCgpID0-IHsKCXQuYmFja2dyb3VuZCg2LCA4LCAyMCk7Cn0pOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KCdQTFVHSU5TLklOU1RBTEwnLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBQTFVHSU4gSU5JVElBTElaQVRJT04gSE9PSycsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnUnVucyBvbiB0ZXh0bW9kZSBpbnN0YW5jZSBjcmVhdGlvbi4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KGBJTlNUQUxMRUQgOiAke2luc3RhbGxlZH1gLCB4LCB5KyssIDE0MCwgMTkwLCAyNTUpOwoJZHJhd1RleHQoYFRSSUdHRVJFRCA6ICR7aW5zdGFsbFRpbWV9YCwgeCwgeSsrLCAxNDAsIDE5MCwgMjU1KTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
