---
layout: doc
editLink: false
title: VideoExportProgress
description: Progress information emitted while a deterministic video is probed, captured, and written.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-10-31
---

[textmode.export.js](../index.md) / VideoExportProgress

# Type Alias: VideoExportProgress

```ts
type VideoExportProgress = object;
```

Progress information emitted while a deterministic video is probed, captured, and written.


## Properties

### codec?

```ts
codec?: VideoCodec;
```

Effective codec family selected after capability probing (`avc`, `vp9`, or `vp8`).


***

### codedHeight?

```ts
codedHeight?: number;
```

Effective coded height in pixels.


***

### codedWidth?

```ts
codedWidth?: number;
```

Effective coded width in pixels.


***

### frame?

```ts
frame?: number;
```

Alias for [frameIndex](#frameindex). Prefer this field in new code.


***

### frameIndex?

```ts
frameIndex?: number;
```

Number of frames captured so far.


***

### frameRate?

```ts
frameRate?: number;
```

Exact output frame rate passed to the muxer.


***

### message?

```ts
message?: string;
```

Optional status message for UI consumption.


***

### phase?

```ts
phase?: VideoExportPhase;
```

Current detailed phase. See [VideoExportPhase](VideoExportPhase.md) for current and compatibility-only values.


***

### progress?

```ts
progress?: number;
```

Normalized frame-capture completion ratio between `0` and `1`.

Final writing or muxing may still be in progress when this value reaches `1`.


***

### state

```ts
state: VideoRecordingState;
```

Current high-level export state.


***

### totalFrames?

```ts
totalFrames?: number;
```

Total number of frames planned for the recording.

