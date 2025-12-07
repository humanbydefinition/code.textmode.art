# Fonts

`textmode.js` works best with monospaced bitmap fonts that are perfect for creating ASCII art, textmode graphics, and retro computing aesthetics. This page showcases a curated collection of fonts that work exceptionally well with the library.

## Font requirements

For optimal results with `textmode.js`, fonts should be:
- **Monospaced**: Each character occupies the same width
- **Bitmap-style**: Clear, pixel-perfect rendering at small sizes
- **Consistent metrics**: Uniform character spacing and alignment

::: warning IMPORTANT

Fonts for use with `textmode.js` should be provided in `OTF`, `TTF`, or `WOFF` format.
:::

## Using fonts with `textmode.js`

To use a specific font with `textmode.js`, you'll need to:

1. **Download a font** from the provided links below or from your preferred font repository
2. **Include the font** in your project
3. **Specify the font path** when calling the [`loadFont`](/api/classes/Textmodifier#loadfont) method in your [`Textmodifier`](/api/classes/Textmodifier) instance:

#### Load a new font at any point after initialization:
```js
textmodifier.loadFont("./path/to/your/font.woff"); // or .ttf / .otf
```

#### Initialize with a custom font:
```js
const textmodifier = textmode.create({
  fontSource: "./path/to/your/font.ttf", // or .otf / .woff
});
```

::: tip
You can also load fonts from a CDN or web font service by providing the URL directly.

```js
textmodifier.loadFont("https://example.com/path/to/font.ttf");
```
:::

## Featured fonts

:::info
Please respect the individual licenses of each font. Some fonts are released under permissive licenses like CC0, while others may have specific usage requirements. Always check the license before using a font in your projects.
:::

<FontShowcase />

## Contributing

Have a great monospaced font that works well with `textmode.js`? We'd love to feature it! Check out our [Contributing Guide](/docs/contributing#suggest-a-font) for details on how to suggest fonts for inclusion in this showcase.
