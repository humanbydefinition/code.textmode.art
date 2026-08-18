---
layout: doc
editLink: false
title: FigTextColorResolver
description: Resolver for per-cell FIGlet colors.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-08-17
---

[textmode.figlet.js](../index.md) / FigTextColorResolver

# Type Alias: FigTextColorResolver

```ts
type FigTextColorResolver = 
  | FigTextColorValue
  | ((cell) => FigTextColorValue | undefined);
```

Resolver for per-cell FIGlet colors.

