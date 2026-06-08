---
layout: doc
editLink: true
title: TextmodeFilterUniformDefinitions
description: Uniform definitions used when registering custom filters with TextmodeFilterManager.register.
category: Type Aliases
api: true
namespace: filters
kind: TypeAlias
lastModified: 2026-06-08
---

[textmode.js](../../../index.md) / [filters](../index.md) / TextmodeFilterUniformDefinitions

# Type Alias: TextmodeFilterUniformDefinitions

```ts
type TextmodeFilterUniformDefinitions = Record<string, [string, unknown]>;
```

Uniform definitions used when registering custom filters with [TextmodeFilterManager.register](../classes/TextmodeFilterManager/methods/register.md).

Each key is the shader uniform name. Each value maps that uniform to a filter
parameter name and fallback value.
