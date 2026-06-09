---
layout: doc
editLink: true
title: LoadingLayerController
description: Controls the internal loading layer lifecycle and rendering behavior.
category: Classes
api: true
namespace: loading
kind: Class
lastModified: 2026-06-09
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

Dispose of the internal layer.

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

Set a custom renderer for the internal layer.

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
