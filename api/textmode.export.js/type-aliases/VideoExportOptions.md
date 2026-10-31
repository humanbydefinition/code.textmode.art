---
layout: doc
editLink: false
title: VideoExportOptions
description: Options for capturing deterministic textmode frames as MP4 or WebM video.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-10-31
---

[textmode.export.js](../index.md) / VideoExportOptions

# Type Alias: VideoExportOptions

```ts
type VideoExportOptions = object;
```

Options for capturing deterministic textmode frames as MP4 or WebM video.


## Properties

### debugLogging?

```ts
debugLogging?: boolean;
```

Enables verbose logging. Defaults to `false`.


***

### destination?

```ts
destination?: VideoSaveDestination;
```

Save destination used by `saveVideo()`. Defaults to `'download'`.

`'file-system'` opens a save picker and streams directly to the selected file when the File System Access API is
available. `toVideoBlob()` always returns an in-memory blob and does not use this setting.


***

### filename?

```ts
filename?: string;
```

Target filename without extension. Defaults to an auto-generated value.


***

### format?

```ts
format?: VideoExportFormat;
```

Video container format. Defaults to `'mp4'`.


***

### frameCount?

```ts
frameCount?: number;
```

Desired total number of frames to capture. Defaults to `300`.


***

### frameRate?

```ts
frameRate?: number;
```

Target frame rate for the export, in frames per second. Defaults to `60`.


***

### hardwareAcceleration?

```ts
hardwareAcceleration?: VideoHardwareAcceleration;
```

WebCodecs hardware acceleration hint. Defaults to `'no-preference'`.

Browsers may ignore this hint. `'prefer-hardware'` can be faster on supported devices; `'prefer-software'` can be
more predictable but slower. `'no-preference'` lets the browser choose.


***

### keyFrameInterval?

```ts
keyFrameInterval?: number;
```

Key frame interval in seconds. Defaults to `2`.

Key frames are independently decodable frames used for seeking and recovery. Shorter intervals improve seeking
responsiveness but increase file size. Longer intervals can shrink files but make seeking less precise.
Use `0` to request every frame as a key frame.


***

### onProgress?

```ts
onProgress?: (progress) => void;
```

Progress callback invoked throughout the recording lifecycle.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `progress` | [`VideoExportProgress`](VideoExportProgress.md) |

#### Returns

`void`


***

### pixelDensity?

```ts
pixelDensity?: number;
```

Pixel density used during export. Defaults to `1` so video dimensions match the logical canvas size.


***

### prepareFrame?

```ts
prepareFrame?: PrepareExportFrame;
```

Prepares external media before each deterministic frame is redrawn.


***

### quality?

```ts
quality?: VideoQuality;
```

Video quality policy. Defaults to `'medium'`.

Named levels map one-to-one to Mediabunny's qualitative levels and produce content-dependent file sizes. Use the
object form to request a positive target bitrate in bits per second and an optional bitrate mode.


***

### signal?

```ts
signal?: AbortSignal;
```

Abort signal for cancelling an in-progress export.


***

### transparent?

```ts
transparent?: boolean;
```

When `true`, attempts to preserve alpha data in WebM recordings. MP4 exports reject this option.

