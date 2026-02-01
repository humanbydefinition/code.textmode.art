---
layout: doc
editLink: true
title: TextmodePluginAPI
description: An extended API provided to plugins when they are installed on a Textmodifier instance.
category: Interfaces
api: true
namespace: plugins
kind: Interface
lastModified: 2026-02-01
isInterface: true
---

[textmode.js](../../../index.md) / [plugins](../index.md) / TextmodePluginAPI

# Interface: TextmodePluginAPI

An extended API provided to plugins when they are installed on a [Textmodifier](../../../classes/Textmodifier.md) instance.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="asciiframebuffer"></a> `asciiFramebuffer` | [`TextmodeFramebuffer`](../../../classes/TextmodeFramebuffer.md) | The framebuffer containing the ASCII representation (from base layer).<br/> This framebuffer only has a single render target. |
| <a id="canvas"></a> `canvas` | `TextmodeCanvas` | The canvas used by the Textmodifier instance. |
| <a id="drawframebuffer"></a> `drawFramebuffer` | [`TextmodeFramebuffer`](../../../classes/TextmodeFramebuffer.md) | The framebuffer the user draws to with 3 render targets (from base layer). |
| <a id="font"></a> `font` | [`TextmodeFont`](../../loadables/classes/TextmodeFont.md) | The font used by the Textmodifier instance (from base layer). |
| <a id="grid"></a> `grid` | [`TextmodeGrid`](../../../classes/TextmodeGrid.md) | The grid used by the Textmodifier instance (from base layer). |
| <a id="layermanager"></a> `layerManager` | [`TextmodeLayerManager`](../../layering/classes/TextmodeLayerManager.md) | The layer manager for accessing and managing all layers. |
| <a id="renderer"></a> `renderer` | `GLRenderer` | The WebGL renderer used by the Textmodifier instance. |

## Methods

### extendLayer()

```ts
extendLayer<TArgs, TReturn>(methodName, implementation): void;
```

Extend TextmodeLayer instances with a new method.
The method will be available on all existing and future layer instances.

#### Type Parameters

| Type Parameter |
| ------ |
| `TArgs` *extends* `unknown`[] |
| `TReturn` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `methodName` | `string` | The name of the method to add. |
| `implementation` | (`this`, ...`args`) => `TReturn` | The implementation function. `this` will be bound to the TextmodeLayer instance. |

#### Returns

`void`

#### Example

```ts
api.extendLayer('synth', function(source: SynthSource) {
  // `this` is the TextmodeLayer instance
  this.setPluginState('synth', { source, compiled: compile(source) });
});
```

***

### registerLayerDisposedHook()

```ts
registerLayerDisposedHook(callback): () => void;
```

Register a callback to be invoked when a layer is about to be disposed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`LayerLifecycleHook`](../type-aliases/LayerLifecycleHook.md) | The callback to invoke with the layer being disposed. |

#### Returns

A function to unregister the hook.

```ts
(): void;
```

##### Returns

`void`

***

### registerLayerPostRenderHook()

```ts
registerLayerPostRenderHook(callback): () => void;
```

Register a callback to be invoked after each layer's render cycle.
This happens after the user draw callback but before ASCII conversion.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`LayerRenderHook`](../type-aliases/LayerRenderHook.md) | The callback to invoke with the layer and render context. |

#### Returns

A function to unregister the hook.

```ts
(): void;
```

##### Returns

`void`

***

### registerLayerPreRenderHook()

```ts
registerLayerPreRenderHook(callback): () => void;
```

Register a callback to be invoked before each layer's render cycle.
This happens after the layer's visibility check but before any drawing operations.
Useful for rendering content to the layer's framebuffer before user draw callbacks.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`LayerRenderHook`](../type-aliases/LayerRenderHook.md) | The callback to invoke with the layer and render context. |

#### Returns

A function to unregister the hook.

```ts
(): void;
```

##### Returns

`void`

***

### registerPostDrawHook()

```ts
registerPostDrawHook(callback): () => void;
```

Register a callback to be invoked after each draw cycle.
Happens outside of the draw framebuffer being bound after the final result is drawn to the screen.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `void` |

#### Returns

A function to unregister the hook.

```ts
(): void;
```

##### Returns

`void`

***

### registerPostSetupHook()

```ts
registerPostSetupHook(callback): () => void;
```

Register a callback to be invoked after the user's setup callback completes.
This happens after user code in `setup()` has finished executing,
but before the loading screen finishes and the main render loop begins.
Useful for plugins that need to finalize initialization after user setup.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` \| `Promise`\<`void`\> | The callback to invoke after setup. |

#### Returns

A function to unregister the hook.

```ts
(): void;
```

##### Returns

`void`

***

### registerPreDrawHook()

```ts
registerPreDrawHook(callback): () => void;
```

Register a callback to be invoked before each draw cycle.
Happens just before any framebuffer

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `void` |

#### Returns

A function to unregister the hook.

```ts
(): void;
```

##### Returns

`void`

***

### registerPreSetupHook()

```ts
registerPreSetupHook(callback): () => void;
```

Register a callback to be invoked before the user's setup callback runs.
This happens after the Textmodifier and all layers are fully initialized,
but before user code in `setup()` executes.
Useful for plugins that need to prepare resources or state before user setup.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` \| `Promise`\<`void`\> | The callback to invoke before setup. |

#### Returns

A function to unregister the hook.

```ts
(): void;
```

##### Returns

`void`

***

### removeLayerExtension()

```ts
removeLayerExtension(methodName): void;
```

Remove a method extension from TextmodeLayer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `methodName` | `string` | The name of the method to remove. |

#### Returns

`void`
