---
layout: doc
editLink: true
title: constructor
description: Create a deterministic random generator.
category: Constructors
api: true
owner: TextmodeRandom
kind: Constructor
lastModified: 2026-06-08
---

[textmode.js](../../../index.md) / [TextmodeRandom](../../TextmodeRandom.md) / constructor

# Constructor: constructor()

# Constructor

```ts
new TextmodeRandom(seed?): TextmodeRandom;
```

Create a deterministic random generator.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `seed` | `string` \| `number` | Seed used to initialize the generator. When omitted, a non-deterministic seed is chosen. |

## Returns

[`TextmodeRandom`](../../TextmodeRandom.md)
