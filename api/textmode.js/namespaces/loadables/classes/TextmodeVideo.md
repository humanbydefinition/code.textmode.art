[textmode.js](../../../../index.md) / [loadables](../index.md) / TextmodeVideo

# Class: TextmodeVideo

Represents a video element for textmode rendering via [Textmodifier.loadVideo](../../../../classes/Textmodifier.md#loadvideo).

It can be drawn to the canvas via [Textmodifier.image](../../../../classes/Textmodifier.md#image).

A video uploaded currently runs through an adjustable brightness-converter that converts
the video frames into a textmode representation using characters. 
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

### currentFrameIndex

#### Get Signature

```ts
get currentFrameIndex(): number;
```

Current frame index for preloaded videos. Returns 0 for non-preloaded videos.

##### Returns

`number`

***

### currentTime

#### Get Signature

```ts
get currentTime(): number;
```

Current playback time in seconds.

##### Returns

`number`

***

### duration

#### Get Signature

```ts
get duration(): number;
```

Total duration of the video in seconds.

##### Returns

`number`

***

### height

#### Get Signature

```ts
get height(): number;
```

Ideal height to draw the video at (in grid cells), calculated to fit the grid while preserving aspect ratio.

##### Returns

`number`

#### Overrides

```ts
TextmodeSource.height
```

***

### isPlaying

#### Get Signature

```ts
get isPlaying(): boolean;
```

Whether the video is currently playing.

##### Returns

`boolean`

***

### isPreloaded

#### Get Signature

```ts
get isPreloaded(): boolean;
```

Whether this video has been preloaded with frames.

##### Returns

`boolean`

***

### originalHeight

#### Get Signature

```ts
get originalHeight(): number;
```

Original pixel height of the video.

##### Returns

`number`

#### Overrides

```ts
TextmodeSource.originalHeight
```

***

### originalWidth

#### Get Signature

```ts
get originalWidth(): number;
```

Original pixel width of the video.

##### Returns

`number`

#### Overrides

```ts
TextmodeSource.originalWidth
```

***

### preloadFrameRate

#### Get Signature

```ts
get preloadFrameRate(): null | number;
```

The frame rate used for preloading. Returns null for non-preloaded videos.

##### Returns

`null` \| `number`

***

### texture

#### Get Signature

```ts
get texture(): WebGLTexture;
```

WebGL texture handle containing the current video frame.

##### Returns

`WebGLTexture`

#### Overrides

```ts
TextmodeSource.texture
```

***

### totalFrames

#### Get Signature

```ts
get totalFrames(): number;
```

Total number of preloaded frames. Returns 0 for non-preloaded videos.

##### Returns

`number`

***

### videoElement

#### Get Signature

```ts
get videoElement(): HTMLVideoElement;
```

The underlying HTML video element.

##### Returns

`HTMLVideoElement`

***

### width

#### Get Signature

```ts
get width(): number;
```

Ideal width to draw the video at (in grid cells), calculated to fit the grid while preserving aspect ratio.

##### Returns

`number`

#### Overrides

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

#### Overrides

```ts
TextmodeSource.$beforeMaterialUpdate
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

### frame()

```ts
frame(index?): this;
```

For preloaded videos, set or get the current frame index.
When called without arguments, returns this video instance for use with t.image().
When called with an index, sets the frame and returns this instance.

The frame index automatically wraps using modulo, so you can pass t.frameCount directly
and it will loop through the video frames seamlessly.

For non-preloaded videos, this method does nothing and returns the instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `index?` | `number` | Optional frame index to set (0-based, automatically wraps) |

#### Returns

`this`

This instance for chaining.

::: example-spoiler Show example

```javascript
// Draw specific frame
t.image(video.frame(0), x, y);

// Draw frame based on frameCount (automatically wraps)
t.image(video.frame(t.frameCount), x, y);

video.frame(t.frameCount);
t.image(video, x, y);
```

:::

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

***

### loop()

```ts
loop(shouldLoop): this;
```

Set whether the video should loop.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `shouldLoop` | `boolean` | `true` | Whether to loop (defaults to true) |

#### Returns

`this`

***

### pause()

```ts
pause(): void;
```

Pause the video.

#### Returns

`void`

***

### play()

```ts
play(): Promise<void>;
```

Play the video.

#### Returns

`Promise`\<`void`\>

Promise that resolves when playback starts

***

### speed()

```ts
speed(rate): this;
```

Set the playback speed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rate` | `number` | Playback rate (1.0 = normal speed) |

#### Returns

`this`

***

### stop()

```ts
stop(): void;
```

Stop the video and reset to beginning.

#### Returns

`void`

***

### time()

```ts
time(seconds): this;
```

Set the current time position in the video.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `seconds` | `number` | Time in seconds |

#### Returns

`this`

***

### volume()

```ts
volume(level): this;
```

Set the volume.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `level` | `number` | Volume level (0.0-1.0) |

#### Returns

`this`
