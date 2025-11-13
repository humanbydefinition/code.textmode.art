[textmode.js](../index.md) / TextmodeImage

# Class: TextmodeImage

Represents an image uploaded for textmode rendering via [Textmodifier.loadImage](Textmodifier.md#loadimage).

It can be drawn to the canvas via [Textmodifier.image](Textmodifier.md#image).

An image uploaded currently runs through an adjustable brightness-converter that converts
the original image into a textmode representation using characters. 
Those adjustable options are available via chainable methods on this class.

## Accessors

### height

#### Get Signature

```ts
get height(): number;
```

Original pixel height of the source image.

##### Returns

`number`

***

### texture

#### Get Signature

```ts
get texture(): WebGLTexture;
```

WebGL texture handle containing the original source image.

##### Returns

`WebGLTexture`

***

### width

#### Get Signature

```ts
get width(): number;
```

Original pixel width of the source image.

##### Returns

`number`

## Methods

### background()

```ts
background(
   r, 
   g?, 
   b?, 
   a?): this;
```

Set background color for transparent pixels.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | `number` | Red channel (0-255) |
| `g?` | `number` | Green channel (0-255) |
| `b?` | `number` | Blue channel (0-255) |
| `a?` | `number` | Alpha channel (0-255) |

#### Returns

`this`

This instance for chaining.

***

### cellColor()

```ts
cellColor(
   r, 
   g?, 
   b?, 
   a?): this;
```

Defines the cell color used when [cellColorMode](#cellcolormode) is `'fixed'`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | `number` | Red channel (0-255) |
| `g?` | `number` | Green channel (0-255) |
| `b?` | `number` | Blue channel (0-255) |
| `a?` | `number` | - |

#### Returns

`this`

This instance for chaining.

***

### cellColorMode()

```ts
cellColorMode(mode): this;
```

Set the cell color mode: `'sampled'` *(from image)* or `'fixed'` *(use [cellColor](#cellcolor))*.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mode` | `"sampled"` \| `"fixed"` |  |

#### Returns

`this`

***

### characters()

```ts
characters(chars): this;
```

Define the characters to use for brightness mapping as a string.

The maximum number of characters for brightness mapping currently is `64`; excess characters are ignored.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chars` | `string` |  |

#### Returns

`this`

***

### charColor()

```ts
charColor(
   r, 
   g?, 
   b?, 
   a?): this;
```

Defines the character color used when [charColorMode](#charcolormode) is `'fixed'`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | `number` | Red channel (0-255) |
| `g?` | `number` | Green channel (0-255) |
| `b?` | `number` | Blue channel (0-255) |
| `a?` | `number` | - |

#### Returns

`this`

This instance for chaining.

***

### charColorMode()

```ts
charColorMode(mode): this;
```

Set character color mode: `'sampled'` *(from image)* or `'fixed'` *(use [charColor](#charcolor))*.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mode` | `"sampled"` \| `"fixed"` |  |

#### Returns

`this`

***

### charRotation()

```ts
charRotation(degrees): this;
```

Set the character rotation in degrees.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `degrees` | `number` | Rotation in degrees *(0-360)* |

#### Returns

`this`

This instance for chaining.

***

### flipX()

```ts
flipX(v): this;
```

Set horizontal flip indicator flag.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | `number` \| `boolean` | `true` | Flag value |

#### Returns

`this`

This instance for chaining.

***

### flipY()

```ts
flipY(v): this;
```

Set vertical flip indicator flag.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | `number` \| `boolean` | `true` | Flag value |

#### Returns

`this`

This instance for chaining.

***

### invert()

```ts
invert(v): this;
```

Set the invert flag.

Setting this flag to `true` will swap the character and cell colors when rendering the image.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | `number` \| `boolean` | `true` | Flag value |

#### Returns

`this`

This instance for chaining.
