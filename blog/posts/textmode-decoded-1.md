---
title: "textmode:decoded #1 - TOWERS"
description: A step-by-step deconstruction of „Towers“ by Andreas Gysin.
date: 2025-03-04
author: humanbydefinition
layout: doc
blogPost: true
slug: textmode-decoded-1
tags:
  - guides
  - fundamentals
prev: false
next: false
---

Whether you are integrating textmode visuals into an existing application or spinning up a prototype from scratch, the setup process follows the same three steps: install, configure, sketch.

## 1. Install the package

```bash
npm install textmode.js
# or
pnpm add textmode.js
```

textmode.js ships as an ES module with full TypeScript declarations. If you are using Vite, the package works without additional configuration. For bundlers that prefer CommonJS, import from the `.cjs` build exposed in the package exports map.

## 2. Create a framebuffer

```ts
import { textmode } from 'textmode.js'

const tm = textmode.create({
  font: 'ibm_vga_9x16',
  columns: 120,
  rows: 60,
  parent: document.querySelector('#canvas')!,
})
```

The `create` helper wires up a framebuffer and a render loop. Adjust the `columns` and `rows` to control resolution, and provide a DOM element that will host the `<canvas>` element.

## 3. Draw your first sketch

```ts
tm.draw(() => {
  tm.clear()
  tm.charColor(0, 190, 255)
  tm.text(`FPS: ${Math.round(tm.fps)}`)
  tm.cursor(0, 2)
  tm.text('textmode.js says hello!')
})
```

`draw` accepts a callback that runs each frame. The textmode runtime manages state between frames, so you can focus on the ASCII art you want to generate.

## What to explore next

- Browse the [interactive examples](/docs/examples) and remix them in the browser.
- Review the [API reference](/api/) for lower-level access to textures and glyph data.
- Join the [community Discord](https://discord.gg/sjrw8QXNks) to share sketches, ask questions, and see what other artists are building.

Have a tutorial request or feedback? Open an issue on [GitHub](https://github.com/humanbydefinition/textmode.js/issues) and we will tackle it in an upcoming release.
