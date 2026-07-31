---
layout: doc
editLink: true
title: ExportDefaults
description: Per-format default options used to seed the overlay UI inputs at mount time and after a ExportOverlayController.resetDefaults call.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.export.js](../index.md) / ExportDefaults

# Type Alias: ExportDefaults

```ts
type ExportDefaults = object;
```

Per-format default options used to seed the overlay UI inputs at mount time
and after a [ExportOverlayController.resetDefaults](../interfaces/ExportOverlayController/methods/resetDefaults.md) call.

Each sub-object contains the library-chosen defaults for the fields that
the overlay exposes.  Top-level `format` controls which export format is
selected in the overlay. You can read and override them at runtime via
[ExportOverlayController.getDefaults](../interfaces/ExportOverlayController/methods/getDefaults.md) and
[ExportOverlayController.setDefaults](../interfaces/ExportOverlayController/methods/setDefaults.md).


## Properties

### format

```ts
format: "txt" | "json" | "image" | "gif" | "video" | "svg";
```

Export format selected by default in the overlay.


***

### txt

```ts
txt: TXTOverlayDefaults;
```

***

### json

```ts
json: JSONOverlayDefaults;
```

***

### image

```ts
image: ImageOverlayDefaults;
```

***

### svg

```ts
svg: SVGOverlayDefaults;
```

***

### gif

```ts
gif: GIFOverlayDefaults;
```

***

### video

```ts
video: VideoOverlayDefaults;
```
