---
layout: doc
editLink: false
title: getFontReference
description: Identify a loaded font once per immutable source and return an independent reference.
category: Functions
api: true
kind: Function
ecosystem: textmode.js
lastModified: 2026-10-31
---

[textmode.export.js](../index.md) / getFontReference

# Function: getFontReference()

```ts
function getFontReference(font): TextmodeDocumentFontReference;
```

Identify a loaded font once per immutable source and return an independent reference.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `font` | `TextmodeFont` |

## Returns

`TextmodeDocumentFontReference`


## Example

```ts
const reference = getFontReference(await t.loadFont('font.ttf'));
console.log(reference.id);
```
