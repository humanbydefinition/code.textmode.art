---
layout: doc
editLink: true
title: setup
description: Set the setup callback that runs once initialization is complete.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-09
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / setup

# Method: setup()

```ts
setup(callback): Promise<void>;
```

Set the setup callback that runs once initialization is complete.

This callback is called after font loading and grid initialization, allowing access to
properties like `textmodifier.grid.cols` for calculating layout or setup variables.

The callback can be asynchronous (return a Promise).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` \| `Promise`\<`void`\> | Function to run after setup is complete. |

## Returns

`Promise`\<`void`\>

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="setup" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgc2VlZCA9IDA7CgpmdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7Cgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKHIsIGcsIGIpOwoJdC5wcmludCh0ZXh0LCB4LCB5KTsKCXQucG9wKCk7Cn0KCnQuc2V0dXAoKCkgPT4gewoJc2VlZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OSk7Cn0pOwoKdC5kcmF3KCgpID0-IHsKCXQuYmFja2dyb3VuZCg2LCAxMCwgMjIpOwoJY29uc3QgdGltZSA9IHQuZnJhbWVDb3VudCAqIDAuMDM7Cglmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykgewoJCXQucHVzaCgpOwoJCXQudHJhbnNsYXRlKE1hdGguY29zKHRpbWUgKyBpKSAqIDEyLCBNYXRoLnNpbih0aW1lICsgaSkgKiA2KTsKCQl0LmNoYXIoU3RyaW5nKChzZWVkICsgaSkgJSAxMCkpOwoJCXQuY2hhckNvbG9yKDEyMCArIGkgKiAxMiwgMjIwLCAyNTUgLSBpICogMTApOwoJCXQucG9pbnQoKTsKCQl0LnBvcCgpOwoJfQp9KTsKCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CglkcmF3VGV4dCgnVEVYVE1PRElGSUVSLlNFVFVQJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogT05FLVRJTUUgSU5JVCcsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnc2V0dXAoKSBydW5zIGJlZm9yZSBkcmF3aW5nLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnU2VlZCBpcyBjcmVhdGVkIG9uY2UuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dChgU0VFRDogJHtzZWVkfWAsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
