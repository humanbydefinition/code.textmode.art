---
layout: doc
editLink: true
title: CharacterExtractor
description: Handles extraction of characters from font cmap tables. This class encapsulates the complex logic for reading different cmap table formats.
category: Classes
api: true
namespace: fonts
kind: Class
lastModified: 2026-04-19
hasConstructor: true
---

[textmode.js](../../../index.md) / [fonts](../index.md) / CharacterExtractor

# Class: CharacterExtractor

Handles extraction of characters from font cmap tables.
This class encapsulates the complex logic for reading different cmap table formats.

## Constructors

### Constructor

```ts
new CharacterExtractor(): CharacterExtractor;
```

#### Returns

`CharacterExtractor`

## Methods

### \_extractCharacters()

```ts
_extractCharacters(font): string[];
```

Extracts all available characters from a font's cmap tables.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `font` | [`TyprFont`](../interfaces/TyprFont.md) | The parsed font object from Typr |

#### Returns

`string`[]

Array of unique character strings
