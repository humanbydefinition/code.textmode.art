---
layout: doc
editLink: false
title: JSONSequenceExportOptions
description: Options for deterministic, fixed-rate JSON sequence capture.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-10-31
---

[textmode.export.js](../index.md) / JSONSequenceExportOptions

# Type Alias: JSONSequenceExportOptions

```ts
type JSONSequenceExportOptions = JSONExportOptions & object;
```

Options for deterministic, fixed-rate JSON sequence capture.

## Type Declaration

| Name | Type |
| ------ | ------ |
| `frameCount?` | `number` |
| `frameRate?` | `number` |
| `onProgress()?` | (`progress`) => `void` |
| `prepareFrame?` | `PrepareExportFrame` |
| `signal?` | `AbortSignal` |

