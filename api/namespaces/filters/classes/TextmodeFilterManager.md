---
layout: doc
editLink: true
title: TextmodeFilterManager
description: Manages filter registration, shader compilation, and filter chain application.
category: Classes
api: true
namespace: filters
kind: Class
lastModified: 2026-02-01
hasConstructor: false
---

[textmode.js](../../../index.md) / [filters](../index.md) / TextmodeFilterManager

# Class: TextmodeFilterManager

Manages filter registration, shader compilation, and filter chain application.

Used both for layer-level filters and global post-processing filters.

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

### has()

```ts
has(id): boolean;
```

Check if a filter with the given ID is registered.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The filter ID to check |

#### Returns

`boolean`

true if the filter exists

***

### register()

```ts
register(
   id, 
   shader, 
uniformDefs): Promise<void>;
```

Register a custom filter with the given ID, shader, and uniform definitions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | Unique filter identifier |
| `shader` | `string` \| [`TextmodeShader`](../../../classes/TextmodeShader.md) | Pre-compiled GLShader, fragment shader source string, or path to a .frag/.glsl file |
| `uniformDefs` | `Record`\<`string`, \[`string`, `UniformValue`\]\> | Maps uniform names to [paramName, defaultValue] tuples |

#### Returns

`Promise`\<`void`\>

#### Example

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

***

### unregister()

```ts
unregister(id): boolean;
```

Unregister a filter by its ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The filter ID to unregister |

#### Returns

`boolean`

true if the filter was unregistered, false if it wasn't found
