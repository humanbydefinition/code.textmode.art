---
layout: doc
editLink: false
title: VideoQualityLevel
description: Qualitative video quality level matching Mediabunny's five native levels.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-08-24
---

[textmode.export.js](../index.md) / VideoQualityLevel

# Type Alias: VideoQualityLevel

```ts
type VideoQualityLevel = "very-low" | "low" | "medium" | "high" | "very-high";
```

Qualitative video quality level matching Mediabunny's five native levels.

Higher levels generally preserve more detail and produce larger, content-dependent files. Mediabunny may use
quantizer-based encoding or a codec-adjusted bitrate, depending on codec and browser support.

