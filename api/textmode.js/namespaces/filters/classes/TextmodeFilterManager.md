---
layout: doc
editLink: true
title: TextmodeFilterManager
description: Registers filter shaders and applies layer/global filter chains.
category: Classes
api: true
namespace: filters
kind: Class
lastModified: 2026-06-08
hasConstructor: false
---

[textmode.js](../../../index.md) / [filters](../index.md) / TextmodeFilterManager

# Class: TextmodeFilterManager

Registers filter shaders and applies layer/global filter chains.

## Example

```ts
// Register a custom filter
await t.filters.register('brightness', brightnessShader, {
    u_amount: ['amount', 1.0]
});

// Use the filter globally
t.filter('brightness', 1.5);

// Or on a layer
t.layers.base.filter('brightness', { amount: 0.8 });
```

## Methods

| Method | Description |
| ------ | ------ |
| [has](TextmodeFilterManager/methods/has.md) | Check if a filter with the given ID is registered. |
| [register](TextmodeFilterManager/methods/register.md) | Register a custom filter with the given ID, shader, and uniform definitions. |
| [unregister](TextmodeFilterManager/methods/unregister.md) | Unregister a filter by its ID. |
