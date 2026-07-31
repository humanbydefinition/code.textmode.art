---
layout: doc
editLink: true
title: getPosition
description: Reads the current export overlay placement.
category: Methods
api: true
owner: ExportOverlayController
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.export.js](../../../index.md) / [ExportOverlayController](../../ExportOverlayController.md) / getPosition

# Method: getPosition()

```ts
getPosition(): Readonly<ExportOverlayPosition>;
```

Reads the current export overlay placement.

## Returns

`Readonly`\<[`ExportOverlayPosition`](../../ExportOverlayPosition.md)\>

The current canvas-relative overlay placement state.

## Example

```ts
const position = t.exportOverlay.getPosition();
console.log(position.mode, position.offsetX, position.offsetY);
```

