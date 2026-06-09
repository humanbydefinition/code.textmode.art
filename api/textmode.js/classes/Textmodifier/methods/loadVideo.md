---
layout: doc
editLink: true
title: loadVideo
description: Load a video source that can be drawn with image.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-09
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / loadVideo

# Method: loadVideo()

```ts
loadVideo(src): Promise<TextmodeVideo>;
```

Load a video source that can be drawn with [image](image.md).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `src` | `string` | Video URL. |

## Returns

`Promise`\<[`TextmodeVideo`](../../../namespaces/media/classes/TextmodeVideo.md)\>

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="loadVideo" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgc291cmNlOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9Cgp0LnNldHVwKGFzeW5jICgpID0-IHsKCXNvdXJjZSA9IGF3YWl0IHQubG9hZFZpZGVvKCdodHRwczovL2ludGVyYWN0aXZlLWV4YW1wbGVzLm1kbi5tb3ppbGxhLm5ldC9tZWRpYS9jYzAtdmlkZW9zL2Zsb3dlci5tcDQnKTsKCXNvdXJjZS5wbGF5KCk7Cn0pOwoKdC5kcmF3KCgpID0-IHsKCXQuYmFja2dyb3VuZCgwKTsKCWlmIChzb3VyY2UpIHQuaW1hZ2Uoc291cmNlLCB0LmdyaWQuY29scywgdC5ncmlkLnJvd3MpOwp9KTsKCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CglkcmF3VGV4dCgnVEVYVE1PRElGSUVSLkxPQURWSURFTycsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IExPQUQgVklERU8nLCB4LCB5KyssIDEwMCwgMjIwLCAyNTUpOwoJZHJhd1RleHQoJ0xvYWRzIG1lZGlhIGZvciB0aGlzIGV4YW1wbGUuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCdIVUQgc3RheXMgb24gYSB0b3AgbGF5ZXIuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dChzb3VyY2UgPyAnVklERU86IFJFQURZJyA6ICdWSURFTzogV0FJVCcsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
