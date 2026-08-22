---
layout: doc
editLink: false
title: ExportDefaults
description: Per-format default options used to seed the overlay UI inputs at mount time and after a ExportOverlayController.resetDefaults call.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-08-22
---

[textmode.export.js](../index.md) / ExportDefaults

# Type Alias: ExportDefaults

```ts
type ExportDefaults = object;
```

Per-format default options used to seed the overlay UI inputs at mount time
and after a [ExportOverlayController.resetDefaults](../interfaces/ExportOverlayController.md#resetdefaults) call.

Each sub-object contains the library-chosen defaults for the fields that
the overlay exposes.  Top-level `format` controls which export format is
selected in the overlay. You can read and override them at runtime via
[ExportOverlayController.getDefaults](../interfaces/ExportOverlayController.md#getdefaults) and
[ExportOverlayController.setDefaults](../interfaces/ExportOverlayController.md#setdefaults).


## Properties

### format

```ts
format: "txt" | "json" | "image" | "gif" | "video" | "svg";
```

Export format selected by default in the overlay.


***

### gif

```ts
gif: GIFOverlayDefaults;
```

***

### image

```ts
image: ImageOverlayDefaults;
```

***

### json

```ts
json: JSONOverlayDefaults;
```

***

### svg

```ts
svg: SVGOverlayDefaults;
```

***

### txt

```ts
txt: TXTOverlayDefaults;
```

***

### video

```ts
video: VideoOverlayDefaults;
```
