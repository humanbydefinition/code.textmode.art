---
layout: doc
editLink: false
title: VideoExportPhase
description: Detailed phase information for progress UIs that distinguish capability probing, frame capture, and output.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-08-24
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
  | "writing"
  | "finalizing";
```

Detailed phase information for progress UIs that distinguish capability probing, frame capture, and output.

Current exports emit `probing`, `capturing`, and either `writing` for streamed file-system output or `finalizing`
for buffered output. `rendering`, `encoding`, and `draining` remain available for compatibility with older progress
producers.

