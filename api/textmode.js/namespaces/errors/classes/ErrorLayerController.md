---
layout: doc
editLink: true
title: ErrorLayerController
description: Controls the dedicated internal error layer lifecycle and rendering behavior.
category: Classes
api: true
namespace: errors
kind: Class
lastModified: 2026-04-23
hasConstructor: true
---

[textmode.js](../../../index.md) / [errors](../index.md) / ErrorLayerController

# Class: ErrorLayerController

Controls the dedicated internal error layer lifecycle and rendering behavior.

## Extends

- `InternalLayerController`\<`ErrorScreenRendererContext`\>

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

## Accessors

### \_shouldRender

#### Get Signature

```ts
get _shouldRender(): boolean;
```

Indicates whether the error layer should render this frame.

##### Returns

`boolean`

## Methods

### \_dispose()

```ts
_dispose(): void;
```

Dispose of the error layer controller and clean up resources.

#### Returns

`void`

#### Overrides

```ts
InternalLayerController._dispose
```

***

### \_initialize()

```ts
_initialize(): Promise<void>;
```

Initialize error layer resources.
Must be called after the renderer is ready.

#### Returns

`Promise`\<`void`\>

#### Overrides

```ts
InternalLayerController._initialize
```

***

### \_renderFrame()

```ts
_renderFrame(): void;
```

Render a single error layer frame.
Called by the main render loop when the error layer is active.

#### Returns

`void`

***

### \_setError()

```ts
_setError(error): void;
```

Set the current error payload and activate the error layer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `error` | `unknown` | Error object, string message, or unknown thrown payload. |

#### Returns

`void`

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
