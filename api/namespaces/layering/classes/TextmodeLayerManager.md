[textmode.js](../../../index.md) / [layering](../index.md) / TextmodeLayerManager

# Class: TextmodeLayerManager

Manages the stack of layers within a [Textmodifier](../../../classes/Textmodifier.md) instance.

This interface provides methods to create, manage, and organize multiple textmode layers.
Layers allow for complex compositing, independent rendering passes, and post-processing effects.

The `base` layer is always present at the bottom of the stack. User-created layers are added
on top of the base layer.

Access this manager via `textmodifier.layers`.

## Implements

- `ILayerManager`

## Accessors

### all

#### Get Signature

```ts
get all(): readonly TextmodeLayer[];
```

Get all user layers as a readonly array.

##### Example

```js
const t = textmode.create();
t.layers.add();
t.layers.add();

console.log(t.layers.all.length); // 2

// Iterate over all user layers
t.layers.all.forEach(layer => {
  layer.opacity(0.5);
});
```

##### Returns

readonly [`TextmodeLayer`](TextmodeLayer.md)[]

#### Implementation of

```ts
ILayerManager.all
```

***

### base

#### Get Signature

```ts
get base(): TextmodeLayer;
```

The base layer that is always rendered at the bottom of the layer stack.
This layer represents the main drawing content before any user layers are composited.

The base layer cannot be removed or moved.

##### Returns

[`TextmodeLayer`](TextmodeLayer.md)

#### Implementation of

```ts
ILayerManager.base
```

***

### filters

#### Get Signature

```ts
get filters(): TextmodeFilterManager;
```

##### Returns

[`TextmodeFilterManager`](../../filters/classes/TextmodeFilterManager.md)

***

### resultFramebuffer

#### Get Signature

```ts
get resultFramebuffer(): TextmodeFramebuffer;
```

The framebuffer containing the final composited result after all layers and filters have been applied.

##### Returns

[`TextmodeFramebuffer`](../../../classes/TextmodeFramebuffer.md)

#### Implementation of

```ts
ILayerManager.resultFramebuffer
```

## Methods

### add()

```ts
add(options): TextmodeLayer;
```

Create and add a new layer to the top of the layer stack.

New layers are initialized with their own grid and font settings.
Layers can be offset, rotated, and blended with layers below them.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`TextmodeLayerOptions`](../interfaces/TextmodeLayerOptions.md) | Optional configuration for the new layer (visibility, opacity, blendMode, etc.) |

#### Returns

[`TextmodeLayer`](TextmodeLayer.md)

The newly created TextmodeLayer instance.

#### Example

```javascript
const t = textmode.create();

// Add a new layer on top of the base layer
const uiLayer = t.layers.add({
    blendMode: 'normal',
    opacity: 1.0,
    fontSize: 16
});

// Draw to the new layer
uiLayer.draw(() => {
    t.clear(); // Clear THIS layer's background (transparent)

    t.charColor(255, 0, 0); // Red text
    t.cellColor(0, 0, 0, 0); // Transparent cell background
    t.char('!');
    t.rect(5, 5);
});

// Base layer content
t.draw(() => {
    t.background(0, 0, 50); // Dark blue background

    t.charColor(0, 0, 255); // Blue text
    t.cellColor(0, 0, 0, 0); // Transparent cell background
    t.char('?');
    t.rect(5, 5);
});
```

#### Implementation of

```ts
ILayerManager.add
```

***

### clear()

```ts
clear(): void;
```

Remove all user-created layers from the manager.
The base layer is not affected by this operation.
This is useful for integration into live-coding environments where code is re-evaluated
and layers need to be recreated from scratch.

#### Returns

`void`

#### Example

```js
const t = textmode.create();

t.setup(() => {
  // Ensure clean slate when re-running setup
  t.layers.clear();

  // Re-create layers
  t.layers.add({ blendMode: 'additive' });
  t.layers.add({ blendMode: 'multiply' });
});
```

#### Implementation of

```ts
ILayerManager.clear
```

***

### move()

```ts
move(layer, newIndex): void;
```

Move a layer to a new index in the layer stack.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layer` | [`TextmodeLayer`](TextmodeLayer.md) | The layer to move. |
| `newIndex` | `number` | The new index for the layer. |

#### Returns

`void`

#### Example

```js
const t = textmode.create();

const bgLayer = t.layers.add(); // Index 0
const fgLayer = t.layers.add(); // Index 1

// Swap z-order by moving fgLayer to bottom (index 0)
// This pushes bgLayer to index 1
t.layers.move(fgLayer, 0);
```

#### Implementation of

```ts
ILayerManager.move
```

***

### remove()

```ts
remove(layer): void;
```

Remove a layer from the manager.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layer` | [`TextmodeLayer`](TextmodeLayer.md) | The layer to remove. |

#### Returns

`void`

#### Example

```js
const t = textmode.create();

const tempLayer = t.layers.add();

// Remove the layer after 100 frames
t.draw(() => {
  if (t.frameCount > 100) {
    t.layers.remove(tempLayer);
  }
});
```

#### Implementation of

```ts
ILayerManager.remove
```

***

### swap()

```ts
swap(layerA, layerB): void;
```

Swap the order of two layers if they exist in the same collection.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layerA` | [`TextmodeLayer`](TextmodeLayer.md) | The first layer to swap. |
| `layerB` | [`TextmodeLayer`](TextmodeLayer.md) | The second layer to swap. |

#### Returns

`void`

#### Example

```js
const t = textmode.create();

const layer1 = t.layers.add();
const layer2 = t.layers.add();

// Swap the layers' positions in the stack
t.layers.swap(layer1, layer2);
```

#### Implementation of

```ts
ILayerManager.swap
```
