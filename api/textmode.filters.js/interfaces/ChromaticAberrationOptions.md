---
layout: doc
editLink: true
title: ChromaticAberrationOptions
description: Configuration options for the 'chromaticAberration' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-06-08
isInterface: true
---

[textmode.filters.js](../index.md) / ChromaticAberrationOptions

# Interface: ChromaticAberrationOptions

Configuration options for the `'chromaticAberration'` filter.

RGB color channel separation effect that simulates lens distortion
found in cheap cameras or creates stylized glitch aesthetics.

## Example

```javascript
const t = textmode.create({
  width: window.innerWidth,
  height: window.innerHeight,
  plugins: [FiltersPlugin],
});

let video;

t.setup(async () => {
  video = await t.loadVideo('https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4');
  video.play();
  video.loop();
  video.characters(' .:-=+*#%@');
});

t.draw(() => {
  t.background(0);
  if (video) {
    t.image(video, t.grid.cols, t.grid.rows);
  }

  const wobble = Math.sin(t.secs * 2);
  t.layers.base.filter('chromaticAberration', {
    amount: 6 + wobble * 4,
    direction: [Math.sin(t.secs), Math.cos(t.secs)],
  });
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Properties

| Property | Description |
| ------ | ------ |
| [amount](ChromaticAberrationOptions/properties/amount.md) | Offset amount in pixels. |
| [direction](ChromaticAberrationOptions/properties/direction.md) | Direction of the color separation as `[x, y]`. |
