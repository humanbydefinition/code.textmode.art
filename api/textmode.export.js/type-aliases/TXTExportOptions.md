---
title: TXTExportOptions
description: Options for exporting the textmode content to TXT format.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-02-06
---

[textmode.export.js](../index.md) / TXTExportOptions

# Type Alias: TXTExportOptions

```ts
type TXTExportOptions = object;
```

Options for exporting the textmode content to TXT format.

## Properties

### filename?

```ts
optional filename: string;
```

The filename to save the TXT file as. 

If not provided, a default filename is used.

***

### preserveTrailingSpaces?

```ts
optional preserveTrailingSpaces: boolean;
```

Whether to preserve trailing spaces on each line.

When `false`, trailing spaces are trimmed from each line.

Defaults to `false`.

***

### emptyCharacter?

```ts
optional emptyCharacter: string;
```

Character to use for empty cells *(when no character is rendered in it)*.
Defaults to space `' '`.
