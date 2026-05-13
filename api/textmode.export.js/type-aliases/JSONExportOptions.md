---
layout: doc
editLink: true
title: JSONExportOptions
description: Options for exporting the textmode content to JSON format.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-05-13
---

[textmode.export.js](../index.md) / JSONExportOptions

# Type Alias: JSONExportOptions

```ts
type JSONExportOptions = object;
```

Options for exporting the textmode content to JSON format.

## Properties

### filename?

```ts
optional filename?: string;
```

The filename to save the JSON file as.

If not provided, a default filename is used.

***

### pretty?

```ts
optional pretty?: boolean | number;
```

Pretty-print the generated JSON.

When set to `true`, output uses two-space indentation.
When set to a number, that value is used as indentation width.
When `false`, the output is minified.

Defaults to `true`.

***

### colorMode?

```ts
optional colorMode?: JSONExportColorMode;
```

Color representation used for foreground and background values.

Defaults to `'hex'`.

***

### includeMetadata?

```ts
optional includeMetadata?: boolean;
```

Whether to include export metadata such as timestamp and generator details.

Defaults to `true`.
