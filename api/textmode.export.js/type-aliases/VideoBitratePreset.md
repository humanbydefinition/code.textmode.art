---
layout: doc
editLink: false
title: VideoBitratePreset
description: Subjective bitrate preset used when an exact bits-per-second value is not supplied.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-08-22
---

[textmode.export.js](../index.md) / VideoBitratePreset

# Type Alias: VideoBitratePreset

```ts
type VideoBitratePreset = "low" | "medium" | "high" | "ultra";
```

Subjective bitrate preset used when an exact bits-per-second value is not supplied.

Higher presets request higher constant perceptual quality from Mediabunny. The `ultra` preset requests quantizer
zero with a frame-rate-aware bitrate fallback and should be described as near-lossless, never mathematically
lossless. For exact bitrate control, pass a numeric `bitrate` value in bits per second instead.

