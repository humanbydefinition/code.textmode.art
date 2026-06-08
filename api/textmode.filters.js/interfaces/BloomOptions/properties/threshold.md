---
layout: doc
editLink: true
title: threshold
description: Brightness level above which pixels will glow.
category: Properties
api: true
owner: BloomOptions
kind: Property
ecosystem: textmode.js
lastModified: 2026-06-08
---

[textmode.filters.js](../../../index.md) / [BloomOptions](../../BloomOptions.md) / threshold

# Property: threshold

```ts
threshold: number;
```

Brightness level above which pixels will glow.

- `0.0` = everything glows
- `0.5` = mid-brightness and above glows (default)
- `1.0` = only the brightest pixels glow

## Default

```ts
0.5
```
