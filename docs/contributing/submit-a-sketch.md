---
title: Submit a Sketch
---

# Submit an example sketch

There are now two different sketch contribution paths in the `textmode.js` / `textmode.art` ecosystem:

- **Gallery / showcase sketches** live in the [`code.textmode.art`](https://github.com/humanbydefinition/code.textmode.art) repository and power the public documentation showcase.
- **API example sketches** belong to the repository that owns the source example used by the generated API docs.

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

The API docs on `code.textmode.art` cover more than just `textmode.js`. They also include plugin libraries such as `textmode.synth.js`, `textmode.filters.js`, and `textmode.export.js`.

API example sketches are not authored in `code.textmode.art`. They live in the original package repositories instead.

Right now, that means:

- Core API examples for `textmode.js` belong in [`humanbydefinition/textmode.js`](https://github.com/humanbydefinition/textmode.js)
- Synth API examples for `textmode.synth.js` belong in [`humanbydefinition/textmode.synth.js`](https://github.com/humanbydefinition/textmode.synth.js)

As a rule of thumb: if an API page includes a **View sketch on GitHub** link, submit your change to the repository linked there.

:::tip Recognition and rewards
Accepted showcase and API example sketches both count toward the [Leaderboard](/docs/leaderboard). Once you reach the current unlock threshold of **3 accepted sketches**, you become eligible for the `Textmodeller` role in Discord.
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

Contributor recognition on the site is also tied to:

- [`.all-contributorsrc`](https://github.com/humanbydefinition/code.textmode.art/blob/main/.all-contributorsrc)
- [`.vitepress/data/contributors.json`](https://github.com/humanbydefinition/code.textmode.art/blob/main/.vitepress/data/contributors.json)

## Submitting an API example sketch

If your sketch is for a generated API reference example:

1. Open the relevant API page on `code.textmode.art`
2. Follow the **View sketch on GitHub** link for that example
3. Fork the repository that owns that example source
4. Add or update the sketch for the relevant API entry
5. Submit a pull request explaining which API entry the example improves

If you want your contribution metadata and optional profile links reflected on the `code.textmode.art` site as well, you may also need a companion PR in [`code.textmode.art`](https://github.com/humanbydefinition/code.textmode.art) touching:

- [`.all-contributorsrc`](https://github.com/humanbydefinition/code.textmode.art/blob/main/.all-contributorsrc)
- [`.vitepress/data/contributors.json`](https://github.com/humanbydefinition/code.textmode.art/blob/main/.vitepress/data/contributors.json)

If you are not sure which repository owns a given API example, open an issue first or ask in Discord before starting the implementation.

## What happens after submission?

### For gallery / showcase sketches

- Your sketch can appear on the landing page as part of the rotating featured set
- It can also appear on the [Examples](/docs/examples) page
- Accepted sketches also count toward the [Leaderboard](/docs/leaderboard)
- Reaching 3 accepted sketches makes you eligible for the `Textmodeller` Discord role
- You help expand the public showcase of what people are building with `textmode.js`

### For API example sketches

- Your sketch can improve a specific generated API reference entry for `textmode.js`, `textmode.synth.js`, or another package that adopts the same workflow
- Accepted examples can count toward the [Leaderboard](/docs/leaderboard)
- Reaching 3 accepted sketches makes you eligible for the `Textmodeller` Discord role
- You help turn the supported API docs into a better learning resource

## Questions?

If you're unsure which route your sketch belongs to:

- Open an [issue](https://github.com/humanbydefinition/code.textmode.art/issues)
- Join the [Discord community](https://discord.gg/sjrw8QXNks)

Thank you for contributing to the `textmode.js` documentation ecosystem!
