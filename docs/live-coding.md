---
title: Live coding
description: "Compare the two primary browser-based live coding surfaces in the textmode.js ecosystem: flok.cc and synth.textmode.art."
---

<script setup>
import { GalleryCard } from '../.vitepress/theme/components/Gallery'
import galleryData from '../.vitepress/data/gallery.json'

const flokItem = {
  id: 'textmode-flok',
  ...galleryData['textmode-flok']
}

const synthItem = {
  id: 'synth-textmode-art',
  ...galleryData['synth-textmode-art']
}
</script>

# Live coding

`textmode.js` currently has two distinct browser-based live coding surfaces:

- [**flok.cc**](/docs/live-coding-flok-cc): a collaborative performance environment where `textmode.js` sits alongside Hydra, Strudel, and other live coding tools.
- [**synth.textmode.art**](/docs/live-coding-synth-textmode-art): a dedicated single-surface live coding app for procedural ASCII synthesis built around `textmode.js` and `textmode.synth.js`.

## flok.cc

[flok.cc](https://flok.cc/) is a browser-native collaborative live coding environment. The `textmode.js` integration exposes a global `t` [`Textmodifier`](/api/textmode.js/classes/Textmodifier) instance inside a dedicated panel, which makes it possible to perform textmode visuals alongside Hydra, Strudel, Mercury, and other tools in the same session.

<GalleryCard :item="flokItem" />

- Best when you want collaboration, audio-reactive visuals, or cross-tool performance setups.
- Detailed guide: [Live coding with flok.cc](/docs/live-coding-flok-cc)

## synth.textmode.art

[synth.textmode.art](https://synth.textmode.art/) is a dedicated live coding app for procedural ASCII synthesis. It uses `textmode.js` as the rendering core and exposes `textmode.synth.js` globally, so the workflow feels closer to Hydra-style source chaining, but with separate channels for glyphs, glyph color, and cell color.

<GalleryCard :item="synthItem" />

- Best when you want a focused textmode environment with built-in examples, share links, and a stronger editor experience.
- Detailed guide: [Live coding with synth.textmode.art](/docs/live-coding-synth-textmode-art)
