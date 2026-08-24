---
layout: doc
editLink: false
title: VideoSaveDestination
description: Destination policy used by saveVideo().
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-08-24
---

[textmode.export.js](../index.md) / VideoSaveDestination

# Type Alias: VideoSaveDestination

```ts
type VideoSaveDestination = "download" | "file-system";
```

Destination policy used by `saveVideo()`.

- `'download'` is the default. The complete video is buffered in memory before a browser download begins.
- `'file-system'` opens the browser's save picker and streams encoded chunks directly to the selected file. It
  requires the File System Access API and rejects with `VIDEO_EXPORT_UNSUPPORTED` when that API is unavailable.

This setting does not affect `toVideoBlob()`, which always returns an in-memory `Blob`.

