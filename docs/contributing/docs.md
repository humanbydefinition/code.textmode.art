---
title: Contribute to the documentation site
description: Set up code.textmode.art locally and submit documentation-site changes.
---

# Contribute to the documentation site

This guide covers local development for `code.textmode.art`. For library or add-on changes, use the
[code contribution guide](/docs/contributing/code).

## Prerequisites

- Node.js 24 LTS, as configured by the repository's `.nvmrc` file
- npm, Git, a GitHub account, and a code editor

## Set up the site

1. Fork [`humanbydefinition/code.textmode.art`](https://github.com/humanbydefinition/code.textmode.art).
2. Clone your fork and create a branch from `dev`.
3. Install the locked dependencies and start VitePress:

```bash
git clone https://github.com/YOUR-USERNAME/code.textmode.art.git
cd code.textmode.art
git checkout -b docs/describe-your-change origin/dev
nvm install
npm ci
npm run dev
```

The site is available at `http://localhost:4175` with hot reload.

## Find the source

- `docs/` contains guides and contribution pages.
- `docs/examples/` contains reusable examples included by documentation pages.
- `.vitepress/configs/` contains navigation and sidebar configuration.
- `.vitepress/data/editorSketches.data.ts` dynamically fetches and refactors gallery sketches from `editor.textmode.art`.
- `.vitepress/data/contributors.json` and `.vitepress/data/contribution-types.json` are the canonical contributor data.
- `api/` contains generated API reference files; do not edit them by hand.

For example sketches, use the [Submit an example sketch](/docs/contributing/submit-a-sketch) guide.

## What you can improve

Documentation improvements come in many sizes and don't always require deep technical knowledge:

- **Fix typos and errors** - Correct spelling and grammar, broken links, incorrect code, or outdated content.
- **Improve explanations** - Clarify confusing sections, add missing context, improve structure, and simplify complex topics.
- **Add code examples** - Illustrate concepts without samples or expand existing ones with variations and comments.
  Every live example embedded in an API reference page is
  automatically enrolled on the interactive [Examples](/docs/examples) carousel.
- **Enhance pages** - Add diagrams, tips and warnings, cross-references, and real-world use cases.

## Documentation structure

```
docs/
├── introduction.md              # What textmode.js is for
├── installation.md              # Setup and import paths
├── first-sketch.md              # First runnable sketch
├── sketch-lifecycle.md          # create/setup/draw/resize/destroy
├── grid-and-coordinates.md      # Grid model and coordinate mapping
├── drawing-shapes.md            # 2D primitives
├── characters-and-colors.md     # Glyph and color state
├── text-and-glyph-ramps.md      # Native text printing and glyph ramps
├── animation-and-timing.md      # Loop and time controls
├── randomness-math-vectors-and-noise.md # Randomness, vectors, noise, math
├── transforms.md                # Matrix and transform state
├── events.md                    # Input events
├── fonts.md                     # Fonts and tilesets
├── loadables.md                 # Media sources
├── layers-and-compositing.md    # Layer stack and blend modes
├── filters.md                   # Layer and final-output filters
├── media-conversion.md          # Media-to-textmode conversion
├── framebuffers.md              # Offscreen rendering
├── shaders.md                   # Custom GLSL cell shaders
├── 3d-drawing.md                # 3D primitives
├── cameras-and-projection.md    # Camera and projection APIs
├── lighting.md                  # 3D lighting
├── loading-and-errors.md        # Internal loading/error overlays
├── plugins.md                   # Plugin extension points
├── framework-integration.md     # Integration paths
├── exporting.md                 # Export formats
├── live-coding*.md              # Live coding environments
├── examples.md                  # Gallery browser
├── contributors.md              # Contributor credits
├── support.md                   # Support options
├── contributing/                # Contributing guides
└── examples/                    # Reusable included examples
```

Generated API reference pages live under `api/`, not `docs/`. Regenerate them from the source package with that
package's TypeDoc script, then copy the generated output into this site; do not hand-edit generated API markdown.

## Writing guidelines

- **Style** - Write conversationally, use active voice, keep it concise, and format with proper code blocks, headings,
  and lists.
- **Code examples** - Make them runnable, add comments for non-obvious code, keep them focused on one concept, and test
  them.
- **Technical accuracy** - Verify details, link to the API reference when discussing methods or properties, and keep
  content in sync with the current version.

## Validate the change

Run the production build before opening a pull request:

```bash
npm run build
```

For contributor registry or catalog changes, also run:

```bash
npm run check:contributors
```

Check edited pages in the browser at narrow and wide viewport sizes. Test links and interactive examples, and include
screenshots or recordings when the rendered result changes.

## Submit the change

Push your branch and open a focused pull request against `dev`. Explain what changed and why, link related issues, and
list the commands or manual checks you ran. Maintainers review contributions on a best-effort basis and may request
changes to scope, content, examples, or validation.

## Need help?

- [Open a documentation issue](https://github.com/humanbydefinition/code.textmode.art/issues)
- [Join the Discord community](https://discord.gg/sjrw8QXNks)
