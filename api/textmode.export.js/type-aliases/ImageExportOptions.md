---
title: ImageExportOptions
description: Options for exporting the textmode content to image format.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-02-06
---

[textmode.export.js](../index.md) / ImageExportOptions

# Type Alias: ImageExportOptions

```ts
type ImageExportOptions = object;
```

Options for exporting the textmode content to image format.

## Properties

### filename?

```ts
optional filename: string;
```

Target filename without extension. Defaults to an auto-generated value.

***

### format?

```ts
optional format: "png" | "jpg" | "webp";
```

The image format to export *(`'png'`, `'jpg'`, or `'webp'`)*. Defaults to `'png'`.

***

### scale?

```ts
optional scale: number;
```

Scale factor for the output image.

`1.0` = original size, `2.0` = double size, `0.5` = half size.

Defaults to `1.0`.
