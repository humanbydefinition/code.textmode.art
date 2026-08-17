---
layout: doc
editLink: false
title: VideoBitratePreset
description: Subjective bitrate preset used when an exact bits-per-second value is not supplied.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-08-17
---

[textmode.export.js](../index.md) / VideoBitratePreset

# Type Alias: VideoBitratePreset

```ts
type VideoBitratePreset = "low" | "medium" | "high";
```

Subjective bitrate preset used when an exact bits-per-second value is not supplied.

Higher presets produce larger files with more detail. Each preset maps to a fixed bits-per-pixel budget
(bits per pixel per second), so a given preset resolves to the same bitrate regardless of the export
frame rate. For exact control, pass a numeric `bitrate` value in bits per second instead.

