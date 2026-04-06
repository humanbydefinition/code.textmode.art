---
title: Getting started
description: A step-by-step guide to setting up your local environment for contributing to the textmode.js documentation and codebase.
---

# Getting started

Ready to contribute to textmode.js documentation? This guide will help you set up your local development environment.

## Prerequisites

Before you begin, make sure you have:

- **[Node.js](https://nodejs.org/)** - Version 18 or higher recommended
- **npm** - Comes with Node.js
- **Git** - For version control
- **A code editor** - VS Code, Sublime Text, or your favorite editor
- **A GitHub account** - For submitting contributions

## Setup steps

### 1. Fork the repository

Visit the [code.textmode.art repository](https://github.com/humanbydefinition/code.textmode.art) and click the **Fork** button in the top-right corner.

### 2. Clone your fork

```bash
# Replace YOUR-USERNAME with your GitHub username
git clone https://github.com/YOUR-USERNAME/code.textmode.art.git
cd code.textmode.art
```

### 3. Install dependencies

```bash
npm install
```

This will install VitePress and all required dependencies.

### 4. Start the development server

```bash
npm run dev
```

The documentation site will be available at `http://localhost:4175`. The dev server supports hot reload - your code changes will appear instantly!

### 5. Create a branch

Always create a new branch for your changes:

```bash
# Use a descriptive branch name
git checkout -b add-font-ursafont
# or
git checkout -b fix-typo-fundamentals
# or
git checkout -b improve-animation-examples
```

## Project structure

Understanding the project layout helps you find what you need:

```
.vitepress/
├── config.mts          # VitePress configuration
├── data/
│   ├── fonts.json      # Font showcase data
│   ├── sketches.json   # Example sketch metadata and leaderboard input
│   └── contributors.json # Optional contributor profile metadata
└── theme/              # Custom theme components

docs/                   # Documentation pages (you'll mostly edit here)
├── examples/           # Example pages with interactive demos
├── contributing/       # Contributing guides
└── *.md                # Core documentation pages

api/                    # Auto-generated API reference
blog/                   # Blog posts
public/                 # Static assets (fonts, images, SVGs)
```

## Key files

- **[`.vitepress/config.mts`](https://github.com/humanbydefinition/code.textmode.art/blob/main/.vitepress/config.mts)** - VitePress configuration
- **[`.vitepress/data/fonts.json`](https://github.com/humanbydefinition/code.textmode.art/blob/main/.vitepress/data/fonts.json)** - Font showcase data
- **[`.vitepress/data/sketches.json`](https://github.com/humanbydefinition/code.textmode.art/blob/main/.vitepress/data/sketches.json)** - Example sketch metadata used by the docs and leaderboard
- **[`.all-contributorsrc`](https://github.com/humanbydefinition/code.textmode.art/blob/main/.all-contributorsrc)** - Canonical contributor registry
- **[`.vitepress/data/contributors.json`](https://github.com/humanbydefinition/code.textmode.art/blob/main/.vitepress/data/contributors.json)** - Optional social/profile metadata for the website

## Making changes

### Editing documentation

Documentation files are in the `docs/` folder. They use Markdown format (`.md` files):

```markdown
---
title: Page Title
---

# Heading

Your content here...
```

### Testing your changes

As you edit files, the dev server will automatically reload. Check your changes at `http://localhost:4175`.

### Building the site

Before submitting, verify the site builds without errors:

```bash
npm run build
```

If the build succeeds, you're ready to submit!

## Submitting your contribution

### 1. Commit your changes

```bash
# Stage your changes
git add .

# Commit with a clear message
git commit -m "Add Ursafont to font showcase"
```

Write clear commit messages that describe **what** you changed and **why**.

### 2. Push to your fork

```bash
# Push your branch to GitHub
git push origin your-branch-name
```

### 3. Create a pull request

1. Visit your fork on GitHub
2. Click **"Pull request"** or **"Compare & pull request"**
3. Provide a clear title and description
4. Click **"Create pull request"**

## Pull request guidelines

When submitting a pull request:

- **One feature per PR** - Keep changes focused
- **Clear description** - Explain what you changed and why
- **Test locally** - Make sure the site builds
- **Follow existing style** - Match the formatting of surrounding code
- **Be patient** - Maintainers will review your PR as soon as possible

## Getting credit

To be credited as a contributor, maintainers update [`.all-contributorsrc`](https://github.com/humanbydefinition/code.textmode.art/blob/main/.all-contributorsrc) with:

```bash
npm run contributors:add -- your-github-username doc
npm run contributors:generate
```

If you want additional social links to appear on the site, add them to [`.vitepress/data/contributors.json`](https://github.com/humanbydefinition/code.textmode.art/blob/main/.vitepress/data/contributors.json).

You'll appear on the [Contributors page](/docs/contributors) when your PR is merged!
If your contribution is an accepted example sketch, it will also count toward the [Leaderboard](/docs/leaderboard) on the next redeploy.

## Tips for success

- **Start small** - Fix a typo or improve a single paragraph first
- **Ask questions** - Open an issue or ask in Discord if you're unsure
- **Read existing docs** - Match the style and tone of existing content
- **Be responsive** - Reply to feedback on your pull request
- **Have fun!** - Contributing should be enjoyable

## Common tasks

### Adding a font

1. Add entry to `.vitepress/data/fonts.json`
2. (Optional) Add preview image to `public/font_previews/`
3. Submit pull request

### Adding a sketch

1. Add entry to `.vitepress/data/sketches.json`
2. Test the sketch works correctly
3. Submit pull request
4. Check the [Leaderboard](/docs/leaderboard) after the next deployment

### Fixing a typo

1. Find the file in `docs/`
2. Make the correction
3. Submit pull request

## Need help?

- **GitHub Issues** - [Open an issue](https://github.com/humanbydefinition/code.textmode.art/issues)
- **Discord** - [Join the community](https://discord.gg/sjrw8QXNks)
- **Email** - Contact the maintainers directly

Thank you for contributing to textmode.js! 🚀
