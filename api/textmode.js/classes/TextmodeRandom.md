---
layout: doc
editLink: true
title: TextmodeRandom
description: A deterministic pseudo-random number generator for textmode sketches.
category: Classes
api: true
kind: Class
lastModified: 2026-06-07
hasConstructor: true
---

[textmode.js](../index.md) / TextmodeRandom

# Class: TextmodeRandom

A deterministic pseudo-random number generator for textmode sketches.

`TextmodeRandom` uses the stable `textmode-v1` generator. It is designed for
reproducible creative-coding output, not for cryptography or security-sensitive values.

## Constructors

| Constructor | Description |
| ------ | ------ |
| [constructor](TextmodeRandom/constructors/constructor.md) | Create a deterministic random generator. |

## Methods

| Method | Description |
| ------ | ------ |
| [random](TextmodeRandom/methods/random.md) | Return a random number from 0 up to, but not including, 1. |
| [randomGaussian](TextmodeRandom/methods/randomGaussian.md) | Return a normally distributed random number. |
| [randomSeed](TextmodeRandom/methods/randomSeed.md) | Reset this generator to a seed. |
