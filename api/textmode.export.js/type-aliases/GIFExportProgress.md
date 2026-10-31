---
layout: doc
editLink: false
title: GIFExportProgress
description: Progress information emitted while deterministic frames are captured and encoded as an animated GIF.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-10-31
---

[textmode.export.js](../index.md) / GIFExportProgress

# Type Alias: GIFExportProgress

```ts
type GIFExportProgress = object;
```

Progress information emitted while deterministic frames are captured and encoded as an animated GIF.


## Properties

### frameIndex?

```ts
frameIndex?: number;
```

Number of frames captured so far.


***

### message?

```ts
message?: string;
```

Optional status message for UI consumption.


***

### state

```ts
state: "idle" | "recording" | "encoding" | "completed" | "error";
```

Current GIF capture or encoding state.


***

### totalFrames?

```ts
totalFrames?: number;
```

Total number of frames planned for the recording.

