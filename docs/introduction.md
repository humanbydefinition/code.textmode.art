---
title: Introduction
description: Introduction to textmode.js, a creative-coding library for real-time ASCII and textmode graphics in the browser.
---

# textmode.js

`textmode.js` is a free, lightweight, and framework-agnostic creative‑coding library for real‑time ASCII and textmode graphics in the browser. It gives you a grid‑based drawing API on top of a modern [`WebGL2`](https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext) pipeline, so you can focus on ideas instead of low‑level rendering details.

The library is designed to be approachable for all skill levels. Whether you're just getting into creative coding or building production systems, `textmode.js` aims to feel familiar if you know tools like Processing or p5.js, while still exposing advanced features when you need them.


## What can you build with it?

`textmode.js` is built for creative, text‑driven visuals. Common use cases include:

- Generative sketches, demos, and art installations
- Retro/terminal‑inspired games and UI mockups
- Audio‑reactive visualizers and VJ setups
- Live coding performances and streaming overlays
- Experimental web experiences that lean into text and glyphs

If you can imagine it as a grid of characters and colors, you can probably build it with `textmode.js`.


## How it feels to use

At its core, `textmode.js` gives you:

- A **grid of cells** instead of pixels, exposed via `t.grid.cols` and `t.grid.rows`
- A single **animation loop** (`t.draw(() => { ... })`) where you render each frame
- A set of **drawing primitives** (`rect`, `line`, `ellipse`, `triangle`, etc.) that fill cells
- **Cell properties** like `char`, `charColor`, and `cellColor` to control glyphs and colors
- Familiar **state helpers** like `push`/`pop`, `translate`, and `rotate` for composing scenes

You write straightforward JavaScript or TypeScript, and `textmode.js` handles batching, instancing, and GPU details behind the scenes.


## Key capabilities

Here’s a high‑level overview of what the library offers. Later pages dive into each area in detail.

- Real‑time ASCII/textmode rendering with a simple drawing API
- Font system with runtime font loading and dynamic sizing *(supports TTF/OTF/WOFF)*
- Custom filter shaders in [`GLSL ES 3.00`](https://registry.khronos.org/OpenGL/specs/es/3.0/GLSL_ES_Specification_3.00.pdf) for advanced effects
- Flexible exporting: TXT, SVG, raster images *(PNG/JPG/WebP)*, animated GIFs, and video *(WebM)*
- Animation loop control: `frameRate`, `loop`/`noLoop`, `redraw`, `frameCount`, and more
- Load images and videos as sources for textmode conversion
- Offscreen framebuffer support for advanced and multi‑pass workflows
- Dynamic layering system with blend modes and opacity for multi‑layered textmode scenes
- Framework‑agnostic design for use with any canvas‑based framework or library
- Zero dependencies, written in TypeScript, with comprehensive type definitions

:::info
Actual performance depends on your scene complexity and the target device. For complex work, consider authoring filter shaders to keep heavy effects on the GPU.
:::


## Acknowledgments

`textmode.js` ships with a custom-made TypeScript rewrite and stripped-down version of [`Typr.js`](https://github.com/photopea/Typr.js) by [**Photopea**](https://github.com/photopea) for font parsing and glyph extraction, containing only the necessary components for our use case. `Typr.js` is licensed under the [**MIT License**](https://github.com/photopea/Typr.js/blob/main/LICENSE).

The non-minified version of `textmode.js` ships with [`UrsaFont`](https://ursafrank.itch.io/ursafont) as the default font, created by [**UrsaFrank**](https://ursafrank.itch.io/). This font is available under the [**CC0 (Creative Commons Zero) license**](https://creativecommons.org/publicdomain/zero/1.0/).
