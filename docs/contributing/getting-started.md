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

See [Improve documentation](/docs/contributing/improve-docs) for writing and example guidance, or
[Submit an example sketch](/docs/contributing/submit-a-sketch) to choose the correct sketch workflow.

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
