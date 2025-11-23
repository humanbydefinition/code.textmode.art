[textmode.js](../../../index.md) / [layering](../index.md) / TextmodeLayerManager

# Class: TextmodeLayerManager

Manages all user-defined layers within a Textmodifier instance.

The instance of this class can be accessed via [Textmodifier.layers](../../../classes/Textmodifier.md#layers).

The base layer at [Textmodifier.baseLayer](../../../classes/Textmodifier.md#baselayer) is not part of this manager's
public layer stack, but is instead managed internally.

## Methods

### add()

```ts
add(options): TextmodeLayer;
```

Add a new layer to the manager.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`TextmodeLayerOptions`](../interfaces/TextmodeLayerOptions.md) | Layer configuration options. |

#### Returns

[`TextmodeLayer`](TextmodeLayer.md)

The newly added layer.

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
