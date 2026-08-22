---
title: Contribute code
description: Shared workflow for contributing to textmode.js and its official add-ons.
---

# Contribute code

Use this guide for changes to `textmode.js` and its official add-ons.

## Choose the repository

| Project | Use it for | Documentation |
| --- | --- | --- |
| [`textmode.js`](https://github.com/humanbydefinition/textmode.js) | Core APIs, rendering, layers, fonts, media, input, and plugins | [Guides](/docs/) · [API](/api/textmode.js/) |
| [`textmode.export.js`](https://github.com/humanbydefinition/textmode.export.js) | Image, document, and animation export | [Guide](/docs/exporting) · [API](/api/textmode.export.js/) |
| [`textmode.synth.js`](https://github.com/humanbydefinition/textmode.synth.js) | Synth sources, transforms, and shader composition | [Guide](/docs/live-coding-editor-textmode-art) · [API](/api/textmode.synth.js/) |
| [`textmode.figlet.js`](https://github.com/humanbydefinition/textmode.figlet.js) | FIGfont parsing, layout, and rendering | [Guide](/docs/figlet-typography) · [API](/api/textmode.figlet.js/) |
| [`textmode.filters.js`](https://github.com/humanbydefinition/textmode.filters.js) | GPU filter shaders and filter options | [Guide](/docs/filters) · [API](/api/textmode.filters.js/) |
| [`textmode.overlay.js`](https://github.com/humanbydefinition/textmode.overlay.js) | DOM overlay target sampling and alignment | [API](/api/textmode.overlay.js/) |

Report an add-on problem in its add-on repository. Use the core repository only when the problem is in `textmode.js`
itself or can be reproduced without the add-on.

## Before starting

Read the target repository's Code of Conduct and security policy. Report suspected vulnerabilities through the private
process in `SECURITY.md`, never through an issue, pull request, Discussion, or Discord.

Small, clear fixes can go directly to a pull request. Open an issue or Discussion before investing in:

- New features or public API changes
- Architecture, rendering pipeline, packaging, release, or browser-support changes
- Visual output changes with broad compatibility impact
- New, removed, or replaced bundled assets

Search existing issues first and agree on scope with a maintainer when the direction is not already established.

## Set up a library repository

Use Node.js 24 LTS as configured by the target repository's `.nvmrc` file. Fork the repository, create a focused branch
from `dev`, and install the locked dependency tree:

```bash
git clone https://github.com/YOUR-USERNAME/PROJECT.git
cd PROJECT
git checkout -b TYPE/describe-your-change origin/dev
nvm install
npm ci
```

The official libraries share these commands:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the package example gallery |
| `npm run build` | Build the production bundle and type declarations |
| `npm run test` | Run the package test suite |
| `npm run check:docs` | Validate public API documentation and examples |
| `npm run check` | Run the full CI-equivalent verification |

Use narrower test scripts from the target `package.json` while developing. Run `npm run check` before requesting review.

## Make a reviewable change

- Keep the pull request focused and separate unrelated cleanup.
- Add regression tests for fixes and behavior tests for features.
- Update public API docstrings, types, guides, and examples when behavior changes.
- Keep API examples focused and ensure included example paths remain valid.
- Test rendering changes in a WebGL2-capable browser and include before/after screenshots or recordings.
- Document every new asset's source, author, license, redistribution permission, and required attribution.
- Do not hand-edit generated API Markdown or commit generated exports unless the repository explicitly requires them.

Library commits use [Conventional Commits](https://www.conventionalcommits.org/). All libraries share the same commit
rules through `@textmode/commitlint-config` and an automatically installed `commit-msg` hook, so no per-repository
commit configuration is needed.

## Open the pull request

Target `dev`; maintainers promote accepted changes through `dev → beta → main`. In the pull request:

- Link the related issue or Discussion.
- Explain the problem, solution, and user-visible impact.
- List automated and manual validation performed.
- Call out public API, breaking, packaging, asset-license, and browser-support implications.
- Include screenshots or recordings for visual changes.

Maintainers review contributions on a best-effort basis and may request tests, documentation, a smaller scope, or prior
design discussion.
