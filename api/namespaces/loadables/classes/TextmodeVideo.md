---
layout: doc
editLink: true
title: TextmodeVideo
description: Represents a video element for textmode rendering via Textmodifier.loadVideo.
category: Classes
api: true
namespace: loadables
kind: Class
lastModified: 2026-02-01
hasConstructor: false
---

[textmode.js](../../../index.md) / [loadables](../index.md) / TextmodeVideo

# Class: TextmodeVideo

Represents a video element for textmode rendering via [Textmodifier.loadVideo](../../../classes/Textmodifier.md#loadvideo).

It can be drawn to the canvas via [Textmodifier.image](../../../classes/Textmodifier.md#image).

A video uploaded currently runs through an adjustable brightness-converter that converts
the video frames into a textmode representation using characters.
Those adjustable options are available via chainable methods on this interface.

## Example

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

- [`TextmodeTexture`](TextmodeTexture.md)

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

[`TextmodeTexture`](TextmodeTexture.md).[`height`](TextmodeTexture.md#height)

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

[`TextmodeTexture`](TextmodeTexture.md).[`originalHeight`](TextmodeTexture.md#originalheight)

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

[`TextmodeTexture`](TextmodeTexture.md).[`originalWidth`](TextmodeTexture.md#originalwidth)

***

### source

#### Get Signature

```ts
get source(): HTMLCanvasElement | HTMLVideoElement;
```

The source element this texture captures from.

##### Returns

`HTMLCanvasElement` \| `HTMLVideoElement`

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`source`](TextmodeTexture.md#source)

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

[`TextmodeTexture`](TextmodeTexture.md).[`texture`](TextmodeTexture.md#texture)

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

[`TextmodeTexture`](TextmodeTexture.md).[`width`](TextmodeTexture.md#width)

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
| `g?` | `number` | Optional green component (0-255) if using RGB format, or alpha (0-255) when using grayscale form |
| `b?` | `number` | Optional blue component (0-255) if using RGB format |
| `a?` | `number` | Optional alpha component (0-255) if using RGBA format |

#### Returns

`this`

This instance for chaining.

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let img;

t.setup(async () => {
  // Load an image with transparency (or simulate by setting background)
  // Here we use a standard image but define a background color that would
  // show through if the image had alpha holes.
  img = await t.loadImage('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500&q=80');
  img.characters(' .:-=+*#%@');
});

t.draw(() => {
  t.background(50); // Canvas background
  if (!img) return;

  // Set the image's "background" color (fallback for transparent pixels)
  img.background(255, 0, 0);

  t.image(img, img.width, img.height);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodeVideo.background
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`background`](TextmodeTexture.md#background)

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
| `g?` | `number` | Optional green component (0-255) if using RGB format, or alpha (0-255) when using grayscale form |
| `b?` | `number` | Optional blue component (0-255) if using RGB format |
| `a?` | `number` | Optional alpha component (0-255) if using RGBA format |

#### Returns

`this`

This instance for chaining.

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let img;

t.setup(async () => {
  img = await t.loadImage('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500&q=80');
  img.cellColorMode('fixed');
  img.characters(' .:-=+*#%@');
});

t.draw(() => {
  t.background(0);
  if (!img) return;

  // Set a dark blue background for the image cells
  img.cellColor('#000033');
  // Ensure characters are visible
  img.charColorMode('fixed').charColor(255);

  t.image(img, img.width, img.height);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodeVideo.cellColor
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`cellColor`](TextmodeTexture.md#cellcolor)

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

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let img;

t.setup(async () => {
  img = await t.loadImage('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500&q=80');
  img.characters(' .:-=+*#%@');
});

t.draw(() => {
  t.background(0);
  if (!img) return;

  // Sample character colors from image, but force black background
  // This creates a high-contrast ASCII art look
  img.charColorMode('sampled')
     .cellColorMode('fixed')
     .cellColor(Math.sin(t.frameCount * 0.1) * 127 + 128, 0, 0);

  t.image(img, img.width, img.height);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodeVideo.cellColorMode
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`cellColorMode`](TextmodeTexture.md#cellcolormode)

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

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let tex;

t.setup(() => {
    // Create a gradient pattern to demonstrate character mapping
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');
    if (ctx) {
        const g = ctx.createLinearGradient(0, 0, 200, 200);
        g.addColorStop(0, '#000');
        g.addColorStop(1, '#fff');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, 200, 200);
    }

    tex = t.createTexture(canvas);

    // Map brightness to a high-density character set
    // Darker pixels become ' ', lighter pixels become '@'
    tex.characters(' .:-=+*#%@');
});

t.draw(() => {
    t.background(0);

    // Render the image filling the entire grid
    // (0,0) is the center of the screen
    if (tex) {
        t.image(tex, tex.width, tex.height);
    }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodeVideo.characters
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`characters`](TextmodeTexture.md#characters)

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
| `g?` | `number` | Optional green component (0-255) if using RGB format, or alpha (0-255) when using grayscale form |
| `b?` | `number` | Optional blue component (0-255) if using RGB format |
| `a?` | `number` | Optional alpha component (0-255) if using RGBA format |

#### Returns

`this`

This instance for chaining.

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let img;

t.setup(async () => {
  img = await t.loadImage('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500&q=80');
  img.charColorMode('fixed');
  img.characters(' .:-=+*#%@');
});

t.draw(() => {
  t.background(0);
  if (!img) return;

  // Animate character color
  const r = 150 + 100 * Math.sin(t.frameCount * 0.05);
  const b = 150 + 100 * Math.cos(t.frameCount * 0.05);

  img.charColor(r, 100, b);

  t.image(img, img.width, img.height);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodeVideo.charColor
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`charColor`](TextmodeTexture.md#charcolor)

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

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let img;

t.setup(async () => {
  img = await t.loadImage('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500&q=80');
  img.characters(' .:-=+*#%@');
});

t.draw(() => {
  t.background(0);
  if (!img) return;

  // Use fixed color mode for a stylized look
  // Characters will be red, background will be sampled from image
  img.charColorMode('fixed')
     .charColor(255, 50, 50)
     .cellColorMode('sampled');

  t.image(img, img.width, img.height);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodeVideo.charColorMode
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`charColorMode`](TextmodeTexture.md#charcolormode)

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

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let tex;

t.setup(() => {
  // Create a procedural texture (checkers pattern)
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, 64, 64);
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, 32, 32);
    ctx.fillRect(32, 32, 32, 32);
  }

  tex = t.createTexture(canvas);
  tex.characters(' .:-=+*#%@');
});

t.draw(() => {
  t.background(0);
  if (!tex) return;

  const size = Math.min(tex.width, tex.height) * 0.4;
  const offset = size * 0.6;

  // Original orientation (0 degrees)
  t.push();
  t.translate(-offset, 0);
  tex.charRotation(0);
  t.image(tex, size, size);
  t.pop();

  // Rotated characters (90 degrees)
  t.push();
  t.translate(offset, 0);
  tex.charRotation(90);
  t.image(tex, size, size);
  t.pop();
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodeVideo.charRotation
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`charRotation`](TextmodeTexture.md#charrotation)

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
| `mode` | `string` | Conversion mode to use. |

#### Returns

`this`

This instance for chaining.

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let img;

t.setup(async () => {
  img = await t.loadImage('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500&q=80');
  img.conversionMode('brightness');
  img.characters(' .:-=+*#%@');
});

t.draw(() => {
  t.background(0);
  if (!img) return;

  // Draw centered
  t.image(img, img.width, img.height);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodeVideo.conversionMode
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`conversionMode`](TextmodeTexture.md#conversionmode)

***

### dispose()

```ts
dispose(): void;
```

Dispose of the resource and run all registered callbacks.
Subclasses should call super.dispose() at the end of their dispose method.

#### Returns

`void`

#### Implementation of

```ts
ITextmodeVideo.dispose
```

#### Overrides

[`TextmodeTexture`](TextmodeTexture.md).[`dispose`](TextmodeTexture.md#dispose)

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

#### Example

```javascript
// Creating symmetry using flipX
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let tex;

t.setup(() => {
  // Create a simple procedural quadrant pattern
  const canvas = document.createElement('canvas');
  canvas.width = 64; canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, '#fff'); g.addColorStop(1, '#000');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
    ctx.strokeStyle = '#fff'; ctx.lineWidth = 4;
    ctx.strokeRect(0, 0, 64, 64);
  }

  tex = t.createTexture(canvas);
  tex.characters(' .:-=+*#%@');
});

t.draw(() => {
  t.background(5, 5, 15);
  if (!tex) return;

  const size = 30;
  const time = t.frameCount * 0.02;

  // Draw a 2x1 symmetrical composition
  for (let x = 0; x < 2; x++) {
    t.push();
    t.translate((x - 0.5) * size, 0);

    // Flip the right side to create a mirrored effect
    tex.flipX(x === 1);

    t.image(tex, size, size);
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodeVideo.flipX
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`flipX`](TextmodeTexture.md#flipx)

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

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let img;

t.setup(async () => {
  img = await t.loadImage('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500&q=80');
  img.characters(' .:-=+*#%@');
});

t.draw(() => {
  t.background(0);
  if (!img) return;

  const size = Math.min(img.width, img.height) * 0.4;
  const offset = size * 0.6;

  // Draw original
  t.push();
  t.translate(-offset, 0);
  t.image(img, size, size);
  t.pop();

  // Draw flipped vertically
  t.push();
  t.translate(offset, 0);
  img.flipY(true);
  t.image(img, size, size);
  // Reset for next frame
  img.flipY(false);
  t.pop();
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodeVideo.flipY
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`flipY`](TextmodeTexture.md#flipy)

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

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let texNormal, texInverted;

t.setup(() => {
  // Create a procedural texture (gradient)
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const g = ctx.createLinearGradient(0, 0, 64, 64);
    g.addColorStop(0, '#000');
    g.addColorStop(1, '#fff');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
  }

  // Create two separate textures from the same source
  texNormal = t.createTexture(canvas);
  texNormal.characters(' .:-=+*#%@');

  texInverted = t.createTexture(canvas);
  texInverted.characters(' .:-=+*#%@');
  texInverted.invert(true);
});

t.draw(() => {
  t.background(0);
  if (!texNormal || !texInverted) return;

  const size = Math.min(texNormal.width, texNormal.height) * 0.4;
  const offset = size * 0.6;

  // Normal
  t.push();
  t.translate(-offset, 0);
  t.image(texNormal, size, size);
  t.pop();

  // Inverted
  t.push();
  t.translate(offset, 0);
  t.image(texInverted, size, size);
  t.pop();
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodeVideo.invert
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`invert`](TextmodeTexture.md#invert)

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

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let video;

t.setup(async () => {
  video = await t.loadVideo('https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4');
  // Disable automatic looping
  video.loop(false);
  video.play();
  video.characters(' .:-=+*#%@');
});

t.draw(() => {
  t.background(0);
  if (!video) return;
  t.image(video);

  // Manual loop logic: Restart if finished
  if (!video.isPlaying && video.currentTime >= video.duration) {
     video.play();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

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

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let video;

t.setup(async () => {
  video = await t.loadVideo('https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4');
  video.play();
  video.loop();
  video.characters(' .:-=+*#%@');
});

t.draw(() => {
  t.background(0);
  if (video) t.image(video);
});

t.mouseClicked(() => {
  if (!video) return;
  // Toggle playback
  if (video.isPlaying) {
    video.pause();
  } else {
    video.play();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

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

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let video;

t.setup(async () => {
  // Load a video from a CC0 source
  video = await t.loadVideo('https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4');
  video.play();
  video.loop();
  video.characters(' .:-=+*#%@');
});

t.draw(() => {
  t.background(0);
  if (video) {
    t.image(video);

    // Draw Play/Pause indicator
    t.push();
    t.translate(0, 0); // Center
    t.charColor(255);

    if (video.isPlaying) {
       // Draw Pause bars if playing (visible on hover)
       if (t.mouse.x > -10 && t.mouse.x < 10 && t.mouse.y > -10 && t.mouse.y < 10) {
          t.char('ñ');
          t.rect(5, 5);
       }
    } else {
       // Draw Play triangle if paused
       t.char('≤');
       t.rect(5, 5);
    }
    t.pop();
  }
});

t.mouseClicked(() => {
  if (video) {
    if (video.isPlaying) video.pause();
    else video.play();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

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

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let video;

t.setup(async () => {
  video = await t.loadVideo('https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4');
  video.play();
  video.loop();
  video.characters(' .:-=+*#%@');
});

t.draw(() => {
  t.background(0);
  if (!video) return;

  t.image(video);

  // Map mouse X to playback speed (0.1x to 4x)
  // Mouse X is center-based (-cols/2 to cols/2)
  const halfWidth = t.grid.cols / 2;
  const normalizedX = (t.mouse.x + halfWidth) / t.grid.cols; // 0 to 1 (approx)
  // Clamp to 0-1
  const clampedX = Math.max(0, Math.min(1, normalizedX));
  const rate = 0.1 + clampedX * 3.9;

  video.speed(rate);

  // Show speed
  t.push();
  t.translate(0, 0);
  t.charColor(255);
  const label = `Speed: ${rate.toFixed(1)}x`;
  for(let i=0; i<label.length; i++) {
    t.push();
    t.translate(i - label.length/2, 0);
    t.char(label[i]);
    t.point();
    t.pop();
  }
  t.pop();
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

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

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let video;

t.setup(async () => {
  video = await t.loadVideo('https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4');
  video.play();
  video.loop();
  video.characters(' .:-=+*#%@');
});

t.draw(() => {
  t.background(0);
  if (video) t.image(video);
});

t.keyPressed(() => {
  if (!video) return;
  // Press 's' to stop and reset
  if (t.isKeyPressed('s')) {
    video.stop();
    // Restart after 1 second
    setTimeout(() => video.play(), 1000);
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

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

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let video;

t.setup(async () => {
  video = await t.loadVideo('https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4');
  video.play();
  video.loop();
  video.characters(' .:-=+*#%@');
});

t.draw(() => {
  t.background(0);
  if (!video) return;
  t.image(video);
});

t.mouseClicked(() => {
  if (!video) return;
  // Jump to a random time on click
  const randomTime = Math.random() * video.duration;
  video.time(randomTime);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

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

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let video;

t.setup(async () => {
  video = await t.loadVideo('https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4');
  video.play();
  video.loop();
  video.characters(' .:-=+*#%@');
});

t.draw(() => {
  t.background(0);
  if (!video) return;
  t.image(video);

  // Control volume with mouse Y
  // Top = 1.0, Bottom = 0.0
  const halfHeight = t.grid.rows / 2;
  const normalizedY = (t.mouse.y + halfHeight) / t.grid.rows;
  const vol = 1.0 - Math.max(0, Math.min(1, normalizedY));

  video.volume(vol);

  // Display Volume
  t.push();
  t.translate(0, 0);
  t.charColor(255);
  const label = `Vol: ${Math.round(vol * 100)}%`;
  for(let i=0; i<label.length; i++) {
    t.push(); t.translate(i - label.length/2, 0); t.char(label[i]); t.point(); t.pop();
  }
  t.pop();
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodeVideo.volume
```
