---
layout: doc
editLink: true
title: getDefaults
description: Read the current effective defaults for every format.
category: Methods
api: true
owner: ExportOverlayController
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.export.js](../../../index.md) / [ExportOverlayController](../../ExportOverlayController.md) / getDefaults

# Method: getDefaults()

```ts
getDefaults(): Readonly<ExportDefaults>;
```

Read the current effective defaults for every format.

The returned object reflects the library's curated defaults merged
with any runtime overrides applied via [setDefaults](setDefaults.md).

## Returns

`Readonly`\<[`ExportDefaults`](../../../type-aliases/ExportDefaults.md)\>

The current per-format defaults.

## Example

```ts
const defaults = t.exportOverlay.getDefaults();
console.log(defaults.image.scale); // 1 (or whatever was set)
```

