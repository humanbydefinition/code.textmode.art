---
layout: doc
editLink: true
title: VideoExportPhase
description: More granular phase information for progress UIs that need to distinguish setup, rendering, and finalization.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-08-01
---

[textmode.export.js](../index.md) / VideoExportPhase

# Type Alias: VideoExportPhase

```ts
type VideoExportPhase = 
  | "probing"
  | "rendering"
  | "capturing"
  | "encoding"
  | "draining"
  | "finalizing";
```

More granular phase information for progress UIs that need to distinguish setup, rendering, and finalization.

`rendering` is retained for 1.5.x compatibility. Current deterministic video capture emits `capturing`.

