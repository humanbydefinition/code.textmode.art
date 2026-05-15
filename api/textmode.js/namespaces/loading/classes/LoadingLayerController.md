---
layout: doc
editLink: true
title: LoadingLayerController
description: Controls the internal loading layer lifecycle and rendering behavior.
category: Classes
api: true
namespace: loading
kind: Class
lastModified: 2026-05-15
hasConstructor: false
---

[textmode.js](../../../index.md) / [loading](../index.md) / LoadingLayerController

# Class: LoadingLayerController

Controls the internal loading layer lifecycle and rendering behavior.

## Extends

- `InternalLayerController`\<[`LoadingScreenRendererContext`](../interfaces/LoadingScreenRendererContext.md)\>

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
| `callback?` | (`context`) => `void` | Custom draw callback that receives the rendering context. |

#### Returns

`void`

#### Inherited from

```ts
InternalLayerController.draw
```
