---
title: Changelog
---

# Changelog

All notable changes to `textmode.js` are documented here. For full details, see the [GitHub releases page](https://github.com/humanbydefinition/textmode.js/releases).

## 0.3.1 - *(2025-09-27)*

- Rolled out full touch event handling across taps, swipes, pinches, rotates, and raw touch streams. See the refreshed [event handling guide](/docs/events) for the full API surface.
- Introduced [`textmodifier.cursor`](/api/classes/Textmodifier#cursor) so sketches can adjust the canvas cursor dynamically for drawing, selection, or custom UI states.
- Experimental: [`charColor`](/api/classes/Textmodifier#charcolor) and [`cellColor`](/api/classes/Textmodifier#cellcolor) now accept an `alpha` component.

## 0.3.0 - *(2025-09-22)*

- Added keyboard and mouse input events, paving the way for interactive sketches *(touch input planned next)*.
- Introduced offscreen framebuffers plus an image importer with adjustable brightness conversion, both drawable through [`textmodifier.image`](/api/classes/Textmodifier#image).
    - Enables multi-stage shader workflows and feedback loops on top of the new framebuffer pipeline.
- Shipped an overlay mode that converts existing `<canvas>` or `<video>` sources to textmode, including the realtime [`textmodifier.overlay`](/api/classes/Textmodifier#overlay) helper.
- Added `WOFF` font format support for custom fonts in addition to `TTF` and `OTF`.
- Updated docs and examples covering events, advanced rendering, and framework integrations.

## 0.2.0 - *(2025-09-13)*

- First public release of `textmode.js`, delivering a zero-dependency, TypeScript-first creative coding library.
- Published the documentation site, examples, and the dedicated web editor at [editor.textmode.art](https://editor.textmode.art).
