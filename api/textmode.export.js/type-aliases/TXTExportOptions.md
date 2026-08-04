---
layout: doc
editLink: false
title: TXTExportOptions
description: Options for exporting the textmode content to TXT format.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-08-03
---

[textmode.export.js](../index.md) / TXTExportOptions

# Type Alias: TXTExportOptions

```ts
type TXTExportOptions = LayerExportOptions & object;
```

Options for exporting the textmode content to TXT format.

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `emptyCharacter?` | `string` | Character to use for empty cells *(when no character is rendered in it)*. Defaults to space `' '`. |
| `filename?` | `string` | The filename to save the TXT file as. If not provided, a default filename is used. |
| `preserveTrailingSpaces?` | `boolean` | Whether to preserve trailing spaces on each line. When `false`, trailing spaces are trimmed from each line. Defaults to `false`. |

