---
layout: doc
editLink: true
title: VideoExportOptions
description: Options for exporting the textmode content to video format.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.export.js](../index.md) / VideoExportOptions

# Type Alias: VideoExportOptions

```ts
type VideoExportOptions = object;
```

Options for exporting the textmode content to video format.

## Properties

### filename?

```ts
optional filename?: string;
```

Target filename without extension. Defaults to an auto-generated value.

***

### format?

```ts
optional format?: VideoExportFormat;
```

Video container format. Defaults to `'mp4'`.

***

### frameCount?

```ts
optional frameCount?: number;
```

Desired total number of frames to capture. Defaults to `300`.

***

### frameRate?

```ts
optional frameRate?: number;
```

Target frame rate for the export, in frames per second. Defaults to `60`.

***

### bitrate?

```ts
optional bitrate?: number | VideoBitratePreset;
```

Target bitrate in bits per second or a bitrate preset. Defaults to `'medium'`.

Bitrate controls how much encoded data is available per second of video. Higher values can preserve more detail
in noisy or fast-changing sketches, but create larger files. Presets are resolved from the export dimensions and
frame rate; numeric values are passed directly to the encoder.

***

### bitrateMode?

```ts
optional bitrateMode?: VideoBitrateMode;
```

Encoder bitrate allocation mode. Defaults to `'variable'`.

Use `'variable'` for most exports so simple frames can compress efficiently and complex frames can receive more
bits. Use `'constant'` only when a steadier data rate is more important than compression efficiency.

***

### latencyMode?

```ts
optional latencyMode?: VideoLatencyMode;
```

Encoder latency mode. Defaults to `'quality'`.

Use `'quality'` for deterministic exports; it prioritizes completed output and avoids dropped frames. Use
`'realtime'` only for low-latency use cases where dropped frames are acceptable.

***

### hardwareAcceleration?

```ts
optional hardwareAcceleration?: VideoHardwareAcceleration;
```

WebCodecs hardware acceleration hint. Defaults to `'no-preference'`.

Browsers may ignore this hint. `'prefer-hardware'` can be faster on supported devices; `'prefer-software'` can be
more predictable but slower. `'no-preference'` lets the browser choose.

***

### keyFrameInterval?

```ts
optional keyFrameInterval?: number;
```

Key frame interval in seconds. Defaults to `2`.

Key frames are independently decodable frames used for seeking and recovery. Shorter intervals improve seeking
responsiveness but increase file size. Longer intervals can shrink files but make seeking less precise.
Use `0` to request every frame as a key frame.

***

### pixelDensity?

```ts
optional pixelDensity?: number;
```

Pixel density used during export. Defaults to `1` so video dimensions match the live canvas.

***

### signal?

```ts
optional signal?: AbortSignal;
```

Abort signal for cancelling an in-progress export.

***

### transparent?

```ts
optional transparent?: boolean;
```

When true, attempts to preserve alpha data in WebM recordings. MP4 exports reject this option.

***

### onProgress?

```ts
optional onProgress?: (progress) => void;
```

Progress callback invoked throughout the recording lifecycle.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `progress` | [`VideoExportProgress`](VideoExportProgress.md) |

#### Returns

`void`

***

### debugLogging?

```ts
optional debugLogging?: boolean;
```

Enables verbose logging. Defaults to `false`.
