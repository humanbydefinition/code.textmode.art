---
layout: doc
editLink: true
title: LoadingLayerController
description: Controls the internal loading layer lifecycle and rendering behavior.
category: Classes
api: true
namespace: loading
kind: Class
lastModified: 2026-04-23
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

Indicates whether the internal layer has been initialized and is ready for rendering.
Prevents rendering and resource access before the layer is fully set up.

#### Inherited from

```ts
InternalLayerController._isInitialized
```

***

### \_layer

```ts
_layer: TextmodeLayer;
```

The internal layer instance managed by this controller.
Guaranteed to be initialized and available after the controller's `_initialize` method resolves.

#### Inherited from

```ts
InternalLayerController._layer
```

## Methods

### \_dispose()

```ts
_dispose(): void;
```

Disposes of the internal layer and its resources.

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

Overridable method to set a custom draw callback for rendering the internal layer.
If not set, the layer will use the default template.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback?` | (`context`) => `void` |  |

#### Returns

`void`

#### Inherited from

```ts
InternalLayerController.draw
```
