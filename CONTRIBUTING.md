# Contributing

Thank you for your interest in contributing to `code.textmode.art`.

The full contribution guides live in the documentation site:

- [Contributing overview](https://code.textmode.art/docs/contributing/)
- [Getting started](https://code.textmode.art/docs/contributing/getting-started)
- [Suggest a font](https://code.textmode.art/docs/contributing/suggest-a-font)
- [Submit a sketch](https://code.textmode.art/docs/contributing/submit-a-sketch)
- [Improve documentation](https://code.textmode.art/docs/contributing/improve-docs)

## Quick start

```bash
git clone https://github.com/YOUR-USERNAME/code.textmode.art.git
cd code.textmode.art
npm install
npm run dev
```

## Contributor credit

The textmode.js ecosystem keeps contributor profiles in
[`.vitepress/data/contributors.json`](./.vitepress/data/contributors.json) and the ordered contribution-type catalog
in [`.vitepress/data/contribution-types.json`](./.vitepress/data/contribution-types.json). Maintainers update the
relevant file and run:

```bash
npm run contributors:validate
npm run contributors:render
npm run check:contributors
```

The documentation site reads both canonical files directly. Automation synchronizes the same generated Contributors
section to every official textmode.js library README.

## Need help?

- [Open an issue](https://github.com/humanbydefinition/code.textmode.art/issues)
- [Join the Discord community](https://discord.gg/sjrw8QXNks)
