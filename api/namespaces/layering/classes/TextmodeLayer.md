[textmode.js](../../../index.md) / [layering](../index.md) / TextmodeLayer

# Class: TextmodeLayer

A single layer within a multi-layered textmode rendering context.

This class manages the rendering and properties of an individual layer,
including visibility, opacity, blend mode, and offset. Each layer maintains
its own framebuffers for drawing and ASCII representation.

The base layer, which is always present at the bottom of the layer stack,
can be accessed via [Textmodifier.baseLayer](../../../classes/Textmodifier.md#baselayer).

## Accessors

### height

#### Get Signature

```ts
get height(): number;
```

Returns the height of the final ASCII framebuffer in pixels.
If the layer is not yet initialized, returns 0.

##### Returns

`number`

***

### texture

#### Get Signature

```ts
get texture(): undefined | WebGLTexture;
```

Returns the WebGL texture of the final ASCII framebuffer.
If the layer is not yet initialized, returns undefined.

##### Returns

`undefined` \| `WebGLTexture`

***

### width

#### Get Signature

```ts
get width(): number;
```

Returns the width of the final ASCII framebuffer in pixels.
If the layer is not yet initialized, returns 0.

##### Returns

`number`

## Methods

### blendMode()

```ts
blendMode(mode): 
  | void
  | TextmodeLayerBlendMode;
```

Set or get the layer's blend mode.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mode` | [`TextmodeLayerBlendMode`](../type-aliases/TextmodeLayerBlendMode.md) | The blend mode to set. |

#### Returns

  \| `void`
  \| [`TextmodeLayerBlendMode`](../type-aliases/TextmodeLayerBlendMode.md)

The current blend mode if no parameter is provided.

***

### draw()

```ts
draw(callback): void;
```

Define this layers draw callback.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` | The function to call when drawing this layer. |

#### Returns

`void`

***

### hide()

```ts
hide(): void;
```

Hide this layer from rendering.

#### Returns

`void`

***

### offset()

```ts
offset(x?, y?): 
  | void
  | {
  x: number;
  y: number;
};
```

Set or get the layer's offset in pixels.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `x?` | `number` | `undefined` | The x offset in pixels. |
| `y?` | `number` | `0` | The y offset in pixels. |

#### Returns

  \| `void`
  \| \{
  `x`: `number`;
  `y`: `number`;
\}

The current offset if no parameters are provided.

***

### opacity()

```ts
opacity(opacity?): number | void;
```

Define or retrieve the layer's opacity.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opacity?` | `number` | The opacity value to set (between 0 and 1). |

#### Returns

`number` \| `void`

The current opacity if no parameter is provided.

***

### show()

```ts
show(): void;
```

Show this layer for rendering.

#### Returns

`void`
