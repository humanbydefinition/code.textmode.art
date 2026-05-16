---
title: Media
description: Load images, videos, and live textures in textmode.js, convert them through the current glyph atlas, and control how they render as textmode graphics.
---

# Media

`textmode.js` can render three kinds of media sources:

- [`TextmodeImage`](/api/textmode.js/namespaces/media/classes/TextmodeImage.md) from [`t.loadImage()`](/api/textmode.js/classes/Textmodifier#loadimage)
- [`TextmodeVideo`](/api/textmode.js/namespaces/media/classes/TextmodeVideo.md) from [`t.loadVideo()`](/api/textmode.js/classes/Textmodifier#loadvideo)
- [`TextmodeTexture`](/api/textmode.js/namespaces/media/classes/TextmodeTexture.md) from [`t.createTexture()`](/api/textmode.js/classes/Textmodifier#createtexture)

All three inherit from [`TextmodeSource`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md), so they share the same conversion and styling API.

Draw any of them with [`t.image()`](/api/textmode.js/classes/Textmodifier#image):

```js
t.image(source);
```

Media sources are converted through the current layer's active font or tileset when they are drawn. That means the same image, video, or texture can be reused across layers with different glyph styles.

## Choosing a source type

Use [`t.loadImage()`](/api/textmode.js/classes/Textmodifier#loadimage) for static image files:

```js
const image = await t.loadImage('./images/poster.png');
```

Use [`t.loadVideo()`](/api/textmode.js/classes/Textmodifier#loadvideo) for video files:

```js
const video = await t.loadVideo('./videos/loop.mp4');
await video.play();
```

Use [`t.createTexture()`](/api/textmode.js/classes/Textmodifier#createtexture) when the source already exists as a live `canvas` or `video` element:

```js
const sourceCanvas = document.createElement('canvas');
const texture = t.createTexture(sourceCanvas);
```

[`TextmodeTexture`](/api/textmode.js/namespaces/media/classes/TextmodeTexture.md) is the right choice for integrations with tools such as `three.js`, `p5.js`, `hydra-synth`, or any custom canvas pipeline. The texture updates automatically each frame from its source element.

## Loading images

[`t.loadImage()`](/api/textmode.js/classes/Textmodifier#loadimage) returns a [`TextmodeImage`](/api/textmode.js/namespaces/media/classes/TextmodeImage.md):

```js
const t = textmode.create({ width: 800, height: 600 });

let image;

t.setup(async () => {
  image = await t.loadImage('./images/poster.png');
  image.characters(' .:-=+*#%@');
});

t.draw(() => {
  t.background(0);

  if (image) {
    t.image(image);
  }
});
```

The default draw size respects the media aspect ratio and fits it to the current grid. You can also supply an explicit size in grid cells:

```js
t.image(image, 48, 32);
```

## Loading videos

[`t.loadVideo()`](/api/textmode.js/classes/Textmodifier#loadvideo) returns a [`TextmodeVideo`](/api/textmode.js/namespaces/media/classes/TextmodeVideo.md), which extends [`TextmodeTexture`](/api/textmode.js/namespaces/media/classes/TextmodeTexture.md) and updates as the video plays.

```js
const t = textmode.create({ width: 800, height: 600 });

let video;

t.setup(async () => {
  video = await t.loadVideo('./videos/loop.mp4');
  video.characters(' .:-=+*#%@');
  video.loop(true);
  await video.play();
});

t.draw(() => {
  t.background(0);

  if (video) {
    t.image(video, 50, 30);
  }
});
```

[`TextmodeVideo`](/api/textmode.js/namespaces/media/classes/TextmodeVideo.md) also provides playback controls and state:

- [`play()`](/api/textmode.js/namespaces/media/classes/TextmodeVideo.md#play)
- [`pause()`](/api/textmode.js/namespaces/media/classes/TextmodeVideo.md#pause)
- [`stop()`](/api/textmode.js/namespaces/media/classes/TextmodeVideo.md#stop)
- [`loop()`](/api/textmode.js/namespaces/media/classes/TextmodeVideo.md#loop)
- [`speed()`](/api/textmode.js/namespaces/media/classes/TextmodeVideo.md#speed)
- [`time()`](/api/textmode.js/namespaces/media/classes/TextmodeVideo.md#time)
- [`volume()`](/api/textmode.js/namespaces/media/classes/TextmodeVideo.md#volume)
- [`currentTime`](/api/textmode.js/namespaces/media/classes/TextmodeVideo.md#currenttime), [`duration`](/api/textmode.js/namespaces/media/classes/TextmodeVideo.md#duration), and [`isPlaying`](/api/textmode.js/namespaces/media/classes/TextmodeVideo.md#isplaying)

Videos loaded through `loadVideo()` start muted to satisfy browser autoplay rules. If you need audible playback, unmute the underlying [`videoElement`](/api/textmode.js/namespaces/media/classes/TextmodeVideo.md#videoelement) in response to a user gesture.

## Creating live textures

[`t.createTexture()`](/api/textmode.js/classes/Textmodifier#createtexture) creates a [`TextmodeTexture`](/api/textmode.js/namespaces/media/classes/TextmodeTexture.md) from an existing `HTMLCanvasElement` or `HTMLVideoElement`.

```js
const t = textmode.create({ width: 800, height: 600, fontSize: 16 });

const sourceCanvas = document.createElement('canvas');
sourceCanvas.width = 180;
sourceCanvas.height = 120;

const ctx = sourceCanvas.getContext('2d');
const texture = t.createTexture(sourceCanvas);

texture.characters(' .:-=+*#%@');

t.draw(() => {
  if (ctx) {
    ctx.fillStyle = '#050816';
    ctx.fillRect(0, 0, sourceCanvas.width, sourceCanvas.height);

    ctx.fillStyle = '#fef08a';
    ctx.fillRect(40, 20, 100, 80);
  }

  t.background(0);
  t.image(texture, texture.width, texture.height);
});
```

This is the best path when another library is already rendering to a canvas and you want `textmode.js` to reinterpret that output as character graphics.

## Shared source controls

Because images, videos, and textures all extend [`TextmodeSource`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md), they support the same controls.

### Character mapping

Use [`characters()`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md#characters) to define the brightness ramp, ordered from darkest to brightest:

```js
source.characters(' .:-=+*#%@');
```

This changes which glyphs are used during media conversion. Since conversion happens through the current layer's active font or tileset, the same character ramp will take on different visual styles depending on the glyph source in use.

### Conversion mode

Use [`conversionMode()`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md#conversionmode) to choose the conversion strategy:

```js
source.conversionMode('brightness');
```

`brightness` is the built-in mode in `textmode.js`. Additional conversion modes may be added by plugins or add-on libraries.

See [Media conversion](/docs/media-conversion) for a deeper explanation of how source pixels become renderable textmode cells.

### Character and cell colors

Use [`charColorMode()`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md#charcolormode) and [`cellColorMode()`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md#cellcolormode) to choose whether colors are sampled from the source or fixed explicitly:

```js
source.charColorMode('sampled');
source.cellColorMode('fixed');
source.cellColor(0, 0, 0);
```

- `'sampled'`: colors come from the source media
- `'fixed'`: colors come from [`charColor()`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md#charcolor) or [`cellColor()`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md#cellcolor)

For sources with transparency, use [`background()`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md#background) to define the color used behind transparent pixels:

```js
source.background(10, 14, 24);
```

### Orientation and glyph transforms

All media sources also support:

- [`invert()`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md#invert)
- [`flipX()`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md#flipx)
- [`flipY()`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md#flipy)
- [`charRotation()`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md#charrotation)

```js
source
  .flipX(true)
  .invert(true)
  .charRotation(90);
```

These transforms affect the textmode conversion result rather than editing the original file or canvas.

## Sizing and aspect ratio

Every [`TextmodeSource`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md) exposes both original pixel dimensions and ideal grid dimensions:

- [`originalWidth`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md#originalwidth)
- [`originalHeight`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md#originalheight)
- [`width`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md#width)
- [`height`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md#height)

`originalWidth` and `originalHeight` are the native pixel size of the media. `width` and `height` are the grid-cell dimensions that best fit the current textmode grid while preserving aspect ratio.

That makes this pattern useful when you want the default fitted size explicitly:

```js
t.image(source, source.width, source.height);
```

When the grid changes, the ideal fitted size updates automatically.

## Lifecycle

Media sources can be disposed manually through [`dispose()`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md#dispose):

```js
source.dispose();
```

That is optional in most sketches. Sources created by [`loadImage()`](/api/textmode.js/classes/Textmodifier#loadimage), [`loadVideo()`](/api/textmode.js/classes/Textmodifier#loadvideo), and [`createTexture()`](/api/textmode.js/classes/Textmodifier#createtexture) are disposed automatically when the parent `Textmodifier` instance is destroyed.

## Related APIs

- [`Textmodifier.loadImage()`](/api/textmode.js/classes/Textmodifier#loadimage)
- [`Textmodifier.loadVideo()`](/api/textmode.js/classes/Textmodifier#loadvideo)
- [`Textmodifier.createTexture()`](/api/textmode.js/classes/Textmodifier#createtexture)
- [`Textmodifier.image()`](/api/textmode.js/classes/Textmodifier#image)
- [`media`](/api/textmode.js/namespaces/media/)
- [`TextmodeSource`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md)
- [`TextmodeImage`](/api/textmode.js/namespaces/media/classes/TextmodeImage.md)
- [`TextmodeTexture`](/api/textmode.js/namespaces/media/classes/TextmodeTexture.md)
- [`TextmodeVideo`](/api/textmode.js/namespaces/media/classes/TextmodeVideo.md)
- [Media conversion](/docs/media-conversion)
