---
layout: doc
editLink: false
title: VideoExportProgress
description: Progress information emitted during the video export process.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-08-03
---

[textmode.export.js](../index.md) / VideoExportProgress

# Type Alias: VideoExportProgress

```ts
type VideoExportProgress = object;
```

Progress information emitted during the video export process.


## Properties

### frame?

```ts
optional frame?: number;
```

Alias for [frameIndex](#frameindex). Prefer this field in new code.


***

### frameIndex?

```ts
optional frameIndex?: number;
```

Number of frames that have been recorded so far.


***

### message?

```ts
optional message?: string;
```

Optional status message for UI consumption.


***

### phase?

```ts
optional phase?: VideoExportPhase;
```

Current export phase for newer progress UIs.


***

### progress?

```ts
optional progress?: number;
```

Export completion ratio between `0` and `1`.


***

### state

```ts
state: VideoRecordingState;
```

Current state of the recording process.


***

### totalFrames?

```ts
optional totalFrames?: number;
```

Total number of frames planned for the recording.

