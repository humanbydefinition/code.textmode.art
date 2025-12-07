# Contributing to `code.textmode.art`

Thank you for your interest in contributing! This documentation site thrives on community input, and there are many ways to help - no matter your skill level.

> [!NOTE]
> This contributing guide is a work in progress and may not answer all questions. If you have suggestions or need help, please open an issue or join the [Discord community](https://discord.gg/sjrw8QXNks).

## Ways to contribute

### 🔤 Suggest a font

We maintain a curated list of pixel fonts that work well with textmode.js. To suggest a font:

1. Ensure the font is **monospaced** and works at small pixel sizes (typically 8x8 or similar)
2. Check that the font's license allows for inclusion/mention
3. Open a pull request or issue with:
   - Font name and download link
   - A brief description
   - Glyph count (if known)
   - License information

Font data is stored in [`.vitepress/data/fonts.json`](https://github.com/humanbydefinition/code.textmode.art/blob/main/.vitepress/data/fonts.json).

### 🎨 Submit an example sketch

Example sketches appear throughout the documentation and showcase what's possible with textmode.js. To submit a sketch:

1. Create a sketch that demonstrates a concept or technique
2. Keep it concise and well-commented
3. Open a pull request or issue with:
   - Your sketch code
   - A title and brief description
   - Which documentation page it might fit (if any)

Sketch metadata is stored in [`.vitepress/data/sketches.json`](https://github.com/humanbydefinition/code.textmode.art/blob/main/.vitepress/data/sketches.json).

:::info
A gallery will be added in the future to showcase community-submitted sketches. On the `code.textmode.art` landing page, it will pick 3 random sketches from the collection each time the page loads, instead of the current static examples.
:::

### 📝 Improve documentation

Help make the docs clearer and more helpful:

- **Fix typos or errors** - Small fixes are always welcome
- **Improve explanations** - Clarify confusing sections
- **Add code examples** - More examples help everyone learn

### 🐛 Report issues

Found something wrong? Open an issue describing:

- What you expected to happen
- What actually happened
- Steps to reproduce (if applicable)
- Screenshots (if helpful)

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Setup

```bash
# Clone the repository
git clone https://github.com/humanbydefinition/code.textmode.art.git
cd code.textmode.art

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be available at `http://localhost:4175`.

## Project structure

```
.vitepress/
├── config.mts          # VitePress configuration
├── data/
│   ├── fonts.json      # Font showcase data
│   └── sketches.json   # Example sketch metadata
└── theme/              # Custom theme components

docs/                   # Documentation pages
├── examples/           # Example pages with interactive demos
├── legal/              # Legal pages (imprint, privacy)
└── *.md                # Core documentation

api/                    # Auto-generated API reference
blog/                   # Blog posts
public/                 # Static assets (fonts, images, SVGs)
```

**Key files:**
- [`.vitepress/config.mts`](https://github.com/humanbydefinition/code.textmode.art/blob/main/.vitepress/config.mts) - VitePress configuration
- [`.vitepress/data/fonts.json`](https://github.com/humanbydefinition/code.textmode.art/blob/main/.vitepress/data/fonts.json) - Font showcase data
- [`.vitepress/data/sketches.json`](https://github.com/humanbydefinition/code.textmode.art/blob/main/.vitepress/data/sketches.json) - Example sketch metadata
- [`.vitepress/data/contributors.json`](https://github.com/humanbydefinition/code.textmode.art/blob/main/.vitepress/data/contributors.json) - Contributors list
- [`.vitepress/theme/`](https://github.com/humanbydefinition/code.textmode.art/tree/main/.vitepress/theme) - Custom theme components

## Pull request guidelines

1. **Create a branch** - Use a descriptive name like `add-font-ursafont` or `fix-typo-fundamentals`
2. **Keep changes focused** - One feature or fix per PR
3. **Test locally** - Make sure the site builds without errors (`npm run build`)
4. **Write clear commit messages** - Describe what and why

## Credits

All contributors are recognized on the [Contributors page](/docs/contributors). When your contribution is merged, you'll be added with links to your social profiles (unless you prefer otherwise).

To be credited, simply include an updated or new entry in [`.vitepress/data/contributors.json`](https://github.com/humanbydefinition/code.textmode.art/blob/main/.vitepress/data/contributors.json) when submitting your pull request.

## Questions?

- Open an [issue](https://github.com/humanbydefinition/code.textmode.art/issues)
- Join the [Discord community](https://discord.gg/sjrw8QXNks)

Thank you for helping to make the textmode.js documentation better! 🎉
