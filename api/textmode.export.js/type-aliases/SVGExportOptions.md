---
title: SVGExportOptions
description: Options for exporting the textmode content to SVG format.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-02-06
---

[textmode.export.js](../index.md) / SVGExportOptions

# Type Alias: SVGExportOptions

```ts
type SVGExportOptions = object;
```

Options for exporting the textmode content to SVG format.

## Properties

### filename?

```ts
optional filename: string;
```

The filename to save the SVG file as. 

If not provided, a default filename is used.

***

### includeBackgroundRectangles?

```ts
optional includeBackgroundRectangles: boolean;
```

Whether to include cell background rectangles in the SVG output.

When `false`, only the character paths are included.

Defaults to `true`.

***

### drawMode?

```ts
optional drawMode: "fill" | "stroke";
```

The drawing mode for ASCII characters.

When set to `'fill'`, characters are rendered as filled shapes.

When set to `'stroke'`, characters are rendered as outlines.

Defaults to `'fill'`.

***

### strokeWidth?

```ts
optional strokeWidth: number;
```

The stroke width to use when drawMode is set to `'stroke'`.

Defaults to `1.0`.
