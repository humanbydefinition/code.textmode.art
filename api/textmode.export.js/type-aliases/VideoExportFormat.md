---
layout: doc
editLink: false
title: VideoExportFormat
description: Video container format produced by saveVideo() and toVideoBlob().
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-08-24
---

[textmode.export.js](../index.md) / VideoExportFormat

# Type Alias: VideoExportFormat

```ts
type VideoExportFormat = "webm" | "mp4";
```

Video container format produced by `saveVideo()` and `toVideoBlob()`.

MP4 uses AVC/H.264 and requires even coded dimensions. WebM selects VP9 when available and falls back to VP8; it
is the only format that can be requested with transparency.

