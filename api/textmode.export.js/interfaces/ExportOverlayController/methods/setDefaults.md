---
layout: doc
editLink: true
title: setDefaults
description: Override the curated overlay defaults at runtime.
category: Methods
api: true
owner: ExportOverlayController
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-25
---

[textmode.export.js](../../../index.md) / [ExportOverlayController](../../ExportOverlayController.md) / setDefaults

# Method: setDefaults()

```ts
setDefaults(patch): void;
```

Override the curated overlay defaults at runtime.

Merges the supplied patch into the internal defaults store. Per-format
option patches are pushed into mounted blades; top-level `format` updates
the overlay's selected export format immediately.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `patch` | [`ExportDefaultsPatch`](../../../type-aliases/ExportDefaultsPatch.md) | Partial defaults to merge per format. |

## Returns

`void`

## Example

```ts
// Select image export by default, set image scale to 2×, and GIF to 30 fps
t.exportOverlay.setDefaults({ format: 'image', image: { scale: 2 }, gif: { frameRate: 30 } });
```

