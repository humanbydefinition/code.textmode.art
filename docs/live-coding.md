---
title: Live coding
description: "Compare the two primary browser-based live coding surfaces in the textmode.js ecosystem: flok.cc and editor.textmode.art."
---

<script setup>
import { GalleryCard } from '../.vitepress/theme/components/Gallery'
import galleryData from '../.vitepress/data/gallery.json'

const flokItem = {
  id: 'textmode-flok',
  ...galleryData['textmode-flok']
}

const editorItem = {
  id: 'editor-textmode-art',
  ...galleryData['editor-textmode-art']
}
</script>

# Live coding

`textmode.js` currently has two distinct browser-based live coding surfaces:

- [**flok.cc**](/docs/live-coding-flok-cc): a collaborative performance environment where `textmode.js` sits alongside Hydra, Strudel, and other live coding tools.
- [**editor.textmode.art**](/docs/live-coding-editor-textmode-art): a dedicated single-surface live coding app for procedural ASCII synthesis built around `textmode.js` and `textmode.synth.js`.

Both are browser-native, fast to try, and built for playful iteration. ヽ(⌐■_■)ノ♪

## flok.cc

[flok.cc](https://flok.cc/) is a browser-native collaborative live coding environment. The `textmode.js` integration exposes a global `t` [`Textmodifier`](/api/textmode.js/classes/Textmodifier) instance inside a dedicated panel, which makes it possible to perform textmode visuals alongside Hydra, Strudel, Mercury, and other tools in the same session.

<GalleryCard :item="flokItem" />

- Best when you want collaboration, audio-reactive visuals, or cross-tool performance setups.
- Detailed guide: [Live coding with flok.cc](/docs/live-coding-flok-cc)

## editor.textmode.art

[editor.textmode.art](https://editor.textmode.art/) is a dedicated live coding app for procedural ASCII synthesis. It uses `textmode.js` as the rendering core and exposes `textmode.synth.js` globally, so the workflow feels closer to Hydra-style source chaining, but with separate channels for glyphs, glyph color, and cell color.

<GalleryCard :item="editorItem" />

- Best when you want a focused textmode environment with built-in examples, share links, and a stronger editor experience.
- Detailed guide: [Live coding with editor.textmode.art](/docs/live-coding-editor-textmode-art)
