---
layout: doc
editLink: true
title: ErrorLayerController
description: Controls the dedicated internal error layer lifecycle and rendering behavior.
category: Classes
api: true
namespace: errors
kind: Class
lastModified: 2026-05-15
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

Initializes a new ErrorLayerController.

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
