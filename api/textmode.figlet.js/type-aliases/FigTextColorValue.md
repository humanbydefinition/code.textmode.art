---
layout: doc
editLink: true
title: FigTextColorValue
description: Accepted color input for per-cell FIGlet styling.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-06-09
---

[textmode.figlet.js](../index.md) / FigTextColorValue

# Type Alias: FigTextColorValue

```ts
type FigTextColorValue = 
  | number
  | string
  | color.TextmodeColor
  | [number, number, number]
  | [number, number, number, number];
```

Accepted color input for per-cell FIGlet styling.
