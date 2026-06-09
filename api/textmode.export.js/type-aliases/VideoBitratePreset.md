---
layout: doc
editLink: true
title: VideoBitratePreset
description: Subjective bitrate preset used when an exact bits-per-second value is not supplied.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.export.js](../index.md) / VideoBitratePreset

# Type Alias: VideoBitratePreset

```ts
type VideoBitratePreset = "low" | "medium" | "high";
```

Subjective bitrate preset used when an exact bits-per-second value is not supplied.

Higher presets produce larger files with more detail. For exact control, pass a numeric
`bitrate` value in bits per second instead.
