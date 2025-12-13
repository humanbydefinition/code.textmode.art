[textmode.js](../../../index.md) / [loadables](../index.md) / TextmodeVideo

# Class: TextmodeVideo

Represents a video element for textmode rendering via [Textmodifier.loadVideo](../../../classes/Textmodifier.md#loadvideo).

It can be drawn to the canvas via [Textmodifier.image](../../../classes/Textmodifier.md#image).

A video uploaded currently runs through an adjustable brightness-converter that converts
the video frames into a textmode representation using characters.
Those adjustable options are available via chainable methods on this interface.
```javascript
const t = textmode.create({
    width: 800,
    height: 600,
});

let video;

t.setup(async () => {
    video = await t.loadVideo('https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4');
    // Start playback and enable looping so the video keeps playing
    video.play();
    video.loop();

    video.characters(" .:-=+*#%@");
    // ... other adjustments like video.flipX(boolean), video.cellColorMode('sampled' | 'fixed'), etc.
    // (can also be chained or updated during runtime)
});

t.draw(() => {
    t.background(0);

     // Draw the loaded video
     t.image(video);
});
```

## Extends

- `TextmodeSource`

## Implements

- `ITextmodeVideo`

## Accessors

### currentTime

#### Get Signature

```ts
get currentTime(): number;
```

Current playback time in seconds.

##### Returns

`number`

#### Implementation of

```ts
ITextmodeVideo.currentTime
```

***

### duration

#### Get Signature

```ts
get duration(): number;
```

Total duration of the video in seconds.

##### Returns

`number`

#### Implementation of

```ts
ITextmodeVideo.duration
```

***

### height

#### Get Signature

```ts
get height(): number;
```

Ideal height in grid cells.

##### Returns

`number`

#### Implementation of

```ts
ITextmodeVideo.height
```

#### Inherited from

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

#### Implementation of

```ts
ITextmodeVideo.isPlaying
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

#### Implementation of

```ts
ITextmodeVideo.originalHeight
```

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

#### Implementation of

```ts
ITextmodeVideo.originalWidth
```

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

#### Implementation of

```ts
ITextmodeVideo.texture
```

#### Inherited from

```ts
TextmodeSource.texture
```

***

### videoElement

#### Get Signature

```ts
get videoElement(): HTMLVideoElement;
```

The underlying HTML video element.

##### Returns

`HTMLVideoElement`

#### Implementation of

```ts
ITextmodeVideo.videoElement
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

#### Implementation of

```ts
ITextmodeVideo.width
```

#### Inherited from

```ts
TextmodeSource.width
```

## Methods

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
| `colorOrGray` | `string` \| `number` \| [`TextmodeColor`](../../../classes/TextmodeColor.md) | A grayscale value (0-255), hex string ('#RGB', '#RRGGBB', '#RRGGBBAA'), or TextmodeColor instance |
| `g?` | `number` | Green component (0-255) if using RGB format |
| `b?` | `number` | Blue component (0-255) if using RGB format |
| `a?` | `number` | Alpha component (0-255) if using RGBA format |

#### Returns

`this`

This instance for chaining.

#### Implementation of

```ts
ITextmodeVideo.background
```

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
| `colorOrGray` | `string` \| `number` \| [`TextmodeColor`](../../../classes/TextmodeColor.md) | A grayscale value (0-255), hex string ('#RGB', '#RRGGBB', '#RRGGBBAA'), or TextmodeColor instance |
| `g?` | `number` | Green component (0-255) if using RGB format |
| `b?` | `number` | Blue component (0-255) if using RGB format |
| `a?` | `number` | Alpha component (0-255) if using RGBA format |

#### Returns

`this`

This instance for chaining.

#### Implementation of

```ts
ITextmodeVideo.cellColor
```

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

#### Implementation of

```ts
ITextmodeVideo.cellColorMode
```

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
Maximum length is 255; excess characters are ignored.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chars` | `string` | String of characters to map |

#### Returns

`this`

This instance for chaining.

#### Implementation of

```ts
ITextmodeVideo.characters
```

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
| `colorOrGray` | `string` \| `number` \| [`TextmodeColor`](../../../classes/TextmodeColor.md) | A grayscale value (0-255), hex string ('#RGB', '#RRGGBB', '#RRGGBBAA'), or TextmodeColor instance |
| `g?` | `number` | Green component (0-255) if using RGB format |
| `b?` | `number` | Blue component (0-255) if using RGB format |
| `a?` | `number` | Alpha component (0-255) if using RGBA format |

#### Returns

`this`

This instance for chaining.

#### Implementation of

```ts
ITextmodeVideo.charColor
```

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

#### Implementation of

```ts
ITextmodeVideo.charColorMode
```

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

#### Implementation of

```ts
ITextmodeVideo.charRotation
```

#### Inherited from

```ts
TextmodeSource.charRotation
```

***

### conversionMode()

```ts
conversionMode(mode): this;
```

Select the conversion mode for this source.

`textmode.js` includes only a single built-in conversion strategy `'brightness'`.

Additional conversion strategies may be provided via add-on libraries.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mode` | [`TextmodeConversionMode`](../../conversion/type-aliases/TextmodeConversionMode.md) | Conversion mode to use. |

#### Returns

`this`

#### Implementation of

```ts
ITextmodeVideo.conversionMode
```

#### Inherited from

```ts
TextmodeSource.conversionMode
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

#### Implementation of

```ts
ITextmodeVideo.flipX
```

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

#### Implementation of

```ts
ITextmodeVideo.flipY
```

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

#### Implementation of

```ts
ITextmodeVideo.invert
```

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

#### Implementation of

```ts
ITextmodeVideo.loop
```

***

### pause()

```ts
pause(): void;
```

Pause the video.

#### Returns

`void`

#### Implementation of

```ts
ITextmodeVideo.pause
```

***

### play()

```ts
play(): Promise<void>;
```

Play the video.

#### Returns

`Promise`\<`void`\>

Promise that resolves when playback starts

#### Implementation of

```ts
ITextmodeVideo.play
```

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

#### Implementation of

```ts
ITextmodeVideo.speed
```

***

### stop()

```ts
stop(): void;
```

Stop the video and reset to beginning.

#### Returns

`void`

#### Implementation of

```ts
ITextmodeVideo.stop
```

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

#### Implementation of

```ts
ITextmodeVideo.time
```

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

#### Implementation of

```ts
ITextmodeVideo.volume
```
