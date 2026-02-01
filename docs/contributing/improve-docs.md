---
title: Improve Documentation
description: A guide on how to improve the textmode.js documentation, from fixing typos to writing new guides and adding code examples.
---

# Improve documentation

Clear, accurate documentation is essential for any open-source project. Your contributions to the docs help everyone using textmode.js!

## Types of documentation improvements

### 🔍 Fix typos and errors

Small fixes make a big difference:

- **Spelling and grammar** - Correct typos and grammatical errors
- **Broken links** - Fix or update links to external resources
- **Code errors** - Fix incorrect code examples
- **Outdated information** - Update content that's no longer accurate

These contributions are always welcome and don't require deep technical knowledge!

### 📚 Improve explanations

Help make concepts clearer:

- **Clarify confusing sections** - Rewrite explanations that are hard to understand
- **Add missing context** - Provide background information where needed
- **Improve structure** - Reorganize content for better flow
- **Simplify complex topics** - Break down difficult concepts

### 💻 Add code examples

Examples are one of the best ways to learn:

- **Add missing examples** - Illustrate concepts that lack code samples
- **Expand existing examples** - Add variations or alternative approaches
- **Create step-by-step tutorials** - Guide users through complete workflows
- **Add inline comments** - Explain what code does and why

### 🎯 Enhance existing pages

Make pages more helpful:

- **Add diagrams or visuals** - Illustrate concepts with images or diagrams
- **Include tips and warnings** - Highlight important information
- **Cross-reference related topics** - Link to relevant sections
- **Add real-world use cases** - Show practical applications

## How to contribute

### Small fixes

For typos, broken links, or minor corrections:

1. Click **"Edit this page on GitHub"** at the bottom of any doc page
2. Make your changes directly in the GitHub editor
3. Submit a pull request with a brief description

### Larger improvements

For significant changes or additions:

1. Fork the [code.textmode.art repository](https://github.com/humanbydefinition/code.textmode.art)
2. Clone your fork locally
3. Make your changes in the `docs/` folder
4. Test locally by running `npm run dev`
5. Submit a pull request with a clear description of your changes

## Documentation structure

```
docs/
├── introduction.md        # Getting started with textmode.js
├── installation.md        # Setup and installation
├── fundamentals.md        # Core concepts
├── events.md              # Event handling
├── fonts.md               # Working with fonts
├── loadables.md           # Images and videos
├── advanced.md            # Advanced features
├── framework-integration.md # Framework integration
├── exporting.md           # Exporting content
├── examples.md            # Example showcase
├── contributing/          # Contributing guides (this section)
└── examples/              # Detailed example pages
```

## Writing guidelines

When contributing to documentation:

### Style

- **Write conversationally** - Be friendly and approachable
- **Use active voice** - "Click the button" vs "The button should be clicked"
- **Keep it concise** - Respect the reader's time
- **Use proper formatting** - Code blocks, headings, lists, etc.

### Code examples

- **Make them runnable** - Ensure examples work as-is
- **Add comments** - Explain non-obvious code
- **Keep them focused** - One concept per example
- **Test them** - Verify they work correctly

### Technical accuracy

- **Verify information** - Double-check technical details
- **Link to API docs** - Reference the API when discussing methods/properties
- **Stay up-to-date** - Ensure content matches the current version

## Testing your changes

Before submitting, test your changes locally:

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build the site to check for errors
npm run build
```

The site will be available at `http://localhost:4175`.

## Questions?

If you're unsure about anything, feel free to:

- Open an [issue](https://github.com/humanbydefinition/code.textmode.art/issues) for questions
- Join the [Discord community](https://discord.gg/sjrw8QXNks) for help
- Ask in your pull request - we're happy to provide guidance!

Thank you for helping make the textmode.js documentation better! 📝
