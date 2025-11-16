[textmode.js](../../../../index.md) / [loadables](../index.md) / TextmodeImage

# Class: TextmodeImage

Represents an image uploaded for textmode rendering via [Textmodifier.loadImage](../../../../classes/Textmodifier.md#loadimage).

It can be drawn to the canvas via [Textmodifier.image](../../../../classes/Textmodifier.md#image).

An image uploaded currently runs through an adjustable brightness-converter that converts
the original image into a textmode representation using characters. 
Those adjustable options are available via chainable methods on this class.

## Extends

- `TextmodeSource`

## Properties

| Property | Modifier | Type | Default value | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="_backgroundcolor"></a> `_backgroundColor` | `protected` | \[`number`, `number`, `number`, `number`\] | `undefined` | `TextmodeSource._backgroundColor` |
| <a id="_cellcolor"></a> `_cellColor` | `protected` | \[`number`, `number`, `number`, `number`\] | `undefined` | `TextmodeSource._cellColor` |
| <a id="_cellcolormode"></a> `_cellColorMode` | `protected` | `"sampled"` \| `"fixed"` | `'fixed'` | `TextmodeSource._cellColorMode` |
| <a id="_charcolor"></a> `_charColor` | `protected` | \[`number`, `number`, `number`, `number`\] | `undefined` | `TextmodeSource._charColor` |
| <a id="_charcolormode"></a> `_charColorMode` | `protected` | `"sampled"` \| `"fixed"` | `'sampled'` | `TextmodeSource._charColorMode` |
| <a id="_charrotation"></a> `_charRotation` | `protected` | `number` | `0` | `TextmodeSource._charRotation` |
| <a id="_flipx"></a> `_flipX` | `protected` | `number` | `0` | `TextmodeSource._flipX` |
| <a id="_flipy"></a> `_flipY` | `protected` | `number` | `0` | `TextmodeSource._flipY` |
| <a id="_gl"></a> `_gl` | `protected` | `WebGL2RenderingContext` | `undefined` | `TextmodeSource._gl` |
| <a id="_glyphcolorresolver"></a> `_glyphColorResolver` | `protected` | (`s`) => `GlyphColor`[] | `undefined` | `TextmodeSource._glyphColorResolver` |
| <a id="_glyphcolors"></a> `_glyphColors` | `protected` | `GlyphColor`[] | `undefined` | `TextmodeSource._glyphColors` |
| <a id="_height"></a> `_height` | `protected` | `number` | `undefined` | `TextmodeSource._height` |
| <a id="_invert"></a> `_invert` | `protected` | `number` | `0` | `TextmodeSource._invert` |
| <a id="_material"></a> `_material` | `protected` | `null` \| `Material` | `null` | `TextmodeSource._material` |
| <a id="_originalheight"></a> `_originalHeight` | `protected` | `number` | `undefined` | `TextmodeSource._originalHeight` |
| <a id="_originalwidth"></a> `_originalWidth` | `protected` | `number` | `undefined` | `TextmodeSource._originalWidth` |
| <a id="_renderer"></a> `_renderer` | `protected` | `GLRenderer` | `undefined` | `TextmodeSource._renderer` |
| <a id="_texture"></a> `_texture` | `protected` | `WebGLTexture` | `undefined` | `TextmodeSource._texture` |
| <a id="_width"></a> `_width` | `protected` | `number` | `undefined` | `TextmodeSource._width` |

## Accessors

### height

#### Get Signature

```ts
get height(): number;
```

Ideal height in grid cells.

##### Returns

`number`

#### Inherited from

```ts
TextmodeSource.height
```

***

### originalHeight

#### Get Signature

```ts
get originalHeight(): number;
```

Original pixel height.

##### Returns

`number`

#### Inherited from

```ts
TextmodeSource.originalHeight
```

***

### originalWidth

#### Get Signature

```ts
get originalWidth(): number;
```

Original pixel width.

##### Returns

`number`

#### Inherited from

```ts
TextmodeSource.originalWidth
```

***

### texture

#### Get Signature

```ts
get texture(): WebGLTexture;
```

Return the WebGL texture currently backing this source.

##### Returns

`WebGLTexture`

#### Inherited from

```ts
TextmodeSource.texture
```

***

### width

#### Get Signature

```ts
get width(): number;
```

Ideal width in grid cells.

##### Returns

`number`

#### Inherited from

```ts
TextmodeSource.width
```

## Methods

### \_createUniforms()

```ts
protected _createUniforms(): Record<string, any>;
```

#### Returns

`Record`\<`string`, `any`\>

#### Inherited from

```ts
TextmodeSource._createUniforms
```

***

### $beforeMaterialUpdate()

```ts
protected $beforeMaterialUpdate(): void;
```

Hook for subclasses to run logic before material updates (e.g., upload latest frame).

#### Returns

`void`

#### Inherited from

```ts
TextmodeSource.$beforeMaterialUpdate
```

***

### $getActiveTexture()

```ts
protected $getActiveTexture(): WebGLTexture;
```

Subclasses must supply the active texture handle to bind as u_image.

#### Returns

`WebGLTexture`

#### Overrides

```ts
TextmodeSource.$getActiveTexture
```

***

### background()

```ts
background(
   colorOrGray, 
   g?, 
   b?, 
   a?): this;
```

Defines the background color used for transparent pixels.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `colorOrGray` | `number` \| [`TextmodeColor`](../../../../classes/TextmodeColor.md) | A grayscale value or TextmodeColor for the background |
| `g?` | `number` | Additional green component if using RGB |
| `b?` | `number` | Additional blue component if using RGB |
| `a?` | `number` | Additional alpha component if using RGBA |

#### Returns

`this`

This instance for chaining.

#### Inherited from

```ts
TextmodeSource.background
```

***

### cellColor()

```ts
cellColor(
   colorOrGray, 
   g?, 
   b?, 
   a?): this;
```

Defines the cell color when [cellColorMode](#cellcolormode) is `'fixed'`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `colorOrGray` | \| `string` \| `number` \| [`TextmodeColor`](../../../../classes/TextmodeColor.md) | A grayscale value or TextmodeColor for the cell |
| `g?` | `number` | Additional green component if using RGB |
| `b?` | `number` | Additional blue component if using RGB |
| `a?` | `number` | Additional alpha component if using RGBA |

#### Returns

`this`

This instance for chaining.

#### Inherited from

```ts
TextmodeSource.cellColor
```

***

### cellColorMode()

```ts
cellColorMode(mode): this;
```

Set cell color mode: `'sampled'` *(from source)* or `'fixed'`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mode` | `"sampled"` \| `"fixed"` | The cell color mode |

#### Returns

`this`

This instance for chaining.

#### Inherited from

```ts
TextmodeSource.cellColorMode
```

***

### characters()

```ts
characters(chars): this;
```

Define the characters to use for brightness mapping as a string.
Maximum length is 64; excess characters are ignored.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chars` | `string` | String of characters to map |

#### Returns

`this`

This instance for chaining.

#### Inherited from

```ts
TextmodeSource.characters
```

***

### charColor()

```ts
charColor(
   colorOrGray, 
   g?, 
   b?, 
   a?): this;
```

Defines the character color when [charColorMode](#charcolormode) is `'fixed'`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `colorOrGray` | \| `string` \| `number` \| [`TextmodeColor`](../../../../classes/TextmodeColor.md) | A grayscale value or TextmodeColor for the character |
| `g?` | `number` | Additional green component if using RGB |
| `b?` | `number` | Additional blue component if using RGB |
| `a?` | `number` | Additional alpha component if using RGBA |

#### Returns

`this`

This instance for chaining.

#### Inherited from

```ts
TextmodeSource.charColor
```

***

### charColorMode()

```ts
charColorMode(mode): this;
```

Set character color mode: `'sampled'` *(from source)* or `'fixed'`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mode` | `"sampled"` \| `"fixed"` | The character color mode |

#### Returns

`this`

This instance for chaining.

#### Inherited from

```ts
TextmodeSource.charColorMode
```

***

### charRotation()

```ts
charRotation(degrees): this;
```

Set the character rotation in degrees (0-360).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `degrees` | `number` | Rotation in degrees |

#### Returns

`this`

This instance for chaining.

#### Inherited from

```ts
TextmodeSource.charRotation
```

***

### flipX()

```ts
flipX(v): this;
```

Set horizontal flip indicator flag.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | `number` \| `boolean` | `true` | Flip flag |

#### Returns

`this`

This instance for chaining.

#### Inherited from

```ts
TextmodeSource.flipX
```

***

### flipY()

```ts
flipY(v): this;
```

Set vertical flip indicator flag.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | `number` \| `boolean` | `true` | Flip flag |

#### Returns

`this`

This instance for chaining.

#### Inherited from

```ts
TextmodeSource.flipY
```

***

### invert()

```ts
invert(v): this;
```

Set the invert flag, swapping character and cell colors when enabled.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | `number` \| `boolean` | `true` | Invert flag |

#### Returns

`this`

This instance for chaining.

#### Inherited from

```ts
TextmodeSource.invert
```
