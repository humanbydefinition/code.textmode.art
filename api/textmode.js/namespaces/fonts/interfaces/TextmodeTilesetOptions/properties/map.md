---
layout: doc
editLink: true
title: map
description: Optional explicit character mapping as a .char URL/path, inline grid string, or array of row strings. When omitted, tiles are assigned sequentially starting ...
category: Properties
api: true
owner: TextmodeTilesetOptions
namespace: fonts
kind: Property
lastModified: 2026-06-08
---

[textmode.js](../../../../../index.md) / [fonts](../../../index.md) / [TextmodeTilesetOptions](../../TextmodeTilesetOptions.md) / map

# Property: map

```ts
optional map?: string | string[] | URL;
```

Optional explicit character mapping as a .char URL/path, inline grid string, or array of row strings.
When omitted, tiles are assigned sequentially starting at space (`32`).
