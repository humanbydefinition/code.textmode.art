---
title: Fonts
description: Learn how to load custom fonts for textmode.js and discover recommended textmode fonts through the awesome-textmode project.
---

# Fonts

`textmode.js` works best with monospaced bitmap fonts for ASCII art, textmode graphics, and retro computing aesthetics.

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
3. **Specify the font path** when calling the [`loadFont`](/api/textmode.js/classes/Textmodifier#loadfont) method in your [`Textmodifier`](/api/textmode.js/classes/Textmodifier) instance:

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

## Discover fonts

:::info
The curated font list now lives in [`awesome-textmode`](https://github.com/humanbydefinition/awesome-textmode), a separate GitHub repository for textmode resources.
:::

- Browse the full project: [`humanbydefinition/awesome-textmode`](https://github.com/humanbydefinition/awesome-textmode)
- Jump straight to the font listings: [Fonts](https://github.com/humanbydefinition/awesome-textmode#fonts) and [Font Collections](https://github.com/humanbydefinition/awesome-textmode#font-collections)
- If you want to suggest a font or another textmode resource, open a pull request or issue in that repository