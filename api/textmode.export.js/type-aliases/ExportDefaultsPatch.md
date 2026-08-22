---
layout: doc
editLink: false
title: ExportDefaultsPatch
description: Partial patch accepted by ExportOverlayController.setDefaults.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-08-22
---

[textmode.export.js](../index.md) / ExportDefaultsPatch

# Type Alias: ExportDefaultsPatch

```ts
type ExportDefaultsPatch = object & { [K in Exclude<keyof ExportDefaults, "format">]?: Partial<ExportDefaults[K]> };
```

Partial patch accepted by [ExportOverlayController.setDefaults](../interfaces/ExportOverlayController.md#setdefaults).

Every supplied per-format sub-object is deep-merged into the corresponding
format's curated defaults. Top-level `format` changes the overlay's selected
format. Omitted keys keep their current value.

## Type Declaration

| Name | Type |
| ------ | ------ |
| `format?` | [`ExportDefaults`](ExportDefaults.md)\[`"format"`\] |

## Example

```ts
t.exportOverlay.setDefaults({ format: 'image', image: { scale: 2 }, gif: { frameRate: 30 } });
```

