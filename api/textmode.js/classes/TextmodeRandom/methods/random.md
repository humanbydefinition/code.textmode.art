---
layout: doc
editLink: true
title: random
description: Return a random number from 0 up to, but not including, 1.
category: Methods
api: true
owner: TextmodeRandom
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../index.md) / [TextmodeRandom](../../TextmodeRandom.md) / random

# Method: random()

## Call Signature

```ts
random(): number;
```

Return a random number from 0 up to, but not including, 1.

### Returns

`number`

Random number in the range [0, 1).

### Example

```ts
const rng = new TextmodeRandom('glyphs');
const value = rng.random();
```

## Call Signature

```ts
random(max): number;
```

Return a random number from 0 up to, but not including, `max`.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `max` | `number` | Upper bound, exclusive. |

### Returns

`number`

Random number in the range [0, max).

### Example

```ts
const rng = new TextmodeRandom('columns');
const column = rng.random(80);
```

## Call Signature

```ts
random(min, max): number;
```

Return a random number from `min` up to, but not including, `max`.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `min` | `number` | Lower bound, inclusive. |
| `max` | `number` | Upper bound, exclusive. |

### Returns

`number`

Random number in the range [min, max).

### Example

```ts
const rng = new TextmodeRandom('offsets');
const offset = rng.random(-4, 4);
```

## Call Signature

```ts
random<T>(choices): T | undefined;
```

Return a random element from an array.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `choices` | readonly `T`[] | Values to choose from. |

### Returns

`T` \| `undefined`

A random array element, or `undefined` when the array is empty.

### Example

```ts
const rng = new TextmodeRandom('characters');
const character = rng.random(['A', 'B', 'C']);
```
