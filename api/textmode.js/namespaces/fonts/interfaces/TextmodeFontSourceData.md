---
layout: doc
editLink: false
title: TextmodeFontSourceData
description: Immutable decoded SFNT source shared by layer-safe font copies.
category: Interfaces
api: true
namespace: fonts
kind: Interface
lastModified: 2026-10-31
isInterface: true
---

[textmode.js](../../../index.md) / [fonts](../index.md) / TextmodeFontSourceData

# Interface: TextmodeFontSourceData

Immutable decoded SFNT source shared by layer-safe font copies.

## Example

```ts
const source = t.layers.base.font.sourceData;
console.log(source.copyBytes().length);
```


## Methods

### copyBytes()

```ts
copyBytes(): Uint8Array;
```

Return a defensive copy of the complete decoded font file.

#### Returns

`Uint8Array`

#### Example

```ts
const bytes = font.sourceData.copyBytes();
bytes.fill(0); // The retained source is unchanged.
```

