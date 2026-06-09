---
layout: doc
editLink: true
title: VideoBitrateMode
description: Bitrate allocation strategy for the native encoder.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.export.js](../index.md) / VideoBitrateMode

# Type Alias: VideoBitrateMode

```ts
type VideoBitrateMode = "variable" | "constant";
```

Bitrate allocation strategy for the native encoder.

- `'variable'`: lets the encoder spend more bits on visually complex frames and fewer bits on simple frames.
  This is usually the best default for generative animations.
- `'constant'`: asks the encoder to keep the bitrate steadier throughout the export. This can make file size
  more predictable, but may waste bits on simple frames or reduce detail on complex frames.
