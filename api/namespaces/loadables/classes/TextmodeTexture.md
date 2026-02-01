---
layout: doc
editLink: true
title: TextmodeTexture
description: Represents an external texture source for textmode rendering via Textmodifier.createTexture.
category: Classes
api: true
namespace: loadables
kind: Class
lastModified: 2026-02-01
hasConstructor: false
---

[textmode.js](../../../index.md) / [loadables](../index.md) / TextmodeTexture

# Class: TextmodeTexture

Represents an external texture source for textmode rendering via [Textmodifier.createTexture](../../../classes/Textmodifier.md#createtexture).

This class enables integration with other WebGL-based libraries like three.js, p5.js, Babylon.js,
hydra-synth, or any library that renders to a canvas element.

It can be drawn to the canvas via [Textmodifier.image](../../../classes/Textmodifier.md#image).

The texture automatically updates each frame to capture the latest content from the source canvas or video.

## Examples

```js
// === Three.js Integration ===
const threeRenderer = new THREE.WebGLRenderer();
// ... setup three.js scene ...

const t = textmode.create({ width: 800, height: 600 });

let tex;

t.setup(() => {
    // Create texture from three.js canvas - auto-updates every frame
    tex = t.createTexture(threeRenderer.domElement);
    tex.characters(" .:-=+*#%@")
       .charColorMode("sampled")
       .cellColorMode("fixed")
       .cellColor(0);
});

t.draw(() => {
    // Render three.js scene first
    threeRenderer.render(scene, camera);

    // Then render as textmode
    t.background(0);
    t.image(tex);
});
```

```js
// === hydra-synth Integration ===
const hydraInstance = new HydraSynth({ width: 800, height: 600 });
hydraInstance.synth.osc(10, 0.1).out();

let tex;

t.setup(() => {
    tex = t.createTexture(hydraInstance.canvas);
    tex.characters(" .:-=+*#%@");
});

t.draw(() => {
    t.image(tex);
});
```

## Extends

- [`TextmodeSource`](TextmodeSource.md)

## Extended by

- [`TextmodeVideo`](TextmodeVideo.md)

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

[`TextmodeSource`](TextmodeSource.md).[`height`](TextmodeSource.md#height)

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

[`TextmodeSource`](TextmodeSource.md).[`originalHeight`](TextmodeSource.md#originalheight)

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

[`TextmodeSource`](TextmodeSource.md).[`originalWidth`](TextmodeSource.md#originalwidth)

***

### source

#### Get Signature

```ts
get source(): HTMLCanvasElement | HTMLVideoElement;
```

The source element this texture captures from.

##### Returns

`HTMLCanvasElement` \| `HTMLVideoElement`

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

[`TextmodeSource`](TextmodeSource.md).[`texture`](TextmodeSource.md#texture)

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

[`TextmodeSource`](TextmodeSource.md).[`width`](TextmodeSource.md#width)

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

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`background`](TextmodeSource.md#background)

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

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`cellColor`](TextmodeSource.md#cellcolor)

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

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`cellColorMode`](TextmodeSource.md#cellcolormode)

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

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`characters`](TextmodeSource.md#characters)

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

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`charColor`](TextmodeSource.md#charcolor)

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

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`charColorMode`](TextmodeSource.md#charcolormode)

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

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`charRotation`](TextmodeSource.md#charrotation)

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

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`conversionMode`](TextmodeSource.md#conversionmode)

***

### dispose()

```ts
dispose(): void;
```

Dispose of the resource and run all registered callbacks.
Subclasses should call super.dispose() at the end of their dispose method.

#### Returns

`void`

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`dispose`](TextmodeSource.md#dispose)

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

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`flipX`](TextmodeSource.md#flipx)

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

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`flipY`](TextmodeSource.md#flipy)

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

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`invert`](TextmodeSource.md#invert)
