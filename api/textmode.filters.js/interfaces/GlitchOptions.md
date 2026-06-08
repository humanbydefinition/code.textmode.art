---
layout: doc
editLink: true
title: GlitchOptions
description: Configuration options for the 'glitch' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-06-08
isInterface: true
---

[textmode.filters.js](../index.md) / GlitchOptions

# Interface: GlitchOptions

Configuration options for the `'glitch'` filter.

Digital glitch effect with RGB channel separation, scanlines, and noise.
Creates a corrupted/broken digital signal aesthetic.

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
  t.layers.base.filter('glitch', {
    amount: Math.max(0, 0.2 + wobble * 0.8),
  });
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Properties

| Property | Description |
| ------ | ------ |
| [amount](GlitchOptions/properties/amount.md) | Glitch intensity. |
