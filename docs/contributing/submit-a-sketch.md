---
title: Submit a Sketch
---

# Submit an example sketch

There are now two different sketch contribution paths in the `textmode.js` ecosystem:

- **Gallery / showcase sketches** live in the [`code.textmode.art`](https://github.com/humanbydefinition/code.textmode.art) repository and power the public documentation showcase.
- **API example sketches** belong to the [`textmode.js`](https://github.com/humanbydefinition/textmode.js) repository, because that is where the source code for the API reference examples currently lives.

This page explains the difference so you can submit your sketch to the right repository.

## Choose the right track

### Gallery / showcase sketches

Use this route if your sketch is meant to be a standalone community example for the website.

These sketches are already used in two places:

- The landing page displays **3 random featured sketches** at a time.
- Visitors can click **Shuffle** to rotate that selection.
- Reloading the landing page picks another random set.
- The full showcase collection is also displayed on [Examples](/docs/examples).

Submit gallery / showcase sketches to the [`code.textmode.art`](https://github.com/humanbydefinition/code.textmode.art) repository.

### API example sketches

Use this route if your sketch is meant to teach a specific API surface in the generated TypeDoc reference.

Those examples are not authored in `code.textmode.art` right now. Their source code currently lives in the [`textmode.js`](https://github.com/humanbydefinition/textmode.js) repository directly, so API example sketch contributions need to be proposed there.

:::tip Recognition and rewards
Accepted API example sketches can count toward the [Leaderboard](/docs/leaderboard). Once you reach the current unlock threshold of **3 accepted API example sketches**, you become eligible for the `Textmodulator` role in Discord.
:::

## What makes a good sketch?

The best sketches are:

- **Focused** - Demonstrate one idea clearly
- **Concise** - Short enough to understand quickly
- **Well-commented** - Explain the key moves without over-explaining
- **Self-contained** - Avoid unnecessary dependencies
- **Visually interesting** - Show why the technique is worth learning

## Submitting a gallery / showcase sketch

If your sketch is for the public docs showcase:

1. Fork the [code.textmode.art repository](https://github.com/humanbydefinition/code.textmode.art)
2. Add or update the relevant showcase sketch files and metadata
3. Submit a pull request with a short explanation of what the sketch demonstrates

The current showcase metadata lives in [`.vitepress/data/sketches.json`](https://github.com/humanbydefinition/code.textmode.art/blob/main/.vitepress/data/sketches.json).

## Submitting an API example sketch

If your sketch is for the API reference examples:

1. Fork the [textmode.js repository](https://github.com/humanbydefinition/textmode.js)
2. Add or update the example source where that API example is currently maintained
3. Submit a pull request explaining which API entry the example improves

If you are not sure where a specific API example currently lives, open an issue first or ask in Discord before starting the implementation.

## What happens after submission?

### For gallery / showcase sketches

- Your sketch can appear on the landing page as part of the rotating featured set
- It can also appear on the [Examples](/docs/examples) page
- You help expand the public showcase of what people are building with `textmode.js`

### For API example sketches

- Your sketch can improve a specific API reference entry
- Accepted examples can count toward the [Leaderboard](/docs/leaderboard)
- Reaching 3 accepted API example sketches makes you eligible for the `Textmodulator` Discord role
- You help turn the API docs into a better learning resource

## Questions?

If you're unsure which route your sketch belongs to:

- Open an [issue](https://github.com/humanbydefinition/code.textmode.art/issues)
- Join the [Discord community](https://discord.gg/sjrw8QXNks)

Thank you for contributing to the `textmode.js` documentation ecosystem.
