---
layout: doc
editLink: true
title: BloomOptions
description: Configuration options for the 'bloom' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-06-08
isInterface: true
---

[textmode.filters.js](../index.md) / BloomOptions

# Interface: BloomOptions

Configuration options for the `'bloom'` filter.

Creates a glow effect around bright areas of the image. Pixels above
the brightness threshold emit a soft glow that spreads outward.
Perfect for creating neon, glowing text, or dreamy effects.

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
  t.layers.base.filter('bloom', {
    threshold: 0.5,
    intensity: 1.2 + wobble * 0.5,
    radius: 6 + wobble * 2,
  });
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Properties

| Property | Description |
| ------ | ------ |
| [threshold](BloomOptions/properties/threshold.md) | Brightness level above which pixels will glow. |
| [intensity](BloomOptions/properties/intensity.md) | Strength of the glow effect. |
| [radius](BloomOptions/properties/radius.md) | Size of the glow spread in pixels. |
