---
title: Submit a Sketch
description: How to submit your textmode.js sketch or example to the code.textmode.art documentation gallery.
---

# Submit an example sketch

There are two different sketch contribution paths in the `textmode.js` / `textmode.art` ecosystem:

- **Gallery sketches** live in the [`editor.textmode.art`](https://github.com/humanbydefinition/editor.textmode.art) repository under `sketches/<slug>/` and are automatically published to the documentation site on `code.textmode.art`.
- **API example sketches** belong to the repository that owns the source example used by the generated API docs.

This page explains the difference so you can submit your sketch to the right repository. (ﾉ◕ヮ◕)ﾉ\*:･ﾟ

## Choose the right track

### Gallery sketches

Use this route if your sketch is meant to be a standalone community example for the live editor.

These sketches are dynamically fetched and shown on `code.textmode.art`:

- The landing page displays **3 random featured sketches** at a time.
- Visitors can click **Shuffle** to rotate that selection.
- Reloading the landing page picks another random set.

Submit gallery sketches to the [`editor.textmode.art`](https://github.com/humanbydefinition/editor.textmode.art) repository under `sketches/<slug>/`.

### API example sketches

Use this route if your sketch is meant to teach a specific API surface in the generated TypeDoc reference.

The API docs on `code.textmode.art` cover more than just `textmode.js`. They also include plugin libraries such as `textmode.synth.js`, `textmode.filters.js`, and `textmode.export.js`.

API example sketches are not authored in `code.textmode.art`. They live in the original package repositories instead.

Right now, that means:

- Core API examples for `textmode.js` belong in [`humanbydefinition/textmode.js`](https://github.com/humanbydefinition/textmode.js)
- Synth API examples for `textmode.synth.js` belong in [`humanbydefinition/textmode.synth.js`](https://github.com/humanbydefinition/textmode.synth.js)

As a rule of thumb: if an API page includes a **View sketch on GitHub** link, submit your change to the repository linked there.

API example sketches are automatically enrolled on the [Examples](/docs/examples) page: every live sketch embedded in the generated API reference becomes a selectable entry in the interactive carousel there, so visitors can browse the hundreds of runnable examples side by side with the docs.

## What makes a good sketch?

The best sketches are:

- **Focused** - Demonstrate one idea clearly
- **Concise** - Short enough to understand quickly
- **Well-commented** - Explain the key moves without over-explaining
- **Self-contained** - Avoid unnecessary dependencies
- **Visually interesting** - Show why the technique is worth learning

## Submitting a gallery sketch

If your sketch is for the public gallery:

1. Fork the [editor.textmode.art repository](https://github.com/humanbydefinition/editor.textmode.art)
2. Add your sketch folder under `sketches/<slug>/` containing `meta.json`, `sketch.js`, and `og.png`
3. Submit a pull request to `editor.textmode.art` with a short explanation of what the sketch demonstrates

When merged into `editor.textmode.art`'s `main` branch, your sketch will be fetched dynamically and refactored automatically to run on `code.textmode.art`.

Contributor recognition on the site comes from the canonical
[contributors registry](https://github.com/humanbydefinition/code.textmode.art/blob/main/.vitepress/data/contributors.json).

## Submitting an API example sketch

If your sketch is for a generated API reference example:

1. Open the relevant API page on `code.textmode.art`
2. Follow the **View sketch on GitHub** link for that example
3. Fork the repository that owns that example source
4. Add or update the sketch for the relevant API entry
5. Submit a pull request explaining which API entry the example improves

If you want your contribution metadata and optional profile links reflected on the `code.textmode.art` site as well,
you may also need a companion PR updating the canonical
[contributors registry](https://github.com/humanbydefinition/code.textmode.art/blob/main/.vitepress/data/contributors.json).

## What happens after submission?

### For gallery sketches

- Your sketch will appear in the live web editor and can appear on `code.textmode.art`'s landing page as part of the rotating featured set
- You help expand the public gallery of what people are building with `textmode.js`

### For API example sketches

- Your sketch becomes part of the interactive [Examples](/docs/examples) carousel alongside hundreds of other runnable examples
- It can also improve a specific generated API reference entry for `textmode.js`, `textmode.synth.js`, or another package that adopts the same workflow
- You help turn the supported API docs into a better learning resource

## Questions?

If you're unsure which route your sketch belongs to:

- Open an [issue](https://github.com/humanbydefinition/code.textmode.art/issues)

Thank you for contributing to the `textmode.js` documentation ecosystem!
