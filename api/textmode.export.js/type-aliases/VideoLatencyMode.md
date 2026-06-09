---
layout: doc
editLink: true
title: VideoLatencyMode
description: Encoder scheduling mode.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.export.js](../index.md) / VideoLatencyMode

# Type Alias: VideoLatencyMode

```ts
type VideoLatencyMode = "quality" | "realtime";
```

Encoder scheduling mode.

- `'quality'`: prioritizes complete, stable export output. Mediabunny notes that this mode prevents dropped frames.
- `'realtime'`: prioritizes low-latency encoding. It is intended for live streams and may drop frames when overloaded,
  so it is usually not recommended for frame-perfect exports.
