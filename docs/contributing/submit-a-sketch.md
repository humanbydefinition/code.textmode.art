---
title: Submit a Sketch
---

# Submit an example sketch

Example sketches appear throughout the documentation and showcase what's possible with textmode.js. Your creative work helps inspire and teach others!

## What makes a good example sketch?

The best example sketches are:

- **Focused** - Demonstrates one concept or technique clearly
- **Concise** - Short enough to understand quickly (typically < 100 lines)
- **Well-commented** - Includes comments explaining key concepts
- **Self-contained** - Works independently without external dependencies
- **Visually interesting** - Creates engaging ASCII art output

## How to submit

You can submit a sketch in two ways:

### Option 1: Pull request (recommended)

1. Fork the [code.textmode.art repository](https://github.com/humanbydefinition/code.textmode.art)
2. Add your sketch metadata to [`.vitepress/data/sketches.json`](https://github.com/humanbydefinition/code.textmode.art/blob/main/.vitepress/data/sketches.json)
3. Submit a pull request with your changes

### Option 2: Open an issue

Open an issue on GitHub with:

- **Sketch code** - Your complete, working code
- **Title** - A clear, descriptive name
- **Description** - Brief explanation (1-2 sentences) of what it demonstrates
- **Category** - Where it might fit (e.g., "fundamentals", "animation", "effects")
- **Documentation page** - Which page it could enhance (optional)

## Sketch data structure

When adding to `sketches.json`, use this structure:

```json
{
  "id": "unique-sketch-id",
  "title": "Sketch Title",
  "description": "Brief description of what the sketch demonstrates",
  "author": "Your Name",
  "category": "animation",
  "code": "// Your sketch code here",
  "featured": false
}
```

## Sketch gallery

:::info Coming soon
A gallery will be added in the future to showcase community-submitted sketches. On the `code.textmode.art` landing page, it will pick 3 random sketches from the collection each time the page loads.
:::

## After submission

Once your submission is reviewed and approved:

- Your sketch may appear in the documentation examples
- You could be featured in the upcoming sketch gallery
- You'll be credited in the [Contributors page](/docs/contributors)
- You'll inspire others in the community!

## Tips for great sketches

- **Start simple** - Build up complexity gradually
- **Use meaningful variable names** - Help others understand your code
- **Experiment with animation** - Motion brings ASCII art to life
- **Try different fonts** - Each font has a unique aesthetic
- **Add interactivity** - Mouse and keyboard input make sketches engaging

## Questions?

If you're unsure about anything, feel free to:

- Open an [issue](https://github.com/humanbydefinition/code.textmode.art/issues) for questions
- Join the [Discord community](https://discord.gg/sjrw8QXNks) for help

Thank you for sharing your creativity with the textmode.js community! 🎨
