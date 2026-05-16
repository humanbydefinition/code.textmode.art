---
title: Media Conversion
description: Understand how textmode.js converts images, videos, and live textures into renderable textmode cells.
---

# Media conversion

Media conversion is the process that makes images, videos, and live textures renderable inside the textmode grid. (つ▀¯▀)つ

It happens when a [`TextmodeSource`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md) is drawn with [`image()`](/api/textmode.js/classes/Textmodifier#image). The source pixels are sampled, mapped to glyphs, assigned character and cell colors, and written into the current layer's textmode cell buffers.

## What gets converted

These source types share the same conversion controls:

- [`TextmodeImage`](/api/textmode.js/namespaces/media/classes/TextmodeImage.md) from [`t.loadImage()`](/api/textmode.js/classes/Textmodifier#loadimage)
- [`TextmodeVideo`](/api/textmode.js/namespaces/media/classes/TextmodeVideo.md) from [`t.loadVideo()`](/api/textmode.js/classes/Textmodifier#loadvideo)
- [`TextmodeTexture`](/api/textmode.js/namespaces/media/classes/TextmodeTexture.md) from [`t.createTexture()`](/api/textmode.js/classes/Textmodifier#createtexture)

See [Media sources](/docs/loadables) for loading and playback details.

## Character mapping

Use [`characters()`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md#characters) to choose the brightness ramp:

```js
const image = await t.loadImage("./poster.png");

image.characters(" .:-=+*#%@");
```

Characters should usually be ordered from darkest to brightest. The active layer's font or tileset determines how those characters look.

## Conversion mode

Use [`conversionMode()`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md#conversionmode) to choose the conversion strategy:

```js
image.conversionMode("brightness");
```

`brightness` is the built-in conversion mode. It maps source luminance to the configured character ramp.

## Color modes

Use [`charColorMode()`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md#charcolormode) and [`cellColorMode()`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md#cellcolormode) to choose whether colors come from the source or from fixed values:

```js
image.charColorMode("sampled").cellColorMode("fixed").cellColor(0, 0, 0);
```

- `sampled` uses the source media color.
- `fixed` uses the explicitly configured source color.

Use [`background()`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md#background) to define the color behind transparent source pixels.

## Glyph transforms

Media sources can transform the generated glyph cells:

```js
image.flipX(true).invert(true).charRotation(90);
```

These operations affect the textmode conversion result. They do not edit the original image, video, or canvas.

## Register a custom conversion

Use [`t.conversions.register()`](/api/textmode.js/namespaces/conversion/classes/TextmodeConversionManager.md#register) when a media source needs a custom conversion strategy:

```js
t.conversions.register({
  id: "custom",
  createShader: (ctx) => shader,
  createUniforms: (ctx) => ({
    u_image: ctx.source.texture,
  }),
});

image.conversionMode("custom");
```

Custom conversion strategies are scoped to the current [`Textmodifier`](/api/textmode.js/classes/Textmodifier) instance.

## Related APIs

- [`TextmodeSource`](/api/textmode.js/namespaces/media/classes/TextmodeSource.md)
- [`Textmodifier.image()`](/api/textmode.js/classes/Textmodifier#image)
- [`Textmodifier.conversions`](/api/textmode.js/classes/Textmodifier#conversions)
- [`TextmodeConversionManager`](/api/textmode.js/namespaces/conversion/classes/TextmodeConversionManager.md)
- [`TextmodeConversionStrategy`](/api/textmode.js/namespaces/conversion/interfaces/TextmodeConversionStrategy.md)
- [Media sources](/docs/loadables)
