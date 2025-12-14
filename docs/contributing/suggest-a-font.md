---
title: Suggest a Font
---

# Suggest a font

We maintain a curated list of pixel fonts that work well with textmode.js. Your font suggestions help expand the creative possibilities for everyone using the library.

## Requirements

Before suggesting a font, please ensure it meets these criteria:

1. **Monospaced** - Each character must have the same width
2. **Small pixel sizes** - Works well at typical sizes (8x8, 8x16, etc.)
3. **Proper licensing** - The font's license allows for inclusion/mention
4. **Clear legibility** - Characters are distinguishable at small sizes

## How to submit

You can submit a font suggestion in two ways:

### Option 1: Pull request (recommended)

1. Fork the [code.textmode.art repository](https://github.com/humanbydefinition/code.textmode.art)
2. Add your font entry to [`.vitepress/data/fonts.json`](https://github.com/humanbydefinition/code.textmode.art/blob/main/.vitepress/data/fonts.json)
3. Submit a pull request with your changes

### Option 2: Open an issue

Open an issue on GitHub with the following information:

- **Font name**
- **Download link** or source repository
- **Brief description** (1-2 sentences about the font's style or use case)
- **Glyph count** (if known)
- **License information** (e.g., MIT, CC0, OFL)
- **Preview image** (optional but helpful)

## Font data structure

When adding to `fonts.json`, use this structure:

```json
{
  "name": "Font Name",
  "author": "Author Name",
  "license": "MIT",
  "url": "https://link-to-font.com",
  "description": "Brief description of the font",
  "glyphCount": 256,
  "previewImage": "/font_previews/fontname/preview.png"
}
```

## After submission

Once your submission is reviewed and approved:

- The font will appear on the [Fonts page](/docs/fonts)
- You'll be credited in the [Contributors page](/docs/contributors)
- The community will have access to a new creative tool!

## Questions?

If you're unsure about anything, feel free to:

- Open an [issue](https://github.com/humanbydefinition/code.textmode.art/issues) for questions
- Join the [Discord community](https://discord.gg/sjrw8QXNks) for help

Thank you for contributing to the textmode.js font collection! 🔤
