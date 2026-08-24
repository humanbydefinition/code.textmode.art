---
layout: doc
editLink: false
title: transform
description: Apply a registered transform by name with explicit arguments.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-08-24
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / transform

# Method: transform()

```ts
transform(name, ...args): this;
```

Apply a registered transform by name with explicit arguments.

This is the typed escape hatch for dynamic extension code that does not
want to augment the instance interface. It uses the same runtime lookup
and chain-recording implementation as injected chain methods.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Public transform name (must be registered) |
| ...`args` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md)[] | Arguments resolved against the declared inputs |

## Returns

`this`

The SynthSource for chaining

## Example

```js
source.transform('duotone', [0.02, 0.04, 0.12], [1, 0.4, 0.1]);
```

