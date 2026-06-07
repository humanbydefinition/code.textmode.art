---
layout: doc
editLink: true
title: loadImage
description: Load an image source that can be drawn with image.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / loadImage

# Method: loadImage()

```ts
loadImage(src): Promise<TextmodeImage>;
```

Load an image source that can be drawn with [image](image.md).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `src` | `string` | Image URL. |

## Returns

`Promise`\<[`TextmodeImage`](../../../namespaces/media/classes/TextmodeImage.md)\>

The loaded TextmodeImage.

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="loadImage" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgc291cmNlOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9Cgp0LnNldHVwKGFzeW5jICgpID0-IHsKCXNvdXJjZSA9IGF3YWl0IHQubG9hZEltYWdlKCdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwNjkwNTkyNTM0Ni0yMWJkYTRkMzJkZjQ_dz00MDAmcT04MCcpOwoJc291cmNlLmNoYXJhY3RlcnMoJyAuOi09KyojJUAnKTsKfSk7Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDApOwoJaWYgKHNvdXJjZSkgdC5pbWFnZShzb3VyY2UsIHQuZ3JpZC5jb2xzLCB0LmdyaWQucm93cyk7Cn0pOwoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCWRyYXdUZXh0KCdURVhUTU9ESUZJRVIuTE9BRElNQUdFJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogTE9BRCBJTUFHRScsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnTG9hZHMgbWVkaWEgZm9yIHRoaXMgZXhhbXBsZS4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJ0hVRCBzdGF5cyBvbiBhIHRvcCBsYXllci4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KHNvdXJjZSA_ICdJTUFHRTogUkVBRFknIDogJ0lNQUdFOiBXQUlUJywgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
