---
layout: doc
editLink: true
title: LoadingLayerController
description: Controls the internal loading layer lifecycle and rendering behavior.
category: Classes
api: true
namespace: loading
kind: Class
lastModified: 2026-04-07
hasConstructor: false
---

[textmode.js](../../../index.md) / [loading](../index.md) / LoadingLayerController

# Class: LoadingLayerController

Controls the internal loading layer lifecycle and rendering behavior.

## Extends

- `LayerController`\<[`LoadingScreenRendererContext`](../interfaces/LoadingScreenRendererContext.md)\>

## Properties

### \_isInitialized

```ts
_isInitialized: boolean = false;
```

#### Inherited from

```ts
LayerController._isInitialized
```

***

### \_layer

```ts
_layer: TextmodeLayer;
```

#### Inherited from

```ts
LayerController._layer
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
LayerController._dispose
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
LayerController.draw
```
