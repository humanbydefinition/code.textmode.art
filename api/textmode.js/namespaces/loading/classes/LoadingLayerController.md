---
layout: doc
editLink: true
title: LoadingLayerController
description: Controls the internal loading layer lifecycle and rendering behavior.
category: Classes
api: true
namespace: loading
kind: Class
lastModified: 2026-04-19
hasConstructor: false
---

[textmode.js](../../../index.md) / [loading](../index.md) / LoadingLayerController

# Class: LoadingLayerController

Controls the internal loading layer lifecycle and rendering behavior.

## Extends

- `InternalLayerController`\<[`LoadingScreenRendererContext`](../interfaces/LoadingScreenRendererContext.md)\>

## Properties

### \_isInitialized

```ts
_isInitialized: boolean = false;
```

#### Inherited from

```ts
InternalLayerController._isInitialized
```

***

### \_layer

```ts
_layer: TextmodeLayer;
```

#### Inherited from

```ts
InternalLayerController._layer
```

***

### \_state

```ts
_state: LoadingScreenState = 'active';
```

## Methods

### \_dispose()

```ts
_dispose(): void;
```

#### Returns

`void`

#### Inherited from

```ts
InternalLayerController._dispose
```

***

### draw()

```ts
draw(callback?): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback?` | (`context`) => `void` |

#### Returns

`void`

#### Inherited from

```ts
InternalLayerController.draw
```
