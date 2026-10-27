---
layout: doc
editLink: false
title: ZIPExportOptions
description: Discriminated options for a deterministic ZIP frame-sequence export.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-10-27
---

[textmode.export.js](../index.md) / ZIPExportOptions

# Type Alias: ZIPExportOptions

```ts
type ZIPExportOptions = { [F in ZIPFrameFormat]: ZIPCaptureOptions & { format: F; frameOptions?: ZIPFrameOptionsMap[F] } }[ZIPFrameFormat];
```

Discriminated options for a deterministic ZIP frame-sequence export.

