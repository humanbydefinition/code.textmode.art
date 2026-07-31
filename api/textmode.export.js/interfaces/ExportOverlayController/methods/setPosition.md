---
layout: doc
editLink: true
title: setPosition
description: Moves the export overlay to a custom canvas-relative placement and remembers that placement for future sessions on the same origin.
category: Methods
api: true
owner: ExportOverlayController
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.export.js](../../../index.md) / [ExportOverlayController](../../ExportOverlayController.md) / setPosition

# Method: setPosition()

```ts
setPosition(position): void;
```

Moves the export overlay to a custom canvas-relative placement and
remembers that placement for future sessions on the same origin.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `position` | [`ExportOverlayPositionInput`](../../ExportOverlayPositionInput.md) | Canvas-relative overlay offsets in CSS pixels. |

## Returns

`void`

## Example

```ts
t.exportOverlay.setPosition({ offsetX: 24, offsetY: 24 });
```

