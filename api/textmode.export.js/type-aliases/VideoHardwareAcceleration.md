---
layout: doc
editLink: true
title: VideoHardwareAcceleration
description: WebCodecs hardware acceleration preference.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.export.js](../index.md) / VideoHardwareAcceleration

# Type Alias: VideoHardwareAcceleration

```ts
type VideoHardwareAcceleration = "no-preference" | "prefer-hardware" | "prefer-software";
```

WebCodecs hardware acceleration preference.

This is a browser hint rather than a guarantee:
- `'no-preference'`: let the browser choose the best available encoder.
- `'prefer-hardware'`: prefer GPU/ASIC encoding when available, often faster and more power-efficient, but codec
  availability and output characteristics vary by device.
- `'prefer-software'`: prefer CPU encoding, often more consistent across machines, but usually slower.
