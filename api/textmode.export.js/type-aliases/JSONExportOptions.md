---
layout: doc
editLink: false
title: JSONExportOptions
description: Options for exporting textmode content to JSON.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-10-31
---

[textmode.export.js](../index.md) / JSONExportOptions

# Type Alias: JSONExportOptions

```ts
type JSONExportOptions = LayerExportOptions & object;
```

Options for exporting textmode content to JSON.

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `colorMode?` | [`JSONExportColorMode`](JSONExportColorMode.md) | Foreground and background color representation. Defaults to `hex`. |
| `filename?` | `string` | Filename used by the download helper. A default name is used when omitted. |
| `includeMetadata?` | `boolean` | Include the creation timestamp and generator metadata. Defaults to `true`. |
| `pretty?` | `boolean` \| `number` | Pretty-print with two spaces when `true`, use the given indentation width when numeric, or produce compact JSON when `false`. Defaults to `true`. |
| `target?` | [`JSONExportTarget`](JSONExportTarget.md) | Export one selected layer or the complete layer stack. Defaults to `all`. When `selected`, uses the base layer if `layer` is omitted. |

