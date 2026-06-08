---
layout: doc
editLink: true
title: randomGaussian
description: Return a normally distributed random number.
category: Methods
api: true
owner: TextmodeRandom
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../index.md) / [TextmodeRandom](../../TextmodeRandom.md) / randomGaussian

# Method: randomGaussian()

```ts
randomGaussian(mean?, sd?): number;
```

Return a normally distributed random number.

Values cluster around `mean` with a standard deviation of `sd`. The sequence
is deterministic for a seed and shares state with [random](random.md).

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `mean` | `number` | `0` | Center of the distribution. Defaults to 0. |
| `sd` | `number` | `1` | Standard deviation. Defaults to 1. |

## Returns

`number`

Gaussian random number.

## Example

```ts
const rng = new TextmodeRandom('stars');
const offset = rng.randomGaussian(0, 2);
```
