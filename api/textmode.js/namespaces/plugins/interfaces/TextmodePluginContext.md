---
layout: doc
editLink: false
title: TextmodePluginContext
description: Host facilities available while installing a plugin.
category: Interfaces
api: true
namespace: plugins
kind: Interface
lastModified: 2026-08-24
isInterface: true
---

[textmode.js](../../../index.md) / [plugins](../index.md) / TextmodePluginContext

# Interface: TextmodePluginContext

Host facilities available while installing a plugin.


## Methods

### defineExtension()

```ts
defineExtension<TTarget>(
   target, 
   propertyName, 
   descriptor): () => void;
```

Define one plugin-owned method or accessor on runtime objects.

#### Type Parameters

| Type Parameter |
| ------ |
| `TTarget` *extends* [`TextmodeExtensionTarget`](../type-aliases/TextmodeExtensionTarget.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | `TTarget` |
| `propertyName` | `string` |
| `descriptor` | [`TextmodeExtensionDescriptor`](TextmodeExtensionDescriptor.md)\<[`TextmodeExtensionInstance`](../type-aliases/TextmodeExtensionInstance.md)\<`TTarget`\>\> |

#### Returns

A function that removes the extension.

() => `void`

#### Example

```ts
context.defineExtension('textmodifier', 'effect', { value() {} });
```


***

### on()

```ts
on<K>(hook, callback): () => void;
```

Register a lifecycle hook or output transform.

Setup hooks may be asynchronous. Draw, layer, and output hooks must finish synchronously.
Callbacks run in plugin installation order and then registration order.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof [`TextmodePluginHookMap`](TextmodePluginHookMap.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hook` | `K` |
| `callback` | [`TextmodePluginHookMap`](TextmodePluginHookMap.md)\[`K`\] |

#### Returns

A function that unregisters the callback.

() => `void`

#### Example

```ts
context.on('postDraw', () => updateOverlay());
```

