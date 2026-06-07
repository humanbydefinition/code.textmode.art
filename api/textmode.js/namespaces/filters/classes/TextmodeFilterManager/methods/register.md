---
layout: doc
editLink: true
title: register
description: Register a custom filter with the given ID, shader, and uniform definitions.
category: Methods
api: true
owner: TextmodeFilterManager
namespace: filters
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../../../index.md) / [filters](../../../index.md) / [TextmodeFilterManager](../../TextmodeFilterManager.md) / register

# Method: register()

```ts
register(
   id, 
   shader, 
uniformDefs?): Promise<void>;
```

Register a custom filter with the given ID, shader, and uniform definitions.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | Unique filter identifier |
| `shader` | `string` \| [`TextmodeShader`](../../../../../classes/TextmodeShader.md) | Pre-compiled GLShader, fragment shader source string, or path to a .frag/.glsl file |
| `uniformDefs` | [`TextmodeFilterUniformDefinitions`](../../../type-aliases/TextmodeFilterUniformDefinitions.md) | Maps uniform names to [paramName, defaultValue] tuples |

## Returns

`Promise`\<`void`\>

## Example

```ts
// Register with inline shader source
await t.filters.register('blur', blurFragSource, {
    u_radius: ['radius', 5.0],
    u_direction: ['direction', [1.0, 0.0]]
});

// Register with file path
await t.filters.register('vignette', './vignette.frag', {
    u_intensity: ['intensity', 0.5]
});
```
