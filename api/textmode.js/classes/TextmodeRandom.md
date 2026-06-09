---
layout: doc
editLink: true
title: TextmodeRandom
description: A deterministic pseudo-random number generator for textmode sketches.
category: Classes
api: true
kind: Class
lastModified: 2026-06-09
hasConstructor: true
---

[textmode.js](../index.md) / TextmodeRandom

# Class: TextmodeRandom

A deterministic pseudo-random number generator for textmode sketches.

`TextmodeRandom` uses the stable `textmode-v1` generator. It is designed for
reproducible creative-coding output, not for cryptography or security-sensitive values.

## Constructors

### Constructor

```ts
new TextmodeRandom(seed?): TextmodeRandom;
```

Create a deterministic random generator.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `seed` | `string` \| `number` | Seed used to initialize the generator. When omitted, a non-deterministic seed is chosen. |

#### Returns

`TextmodeRandom`

## Methods

### random()

#### Call Signature

```ts
random(): number;
```

Return a random number from 0 up to, but not including, 1.

##### Returns

`number`

Random number in the range [0, 1).

##### Example

```ts
const rng = new TextmodeRandom('glyphs');
const value = rng.random();
```

#### Call Signature

```ts
random(max): number;
```

Return a random number from 0 up to, but not including, `max`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `max` | `number` | Upper bound, exclusive. |

##### Returns

`number`

Random number in the range [0, max).

##### Example

```ts
const rng = new TextmodeRandom('columns');
const column = rng.random(80);
```

#### Call Signature

```ts
random(min, max): number;
```

Return a random number from `min` up to, but not including, `max`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `min` | `number` | Lower bound, inclusive. |
| `max` | `number` | Upper bound, exclusive. |

##### Returns

`number`

Random number in the range [min, max).

##### Example

```ts
const rng = new TextmodeRandom('offsets');
const offset = rng.random(-4, 4);
```

#### Call Signature

```ts
random<T>(choices): T | undefined;
```

Return a random element from an array.

##### Type Parameters

| Type Parameter |
| ------ |
| `T` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `choices` | readonly `T`[] | Values to choose from. |

##### Returns

`T` \| `undefined`

A random array element, or `undefined` when the array is empty.

##### Example

```ts
const rng = new TextmodeRandom('characters');
const character = rng.random(['A', 'B', 'C']);
```

***

### randomGaussian()

```ts
randomGaussian(mean?, sd?): number;
```

Return a normally distributed random number.

Values cluster around `mean` with a standard deviation of `sd`. The sequence
is deterministic for a seed and shares state with [random](#random).

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `mean` | `number` | `0` | Center of the distribution. Defaults to 0. |
| `sd` | `number` | `1` | Standard deviation. Defaults to 1. |

#### Returns

`number`

Gaussian random number.

#### Example

```ts
const rng = new TextmodeRandom('stars');
const offset = rng.randomGaussian(0, 2);
```

***

### randomSeed()

```ts
randomSeed(seed): void;
```

Reset this generator to a seed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `seed` | `string` \| `number` | Seed used to restart the sequence. |

#### Returns

`void`

#### Example

```ts
const rng = new TextmodeRandom('first');
rng.randomSeed('second');
```
