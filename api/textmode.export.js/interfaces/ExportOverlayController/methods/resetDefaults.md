---
layout: doc
editLink: true
title: resetDefaults
description: Restore one or all formats to the library's curated defaults.
category: Methods
api: true
owner: ExportOverlayController
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-25
---

[textmode.export.js](../../../index.md) / [ExportOverlayController](../../ExportOverlayController.md) / resetDefaults

# Method: resetDefaults()

```ts
resetDefaults(format?): void;
```

Restore one or all formats to the library's curated defaults.

If a format is specified, only that format is reset; otherwise all
formats are restored.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `format?` | keyof ExportDefaults | Optional format to reset. Omit to reset all. |

## Returns

`void`

## Example

```ts
// Reset image defaults
t.exportOverlay.resetDefaults('image');

// Reset the overlay's selected default export format
t.exportOverlay.resetDefaults('format');

// Reset all formats
t.exportOverlay.resetDefaults();
```

