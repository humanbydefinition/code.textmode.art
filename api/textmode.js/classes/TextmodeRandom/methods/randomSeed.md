---
layout: doc
editLink: true
title: randomSeed
description: Reset this generator to a seed.
category: Methods
api: true
owner: TextmodeRandom
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../index.md) / [TextmodeRandom](../../TextmodeRandom.md) / randomSeed

# Method: randomSeed()

```ts
randomSeed(seed): void;
```

Reset this generator to a seed.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `seed` | `string` \| `number` | Seed used to restart the sequence. |

## Returns

`void`

## Example

```ts
const rng = new TextmodeRandom('first');
rng.randomSeed('second');
```
