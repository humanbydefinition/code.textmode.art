---
layout: doc
editLink: true
title: saveVideo
description: Captures a video and saves it to disk *('mp4' by default)*.
category: Methods
api: true
owner: TextmodeExportAPI
kind: Method
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.export.js](../../../index.md) / [TextmodeExportAPI](../../TextmodeExportAPI.md) / saveVideo

# Method: saveVideo()

```ts
saveVideo(options?): Promise<void>;
```

Captures a video and saves it to disk *(`'mp4'` by default)*.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`VideoExportOptions`](../../../type-aliases/VideoExportOptions.md) | Export options. |

## Returns

`Promise`\<`void`\>

## Example

```ts
await t.saveVideo({ frameCount: 240, frameRate: 60, filename: 'capture' });
await t.saveVideo({
    format: 'webm',
    bitrate: 'high',
    bitrateMode: 'variable',
    latencyMode: 'quality',
    keyFrameInterval: 2,
    frameCount: 240,
    filename: 'capture',
});
```
