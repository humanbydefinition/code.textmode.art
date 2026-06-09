---
layout: doc
editLink: true
title: registerPostSetupHook
description: Register a callback to be invoked after the user's setup callback completes. This happens after user code in setup() has finished executing, but before the l...
category: Methods
api: true
owner: TextmodePluginContext
namespace: plugins
kind: Method
lastModified: 2026-06-09
---

[textmode.js](../../../../../index.md) / [plugins](../../../index.md) / [TextmodePluginContext](../../TextmodePluginContext.md) / registerPostSetupHook

# Method: registerPostSetupHook()

```ts
registerPostSetupHook(callback): () => void;
```

Register a callback to be invoked after the user's setup callback completes.
This happens after user code in `setup()` has finished executing,
but before the loading screen finishes and the main render loop begins.
Useful for plugins that need to finalize initialization after user setup.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`SetupLifecycleHook`](../../../type-aliases/SetupLifecycleHook.md) | The callback to invoke after setup. |

## Returns

A function to unregister the hook.

() => `void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="registerPostSetupHook" encoded-code="bGV0IHBvc3RTZXR1cENvdW50ZXIgPSAwOwoKY29uc3QgaG9va1BsdWdpbiA9IHsKCW5hbWU6ICdwb3N0LXNldHVwLWhvb2stcGx1Z2luJywKCWluc3RhbGwodGV4dG1vZGlmaWVyLCBjb250ZXh0KSB7CgkJY29udGV4dC5yZWdpc3RlclBvc3RTZXR1cEhvb2soKCkgPT4gewoJCQlwb3N0U2V0dXBDb3VudGVyICs9IDE7CgkJfSk7Cgl9LAp9OwoKY29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKCXBsdWdpbnM6IFtob29rUGx1Z2luXSwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDYsIDgsIDIwKTsKfSk7CgpmdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7Cgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKHIsIGcsIGIpOwoJdC5wcmludCh0ZXh0LCB4LCB5KTsKCXQucG9wKCk7Cn0KCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CgoJZHJhd1RleHQoJ1BMVUdJTlMuUkVHSVNURVJQT1NUU0VUVVBIT09LJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogUE9TVC1TRVRVUCBMSUZFQ1lDTEUgSE9PSycsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnUnVucyBpbW1lZGlhdGVseSBhZnRlciB1c2VyIHNldHVwLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoYElOVk9DQVRJT05TIDogJHtwb3N0U2V0dXBDb3VudGVyfWAsIHgsIHkrKywgMTQwLCAxOTAsIDI1NSk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
