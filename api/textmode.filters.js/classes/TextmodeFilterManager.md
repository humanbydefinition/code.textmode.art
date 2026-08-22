---
layout: doc
editLink: false
title: TextmodeFilterManager
description: Owns filter registration, queues, GPU resources, pass execution, and cleanup.
category: Classes
api: true
kind: Class
ecosystem: textmode.js
lastModified: 2026-08-22
hasConstructor: false
---

[textmode.filters.js](../index.md) / TextmodeFilterManager

# Class: TextmodeFilterManager

Owns filter registration, queues, GPU resources, pass execution, and cleanup.


## Methods

### has()

```ts
has(id): boolean;
```

Return whether a filter name is currently registered.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | [`FilterName`](../type-aliases/FilterName.md) |

#### Returns

`boolean`

#### Example

```ts
if (t.filters.has('duotone')) t.filter('duotone');
```


***

### register()

```ts
register(
   id, 
   shader, 
uniforms?): Promise<void>;
```

Register or replace a custom filter. String sources and URLs compile before the returned promise resolves.
Caller-provided shaders are owned by the manager and disposed on replacement, unregister, or plugin uninstall.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | [`FilterName`](../type-aliases/FilterName.md) |
| `shader` | [`TextmodeFilterShader`](../type-aliases/TextmodeFilterShader.md) |
| `uniforms` | [`TextmodeFilterUniformDefinitions`](../type-aliases/TextmodeFilterUniformDefinitions.md) |

#### Returns

`Promise`\<`void`\>

#### Example

```ts
await t.filters.register('duotone', fragmentSource, { u_amount: ['amount', 1] });
```


***

### unregister()

```ts
unregister(id): boolean;
```

Unregister a filter and dispose its compiled shader.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | [`FilterName`](../type-aliases/FilterName.md) |

#### Returns

`boolean`

#### Example

```ts
t.filters.unregister('duotone');
```

