---
layout: doc
editLink: true
title: ErrorLayerController
description: Controls the dedicated internal error layer lifecycle and rendering behavior.
category: Classes
api: true
namespace: errors
kind: Class
lastModified: 2026-05-27
hasConstructor: true
---

[textmode.js](../../../index.md) / [errors](../index.md) / ErrorLayerController

# Class: ErrorLayerController

Controls the dedicated internal error layer lifecycle and rendering behavior.

## Extends

- `InternalLayerController`\<[`ErrorScreenRendererContext`](../interfaces/ErrorScreenRendererContext.md)\>

## Constructors

### Constructor

```ts
new ErrorLayerController(textmodifier): ErrorLayerController;
```

Create an internal error-layer controller.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `textmodifier` | [`Textmodifier`](../../../classes/Textmodifier.md) | Textmodifier instance to render on. |

#### Returns

`ErrorLayerController`

#### Overrides

```ts
InternalLayerController<ErrorScreenRendererContext>.constructor
```

## Methods

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
