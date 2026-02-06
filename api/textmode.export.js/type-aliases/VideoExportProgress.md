---
title: VideoExportProgress
description: Progress information emitted during the video export process.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-02-06
---

[textmode.export.js](../index.md) / VideoExportProgress

# Type Alias: VideoExportProgress

```ts
type VideoExportProgress = object;
```

Progress information emitted during the video export process.

## Properties

### state

```ts
state: "idle" | "recording" | "encoding" | "completed" | "error";
```

Current state of the recording process.

***

### frameIndex?

```ts
optional frameIndex: number;
```

Number of frames that have been recorded so far.

***

### totalFrames?

```ts
optional totalFrames: number;
```

Total number of frames planned for the recording.

***

### message?

```ts
optional message: string;
```

Optional status message for UI consumption.
